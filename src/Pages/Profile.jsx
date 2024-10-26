//import React from "react";
import { useNavigate } from "react-router-dom";
import profilePicture from "../assets/al1.jpg";

const ProfilePage = () => {
  const navigate = useNavigate();

  const hasProfile = false; // This where i ran into the problem @Simon juma
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {hasProfile ? (
        <>
          <div className="flex items-center mb-6">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-800">Simon Juma</h1>
              <p className="text-gray-600">Data Scientist</p>
              <p className="text-gray-500">Location: Nairobi, Kenya</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                Follow
              </button>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Activity Feed
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-700">Posted a new article</h3>
              <p className="text-gray-600">
                "Understanding Machine Learning Basics"
              </p>
              <p className="text-gray-500 text-sm">October 24, 2024</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-700">
                Commented on a discussion
              </h3>
              <p className="text-gray-600">
                "Great insights on AI applications!"
              </p>
              <p className="text-gray-500 text-sm">October 23, 2024</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-700">Shared a resource</h3>
              <p className="text-gray-600">
                "A guide to Python for Data Science"
              </p>
              <p className="text-gray-500 text-sm">October 22, 2024</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            No Profile Found
          </h2>
          <p className="text-gray-600 mb-4">
            Click the button below to create your profile.
          </p>
          <button
            onClick={() => navigate("/create-profile")} // Navigate to the profile creation page
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Create Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
