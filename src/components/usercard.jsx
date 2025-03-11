// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "Rohit";
  const email = "rohit@example.com";
  const phone = "+1 0993498394";
  const address = "123 Main St, india";

  return (
    <div className="border rounded-lg shadow-lg p-4 w-80 bg-white">
      <img src={profilePhoto} alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-2">{name}</h2>
      <p className="text-center text-gray-600">{email}</p>
      <p className="text-center text-gray-600">{phone}</p>
      <p className="text-center text-gray-600">{address}</p>
    </div>
  );
};

export default Usercard;
