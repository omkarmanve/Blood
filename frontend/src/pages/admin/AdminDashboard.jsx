import { useState, useEffect } from "react";
import {
  Users,
  Hospital,
  Droplet,
  Calendar,
  Heart,
  TrendingUp,
  Activity,
  Shield,
  Beaker,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { toast } from "react-hot-toast";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = async (showToast = false) => {
    try {
      if (showToast) setRefreshing(true);

      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const res = await fetch("http://localhost:5000/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch stats");

      const data = await res.json();
      setStats(data);

      if (showToast) toast.success("Dashboard updated successfully!");
    } catch (err) {
      console.error("Dashboard error:", err);
      toast.error("Failed to load admin stats");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // ---------- UI pieces ----------

  const StatCard = ({
    icon,
    label,
    value,
    subtitle,
    trend,
    tone = "emerald",
  }) => {
    const tones = {
      emerald: {
        chip: "bg-emerald-100 text-emerald-700",
        ring: "ring-emerald-200/60",
        glow: "from-emerald-500/10 to-transparent",
      },
      indigo: {
        chip: "bg-indigo-100 text-indigo-700",
        ring: "ring-indigo-200/60",
        glow: "from-indigo-500/10 to-transparent",
      },
      teal: {
        chip: "bg-teal-100 text-teal-700",
        ring: "ring-teal-200/60",
        glow: "from-teal-500/10 to-transparent",
      },
      amber: {
        chip: "bg-amber-100 text-amber-700",
        ring: "ring-amber-200/60",
        glow: "from-amber-500/10 to-transparent",
      },
      rose: {
        chip: "bg-rose-100 text-rose-700",
        ring: "ring-rose-200/60",
        glow: "from-rose-500/10 to-transparent",
      },
    };
    const t = tones[tone] || tones.emerald;

    return (
      <div
        className={`relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-sm
        hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6`}
      >
        {/* soft corner glow */}
        <div
          className={`absolute -top-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-br ${t.glow} blur-2xl`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1">
              {label}
            </p>
            <p className="text-3xl font-extrabold text-slate-900 leading-tight">
              {value?.toLocaleString?.() ?? value}
            </p>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
            )}
          </div>

          <div
            className={`shrink-0 p-3 rounded-xl ${t.chip} ring-4 ${t.ring}`}
          >
            {icon}
          </div>
        </div>

        {trend && (
          <div className="relative flex items-center gap-1 mt-4 text-xs">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">{trend}%</span>
            <span className="text-slate-500">from last month</span>
          </div>
        )}
      </div>
    );
  };

  const QuickActionCard = ({
    title,
    description,
    icon,
    href,
    buttonText = "Manage",
    tone = "emerald",
  }) => {
    const toneBtn =
      tone === "indigo"
        ? "from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
        : tone === "teal"
        ? "from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
        : "from-emerald-600 to-indigo-700 hover:opacity-95";

    const toneChip =
      tone === "indigo"
        ? "bg-indigo-50 text-indigo-700"
        : tone === "teal"
        ? "bg-teal-50 text-teal-700"
        : "bg-emerald-50 text-emerald-700";

    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2 rounded-xl ${toneChip}`}>
            {icon}
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <button
          onClick={() => (window.location.href = href)}
          className={`w-full bg-gradient-to-r ${toneBtn} text-white py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 font-semibold shadow-sm`}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  const AlertCard = ({ type, title, description, count, icon }) => {
    const alertConfig = {
      warning: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-900",
        sub: "text-amber-800",
        chip: "bg-amber-100 text-amber-700",
      },
      critical: {
        bg: "bg-rose-50",
        border: "border-rose-200",
        text: "text-rose-900",
        sub: "text-rose-800",
        chip: "bg-rose-100 text-rose-700",
      },
      info: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-900",
        sub: "text-indigo-800",
        chip: "bg-indigo-100 text-indigo-700",
      },
    };

    const c = alertConfig[type] || alertConfig.info;

    return (
      <div className={`${c.bg} border ${c.border} rounded-2xl p-5 shadow-sm`}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${c.chip}`}>{icon}</div>
          <div>
            <h3 className={`text-base font-bold ${c.text}`}>{title}</h3>
            <p className={`text-sm ${c.sub}`}>
              <span className="font-semibold">{count}</span> {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ---------- Loading / Empty ----------

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <Shield className="w-12 h-12 text-emerald-600 mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            Loading Admin Dashboard
          </h2>
          <p className="text-slate-500">Preparing system overview...</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Failed to load dashboard
          </h3>
          <p className="text-slate-600 mb-4">
            Unable to retrieve system statistics. Please try again.
          </p>
          <button
            onClick={() => fetchStats(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  // ---------- Main UI ----------

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 p-5 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO HEADER */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/70 backdrop-blur-xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10" />
          <div className="relative p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900">
                  Admin Dashboard
                </h1>
                <p className="text-slate-600 mt-1">
                  Live system overview for BBMS operations
                </p>
              </div>
            </div>

            <button
              onClick={() => fetchStats(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-emerald-200 rounded-xl text-emerald-700 hover:bg-emerald-50 transition disabled:opacity-60 shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh Data"}
            </button>
          </div>

          {/* Quick numbers strip */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-6 pb-6 md:px-8 md:pb-8">
            {[
              { label: "Donors", value: stats.totalDonors, tone: "emerald" },
              { label: "Facilities", value: stats.totalFacilities, tone: "indigo" },
              { label: "Donations", value: stats.totalDonations, tone: "teal" },
              { label: "Camps", value: stats.upcomingCamps, tone: "amber" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm"
              >
                <div
                  className={`text-2xl font-extrabold ${
                    s.tone === "indigo"
                      ? "text-indigo-700"
                      : s.tone === "teal"
                      ? "text-teal-700"
                      : s.tone === "amber"
                      ? "text-amber-700"
                      : "text-emerald-700"
                  }`}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-600 font-semibold tracking-wide uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM OVERVIEW */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-700" />
            System Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            <StatCard
              icon={<Users className="w-6 h-6" />}
              label="Total Donors"
              value={stats.totalDonors}
              subtitle="Registered blood donors"
              tone="emerald"
            />
            <StatCard
              icon={<Hospital className="w-6 h-6" />}
              label="Facilities"
              value={stats.totalFacilities}
              subtitle="Hospitals & labs"
              tone="indigo"
            />
            <StatCard
              icon={<Droplet className="w-6 h-6" />}
              label="Total Donations"
              value={stats.totalDonations}
              subtitle="Blood units collected"
              tone="teal"
            />
            <StatCard
              icon={<Calendar className="w-6 h-6" />}
              label="Upcoming Camps"
              value={stats.upcomingCamps}
              subtitle="Scheduled drives"
              tone="amber"
            />
            <StatCard
              icon={<Heart className="w-6 h-6" />}
              label="Active Donors"
              value={stats.activeDonors}
              subtitle="Recently donated"
              tone="rose"
            />
          </div>
        </section>

        {/* ALERTS */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-emerald-700" />
            System Alerts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stats.pendingApprovals > 0 && (
              <AlertCard
                type="warning"
                title="Pending Approvals"
                description="facility registrations awaiting review"
                count={stats.pendingApprovals}
                icon={<Clock className="w-6 h-6" />}
              />
            )}

            {stats.criticalStock > 0 && (
              <AlertCard
                type="critical"
                title="Critical Stock"
                description="blood types with low inventory"
                count={stats.criticalStock}
                icon={<Droplet className="w-6 h-6" />}
              />
            )}

            {stats.pendingFacilities > 0 && (
              <AlertCard
                type="info"
                title="Facility Applications"
                description="new facility applications pending"
                count={stats.pendingFacilities}
                icon={<Hospital className="w-6 h-6" />}
              />
            )}
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-emerald-700" />
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <QuickActionCard
              icon={<Users className="w-5 h-5" />}
              title="Manage Donors"
              description="View, edit, or remove donors from the system"
              href="/admin/donors"
              tone="emerald"
            />
            <QuickActionCard
              icon={<Hospital className="w-5 h-5" />}
              title="Manage Facilities"
              description="Approve and manage hospitals & laboratories"
              href="/admin/facilities"
              tone="indigo"
            />
            <QuickActionCard
              icon={<Droplet className="w-5 h-5" />}
              title="Donation History"
              description="Audit donation records & analytics"
              href="/admin/donations"
              tone="teal"
            />
            <QuickActionCard
              icon={<Calendar className="w-5 h-5" />}
              title="Blood Camps"
              description="Monitor and manage blood donation camps"
              href="/admin/camps"
              buttonText="View Camps"
              tone="amber"
            />
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        {stats.recentActivity && stats.recentActivity.length > 0 && (
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-700" />
              Recent Activity
            </h2>

            <div className="space-y-3">
              {stats.recentActivity.slice(0, 6).map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-3 p-3 rounded-2xl hover:bg-emerald-50 transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
                      <Activity className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-800 font-medium">
                        {activity.description}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {new Date(activity.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 whitespace-nowrap mt-1">
                    #{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
