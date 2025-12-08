import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const WEBSITE_NAME = import.meta.env.VITE_WEBSITE_NAME;

export default function Header({ currentUser }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const authLinks = currentUser
    ? [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Profile", path: "/profile" },
      ]
    : [
        { name: "Login", path: "/login" },
        { name: "Register as Donor", path: "/register/donor" },
        { name: "Register as Facility", path: "/register/facility" },
      ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="hidden md:block bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs font-medium">
          <p className="opacity-95">
            24/7 Emergency Support • Verified Donors • Real-time Inventory
          </p>
          <p className="opacity-95">
            Helpline: <span className="font-semibold">+91 90000 00000</span>
          </p>
        </div>
      </div>

      {/* Floating glass main header */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "pt-2 md:pt-3" : "pt-3 md:pt-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`relative rounded-2xl border bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300
              ${
                scrolled
                  ? "border-emerald-100 shadow-lg"
                  : "border-slate-100 shadow-md"
              }`}
          >
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

            <div className="relative flex items-center justify-between h-16 md:h-18 px-3 sm:px-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    {/* droplet */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M12 2C12 2 6 8 6 12a6 6 0 0012 0c0-4-6-10-6-10z" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-white" />
                </div>

                <div className="leading-tight">
                  <h1 className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {WEBSITE_NAME}
                  </h1>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Blood Management System
                  </p>
                </div>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-2">
                {/* Main links in pill group */}
                <div className="flex items-center gap-1 bg-slate-50 rounded-full p-1 border border-slate-200">
                  {navLinks.map((link) => {
                    const active = isActiveLink(link.path);
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200
                          ${
                            active
                              ? "bg-white text-emerald-800 shadow-sm"
                              : "text-slate-700 hover:text-emerald-700 hover:bg-white"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Auth links */}
                <div className="flex items-center gap-2 ml-3">
                  {authLinks.map((link) => {
                    const isRegister =
                      link.name.toLowerCase().includes("register");
                    const active = isActiveLink(link.path);

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200
                          ${
                            isRegister
                              ? "bg-gradient-to-r from-emerald-600 to-indigo-700 text-white shadow-md hover:shadow-lg hover:opacity-95 hover:-translate-y-0.5"
                              : active
                              ? "text-emerald-800 bg-emerald-50"
                              : "text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden w-10 h-10 grid place-items-center rounded-xl transition
                  ${
                    mobileOpen
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                      mobileOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                  />
                  <span
                    className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                      mobileOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                      mobileOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile drop panel */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-3 pb-4">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-2">
                  {/* main links */}
                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const active = isActiveLink(link.path);
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-4 py-3 rounded-xl text-base font-semibold transition
                            ${
                              active
                                ? "bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500"
                                : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                            }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="my-2 h-px bg-slate-200" />

                  {/* auth links */}
                  <div className="space-y-2">
                    {authLinks.map((link) => {
                      const isRegister =
                        link.name.toLowerCase().includes("register");
                      const active = isActiveLink(link.path);

                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-4 py-3 rounded-xl text-base font-semibold transition text-center
                            ${
                              isRegister
                                ? "bg-gradient-to-r from-emerald-600 to-indigo-700 text-white shadow-md hover:opacity-95"
                                : active
                                ? "bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500 text-left"
                                : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                            }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* small trust chips */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] font-semibold">
                  {["Verified Donors", "24/7 Support", "Fast Requests"].map(
                    (t) => (
                      <div
                        key={t}
                        className="text-center rounded-xl bg-slate-50 border border-slate-200 py-2 text-slate-700"
                      >
                        {t}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* /mobile panel */}
          </div>
        </div>
      </div>
    </header>
  );
}
