"use client";
import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Sao_Paulo", // Ajuste para sua cidade se necessário
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="text-white/90">Open to work</span>
      </div>
      <span>•</span>
      <span>Based in Brazil</span>
      <span>•</span>
      <span className="text-white/90">{time} (GMT-3)</span>
    </div>
  );
}