function CaptainSection() {
  const captains = [
    {
      id: 1,
      name: "Edward Smith",
      ship: "Titanic",
      experience: "15 Years",
      rank: "Senior Captain",
    },
    {
      id: 2,
      name: "John Miller",
      ship: "Ocean Queen",
      experience: "12 Years",
      rank: "Captain",
    },
    {
      id: 3,
      name: "David Wilson",
      ship: "Sea Explorer",
      experience: "10 Years",
      rank: "Captain",
    },
    {
      id: 4,
      name: "Robert Brown",
      ship: "Blue Horizon",
      experience: "18 Years",
      rank: "Chief Captain",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Captain Management
          </h2>

          <p className="mt-3 text-slate-400">
            Experienced leaders managing global maritime operations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {captains.map((captain) => (
            <div
              key={captain.id}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-3xl">
                👨‍✈️
              </div>

              <h3 className="text-xl font-bold text-white text-center mt-4">
                {captain.name}
              </h3>

              <p className="text-cyan-400 text-center mt-1">
                {captain.rank}
              </p>

              <div className="mt-4 space-y-2 text-slate-300">
                <p>
                  🚢 <span className="font-medium">Ship:</span>{" "}
                  {captain.ship}
                </p>

                <p>
                  ⭐ <span className="font-medium">Experience:</span>{" "}
                  {captain.experience}
                </p>
              </div>

              <button className="w-full mt-5 bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold">
                View Profile
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CaptainSection;