"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Button
        size="icon"
        onClick={backToTop}
        className={`fixed bottom-5 right-5 z-50 rounded-full ${
          showButton ? "block" : "hidden"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="m-auto h-6 w-6 text-white"
        >
          <path d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" />
        </svg>
      </Button>
    </>
  );
}
