const products = [
  {
    id: 5,
    name: 'Fork',
    price: 550,
    image: 'http://country929.com/files/2015/04/fork.jpg'
  },
  {
    id: 7,
    name: 'Spoon',
    price: 10,
    image: 'http://i.huffpost.com/gen/1302381/images/o-SPOON-facebook.jpg'
  }
]

export default function (state = products, action) {
  switch (action.type) {
    default:
      return state
  }
}
