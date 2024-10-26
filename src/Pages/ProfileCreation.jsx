import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileCreation = () => {
  const [username, setUsername] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const profileData = {
      username,
      currentActivity,
      location,
      course,
    };

    
    console.log(profileData);

   
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Create Your Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Current Activity in Data Science
          </label>
          <input
            type="text"
            value={currentActivity}
            onChange={(e) => setCurrentActivity(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Current Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Course You're Doing</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileCreation;
