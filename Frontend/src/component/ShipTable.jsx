function ShipTable() {
  const ships = [
    {
      id: 1,
      name: "Titanic",
      captain: "Edward Smith",
      destination: "New York",
      status: "Active",
    },
    {
      id: 2,
      name: "Ocean Queen",
      captain: "John Miller",
      destination: "Singapore",
      status: "Docked",
    },
    {
      id: 3,
      name: "Sea Explorer",
      captain: "David Wilson",
      destination: "Dubai",
      status: "Maintenance",
    },
    {
      id: 4,
      name: "Blue Horizon",
      captain: "Robert Brown",
      destination: "Mumbai",
      status: "Active",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Fleet Records
          </h2>

          <p className="mt-3 text-slate-400">
            Monitor all ships in one place
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-700">
          <table className="w-full">

            <thead className="bg-slate-800">
              <tr>
                <th className="p-4 text-left text-white">ID</th>
                <th className="p-4 text-left text-white">Ship</th>
                <th className="p-4 text-left text-white">Captain</th>
                <th className="p-4 text-left text-white">Destination</th>
                <th className="p-4 text-left text-white">Status</th>
              </tr>
            </thead>

            <tbody>
              {ships.map((ship) => (
                <tr
                  key={ship.id}
                  className="border-t border-slate-700 hover:bg-slate-800"
                >
                  <td className="p-4 text-slate-300">{ship.id}</td>
                  <td className="p-4 text-slate-300">{ship.name}</td>
                  <td className="p-4 text-slate-300">{ship.captain}</td>
                  <td className="p-4 text-slate-300">{ship.destination}</td>

                  <td className="p-4">
                    <span className="rounded-full bg-cyan-900 px-3 py-1 text-cyan-300 text-sm">
                      {ship.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}

export default ShipTable;