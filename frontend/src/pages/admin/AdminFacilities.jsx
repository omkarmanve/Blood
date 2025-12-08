import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  Building,
  MapPin,
  Phone,
  Mail,
  Calendar,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Download,
  Eye,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

const FacilityApproval = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [actionLoading, setActionLoading] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const token = localStorage.getItem("token");
  const API_URL = "http://localhost:5000/api/admin";

  const fetchPendingFacilities = async (showToast = false) => {
    try {
      if (showToast) setRefreshing(true);
      else setLoading(true);

      const res = await fetch(`${API_URL}/facilities`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error(`Failed to fetch facilities: ${res.status}`);

      const data = await res.json();
      const pendingFacilities =
        data.facilities?.filter((f) => f.status === "pending") || [];
      setFacilities(pendingFacilities);

      if (showToast) {
        toast.success(`Found ${pendingFacilities.length} pending facilities`);
      }
    } catch (error) {
      console.error("Fetch facilities error:", error);
      toast.error("Failed to load facilities. Please check your connection.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPendingFacilities();
  }, []);

  const handleApprove = async (facilityId) => {
    if (!facilityId) return toast.error("Invalid facility ID");

    setActionLoading(facilityId);

    try {
      const res = await fetch(`${API_URL}/facility/approve/${facilityId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.message) {
        toast.success("Facility approved successfully!");
        setFacilities((prev) => prev.filter((f) => f._id !== facilityId));
        setSelectedFacility(null);
      } else {
        throw new Error(data.message || "Approval failed");
      }
    } catch (error) {
      toast.error(error.message || "Error approving facility");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (facilityId) => {
    if (!facilityId) return toast.error("Invalid facility ID");
    if (!rejectionReason.trim())
      return toast.error("Please provide a rejection reason");

    setActionLoading(facilityId);

    try {
      const res = await fetch(`${API_URL}/facility/reject/${facilityId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rejectionReason }),
      });

      const data = await res.json();

      if (res.ok && data.message) {
        toast.success("Facility rejected successfully!");
        setFacilities((prev) => prev.filter((f) => f._id !== facilityId));
        setSelectedFacility(null);
        setRejectionReason("");
      } else {
        throw new Error(data.message || "Rejection failed");
      }
    } catch (error) {
      toast.error(error.message || "Error rejecting facility");
    } finally {
      setActionLoading(null);
    }
  };

  const handleViewDocument = (documentUrl) => {
    if (!documentUrl) return toast.error("Document not available");
    window.open(documentUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownloadDocument = (documentUrl, filename = "document") => {
    if (!documentUrl) return toast.error("Document not available for download");
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status) => {
    const config = {
      pending: {
        cls: "bg-amber-50 text-amber-800 border-amber-200",
        icon: Clock,
        label: "Pending Review",
      },
      approved: {
        cls: "bg-emerald-50 text-emerald-800 border-emerald-200",
        icon: CheckCircle,
        label: "Approved",
      },
      rejected: {
        cls: "bg-rose-50 text-rose-800 border-rose-200",
        icon: XCircle,
        label: "Rejected",
      },
    }[status] || {
      cls: "bg-slate-50 text-slate-700 border-slate-200",
      icon: Clock,
      label: "Pending",
    };

    const Icon = config.icon;
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${config.cls}`}
      >
        <Icon size={12} />
        {config.label}
      </span>
    );
  };

  const getFacilityTypeBadge = (type) => {
    const isHospital = type === "Hospital";
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border
        ${
          isHospital
            ? "bg-indigo-50 text-indigo-800 border-indigo-200"
            : "bg-teal-50 text-teal-800 border-teal-200"
        }`}
      >
        <Building size={12} />
        {type || "Facility"}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <Shield className="w-12 h-12 text-emerald-600 mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            Loading Facility Approvals
          </h2>
          <p className="text-slate-500">
            Fetching pending registration requests...
          </p>
        </div>
      </div>
    );
  }

  const pendingCount = facilities.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 p-5 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO HEADER */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/75 backdrop-blur-xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10" />
          <div className="relative p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900">
                  Facility Verification
                </h1>
                <p className="text-slate-600 mt-1">
                  Review and verify hospital & lab registration requests
                </p>
              </div>
            </div>

            <button
              onClick={() => fetchPendingFacilities(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-emerald-200 rounded-xl text-emerald-700 hover:bg-emerald-50 transition disabled:opacity-60 shadow-sm"
            >
              <RefreshCw
                className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
              />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {/* Pending strip */}
          <div className="relative px-6 pb-6 md:px-8 md:pb-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl text-emerald-700">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg">
                  {pendingCount} Pending Facility
                  {pendingCount !== 1 ? "ies" : ""} for Approval
                </p>
                <p className="text-slate-600 text-sm">
                  Facilities awaiting admin verification to access BBMS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {/* LEFT: pending list */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-700" />
              Pending Requests ({pendingCount})
            </h2>

            {pendingCount === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  All caught up
                </h3>
                <p className="text-slate-600">No pending facility requests.</p>
                <p className="text-sm text-slate-500 mt-1">
                  All facilities have been processed.
                </p>
              </div>
            ) : (
              facilities.map((facility) => {
                const active = selectedFacility?._id === facility._id;
                return (
                  <div
                    key={facility._id}
                    onClick={() => setSelectedFacility(facility)}
                    className={`relative bg-white rounded-2xl border shadow-sm p-5 cursor-pointer transition-all duration-200
                      hover:shadow-lg hover:-translate-y-0.5
                      ${
                        active
                          ? "border-emerald-300 ring-2 ring-emerald-200 bg-emerald-50/40"
                          : "border-slate-100 hover:border-emerald-200"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
                            {facility.name}
                          </h3>
                          {getFacilityTypeBadge(facility.facilityType)}
                        </div>

                        <p className="text-slate-600 text-sm flex items-center gap-2">
                          <Mail size={14} />
                          <span className="line-clamp-1">
                            {facility.email}
                          </span>
                        </p>
                        <p className="text-slate-600 text-sm flex items-center gap-2 mt-0.5">
                          <Phone size={14} />
                          {facility.phone || "No phone provided"}
                        </p>
                      </div>

                      {getStatusBadge(facility.status)}
                    </div>

                    <div className="space-y-1.5 text-sm text-slate-600">
                      <p className="flex items-center gap-2">
                        <MapPin size={14} />
                        {facility.address?.street || "Address not provided"},{" "}
                        {facility.address?.city}, {facility.address?.state} -{" "}
                        {facility.address?.pincode}
                      </p>
                      <p className="flex items-center gap-2">
                        <FileText size={14} />
                        Reg: {facility.registrationNumber || "Not provided"}
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar size={14} />
                        Registered:{" "}
                        {new Date(facility.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    {facility.documents?.registrationProof && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDocument(
                              facility.documents.registrationProof.url
                            );
                          }}
                          className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition border border-slate-200"
                        >
                          <Eye size={14} />
                          View Document
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownloadDocument(
                              facility.documents.registrationProof.url,
                              facility.documents.registrationProof.filename
                            );
                          }}
                          className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition border border-indigo-200"
                        >
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </section>

          {/* RIGHT: details panel */}
          <section className="lg:sticky lg:top-6 lg:h-fit">
            {selectedFacility ? (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Building className="w-5 h-5 text-emerald-700" />
                    Review Facility
                  </h2>
                  {getStatusBadge(selectedFacility.status)}
                </div>

                {/* details sections */}
                <div className="space-y-6">
                  {/* basic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Facility Name
                      </label>
                      <p className="text-slate-900 font-semibold">
                        {selectedFacility.name}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Type
                      </label>
                      {getFacilityTypeBadge(selectedFacility.facilityType)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Email
                      </label>
                      <p className="text-slate-900">{selectedFacility.email}</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Phone
                      </label>
                      <p className="text-slate-900">
                        {selectedFacility.phone || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Address
                    </label>
                    <p className="text-slate-900">
                      {selectedFacility.address?.street || "Street not provided"},{" "}
                      {selectedFacility.address?.city}
                      <br />
                      {selectedFacility.address?.state} -{" "}
                      {selectedFacility.address?.pincode}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Registration Number
                      </label>
                      <p className="text-slate-900 font-mono">
                        {selectedFacility.registrationNumber || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Category
                      </label>
                      <p className="text-slate-900 capitalize">
                        {selectedFacility.facilityCategory || "Not specified"}
                      </p>
                    </div>
                  </div>

                  {selectedFacility.operatingHours && (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Operating Hours
                      </label>
                      <p className="text-slate-900 font-semibold">
                        {selectedFacility.operatingHours.open} -{" "}
                        {selectedFacility.operatingHours.close}
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        {selectedFacility.operatingHours.workingDays?.join(", ") ||
                          "Not specified"}
                        {selectedFacility.is24x7 && " • 24/7 Service"}
                      </p>
                    </div>
                  )}

                  {selectedFacility.emergencyServices && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <p className="text-emerald-800 font-bold flex items-center gap-2">
                        <Shield size={16} />
                        Emergency Services Available
                      </p>
                    </div>
                  )}
                </div>

                {/* actions */}
                <div className="mt-7 space-y-4">
                  <button
                    onClick={() => handleApprove(selectedFacility._id)}
                    disabled={actionLoading === selectedFacility._id}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 px-4 rounded-2xl transition disabled:opacity-60 font-semibold shadow-sm"
                  >
                    {actionLoading === selectedFacility._id ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <CheckCircle size={20} />
                    )}
                    {actionLoading === selectedFacility._id
                      ? "Approving..."
                      : "Approve Facility"}
                  </button>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-500">
                      Rejection Reason (required)
                    </label>
                    <textarea
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="Provide a clear rejection reason to send to the facility..."
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 resize-none transition"
                      rows="3"
                    />
                    <button
                      onClick={() => handleReject(selectedFacility._id)}
                      disabled={
                        actionLoading === selectedFacility._id ||
                        !rejectionReason.trim()
                      }
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white py-3 px-4 rounded-2xl transition disabled:opacity-60 font-semibold shadow-sm"
                    >
                      {actionLoading === selectedFacility._id ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <XCircle size={20} />
                      )}
                      {actionLoading === selectedFacility._id
                        ? "Rejecting..."
                        : "Reject Facility"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-12 text-center">
                <Building className="w-14 h-14 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-1">
                  Select a Facility
                </h3>
                <p className="text-slate-500">
                  Click a request on the left to review details and take action.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default FacilityApproval;
