import { MessageCircle } from "lucide-react";

export default function ZyvoroTechPortfolio() {
  const services = [
    {
      title: "Website Development",
      description: "Modern responsive business websites with premium UI/UX design.",
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores with secure payment integration and mobile optimization.",
    },
    {
      title: "SEO & Digital Growth",
      description: "Improve your online visibility and grow your business digitally.",
    },
    {
      title: "IT Support",
      description: "Professional technical support and business IT solutions.",
    },
  ];

  const projects = [
    {
      name: "Fashion Store Website",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Restaurant Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Gym & Fitness Website",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          Zyvoro Tech
        </h1>
      </header>

      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden"
      >
        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-5">
            Building Future Digital Solutions
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Modern Websites
            <br />
            For Modern Businesses
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Zyvoro Tech helps startups, brands, and businesses grow online.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918527169719"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
            >
              <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <a
        href="https://wa.me/918527169719"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl"
      >
        <MessageCircle size={32} />
      </a>

      <footer className="text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Zyvoro Tech. All Rights Reserved.
      </footer>
    </div>
  );
}
