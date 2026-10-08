// Ashar Store demo catalog. Sample products and prices; images are demo shots.
// WhatsApp is a placeholder demo number.

export const WHATSAPP_NUMBER = '923000000000'
export const WHATSAPP_DISPLAY = '0300 0000000'

const wa = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const shopWA = wa(
  'Assalamualaikum Ashar Store, I have a question about an order.'
)

const img = (f) => import.meta.env.BASE_URL + 'img/' + f

export const CATEGORIES = ['All', 'Embroidered', 'Lawn', 'Khaddar', 'Festive']

export const products = [
  {
    id: 'hz-luxury-black',
    name: 'HZ 3-Piece Embroidered Luxury',
    category: 'Embroidered',
    subtitle: "Women's 3-Piece · Embroidered",
    price: 'Rs. 7,800',
    img: img('p00.jpg'),
    alt: 'Black three piece suit with red floral embroidery, close up of the neckline',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the HZ 3-Piece Embroidered Luxury in black (Rs. 7,800). Which sizes are available?'),
  },
  {
    id: 'hz-luxury-lilac',
    name: 'HZ 3-Piece Embroidered Luxury',
    category: 'Embroidered',
    subtitle: "Women's 3-Piece · Embroidered",
    price: 'Rs. 7,800',
    img: img('p02.jpg'),
    alt: 'Lilac three piece suit with white and pastel embroidery and lace dupatta',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the HZ 3-Piece Embroidered Luxury in lilac (Rs. 7,800). Which sizes are available?'),
  },
  {
    id: 'hz-luxury-olive',
    name: 'HZ 3-Piece Embroidered Luxury',
    category: 'Embroidered',
    subtitle: "Women's 3-Piece · Embroidered",
    price: 'Rs. 7,800',
    img: img('p03.jpg'),
    alt: 'Olive green three piece suit with delicate white embroidery, close up',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the HZ 3-Piece Embroidered Luxury in olive (Rs. 7,800). Which sizes are available?'),
  },
  {
    id: 'hz-festive-teal',
    name: 'HZ 3-Piece Embroidered Festive',
    category: 'Festive',
    subtitle: "Women's 3-Piece · Festive",
    price: 'Rs. 7,800',
    img: img('p05.jpg'),
    alt: 'Teal festive three piece suit with floral embroidery and embellished dupatta',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the HZ 3-Piece Embroidered Festive in teal (Rs. 7,800). Which sizes are available?'),
  },
  {
    id: 'binsaeed-khaddar',
    name: 'BinSaeed 3-Piece Stitched Khaddar',
    category: 'Khaddar',
    subtitle: "Women's 3-Piece · Khaddar",
    price: 'Rs. 2,700',
    img: img('p01.jpg'),
    alt: 'BinSaeed stitched khaddar suits in grey and red prints hanging on a rack',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the BinSaeed 3-Piece Stitched Khaddar (Rs. 2,700). Is it in stock?'),
  },
  {
    id: 'binsaeed-frock-flapper',
    name: 'BinSaeed Embroidered Short Frock with Flapper',
    category: 'Embroidered',
    subtitle: "Women's 2-Piece · Embroidered",
    price: 'Rs. 4,700',
    img: img('p07.jpg'),
    alt: 'BinSaeed embroidered short frocks with flapper trousers in yellow and floral prints',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the BinSaeed Embroidered Short Frock with Flapper (Rs. 4,700). Which sizes are available?'),
  },
  {
    id: 'sadabahar-lawn',
    name: 'Sadabahar 3-Piece Printed Lawn',
    category: 'Lawn',
    subtitle: "Women's 3-Piece · Printed Lawn",
    price: 'Rs. 3,200',
    img: img('p13.jpg'),
    alt: 'Sadabahar printed lawn suits in maroon and green hanging on a shop rack',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the Sadabahar 3-Piece Printed Lawn (Rs. 3,200). Which sizes are available?'),
  },
  {
    id: 'binsaeed-lawn-print',
    name: 'Bin Saeed 3-Piece Printed Lawn',
    category: 'Lawn',
    subtitle: "Women's 3-Piece · Printed Lawn",
    price: 'Rs. 2,800',
    img: img('p14.jpg'),
    alt: 'Bin Saeed printed lawn shirts in yellow and maroon floral prints',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the Bin Saeed 3-Piece Printed Lawn (Rs. 2,800). Is it in stock?'),
  },
  {
    id: 'binsaeed-lawn-ajrak',
    name: 'Bin Saeed 3-Piece Printed Lawn',
    category: 'Lawn',
    subtitle: "Women's 3-Piece · Ajrak Print",
    price: 'Rs. 3,000',
    img: img('p17.jpg'),
    alt: 'Bin Saeed three piece lawn suit in black and maroon ajrak style print',
    sizes: 'S · M · L',
    wa: wa('Assalamualaikum Ashar Store, I want the Bin Saeed 3-Piece Printed Lawn in ajrak print (Rs. 3,000). Is it in stock?'),
  },
]
