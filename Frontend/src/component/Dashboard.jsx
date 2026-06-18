import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ ships }) => {
  const totalShips = ships.length;

 const activeShips = ships.filter(
  (ship) =>
    ship.status?.trim().toLowerCase() === "active"
).length;

const inactiveShips = ships.filter(
  (ship) =>
    ship.status?.trim().toLowerCase() === "inactive"
).length;

  const data = [
    {
      name: "Active",
      value: activeShips,
    },
    {
      name: "Inactive",
      value: inactiveShips,
    },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-white mb-8">
        Dashboard
      </h1>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-slate-400">
            Total Ships
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-2">
            {totalShips}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-slate-400">
            Active Ships
          </h2>

          <p className="text-4xl font-bold text-green-400 mt-2">
            {activeShips}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-slate-400">
            Inactive Ships
          </h2>

          <p className="text-4xl font-bold text-red-400 mt-2">
            {inactiveShips}
          </p>
        </div>

      </div>

      {/* Chart */}

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-2xl text-white font-bold mb-4">
          Fleet Status Chart
        </h2>

        <div className="h-[350px]">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={120}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;