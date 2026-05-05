
import { getData } from "@/lib/getData";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { toast } from "react-toastify";
import BookingButton from "./BookingButton";


const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getData();
  const animal = data.find((a) => a.id === parseInt(id));

  const typeConfig = {
    cow: {  badge: "bg-amber-100 text-amber-700" },
    goat: { badge: "bg-green-100 text-green-700" },
    camel:{  badge: "bg-orange-100 text-orange-700" },
    buffalo: { badge: "bg-blue-100 text-blue-700" },
  };

  const config = typeConfig[animal.type.toLowerCase()] || typeConfig.goat;

  const handleBook = () => {
    toast("Booked Successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left — Image */}
        <div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={animal.image}
              alt={animal.breed}
              fill
              className="object-cover"
            />
            <span className={`absolute top-4 left-4 text-sm font-semibold px-4 py-1.5 rounded-full ${config.badge}`}>
               {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
            </span>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
              <GiWeight className="text-green-700 mx-auto mb-1" size={22} />
              <p className="text-xs text-gray-400">Weight</p>
              <p className="text-base font-bold text-gray-700">{animal.weight} kg</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
              <FaBirthdayCake className="text-green-700 mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Age</p>
              <p className="text-base font-bold text-gray-700">{animal.age} yrs</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
              <MdLocationOn className="text-green-700 mx-auto mb-1" size={22} />
              <p className="text-xs text-gray-400">Location</p>
              <p className="text-base font-bold text-gray-700">{animal.location}</p>
            </div>
          </div>
        </div>

        {/* Right — Details + Form */}
        <div className="flex flex-col gap-6">

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              {animal.breed} {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
            </h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <MdLocationOn size={16} className="text-green-600" />
              {animal.location}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <FaTag className="text-green-700" size={18} />
              <p className="text-3xl font-bold text-green-800">
                ৳ {animal.price.toLocaleString()}
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Description</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                This is a healthy {animal.breed} {animal.type} from {animal.location},
                weighing {animal.weight} kg and {animal.age} years old.
                Suitable for Qurbani and meets all Islamic requirements.
              </p>
            </div>
           
          </div>

          <div>
            <BookingButton></BookingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;