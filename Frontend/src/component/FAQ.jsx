function FAQ() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-cyan-400 font-semibold">
              How many ships can be managed?
            </h3>
            <p className="text-slate-300 mt-2">
              Unlimited ships can be managed using the platform.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-cyan-400 font-semibold">
              Is cargo tracking available?
            </h3>
            <p className="text-slate-300 mt-2">
              Yes, cargo tracking is available in real-time.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-cyan-400 font-semibold">
              Is maintenance monitoring supported?
            </h3>
            <p className="text-slate-300 mt-2">
              Yes, ship maintenance records can be monitored.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;