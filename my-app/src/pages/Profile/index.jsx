import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    if (!profile.name || !profile.email || !profile.phone) {
      toast.error("Please fill all profile fields");
      return;
    }

    toast.success("Profile updated successfully");
    console.log("Profile Data:", profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (
      !password.currentPassword ||
      !password.newPassword ||
      !password.confirmPassword
    ) {
      toast.error("Please fill all password fields");
      return;
    }

    if (password.newPassword !== password.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password changed successfully");
    console.log("Password Data:", password);
  };

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">My Account</h2>

        <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 font-semibold flex items-center gap-2 transition
              ${
                activeTab === "profile"
                  ? "text-[#ff5a5a] border-b-2 border-[#ff5a5a]"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }
            `}
          >
            <FaUser />
            Edit Profile
          </button>

          <button
            onClick={() => setActiveTab("password")}
            className={`pb-3 font-semibold flex items-center gap-2 transition
              ${
                activeTab === "password"
                  ? "text-[#ff5a5a] border-b-2 border-[#ff5a5a]"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }
            `}
          >
            <FaLock />
            Change Password
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          {activeTab === "profile" && (
            <form
              onSubmit={handleProfileSubmit}
              className="w-[100%] space-y-4"
            >
            <div className="flex items-center justify-between gap-4">
                <span className="flex items-center justify-center w-[30%]">Name:</span>
              <input
                type="text"
                placeholder="Full Name"
                value={profile.name}
                onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                }
                className="
                w-full px-4 py-3 rounded-md border
                bg-transparent outline-none
                focus:ring-1 focus:ring-gray-400
                dark:border-gray-700
                "
                />
                </div>
            <div className="flex items-center justify-between gap-4">
                <span className="flex items-center justify-center w-[30%]">Email:</span>
              <input
                type="email"
                placeholder="Email Address"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="
                  w-full px-4 py-3 rounded-md border
                  bg-transparent outline-none
                  focus:ring-1 focus:ring-gray-400
                  dark:border-gray-700
                "
              />
            </div>
            <div className="flex items-center justify-between gap-4">
                <span className="flex items-center justify-center w-[30%]">Phone:</span>
              <input
                type="text"
                placeholder="Phone Number"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="
                  w-full px-4 py-3 rounded-md border
                  bg-transparent outline-none
                  focus:ring-1 focus:ring-gray-400
                  dark:border-gray-700
                "
              />
            </div>
              <button
                className="
                  w-full bg-[#ff5a5a] text-white
                  py-3 rounded-md font-semibold
                  transition hover:bg-[#f31919]
                "
              >
                Save Changes
              </button>
            </form>
          )}

          {activeTab === "password" && (
            <form
              onSubmit={handlePasswordSubmit}
              className="w-[100%] space-y-4"
            >
            <div className="flex items-center justify-between gap-4">
                <span className="flex items-center justify-center w-[30%]">Current Password:</span>
              <input
                type="password"
                placeholder="Current Password"
                value={password.currentPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    currentPassword: e.target.value,
                  })
                }
                className="
                  w-full px-4 py-3 rounded-md border
                  bg-transparent outline-none
                  focus:ring-1 focus:ring-gray-400
                  dark:border-gray-700
                "
              />
            </div>
            <div className="flex items-center justify-between gap-4">
                <span className="flex items-center justify-center w-[30%]">New Password:</span>
              <input
                type="password"
                placeholder="New Password"
                value={password.newPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    newPassword: e.target.value,
                  })
                }
                className="
                  w-full px-4 py-3 rounded-md border
                  bg-transparent outline-none
                  focus:ring-1 focus:ring-gray-400
                  dark:border-gray-700
                "
              />
            </div>
            <div className="flex items-center justify-between gap-4">
                <span className="flex items-center justify-center w-[30%]">Confirm Password:</span>
              <input
                type="password"
                placeholder="Confirm New Password"
                value={password.confirmPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    confirmPassword: e.target.value,
                  })
                }
                className="
                  w-full px-4 py-3 rounded-md border
                  bg-transparent outline-none
                  focus:ring-1 focus:ring-gray-400
                  dark:border-gray-700
                "
              />
            </div>
              <button
                className="
                  w-full bg-[#ff5a5a] text-white
                  py-3 rounded-md font-semibold
                  transition hover:bg-[#f31919]
                "
              >
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
