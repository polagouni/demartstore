export const filters = [


 // {
   // id: "size",
   // name: "Size",
   // options: [
   //   { value: "S", label: "S" },
   //   { value: "M", label: "M" },
   //   { value: "L", label: "L" },
   // ],
 // },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-10", label: "$0 To $10" },
      { value: "10-20", label: "$10 To $20" },
      { value: "20-30", label: "$20 To $30" },
      { value: "30-40", label: "$30 To $40" }
    ],
  }, 
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
