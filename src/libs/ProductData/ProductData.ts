import { JewerlyType, ProductJewerly } from "@/types/ProductType";

export const jewerlyTypeHome = [
  {
    name_type: "Necklaces",
    image: "type-necklare.jpg",
  },
  {
    name_type: "Bracelet",
    image: "type-bracelet.jpg",
  },
  {
    name_type: "Ring",
    image: "type-ring.jpg",
  },
  {
    name_type: "Earings",
    image: "type-earings.jpg",
  },
  {
    name_type: "Brooch",
    image: "type-brooch.jpg",
  },
  {
    name_type: "Set of Jewellery",
    image: "type-sets-of-jewelry.jpg",
  },
];

export const jewerlyType: JewerlyType[] = [
  {
    name_type: "Necklaces",
    image: "pearls-katalog5.jpg",
    type: "necklaces",
    description:
      "Unique in their ability to carry an outfit from day to night, a sophisticated necklace made from pearls is an elegant staple for any fine jewelry collection. For minimalist allure, a tincup style pairs perfectly with other silver or gold-toned pieces, while colored necklaces allow for making a beautifully bold statement.",
  },
  {
    name_type: "Bracelet",
    image: "pearls-katalog2.jpg",
    type: "bracelet",
    description:
      "Adorn your wrist with gems of the sea to make a noticeable statement. A symbol of classic beauty, pearl bracelets look divine alone or even layered for a more modern appeal. Choose a colored overtone to set your mood and an ornately crafted clasp for a look thats uniquely yours.",
  },
  {
    name_type: "Ring",
    image: "pearls-katalog1.jpg",
    type: "ring",
    description:
      "Whether you’re drawn to a simple solitaire or extravagant cocktail, a pearl ring is an enchanting way to honor your commitment or accomplishments. Wear as an alternative to the traditional wedding or engagement ring, or gift to yourself as a precious reminder of your strength, success, and remarkable sense of style.",
  },
  {
    name_type: "Earings",
    image: "pearls-katalog4.jpg",
    type: "earings",
    description:
      "A delicate display of feminine elegance, a pair of pearl earrings are a timeless marker of exquisite taste and attention to detail. Flattering across all complexions, a set can elevate both a date night and boardroom ensemble, leaving you feeling your most beautiful and put-together – whatever the occasion.",
  },
  {
    name_type: "Brooch",
    image: "pearls-katalog3.jpg",
    type: "brooch",
    description:
      "Hypnotic in its design, a pearl pendant has become synonymous with many of lifes milestone events. From graduations and weddings to birthdays, anniversaries or just to declare your love, pearls are a way of marking your emotions in a tangible manner. Wear and adore, before passing down for future generations to feel a part of something greater.",
  },
  {
    name_type: "Set of Jewellery",
    image: "pearls-katalog6.jpg",
    type: "sets",
    description:
      "For accessories that seamlessly complement, a set of pearls is a finishing touch to any capsule wardrobe. The ability of a pearl necklace and matching earrings to elevate even the most basic of refined tailoring, while radiating polished sophistication, makes them an ideal gift for the style-conscious woman. Symbolic of wisdom and purity, our pearls look as timeless worn alone as they do together.",
  },
];

// list products
export const productJewerly: ProductJewerly[] = [
  // Type Rings
  {
    name_product: "18mm Yellow SeaPearl",
    name_type: "Ring",
    slug_type: "ring",
    price: 120,
    image: ["Rings/Ring01/ring01-1.jpeg", "Rings/Ring01/ring01-2.jpeg"],

    video:
      "https://drive.google.com/file/d/15vWIs0JTuTtRdJITASXp7g4QTr68_cg7/view?usp=sharing",
    desc: "Ring - AA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AA",
      size: ["7"],
    },
  },
  {
    name_product: "11mm White SeaPearl",
    name_type: "Ring",
    slug_type: "ring",
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
    slug_type: "ring",
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
    slug_type: "ring",
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
  // type bracelet
  {
    name_product: "7-8cm White Freshwater Pearl Bracelet - AA Quality",
    name_type: "Bracelet",
    slug_type: "bracelet",
    price: 105,
    image: [
      "Bracelet/Bracelet01/bracelet01-1.jpeg",
      "Bracelet/Bracelet01/bracelet01-2.jpeg",
      "Bracelet/Bracelet01/bracelet01-3.jpeg",
      "Bracelet/Bracelet01/bracelet01-4.jpeg",
    ],
    video: "/Rings/Ring04/ring04-video.mp4",
    desc: "7-8cm White Freshwater Pearl Bracelet - AA Quality 5 layer bracelet (7cm - 24pc each X 5)",
    detail_jewerly: {
      grading: "AA",
      size: ["7cm - 24pc each X 5"],
    },
  },
  {
    name_product: "7-8mm White Freshwater Pearl Bracelet - AA Quality",
    name_type: "Bracelet",
    slug_type: "bracelet",
    price: 115,
    image: ["Bracelet/Bracelet02/bracelet02-1.jpeg"],
    video: "/Rings/Ring04/ring04-video.mp4",
    desc: "7-8mm White Freshwater Pearl Bracelet - AA Quality 7 layer bracelet (23pc each X 7)",
    detail_jewerly: {
      grading: "AA",
      size: ["23pc each X 7"],
    },
  },
  {
    name_product: "5-6mm White Freshwater Pearl Bracelet - AA Quality",
    name_type: "Bracelet",
    slug_type: "bracelet",
    price: 90,
    image: ["Bracelet/Bracelet03/bracelet03-1.jpeg"],
    video: "/Rings/Ring04/ring04-video.mp4",
    desc: "5-6mm White Freshwater Pearl Bracelet - AA Quality 5 layer bracelet (26pc each X 5)",
    detail_jewerly: {
      grading: "AA",
      size: ["26pc each X 5"],
    },
  },
  // type necklace
  {
    name_product: "11-12mm White Freshwater Pearl Necklace - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
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
  {
    name_product: "12 White Freshwater Pearl Necklace - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 96,
    image: [
      "Necklare/Necklare02/necklare02-1.jpeg",
      "Necklare/Necklare02/necklare02-2.jpeg",
      "Necklare/Necklare02/necklare02-3.jpeg",
    ],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "12 White Freshwater Pearl Necklace - AA Quality 1 layer necklace ",
    detail_jewerly: {
      grading: "AA",
      size: ["32cm", "79cm"],
    },
  },
  {
    name_product: "5-9cm White Freshwater Pearl Necklace - AAA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 527,
    image: [
      "Necklare/Necklare03/necklare03-1.jpeg",
      "Necklare/Necklare03/necklare03-2.jpeg",
    ],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "5-9cm White Freshwater Pearl Necklace - AAA Quality 11 layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["5-9cm"],
    },
  },
  {
    name_product:
      "8-9mm White Freshwater Pearl Necklace (556pc) - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 320,
    image: ["Necklare/Necklare04/necklace04-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "8-9mm White Freshwater Pearl Necklace (556pc) - AA Quality Adjust layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["8-9mm"],
    },
  },
  {
    name_product:"8-9mm & 11-12mm White Freshwater Pearl Necklace (336pc)  - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 270,
    image: ["Necklare/Necklare05/necklace05-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "8-9mm & 11-12mm White Freshwater Pearl Necklace (336pc)  - AA Quality 6 layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["8-9mm", "11-12mm"],
    },
  },
  {
    name_product: "8-9mm White Freshwater Pearl Necklace (556pc) - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 320,
    image: ["Necklare/Necklare06/necklace06-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "8-9mm White Freshwater Pearl Necklace (556pc) - AA Quality Adjust layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["8-9mm"],
    },
  },
  {
    name_product: "5-9mm White Freshwater Pearl Necklace (957pc) - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 565,
    image: ["Necklare/Necklare07/necklace07-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "5-9mm White Freshwater Pearl Necklace (957pc) - AA Quality 11 layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["5-9mm"],
    },
  },
  {
    name_product:
      "9-12mm White Freshwater Pearl Necklace (198pc) - AAA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 280,
    image: ["Necklare/Necklare08/necklace08-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "9-12mm White Freshwater Pearl Necklace (198pc)  - AAA Quality 4 layer necklace huge style",
    detail_jewerly: {
      grading: "AAA",
      size: ["9-12mm"],
    },
  },
  {
    name_product:
      "10-11mm White Freshwater Pearl Necklace (54pc) - AAA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 145,
    image: ["Necklare/Necklare09/necklace09-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "10-11mm White Freshwater Pearl Necklace (54pc) - AAA Quality 1 layer necklace classic style",
    detail_jewerly: {
      grading: "AAA",
      size: ["10-11mm"],
    },
  },
  {
    name_product: "11-12mm Peach Freshwater Pearl Necklace (66pc) - AA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 185,
    image: ["Necklare/Necklare10/necklace10-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "11-12mm Peach Freshwater Pearl Necklace (66pc)  - AA Quality 1 layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["11-12mm"],
    },
  },
  {
    name_product:
      "10-11mm White Freshwater Pearl Necklace (128pc) - AAA Quality",
    name_type: "Necklaces",
    slug_type: "necklaces",
    price: 252,
    image: ["Necklare/Necklare11/necklace11-1.jpeg"],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "10-11mm White Freshwater Pearl Necklace (128pc)  - AAA Quality 1 layer necklace adjustable",
    detail_jewerly: {
      grading: "AAA",
      size: ["10-11mm"],
    },
  },
  // type brooch
  {
    name_product: "10mm White Silver SeaPearl",
    name_type: "Brooch",
    slug_type: "brooch",
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
    slug_type: "brooch",
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
    slug_type: "brooch",
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
    slug_type: "brooch",
    price: 75,
    image: ["Brooch/Brooch04/brooch04-1.jpeg"],
    video: "/Brooch/Brooch04/brooch04-1.mp4",
    desc: "Dragonfly Brooch - AA Quality With Titanium plated",
    detail_jewerly: {
      grading: "AA",
      size: ["10mm"],
    },
  },
  // sets of jewelry
  {
    name_product: "12 White Freshwater Pearl Necklace - AA Quality",
    name_type: "Set of Jewelry",
    slug_type: "sets",
    price: 71,
    image: [
      "Sets-of-Jewelry/Sets01/sets01-1.jpeg",
      "Sets-of-Jewelry/Sets01/sets01-2.jpeg",
      "Sets-of-Jewelry/Sets01/sets01-3.jpeg",
    ],
    video: "/Brooch/Brooch04/brooch04-1.mp4",
    desc: "12 White Freshwater Pearl Necklace - AA Quality 1 layer necklace with earring set",
    detail_jewerly: {
      grading: "AA",
      size: ["13cm", "37cm"],
    },
  },
  {
    name_product: "11-12mm White Freshwater Pearl Necklace - AA Quality",
    name_type: "Set of Jewelry",
    slug_type: "sets",
    price: 280,
    image: [
      "Sets-of-Jewelry/Sets02/sets02-1.jpeg",
      "Sets-of-Jewelry/Sets02/sets02-2.jpeg",
    ],
    video: "/Brooch/Brooch04/brooch04-1.mp4",
    desc: "11-12mm White Freshwater Pearl Necklace - AA Quality 1 layer necklace adjustable with earring set (128pc with earring)",
    detail_jewerly: {
      grading: "AA",
      size: ["13cm", "37cm"],
    },
  },
];
