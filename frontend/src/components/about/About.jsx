import React from "react";
import {
  Heart,
  Users,
  Shield,
  Award,
  Target,
  Droplet,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";

const AboutUs = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Lives Saved" },
    { icon: Droplet, number: "100,000+", label: "Donations" },
    { icon: MapPin, number: "500+", label: "Camps Organized" },
    { icon: Shield, number: "99.8%", label: "Safety Rate" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Human kindness saves lives. Every donor is a hero in someone’s story.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Strict medical screening + quality protocols for donors and recipients.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "A trusted network where people show up for each other—fast.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "High standards in collection, storage, and distribution—always.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face",
      bio: "15+ years in hematology and transfusion medicine",
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Head",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      bio: "Expert in healthcare logistics and camp management",
    },
    {
      name: "Priya Sharma",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face",
      bio: "Focused on donor relationships and awareness",
    },
    {
      name: "David Kim",
      role: "Technology Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
      bio: "Building a seamless digital experience",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900">
      <Header />

      {/* HERO */}
      <section className="relative mt-20 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-800" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 w-[520px] h-[520px] rounded-full bg-black/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Trusted Blood Network
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Saving Lives,
                <span className="block text-white/90">
                  One Drop at a Time
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
                We connect verified blood donors with hospitals and patients in
                real-time—making donations fast, safe, and impactful.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="group inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-black/10 hover:shadow-xl hover:bg-emerald-50 transition-all">
                  Join Our Mission
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/5 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>

              {/* Micro trust row */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { label: "Verified Donors" },
                  { label: "24/7 Access" },
                  { label: "Instant Requests" },
                ].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/10 px-4 py-3 text-white text-sm font-medium text-center backdrop-blur"
                  >
                    {x.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right hero card */}
            <div className="relative">
              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-2xl shadow-black/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      Emergency Matching
                    </p>
                    <p className="text-white/80 text-sm">
                      Find compatible donors instantly
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Live inventory visibility",
                    "Hospital request tracking",
                    "Quality-assured blood units",
                    "Nationwide donor pool",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white/95"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base">{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-white px-5 py-4 text-emerald-700 font-semibold flex items-center justify-between">
                  <span>Avg response time</span>
                  <span className="text-xl">4.2 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <stat.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="mt-4 text-3xl font-extrabold tracking-tight">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="py-18 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Mission */}
          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To create a world where no one dies waiting for blood. We bridge
              voluntary donors and patients, ensuring safe and timely access
              during emergencies.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Clock,
                  title: "24/7 Emergency Support",
                  text: "Blood availability anytime, anywhere.",
                },
                {
                  icon: Shield,
                  title: "Verified & Safe Donations",
                  text: "Strict screening and quality protocols.",
                },
                {
                  icon: MapPin,
                  title: "Nationwide Network",
                  text: "Donors and camps across regions.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-indigo-700 text-white p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Our Vision
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              A future where blood transfusion is frictionless for every patient,
              supported by a robust donor community and smart technology.
            </p>

            <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur px-6 py-6 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl font-semibold">Quality Promise</p>
              </div>
              <p className="text-white/90 leading-relaxed">
                Every unit goes through multiple medical checks to ensure maximum
                safety for donors and recipients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-18 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that shape our work and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all p-7 text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-18 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              People who keep the system reliable, fast, and human.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">
                      {member.name}
                    </p>
                    <p className="text-white/90 text-sm">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-18 md:py-20 bg-gradient-to-r from-emerald-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-5">
            <Heart className="w-4 h-4" />
            Make a real impact
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of donors saving lives. One donation can help up to
            three people.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="group inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-7 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-black/20 hover:bg-emerald-50 transition-all">
              Become a Donor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-white/50 bg-white/5 text-white px-7 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Organize a Camp
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Emergency Helpline",
                lines: ["+1 (555) 123-HELP", "24/7 Available"],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["help@bloodconnect.org", "support@bloodconnect.org"],
              },
              {
                icon: Globe,
                title: "Headquarters",
                lines: ["123 Healthcare Ave", "Medical District, City 12345"],
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all p-8 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <c.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <div className="mt-2 space-y-1 text-gray-600">
                  {c.lines.map((l, idx) => (
                    <p key={idx}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
