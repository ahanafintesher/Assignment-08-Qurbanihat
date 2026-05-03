import { FaMosque } from "react-icons/fa";
import { GiGoat, GiWaterDrop, GiMeat } from "react-icons/gi";
import { GiCurvyKnife } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

const tips = [
  {
    icon: <GiGoat size={28} />,
    title: "Choose a Healthy Animal",
    desc: "The animal should be strong, healthy, and meet the required age — goat/sheep (1 year), cow/bull (2 years), or camel (5 years).",
  },
  {
    icon: <MdVolunteerActivism size={28} />,
    title: "Ensure Proper Intention (Niyyah)",
    desc: "Qurbani should be done only for Allah, with sincerity and devotion. The intention must be pure before the act.",
  },
  {
    icon: <GiCurvyKnife size={28} /> ,
    title: "Follow Islamic Method of Slaughter",
    desc: 'Slaughter with a sharp knife, say "Bismillah, Allahu Akbar," and ensure the animal is treated humanely throughout.',
  },
  {
    icon: <GiWaterDrop size={28} />,
    title: "Maintain Cleanliness & Hygiene",
    desc: "Properly drain and clean blood, and keep the surroundings clean during and after slaughter.",
  },
  {
    icon: <GiMeat size={28} />,
    title: "Distribute Meat Properly",
    desc: "Share the meat fairly — one-third for family, one-third for relatives, and one-third for the poor.",
  },
];

const Tips = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <FaMosque className="text-green-800" size={40} />
          </div>
          <h2 className="text-4xl font-bold text-green-800 mb-3">
            Qurbani Tips
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Eid ul Adha 2026 is expected on {' '}
            <span className="font-semibold text-green-800">
               Wednesday, 27 May 2026
            </span>
          </p>

          {/* Ayah */}
          <div className="mt-6 bg-green-800 text-white rounded-2xl px-6 py-5 max-w-2xl mx-auto">
            <p className="text-lg font-medium leading-relaxed italic">
              "Their meat will not reach Him, nor will their blood, but what
              reaches Him is your piety."
            </p>
            <p className="text-green-200 text-sm mt-2">— Surah Al-Hajj (22:37)</p>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-100 text-green-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-800 group-hover:text-white transition-colors duration-300">
                {tip.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded-full">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-gray-800 text-base">
                  {tip.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}

          {/* Last card — reminder */}
          <div className="bg-green-800 rounded-2xl p-6 shadow-sm text-white sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
            <FaMosque size={32} className="mb-4 text-green-300" />
            <h3 className="font-semibold text-lg mb-2">Remember</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Qurbani is not just about slaughtering an animal. The real essence
              is intention, sincerity, and consciousness of Allah — <span className="font-bold text-white">Taqwa</span>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tips;