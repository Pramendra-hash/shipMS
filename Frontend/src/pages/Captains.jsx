import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

const Captains = () => {
  const [captains, setCaptains] = useState([]);
  const [ships, setShips] = useState([]);

  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [experience, setExperience] = useState("");
  const [assignedShip, setAssignedShip] = useState("");
  const [editingCaptain, setEditingCaptain] = useState(null);

  // Fetch Captains
 // Fetch Captains
const fetchCaptains = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/captains"
    );

    const data = await response.json();

    setCaptains(data);
  } catch (error) {
    console.log(error);
  }
};

// Fetch Ships
const fetchShips = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/ships"
    );

    const data = await response.json();

    setShips(data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
  fetchCaptains();
  fetchShips();
}, []);

  // Add Captain
  const addCaptain = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "http://localhost:4000/api/captains",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            rank,
            experience,
            assignedShip,
          }),
        }
      );

      alert("Captain Added Successfully");

      setName("");
      setRank("");
      setExperience("");
      setAssignedShip("");

      fetchCaptains();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Captain
  const deleteCaptain = async (id) => {
    try {
      await fetch(
        `http://localhost:4000/api/captains/${id}`,
        {
          method: "DELETE",
        }
      );

      alert("Captain Deleted");

      fetchCaptains();
    } catch (error) {
      console.log(error);
    }
  };
  //update captain
  const updateCaptain = async (e) => {
  e.preventDefault();

  try {
    await fetch(
      `http://localhost:4000/api/captains/${editingCaptain._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          rank,
          experience,
          assignedShip,
        }),
      }
    );

    alert("Captain Updated Successfully");

    setEditingCaptain(null);

    setName("");
    setRank("");
    setExperience("");
    setAssignedShip("");

    fetchCaptains();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 px-6 py-10">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-white mb-10">
            👨‍✈️ Captains Management
          </h1>

          {/* Add Captain Form */}

          <form
             onSubmit={
                  editingCaptain
      ? updateCaptain
      : addCaptain
  }
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-10"
          >
            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Captain Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="p-3 rounded-lg bg-slate-800 text-white"
                required
              />

              <input
                type="text"
                placeholder="Rank"
                value={rank}
                onChange={(e) =>
                  setRank(e.target.value)
                }
                className="p-3 rounded-lg bg-slate-800 text-white"
                required
              />

              <input
                type="number"
                placeholder="Experience (Years)"
                value={experience}
                onChange={(e) =>
                  setExperience(e.target.value)
                }
                className="p-3 rounded-lg bg-slate-800 text-white"
                required
              />

              <select
  value={assignedShip}
  onChange={(e) =>
    setAssignedShip(e.target.value)
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
  required
>
  <option value="">
    Select Ship
  </option>

  {ships.map((ship) => (
    <option
      key={ship._id}
      value={ship.shipName}
    >
      {ship.shipName}
    </option>
  ))}
</select>

            </div>

           <button
  type="submit"
  className="mt-5 bg-cyan-500 px-6 py-3 rounded-lg text-white font-semibold"
>
  {editingCaptain
    ? "Update Captain"
    : "Add Captain"}
</button>

          </form>

          {/* Captains List */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {captains.map((captain) => (
              <div
                key={captain._id}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
              >
                <h2 className="text-2xl font-bold text-cyan-400">
                  {captain.name}
                </h2>

                <p className="text-white mt-2">
                  Rank: {captain.rank}
                </p>

                <p className="text-white">
                  Experience: {captain.experience} Years
                </p>

                <p className="text-green-400 mt-2">
                  Ship: {captain.assignedShip}
                </p>
             <div className="flex gap-3 mt-4">

  <button
    onClick={() => {
      setEditingCaptain(captain);

      setName(captain.name);
      setRank(captain.rank);
      setExperience(captain.experience);
      setAssignedShip(captain.assignedShip);
    }}
    className="flex-1 bg-yellow-500 text-white py-2 rounded-lg"
  >
    Edit
  </button>

  <button
    onClick={() =>
      deleteCaptain(captain._id)
    }
    className="flex-1 bg-red-500 text-white py-2 rounded-lg"
  >
    Delete
  </button>

</div>
                
            

              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default Captains;