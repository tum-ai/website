/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "./lib/cookieStorage";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);
  
  useEffect(() => {
    if (typeof window.gtag === "function") {
      const newValue = cookieConsent ? "granted" : "denied";
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
    
    if (cookieConsent === undefined) return;
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-(--breakpoint-sm)
                  fixed bottom-0 left-0 right-0 
                  flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                 bg-gray-700 rounded-lg shadow z-50
                  ${(cookieConsent === undefined || cookieConsent !== null) ? "hidden" : "flex"}`}
    >
      <div className="text-cente text-white">
        <h3 className="text-lg font-semibold mb-2">Cookie Policy</h3>
        <p>
          Tum.ai uses cookies to enhance your experience, including essential functions like logging in, saving preferences, and personalizing content. We also use Google Analytics to monitor site usage and improve our services. If you continue to use this site, you agree that we can place these types of cookies on your device. For more information, please review our <Link href="https://www.tum-ai.com/data-privacy" className="text-blue-300">Data Privacy Policy</Link>.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          <p>Allow Cookies</p>
        </button>
      </div>
    </div>
  );
}