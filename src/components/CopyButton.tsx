import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCopy = () => {
    setIsAnimating(true);
    navigator.clipboard.writeText("https://freelanzer.app").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsAnimating(false);
      }, 2000);
    });
  };

  return (
    <div className="bg-[#1a1a1a] rounded-md flex items-center px-4 py-3 text-sm justify-between relative">
      <span className="truncate">https://freelanzer.app</span>
      <button
        onClick={handleCopy}
        className={`ml-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] ${
          copied
            ? "text-green-400 scale-110 animate-pulse-glow"
            : "text-gray-400 hover:text-white hover:scale-105"
        }`}
        disabled={isAnimating}
      >
        <img
          src="/images/copy.png"
          alt="Copiar enlace"
          className={`w-5 h-5 transition-all duration-300 ${
            copied ? "animate-copy-success" : ""
          }`}
        />
      </button>
      {copied && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-green-400 animate-fade-in-out mt-8">
          Copiado al portapapeles
        </span>
      )}
    </div>
  );
}
