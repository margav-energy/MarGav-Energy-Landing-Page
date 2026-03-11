import { Outlet, Link, useLocation } from 'react-router';
import Logo from '../../assets/margav_energy.png';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export function MainLayout() {
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="MarGav Energy logo"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`hover:text-gray-900 transition-colors ${
                  pathname === to ? 'text-gray-900 font-medium' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-300 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1.4fr)]">
            {/* Brand + contact */}
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="MarGav Energy logo"
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-sm text-white/70 max-w-md">
                Transforming UK properties of all types into energy-efficient, sustainable homes
                through expert consultancy and professional installation services.
              </p>

              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#35D27F]">📍</span>
                  <span>
                    Unit 7-8, Kimberley Business Park, Kimberley Way, Rugeley WS15 1RE
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#35D27F]">📞</span>
                  <a href="tel:01889256069" className="hover:text-white transition-colors">
                    01889 256069
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#35D27F]">✉️</span>
                  <a
                    href="mailto:sales@margav.energy"
                    className="hover:text-white transition-colors"
                  >
                    sales@margav.energy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter + social */}
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">
                  Stay Updated
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Subscribe to our newsletter for energy efficiency tips and updates.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#35D27F]/70"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-[#35D27F] px-4 py-2 text-sm font-medium text-black hover:bg-[#2bb36a] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white">Follow Us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-[#66cc66]">MarGav</span> <span className="text-[#3333cc]">Energy</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40 space-y-1">
            <p><span className="text-[#66cc66]">MarGav</span> <span className="text-[#3333cc]">Energy</span> is a trading style of Margav Renewables Ltd</p>
            <p>Margav Renewables Ltd | Company Number: 12580649 | Registered in England &amp; Wales</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
