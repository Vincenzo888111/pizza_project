// import React, { useState } from "react";

// const PIZZA_DATA = [
//   { id: 1, name: "Spicy Diavola", price: 22.99, tags: ["Popular", "Spicy"], image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
//   { id: 2, name: "Margherita Classica", price: 15.99, tags: ["Popular", "Vegetarian"], image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=500" },
//   { id: 3, name: "Cheese Lover", price: 12.99, tags: ["Popular"], image: "https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg" },
//   { id: 4, name: "Veggie Delight", price: 8.99, tags: ["New", "Vegetarian"], image: "https://i.pinimg.com/736x/bd/33/56/bd3356cecca660b4927f5c1a5c94570a.jpg" },
// ];

// function PizzaPage() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [search, setSearch] = useState("");

//   // មុខងារ Filter: ឆែកទាំងឈ្មោះ និង Tag ក្នុងពេលតែមួយ
//   const displayPizzas = PIZZA_DATA.filter((pizza) => {
//     const matchSearch = pizza.name.toLowerCase().includes(search.toLowerCase());
//     const matchTab = activeTab === "all" || pizza.tags.includes(activeTab);
//     return matchSearch && matchTab;
//   });

//   return (
//     <div className="w-full">
//       {/* --- ផ្នែកទី 1 (Header & Search) --- */}
//       <div className="bg-gray-800 p-10 text-center text-white">
//         <h1 className="text-3xl font-bold">Pizza Menu</h1>
//         <input
//           type="text"
//           placeholder="ស្វែងរកឈ្មោះ Pizza..."
//           className="mt-5 px-5 py-2 rounded-full text-black w-64 outline-none"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* --- ផ្នែកទី 2 (Filter Tabs) --- */}
//       <div className="flex justify-center gap-3 my-8">
//         {["all", "Popular", "New", "Vegetarian", "Spicy"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-1 rounded-full border ${activeTab === tab ? "bg-orange-500 text-white" : "bg-white"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- ផ្នែកទី 3 (Display Pizza Cards) --- */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
//         {displayPizzas.map((pizza) => (
//           <div key={pizza.id} className="border rounded-xl shadow-lg p-4">
//             <img src={pizza.image} alt={pizza.name} className="w-full h-40 object-cover rounded-lg" />
//             <h2 className="text-xl font-bold mt-3">{pizza.name}</h2>
//             <div className="flex gap-2 mt-2">
//               {pizza.tags.map(t => <span key={t} className="text-xs bg-orange-100 p-1 rounded">{t}</span>)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PizzaPage;