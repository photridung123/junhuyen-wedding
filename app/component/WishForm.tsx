"use client";

import { useState } from "react";
import { API_URL } from "../util";
import { FullImageSlide } from "./FullImageSlide";

export default function WishForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 2500); // tự ẩn sau 2.5s
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      showToast("Vui lòng nhập tên nhé 😊", "error");
      return;
    }

    setLoading(true);

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors", // fix CORS với Google Script
        body: JSON.stringify({
          name,
          message,
        }),
      });

      showToast("Đã gửi lời chúc 💌", "success");
      setName("");
      setMessage("");
    } catch (e) {
      showToast("Gửi thất bại 😢", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <FullImageSlide slideOrder={9} />

      {/* form */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-3/4 max-w-sm">
          <input
            type="text"
            placeholder="Nhập tên của bạn / Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="sm:w-5/6 sm:mx-8 w-full mb-3 sm:mt-16 py-1 mt-8 px-3 rounded-lg border-2 border-dashed border-pink-300 bg-white/80 backdrop-blur focus:outline-none focus:border-pink-500"
          />

          <textarea
            placeholder="Nhập lời chúc của bạn / Enter your wishes"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="sm:w-5/6 sm:mx-8 w-full mb-4 px-3 rounded-lg py-1 border-2 border-dashed border-pink-300 bg-white/80 backdrop-blur focus:outline-none focus:border-pink-500"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-lg transition font-medium sm:mt-16 mt-8"
          >
            {loading ? "Đang gửi..." : "Gửi lời chúc 💖"}
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-lg text-white font-medium shadow-lg transition-all duration-300 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}