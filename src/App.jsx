import { MessageCircle } from "lucide-react";

export default function ZyvoroTechPortfolio() {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern responsive business websites with premium UI/UX design.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Online stores with secure payment integration and mobile optimization.",
    },
    {
      title: "SEO & Digital Growth",
      description:
        "Improve your online visibility and grow your business digitally.",
    },
    {
      title: "IT Support",
      description:
        "Professional technical support and business IT solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row md:px-8">

          <div>
            <h1 className="text-center text-2xl font-bold tracking-wide text-cyan-400 md:text-left md:text-3xl">
              Zyvoro Tech
            </h1>

            <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 md:text-left md:text-sm">
              Future Digital Solutions
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-3 text-[11px] font-medium text-gray-300 md:gap-8 md:text-sm">
            <a href="#home" className="rounded-xl border border-gray-700 px-3 py-2 hover:text-cyan-400">
              Home
            </a>

            <a href="#services" className="rounded-xl border border-gray-700 px-3 py-2 hover:text-cyan-400">
              Services
            </a>

            <a href="#projects" className="rounded-xl border border-gray-700 px-3 py-2 hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="rounded-xl border border-gray-700 px-3 py-2 hover:text-cyan-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center md:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-cyan-400 md:text-sm">
            Building Future Digital Solutions
          </p>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-7xl">
            Modern Websites
            <br />
            For Modern Businesses
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-400 md:text-xl">
            Zyvoro Tech helps startups, brands, and businesses grow online
            with premium websites, digital solutions, SEO optimization, and
            powerful business branding.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918527169719"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black hover:scale-105"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-4xl font-bold">Our Services</h3>

          <p className="mx-auto max-w-2xl text-gray-400">
            Professional digital services designed to help your business grow online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-gray-900 p-8 hover:border-cyan-400"
            >
              <h4 className="mb-4 text-2xl font-semibold text-cyan-400">
                {service.title}
              </h4>

              <p className="leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-6 text-5xl font-bold">
            Let’s Build Your Website
          </h3>

          <p className="mb-10 text-lg text-gray-300">
            Ready to grow your business online? Visit www.zyvorotech.com or contact Zyvoro Tech today.
          </p>

          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <a
              href="mailto:contact@zyvorotech.com"
              className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black hover:scale-105"
            >
              contact@zyvorotech.com
            </a>

            <a
              href="tel:+918527169719"
              className="rounded-2xl border border-gray-700 px-8 py-4 hover:border-cyan-400 hover:text-cyan-400"
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
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-2xl hover:scale-110"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        © 2026 Zyvoro Tech. All Rights Reserved.
      </footer>
    </div>
  );
}
