import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../../api/axios";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get(`/users/${userData._id}`); 
        if (data.success) {
          setProfile({
            _id: data.user._id,
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Failed to load profile data");
      }
    };
    fetchUser();
  }, []);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await api.post(`/users/${profile._id}`, {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
      });

      if (data.success) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!password.currentPassword || !password.newPassword || !password.confirmPassword) {
      return toast.error("Please fill all password fields");
    }

    if (password.newPassword !== password.confirmPassword) {
      return toast.error("New passwords do not match");
    }

    setLoading(true);
    try {
      const { data } = await api.post(`/users/update-password/${profile._id}`, {
        currentPassword: password.currentPassword,
        newPassword: password.newPassword, 
      });

      if (data.success) {
        toast.success("Password changed successfully");
        setPassword({ currentPassword: "", newPassword: "", confirmPassword: "" });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">My Account</h2>

        <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 font-semibold flex items-center gap-2 transition ${
              activeTab === "profile"
                ? "text-[#ff5a5a] border-b-2 border-[#ff5a5a]"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <FaUser /> Edit Profile
          </button>

          <button
            onClick={() => setActiveTab("password")}
            className={`pb-3 font-semibold flex items-center gap-2 transition ${
              activeTab === "password"
                ? "text-[#ff5a5a] border-b-2 border-[#ff5a5a]"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <FaLock /> Change Password
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          {activeTab === "profile" && (
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-[30%] font-medium">Name:</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border bg-transparent outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[30%] font-medium">Email:</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border bg-transparent outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[30%] font-medium">Phone:</span>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border bg-transparent outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700"
                />
              </div>
              <button
                disabled={loading}
                className="w-full bg-[#ff5a5a] text-white py-3 rounded-md font-semibold transition hover:bg-[#f31919] disabled:opacity-50"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </form>
          )}

          {activeTab === "password" && (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-[30%] font-medium">Current Password:</span>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={password.currentPassword}
                  onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border bg-transparent outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[30%] font-medium">New Password:</span>
                <input
                  type="password"
                  placeholder="New Password"
                  value={password.newPassword}
                  onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border bg-transparent outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[30%] font-medium">Confirm Password:</span>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={password.confirmPassword}
                  onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border bg-transparent outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700"
                />
              </div>
              <button
                disabled={loading}
                className="w-full bg-[#ff5a5a] text-white py-3 rounded-md font-semibold transition hover:bg-[#f31919] disabled:opacity-50"
              >
                {loading ? "Processing..." : "Change Password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;