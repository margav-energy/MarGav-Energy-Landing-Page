import { Link } from 'react-router';
import {
  ShieldCheck,
  Users,
  Zap,
  Leaf,
  Award,
  ArrowRight,
} from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description:
      'Every installation is backed by industry-leading warranties and our commitment to excellence. We never cut corners.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'From initial consultation to aftercare, your satisfaction drives everything we do. Real people, real support.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We help households reduce their carbon footprint with solutions that benefit both the planet and your energy bills.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'We stay at the forefront of renewable technology, bringing the latest and most efficient products to your home.',
  },
];

const milestones = [
  { stat: '100+', label: 'Installations Completed' },
  { stat: '10+', label: 'Years of Experience' },
  { stat: '98%', label: 'Customer Satisfaction' },
  { stat: '6', label: 'Industry Accreditations' },
];

export function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-15" style={{
          background: 'linear-gradient(135deg, #66cc66, #00cc99)',
          filter: 'blur(120px)',
        }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3333cc] opacity-10" style={{
          filter: 'blur(120px)',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            About <span className="text-[#66cc66]">MarGav</span> <span className="text-[#3333cc]">Energy</span>
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
            Powering Homes. Building Trust.
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We're a Staffordshire-based renewable energy company on a mission to make every UK
            home more efficient, comfortable, and sustainable.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                <span className="text-[#66cc66] font-semibold">MarGav</span> <span className="text-[#3333cc] font-semibold">Energy</span> was founded with a simple belief: every homeowner deserves access
                to reliable, high-quality renewable energy solutions without the complexity.
              </p>
              <p>
                Our two specialist divisions — <strong><span className="text-[#66cc66]">MarGav</span> <span className="text-[#3333cc]">Solar</span></strong> and{' '}
                <strong><span className="text-[#66cc66]">MarGav</span> <span className="text-[#3333cc]">Heating</span></strong> — cover the full spectrum of home energy needs,
                from photovoltaic panels and battery storage to heat pumps and underfloor heating.
              </p>
              <p>
                What sets us apart is our end-to-end approach. We handle consultation, design,
                installation, and aftercare in-house, ensuring a seamless experience and
                consistent quality at every step.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {milestones.map(({ stat, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center p-8 rounded-2xl text-center transition-all hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #66cc66, #33cc66, #00cc99)' }}
              >
                <span className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat}
                </span>
                <span className="text-sm text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values aren't just words on a page — they guide every project we take on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-8 bg-white border border-gray-200 rounded-2xl transition-all hover:border-gray-300 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex p-3 rounded-xl bg-gray-100 text-gray-700 group-hover:bg-gradient-to-br group-hover:from-[#66cc66] group-hover:to-[#00cc99] group-hover:text-white transition-all">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations callout */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 rounded-3xl p-10 lg:p-16"
          style={{ background: 'linear-gradient(135deg, #66cc66, #33cc66, #00cc99)' }}
        >
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 text-white">
              <Award className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Fully Accredited
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Trusted by Homeowners. Recognised by Industry.
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              <span className="font-semibold">MarGav</span> Energy holds accreditations from HIES, TrustMark, Gas Safe, NICEIC, NFRC,
              and Safe Contractor — so you can be confident that every job meets the highest
              standards.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-white/90 transition-colors shrink-0"
          >
            Explore Our Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
