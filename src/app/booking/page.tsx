"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  MapPin,
  BedDouble,
  Receipt,
  Download,
  Clock,
  Briefcase,
  ChevronRight,
  Lock,
} from "lucide-react";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { SmoothCursor } from "@/components/ui/cursor";

// Tent Data
interface Tent {
  id: number;
  name: string;
  category: string;
  tagline: string;
  pricePerNight: number;
  capacity: string;
  size: string;
  image: string;
}

const TENTS: Tent[] = [
  {
    id: 1,
    name: "Oceanfront Luxury Tent",
    category: "Beachfront Zone",
    tagline: "Wake up to breaking waves and golden ocean light.",
    pricePerNight: 12500,
    capacity: "2 - 3 Guests",
    size: "450 sq ft",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Hillside Palm Canopy Tent",
    category: "Hillside Sanctuary",
    tagline: "Tucked beneath ancient palms with mountain breeze.",
    pricePerNight: 9500,
    capacity: "2 Guests",
    size: "420 sq ft",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Garden & Hammock Tent",
    category: "Tropical Garden",
    tagline: "Steps away from lazy beanbags and woven hammocks.",
    pricePerNight: 8500,
    capacity: "2 - 4 Guests",
    size: "480 sq ft",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sunset View Suite Tent",
    category: "Sunset Deck",
    tagline: "Front-row seats to Arabian Sea golden hour sunsets.",
    pricePerNight: 14500,
    capacity: "2 Guests",
    size: "500 sq ft",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Surf & Beach Shack Suite",
    category: "Beach Access Zone",
    tagline: "Closest to the Surf & Chill cafe and coastal steps.",
    pricePerNight: 11000,
    capacity: "2 - 3 Guests",
    size: "460 sq ft",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Query Params initialized
  const queryCheckIn = searchParams?.get("checkIn") || "";
  const queryCheckOut = searchParams?.get("checkOut") || "";
  const queryGuests = searchParams?.get("guests") || "2 Guests";
  const queryTentId = Number(searchParams?.get("tentId")) || 1;

  // Booking Flow Step (1 to 6)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"wizard" | "my-bookings">("wizard");

  // User Authentication Simulation State
  const [authMode, setAuthMode] = useState<"guest" | "login" | "signup">("guest");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Booking Parameters State
  const [checkIn, setCheckIn] = useState(queryCheckIn || new Date().toISOString().split("T")[0]);
  const [checkOut, setCheckOut] = useState(
    queryCheckOut || new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  );
  const [guests, setGuests] = useState(queryGuests);
  const [selectedTentId, setSelectedTentId] = useState<number>(queryTentId);

  // Customer Details Form State
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // Confirmed Bookings list in localStorage
  const [myBookings, setMyBookings] = useState<any[]>([]);
  const [latestBooking, setLatestBooking] = useState<any | null>(null);

  // Sync parameters if queryParams change
  useEffect(() => {
    if (searchParams?.get("tentId")) {
      setSelectedTentId(Number(searchParams.get("tentId")));
      setCurrentStep(2); // Jump straight to details if tent pre-selected
    }
  }, [searchParams]);

  // Load saved bookings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aarunya_bookings");
      if (saved) {
        setMyBookings(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load local bookings", e);
    }
  }, []);

  // Calculate stay nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    const diff = (end - start) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const selectedTent = TENTS.find((t) => t.id === selectedTentId) || TENTS[0];
  const basePrice = selectedTent.pricePerNight * nights;
  const ecoTax = Math.round(basePrice * 0.12);
  const totalPrice = basePrice + ecoTax;

  // Handle final booking submission
  const handleConfirmBooking = () => {
    const bookingId = `AAR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: bookingId,
      createdAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      tent: selectedTent,
      checkIn,
      checkOut,
      nights,
      guests,
      guestName: guestName || "Honored Guest",
      guestEmail: guestEmail || "guest@example.com",
      guestPhone: guestPhone || "+91 9876543210",
      totalPrice,
      status: "Confirmed (Pay at Property)",
    };

    const updated = [newBooking, ...myBookings];
    setMyBookings(updated);
    setLatestBooking(newBooking);
    try {
      localStorage.setItem("aarunya_bookings", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save booking to localStorage", e);
    }

    setCurrentStep(6);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between select-none cursor-none">
      <SmoothCursor />
      <Navbar />

      <main className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex-1">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-8">
          <div className="bg-white/60 backdrop-blur-md w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
              Resort Booking Portal
            </span>
          </div>

          <h1 className="heading mx-auto">Reserve Your Stay</h1>
          <p className="subheading mx-auto">Fifteen Luxury Eco-Tents Between Hills and Ocean</p>
        </div>

        {/* Top Tab Bar: Wizard vs My Bookings */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 p-1.5 rounded-full border border-neutral-200/80 shadow-xs flex items-center gap-1">
            <button
              onClick={() => setActiveTab("wizard")}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "wizard"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Booking Wizard
            </button>
            <button
              onClick={() => setActiveTab("my-bookings")}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "my-bookings"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <span>My Bookings</span>
              {myBookings.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {myBookings.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {activeTab === "my-bookings" ? (
          /* My Bookings Dashboard View */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-neutral-900">My Saved Bookings</h2>
              <button
                onClick={() => setActiveTab("wizard")}
                className="text-xs font-bold text-neutral-900 underline underline-offset-4 cursor-pointer"
              >
                + Create New Booking
              </button>
            </div>

            {myBookings.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200/80 shadow-sm space-y-4">
                <Receipt className="w-12 h-12 text-neutral-400 mx-auto" />
                <h3 className="text-xl font-bold text-neutral-800">No Active Bookings Yet</h3>
                <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                  You haven&apos;t completed any bookings yet. Choose dates and select a luxury tent to get started!
                </p>
                <button
                  onClick={() => {
                    setActiveTab("wizard");
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3 bg-neutral-900 text-white rounded-4xl text-sm font-bold hover:bg-black transition cursor-pointer"
                >
                  Start Booking Flow
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {myBookings.map((b, idx) => (
                  <div
                    key={b.id || idx}
                    className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                        <Image src={b.tent.image} alt={b.tent.name} fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-neutral-900 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {b.id}
                          </span>
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            {b.status}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">{b.tent.name}</h4>
                        <p className="text-xs text-neutral-500 font-medium">
                          {b.checkIn} → {b.checkOut} ({b.nights} {b.nights === 1 ? "Night" : "Nights"} • {b.guests})
                        </p>
                        <p className="text-xs text-neutral-700 font-semibold">
                          Guest: {b.guestName} ({b.guestEmail})
                        </p>
                      </div>
                    </div>

                    <div className="text-right w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-neutral-100">
                      <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        Total Amount
                      </div>
                      <div className="text-xl font-bold text-neutral-900">
                        ₹{b.totalPrice?.toLocaleString("en-IN")}
                      </div>
                      <span className="text-[11px] font-semibold text-amber-700 block mt-0.5">
                        Pay Upon Arrival at Resort
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          /* Standard Multi-step Booking Journey Wizard */
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Step Progress Tracker */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-neutral-200 shadow-sm">
              <div className="grid grid-cols-6 gap-2 text-center relative">
                {[
                  { step: 1, title: "Login" },
                  { step: 2, title: "Dates" },
                  { step: 3, title: "Room" },
                  { step: 4, title: "Guest Info" },
                  { step: 5, title: "Summary" },
                  { step: 6, title: "Confirmed" },
                ].map((s) => {
                  const isActive = currentStep === s.step;
                  const isCompleted = currentStep > s.step;

                  return (
                    <button
                      key={s.step}
                      onClick={() => {
                        // Allow navigating to completed or previous steps
                        if (isCompleted || currentStep >= s.step) setCurrentStep(s.step);
                      }}
                      className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
                    >
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all ${
                          isActive
                            ? "bg-neutral-900 text-white ring-4 ring-neutral-900/10 shadow-md scale-105"
                            : isCompleted
                            ? "bg-emerald-600 text-white"
                            : "bg-neutral-100 text-neutral-400 border border-neutral-200"
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="w-4 h-4" /> : s.step}
                      </div>
                      <span
                        className={`text-[10px] md:text-xs font-semibold truncate max-w-full ${
                          isActive
                            ? "text-neutral-900 font-bold"
                            : isCompleted
                            ? "text-emerald-700 font-medium"
                            : "text-neutral-400"
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step Content Container */}
            <div className="bg-white rounded-4xl p-6 sm:p-10 border border-neutral-200 shadow-xl relative min-h-[420px]">
              
              {/* STEP 1: LOGIN / SIGNUP (Columns Placeholder) */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-100 pb-4">
                    <h2 className="text-2xl font-bold text-neutral-900">Step 1: Guest Authentication</h2>
                    <p className="text-neutral-500 text-sm">
                      Choose how you would like to proceed with your booking.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1: Fast-track Guest */}
                    <div
                      onClick={() => setAuthMode("guest")}
                      className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                        authMode === "guest"
                          ? "border-neutral-900 bg-neutral-50/80 shadow-md"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900">Continue as Guest</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          No registration needed. Fast checkout with instant email confirmation.
                        </p>
                      </div>
                      <div className="text-xs font-bold text-neutral-800 flex items-center gap-1">
                        <span>Fast Checkout</span>
                        <ChevronRight className="w-4 h-4 text-neutral-600" />
                      </div>
                    </div>

                    {/* Column 2: Returning Guest Login */}
                    <div
                      onClick={() => setAuthMode("login")}
                      className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                        authMode === "login"
                          ? "border-neutral-900 bg-neutral-50/80 shadow-md"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                          <Lock className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900">Member Login</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          Sign in to access saved traveler preferences and loyalty privileges.
                        </p>
                      </div>

                      {authMode === "login" && (
                        <div className="space-y-2 pt-2 text-left">
                          <input
                            type="email"
                            placeholder="Email address"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-white focus:outline-none"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-white focus:outline-none"
                          />
                        </div>
                      )}

                      <div className="text-xs font-bold text-neutral-800 flex items-center gap-1">
                        <span>Sign In & Continue</span>
                        <ChevronRight className="w-4 h-4 text-neutral-600" />
                      </div>
                    </div>

                    {/* Column 3: New Account Signup */}
                    <div
                      onClick={() => setAuthMode("signup")}
                      className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                        authMode === "signup"
                          ? "border-neutral-900 bg-neutral-50/80 shadow-md"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900">Create New Account</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          Join Aarunya Club for 10% welcome discount and priority tent upgrades.
                        </p>
                      </div>

                      {authMode === "signup" && (
                        <div className="space-y-2 pt-2 text-left">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-white focus:outline-none"
                          />
                          <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-white focus:outline-none"
                          />
                        </div>
                      )}

                      <div className="text-xs font-bold text-neutral-800 flex items-center gap-1">
                        <span>Register & Continue</span>
                        <ChevronRight className="w-4 h-4 text-neutral-600" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-8 py-3.5 rounded-4xl bg-neutral-900 hover:bg-black text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Dates</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: CHECK-IN & CHECK-OUT SELECTION */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-100 pb-4">
                    <h2 className="text-2xl font-bold text-neutral-900">Step 2: Dates & Stay Duration</h2>
                    <p className="text-neutral-500 text-sm">
                      Select your arrival and departure dates along the private coast of Gujarat.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-50 p-6 rounded-3xl border border-neutral-200/80">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Check-in Date
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
                        <Calendar className="w-5 h-5 text-neutral-500" />
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-transparent font-bold text-neutral-800 text-sm focus:outline-none cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Check-out Date
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
                        <Calendar className="w-5 h-5 text-neutral-500" />
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-transparent font-bold text-neutral-800 text-sm focus:outline-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Duration Banner */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-between text-amber-900">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-700" />
                      <div className="text-xs sm:text-sm font-semibold">
                        Stay Duration: <span className="font-bold text-neutral-900">{nights} {nights === 1 ? "Night" : "Nights"}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-amber-200">
                      Standard Check-in: 1:00 PM
                    </span>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 rounded-4xl bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="px-8 py-3.5 rounded-4xl bg-neutral-900 hover:bg-black text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Room Selection</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: GUEST COUNT & ROOM SELECTION */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-100 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-neutral-900">Step 3: Select Guests & Tent</h2>
                      <p className="text-neutral-500 text-sm">
                        Choose your eco-friendly canopy suite along the shore.
                      </p>
                    </div>

                    {/* Guest Count Selector */}
                    <div className="flex items-center gap-2 bg-neutral-100 p-1.5 rounded-2xl border border-neutral-200">
                      <Users className="w-4 h-4 text-neutral-600 ml-2" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="bg-transparent text-xs font-bold text-neutral-900 focus:outline-none cursor-pointer pr-2"
                      >
                        <option value="1 Person">1 Guest</option>
                        <option value="2 People">2 Guests</option>
                        <option value="3 People">3 Guests</option>
                        <option value="4+ People / Group">4+ Guests / Group</option>
                      </select>
                    </div>
                  </div>

                  {/* Tent Options Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TENTS.map((tent) => {
                      const isSelected = selectedTentId === tent.id;
                      return (
                        <div
                          key={tent.id}
                          onClick={() => setSelectedTentId(tent.id)}
                          className={`p-4 rounded-3xl border-2 transition-all cursor-pointer flex gap-4 ${
                            isSelected
                              ? "border-neutral-900 bg-neutral-900/5 shadow-md scale-[1.01]"
                              : "border-neutral-200 hover:border-neutral-300 bg-white"
                          }`}
                        >
                          <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                            <Image src={tent.image} alt={tent.name} fill className="object-cover" />
                          </div>

                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                  {tent.category}
                                </span>
                                {isSelected && (
                                  <span className="bg-neutral-900 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                                    Selected
                                  </span>
                                )}
                              </div>
                              <h4 className="font-bold text-neutral-900 text-base leading-snug truncate">
                                {tent.name}
                              </h4>
                              <p className="text-xs text-neutral-500 line-clamp-2 mt-0.5">
                                {tent.tagline}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                              <div className="text-xs text-neutral-600 font-semibold">
                                {tent.size} • {tent.capacity}
                              </div>
                              <div className="text-sm font-bold text-neutral-900">
                                ₹{tent.pricePerNight.toLocaleString("en-IN")}
                                <span className="text-[10px] text-neutral-400 font-normal"> / night</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-4xl bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="px-8 py-3.5 rounded-4xl bg-neutral-900 hover:bg-black text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Guest Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CUSTOMER INFORMATION COLLECTION */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-100 pb-4">
                    <h2 className="text-2xl font-bold text-neutral-900">Step 4: Primary Guest Information</h2>
                    <p className="text-neutral-500 text-sm">
                      Please enter your contact details for reservation confirmation and resort check-in.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 focus-within:border-neutral-900">
                        <User className="w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Samarth Shah"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 text-sm font-semibold focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 focus-within:border-neutral-900">
                        <Mail className="w-4 h-4 text-neutral-400" />
                        <input
                          type="email"
                          required
                          placeholder="samarth@example.com"
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 text-sm font-semibold focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Mobile Phone Number *
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 focus-within:border-neutral-900">
                        <Phone className="w-4 h-4 text-neutral-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 text-sm font-semibold focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Dietary & Special Preferences
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 focus-within:border-neutral-900">
                        <Briefcase className="w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          placeholder="Honeymoon setup, Jain meals, late check-in..."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 text-sm font-semibold focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 rounded-4xl bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(5)}
                      className="px-8 py-3.5 rounded-4xl bg-neutral-900 hover:bg-black text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Review Summary & Price</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: BOOKING SUMMARY & PRICE CALCULATION */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-100 pb-4">
                    <h2 className="text-2xl font-bold text-neutral-900">Step 5: Booking Summary & Payment Mode</h2>
                    <p className="text-neutral-500 text-sm">
                      Review your stay breakdown and confirm reservation with Pay at Property guarantee.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Stay Overview */}
                    <div className="md:col-span-7 space-y-4">
                      <div className="bg-neutral-50 p-5 rounded-3xl border border-neutral-200 space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                            <Image src={selectedTent.image} alt={selectedTent.name} fill className="object-cover" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                              {selectedTent.category}
                            </span>
                            <h3 className="text-lg font-bold text-neutral-900 mt-1">{selectedTent.name}</h3>
                            <p className="text-xs text-neutral-500 font-medium">
                              {selectedTent.size} • {selectedTent.capacity}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-neutral-200/80 pt-3 grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-neutral-400 uppercase font-bold text-[10px]">Dates</span>
                            <div className="font-semibold text-neutral-800">{checkIn} → {checkOut}</div>
                          </div>
                          <div>
                            <span className="text-neutral-400 uppercase font-bold text-[10px]">Stay Duration</span>
                            <div className="font-semibold text-neutral-800">{nights} {nights === 1 ? "Night" : "Nights"} ({guests})</div>
                          </div>
                        </div>

                        <div className="border-t border-neutral-200/80 pt-3 text-xs">
                          <span className="text-neutral-400 uppercase font-bold text-[10px]">Guest Contact</span>
                          <div className="font-semibold text-neutral-800">
                            {guestName || "Guest"} ({guestEmail || "No email"} • {guestPhone || "No phone"})
                          </div>
                        </div>
                      </div>

                      {/* Guarantee Card */}
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900">
                        <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div className="text-xs font-semibold">
                          <div className="font-bold">No Prepayment Required</div>
                          <span>Pay 100% upon arrival at Aarunya Resort check-in counter. Free cancellation up to 48 hours prior.</span>
                        </div>
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="md:col-span-5 bg-neutral-900 text-white p-6 rounded-3xl flex flex-col justify-between space-y-4">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-800 pb-2">
                          Price Calculation
                        </h4>

                        <div className="space-y-2 text-xs font-medium">
                          <div className="flex justify-between">
                            <span className="text-neutral-400">
                              ₹{selectedTent.pricePerNight.toLocaleString("en-IN")} × {nights} {nights === 1 ? "night" : "nights"}
                            </span>
                            <span>₹{basePrice.toLocaleString("en-IN")}</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-neutral-400">Eco Resort Tax & Service (12%)</span>
                            <span>₹{ecoTax.toLocaleString("en-IN")}</span>
                          </div>

                          <div className="flex justify-between text-emerald-400">
                            <span>Resort Welcome Drink & Breakfast</span>
                            <span>FREE</span>
                          </div>
                        </div>

                        <div className="border-t border-neutral-800 pt-3 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-neutral-400 block font-semibold">Total Payable Amount</span>
                            <span className="text-2xl font-bold text-white">
                              ₹{totalPrice.toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleConfirmBooking}
                        className="w-full py-4 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span>Confirm Booking (Pay at Property)</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-start">
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-3 rounded-4xl bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 6: CONFIRMATION & MY BOOKINGS DASHBOARD */}
              {currentStep === 6 && latestBooking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-6 max-w-2xl mx-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Request Confirmed
                    </span>
                    <h2 className="text-3xl font-bold text-neutral-900 mt-2">
                      Booking Confirmed!
                    </h2>
                    <p className="text-neutral-500 text-sm mt-1">
                      We have sent your reservation voucher to <span className="font-bold text-neutral-800">{latestBooking.guestEmail}</span>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 text-left space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                      <div>
                        <div className="text-[10px] font-bold text-neutral-400 uppercase">Booking Reference</div>
                        <div className="text-base font-bold text-neutral-900">{latestBooking.id}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase">Payment Status</div>
                        <div className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                          Pay at Property
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-neutral-400 uppercase font-bold text-[10px]">Reserved Suite</span>
                        <div className="font-bold text-neutral-900">{latestBooking.tent.name}</div>
                      </div>
                      <div>
                        <span className="text-neutral-400 uppercase font-bold text-[10px]">Total Amount</span>
                        <div className="font-bold text-neutral-900">₹{latestBooking.totalPrice?.toLocaleString("en-IN")}</div>
                      </div>
                      <div>
                        <span className="text-neutral-400 uppercase font-bold text-[10px]">Check-in</span>
                        <div className="font-semibold text-neutral-800">{latestBooking.checkIn}</div>
                      </div>
                      <div>
                        <span className="text-neutral-400 uppercase font-bold text-[10px]">Check-out</span>
                        <div className="font-semibold text-neutral-800">{latestBooking.checkOut} ({latestBooking.nights} nights)</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab("my-bookings")}
                      className="w-full sm:w-auto px-7 py-3 rounded-4xl bg-neutral-900 text-white text-sm font-bold hover:bg-black transition cursor-pointer"
                    >
                      View in My Bookings Dashboard
                    </button>
                    <button
                      onClick={() => router.push("/")}
                      className="w-full sm:w-auto px-7 py-3 rounded-4xl bg-neutral-100 text-neutral-700 text-sm font-bold hover:bg-neutral-200 transition cursor-pointer"
                    >
                      Return to Homepage
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-neutral-500 font-bold">Loading Booking Portal...</div>}>
      <BookingContent />
    </Suspense>
  );
}
