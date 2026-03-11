import { Sun, Flame } from 'lucide-react';
import { useState } from 'react';

export function SplitScreenHero() {
  const [hoveredSide, setHoveredSide] = useState<'solar' | 'heating' | null>(null);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-120px)] min-h-[600px] gap-1">
      {/* Solar Side */}
      <a
        href="https://margavsolar.com/"
        className={`
          relative flex-1 group overflow-hidden
          transition-all duration-700 ease-out
          ${hoveredSide === 'solar' ? 'lg:flex-[1.2]' : ''}
          ${hoveredSide === 'heating' ? 'lg:flex-[0.9] lg:opacity-70' : ''}
        `}
        onMouseEnter={() => setHoveredSide('solar')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Card */}
        <div className="
          relative h-full w-full
          bg-gray-50
          border border-gray-200
          rounded-2xl p-8 lg:p-12
          flex flex-col justify-center items-center
          transition-all duration-700
          group-hover:bg-gray-100 group-hover:border-gray-300 group-hover:shadow-lg
        ">
          {/* Gradient Accent - Top Right */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(135deg, #66cc66, #33cc66, #00cc99)',
              filter: 'blur(80px)',
            }}
          />

          {/* Icon with Gradient */}
          <div className="
            mb-8
            p-6 rounded-full
            bg-gradient-to-br from-[#66cc66] to-[#00cc99]
            transform transition-transform duration-700
            group-hover:scale-110 group-hover:rotate-12
          ">
            <Sun className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-md">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-[#66cc66]">MarGav</span>{' '}
              <span className="text-[#3333cc]">Solar</span>
            </h2>
            
            <div className="space-y-2 mb-8 text-gray-600 text-lg">
              <p>Battery Storage</p>
              <div className="w-12 h-px bg-gradient-to-r from-[#66cc66] to-[#00cc99] mx-auto" />
              <p>PV Panels</p>
              <div className="w-12 h-px bg-gradient-to-r from-[#66cc66] to-[#00cc99] mx-auto" />
              <p>EV Charging</p>
            </div>

            {/* CTA Button */}
            <button className="
              px-8 py-4 rounded-full
              bg-gradient-to-r from-[#66cc66] to-[#00cc99]
              text-white font-bold text-lg
              transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl hover:shadow-[#00cc99]/50
              group-hover:animate-pulse
            ">
              Explore Solar Solutions
            </button>
          </div>

          {/* Decorative Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </a>

      {/* Heating Side */}
      <a
        href="#"
        className={`
          relative flex-1 group overflow-hidden
          transition-all duration-700 ease-out
          ${hoveredSide === 'heating' ? 'lg:flex-[1.2]' : ''}
          ${hoveredSide === 'solar' ? 'lg:flex-[0.9] lg:opacity-70' : ''}
        `}
        onMouseEnter={() => setHoveredSide('heating')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Card */}
        <div className="
          relative h-full w-full
          bg-gray-50
          border border-gray-200
          rounded-2xl p-8 lg:p-12
          flex flex-col justify-center items-center
          transition-all duration-700
          group-hover:bg-gray-100 group-hover:border-gray-300 group-hover:shadow-lg
        ">
          {/* Blue Accent - Top Left */}
          <div 
            className="absolute top-0 left-0 w-64 h-64 bg-[#3333cc] opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            style={{
              filter: 'blur(80px)',
            }}
          />

          {/* Icon with Blue */}
          <div className="
            mb-8
            p-6 rounded-full
            bg-[#3333cc]
            transform transition-transform duration-700
            group-hover:scale-110 group-hover:rotate-12
          ">
            <Flame className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-md">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-[#66cc66]">MarGav</span>{' '}
              <span className="text-[#3333cc]">Heating</span>
            </h2>
            
            <div className="space-y-2 mb-8 text-gray-600 text-lg">
              <p>Boilers</p>
              <div className="w-12 h-px bg-[#3333cc] mx-auto" />
              <p>Air Source Heat Pumps</p>
              <div className="w-12 h-px bg-[#3333cc] mx-auto" />
              <p>Smart Controls</p>
            </div>

            {/* CTA Button */}
            <button className="
              px-8 py-4 rounded-full
              bg-[#3333cc]
              text-white font-bold text-lg
              transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl hover:shadow-[#3333cc]/50
              group-hover:animate-pulse
            ">
              Upgrade My Heating
            </button>
          </div>

          {/* Decorative Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </a>
    </div>
  );
}
