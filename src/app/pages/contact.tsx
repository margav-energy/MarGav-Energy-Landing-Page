import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Unit 7-8, Kimberley Business Park, Kimberley Way, Rugeley WS15 1RE',
    href: 'https://maps.google.com/?q=Unit+7-8+Kimberley+Business+Park+Kimberley+Way+Rugeley+WS15+1RE',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '01889 256069',
    href: 'tel:01889256069',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'sales@margav.energy',
    href: 'mailto:sales@margav.energy',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Mon – Fri: 8:00am – 5:00pm',
  },
];

const enquiryTypes = [
  'Solar Panels & Battery Storage',
  'EV Charging',
  'Heat Pumps',
  'Underfloor Heating',
  'General Enquiry',
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full border-b border-gray-200 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #66cc66, #33cc66, #00cc99)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center">
          <p className="text-sm uppercase tracking-wider text-white/70 mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
            Whether you have a question about our services, need a quote, or just want to say
            hello — our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Details</h2>
              <p className="text-gray-600">
                Reach out through any of the channels below, or fill in the form and we'll get
                back to you within one working day.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-gray-100 text-gray-700">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 hover:text-[#35D27F] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="w-full h-52 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
              <iframe
                title="MarGav Energy location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2415.0!2d-1.934!3d52.762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDQ1JzQzLjIiTiAxwrA1NicwMi40Ilc!5e0!3m2!1sen!2suk!4v1700000000000"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="p-4 rounded-full bg-[#35D27F]/10">
                    <CheckCircle className="h-10 w-10 text-[#35D27F]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you for getting in touch. A member of our team will be in contact
                    within one working day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-[#35D27F] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#35D27F]/60 focus:border-transparent transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#35D27F]/60 focus:border-transparent transition"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#35D27F]/60 focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#35D27F]/60 focus:border-transparent transition"
                        placeholder="01234 567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#35D27F]/60 focus:border-transparent transition"
                    >
                      <option value="">Select a topic...</option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#35D27F]/60 focus:border-transparent transition resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-[#35D27F] px-8 py-3.5 text-sm font-semibold text-black hover:bg-[#2bb36a] transition-colors"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
