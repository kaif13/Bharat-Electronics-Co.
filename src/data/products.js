const products = [
  // 🔥 FANS
  {
    id: 1,
    name: "Ceiling Fan (Standard)",
    brand: "Havells",
    category: "Fan",
    description:
      "HAVELLS Standard Frorer with 24 Months Warranty Energy Saving 1200 mm Ceiling Fan (1 Star | Coffee Brown | Pack of 1)",
    features: ["Silent motor", "Energy saving", "Durable build"],
    price: "₹3,400",
    details: {
      brand: "Havells",
      type: "Ceiling fan",
      warranty: "2 years",
    },
    image:
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/a/b/e/standard-frorer-basic-58-1-induction-ceiling-fan-1200-havells-original-imahfp5fnnd2uqdn.jpeg?q=90",
    images: [
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/a/b/e/standard-frorer-basic-58-1-induction-ceiling-fan-1200-havells-original-imahfp5fnnd2uqdn.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/u/d/u/standard-frorer-basic-58-1-induction-ceiling-fan-1200-havells-original-imahfp5fknhwzcdj.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/fan/x/v/9/standard-frorer-basic-58-1-induction-ceiling-fan-1200-havells-original-imahfp5fcvpcecgn.jpeg?q=90",
    ],
  },

  {
    id: 2,
    name: "Ceiling Fan (Decorative)",
    brand: "Polar",
    category: "Fan",
    description:
      "Polar Ef with 2 Year Warranty BLDC Motor 1200 mm Ceiling Fan (5 Star | Brown | Pack of 1)",
    features: ["High airflow", "Stylish design"],
    price: "₹2,200",
    details: {
      brand: "Polar",
      type: "Ceiling fan",
    },
    image:
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/q/f/v/efico-bldc-3-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzga7zehfqw8.jpeg?q=60&crop=false",
    images: [
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/q/f/v/efico-bldc-3-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzga7zehfqw8.jpeg?q=60&crop=false",
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/z/h/w/efico-bldc-1-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzg9hubfcypd.jpeg?q=60&crop=false",
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/b/n/4/efico-bldc-1-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzg9ztuyahj3.jpeg?q=60&crop=false",
      "https://rukminim3.flixcart.com/image/1114/972/xif0q/fan/k/k/7/efico-bldc-1-semi-decor-26-1-bldc-ceiling-fan-1200-polar-original-imahjzg977ejwyzt.jpeg?q=60&crop=false",
    ],
  },

  {
    id: 3,
    name: "Cooler (Desert Type)",
    brand: "MP Meghdoot",
    category: "Cooler",
    description:
      "Powerful desert cooler suitable for large rooms with strong cooling.",
    features: ["Large tank", "Strong airflow"],
    price: "₹6,000",
    details: {
      brand: "MP Meghdoot",
      type: "Desert cooler",
    },
    image: "https://images.unsplash.com/photo-1599982098788-52ca0a1fe39d",
    images: ["https://images.unsplash.com/photo-1599982098788-52ca0a1fe39d"],
  },

  // 🔥 SWITCHES (SHYNORA + HAVELLS)
  {
    id: 4,
    name: "Modular Switch 6A",
    brand: "Shynora",
    category: "Switch",
    description:
      "Shynora modular switch with smooth press and long life durability.",
    features: ["Shockproof", "Smooth press"],
    price: "₹110",
    details: {
      brand: "Shynora",
      current: "6A",
    },
    image: "https://images.unsplash.com/photo-1610228192972-a6824731d7b8",
    images: ["https://images.unsplash.com/photo-1610228192972-a6824731d7b8"],
  },

  {
    id: 5,
    name: "Switch Plate (Standard)",
    brand: "Havells Standard",
    category: "Switch",
    description:
      "Havells standard switch plate with strong build and clean finish.",
    features: ["Durable", "Modern look"],
    price: "₹300",
    details: {
      brand: "Havells",
      type: "Standard plate",
    },
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36"],
  },

  {
    id: 6,
    name: "Switch Board (Rio Series)",
    brand: "Havells Rio",
    category: "Switch",
    description:
      "Premium Havells Rio switch board with elegant design and smooth touch.",
    features: ["Premium finish", "Soft touch"],
    price: "₹450",
    details: {
      brand: "Havells Rio",
      type: "Switch board",
    },
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36"],
  },

  // 🔥 SOCKETS
  {
    id: 7,
    name: "3 Pin Socket",
    brand: "Shynora",
    category: "Socket",
    description: "Shynora socket with safe design and long durability.",
    features: ["Heat resistant", "Safe usage"],
    price: "₹90",
    details: {
      brand: "Shynora",
      type: "3 pin socket",
    },
    image: "https://images.unsplash.com/photo-1581092331129-293b0566a5c7",
    images: ["https://images.unsplash.com/photo-1581092331129-293b0566a5c7"],
  },

  {
    id: 8,
    name: "Socket (Rio Series)",
    brand: "Havells Rio",
    category: "Socket",
    description: "Havells Rio socket with premium quality and safe design.",
    features: ["Premium build", "Durable"],
    price: "₹120",
    details: {
      brand: "Havells Rio",
      type: "Socket",
    },
    image: "https://images.unsplash.com/photo-1581092331129-293b0566a5c7",
    images: ["https://images.unsplash.com/photo-1581092331129-293b0566a5c7"],
  },

  // 🔥 MCB
  {
    id: 9,
    name: "MCB 16A",
    brand: "Shynora",
    category: "MCB",
    description: "Reliable MCB for circuit protection with safe performance.",
    features: ["Overload protection", "Safe usage"],
    price: "₹250",
    details: {
      brand: "Shynora",
      rating: "16A",
    },
    image: "https://images.unsplash.com/photo-1581092331129-293b0566a5c7",
    images: ["https://images.unsplash.com/photo-1581092331129-293b0566a5c7"],
  },

  // 🔥 LIGHTS
  {
    id: 10,
    name: "LED Panel Light",
    brand: "Ledure",
    category: "Light",
    description:
      "Bright LED panel light suitable for home and office lighting.",
    features: ["Low power", "Bright light"],
    price: "₹350",
    details: {
      brand: "Ledure",
      power: "12W",
    },
    image: "https://images.unsplash.com/photo-1555685812-4b7435e7c3f0",
    images: ["https://images.unsplash.com/photo-1555685812-4b7435e7c3f0"],
  },

  // 🔥 WIRE
  {
    id: 11,
    name: "Electrical Wire",
    brand: "Havells Rio",
    category: "Wire",
    description: "High-quality Havells wire for safe home wiring.",
    features: ["Copper core", "Flexible"],
    price: "₹180/m",
    details: {
      brand: "Havells Rio",
      insulation: "PVC",
    },
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d36",
    images: ["https://images.unsplash.com/photo-1589571894960-20bbe2828d36"],
  },
];

export default products;
