import cow from "@/assets/cow.jpg";
import buffalo from "@/assets/buffalo.jpg";
import camel from "@/assets/camel.jpg";
import goat from "@/assets/goat.jpeg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Featured = () => {
  const animals = [
    { src: cow, alt: "cow", name: "Cattle", count: "250+" },
    { src: camel, alt: "camel", name: "Camels", count: "180+" },
    { src: buffalo, alt: "buffalo", name: "Buffalo", count: "320+" },
    { src: goat, alt: "goat", name: "Goats", count: "500+" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-linear-to-br from-green-600 via-green-500 to-teal-500 rounded-3xl p-8 md:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
           Featured Animals
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Browse our premium selection of healthy & certified animals
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <div
              key={animal.alt}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer group"
            >
              <div className="relative aspect-square">
                <Image
                  src={animal.src}
                  alt={animal.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-green-600">
                  {animal.count}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {animal.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">View Collection</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={"/all_animals"}>
            <button
            className="btn bg-white text-green-600 hover:bg-gray-100 transform transition duration-300 ease-in-out 
                         hover:scale-110 hover:shadow-2xl px-10 py-6 rounded-full font-bold text-lg shadow-lg flex items-center gap-3 mx-auto"
          >
            <span>Explore All Animals</span>
            <FaArrowRight className="text-lg" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Featured;
