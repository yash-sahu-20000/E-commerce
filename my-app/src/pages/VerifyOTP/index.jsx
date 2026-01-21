import { useState } from "react";
import toast from "react-hot-toast";


function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otp) {
        toast.error("Please enter OTP");
      return;
    }
    console.log("OTP Data:", { otp });
  };

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white min-h-screen">
      <div className="flex items-center justify-center p-4 ">
        <div className="w-full bg-white dark:bg-gray-800 max-w-md rounded-xl shadow-md p-8">
          
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="OTP Verification"
              className="w-24 h-24 object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-center mb-3">
            OTP Verification
          </h2>

          <span className="text-sm text-gray-500 text-center block mb-6">
            Please enter the OTP sent to your email
          </span>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className="
                  w-full px-4 py-3 border rounded-md bg-transparent text-center tracking-widest
                  outline-none focus:ring-1 focus:ring-gray-400
                "
              />
            </div>

            <button
              className="
                w-full bg-[#ff5a5a] text-white font-semibold
                py-3 rounded-md transition
                hover:bg-[#f31919]
              "
            >
              VERIFY OTP
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
