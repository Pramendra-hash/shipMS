import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

const Ships = () => {
  const [ships, setShips] = useState([]);

  const [editingShip, setEditingShip] = useState(null);

  const [shipName, setShipName] = useState("");
  const [captain, setCaptain] = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus] = useState("");

  console.log("Ships State:", ships);
  console.log("Ships Length:", ships.length);

  // Fetch Ships
  const fetchShips = async () => {
    try {
      const response = await fetch(
        "https://shipms.onrender.com/api/ships"
      );

      console.log("Response Status:", response.status);

      const data = await response.json();

      console.log("API Response:", data);

      setShips(data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  // Delete Ship
  const deleteShip = async (id) => {
    try {
      await fetch(
        `https://shipms.onrender.com/api/ships/${id}`,
        {
          method: "DELETE",
        }
      );

      alert("Ship Deleted Successfully");

      fetchShips();
    } catch (error) {
      console.log(error);
    }
  };

  // Open Edit Form
  const handleEdit = (ship) => {
    setEditingShip(ship);

    setShipName(ship.shipName);
    setCaptain(ship.captain);
    setDestination(ship.destination);
    setStatus(ship.status);
  };

  // Update Ship
  const updateShip = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        `https://shipms.onrender.com/api/ships/${editingShip._id}`,
        {
          method: "PUT",
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

      alert("Ship Updated Successfully");

      setEditingShip(null);

      fetchShips();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Dashboard ships={ships} />
      <h1 className="text-4xl font-bold text-white mb-4">
        Fleet Management
      </h1>

      {/* Edit Form */}
      {editingShip && (
        <div className="bg-slate-900 p-6 rounded-2xl mb-8 border border-slate-700">
          <h2 className="text-2xl text-white font-bold mb-4">
            Edit Ship
          </h2>

          <form
            onSubmit={updateShip}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              value={shipName}
              onChange={(e) =>
                setShipName(e.target.value)
              }
              className="p-3 rounded-lg bg-slate-800 text-white"
              placeholder="Ship Name"
            />

            <input
              type="text"
              value={captain}
              onChange={(e) =>
                setCaptain(e.target.value)
              }
              className="p-3 rounded-lg bg-slate-800 text-white"
              placeholder="Captain"
            />

            <input
              type="text"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
              className="p-3 rounded-lg bg-slate-800 text-white"
              placeholder="Destination"
            />

            <input
              type="text"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="p-3 rounded-lg bg-slate-800 text-white"
              placeholder="Status"
            />

            <button
              type="submit"
              className="bg-green-500 text-white py-3 rounded-lg"
            >
              Update Ship
            </button>

            <button
              type="button"
              onClick={() => setEditingShip(null)}
              className="bg-red-500 text-white py-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Ships List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ships.map((ship) => (
          <div
            key={ship._id}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
          >
            <h2 className="text-2xl font-bold text-cyan-400">
              {ship.shipName}
            </h2>

            <p className="text-white mt-2">
              Captain: {ship.captain}
            </p>

            <p className="text-white">
              Destination: {ship.destination}
            </p>

            <p className="text-green-400 mt-2">
              {ship.status}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleEdit(ship)}
                className="flex-1 bg-yellow-500 text-white py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteShip(ship._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ships;