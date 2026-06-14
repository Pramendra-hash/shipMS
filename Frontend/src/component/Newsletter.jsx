function Newsletter() {
  return (
    <section className="bg-cyan-600 py-16">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-white">
          Subscribe For Updates
        </h2>

        <p className="mt-4 text-white">
          Get latest maritime news and fleet updates.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter Email"
            className="px-4 py-3 rounded-lg text-black w-full md:w-96"
          />

          <button className="bg-slate-900 text-white px-6 py-3 rounded-lg">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;