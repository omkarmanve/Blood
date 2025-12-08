import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900">
      <Header />

      {/* HERO SECTION */}
      <section className="relative mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-800" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 w-[520px] h-[520px] rounded-full bg-black/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-5">
                <Sparkles className="w-4 h-4" />
                We respond fast
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Get in Touch
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                We’re here to support you with donation guidance, emergency
                requests, or camp organization. Reach out anytime.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-black/10 hover:bg-emerald-50 transition-all"
                >
                  Send a Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+919000000000"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/5 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Call Emergency Helpline
                </a>
              </div>
            </div>

            {/* Right quick info card */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-2xl shadow-black/20 text-white">
              <h3 className="text-xl font-semibold mb-5">Contact Overview</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Emergency Helpline</p>
                    <p className="text-white/80 text-sm">+91 90000 00000</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Support Email</p>
                    <p className="text-white/80 text-sm">
                      support@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-white/80 text-sm">
                      Navi Mumbai, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white px-5 py-4 text-emerald-700 font-semibold flex items-center justify-between">
                <span>Avg response time</span>
                <span className="text-xl">~10 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            {
              icon: Phone,
              title: "Emergency Helpline",
              lines: ["+91 90000 00000", "Available 24/7"],
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["support@example.com", "info@example.com"],
            },
            {
              icon: MapPin,
              title: "Head Office",
              lines: ["Navi Mumbai, Maharashtra", "India - 410206"],
            },
          ].map((c, i) => (
            <div
              key={i}
              className="text-center rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <div className="text-gray-600 space-y-1">
                {c.lines.map((l, idx) => (
                  <p key={idx}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-start">
          {/* Left Content */}
          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-7 md:p-9">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you need blood urgently, want to donate, or want to
              organize a camp — we’re here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Phone className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600 text-sm">+91 90000 00000</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Mail className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm">
                    support@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <MapPin className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600 text-sm">
                    Navi Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Globe, label: "Website" },
              ].map((s, i) => (
                <button
                  key={i}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center hover:bg-emerald-100 transition"
                >
                  <s.icon className="w-5 h-5 text-emerald-700" />
                </button>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form className="bg-white p-7 md:p-9 rounded-3xl border border-gray-100 shadow-lg space-y-5">
            <div>
              <label className="font-medium text-gray-700">Full Name</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition">
                <User className="text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-medium text-gray-700">Email Address</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition">
                <Mail className="text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-medium text-gray-700">Phone Number</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition">
                <Phone className="text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full bg-transparent p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-medium text-gray-700">Message</label>
              <div className="mt-2 flex gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition">
                <MessageSquare className="text-gray-500 w-5 h-5 mt-3" />
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-transparent p-3 outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-indigo-700 text-white py-3.5 rounded-xl font-semibold hover:opacity-95 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
            <iframe
              title="map"
              className="w-full h-96"
              src="https://maps.google.com/maps?q=Navi%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
