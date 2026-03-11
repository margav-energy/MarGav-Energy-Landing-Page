import { SplitScreenHero } from '../components/split-screen-hero';
import { TrustBar } from '../components/trust-bar';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            One Name. Total Home Efficiency.
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            The future of renewable energy and home comfort starts here. Choose a division to begin.
          </p>
        </div>

        <SplitScreenHero />
      </section>

      {/* Trust Bar */}
      <TrustBar />
    </>
  );
}
