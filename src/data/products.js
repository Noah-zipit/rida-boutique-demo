// Real products from @rida_boutique.pk Instagram (captions verbatim, Oct 2026).
// Images are the boutique's own post thumbnails, downloaded 2026-10-07.
export const WHATSAPP = '923342973795'

const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export const products = [
  {
    id: 'hz-luxury',
    name: 'HZ 3pc Embroidered Luxury Collection',
    price: 'Rs. 7,800',
    img: '/img/p00.jpg',
    alt: 'Black HZ three piece suit with red embroidery on a hanger',
    detail: 'All sizes, small to large',
    wa: wa('Assalamualaikum, I want the HZ 3pc Embroidered Luxury Collection (Rs. 7800). Which sizes are available?'),
  },
  {
    id: 'hz-festive',
    name: 'HZ 3pc Embroidered Festive Collection',
    price: 'Rs. 7,800',
    img: '/img/p05.jpg',
    alt: 'Teal HZ three piece embroidered suit with matching dupatta',
    detail: 'Small, medium and large available',
    wa: wa('Assalamualaikum, I want the HZ 3pc Embroidered Festive Collection (Rs. 7800). Which sizes are available?'),
  },
  {
    id: 'binsaeed-khaddar',
    name: 'BinSaeed 3-Piece Stitched Khaddar',
    price: 'Rs. 2,700',
    img: '/img/p01.jpg',
    alt: 'BinSaeed stitched khaddar three piece suits on a shop rack',
    detail: 'Complete stitched 3 piece suit',
    wa: wa('Assalamualaikum, I want the BinSaeed 3-Piece Stitched Khaddar (Rs. 2700). Is it in stock?'),
  },
  {
    id: 'binsaeed-frock',
    name: 'BinSaeed 3pc Embroidered Short Frock with Flapper',
    price: 'Rs. 4,700',
    img: '/img/p07.jpg',
    alt: 'BinSaeed embroidered short frocks with flapper trousers',
    detail: 'Sizes small, medium, large',
    wa: wa('Assalamualaikum, I want the BinSaeed Embroidered Short Frock with Flapper (Rs. 4700). Which sizes are available?'),
  },
  {
    id: 'saya-lawn',
    name: 'Saya 3pc Printed Lawn',
    price: 'Rs. 2,500',
    img: '/img/p15.jpg',
    alt: 'Saya three piece printed lawn suits in blue and maroon',
    detail: 'Printed lawn 3 piece',
    wa: wa('Assalamualaikum, I want the Saya 3pc Printed Lawn (Rs. 2500). Is it in stock?'),
  },
  {
    id: 'sadabahar-lawn',
    name: 'Sadabahar 3pc Printed Lawn Stitch',
    price: 'Rs. 3,200',
    img: '/img/p13.jpg',
    alt: 'Sadabahar printed lawn suits hanging in the shop',
    detail: 'All sizes, small to large',
    wa: wa('Assalamualaikum, I want the Sadabahar 3pc Printed Lawn (Rs. 3200). Which sizes are available?'),
  },
  {
    id: 'binsaeed-ajrak',
    name: 'Bin Saeed 3pc Printed Lawn',
    price: 'Rs. 2,800',
    img: '/img/p17.jpg',
    alt: 'Bin Saeed printed lawn suit in original packaging',
    detail: 'Original packing, 3 piece',
    wa: wa('Assalamualaikum, I want the Bin Saeed 3pc Printed Lawn (Rs. 2800). Is it in stock?'),
  },
  {
    id: 'binsaeed-lawn',
    name: 'Bin Saeed 3pc Printed Lawn',
    price: 'Rs. 2,400',
    img: '/img/p16.jpg',
    alt: 'Bin Saeed three piece printed lawn, shirt trouser and dupatta fabric',
    detail: '3m shirt, 2.5m trouser, 2.5m dupatta',
    wa: wa('Assalamualaikum, I want the Bin Saeed 3pc Printed Lawn (Rs. 2400). Is it in stock?'),
  },
]
