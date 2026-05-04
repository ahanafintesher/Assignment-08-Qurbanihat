import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import Image from "next/image";

const AnimalCard = ({data}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
        fill
          src={data.image}
          alt={data.breed}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
         {data.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800 text-lg">{data.breed}</h3>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <MdLocationOn size={14} className="text-green-600" />
           {data.location}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-50 rounded-xl px-3 py-2 flex items-center gap-2">
            <GiWeight className="text-green-700" size={16} />
            <div>
              <p className="text-xs text-gray-400">Weight</p>
              <p className="text-sm font-semibold text-gray-700">{data.weight} kg</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl px-3 py-2 flex items-center gap-2">
            <FaBirthdayCake className="text-green-700" size={14} />
            <div>
              <p className="text-xs text-gray-400">Age</p>
              <p className="text-sm font-semibold text-gray-700">{data.age}</p>
            </div>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-xl font-bold text-green-800">৳ {data.price}</p>
          </div>
          <Link
            href="/animals/8"
            className="px-5 py-2.5 bg-green-800 text-white text-sm font-medium rounded-xl hover:bg-green-900 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AnimalCard;