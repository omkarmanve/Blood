import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  User,
  Heart,
  Calendar,
  Phone,
  Mail,
  MapPin,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  Droplet,
  Weight,
  Users,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/admin";

function GetAllDonors() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    bloodGroup: "all",
    eligibility: "all",
    sortBy: "name",
    sortOrder: "asc",
  });

  const token = localStorage.getItem("token");

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const fetchAllDonors = async (showToast = false) => {
    try {
      if (showToast) setRefreshing(true);
      else setLoading(true);

      const res = await fetch(`${API_URL}/donors`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", errorText);
        throw new Error(`Failed to fetch donors: ${res.status}`);
      }

      const data = await res.json();
      setDonors(data.donors || []);

      if (showToast) {
        toast.success(`Loaded ${data.donors?.length || 0} donors`);
      }
    } catch (error) {
      console.error("Fetch donors error:", error);
      toast.error(error.message || "Failed to load donor data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAllDonors();
  }, []);

  const filteredDonors = donors
    .filter((donor) => {
      const search = filters.search.toLowerCase();
      const matchesSearch =
        !search ||
        donor.fullName?.toLowerCase().includes(search) ||
        donor.email?.toLowerCase().includes(search) ||
        donor.phone?.includes(filters.search);

      const matchesBloodGroup =
        filters.bloodGroup === "all" ||
        donor.bloodGroup === filters.bloodGroup;

      const matchesEligibility =
        filters.eligibility === "all" ||
        (filters.eligibility === "eligible" && donor.eligibleToDonate) ||
        (filters.eligibility === "ineligible" && !donor.eligibleToDonate);

      return matchesSearch && matchesBloodGroup && matchesEligibility;
    })
    .sort((a, b) => {
      let aValue, bValue;

      switch (filters.sortBy) {
        case "name":
          aValue = a.fullName?.toLowerCase();
          bValue = b.fullName?.toLowerCase();
          break;
        case "donations":
          aValue = a.donationHistory?.length || 0;
          bValue = b.donationHistory?.length || 0;
          break;
        case "age":
          aValue = a.age || 0;
          bValue = b.age || 0;
          break;
        default:
          aValue = a.fullName?.toLowerCase();
          bValue = b.fullName?.toLowerCase();
      }

      if (filters.sortOrder === "desc") {
        return aValue < bValue ? 1 : -1;
      }
      return aValue > bValue ? 1 : -1;
    });

  const getEligibilityBadge = (isEligible) => {
    if (isEligible === undefined) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border bg-slate-100 text-slate-700 border-slate-200">
          <Clock size={12} /> Unknown
        </span>
      );
    }
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
          isEligible
            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
            : "bg-rose-50 text-rose-800 border-rose-200"
        }`}
      >
        {isEligible ? <CheckCircle size={12} /> : <XCircle size={12} />}
        {isEligible ? "Eligible" : "Ineligible"}
      </span>
    );
  };

  const getBloodGroupBadge = (bloodGroup) => {
    if (!bloodGroup) return null;
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
        <Droplet size={10} />
        {bloodGroup}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <Users className="w-12 h-12 text-emerald-600 mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            Loading Donor Database
          </h2>
          <p className="text-slate-500">
            Fetching all registered blood donors...
          </p>
        </div>
      </div>
    );
  }

  const totalEligible = donors.filter((d) => d.eligibleToDonate).length;
  const totalIneligible = donors.filter((d) => !d.eligibleToDonate).length;
  const totalDonations = donors.reduce(
    (sum, donor) => sum + (donor.donationHistory?.length || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 p-5 md:p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900">
                  Blood Donors
                </h1>
                <p className="text-slate-600 mt-1">
                  Manage and view all registered blood donors in the system
                </p>
              </div>
            </div>

            <button
              onClick={() => fetchAllDonors(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-emerald-200 rounded-xl text-emerald-700 hover:bg-emerald-50 transition disabled:opacity-60 shadow-sm"
            >
              <RefreshCw
                className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
              />
              {refreshing ? "Refreshing..." : "Refresh Data"}
            </button>
          </div>

          {/* STATS CARD */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-slate-900">
                  {donors.length}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                  Total Donors
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-emerald-700">
                  {totalEligible}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                  Eligible
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-rose-700">
                  {totalIneligible}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                  Ineligible
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-700">
                  {totalDonations}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                  Total Donations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-slate-700">
            <Filter className="w-4 h-4 text-emerald-600" />
            Filters & Sorting
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search donors by name, email, or phone..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                />
              </div>
            </div>

            {/* Blood group */}
            <select
              value={filters.bloodGroup}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, bloodGroup: e.target.value }))
              }
              className="px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 text-sm bg-white"
            >
              <option value="all">All Blood Types</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>

            {/* Eligibility */}
            <select
              value={filters.eligibility}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  eligibility: e.target.value,
                }))
              }
              className="px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 text-sm bg-white"
            >
              <option value="all">All Status</option>
              <option value="eligible">Eligible Only</option>
              <option value="ineligible">Ineligible Only</option>
            </select>

            {/* Sort by */}
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
              }
              className="px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 text-sm bg-white"
            >
              <option value="name">Sort by Name</option>
              <option value="donations">Sort by Donations</option>
              <option value="age">Sort by Age</option>
            </select>

            {/* Sort order */}
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
                }))
              }
              className="px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-sm flex items-center justify-center gap-1"
            >
              {filters.sortOrder === "asc" ? (
                <>
                  <ChevronUp size={16} /> Asc
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Desc
                </>
              )}
            </button>
          </div>
        </div>

        {/* RESULTS INFO */}
        <div className="mb-4 flex flex-wrap justify-between items-center gap-2 text-sm">
          <p className="text-slate-600">
            Showing{" "}
            <span className="font-semibold">{filteredDonors.length}</span> of{" "}
            <span className="font-semibold">{donors.length}</span> donors
          </p>
          {filters.search && (
            <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              Search filter: <span className="font-semibold">"{filters.search}"</span>
            </p>
          )}
        </div>

        {/* DONOR GRID */}
        {filteredDonors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-slate-100">
            <User className="w-14 h-14 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              {donors.length === 0 ? "No Donors Found" : "No Matching Donors"}
            </h3>
            <p className="text-slate-600">
              {donors.length === 0
                ? "The blood donor database is currently empty."
                : "No donors match your current filters."}
            </p>
            {filters.search && (
              <button
                onClick={() =>
                  setFilters((prev) => ({ ...prev, search: "" }))
                }
                className="mt-4 text-emerald-700 hover:text-emerald-800 underline text-sm"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDonors.map((donor) => (
              <div
                key={donor._id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-100">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                      {donor.fullName}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {donor.email}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    {getEligibilityBadge(donor.eligibleToDonate)}
                    {getBloodGroupBadge(donor.bloodGroup)}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      {donor.phone || "Not provided"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      {donor.age ? `${donor.age} years old` : "Age not set"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Weight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      {donor.weight ? `${donor.weight} kg` : "Weight not set"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      {donor.donationHistory?.length || 0} donation
                      {(donor.donationHistory?.length || 0) !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-slate-700 line-clamp-2">
                      {donor.address?.street && `${donor.address.street}, `}
                      {donor.address?.city}, {donor.address?.state}
                      {donor.address?.pincode &&
                        ` - ${donor.address.pincode}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GetAllDonors;
