"use client";

import { useState, useEffect } from 'react';
import { Cookies } from 'react-cookie-consent';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export default function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load current preferences from cookies
    const currentConsent = Cookies.get("pivotpoint-cookie-consent");
    if (currentConsent === "all") {
      setPreferences({
        essential: true,
        analytics: true,
        marketing: true,
        preferences: true,
      });
    } else if (currentConsent === "essential") {
      setPreferences({
        essential: true,
        analytics: false,
        marketing: false,
        preferences: false,
      });
    }
  }, []);

  const handleSavePreferences = () => {
    const { analytics, marketing, preferences: prefCookies } = preferences;
    
    if (analytics || marketing || prefCookies) {
      Cookies.set("pivotpoint-cookie-consent", "custom", { expires: 365 });
      Cookies.set("pivotpoint-cookie-analytics", analytics.toString(), { expires: 365 });
      Cookies.set("pivotpoint-cookie-marketing", marketing.toString(), { expires: 365 });
      Cookies.set("pivotpoint-cookie-preferences", prefCookies.toString(), { expires: 365 });
    } else {
      Cookies.set("pivotpoint-cookie-consent", "essential", { expires: 365 });
    }
    
    setIsOpen(false);
    
    // Reload the page to apply new settings
    window.location.reload();
  };

  const handleToggle = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Can't disable essential cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-600 hover:text-[#1a237e] underline"
      >
        Cookie Settings
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1a237e]">Cookie Preferences</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Manage your cookie preferences. Essential cookies are required for the website to function and cannot be disabled.
          </p>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#1a237e]">Essential Cookies</h3>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={preferences.essential}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-12 h-6 bg-[#1a237e] rounded-full relative">
                    <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#1a237e]">Analytics Cookies</h3>
                <button
                  onClick={() => handleToggle('analytics')}
                  className="relative"
                >
                  <div className={`w-12 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-[#1a237e]' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.analytics ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#1a237e]">Marketing/Advertising Cookies</h3>
                <button
                  onClick={() => handleToggle('marketing')}
                  className="relative"
                >
                  <div className={`w-12 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-[#1a237e]' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns and affiliate partnerships.
              </p>
            </div>

            {/* Preference Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#1a237e]">Preference Cookies</h3>
                <button
                  onClick={() => handleToggle('preferences')}
                  className="relative"
                >
                  <div className={`w-12 h-6 rounded-full transition-colors ${preferences.preferences ? 'bg-[#1a237e]' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.preferences ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                These cookies remember your preferences and choices to provide a more personalized experience.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePreferences}
              className="flex-1 px-4 py-2 bg-[#1a237e] text-white rounded-lg hover:bg-[#1a237e]/90 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
