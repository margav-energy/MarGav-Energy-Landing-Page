const certifications = [
  // { name: 'MCS', fullName: 'Microgeneration Certification Scheme' },
  // { name: 'RECC', fullName: 'Renewable Energy Consumer Code' },
  { name: 'HIES', fullName: 'Home Insulation & Energy Systems' },
  // { name: 'TrustMark', fullName: 'Government Endorsed Quality Scheme' },
  { name: 'Gas Safe', fullName: 'Gas Safe Register' },
  { name: 'NFRC', fullName: 'National Federation of Roofing Contractors' },
  { name: 'NICEIC', fullName: 'Certified Electrical Contractors' },
  { name: 'Safe Contractor', fullName: 'Safe Contractor Accreditation' },
];

function CertCard({ name, fullName }: { name: string; fullName: string }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        flex-shrink-0 w-40 h-24
        rounded-lg
        transition-all duration-300
        hover:shadow-lg
        group
      "
      style={{ background: 'linear-gradient(135deg, #66cc66, #33cc66, #00cc99)' }}
    >
      <div className="text-xl font-bold text-white group-hover:text-white transition-colors mb-1">
        {name}
      </div>
      <div className="text-xs text-white/80 text-center px-2 group-hover:text-white transition-colors leading-tight">
        {fullName}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <div className="w-full py-12 border-t border-gray-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          Certified & Trusted
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 items-center"
            style={{
              width: 'max-content',
              animation: 'trust-bar-marquee 40s linear infinite',
            }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <CertCard
                key={`${cert.name}-${index}`}
                name={cert.name}
                fullName={cert.fullName}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trust-bar-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
