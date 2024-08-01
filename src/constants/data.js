import images from './images';

const wines = [
  {
    title: 'Sidi Ali',
    price: '2 TND',
    tags: 'TN | 500 ml',
  },
  {
    title: 'Coca-Cola',
    price: '5 TND',
    tags: 'TN | 330 ml',
  },
  {
    title: 'Boga Cidre',
    price: '4.5 TND',
    tags: 'TN | 330 ml',
  },
  {
    title: 'Fanta',
    price: '4.5 TND',
    tags: 'TN | 330 ml',
  },
  {
    title: 'Sprite',
    price: '5 TND',
    tags: 'TN | 330 ml',
  },
];

const cocktails = [
  {
    title: 'Tunisian Sunrise',
    price: '5 TND',
    tags: 'Orange juice | Grenadine | 300 ml',
  },
  {
    title: 'Mint Lemonade',
    price: '7 TND',
    tags: 'Fresh mint | Lemon juice | Sugar | Sparkling water',
  },
  {
    title: 'Almond Milk',
    price: '6 TND',
    tags: 'Almond syrup | Milk | Ice',
  },
  {
    title: 'Fig Juice',
    price: '5 TND',
    tags: 'Fresh figs | Water | Sugar',
  },
  {
    title: 'Carob Shake',
    price: '7 TND',
    tags: 'Carob powder | Milk | Honey',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: 'Awarded for excellent quality and value cooking.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Awarded to an up-and-coming chef.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Recognized for outstanding hospitality service.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Awarded to a chef with exceptional culinary skills.',
  },
];

const menuData = { wines, cocktails, awards };

export default menuData;
