import { useState } from 'react';
import { heuristics } from '../data/HeuristicsDatastore'; 

const HeuristicsMenu = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-screen max-w-5xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">10 Usability Heuristics</h1>
        <div className="grid grid-cols-5 gap-6">
          {heuristics.map((heuristic) => {
            const Icon = heuristic.icon;
            return (
              <div 
                key={heuristic.id}
                className={`
                  relative transition-all duration-300 ease-in-out
                  ${activeItem === heuristic.id 
                    ? `scale-125 z-10 col-span-2 ${heuristic.bgColor} shadow-xl` 
                    : `scale-100 bg-white ${heuristic.hoverColor}`}
                  rounded-2xl p-5 cursor-pointer text-center
                  border border-gray-100 hover:border-transparent
                `}
                onMouseEnter={() => setActiveItem(heuristic.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`mb-3 text-${heuristic.color}-600`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className={`font-semibold text-lg mb-2 text-${heuristic.color}-800`}>{heuristic.id}</span>
                  
                  {activeItem === heuristic.id && (
                    <div className="mt-2 animate-fadeIn">
                      <h3 className={`font-bold text-xl mb-2 text-${heuristic.color}-900`}>{heuristic.title}</h3>
                      <p className="text-sm text-gray-700">{heuristic.description}</p>
                      <div className={`mt-2 flex items-center justify-center text-${heuristic.color}-600`}>
                        <span className="text-xs font-medium ml-1">Learn More</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeuristicsMenu;
