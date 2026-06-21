import React, { useState } from "react";

const AddShip = () => {
  const [shipName, setShipName] = useState("");
  const [captain, setCaptain] = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://shipms.onrender.com/api/ships",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipName,
          captain,
          destination,
          status,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    alert("Ship Added Successfully");

    setShipName("");
    setCaptain("");
    setDestination("");
    setStatus("");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        Add New Ship
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
       <input
  type="text"
  placeholder="Ship Name"
  value={shipName}
  onChange={(e) => setShipName(e.target.value)}
  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
/>

        <input
          type="text"
          placeholder="Captain Name"
          value={captain}
          onChange={(e) => setCaptain(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
        />

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
        />

        <button
          type="submit"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg"
        >
          Add Ship
        </button>
      </form>
    </div>
  );
};

export default AddShip;