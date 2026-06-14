function FleetStats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Fleet Statistics
          </h2>

          <p className="mt-3 text-slate-400">
            Real-time fleet monitoring dashboard
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
            <div className="text-5xl">🚢</div>
            <h3 className="mt-4 text-3xl font-bold text-cyan-400">
              500+
            </h3>
            <p className="mt-2 text-slate-400">
              Total Ships
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
            <div className="text-5xl">⚓</div>
            <h3 className="mt-4 text-3xl font-bold text-cyan-400">
              120+
            </h3>
            <p className="mt-2 text-slate-400">
              Active Ports
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
            <div className="text-5xl">📦</div>
            <h3 className="mt-4 text-3xl font-bold text-cyan-400">
              98%
            </h3>
            <p className="mt-2 text-slate-400">
              Cargo Delivered
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
            <div className="text-5xl">📡</div>
            <h3 className="mt-4 text-3xl font-bold text-cyan-400">
              24/7
            </h3>
            <p className="mt-2 text-slate-400">
              Monitoring
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FleetStats;