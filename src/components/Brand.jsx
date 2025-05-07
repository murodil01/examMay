import React, { useState } from "react";
import katalog from "../assets/katalog.png";
import { Button, Input, Select } from "antd";
import {
  FileQuestion,
  Globe,
  Grip,
  Search,
  ShoppingBasket,
} from "lucide-react";

const Brand = () => {
  const [selectedLang, setSelectedLang] = useState("ru");

  return (
    <div className="border-2" style={{ borderColor: "rgba(194, 205, 221, 1)" }}>
      <div className="max-w-[1200px] mx-auto flex items-center gap-4 my-[17.5px]">
        <div>
          <img
            className="w-[139px] h-[26px]"
            src="https://zon.uz/_next/static/media/zon.uz-logo.a51d6fb2.svg"
            alt="Logo"
          />
        </div>

        <div>
          <img src={katalog} alt="Katalog" />
        </div>

        <div className="flex-1 flex">
          <Input
            placeholder="Найти товары"
            style={{
              height: "40px",
              width: "100%",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
          <div className="flex items-center justify-center px-4 bg-blue-500 rounded-r-md cursor-pointer">
            <Search className="text-white w-5 h-5" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <ShoppingBasket />

          <div className="flex items-center gap-1">
            <Globe />
            <Select
              value={selectedLang}
              onChange={(value) => setSelectedLang(value)}
              style={{ width: 80 }}
              bordered={false}
              options={[
                { value: "ru", label: "Rus" },
                { value: "en", label: "Eng" },
                { value: "uz", label: "Uzb" },
              ]}
            />
          </div>

          <FileQuestion />
          <Grip />

          <Button type="primary" style={{ height: "40px", width: "82px" }}>
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
