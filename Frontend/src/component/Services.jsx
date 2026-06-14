function Services() {
  const services = [
    {
      icon: "🚢",
      title: "Fleet Management",
      description: "Manage and monitor all ships from one dashboard."
    },
    {
      icon: "📦",
      title: "Cargo Tracking",
      description: "Track cargo movement in real time."
    },
    {
      icon: "⚓",
      title: "Port Operations",
      description: "Monitor arrivals, departures and schedules."
    },
    {
      icon: "🔧",
      title: "Maintenance",
      description: "Track ship maintenance and service records."
    },
    {
      icon: "📡",
      title: "Live Monitoring",
      description: "24/7 fleet monitoring and analytics."
    },
    {
      icon: "🌍",
      title: "Global Routes",
      description: "Manage international shipping routes."
    }
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Our Services
          </h2>

          <p className="mt-3 text-slate-400">
            Complete maritime management solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;