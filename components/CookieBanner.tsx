/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "./lib/cookieStorage";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | undefined>(
    undefined,
  );

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
      className={`fixed right-0 bottom-0 left-0 z-50 mx-auto my-10 flex max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 shadow sm:flex-row md:max-w-(--breakpoint-sm) md:px-4 ${cookieConsent === undefined || cookieConsent !== null ? "hidden" : "flex"}`}
    >
      <div className="text-cente text-white">
        <h3 className="mb-2 text-lg font-semibold">Cookie Policy</h3>
        <p>
          Tum.ai uses cookies to enhance your experience, including essential
          functions like logging in, saving preferences, and personalizing
          content. We also use Google Analytics to monitor site usage and
          improve our services. If you continue to use this site, you agree that
          we can place these types of cookies on your device. For more
          information, please review our{" "}
          <Link
            href="https://www.tum-ai.com/data-privacy"
            className="text-blue-300"
          >
            Data Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-md border-gray-900 px-5 py-2 text-gray-300"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="rounded-lg bg-gray-900 px-5 py-2 text-white"
          onClick={() => setCookieConsent(true)}
        >
          <p>Allow Cookies</p>
        </button>
      </div>
    </div>
  );
}
