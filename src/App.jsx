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
      {/* Navbar */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-cyan-400 text-center md:text-left">
            Zyvoro Tech
          </h1>

          <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase text-center md:text-left">
            Future Digital Solutions
          </p>
        </div>

        <nav className="flex gap-3 md:gap-8 text-[11px] md:text-sm text-gray-300 font-medium flex-wrap justify-center">
          <a
            href="#home"
            className="hover:text-cyan-400 transition border border-gray-700 px-3 py-2 rounded-xl"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition border border-gray-700 px-3 py-2 rounded-xl"
          >
            Services
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition border border-gray-700 px-3 py-2 rounded-xl"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition border border-gray-700 px-3 py-2 rounded-xl"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs md:text-sm mb-5">
            Building Future Digital Solutions
          </p>

          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            Modern Websites
            <br />
            For Modern Businesses
          </h2>

          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Zyvoro Tech helps startups, brands, and businesses grow online
            with premium websites, digital solutions, SEO optimization, and
            powerful business branding.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918527169719"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              Contact on WhatsApp
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Our Services</h3>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional digital services designed to help your business grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:-translate-y-2"
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

      {/* Projects */}
      <section id="projects" className="px-6 py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Recent Projects</h3>

            <p className="text-gray-400">
              Premium website concepts created by Zyvoro Tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-black border border-gray-800 hover:border-cyan-400 transition"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-72 w-full object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">
                    {project.name}
                  </h4>

                  <p className="text-gray-400">
                    Responsive and modern UI design built for online growth.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-6">
            Let’s Build Your Website
          </h3>

          <p className="text-gray-300 text-lg mb-10">
            Ready to grow your business online? Contact Zyvoro Tech today.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:contact@zyvorotech.com"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              contact@zyvorotech.com
            </a>

            <a
              href="tel:+918527169719"
              className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              +91 8527169719
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918527169719"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Zyvoro Tech. All Rights Reserved.
      </footer>
    </div>
  );
}
