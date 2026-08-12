"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Gratitude Builds home">
        <Image
          className="brand-logo"
          src="/brand/gratitude-builds-logo.png"
          alt="Gratitude Builds — Product Builder"
          width={1018}
          height={331}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
              {item.label}
            </Link>
          );
        })}
        <Link className="nav-contact" href="/contact">
          Let&apos;s build <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span className="menu-icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <div className="mobile-nav" id="mobile-navigation" data-open={open}>
        <nav aria-label="Mobile navigation">
          {open ? navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          )) : null}
          {open ? <Link href="/contact" onClick={() => setOpen(false)}>
            <span>05</span>
            Let&apos;s build
          </Link> : null}
        </nav>
        <p>Ideas, shaped into products people use.</p>
      </div>
    </header>
  );
}
