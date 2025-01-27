(() => {
    /**
     * Streamform SDK
     * @param {Object} config - Configuration object
     * @param {string} config.token - Authentication token
     * @param {string} [config.apiHost="https://api.streamform.io"] - API host
     * @param {Array<string>} [config.maskPatterns=[]] - Patterns to mask in URLs
     * @param {Array<string>} [config.skipPatterns=[]] - Patterns to skip in URLs
     * @param {boolean} [config.cookieOnIdentify=false] - Set cookie on identify
     */
    function Streamform(config) {
        let localStorageKey = "streamform_vid",
            authToken = config.token,
            apiHost = config.apiHost ?? "https://api.streamform.io",
            maskPatterns = config.maskPatterns ?? [],
            skipPatterns = config.skipPatterns ?? [],
            setCookieOnIdentify = config.cookieOnIdentify ?? false,
            visitorId = localStorage.getItem(localStorageKey),
            userFields = {},
            currentPath = null,
            initialReferrer = sessionStorage.getItem("streamform:referrer") ? "" : document.referrer;

        // Do Not Track methods
        function isDoNotTrackEnabled() {
            return localStorage.getItem("streamform-do-not-track") === "1";
        }

        function enableDoNotTrack() {
            localStorage.setItem("streamform-do-not-track", "1");
        }

        // Page tracking methods
        function initializePageTracking() {
            let originalPushState = history.pushState;
            history.pushState = function (...args) {
                originalPushState.apply(this, args);
                trackPageView();
            };

            addEventListener("popstate", trackPageView);

            function handleVisibilityChange() {
                if (!currentPath && document.visibilityState === "visible") {
                    trackPageView();
                }
            }

            if (document.visibilityState !== "visible") {
                document.addEventListener("visibilitychange", handleVisibilityChange);
            } else {
                trackPageView();
            }

            setupEventListeners();
        }

        function enableAutoPageView(autoEnable = false) {
            if (config.autoPageView && !autoEnable) {
                return;
            }
            config.autoPageView = true;
            initializePageTracking();
        }

        function sendMessageRequest(eventData) {
            sendRequest(`${apiHost}/message`, {
                token: authToken,
                deviceTimestamp: new Date().toISOString(),
                device: {
                    language: navigator.language || navigator.userLanguage,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
                ...eventData
            }, true);
        }

        function getUTMParameters() {
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = {};
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
                if (urlParams.has(param)) {
                    utmParams[param] = urlParams.get(param);
                }
            });
            return Object.keys(utmParams).length > 0 ? utmParams : null;
        }

        function trackPageView() {
            if (currentPath === window.location.pathname) {
                return;
            }

            currentPath = window.location.pathname;
            let sanitizedPath = sanitizePath(window.location.pathname);

            if (sanitizedPath) {
                if (!initialReferrer || initialReferrer.includes(location.hostname)) {
                    initialReferrer = null;
                }

                const utmParams = getUTMParameters();
                const pageData = {
                    pathname: sanitizedPath + window.location.search,
                    referrer: initialReferrer,
                    pageTitle: document.title
                };

                if (utmParams) {
                    pageData.utmParams = utmParams;
                }

                sendMessageRequest({
                    eventName: "page",
                    eventType: "navigation",
                    origin: window.location.origin,
                    page: pageData
                });

                if (initialReferrer) {
                    initialReferrer = null;
                    sessionStorage.setItem("streamform:referrer", "set");
                }
            }
        }

        // Event tracking methods
        function trackEvent(eventName, eventData) {
            let sanitizedPath = sanitizePath(window.location.pathname);

            if (sanitizedPath) {
                sendMessageRequest({
                    eventName: eventName,
                    eventType: "track",
                    origin: window.location.origin,
                    page: {
                        pathname: sanitizedPath + window.location.search,
                        referrer: initialReferrer,
                        pageTitle: document.title,
                    },
                    data: eventData
                });
            }
        }

        function setupEventListeners() {
            document.addEventListener("click", event => {
                let targetElement = event.target;

                if (!targetElement || ((targetElement.tagName === "INPUT" || targetElement.tagName === "SELECT" || targetElement.tagName === "TEXTAREA") && targetElement.type !== "submit")) {
                    return;
                }

                while (targetElement && !targetElement?.hasAttribute("data-sf-event")) {
                    targetElement = targetElement.parentElement;
                }

                if (!targetElement) {
                    return;
                }

                let eventName = targetElement.getAttribute("data-sf-event");

                if (!eventName) {
                    return;
                }

                let eventData = {};

                for (let attribute of Array.from(targetElement.attributes)) {
                    if (attribute.name.startsWith("data-sf-event-") && attribute.value) {
                        eventData[attribute.name.slice(14)] = attribute.value;
                    }
                }

                if (targetElement.tagName === "FORM") {
                    let formElements = Array.from(targetElement.elements);

                    for (let element of formElements) {
                        if (element.type !== "password" && element.name && element.value) {
                            eventData[element.name] = element.value;
                        }
                    }
                }

                trackEvent(eventName, eventData);
            });
        }

        // Utility methods
        function sanitizePath(path) {
            let skipRegexPatterns = skipPatterns.map(pattern => new RegExp(`^${pattern.replace(/\*/g, "[^/]+")}$`)),
                maskRegexPatterns = maskPatterns.map(pattern => new RegExp(`^${pattern.replace(/\*/g, "[^/]+")}$`));

            if (skipRegexPatterns.some(regex => regex.test(path))) {
                return null;
            }

            for (let i = 0; i < maskPatterns.length; i++) {
                if (maskRegexPatterns[i].test(path)) {
                    return maskPatterns[i];
                }
            }

            return path;
        }

        function sendRequest(url, data, useBeacon = true) {
            if (isDoNotTrackEnabled()) {
                return Promise.resolve();
            }

            let payload = { ...data };

            if (userFields.userId) {
                payload.visitorId = userFields.userId;
            }

            if (visitorId) {
                payload.visitorId = visitorId;
            }

            if (useBeacon && navigator?.sendBeacon) {
                navigator.sendBeacon(url, JSON.stringify(payload));
                return Promise.resolve();
            } else {
                return fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload),
                    keepalive: true
                });
            }
        }

        function updateUserFields(fields) {
            userFields = { ...userFields, ...fields };

            sendRequest(`${apiHost}/s/su`, {
                token: authToken,
                fields: userFields
            }, false).then(async response => {
                if (response) {
                    let result = await response.json();

                    if (result?.visitorId) {
                        visitorId = result.visitorId;
                        if (setCookieOnIdentify) {
                            localStorage.setItem(localStorageKey, visitorId);
                        }
                    }
                }
            });
        }

        return {
            track: trackEvent,
            page: trackPageView,
            setUser: updateUserFields,
            enableAutoPageView: enableAutoPageView,
            doNotTrack: enableDoNotTrack
        };
    }

    if (!window.streamform) {
        let token = document.currentScript?.getAttribute("data-token"),
            skipPatterns = document.currentScript?.getAttribute("data-skip-patterns")?.split(",") || [],
            maskPatterns = document.currentScript?.getAttribute("data-mask-patterns")?.split(",") || [],
            autoPageView = document.currentScript?.getAttribute("data-auto-page-view") !== "false",
            apiHost = document.currentScript?.getAttribute("data-api-host"),
            cookieOnIdentify = document.currentScript?.getAttribute("data-cookie-on-identify") === "true",
            tracker = Streamform({
                token,
                skipPatterns,
                maskPatterns,
                autoPageView,
                apiHost,
                cookieOnIdentify
            });

        window.streamform = tracker;

        if (autoPageView) {
            tracker.enableAutoPageView(true);
        }
    }
})();
