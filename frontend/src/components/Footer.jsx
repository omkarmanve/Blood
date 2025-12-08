import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Mission", path: "/mission" },
    { name: "Success Stories", path: "/stories" },
    { name: "News & Updates", path: "/news" },
  ];

  const donorResources = [
    { name: "Become a Donor", path: "/register/donor" },
    { name: "Eligibility Criteria", path: "/eligibility" },
    { name: "Donation Process", path: "/process" },
    { name: "Donor Benefits", path: "/benefits" },
  ];

  const hospitalResources = [
    { name: "Partner with Us", path: "/register/facility" },
    { name: "Blood Request", path: "/request-blood" },
    { name: "Inventory Management", path: "/inventory" },
    { name: "Emergency Protocol", path: "/emergency" },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* soft top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-600 shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">BloodConnect</h2>
                <p className="text-emerald-200 text-sm">Life Saver Network</p>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed mb-6">
              Connecting compassionate donors with those in need through a
              secure blood bank network. Together, we save lives faster.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-5 h-5 text-slate-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Donors */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full" />
              For Donors
            </h3>
            <ul className="space-y-3">
              {donorResources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Hospitals + Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full" />
              For Hospitals
            </h3>
            <ul className="space-y-3">
              {hospitalResources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-7 space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Emergency Hotline: +91 90000 00000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>help@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span>Nationwide Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} BloodConnect. All rights reserved.
              <span className="hidden sm:inline">
                {" "}
                Saving lives through technology.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Donate Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/register/donor"
          className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-indigo-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <Heart className="w-5 h-5" />
          <span>Donate Now</span>
          <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
