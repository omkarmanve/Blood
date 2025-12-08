import {
  ArrowRight,
  Heart,
  Users,
  MapPin,
  Clock,
  Droplet,          // ✅ FIXED (was Droplets)
  Shield,
  Zap,
  Search,
  Bell,
  Calendar,
  FileText,
  CheckCircle,
  Activity,
  RefreshCw,
  AlertTriangle,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  const stats = [
    { icon: Users, label: "Lives Saved", value: "10,000+" },
    { icon: Heart, label: "Blood Units", value: "50,000+" },
    { icon: MapPin, label: "Partner Hospitals", value: "150+" },
    { icon: Clock, label: "Response Time", value: "< 30min" },
  ];

  const features = [
    {
      icon: Users,
      title: "Easy Donor Registration",
      description:
        "Fast, secure onboarding with eligibility checks and medical history tracking.",
      color: "emerald",
    },
    {
      icon: Droplet,
      title: "Real-time Inventory Tracking",
      description:
        "Live blood stock, expiry monitoring, and cross-facility distribution visibility.",
      color: "indigo",
    },
    {
      icon: Zap,
      title: "Emergency Auto-Matching",
      description:
        "Urgent requests trigger auto-matching and instant donor notifications.",
      color: "rose",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: FileText,
      title: "Register & Screen",
      description: "Quick signup + health screening.",
    },
    {
      step: "02",
      icon: Search,
      title: "Find Match",
      description: "We match needs with compatible donors.",
    },
    {
      step: "03",
      icon: Bell,
      title: "Get Notified",
      description: "Instant alerts for urgent cases nearby.",
    },
    {
      step: "04",
      icon: Heart,
      title: "Donate & Save Lives",
      description: "Visit centers & donate safely.",
    },
  ];

  const bloodTypes = [
    { type: "A+", need: "High", donors: "32%" },
    { type: "A-", need: "Critical", donors: "8%" },
    { type: "B+", need: "Medium", donors: "12%" },
    { type: "B-", need: "High", donors: "3%" },
    { type: "O+", need: "High", donors: "35%" },
    { type: "O-", need: "Critical", donors: "5%" },
    { type: "AB+", need: "Low", donors: "4%" },
    { type: "AB-", need: "Medium", donors: "1%" },
  ];

  const donationFacts = [
    {
      icon: Heart,
      title: "One Donation Saves 3 Lives",
      description:
        "Your one hour can help up to three patients in need.",
      stat: "Up to 3 Lives",
    },
    {
      icon: RefreshCw,
      title: "Blood Regenerates Fast",
      description:
        "Plasma is replaced in 24–48 hours. RBCs renew in 4–6 weeks.",
      stat: "48 Hours",
    },
    {
      icon: Users,
      title: "Constant Need",
      description:
        "Someone needs blood every two seconds.",
      stat: "Every 2 Sec",
    },
    {
      icon: AlertTriangle,
      title: "Short Shelf Life",
      description:
        "RBCs last 42 days. Platelets last only 5 days.",
      stat: "42 Days",
    },
  ];

  const eligibilityInfo = [
    {
      icon: CheckCircle,
      title: "Who Can Donate",
      items: [
        "Age 17–75 (16 with consent)",
        "Weight 50kg+",
        "Good general health",
        "No active infection",
      ],
    },
    {
      icon: Stethoscope,
      title: "Health Benefits",
      items: [
        "Free health screening",
        "Burns ~650 calories",
        "May reduce iron overload",
        "Stimulates new cells",
      ],
    },
    {
      icon: Shield,
      title: "Safety First",
      items: [
        "Sterile disposable kits",
        "Trained medical staff",
        "Safe monitoring",
        "Aftercare support",
      ],
    },
  ];

  const emergencyNeeds = [
    { type: "Accident Victims", units: "Up to 100 units", icon: AlertTriangle },
    { type: "Cancer Patients", units: "8 units weekly", icon: Heart },
    { type: "Surgeries", units: "5–10 units", icon: Stethoscope },
    { type: "Burn Victims", units: "20+ units", icon: Activity },
  ];

  const badgeColor = (need) => {
    if (need === "Critical") return "bg-rose-100 text-rose-700 ring-rose-200";
    if (need === "High") return "bg-amber-100 text-amber-800 ring-amber-200";
    if (need === "Medium") return "bg-emerald-100 text-emerald-800 ring-emerald-200";
    return "bg-slate-100 text-slate-700 ring-slate-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50">
      <Header />

      {/* HERO */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10b98122,transparent_55%),radial-gradient(circle_at_bottom_right,#6366f122,transparent_55%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-slate-700 text-sm font-semibold">
                <Heart className="w-4 h-4 text-rose-600" />
                Saving lives every day
              </div>

              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Smart Blood Management <br />
                <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                  Faster. Safer. Connected.
                </span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-xl">
                A unified platform for donors, hospitals and labs to register,
                track inventory, and respond to emergencies in minutes.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/auth" className="inline-flex">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-95 transition">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>

                <Link to="#about" className="inline-flex">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 transition">
                    Learn More
                  </button>
                </Link>
              </div>

              {/* mini trust chips */}
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <div className="px-3 py-1.5 bg-white rounded-full ring-1 ring-slate-200">
                  HIPAA-Ready Security
                </div>
                <div className="px-3 py-1.5 bg-white rounded-full ring-1 ring-slate-200">
                  Real-time Stock
                </div>
                <div className="px-3 py-1.5 bg-white rounded-full ring-1 ring-slate-200">
                  Instant Alerts
                </div>
              </div>
            </div>

            {/* visual card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-slate-100 p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-100 hover:shadow-md transition"
                      >
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
                        <div className="text-sm font-medium text-slate-600">{s.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-indigo-600 p-5 text-white flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/90">Urgent Requests handled</p>
                    <p className="text-2xl font-bold">24/7</p>
                  </div>
                  <Bell className="w-10 h-10 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOOD NEEDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Current Blood Needs</h2>
              <p className="text-slate-600 mt-1">
                Live requirement signals from partner facilities.
              </p>
            </div>
            <Link to="/register/donor" className="inline-flex">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
                Become a Donor <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bloodTypes.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-50 ring-1 ring-slate-100 p-4 text-center hover:shadow-md transition"
              >
                <div className="text-2xl font-extrabold text-slate-900">{b.type}</div>
                <div className={`mt-2 inline-flex px-3 py-1 rounded-full text-xs font-bold ring-1 ${badgeColor(b.need)}`}>
                  {b.need} Need
                </div>
                <div className="mt-2 text-xs text-slate-500">{b.donors} donors</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose This Platform?
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              Built for speed, transparency, and medical-grade reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon;
              const colorMap = {
                emerald: "bg-emerald-50 text-emerald-700",
                indigo: "bg-indigo-50 text-indigo-700",
                rose: "bg-rose-50 text-rose-700",
              };
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-lg ring-1 ring-slate-100 p-7 hover:shadow-xl transition"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[f.color]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-slate-600">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              From registration to donation — simplified.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="relative">
                  <div className="bg-slate-50 rounded-2xl p-6 ring-1 ring-slate-100 hover:shadow-md transition h-full">
                    <div className="text-sm font-extrabold text-emerald-700">
                      STEP {p.step}
                    </div>
                    <div className="mt-3 w-12 h-12 rounded-xl bg-white flex items-center justify-center ring-1 ring-slate-200">
                      {Icon && <Icon className="w-6 h-6 text-slate-900" />}
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DONATION FACTS */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Donation Matters
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              The impact is bigger than you think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donationFacts.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-100 p-6 text-center hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{d.description}</p>
                  <div className="mt-3 text-rose-600 font-extrabold">
                    {d.stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMERGENCY NEEDS */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Who Needs Your Blood?
            </h2>
            <p className="text-white/90 mt-3 text-lg">
              Your donation supports critical care every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {emergencyNeeds.map((e, i) => {
              const Icon = e.icon;
              return (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/15 transition text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white/15 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-lg">{e.type}</div>
                  <div className="text-sm text-white/90 mt-1">{e.units}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 max-w-2xl mx-auto bg-white/10 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold">
              47% eligible, only 5% donate.
            </p>
            <p className="text-white/90 mt-1">
              Your donation fills the gap.
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Eligibility & Benefits
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              Safe, simple, and rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {eligibilityInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl shadow-lg ring-1 ring-slate-100 p-6 hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-4">
                    {info.title}
                  </h3>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Shield className="w-7 h-7" />
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Secure & Compliant
              </h2>
              <p className="mt-3 text-slate-600">
                End-to-end encryption, audit-ready logging, and healthcare-grade data handling.
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                  HIPAA-aligned data flow
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                  Role-based access control
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                  Routine security audits
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl ring-1 ring-slate-100 p-6">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-emerald-100 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-900">
                    Protected Blood Network
                  </p>
                  <p className="text-sm text-slate-600">
                    Donor + patient privacy first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b98133,transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Save Lives?
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-2xl mx-auto">
            Join donors and facilities working together to keep blood available when it matters.
          </p>
          <div className="mt-7 flex justify-center">
            <Link to="/auth">
              <button className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition shadow-lg">
                Join Today <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
