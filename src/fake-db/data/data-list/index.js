import mock from '@/fake-db/mock.js'

const data = {
  products: [
    {
      'id': 1,
      'category': 'computers',
      'img': 'https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png',
      'name': 'Product1',
      'material': 'Material',
      'size': '5',
      'color': 'White',
      'color_code': '#00000',
      'other': 'Other',
      'order_status': 'Waiting',
      'order_statusAlready':'Success',
      'price': 69.99,
      'customer':'laza',
      'supplier':'Ohana',
      'date':'02/03/2021'
    },
    {
      'id': 2,
      'category': 'fitness',
      'img':'https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png',
      'name': 'Product2',
      'material': 'Material',
      'size': '6',
      'color': 'White',
      'color_code': '#00000',
      'other': 'Other',
      'order_status': 'Waiting',
      'order_statusAlready':'Success',
      'price': 69.99,
      'customer':'lllaza',
      'supplier':'Ohana',
      'date':'02/03/2021'
    },
    {
      'id': 3,
      'category': 'audio',
      'img': 'https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png',
      'name': 'Product3',
      'material': 'Material',
      'size': '7',
      'color': 'White',
      'color_code': '#00000',
      'other': 'Other',
      'order_status': 'Waiting',
      'order_statusAlready':'Success',
      'price': 199.99,
      'customer':'lallza',
      'supplier':'Ohana',
      'date':'02/03/2021'
    },
    {
      'id': 4,
      'category': 'audio',
      'img': 'https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png',
      'name': 'Product4',
      'material': 'Material',
      'size': '8',
      'color': 'White',
      'color_code': '#00000',
      'other': 'Other',
      'order_status': 'Waiting',
      'order_statusAlready':'Success',
      'price': 199.99,
      'customer':'laza',
      'supplier':'Ohana',
      'date':'02/03/2021'
    },
    {
      'id': 5,
      'category': 'audio',
      'img': 'https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png',
      'name': 'Product5',
      'material': 'Material',
      'size': '9',
      'color': 'White',
      'color_code': '#00000',
      'other': 'Other',
      'order_status': 'Waiting',
      'order_statusAlready':'Success',
      'price': 199.99,
      'customer':'ladaaza',
      'supplier':'Ohana',
      'date':'02/01/2021',

    },
    {
      'id': 6,
      'category': 'audio',
      'img': 'https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png',
      'name': 'Product6',
      'material': 'Material',
      'size': '10',
      'color': 'White',
      'color_code': '#00000',
      'other': 'Other',
      'order_status': 'Waiting',
      'order_statusAlready':'Success',
      'price': 39.99,
      'customer':'lazloa',
      'supplier':'Ohana',
      'date':'12/03/2021',
      'waiting1': 'Project',
      'waiting2': 'A',
      'approve': 'Start Date',
      'approve2': '12/02/2020',
    },
  ]
}


mock.onGet('/api/data-list/products').reply(() => {
  return [200, JSON.parse(JSON.stringify(data.products)).reverse()]
})

// POST : Add new Item
mock.onPost('/api/data-list/products/').reply((request) => {

  // Get event from post data
  const item = JSON.parse(request.data).item

  const length = data.products.length
  let lastIndex = 0
  if (length) {
    lastIndex = data.products[length - 1].id
  }
  item.id = lastIndex + 1

  data.products.push(item)

  return [201, {id: item.id}]
})

// Update Product
mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const item = data.products.find((item) => item.id == itemId)
  Object.assign(item, JSON.parse(request.data).item)

  return [200, item]
})

// DELETE: Remove Item
mock.onDelete(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const itemIndex = data.products.findIndex((p) => p.id == itemId)
  data.products.splice(itemIndex, 1)
  return [200]
})
