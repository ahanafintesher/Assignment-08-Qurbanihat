import cow from "@/assets/cow.jpg";
import buffalo from "@/assets/buffalo.jpg";
import camel from "@/assets/camel.jpg";
import goat from "@/assets/goat.jpeg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
   <div className="mx-auto py-4 "> {/* reduced py-8 → py-4 */}
  <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg">
    <div className="grid md:grid-cols-2 gap-6 p-6 items-center"> {/* reduced p-8 → p-6 */}

      {/* Content Section */}
      <div className="space-y-4"> {/* reduced spacing */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800"> {/* slightly smaller */}
          Premium Quality Livestock
        </h1>

        <p className="text-base text-gray-600">
          Find the best selection of healthy cattle, camels, buffalo, and goats 
          for your Qurbani. Quality assured, ethically raised.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/all_animals">
            <button className="btn bg-green-800 text-white w-full  rounded-full ">
              Browse Animals
            </button>
          </Link>

          <button className="btn bg-white border-2 border-green-800 text-green-800 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-3"> {/* smaller gap */}
        <div className="relative aspect-[4/3]"> {/* changed from square to shorter */}
          <Image src={cow} alt="cow" fill className="rounded-2xl object-cover" />
        </div>

        <div className="relative aspect-[4/3]">
          <Image src={camel} alt="camel" fill className="rounded-2xl object-cover" />
        </div>

        <div className="relative aspect-[4/3]">
          <Image src={buffalo} alt="buffalo" fill className="rounded-2xl object-cover" />
        </div>

        <div className="relative aspect-[4/3]">
          <Image src={goat} alt="goat" fill className="rounded-2xl object-cover" />
        </div>
      </div>

    </div>
  </div>
</div>
  );
};
export default Banner;
