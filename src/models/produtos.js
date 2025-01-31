const produtos = [
  {
    nome: "T\u00eanis",
    model: "Nike ZoomX Invincible - Masculino",
    description:
      "T\u00eanis leve, projetado para m\u00e1xima performance em corridas.",
    price: 1100.0,
    new_price: 990.0,
    id: 1,
    image: "/assets/product.png",
    discount: 20,
    color: ["#FF6969", "#6EEEFF", "#5D5D5D"],
    category: "esportivo",
    sizes: [39, 40, 42],
    brand: "Nike",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Mizuno Wave Rider 26 - Masculino",
    description: "Desempenho garantido para corridas de longa dist\u00e2ncia.",
    price: 900.0,
    new_price: 800.0,
    id: 2,
    image: "/assets/product.png",
    discount: 10,
    color: ["#6D70B7", "#5D5D5D"],
    category: "esportivo",
    sizes: [41, 42, 43],
    brand: "Mizuno",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Mizuno Modelo 3 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 480.73,
    new_price: 892.54,
    id: 3,
    image: "/assets/product.png",
    discount: 5,
    color: ["#6D70B7"],
    category: "esportivo",
    sizes: [43, 41, 39, 40, 42],
    brand: "Mizuno",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Nike Modelo 4 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 773.32,
    new_price: 419.94,
    id: 4,
    image: "/assets/product.png",
    discount: 5,
    color: ["#6D70B7"],
    category: "casual",
    sizes: [43, 41, 42, 40, 39],
    brand: "Nike",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Nike Modelo 5 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1214.41,
    new_price: 661.26,
    id: 5,
    image: "/assets/product.png",
    discount: 10,
    color: ["#5D5D5D"],
    category: "esportivo",
    sizes: [42, 39],
    brand: "Olimpikus",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Allstar Modelo 6 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 348.17,
    new_price: 1254.98,
    id: 6,
    image: "/assets/product.png",
    discount: 20,
    color: ["#6D70B7", "#FF6969", "#6EEEFF"],
    category: "casual",
    sizes: [42, 43, 39, 41],
    brand: "Puma",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Mizuno Modelo 7 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 700.32,
    new_price: 317.26,
    id: 7,
    image: "/assets/product.png",
    discount: 20,
    color: ["#FF6969", "#6EEEFF", "#6D70B7"],
    category: "esportivo",
    sizes: [41, 39, 42, 40],
    brand: "Nike",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Mizuno Modelo 8 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1089.39,
    new_price: 575.34,
    id: 8,
    image: "/assets/product.png",
    discount: 5,
    color: ["#6EEEFF"],
    category: "esportivo",
    sizes: [40, 43, 39],
    brand: "Puma",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Mizuno Modelo 9 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 651.76,
    new_price: 752.97,
    id: 9,
    image: "/assets/product.png",
    discount: 15,
    color: ["#FF6969"],
    category: "esportivo",
    sizes: [41, 39],
    brand: "Olimpikus",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis",
    model: "Allstar Modelo 10 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 759.64,
    new_price: 755.95,
    id: 10,
    image: "/assets/product.png",
    discount: 10,
    color: ["#5D5D5D", "#FF6969"],
    category: "casual",
    sizes: [40, 39, 43],
    brand: "Allstar",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 11",
    model: "Modelo 11 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1482.19,
    new_price: 1096.31,
    id: 11,
    image: "/assets/product.png",
    discount: 10,
    color: ["#44733b", "#304a6c", "#3ebdb3"],
    category: "esportivo",
    sizes: [40, 43, 43, 40, 42],
    brand: "Allstar",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 12",
    model: "Modelo 12 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1245.69,
    new_price: 980.78,
    id: 12,
    image: "/assets/product.png",
    discount: 15,
    color: ["#000065", "#15822f", "#ff5755"],
    category: "casual",
    sizes: [42, 42, 41, 43],
    brand: "Olimpikus",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 13",
    model: "Modelo 13 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 871.48,
    new_price: 449.42,
    id: 13,
    image: "/assets/product.png",
    discount: 10,
    color: ["#e270fd"],
    category: "esportivo",
    sizes: [40, 40, 42, 41, 40],
    brand: "Allstar",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 14",
    model: "Modelo 14 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 265.9,
    new_price: 1157.4,
    id: 14,
    image: "/assets/product.png",
    discount: 5,
    color: ["#57fbca", "#0180d8"],
    category: "casual",
    sizes: [42],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 15",
    model: "Modelo 15 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1260.53,
    new_price: 1160.4,
    id: 15,
    image: "/assets/product.png",
    discount: 5,
    color: ["#b4b3cc"],
    category: "esportivo",
    sizes: [42],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 16",
    model: "Modelo 16 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 565.88,
    new_price: 172.93,
    id: 16,
    image: "/assets/product.png",
    discount: 5,
    color: ["#da0337", "#f2fb3f", "#71104a"],
    category: "casual",
    sizes: [42],
    brand: "Allstar",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 17",
    model: "Modelo 17 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1250.32,
    new_price: 1285.47,
    id: 17,
    image: "/assets/product.png",
    discount: 10,
    color: ["#8fe593"],
    category: "esportivo",
    sizes: [39, 41, 43],
    brand: "Mizuno",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 18",
    model: "Modelo 18 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 738.6,
    new_price: 1384.12,
    id: 18,
    image: "/assets/product.png",
    discount: 20,
    color: ["#893431"],
    category: "esportivo",
    sizes: [39, 42, 42, 42],
    brand: "Nike",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 19",
    model: "Modelo 19 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 954.96,
    new_price: 1063.35,
    id: 19,
    image: "/assets/product.png",
    discount: 20,
    color: ["#616605"],
    category: "casual",
    sizes: [43],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 20",
    model: "Modelo 20 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 153.6,
    new_price: 225.12,
    id: 20,
    image: "/assets/product.png",
    discount: 10,
    color: ["#d5c4cd", "#39e8c1"],
    category: "casual",
    sizes: [43, 41, 39, 42, 41],
    brand: "Allstar",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 21",
    model: "Modelo 21 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1429.14,
    new_price: 987.72,
    id: 21,
    image: "/assets/product.png",
    discount: 10,
    color: ["#2b02e5"],
    category: "esportivo",
    sizes: [41],
    brand: "Mizuno",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 22",
    model: "Modelo 22 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 609.94,
    new_price: 651.06,
    id: 22,
    image: "/assets/product.png",
    discount: 20,
    color: ["#c120b6", "#9a5143"],
    category: "casual",
    sizes: [41, 43, 41, 39],
    brand: "Allstar",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 23",
    model: "Modelo 23 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 926.44,
    new_price: 968.59,
    id: 23,
    image: "/assets/product.png",
    discount: 10,
    color: ["#06551c"],
    category: "casual",
    sizes: [43, 43, 43, 40],
    brand: "Mizuno",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 24",
    model: "Modelo 24 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 372.04,
    new_price: 131.9,
    id: 24,
    image: "/assets/product.png",
    discount: 15,
    color: ["#bae203", "#bdd02e"],
    category: "casual",
    sizes: [42],
    brand: "Allstar",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 25",
    model: "Modelo 25 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1048.21,
    new_price: 1390.8,
    id: 25,
    image: "/assets/product.png",
    discount: 10,
    color: ["#22a726", "#dbe87d"],
    category: "casual",
    sizes: [42, 39, 41],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 26",
    model: "Modelo 26 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1386.44,
    new_price: 1472.56,
    id: 26,
    image: "/assets/product.png",
    discount: 10,
    color: ["#b42b57", "#4ccecc"],
    category: "casual",
    sizes: [40, 41, 43, 42],
    brand: "Olimpikus",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 27",
    model: "Modelo 27 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 991.78,
    new_price: 229.31,
    id: 27,
    image: "/assets/product.png",
    discount: 10,
    color: ["#554496", "#11c0b7"],
    category: "casual",
    sizes: [42],
    brand: "Puma",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 28",
    model: "Modelo 28 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1301.18,
    new_price: 1062.97,
    id: 28,
    image: "/assets/product.png",
    discount: 5,
    color: ["#415816", "#97c70c"],
    category: "esportivo",
    sizes: [41, 41, 43, 40],
    brand: "Olimpikus",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 29",
    model: "Modelo 29 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 340.09,
    new_price: 591.68,
    id: 29,
    image: "/assets/product.png",
    discount: 20,
    color: ["#93974f", "#79827f"],
    category: "esportivo",
    sizes: [43, 39, 40, 43, 39],
    brand: "Puma",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 30",
    model: "Modelo 30 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 854.05,
    new_price: 510.26,
    id: 30,
    image: "/assets/product.png",
    discount: 10,
    color: ["#31663c", "#829fec"],
    category: "casual",
    sizes: [41],
    brand: "Allstar",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 31",
    model: "Modelo 31 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 888.15,
    new_price: 581.36,
    id: 31,
    image: "/assets/product.png",
    discount: 20,
    color: ["#e1017d", "#466cfb", "#991f48"],
    category: "casual",
    sizes: [42, 41, 43],
    brand: "Olimpikus",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 32",
    model: "Modelo 32 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1341.68,
    new_price: 874.02,
    id: 32,
    image: "/assets/product.png",
    discount: 10,
    color: ["#1c5dd9", "#a993fd", "#52de44"],
    category: "casual",
    sizes: [43],
    brand: "Allstar",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 33",
    model: "Modelo 33 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 609.95,
    new_price: 109.81,
    id: 33,
    image: "/assets/product.png",
    discount: 5,
    color: ["#26692f", "#4c7b4a", "#9f0189"],
    category: "casual",
    sizes: [39, 40, 39],
    brand: "Puma",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 34",
    model: "Modelo 34 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1390.06,
    new_price: 317.17,
    id: 34,
    image: "/assets/product.png",
    discount: 15,
    color: ["#453076", "#b34cae"],
    category: "casual",
    sizes: [39, 42],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 35",
    model: "Modelo 35 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1439.58,
    new_price: 1011.82,
    id: 35,
    image: "/assets/product.png",
    discount: 5,
    color: ["#5ee4c9", "#41b197"],
    category: "esportivo",
    sizes: [39, 42],
    brand: "Nike",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 36",
    model: "Modelo 36 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1016.82,
    new_price: 1285.25,
    id: 36,
    image: "/assets/product.png",
    discount: 10,
    color: ["#318320", "#f3bad0", "#b93c54"],
    category: "casual",
    sizes: [40, 40, 43, 42, 40],
    brand: "Olimpikus",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 37",
    model: "Modelo 37 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1181.88,
    new_price: 1250.71,
    id: 37,
    image: "/assets/product.png",
    discount: 20,
    color: ["#26c359", "#d68eb3"],
    category: "esportivo",
    sizes: [41],
    brand: "Puma",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 38",
    model: "Modelo 38 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1029.49,
    new_price: 1407.87,
    id: 38,
    image: "/assets/product.png",
    discount: 20,
    color: ["#5373f3", "#bee834", "#85bead"],
    category: "esportivo",
    sizes: [41, 39, 43, 40, 40],
    brand: "Olimpikus",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 39",
    model: "Modelo 39 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1468.96,
    new_price: 1112.11,
    id: 39,
    image: "/assets/product.png",
    discount: 15,
    color: ["#c7a9ea"],
    category: "casual",
    sizes: [39, 40, 41, 39],
    brand: "Olimpikus",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 40",
    model: "Modelo 40 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 715.18,
    new_price: 828.48,
    id: 40,
    image: "/assets/product.png",
    discount: 10,
    color: ["#f46fec"],
    category: "esportivo",
    sizes: [40, 39, 39, 40, 42],
    brand: "Puma",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 41",
    model: "Modelo 41 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1276.5,
    new_price: 1317.54,
    id: 41,
    image: "/assets/product.png",
    discount: 10,
    color: ["#378446", "#dcc57a", "#b28292"],
    category: "casual",
    sizes: [43, 42, 40],
    brand: "Nike",
    gender: "masculino",
  },
  {
    nome: "T\u00eanis 42",
    model: "Modelo 42 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 960.3,
    new_price: 509.28,
    id: 42,
    image: "/assets/product.png",
    discount: 10,
    color: ["#0e3b8c", "#6e5ff6"],
    category: "esportivo",
    sizes: [43, 40, 39],
    brand: "Mizuno",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 43",
    model: "Modelo 43 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 665.28,
    new_price: 626.87,
    id: 43,
    image: "/assets/product.png",
    discount: 10,
    color: ["#c2b71d", "#8f3c90"],
    category: "esportivo",
    sizes: [43, 40],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 44",
    model: "Modelo 44 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 229.3,
    new_price: 1273.14,
    id: 44,
    image: "/assets/product.png",
    discount: 10,
    color: ["#9fc17b", "#224e18"],
    category: "esportivo",
    sizes: [43],
    brand: "Allstar",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 45",
    model: "Modelo 45 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1210.37,
    new_price: 1297.32,
    id: 45,
    image: "/assets/product.png",
    discount: 20,
    color: ["#037b9c"],
    category: "esportivo",
    sizes: [43, 41, 43],
    brand: "Mizuno",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 46",
    model: "Modelo 46 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 405.09,
    new_price: 281.91,
    id: 46,
    image: "/assets/product.png",
    discount: 10,
    color: ["#48c359", "#16d28d", "#326a74"],
    category: "esportivo",
    sizes: [40, 41, 39, 41, 43],
    brand: "Nike",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 47",
    model: "Modelo 47 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 168.3,
    new_price: 1232.48,
    id: 47,
    image: "/assets/product.png",
    discount: 5,
    color: ["#cf87c6"],
    category: "casual",
    sizes: [42, 39, 43, 40, 39],
    brand: "Puma",
    gender: "feminino",
  },
  {
    nome: "T\u00eanis 48",
    model: "Modelo 48 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 467.83,
    new_price: 508.15,
    id: 48,
    image: "/assets/product.png",
    discount: 15,
    color: ["#7ae609", "#c2c8cf", "#ffb4da"],
    category: "casual",
    sizes: [43, 41, 40, 42, 42],
    brand: "Puma",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 49",
    model: "Modelo 49 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1010.17,
    new_price: 773.04,
    id: 49,
    image: "/assets/product.png",
    discount: 15,
    color: ["#dfd3a2", "#3ff8bb"],
    category: "esportivo",
    sizes: [39],
    brand: "Puma",
    gender: "unissex",
  },
  {
    nome: "T\u00eanis 50",
    model: "Modelo 50 - Masculino",
    description:
      "Descri\u00e7\u00e3o gerada automaticamente para um produto exclusivo.",
    price: 1252.07,
    new_price: 1023.63,
    id: 50,
    image: "/assets/product.png",
    discount: 5,
    color: ["#4f2d79", "#97e461"],
    category: "casual",
    sizes: [40, 41, 41, 41],
    brand: "Mizuno",
    gender: "masculino",
  },
];
export default produtos;
