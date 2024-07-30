export const navigation = {
    categories: [
      {
        id: 'DairyandBakery',
        name: 'Dairy and Bakery',
        featured: [
          {
            name: 'Dairy',
            href: '/DairyandBakery/dairyBakery/MilkCheeseandYogurt',
            imageSrc: 'https://idahomilkproducts.b-cdn.net/wp-content/uploads/2021/09/processing-differences-common-dairy-products.jpg',
            imageAlt: 'Dairy',
          },
          {
            name: 'Bakery',
            href: '/DairyandBakery/dairyBakery/bread',
            imageSrc: 'https://images.crowdspring.com/blog/wp-content/uploads/2023/05/16174534/bakery-hero.png',
            imageAlt: 'Bakery',
          },
        ],
        sections: [
          {
            id: 'dairyBakery',
            name: 'Dairy and Bakery products',
            items: [
              { name: 'Milk, Cheese, and Yogurt', id:"MilkCheeseandYogurt", href: `{dairyandbakery/DairyandBakery/MilkCheese&Yogurt}` },
              { name: 'Bread', id:"bread", href: '{dairyandbakery/DairyandBakery/bread}' },
              { name: 'Pastries and Cakes', id: 'PastriesandCakes',href: '{dairyandbakery/DairyandBakery/PastriesandCakes}' },
            ],
          },
          
          
        ],
      },
      {
        id: 'Freshproduce',
        name: 'Fresh Produce',
        featured: [
          {
            name: 'Fruits',
            id: '#',
            href: '/Freshproduce/FruitsandVegetables/Fruits',
            imageSrc: 'https://i.etsystatic.com/43068589/r/il/5cf057/5485694352/il_794xN.5485694352_9i10.jpg',
            imageAlt: 'Fruits.',
          },
          {
            name: 'Vegetables',
            id: '#',
            href: '/Freshproduce/FruitsandVegetables/Vegetables',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0262/2157/files/Veggie_blog_resized_images_vegetable_main_photo.png?v=1614103118',
            imageAlt:
              'Vegetables.',
          },
        ],
        sections: [
          {
            id: 'FruitsandVegetables',
            name: 'Fruits and Vegetables',
            items: [
              { name: 'Fruits', id: 'Fruits' },
              { name: 'Vegetables', id: 'Vegetables' },  
            ],
          },
        ],
      },
      {
        id: 'PersonalCare',
        name: 'Personal Care',
        featured: [
          {
            name: 'Shampoo and Soap',
            id: '#',
            href: '/PersonalCare/products/SST',
            imageSrc: 'https://st4.depositphotos.com/10614052/22987/i/450/depositphotos_229870204-stock-photo-different-soap-bars-roses-color.jpg',
            imageAlt: 'Shampoo and Soap',
          },
          {
            name: 'Deodorant',
            id: '#',
            href: '/PersonalCare/products/Deodorant',
            imageSrc: 'https://btp.blr1.cdn.digitaloceanspaces.com/2016/07/Natural-Fragrance-1.jpg',
            imageAlt:
              'Deodorant',
          },
        ],
        sections: [
          {
            id: 'products',
            name: 'Products',
            items: [
              { name: 'Shampoo, Soap, and Toothpaste', id: 'SST' },
              { name: 'Deodorant', id: 'Deodorant' },  
            ],
          },
        ],
      },
    ],
  }