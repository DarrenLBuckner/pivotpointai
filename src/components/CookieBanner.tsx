"use client";

import { useState, useEffect } from 'react';
import { Cookies } from 'react-cookie-consent';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = Cookies.get("pivotpoint-cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    // Set cookie to remember user's choice
    Cookies.set("pivotpoint-cookie-consent", "all", { expires: 365 });
    setShowBanner(false);
    
    // Initialize analytics and other tracking here
    if (typeof window !== 'undefined') {
      // Google Analytics or other tracking
      console.log("All cookies accepted - enabling tracking");
    }
  };

  const handleAcceptEssential = () => {
    // Set cookie to remember user's choice
    Cookies.set("pivotpoint-cookie-consent", "essential", { expires: 365 });
    setShowBanner(false);
    
    console.log("Essential cookies only - disabling non-essential tracking");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#1a237e] shadow-lg">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#1a237e] mb-2">
              We use cookies to enhance your experience
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use essential cookies to make our site work. We&apos;d also like to set optional analytics and marketing cookies to help us improve and personalize your experience. 
              You can manage your preferences at any time.{" "}
              <Link href="/cookies" className="text-[#1a237e] hover:underline font-medium">
                Learn more about our cookie policy
              </Link>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={handleAcceptEssential}
              className="px-4 py-2 border-2 border-[#1a237e] text-[#1a237e] rounded-lg hover:bg-[#1a237e] hover:text-white transition-colors duration-200 font-medium text-sm"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-[#1a237e] text-white rounded-lg hover:bg-[#1a237e]/90 transition-colors duration-200 font-medium text-sm"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
