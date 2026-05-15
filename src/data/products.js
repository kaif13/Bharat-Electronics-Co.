import floodLightImage from "../assets/products/flood-light.jpg";
import ledBulbImage from "../assets/products/led-bulb.jpg";
import ledTubeLightImage from "../assets/products/led-tube-light.jpg";
import mcbBreakerImage from "../assets/products/mcb-breaker.jpg";
import premiumSwitchImage from "../assets/products/premium-switch.jpg";
import socket5aImage from "../assets/products/socket-5a.jpg";
import switchSocketComboImage from "../assets/products/switch-socket-combo.jpg";

const products = [
  // 🔥 FANS
  {
    id: 1,
    name: "Ceiling Fan (Standard)",
    brand: "Havells",
    category: "Fan",
    description:
      "A reliable 1200 mm Havells ceiling fan made for daily home and shop use, with steady air delivery, low-noise running, and a durable motor backed by a 2 year warranty.",
    features: [
      "1200 mm sweep for wide air coverage",
      "Quiet motor for bedrooms and halls",
      "Energy-saving daily performance",
      "Durable body with 2 year warranty",
    ],
    price: "₹3,400",
    details: { brand: "Havells", type: "Ceiling fan", warranty: "2 years" },
    image:
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/a/b/e/standard-frorer-basic-58-1-induction-ceiling-fan-1200-havells-original-imahfp5fnnd2uqdn.jpeg?q=90",
    images: [
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/a/b/e/standard-frorer-basic-58-1-induction-ceiling-fan-1200-havells-original-imahfp5fnnd2uqdn.jpeg?q=90",
    ],
  },

  {
    id: 2,
    name: "Ceiling Fan (Decorative)",
    brand: "Polar",
    category: "Fan",
    description:
      "A decorative Polar ceiling fan with BLDC technology for efficient cooling and a premium look, suitable for bedrooms, living rooms, and modern interiors.",
    features: [
      "BLDC motor for lower power use",
      "Decorative design for modern rooms",
      "High air delivery",
      "Smooth and quiet operation",
    ],
    price: "₹2,200",
    details: { brand: "Polar", type: "Ceiling fan" },
    image:
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/q/f/v/efico-bldc-3-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzga7zehfqw8.jpeg?q=60",
    images: [
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/q/f/v/efico-bldc-3-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzga7zehfqw8.jpeg?q=60",
    ],
  },

  {
    id: 3,
    name: "Cooler (Desert Type)",
    brand: "MP Meghdoot",
    category: "Cooler",
    description:
      "A powerful desert cooler designed for strong summer cooling in larger rooms, shops, and semi-open areas with a large tank and high airflow.",
    features: [
      "Large water tank for longer cooling",
      "Strong airflow for big spaces",
      "Suitable for homes and shops",
      "Easy daily use and maintenance",
    ],
    price: "₹6,000",
    details: { brand: "MP Meghdoot", type: "Desert cooler" },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-QZ_R4rTONmJeLbPON5IOSBiqmSJ4D0hnA&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-QZ_R4rTONmJeLbPON5IOSBiqmSJ4D0hnA&s",
    ],
  },

  // 🔥 SWITCHES
  {
    id: 4,
    name: "Modular Switch 6A",
    brand: "Shynora",
    category: "Switch",
    description:
      "A 6A modular switch for lights, fans, and regular household points, built for smooth operation and safe daily electrical use.",
    features: [
      "6A rating for regular load points",
      "Smooth press action",
      "Shock-resistant modular design",
      "Fits standard modular plates",
    ],
    price: "₹110",
    details: { brand: "Shynora", current: "6A" },
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497907005/IV/DK/BI/225208141/multicolor-6a-indoasian-shynora-switch.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497907005/IV/DK/BI/225208141/multicolor-6a-indoasian-shynora-switch.jpg",
    ],
  },

  // 🔥 SOCKET
  {
    id: 5,
    name: "3 Pin Socket",
    brand: "Shynora",
    category: "Socket",
    description:
      "A compact 3 pin socket for regular electrical appliances, made with heat-resistant material for safer daily usage.",
    features: [
      "3 pin socket for common appliances",
      "Heat-resistant body",
      "Firm plug grip",
      "Suitable for home and office points",
    ],
    price: "₹90",
    details: { brand: "Shynora" },
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497907005/IV/DK/BI/225208141/multicolor-6a-indoasian-shynora-switch.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497907005/IV/DK/BI/225208141/multicolor-6a-indoasian-shynora-switch.jpg",
    ],
  },

  // 🔥 MCB

  // 🔥 LIGHT
  {
    id: 7,
    name: "LED Panel Light",
    brand: "Ledure",
    category: "Light",
    description:
      "A bright 12W LED panel light for clean ceiling lighting in rooms, counters, offices, and small commercial spaces.",
    features: [
      "12W power-efficient lighting",
      "Clean panel look for ceilings",
      "Bright and even light spread",
      "Low heat and low maintenance",
    ],
    price: "₹350",
    details: { brand: "Ledure", power: "12W" },
    image:
      "https://m.media-amazon.com/images/I/41Vrmo0PzuL._SY300_SX300_QL70.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41Vrmo0PzuL._SY300_SX300_QL70.jpg",
    ],
  },

  // 🔥 WIRE
  {
    id: 8,
    name: "Electrical Wire",
    brand: "Havells Rio",
    category: "Wire",
    description:
      "A dependable Havells Rio electrical wire for safe internal wiring, made for consistent current flow and long service life.",
    features: [
      "Copper conductor for better conductivity",
      "Flexible insulation for easy installation",
      "Suitable for home wiring",
      "Reliable branded quality",
    ],
    price: "₹180/m",
    details: { brand: "Havells Rio" },
    image:
      "https://m.media-amazon.com/images/I/41wVQq2h8EL._SX300_SY300_QL70.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41wVQq2h8EL._SX300_SY300_QL70.jpg",
    ],
  },

  // 🔥 NEW PRODUCTS ADDED
  {
    id: 9,
    name: "Switch & Socket Combo",
    brand: "Shynora",
    category: "Switch",
    description:
      "A ready switch and socket combo for neat modular board setups, ideal for rooms, counters, and utility points.",
    features: [
      "Switch and socket in one set",
      "Clean modular finish",
      "Useful for new boards and replacement",
      "Durable body for daily use",
    ],
    price: "₹250",
    details: { brand: "Shynora" },
    image: switchSocketComboImage,
    images: [switchSocketComboImage],
  },

  {
    id: 10,
    name: "MCB 32A",
    brand: "Shynora",
    category: "MCB",
    description:
      "A 32A MCB for heavier electrical circuits, designed to protect wiring and appliances from overload and short-circuit faults.",
    features: [
      "32A rating for higher load circuits",
      "Overload protection",
      "Short-circuit safety",
      "Quick trip response",
    ],
    price: "₹320",
    details: { brand: "Shynora" },
    image: mcbBreakerImage,
    images: [mcbBreakerImage],
  },

  {
    id: 11,
    name: "Switch (Standard)",
    brand: "Havells Standard",
    category: "Switch",
    description:
      "A Havells standard switch for reliable day-to-day operation in homes, shops, and offices with a clean modular finish.",
    features: [
      "Reliable Havells quality",
      "Smooth switching action",
      "Good for lights and fans",
      "Simple modern design",
    ],
    price: "₹140",
    details: { brand: "Havells" },
    image:
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/a/c/acgppcgv06_base_1.jpg",
    images: [
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/a/c/acgppcgv06_base_1.jpg",
    ],
  },

  {
    id: 12,
    name: "LED Bulb",
    brand: "Ledure",
    category: "Light",
    description:
      "An energy-efficient LED bulb for daily room lighting, offering bright output with low electricity consumption.",
    features: [
      "Low power consumption",
      "Bright everyday lighting",
      "Long service life",
      "Easy replacement for regular bulbs",
    ],
    price: "₹120",
    details: { brand: "Ledure" },
    image: ledBulbImage,
    images: [ledBulbImage],
  },
  {
    id: 13,
    name: "Socket 16A",
    brand: "Havells Standard",
    category: "Socket",
    description:
      "A 16A Havells socket made for heavier appliances such as geysers, irons, heaters, and kitchen equipment.",
    features: [
      "16A rating for heavy appliances",
      "Strong plug grip",
      "Heat-resistant construction",
      "Trusted Havells build quality",
    ],
    price: "₹160",
    details: { brand: "Havells" },
    image:
      "https://havells.com/media/catalog/product/cache/206c61f8e794cc73ece691a73796356e/import/Switches/AHFKCXW253.jpg",
    images: [
      "https://havells.com/media/catalog/product/cache/206c61f8e794cc73ece691a73796356e/import/Switches/AHFKCXW253.jpg",
    ],
  },
  {
    id: 14,
    name: "Switch 6A (Premium)",
    brand: "Shynora",
    category: "Switch",
    description: "Premium quality modular switch with smooth operation.",
    features: [
      "Premium smooth press feel",
      "Shock-resistant body",
      "Long-life switching mechanism",
      "Best for visible modular boards",
    ],
    price: "₹130",
    details: { brand: "Shynora" },
    image: premiumSwitchImage,
    images: [premiumSwitchImage],
  },

  {
    id: 15,
    name: "Socket 5A",
    brand: "Shynora",
    category: "Socket",
    description:
      "A 5A socket for light electrical loads and everyday plug points, suitable for chargers, lamps, and small appliances.",
    features: [
      "5A rating for light appliances",
      "Heat-resistant material",
      "Compact modular fit",
      "Firm socket contact",
    ],
    price: "₹100",
    details: { brand: "Shynora" },
    image: socket5aImage,
    images: [socket5aImage],
  },

  {
    id: 16,
    name: "MCB 20A",
    brand: "Shynora",
    category: "MCB",
    description:
      "A 20A MCB for medium-load circuits, helping protect wiring from overloads and unexpected electrical faults.",
    features: [
      "20A rating for medium loads",
      "Overload protection",
      "Short-circuit protection",
      "Easy reset after trip",
    ],
    price: "₹280",
    details: { brand: "Shynora" },
    image: mcbBreakerImage,
    images: [mcbBreakerImage],
  },

  {
    id: 17,
    name: "Switch Plate 8 Module",
    brand: "Havells Standard",
    category: "Switch",
    description:
      "A stylish 8 module Havells switch plate for building a clean multi-switch board with a premium matte finish.",
    features: [
      "Sleek design for soft operation of switches",
      "FR grade engineering plastic",
      "Black finish that suits modern interiors",
      "Easy and quick to install",
      "Slim and elegant design plate",
      "Matte finish",
      "Warranty : 1 Year",
    ],
    price: "₹350",
    details: { brand: "Havells" },
    image:
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/a/h/ahrplcbh08_1.jpg",
    images: [
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/a/h/ahrplcbh08_1.jpg",
    ],
  },

  {
    id: 18,
    name: "Switch Board Rio",
    brand: "Havells Rio",
    category: "Switch",
    description:
      "A premium Havells Rio switch board for neat electrical fittings with a clean, modern look for homes and commercial spaces.",
    features: [
      "Premium Rio series finish",
      "Elegant modular design",
      "Useful for multi-point boards",
      "Strong and easy to install",
    ],
    price: "₹500",
    details: { brand: "Havells Rio" },
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/HH/MC/RA/111569478/reo-havells-switch.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/6/HH/MC/RA/111569478/reo-havells-switch.jpg",
    ],
  },

  {
    id: 19,
    name: "Wire 1.5 sqmm",
    brand: "Havells Rio",
    category: "Wire",
    description:
      "A 1.5 sqmm Havells Rio copper wire for lighting and regular low-load circuits, made for safe concealed wiring.",
    features: [
      "Flame Retardant High Grade Insulation",
      "101 % Conductivity",
      "99.95 % Copper Purity",
      "Extra Flexible",
    ],
    price: "₹200/m",
    details: { brand: "Havells Rio" },
    image:
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/1/_/1.0_black_main_1.jpg",
    images: [
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/1/_/1.0_black_main_1.jpg",
    ],
  },

  {
    id: 20,
    name: "Wire 2.5 sqmm",
    brand: "Havells Rio",
    category: "Wire",
    description:
      "A 2.5 sqmm Havells Rio copper wire for heavier home circuits such as sockets, kitchen points, and utility wiring.",
    features: [
      "Flame Retardant High Grade Insulation",
      "101 % Conductivity",
      "99.95 % Copper Purity",
      "Extra Flexible",
    ],
    price: "₹260/m",
    details: { brand: "Havells Rio" },
    image:
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/1/_/1.0_black_main_2.jpg",
    images: [
      "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/1/_/1.0_black_main_2.jpg",
    ],
  },

  {
    id: 21,
    name: "LED Tube Light",
    brand: "Ledure",
    category: "Light",
    description:
      "A slim LED tube light for bright, even illumination in rooms, shops, counters, and office areas.",
    features: [
      "Bright tube-style lighting",
      "Energy-saving LED technology",
      "Wide light coverage",
      "Good for shops and rooms",
    ],
    price: "₹220",
    details: { brand: "Ledure" },
    image: ledTubeLightImage,
    images: [ledTubeLightImage],
  },

  {
    id: 22,
    name: "LED Bulb 12W",
    brand: "Ledure",
    category: "Light",
    description:
      "A 12W LED bulb with strong brightness for daily home and shop use while keeping electricity usage low.",
    features: [
      "12W bright output",
      "Low electricity consumption",
      "Long operating life",
      "Suitable for rooms and counters",
    ],
    price: "₹150",
    details: { brand: "Ledure" },
    image: ledBulbImage,
    images: [ledBulbImage],
  },

  {
    id: 23,
    name: "Flood Light 100W",
    brand: "Ledure",
    category: "Light",
    description:
      "A 100W outdoor LED flood light for gates, parking areas, shop fronts, warehouses, and open spaces.",
    features: [
      "100W high brightness",
      "Outdoor weather-resistant body",
      "Wide beam coverage",
      "Ideal for security lighting",
    ],
    price: "₹650",
    details: { brand: "Ledure" },
    image: floodLightImage,
    images: [floodLightImage],
  },

  {
    id: 25,
    name: "Table Fan",
    brand: "Polar",
    category: "Fan",
    description:
      "A compact Polar table fan for personal cooling on desks, counters, bedrooms, and small work areas.",
    features: [
      "Portable table-top design",
      "Good airflow for personal cooling",
      "Easy to move between rooms",
      "Suitable for counters and study tables",
    ],
    price: "₹1,500",
    details: { brand: "Polar" },
    image:
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/o/a/c/table-hs-white-mouve-basic-110-1-induction-table-fan-400-polar-original-imahhw95ezcshrnf.jpeg?q=90",
    images: [
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/o/a/c/table-hs-white-mouve-basic-110-1-induction-table-fan-400-polar-original-imahhw95ezcshrnf.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/4/r/e/table-ns-white-mouve-basic-55-1-induction-table-fan-400-polar-original-imahhw95st5dy6aa.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/t/j/u/table-hs-white-mouve-basic-110-1-induction-table-fan-400-polar-original-imahhw953ht9j8hf.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/9/i/t/table-ns-white-mouve-basic-55-1-induction-table-fan-400-polar-original-imahhw952gxtktgx.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/u/h/y/fanny-pedestal-basic-55-1-induction-pedestal-fan-400-polar-original-imahhf6pbpx7rpnd.jpeg?q=90",
    ],
  },

  {
    id: 26,
    name: "Wall Fan",
    brand: "Polar",
    category: "Fan",
    description:
      "A 400 mm Polar wall fan with oscillation and button control, ideal for rooms, shops, kitchens, and counters where floor space is limited.",
    features: [
      "400 mm wall-mounted fan",
      "Oscillating airflow coverage",
      "Saves floor and table space",
      "2 year warranty",
    ],
    price: "₹2,000",
    details: { brand: "Polar" },
    image:
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/w/5/s/annexer-400mmwall-mountedfan-mauve-button-control-oscillating-original-imahhneg3864mfxz.jpeg?q=90",
    images: [
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/w/5/s/annexer-400mmwall-mountedfan-mauve-button-control-oscillating-original-imahhneg3864mfxz.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/v/w/b/annexer-400mmwall-mountedfan-mauve-button-control-oscillating-original-imahhnegsemspfey.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/g/6/k/annexer-400mm-wall-mounted-fan-blue-button-control-oscillating-original-imahjygrapzxwqap.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/f/u/d/annexer-400mm-wall-mounted-fan-blue-button-control-oscillating-original-imahjygrfumqrvfs.jpeg?q=90",
    ],
  },

  {
    id: 27,
    name: "Cooler Personal",
    brand: "MP Meghdoot",
    category: "Cooler",
    description:
      "A personal MP Meghdoot cooler with 70L tank capacity and 3-side honeycomb pads for strong cooling in homes and shops.",
    features: [
      "70L large water tank",
      "3-side honeycomb cooling pads",
      "Strong motor for better air throw",
      "Useful for summer daily cooling",
    ],
    price: "₹4,000",
    details: { brand: "MP Meghdoot" },
    image:
      "https://www.mpcooler.com/admin/assets/images/product-gallery/685fc2aa8f27d.webp",
    images: [
      "https://www.mpcooler.com/admin/assets/images/product-gallery/685fc2aa8f27d.webp",
      "https://www.mpcooler.com/admin/assets/images/product-gallery/685fc2ab4d982.webp",
      "https://www.mpcooler.com/admin/assets/images/product-gallery/685fc2ac9c5b2.webp",
    ],
  },
];

export default products;
