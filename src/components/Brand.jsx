import React, { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import { ShoppingBasket, Globe, Grip, Search, Heart } from "lucide-react";
import katalog from "../assets/katalog.png";
import Footer from "./Footer";

const Brand = ({ cart, setCart, likedItems, setLikedItems }) => {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [modalVisible, setModalVisible] = useState(false);
  const [likedVisible, setLikedVisible] = useState(false);

  const toggleCartModal = () => setModalVisible((v) => !v);
  const toggleLikedModal = () => setLikedVisible((v) => !v);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const getTotalPrice = () =>
    cart.reduce(
      (acc, item) => acc + (item.discountPrice || item.price) * item.quantity,
      0
    );

  const clearLikedProducts = () => setLikedItems([]);

  return (
    <div className="border-2 border-[#c2cddd]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center gap-4 my-[17.5px]">
        <img
          className="w-[139px] h-[26px]"
          src="https://zon.uz/_next/static/media/zon.uz-logo.a51d6fb2.svg"
          alt="Logo"
        />
        <img src={katalog} alt="Katalog" />
        <div className="flex-1 flex items-center">
          <Input
            placeholder="Найти товары"
            style={{
              height: 40,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
          <div className="flex items-center justify-center px-4 bg-blue-500 rounded-r-md cursor-pointer">
            <Search className="text-white w-5 h-[40px]" />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-4 sm:mt-0">
          <div className="relative cursor-pointer" onClick={toggleCartModal}>
            <ShoppingBasket size={35} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2 py-1">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
          <div className="relative cursor-pointer" onClick={toggleLikedModal}>
            <Heart size={30} />
            {likedItems.length > 0 && (
              <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2 py-1">
                {likedItems.length}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Globe />
            <Select
              value={selectedLang}
              onChange={setSelectedLang}
              style={{ width: 80 }}
              variant="outlined"
              options={[
                { value: "ru", label: "Rus" },
                { value: "en", label: "Eng" },
                { value: "uz", label: "Uzb" },
              ]}
            />
          </div>
          <Grip />
          <Button type="primary" style={{ height: 40, width: 82 }}>
            Войти
          </Button>
        </div>
      </div>

      {/* Savatcha (Cart) Modal */}
      <Modal
        title="Savatcha"
        open={modalVisible}
        onCancel={toggleCartModal}
        footer={null}
        width="90%"
        styles={{ body: { padding: 0, height: "100vh" } }}
        style={{ top: 0 }}
      >
        <div className="h-full p-6 overflow-y-auto pb-28">
          {cart.length === 0 ? (
            <p>Savat bo‘sh</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-4 items-center"
              >
                <div className="flex gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p>
                      {(item.discountPrice || item.price) * item.quantity} sum
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value) || 1
                      )
                    }
                    style={{ width: 50 }}
                  />
                  <Button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <>
              <div className="flex justify-between font-bold mt-6">
                <span>Umumiy narx:</span>
                <span>{getTotalPrice()} sum</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button type="default" onClick={() => setCart([])}>
                  Savatchani tozalash
                </Button>
                <Button type="primary" onClick={toggleCartModal}>
                  Yopish
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Footer />
        </div>
      </Modal>

      {/* Liked Products Modal */}
      <Modal
        title="Yoqqan mahsulotlar"
        open={likedVisible}
        onCancel={toggleLikedModal}
        footer={null}
        width="600px"
      >
        {likedItems.length === 0 ? (
          <p>Hech narsa yoqmagan</p>
        ) : (
          likedItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center mb-4 border-b pb-2"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-red-500">
                  {item.discountPrice || item.price} sum
                </p>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-center mt-4">
          {likedItems.length > 0 && (
            <Button type="default" onClick={clearLikedProducts}>
              Barchasini tozalash
            </Button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Brand;