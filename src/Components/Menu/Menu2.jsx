// import React from "react";

// // 1. បញ្ជីទិន្នន័យ Pizza ពេញលេញពី ID 1 ដល់ 12
// const PIZZA_DATA = [
//   {
//     id: 1,
//     name: "Spicy Diavola",
//     price: 22.99,
//     image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60",
//     description: "Tomato sauce, mozzarella, and lots of pepperoni.",
//     tags: ["Popular", "Spicy"],
//     isNew: true,
//   },
//   {
//     id: 2,
//     name: "Margherita Classica",
//     price: 15.99,
//     image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=500&q=60",
//     description: "Traditional tomato sauce with fresh mozzarella and basil.",
//     tags: ["Popular", "Vegetarian"],
//     isNew: true,
//   },
//   {
//     id: 3,
//     name: "BBQ Chicken Feast",
//     price: 13.99,
//     image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=60",
//     description: "Grilled chicken, BBQ sauce, and red onions.",
//     tags: ["Popular", "Meat"],
//     isNew: true,
//   },
//   {
//     id: 4,
//     name: "Cheese Lover",
//     price: 12.99,
//     image: "https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg",
//     description: "A rich blend of mozzarella, cheddar, and parmesan.",
//     tags: ["Popular", "Cheesy"],
//     isNew: false,
//   },
//   {
//     id: 5,
//     name: "Hawaiian Tropical",
//     price: 14.99,
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60",
//     description: "Pineapple, ham, and extra mozzarella cheese.",
//     tags: ["Sweet", "Meat"],
//     isNew: false,
//   },
//   {
//     id: 6,
//     name: "Seafood Extreme",
//     price: 18.99,
//     image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=500&q=60",
//     description: "Fresh shrimp, squid, and mussels with special sauce.",
//     tags: ["Seafood", "Premium"],
//     isNew: true,
//   },
//   {
//     id: 7,
//     name: "Pizza Slices Rustic",
//     price: 10.99,
//     image: "https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg",
//     description: "Tomato sauce, mozzarella, and rustic pepperoni slices.",
//     tags: ["Popular", "Spicy"],
//     isNew: true,
//   },
//   {
//     id: 8,
//     name: "Veggie Delight",
//     price: 8.99,
//     image: "https://i.pinimg.com/736x/bd/33/56/bd3356cecca660b4927f5c1a5c94570a.jpg",
//     description: "Tomato sauce, mozzarella, and fresh garden vegetables.",
//     tags: ["Popular", "Vegetarian"],
//     isNew: true,
//   },
//   {
//     id: 9,
//     name: "BBQ Chicken Special",
//     price: 11.99,
//     image: "https://i.pinimg.com/1200x/85/b1/5a/85b15a93913875c036b5c0c39cea0886.jpg",
//     description: "Grilled chicken with smoky BBQ sauce and onions.",
//     tags: ["Popular", "Meat"],
//     isNew: true,
//   },
//   {
//     id: 10,
//     name: "Spicy Diavola Junior",
//     price: 9.99,
//     image: "https://i.pinimg.com/736x/7f/fd/51/7ffd51aa3cfe80c6c23ede4f52366bb9.jpg",
//     description: "Spicy pepperoni slices with a kick of chili.",
//     tags: ["Popular", "Spicy"],
//     isNew: true,
//   },
//   {
//     id: 11,
//     name: "Margherita Premium",
//     price: 15.99,
//     image: "https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg",
//     description: "Traditional Italian basil and fresh mozzarella.",
//     tags: ["Popular", "Classic"],
//     isNew: true,
//   },
//   {
//     id: 12,
//     name: "Rustic Margherita",
//     price: 15.99,
//     image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=60",
//     description: "Traditional thin crust with fresh toppings.",
//     tags: ["Popular", "Classic"],
//     isNew: true,
//   }
// ];

// const PizzaCard = ({ item, onAddToCart, onShowModal }) => (
//   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
//     <div className="relative">
//       <img
//         src={item.image}
//         alt={item.name}
//         className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
//       />
//       {item.isNew && (
//         <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
//           NEW
//         </span>
//       )}
//     </div>

//     <div className="p-6">
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
//         <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
//           ${item.price}
//         </span>
//       </div>

//       <div className="flex gap-3 mt-3">
//         {item.tags.map((tag) => (
//           <span 
//             key={tag}
//             className={`px-3 py-1 rounded-3xl font-bold text-xs ${
//               tag === 'Spicy' ? 'bg-red-600/20 text-red-600' : 
//               tag === 'Vegetarian' ? 'bg-green-600/20 text-green-600' : 
//               tag === 'Meat' ? 'bg-yellow-500/20 text-yellow-600' :
//               'bg-purple-400/50 text-purple-800'
//             }`}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <p className="text-gray-600 mt-3 text-sm">{item.description}</p>

//       <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>
//       <div className="flex justify-evenly gap-3">
//         {["Medium", "Large", "XL"].map((size) => (
//           <button
//             key={size}
//             type="button"
//             className="px-4 py-2 bg-gray-50 shadow-sm rounded-md font-mono font-bold hover:bg-red-100 hover:text-red-600 transition"
//           >
//             {size}
//             <p className="text-[10px] font-normal text-gray-400">Base Price</p>
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-between items-center gap-5 mt-5">
//         <button
//           type="button"
//           onClick={onShowModal}
//           className="flex-1 text-gray-500 px-4 py-2 mt-4 shadow-sm rounded-md border font-mono hover:bg-red-50 hover:border-red-500 transition"
//         >
//           <i className="fa-solid fa-bars mr-2"></i> Customize
//         </button>

//         <button
//           onClick={() => onAddToCart(item)}
//           type="button"
//           className="flex-1 bg-orange-500 text-white px-6 py-2 mt-4 rounded-md font-mono hover:bg-orange-600 transition"
//         >
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   </div>
// );

// function Menu2({ cart, setCart, setShowModal }) {
//   const handleAddToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <div className="my-5 mx-3 py-10 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 underline decoration-orange-500">
//           Our Full Pizza Menu
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {PIZZA_DATA.map((pizza) => (
//             <PizzaCard 
//               key={pizza.id} 
//               item={pizza} 
//               onAddToCart={handleAddToCart} 
//               onShowModal={() => setShowModal(true)} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu2;