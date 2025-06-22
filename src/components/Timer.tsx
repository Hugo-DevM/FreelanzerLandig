import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: string;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const distance = target.getTime() - now.getTime();

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Ejecutar inmediatamente
    updateCountdown();

    // Configurar el intervalo
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 text-2xl font-bold text-white">
      <div className="flex flex-col items-center">
        <span>{timeLeft.days}</span>
        <span className="text-xs text-gray-400 tracking-wide">DÍAS</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-400 tracking-wide">HORAS</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-400 tracking-wide">MINUTOS</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-400 tracking-wide">SEGUNDOS</span>
      </div>
    </div>
  );
};

export default Countdown;
