import Image from "next/image";
import cow1 from "@/assets/cow.jpg";
import cow2 from "@/assets/cow-2.jpg";
import buffalo1 from "@/assets/buffalo.jpg";
import buffalo2 from "@/assets/buffalo-2.jpg";
import camel1 from "@/assets/camel.jpg";
import camel2 from "@/assets/camel-2.jpg";
import goat1 from "@/assets/goat.jpeg";
import goat2 from "@/assets/goat-2.jpg";

const TopBreeds = () => {
  const breeds = [
    // Cow Breeds
    {
      id: 1,
      name: "Deshi Cow",
      category: "Cow",
      image: cow1,
      shares: "7 Shares",
      minAge: "2+ Years",
      weight: "400-600 kg",
      available: 150,
      price: "From $2,200",
      features: ["Local Breed", "Sturdy Build", "Perfect for Qurbani"],
      badge: "Most Popular",
      badgeColor: "bg-green-600"
    },
    {
      id: 2,
      name: "Sahiwal Cow",
      category: "Cow",
      image: cow2,
      shares: "7 Shares",
      minAge: "2+ Years",
      weight: "500-700 kg",
      available: 80,
      price: "From $2,800",
      features: ["Premium Quality", "Heavy Weight", "Healthy"],
      badge: "Premium",
      badgeColor: "bg-amber-600"
    },
    
    // Camel Breeds
    {
      id: 3,
      name: "Arabic Camel",
      category: "Camel",
      image: camel1,
      shares: "7 Shares",
      minAge: "5+ Years",
      weight: "500-700 kg",
      available: 60,
      price: "From $4,500",
      features: ["Pure Breed", "Large Size", "Shariah Compliant"],
      badge: "Special",
      badgeColor: "bg-teal-600"
    },
    {
      id: 4,
      name: "Desert Camel",
      category: "Camel",
      image: camel2,
      shares: "7 Shares",
      minAge: "5+ Years",
      weight: "450-650 kg",
      available: 70,
      price: "From $4,000",
      features: ["Resilient", "Healthy", "Age Verified"],
      badge: "Best Value",
      badgeColor: "bg-emerald-600"
    },
    
    // Goat Breeds
    {
      id: 5,
      name: "Black Bengal Goat",
      category: "Goat",
      image: goat2,
      shares: "1 Share",
      minAge: "1+ Year",
      weight: "35-50 kg",
      available: 300,
      price: "From $350",
      features: ["Premium Meat", "Tender", "High Demand"],
      badge: "Top Choice",
      badgeColor: "bg-green-600"
    },
    {
      id: 6,
      name: "Jamnapari Goat",
      category: "Goat",
      image: goat1,
      shares: "1 Share",
      minAge: "1+ Year",
      weight: "50-70 kg",
      available: 120,
      price: "From $500",
      features: ["Large Size", "Heavy Weight", "Healthy"],
      badge: "Large Breed",
      badgeColor: "bg-blue-600"
    },
    
    // Buffalo Breeds
    {
      id: 7,
      name: "Murrah Buffalo",
      category: "Buffalo",
      image: buffalo1,
      shares: "7 Shares",
      minAge: "2+ Years",
      weight: "600-800 kg",
      available: 90,
      price: "From $3,200",
      features: ["Heavy Weight", "Strong Build", "Certified"],
      badge: "Heavy Breed",
      badgeColor: "bg-purple-600"
    },
    {
      id: 8,
      name: "Nili-Ravi Buffalo",
      category: "Buffalo",
      image: buffalo2,
      shares: "7 Shares",
      minAge: "2+ Years",
      weight: "550-750 kg",
      available: 75,
      price: "From $3,000",
      features: ["Premium Quality", "Healthy", "Age Verified"],
      badge: "Quality",
      badgeColor: "bg-indigo-600"
    }
  ];

  return (
    <section className="bg-linear-to-b from-white to-green-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-lg">🌙</span>
            Eid ul Adha 2024
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Breeds for Qurbani
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our premium selection of certified breeds. 
            All animals are healthy, age-verified, and Shariah compliant.
          </p>
        </div>

        {/* Breeds Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {breeds.map((breed) => (
            <div
              key={breed.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className={`${breed.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {breed.badge}
                  </span>
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {breed.available} Available
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 text-white">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">{breed.shares}</span>
                      <span>{breed.minAge}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Tag */}
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                  {breed.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                  {breed.name}
                </h3>

                {/* Weight */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  {breed.weight}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {breed.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-green-600 font-bold text-lg">
                      {breed.price}
                    </span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Shariah Compliant</h4>
            <p className="text-gray-600 text-sm">All animals meet Islamic requirements for Qurbani</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏥</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Health Certified</h4>
            <p className="text-gray-600 text-sm">Veterinary checked and disease-free animals</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📋</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Age Verified</h4>
            <p className="text-gray-600 text-sm">Proper age documentation for each animal</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Book Your Qurbani Animal?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Reserve your preferred breed now. Limited availability for premium breeds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
              Browse All Animals
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact for Custom Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;