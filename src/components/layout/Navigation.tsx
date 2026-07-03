"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const mainNavLinks = [{ href: "/", label: "Home" }, ...navLinks];

const scrollToSection = (href: string) => {
  if (!href.startsWith("/#")) return;
  const id = href.slice(2);
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (pathname === "/" && hash) {
      scrollToSection(`/${hash}`);
    }
  }, [pathname, hash]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && !hash;
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname.startsWith(href);
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMobileOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      event.preventDefault();
      window.history.pushState(null, "", href);
      setHash(href.slice(1));
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-beige/90 shadow-soft backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav
          className="container-wide flex items-center justify-between py-5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center"
          aria-label="Main navigation"
        >
          <Logo className="shrink-0 md:justify-self-start" />

          {/* Center nav — desktop */}
          <div className="hidden items-center justify-center gap-4 md:flex lg:gap-5 xl:gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={cn(
                  "whitespace-nowrap text-xs font-medium transition-colors lg:text-sm",
                  isActive(link.href)
                    ? "font-semibold text-black"
                    : "text-black75 hover:text-black",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA — desktop */}
          <div className="hidden justify-self-end md:block">
            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-hero inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-soft-lg"
            >
              Download
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-beige md:hidden"
          >
            <div className="flex items-center justify-between px-page py-4">
              <Logo onClick={() => setMobileOpen(false)} />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-6 px-page pt-8">
              {mainNavLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-fraunces text-3xl",
                      isActive(link.href)
                        ? "font-semibold text-black"
                        : "text-black",
                    )}
                    onClick={(event) => handleNavClick(event, link.href)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient-hero flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Download Storia
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
