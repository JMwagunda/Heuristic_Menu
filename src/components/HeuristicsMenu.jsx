import { useState } from 'react';
import { heuristics } from '../data/HeuristicsDatastore';


const HeuristicsMenu = () => {
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          10 Usability Heuristics
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {heuristics.map((heuristic) => {
            const Icon = heuristic.icon;
            const isActive = activeItem === heuristic.id;
            
            return (
              <div 
                key={heuristic.id}
                className={`
                  relative transition-all duration-300 ease-in-out
                  ${isActive 
                    ? `md:col-span-2 scale-105 z-10 ${heuristic.color.bg} shadow-xl` 
                    : `col-span-1 bg-white hover:${heuristic.color.bg}`}
                  rounded-lg p-4 cursor-pointer text-center
                  border border-gray-200
                  flex flex-col items-center
                `}
                onMouseEnter={() => setActiveItem(heuristic.id)}
                onMouseLeave={() => setActiveItem(null)}
                onClick={() => setActiveItem(isActive ? null : heuristic.id)}
              >
                <div className="flex flex-col items-center">
                  <div className={`mb-3 ${heuristic.color.text}`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className={`font-semibold text-lg mb-2 ${heuristic.color.textActive}`}>
                    {heuristic.id}
                  </span>
                  
                  {isActive && (
                    <div className="mt-2 animate-fadeIn px-2">
                      <h3 className={`font-bold text-xl mb-2 ${heuristic.color.textTitle}`}>
                        {heuristic.title}
                      </h3>
                      <p className="text-sm text-gray-700 text-center">
                        {heuristic.description}
                      </p>
                      <div className={`mt-2 flex items-center justify-center ${heuristic.color.text}`}>
                        <span className="text-xs font-medium">Learn More</span>
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