/* ============================================================
   EATHER Product Catalog
   - Edit names, prices, categories, or fabric specs directly here.
   - For `img`, provide the path to your photo or GIF in `images/`
   ============================================================ */

// TEMP placeholder, replace with real photos (swap each PH.* below for a real path in images/)
const _ph = (d) => "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100"><rect width="80" height="100" fill="#F2F2F2"/><path d="' + d + '" fill="#D6D6D6"/></svg>');
const PH = {
  tee: _ph("M28 18 L10 28 L16 42 L24 38 L24 82 L56 82 L56 38 L64 42 L70 28 L52 18 Q40 28 28 18 Z"),
  hoodie: _ph("M30 16 Q40 10 50 16 L68 28 L64 54 L56 52 L56 84 L24 84 L24 52 L16 54 L12 28 Z"),
  pants: _ph("M26 14 L54 14 L58 86 L44 86 L40 40 L36 86 L22 86 Z"),
  jacket: _ph("M28 16 L40 22 L52 16 L70 28 L66 70 L56 70 L56 86 L24 86 L24 70 L14 70 L10 28 Z"),
  crew: _ph("M30 16 Q40 24 50 16 L70 30 L66 58 L56 56 L56 84 L24 84 L24 56 L14 58 L10 30 Z")
};

const P = [
  {
    id: 1,
    n: "TEST",
    c: "Tees",
    u: 1,
    g: "320 GSM",
    imgs: [
      PH.tee,
      PH.tee,
      PH.tee
    ]
  },
  {
    id: 2,
    n: "TEST",
    c: "Tees",
    u: 1,
    g: "320 GSM",
    imgs: [
      PH.tee
    ]
  },
  {
    id: 3,
    n: "Test",
    c: "Hoodies",
    u: 1,
    g: "320 GSM",
    imgs: [
      PH.hoodie,
      PH.hoodie,
      PH.hoodie
    ]
  },
  {
    id: 4,
    n: "TEST",
    c: "Hoodies",
    u: 1,
    g: "320 GSM",
    imgs: [
      PH.hoodie
    ]
  },
  {
    id: 5,
    n: "TEST",
    c: "Pants",
    u: 1,
    g: "450 GSM",
    imgs: [
      PH.pants
    ]
  },
  {
    id: 6,
    n: "TEST",
    c: "Pants",
    u: 1,
    g: "12 oz twill",
    imgs: [
      PH.pants
    ]
  },
  {
    id: 7,
    n: "TEST",
    c: "Outerwear",
    u: 1,
    g: "14 oz canvas",
    imgs: [
      PH.jacket
    ]
  },
  {
    id: 8,
    n: "TEST",
    c: "Hoodies",
    u: 1,
    g: "320 GSM",
    imgs: [
      PH.crew
    ]
  }
];
