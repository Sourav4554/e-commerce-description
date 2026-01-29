// export const dresses = [
//     {
//       id: 1,
//       name: "Floral Summer Dress",
//       description: "Lightweight floral dress perfect for summer outings.",
//       image: "Ascests/Casual-Denim-Dress.webp",
//       price: 1999,
//       category: "Women",
//       brand: "Zara"
//     },
//     {
//       id: 2,
//       name: "Classic Black Dress",
//       description: "Elegant black dress suitable for parties and events.",
//       image: "Ascests/Classic-Black-Dress.webp",
//       price: 2499,
//       category: "Women",
//       brand: "H&M"
//     },
//     {
//       id: 3,
//       name: "Casual Denim Dress",
//       description: "Comfortable denim dress for everyday wear.",
//       image: "Ascests/Floral-Summer-Dress.webp",
//       price: 1799,
//       category: "Women",
//       brand: "Levi's"
//     },
//     {
//       id: 4,
//       name: "Ethnic Maxi Dress",
//       description: "Traditional ethnic maxi dress with modern style.",
//       image: "Ascests/Floral-Summer-Dress.webp",
//       price: 2999,
//       category: "Women",
//       brand: "Biba"
//     }
//   ];


// fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
//   .then(res => res.json())
//   .then(data => {
//     const fashionProducts = data.filter(product => product.category === "Fashion & Apparel");
//     console.log(fashionProducts);
//   })
//   .catch(err => console.error('Error fetching products:', err));

const fetchData=async()=>{
const respose=await fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
const data=await respose.json()
const fashionProducts = data.filter(product => product.category === "Fashion & Apparel");
console.log(fashionProducts)
}
 fetchData()