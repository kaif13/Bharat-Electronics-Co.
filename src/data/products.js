const products = [
  // 🔥 FANS
  {
    id: 1,
    name: "Ceiling Fan (Standard)",
    brand: "Havells",
    category: "Fan",
    description:
      "HAVELLS Standard Frorer with 24 Months Warranty Energy Saving 1200 mm Ceiling Fan",
    features: ["Silent motor", "Energy saving", "Durable build"],
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
    description: "Polar BLDC decorative ceiling fan",
    features: ["High airflow", "Stylish design"],
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
    description: "Powerful desert cooler",
    features: ["Large tank", "Strong airflow"],
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
    description: "Durable modular switch",
    features: ["Shockproof", "Smooth press"],
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
    description: "Safe socket",
    features: ["Heat resistant"],
    price: "₹90",
    details: { brand: "Shynora" },
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497907005/IV/DK/BI/225208141/multicolor-6a-indoasian-shynora-switch.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497907005/IV/DK/BI/225208141/multicolor-6a-indoasian-shynora-switch.jpg",
    ],
  },

  // 🔥 MCB
  {
    id: 6,
    name: "MCB 16A",
    brand: "Shynora",
    category: "MCB",
    description: "Circuit protection MCB",
    features: ["Overload protection"],
    price: "₹250",
    details: { brand: "Shynora", rating: "16A" },
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438910853/TD/XG/XG/226481118/16a-indoasian-shynora.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438910853/TD/XG/XG/226481118/16a-indoasian-shynora.jpg",
    ],
  },

  // 🔥 LIGHT
  {
    id: 7,
    name: "LED Panel Light",
    brand: "Ledure",
    category: "Light",
    description: "Bright LED panel",
    features: ["Low power"],
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
    description: "High-quality wire",
    features: ["Copper core"],
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
    description: "Combo set",
    features: ["Durable"],
    price: "₹250",
    details: { brand: "Shynora" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 10,
    name: "MCB 32A",
    brand: "Shynora",
    category: "MCB",
    description: "Heavy duty MCB",
    features: ["Safe"],
    price: "₹320",
    details: { brand: "Shynora" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 11,
    name: "Switch (Standard)",
    brand: "Havells Standard",
    category: "Switch",
    description: "Standard switch",
    features: ["Reliable"],
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
    description: "Energy efficient bulb",
    features: ["Long life"],
    price: "₹120",
    details: { brand: "Ledure" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },
  {
    id: 13,
    name: "Socket 16A",
    brand: "Havells Standard",
    category: "Socket",
    description: "Heavy duty socket.",
    features: ["Safe"],
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
    features: ["Shockproof", "Long life"],
    price: "₹130",
    details: { brand: "Shynora" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 15,
    name: "Socket 5A",
    brand: "Shynora",
    category: "Socket",
    description: "Durable socket for daily usage.",
    features: ["Heat resistant"],
    price: "₹100",
    details: { brand: "Shynora" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 16,
    name: "MCB 20A",
    brand: "Shynora",
    category: "MCB",
    description: "Reliable circuit breaker.",
    features: ["Overload protection"],
    price: "₹280",
    details: { brand: "Shynora" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 17,
    name: "Switch Plate 8 Module",
    brand: "Havells Standard",
    category: "Switch",
    description: "Strong and stylish plate.",
    features: [
      "Sleek design for soft operation of switches",
      "FR grade engineering plastic",
      "Black finish that suites with any interior",
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
    description: "Premium Rio series board.",
    features: ["Elegant design"],
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
    description: "Flexible copper wire.",
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
    description: "Heavy duty wiring cable.",
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
    description: "Bright LED tube.",
    features: ["Energy saving"],
    price: "₹220",
    details: { brand: "Ledure" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 22,
    name: "LED Bulb 12W",
    brand: "Ledure",
    category: "Light",
    description: "High brightness bulb.",
    features: ["Long life"],
    price: "₹150",
    details: { brand: "Ledure" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  {
    id: 23,
    name: "Flood Light 100W",
    brand: "Ledure",
    category: "Light",
    description: "Outdoor flood light.",
    features: ["Waterproof"],
    price: "₹650",
    details: { brand: "Ledure" },
    image: "https://via.placeholder.com/300",
    images: ["https://via.placeholder.com/300"],
  },

  // {
  //   id: 24,
  //   name: "Ceiling Fan BLDC",
  //   brand: "Havells",
  //   category: "Fan",
  //   description: "Energy efficient BLDC fan.",
  //   features: ["Silent"],
  //   price: "₹4,200",
  //   details: { brand: "Havells" },
  //   image: "https://via.placeholder.com/300",
  //   images: ["https://via.placeholder.com/300"],
  // },

  {
    id: 25,
    name: "Table Fan",
    brand: "Polar",
    category: "Fan",
    description: "Compact table fan.",
    features: ["Portable"],
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
      "Polar Annexer 400mmWall MountedFan Mauve|Button Control Oscillating ElectricPlastic with 2 Year Warranty 400 mm Wall Fan (MAUVE | Pack of 1)",
    features: ["High airflow"],
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
    description: "Large Tank Capacity:70L, 110DIA  28MM MOTOR",
    features: ["Big tank", "3 Side Honeycomb Pad"],
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
