import { Cookies } from 'react-cookie-consent';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const getCookiePreferences = (): CookiePreferences => {
  const consent = Cookies.get("pivotpoint-cookie-consent");
  
  if (consent === "all") {
    return {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
  } else if (consent === "custom") {
    return {
      essential: true,
      analytics: Cookies.get("pivotpoint-cookie-analytics") === "true",
      marketing: Cookies.get("pivotpoint-cookie-marketing") === "true",
      preferences: Cookies.get("pivotpoint-cookie-preferences") === "true",
    };
  } else if (consent === "essential") {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }
  
  // Default - no consent given yet
  return {
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  };
};

export const hasAnalyticsConsent = (): boolean => {
  return getCookiePreferences().analytics;
};

export const hasMarketingConsent = (): boolean => {
  return getCookiePreferences().marketing;
};

export const hasPreferencesConsent = (): boolean => {
  return getCookiePreferences().preferences;
};

export const canLoadGoogleAnalytics = (): boolean => {
  return hasAnalyticsConsent();
};

export const canLoadAffiliateTracking = (): boolean => {
  return hasMarketingConsent();
};

// Function to load Google Analytics conditionally
export const loadGoogleAnalytics = (measurementId: string) => {
  if (!canLoadGoogleAnalytics()) return;
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  
  // Initialize Google Analytics
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).dataLayer = (window as any).dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function gtag(...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push(args);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', measurementId, {
    cookie_flags: 'SameSite=None;Secure'
  });
};

// Function to track events conditionally
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = (eventName: string, parameters?: any) => {
  if (!canLoadGoogleAnalytics()) return;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).gtag) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('event', eventName, parameters);
  }
};
