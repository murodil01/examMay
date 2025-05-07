import React from "react";
import { MapPin, Handshake, Briefcase, ChevronDown, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full text-[#333] text-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 py-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 hidden sm:inline">Город:</span>
            <span className="font-medium hover:text-[#008DFF] transition underline">
              Ташкент
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#008DFF] transition">
            <Handshake className="w-4 h-4 text-gray-600" />
            <span className="font-medium hidden sm:inline">
              Продавайте на Zon.uz
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#008DFF] transition">
            <Briefcase className="w-4 h-4 text-gray-600" />
            <span className="hidden sm:inline">Покупать как юрлицо</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#008DFF] transition">
            <span className="hidden sm:inline">Помощь</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#333] mt-2 sm:mt-0">
          <Phone className="w-4 h-4 text-gray-600" />
          <span className="font-medium text-sm sm:text-base whitespace-nowrap">
            +998-78 555-35-00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
