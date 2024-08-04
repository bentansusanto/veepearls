import { JewerlyType, ProductJewerly } from "@/types/ProductType";

export const jewerlyTypeHome = [
  {
    name_type: "Necklare",
    image: "type-necklare.jpg"
  },
  {
    name_type: "Bracelet",
    image: "type-bracelet.jpg"
  },
  {
    name_type: "Ring",
    image: "type-ring.jpg"
  },
  {
    name_type: "Earings",
    image: "type-earings.jpg"
  },
  {
    name_type: "Brooch",
    image: "type-brooch.jpg"
  },
  {
    name_type: "Set of Jewelry",
    image: "type-sets-of-jewelry.jpg"
  },
]

export const jewerlyType:JewerlyType[] = [
  {
    name_type: "Necklare",
    image: "pearls-katalog5.jpg",
    type: "necklare",
    description: "Unique in their ability to carry an outfit from day to night, a sophisticated necklace made from pearls is an elegant staple for any fine jewelry collection. For minimalist allure, a tincup style pairs perfectly with other silver or gold-toned pieces, while colored necklaces allow for making a beautifully bold statement.",
  },
  {
    name_type: "Bracelet",
    image: "pearls-katalog2.jpg",
    type: "bracelet",
    description: "Adorn your wrist with gems of the sea to make a noticeable statement. A symbol of classic beauty, pearl bracelets look divine alone or even layered for a more modern appeal. Choose a colored overtone to set your mood and an ornately crafted clasp for a look thats uniquely yours."
  },
  {
    name_type: "Ring",
    image: "pearls-katalog1.jpg",
    type: "ring",
    description: "Whether you’re drawn to a simple solitaire or extravagant cocktail, a pearl ring is an enchanting way to honor your commitment or accomplishments. Wear as an alternative to the traditional wedding or engagement ring, or gift to yourself as a precious reminder of your strength, success, and remarkable sense of style."
  },
  {
    name_type: "Earings",
    image: "pearls-katalog4.jpg",
    type: "earings",
    description: "A delicate display of feminine elegance, a pair of pearl earrings are a timeless marker of exquisite taste and attention to detail. Flattering across all complexions, a set can elevate both a date night and boardroom ensemble, leaving you feeling your most beautiful and put-together – whatever the occasion."
  },
  {
    name_type: "Brooch",
    image: "pearls-katalog3.jpg",
    type: "brooch",
    description: "Hypnotic in its design, a pearl pendant has become synonymous with many of lifes milestone events. From graduations and weddings to birthdays, anniversaries or just to declare your love, pearls are a way of marking your emotions in a tangible manner. Wear and adore, before passing down for future generations to feel a part of something greater."
  },
  {
    name_type: "Set of Jewerly",
    image: "pearls-katalog6.jpg",
    type: "sets",
    description: "For accessories that seamlessly complement, a set of pearls is a finishing touch to any capsule wardrobe. The ability of a pearl necklace and matching earrings to elevate even the most basic of refined tailoring, while radiating polished sophistication, makes them an ideal gift for the style-conscious woman. Symbolic of wisdom and purity, our pearls look as timeless worn alone as they do together."
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
  // type necklare
  {
    name_product: "11-12mm White Freshwater Pearl Necklace - AA Quality",
    name_type: "Necklare",
    slug_type: "necklare",
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
    name_type: "Necklare",
    slug_type: "necklare",
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
    name_type: "Necklare",
    slug_type: "necklare",
    price: 96,
    image: [
      "Necklare/Necklare03/necklare03-1.jpeg",
      "Necklare/Necklare03/necklare03-2.jpeg",
    ],
    video: "/Necklare/Necklare01/necklare01-video.mp4",
    desc: "5-9cm White Freshwater Pearl Necklace - AAA Quality 11 layer necklace huge style",
    detail_jewerly: {
      grading: "AA",
      size: ["32cm", "79cm"],
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
    image: ["Sets-of-Jewelry/Sets01/sets01-1.jpeg","Sets-of-Jewelry/Sets01/sets01-2.jpeg", "Sets-of-Jewelry/Sets01/sets01-3.jpeg"],
    video: "/Brooch/Brooch04/brooch04-1.mp4",
    desc: "12 White Freshwater Pearl Necklace - AA Quality 1 layer necklace with earring set",
    detail_jewerly: {
      grading: "AA",
      size: ["13cm", "37cm"],
    },
  },

];
