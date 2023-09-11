"use client";

import { useState, useEffect, useRef } from "react";
import { ModeToggle } from "@/components/dark-mode-toggle";
import NavItem from "./nav-item";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (event: MouseEvent): void => {
      if (menuRef.current) {
        if (!menuRef.current.contains(event.target as Node)) {
          setOpen(false);
          console.log(menuRef.current);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div ref={menuRef}>
      <div
        data-visible={`${open ? "true" : "false"}`}
        className="absolute left-0 top-[137px] z-40 flex w-full -translate-y-[calc(100%+137px)] items-center justify-center border-b border-ring bg-background py-12 data-[visible=true]:translate-y-0 lg:hidden"
      >
        <ul className="flex flex-col items-center justify-center gap-4 text-center">
          <NavItem name={"Alchemy Shop"} link={"/creators/alchemy-shop"} />
          <NavItem name={"Blacksmith"} link={"/creators/blacksmith-shop"} />
          <NavItem name={"General Shop"} link={"/creators/general-shop"} />
          <NavItem name={"Magic Shop"} link={"/creators/magic-shop"} />
          <NavItem name={"Stables"} link={"/creators/stables-shop"} />
          <NavItem name={"Tavern"} link={"/creators/tavern-shop"} />
          <li className="rounded-full border border-primary pr-6"></li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
      <button
        className="z-50 block lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
