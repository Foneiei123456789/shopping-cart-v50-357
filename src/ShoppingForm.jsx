
// import { useState } from "react";
// import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { products } from "./products";

// export default function ShoppingForm({ addToCart }) {
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product.id] = 1;
//       return acc;
//     }, {})
//   );

//   const handleQuantityChange = (productId, value) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: value,
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const quantity = quantities[product.id];
//     addToCart({ ...product, quantity });
//   };

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center font-serif">
//           Minimalist Style
//         </h1>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   alt={product.imageAlt}
//                   src={product.imageSrc}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{product.about}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   {product.price} ฿
//                 </p>
//               </div>

//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="mt-2 w-full flex justify-center items-center bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-400"
//               >
//                 <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
//                 <span className="ml-2">Add to Cart</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


