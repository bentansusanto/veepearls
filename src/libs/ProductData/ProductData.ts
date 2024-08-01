import { ProductJewerly } from "@/types/ProductType";

export const jewerlyType = [
  {
    name_type: "Necklare",
    image: "type-necklare.jpg",
  },
  {
    name_type: "Breklet",
    image: "type-necklare.jpg",
  },
  {
    name_type: "Rings",
    image: "type-necklare.jpg",
  },
  {
    name_type: "Earings",
    image: "type-necklare.jpg",
  },
  {
    name_type: "Set of Jewerly",
    image: "type-necklare.jpg",
  },
];

export const productJewerly: ProductJewerly[] = [
  // Type Rings
  {
    name_product: "18mm Yellow SeaPearl",
    name_type: "Ring",
    price: 120,
    image: ["Rings/Ring01/ring01-1.jpeg", "Rings/Ring01/ring01-2.jpeg"],

    video: "/Rings/Ring01/ring01-video.mp4",
    desc: "Ring - AA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AA",
      size: ["7"],
    },
  },
  {
    name_product: "11mm White SeaPearl",
    name_type: "Ring",
    price: 65,
    image: ["Rings/Ring02/ring02-1.jpeg", "Rings/Ring02/ring02-2.jpeg"],
    video: "/Rings/Ring02/ring02-video.mp4",
    desc: "Ring - AAA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AAA",
      size: ["8"],
    },
  },
  {
    name_product: "9mm White SeaPearl",
    name_type: "Ring",
    price: 60,
    image: ["Rings/Ring03/ring03-1.jpeg", "Rings/Ring03/ring03-2.jpeg"],
    video: "/Rings/Ring03/ring03-video.mp4",
    desc: "Ring - AAA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AAA",
      size: ["7"],
    },
  },
  {
    name_product: "15mm White SeaPearl",
    name_type: "Ring",
    price: 95,
    image: [
      "Rings/Ring04/ring04-1.jpeg",
      "Rings/Ring04/ring04-2.jpeg",
      "Rings/Ring04/ring04-2.jpeg",
    ],
    video: "/Rings/Ring04/ring04-video.mp4",
    desc: "Ring with 4 colour stone - AAAA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AAA",
      size: ["8"],
    },
  },
  // type necklare
  {
    name_product: "11-12mm White Freshwater Pearl Necklace - AA Quality",
    name_type: "Necklare",
    price: 96,
    image: [
      "Necklare/Necklare01/necklare01-1.jpeg",
      "Necklare/Necklare01/necklare01-2.jpeg",
      "Necklare/Necklare01/necklare01-3.jpeg",
      "Necklare/Necklare01/necklare01-4.jpeg",
    ],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "11-12mm White Freshwater Pearl Necklace - AA Quality",
    detail_jewerly: {
      grading: "AA",
      size: ["15cm", "17cm"],
    },
  },
  // type brooch
  {
    name_product: "10mm White Silver SeaPearl",
    name_type: "Brooch",
    price: 60,
    image: ["Brooch/Brooch01/brooch01-1.jpeg"],
    video: "",
    desc: "Leaf Brooch - AAA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AAA",
      size: ["10mm"],
    },
  },
  {
    name_product: "12mm White Milk SeaPearl",
    name_type: "Brooch",
    price: 70,
    image: ["Brooch/Brooch02/brooch02-1.jpeg"],
    video: "/Brooch/Brooch02/brooch02-video.mp4",
    desc: "Swan Brooch - AAA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AAA",
      size: ["12mm"],
    },
  },
  {
    name_product: "9mm Light yellow SeaPearl",
    name_type: "Brooch",
    price: 60,
    image: ["Brooch/Brooch03/brooch03-1.jpeg"],
    video: "/Brooch/Brooch03/brooch03-1.mp4",
    desc: "Butterfly Brooch - AAA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AAA",
      size: ["9mm"],
    },
  },
  {
    name_product: "10mm Light White SeaPearl",
    name_type: "Brooch",
    price: 75,
    image: ["Brooch/Brooch04/brooch04-1.jpeg"],
    video: "/Brooch/Brooch04/brooch04-1.mp4",
    desc: "Dragonfly Brooch - AA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AA",
      size: ["10mm"],
    },
  },
];
