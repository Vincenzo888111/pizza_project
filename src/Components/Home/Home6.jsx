import React from "react";

const testimonials = [
  {
    name: "Phea rak",
    location: "Takhmav, Kandal",
    rating: 5,
    text: "The best pizza I've ever had! The crust was perfectly crispy, and the toppings were incredibly fresh.",
    image:
      "https://scontent.fpnh12-1.fna.fbcdn.net/v/t39.30808-1/669819845_939039842427683_2774711171823583171_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH4E7am6ER49nOKsmR_UOjJ4jvDauRcC_fiO8Nq5FwL9_QomBNK8GaccF0ACDhgvaR5M4KKXUw_LJu7l_tCjqXh&_nc_ohc=o_4wmrw_AiEQ7kNvwFug-fJ&_nc_oc=AdpaFVbnKor7pfNaTKKAJAgQGudOCa1vQBIeckpRQo57FakL2abSVEeee2dMOjG1M8E&_nc_zt=24&_nc_ht=scontent.fpnh12-1.fna&_nc_gid=y_Sb5S_g7omxl77OFqFizw&_nc_ss=7b2a8&oh=00_Af3Y0XBM5H5eO9ObmNGNzlZKvYFUuaZr6o3klG550dZUSg&oe=69F89A3B",
  },
  {
    name: "Daniel Kim",
    location: "Chbar Am Pov, Phnom Penh",
    rating: 4,
    text: "Fast delivery, beautiful packaging, and the pizza was still hot when it arrived.",
    image:
      "https://scontent.fpnh12-1.fna.fbcdn.net/v/t39.30808-1/540453766_1309783333857585_5317811667532782185_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSLtzPn7QCM0_mqOdhkKB5PzPxzOCjdjY_M_HM4KN2NgC4gRTDnxKtA0phSnszSUhOTlPLGeHthQbmj0hi70gI&_nc_ohc=fFra8lv_qpMQ7kNvwF0-lEh&_nc_oc=Adq3dlpdrGiubiEFY-PoIxbsuv3DiZ-gSDtC6aaQS0TUmDziTucHJAv493ZI47Gl4CQ&_nc_zt=24&_nc_ht=scontent.fpnh12-1.fna&_nc_gid=Ewi8FrRJMYj70x7iMNzCnQ&_nc_ss=7b2a8&oh=00_Af3_iELtH3LjwPm7KZQMmEY8LGRWjcD2G5XqCTlLrqRcqw&oe=69F8C415",
  },
  {
    name: "Vathanak",
    location: "Phnom Penh, Cambodia",
    rating: 5,
    text: "This is the pizza I recommend to everyone. Rich flavor, perfect cheese, and crispy edges.",
    image:
      "https://scontent.fpnh12-1.fna.fbcdn.net/v/t39.30808-1/433545944_966123428218818_7785021997493889098_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF0qNY4VELdOShUWYgFLGSeqN7x9b9v5Hmo3vH1v2_keQn8vj3BKAJzR_MrkKtILV41cxOOrAVgBf_QDKmGSloO&_nc_ohc=08zYzMF5SdwQ7kNvwFW4RVM&_nc_oc=Adr8BjB-Y_Bwvf1iWgs8yiAlk6gtfDQufxtn_rKbhZSFzVFAJJxDyYRiy4ifpnhzuqA&_nc_zt=24&_nc_ht=scontent.fpnh12-1.fna&_nc_gid=Pjg2FjK_WurX5EUyrLZhjQ&_nc_ss=7b2a8&oh=00_Af0iyYbdt16d7wBDZZ6F8FbpSC7f5s_Id-7p7q0QWi5UlA&oe=69F891FA",
  },
];

function Home6() {
  return (
    <section className="w-full bg-pink-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Global Testimonials
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-orange-300" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="rounded-xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={person.image}
                alt={person.name}
                className="mx-auto h-16 w-16 rounded-full object-cover ring-4 ring-orange-100"
              />

              <div
                className="mt-4 text-2xl text-yellow-400"
                aria-label={`${person.rating} out of 5 stars`}
              >
                {"★".repeat(person.rating)}
                <span className="text-gray-300">
                  {"★".repeat(5 - person.rating)}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                "{person.text}"
              </p>

              <h2 className="mt-5 text-lg font-bold text-gray-900">
                {person.name}
              </h2>

              <p className="mt-1 text-sm text-orange-600">
                {person.location}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-red-600 px-6 py-10 text-center shadow-xl sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Join Our Global Pizza Club
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-red-50 sm:text-base">
            Be the first to know about new menu items, exclusive deals, and
            special events from the world's most famous pizzerias.
          </p>

          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              className="h-12 flex-1 rounded-full bg-white px-5 text-gray-700 outline-none transition focus:ring-4 focus:ring-orange-200"
              type="email"
              placeholder="Enter your email"
            />

            <button
              type="submit"
              className="h-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 px-8 font-bold text-red-700 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home6;
