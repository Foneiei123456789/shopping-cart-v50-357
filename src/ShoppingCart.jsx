// import React from "react";

// export default function ShoppingCart({ cartItems}) {
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="mt-6 bg-white p-4 shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id} className="mb-2 flex justify-between items-center">
//                 <span>{item.name} (x{item.quantity})</span>
//                 <span>{item.price * item.quantity} ฿</span>
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="text-red-500 hover:text-red-700 ml-4"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4 text-right font-bold">
//             Total: {totalPrice} ฿
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
