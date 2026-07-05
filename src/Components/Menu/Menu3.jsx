// import React from "react";

// function Menu3({ cart, setCart, setShowModal }) {
//   const handleAddToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <div className="my-5 mx-3">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg"
//               alt="Product Image"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//             />
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//               NEW
//             </span>
//           </div>
//           <div className="p-6">
//             <div className="flex justify-between  ">
//               <h3 className="text-xl font-bold text-gray-800">Pizza Slices Rustic Wooden</h3>
//               <span className="ml-2 text-lg font-bold text-white rounded-3xl text-center p-2 px-5 bg-gradient-to-r from-orange-500 to-orange-700">
//                 $10.99
//               </span>
//             </div>
//             <div className="flex gap-5">
//               <p className="p-2 bg-purple-400/50 text-center rounded-3xl text-purple-800 font-bold text-[13px] pt-1">
//                 Popular
//               </p>
//               <p className="p-2 px-5 bg-red-600/20 text-center rounded-3xl text-red-600 font-bold text-[13px] pt-1">
//                 Spicy
//               </p>
//             </div>
//             <p className="text-gray-600 mt-2">
//               Tomato sauce, mozzarella, and lots of pepperoni.
//             </p>
//             <h1 className="text-black text-xl font-bold p-5">Size</h1>
//             <div className="flex justify-evenly gap-3">
//               {["Medium", "Large", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
//                      hover:bg-red-200/30 hover:text-red-600
//                      active:border-2 active:border-red-500
//                      focus:outline-none focus:ring-2 focus:ring-red-400"
//                 >
//                   {size}
//                   <p className="text-xs font-normal text-gray-600">
//                     Base Price
//                   </p>
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between items-center gap-5 mt-5">
//               <div>
//                 <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
//              hover:bg-red-50 hover:border-red-500"
//               >
//                 <i className="fa-solid fa-bars mr-2"></i>
//                 Customize
//               </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart({
//                       id: 7,
//                       name: "Pizza Slices Rustic Wooden",
//                       price: 10.99,
//                       image:
//                         "https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg",
//                     })
//                   }
//                   type="button"
//                   className="bg-orange-500 text-white px-5 py-2 rounded-md font-mono
//                  hover:bg-orange-800"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/736x/bd/33/56/bd3356cecca660b4927f5c1a5c94570a.jpg"
//               alt="Product Image"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//             />
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//               NEW
//             </span>
//           </div>
//           <div className="p-6">
//             <div className="flex justify-between  ">
//               <h3 className="text-xl font-bold text-gray-800">
//                Veggie Delight Pizza
//               </h3>
//               <span className="ml-2 text-lg font-bold text-white  p-2 px-5 rounded-3xl text-center  bg-gradient-to-r from-orange-500 to-orange-700">
//                 $8.99
//               </span>
//             </div>
//             <div className="flex gap-5">
//               <p className="p-2 bg-purple-400/50 text-center rounded-3xl text-purple-800 font-bold text-[13px] pt-1">
//                 Popular
//               </p>
//               <p className="px-3 bg-green-600/20 text-center rounded-3xl text-green-600 font-bold text-[13px] pt-1">
//                 Vegetarian
//               </p>
//             </div>
//             <p className="text-gray-600 mt-2">
//               Tomato sauce, mozzarella, and lots of pepperoni.
//             </p>
//             <h1 className="text-black text-xl font-bold p-5">Size</h1>
//             <div className="flex justify-evenly gap-3">
//               {["Medium", "Large", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
//                      hover:bg-red-200/30 hover:text-red-600
//                      active:border-2 active:border-red-500
//                      focus:outline-none focus:ring-2 focus:ring-red-400"
//                 >
//                   {size}
//                   <p className="text-xs font-normal text-gray-600">
//                     Base Price
//                   </p>
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between items-center gap-5 mt-5">
//               <div>
//                 <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="text-gray-500 px-4 py-2 mt-4 shadow-md rounded-md border font-mono
//              hover:bg-red-50 hover:border-red-500"
//               >
//                 <i className="fa-solid fa-bars mr-2"></i>
//                 Customize
//               </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart({
//                       id: 8,
//                       name: " Veggie Delight Pizza",
//                       price: 8.99,
//                       image:
//                         "https://i.pinimg.com/736x/bd/33/56/bd3356cecca660b4927f5c1a5c94570a.jpg",
//                     })
//                   }
//                   type="button"
//                   className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
//                  hover:bg-orange-800"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/1200x/85/b1/5a/85b15a93913875c036b5c0c39cea0886.jpg"
//               alt="Product Image"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//             />
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//               NEW
//             </span>
//           </div>
//           <div className="p-6">
//             <div className="flex justify-between  ">
//               <h3 className="text-xl font-bold text-gray-800">
//                 BBQ Chicken Feas
//               </h3>
//               <span className="ml-2 text-lg font-bold text-white p-2 px-4 rounded-3xl text-center bg-gradient-to-r from-orange-500 to-orange-700">
//                 $11.99
//               </span>
//             </div>
//             <div className="flex gap-5">
//               <p className="p-2 bg-purple-400/50 text-center rounded-3xl text-purple-800 font-bold text-[13px] pt-1">
//                 Popular
//               </p>
//               <p className="p-2 px-4 bg-yellow-500/20 text-center rounded-3xl text-yellow-500 font-bold text-[13px] pt-1">
//                 Meat
//               </p>
//             </div>
//             <p className="text-gray-600 mt-2">
//               Tomato sauce, mozzarella, and lots of pepperoni.
//             </p>
//             <h1 className="text-black text-xl font-bold p-5">Size</h1>
//             <div className="flex justify-evenly gap-3">
//               {["Medium", "Large", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
//                      hover:bg-red-200/30 hover:text-red-600
//                      active:border-2 active:border-red-500
//                      focus:outline-none focus:ring-2 focus:ring-red-400"
//                 >
//                   {size}
//                   <p className="text-xs font-normal text-gray-600">
//                     Base Price
//                   </p>
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between items-center gap-5 mt-5">
//               <div>
//                 <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="text-gray-500 px-4 py-2 mt-4 shadow-md rounded-md border font-mono
//              hover:bg-red-50 hover:border-red-500"
//               >
//                 <i className="fa-solid fa-bars mr-2"></i>
//                 Customize
//               </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart({
//                       id: 9,
//                       name: "Pizza BBQ Feast",
//                       price: 11.99,
//                       image:
//                         "https://i.pinimg.com/1200x/85/b1/5a/85b15a93913875c036b5c0c39cea0886.jpg",
//                     })
//                   }
//                   type="button"
//                   className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
//                  hover:bg-orange-800"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/736x/7f/fd/51/7ffd51aa3cfe80c6c23ede4f52366bb9.jpg"
//               alt="Pizza Margherita"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//             />
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//               NEW
//             </span>
//           </div>

//           <div className="p-6">
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
//               <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
//                 $9.99
//               </span>
//             </div>

//             <div className="flex gap-3 mt-3">
//               <span className="px-3 py-1 bg-purple-400/50 rounded-3xl text-purple-800 font-bold text-xs">
//                 Popular
//               </span>
//               <span className="px-3 py-1 bg-red-600/40 rounded-3xl text-red-600 font-bold text-xs">
//                 Spicy
//               </span>
//             </div>

//             <p className="text-gray-600 mt-3">
//               Tomato sauce, mozzarella, and lots of pepperoni.
//             </p>

//             <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

//             <div className="flex justify-evenly gap-3">
//               {["Medium", "Large", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
//                      hover:bg-red-200/30 hover:text-red-600
//                      active:border-2 active:border-red-500
//                      focus:outline-none focus:ring-2 focus:ring-red-400"
//                 >
//                   {size}
//                   <p className="text-xs font-normal text-gray-600">
//                     Base Price
//                   </p>
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between items-center gap-5 mt-5">
//              <div>
//                 <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="text-gray-500 px-4 py-2 mt-4 shadow-md rounded-md border font-mono
//              hover:bg-red-50 hover:border-red-500"
//               >
//                 <i className="fa-solid fa-bars mr-2"></i>
//                 Customize
//               </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart({
//                       id: 10,
//                       name: "Margherita  ",
//                       price: 9.99,
//                       image:
//                         "https://i.pinimg.com/736x/7f/fd/51/7ffd51aa3cfe80c6c23ede4f52366bb9.jpg",
//                     })
//                   }
//                   type="button"
//                   className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
//                  hover:bg-orange-800"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg"
//               alt="Spicy Diavola Pizza"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//             />
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//               NEW
//             </span>
//           </div>

//           <div className="p-6">
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
//               <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
//                 $15.99
//               </span>
//             </div>

//             <div className="flex gap-3 mt-3">
//               <span className="px-3 py-1 bg-purple-400/50 rounded-3xl text-purple-800 font-bold text-xs">
//                 Popular
//               </span>
//               <span className="px-3 py-1 bg-red-600/40 rounded-3xl text-red-600 font-bold text-xs">
//                 Spicy
//               </span>
//             </div>

//             <p className="text-gray-600 mt-3">
//               Tomato sauce, mozzarella, and lots of pepperoni.
//             </p>

//             <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

//             <div className="flex justify-evenly gap-3">
//               {["Medium", "Large", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
//                      hover:bg-red-200/30 hover:text-red-600
//                      active:border-2 active:border-red-500
//                      focus:outline-none focus:ring-2 focus:ring-red-400"
//                 >
//                   {size}
//                   <p className="text-xs font-normal text-gray-600">
//                     Base Price
//                   </p>
//                 </button>
//               ))}
//             </div>

//             <div className="flex justify-between items-center gap-5 mt-5">
//              <div>
//                 <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="text-gray-500 px-4 py-2 mt-4 shadow-md rounded-md border font-mono
//              hover:bg-red-50 hover:border-red-500"
//               >
//                 <i className="fa-solid fa-bars mr-2"></i>
//                 Customize
//               </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart({
//                       id: 11,
//                       name: "Margherita Classica",
//                       price: 15.99,
//                       image:
//                         "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60x",
//                     })
//                   }
//                   type="button"
//                   className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
//                  hover:bg-orange-800"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg"
//               alt="Spicy Diavola Pizza"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//             />
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//               NEW
//             </span>
//           </div>

//           <div className="p-6">
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
//               <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
//                 $15.99
//               </span>
//             </div>

//             <div className="flex gap-3 mt-3">
//               <span className="px-3 py-1 bg-purple-400/50 rounded-3xl text-purple-800 font-bold text-xs">
//                 Popular
//               </span>
//               <span className="px-3 py-1 bg-red-600/40 rounded-3xl text-red-600 font-bold text-xs">
//                 Spicy
//               </span>
//             </div>

//             <p className="text-gray-600 mt-3">
//               Tomato sauce, mozzarella, and lots of pepperoni.
//             </p>

//             <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

//             <div className="flex justify-evenly gap-3">
//               {["Medium", "Large", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
//                      hover:bg-red-200/30 hover:text-red-600
//                      active:border-2 active:border-red-500
//                      focus:outline-none focus:ring-2 focus:ring-red-400"
//                 >
//                   {size}
//                   <p className="text-xs font-normal text-gray-600">
//                     Base Price
//                   </p>
//                 </button>
//               ))}
//             </div>

//            <div className="flex justify-between items-center gap-5 mt-5">
//               <div>
//                 <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="text-gray-500 px-4 py-2 mt-4 shadow-md rounded-md border font-mono
//              hover:bg-red-50 hover:border-red-500"
//               >
//                 <i className="fa-solid fa-bars mr-2"></i>
//                 Customize
//               </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart({
//                       id: 12,
//                       name: "Margherita Classica",
//                       price: 15.99,
//                       image:
//                         "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60x",
//                     })
//                   }
//                   type="button"
//                   className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
//                  hover:bg-orange-800"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu3;
