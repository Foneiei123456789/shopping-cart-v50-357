import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "ต้นยางอินเดีย",
    href: "#",
    imageSrc:
      "https://img.th.my-best.com/product_images/49c7fbf53aa3ac22a6479f52c2d8788a.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=e53de8e6d804390f778f4ae286482967",
    imageAlt: "ต้นยางอินเดีย",
    price: 69,
    about: "ต้นเตี้ย ใบเงาสวย ฟอกอากาศได้",
  },
  {
    id: 2,
    name: "ต้นลิ้นมังกรดำแคระ",
    href: "#",
    imageSrc:
      "https://img.th.my-best.com/product_images/88c33c278bad8f09028bfd2d2d585fb3.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=651a969bffab3502d842b9ae6b4585fe",
    imageAlt: "ต้นลิ้นมังกรดำแคระ",
    price: 69,
    about: "ช่วยฟอกอากาศและดูดซับสารพิษ",
  },
  {
    id: 3,
    name: "แจกัน",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT87ZvUNgXg4l-_agN2JigDysHBU3OrRKdXJVtaFrfNuNEDd1NDwe4iadSiRsj3tzUpXB_qrthbnyBPIH20M_fxahsH2dMrbUd1OYUZbbgtq6ZAEwG1wfN7rA&usqp=CAE",
    imageAlt: "แจกัน",
    price: 165,
    about: "แจกันโดนัท แจกันเหลี่ยมสูง ",
  },
  {
    id: 4,
    name: "โคมไฟ",
    href: "#",
    imageSrc:
      "https://down-th.img.susercontent.com/file/b753a7e66b30afab8c4bac3113dfc055.webp",
    imageAlt: "โคมไฟอ่านหนังสือ Vintage Lamp",
    price: 390,
    about: "โคมไฟตั้งโต๊ะ Vintage Lamp",
  },
  {
    id: 5,
    name: "นาฬิกาติดผนัง",
    href: "#",
    imageSrc:
      "https://down-th.img.susercontent.com/file/th-11134207-7qul1-lgdi856klglqb9.webp",
    imageAlt: "นาฬิกาติดผนัง",
    price: 590,
    about: "ขนาด: 30 x 30 cm",
  },
  {
    id: 6,
    name: "cozybrown",
    href: "#",
    imageSrc:
      "https://down-th.img.susercontent.com/file/d4934d3118e9f1827fe51460b6e340b6.webp",
    imageAlt: "cozybrown",
    price: 1790,
    about: "ราวแขวนเสื้อผ้าไม้พับได้ สีเรียบ ",
  },
  {
    id: 7,
    name: "BILD บีลด์",
    href: "#",
    imageSrc:
      "https://www.ikea.com/th/th/images/products/bild-poster-city-puzzle__1244194_pe921107_s5.jpg?f=xl",
    imageAlt: "BILD บีลด์",
    price: 299,
    about: "ภาพโปสเตอร์",
  },
  {
    id: 8,
    name: "DJUNGELSKOG ยุงเงลสกูก",
    href: "#",
    imageSrc:
      "https://www.ikea.com/th/th/images/products/djungelskog-soft-toy-brown-bear__1158437_pe888123_s5.jpg?f=xl",
    imageAlt: "DJUNGELSKOG ยุงเงลสกูก",
    price: 990,
    about: "ตุ๊กตาผ้า, หมีสีน้ำตาล",
  },
  {
    id: 9,
    name: "vBLÅHAJ บลัวฮัย",
    href: "#",
    imageSrc:
      "https://www.ikea.com/th/th/images/products/blahaj-soft-toy-shark__1143962_pe881669_s5.jpg?f=xl",
    imageAlt: "BLÅHAJ บลัวฮัย",
    price: 690,
    about: "ตุ๊กตาผ้า, ฉลาม, 100 ซม.",
  },
  {
    id: 10,
    name: "Lazy Sofa",
    href: "#",
    imageSrc:
      "https://down-th.img.susercontent.com/file/sg-11134202-7rdwt-lyqer7bv0e2084@resize_w450_nl.webp",
    imageAlt: "Lazy Sofa",
    price: 4990,
    about: "โซฟาขนาดเล็ก ",
  },
  {
    id: 11,
    name: "SKÅDIS สกัวดิส",
    href: "#",
    imageSrc:
      "https://www.ikea.com/th/th/images/products/skadis-pegboard-white__1165860_pe890993_s5.jpg?f=xl",
    imageAlt: "SKÅDIS สกัวดิส",
    price: 790,
    about: "แผ่นแขวนจัดเก็บ, ขาว, 76x56 ซม.",
  },
  {
    id: 12,
    name: "YONUO โคมไฟรูปเป็ด ",
    href: "#",
    imageSrc:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6e006c491eae82ac7d88ed35695b9796.jpg?imageMogr2/auto-orient|imageView2/2/w/800/q/70/format/webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 350,
    about: "ไฟLED ซิลิโคนนิ่ม ปรับได้ 2 ระดับ",
  },
];

export default function App() {
  const navigation = [{ name: "Minimal Shop", href: "#", current: true }];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newItems = [...prevItems, { ...product, quantity: 1 }];
      console.log("Updated cart items:", newItems); // ดีบักดูค่าที่อัปเดต
      return newItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log("Current cart items:", cartItems);
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">View Cart</span>
              </button>

              <button
                type="button"
                className="ml-3 rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
              >
                Log In
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center font-serif">
            Minimalist Style
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative border rounded-lg overflow-hidden shadow-md"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-72 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{product.about}</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    {product.price} ฿
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600"
                  >
                    <ShoppingCartIcon className="h-5 w-5 inline-block mr-2" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="mb-2 flex justify-between items-center"
                  >
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>{item.price * item.quantity} ฿</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 text-right font-bold">
              Total: {totalPrice} ฿
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-4 bg-gray-700 text-white py-2 px-4 rounded"
            >
              Close Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
