const product = [
  {
    id: 5,
    name: 'Fork',
    price: 550,
    description: "Pure silver. One of its kind. Must buy.",
    image: 'http://country929.com/files/2015/04/fork.jpg'
  },
  {
    id: 7,
    name: 'Spoon',
    price: 10,
    description: "One of its kind. Ideal for entertaining guests.",
    image: 'http://i.huffpost.com/gen/1302381/images/o-SPOON-facebook.jpg'
  }
]


export default function (state = product, action) {
  switch (action.type) {
    default:
      return state
  }
}
