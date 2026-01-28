import React, { useState } from "react";
import { FaQuestionCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

export default function HelpContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const faqs = [
    { q: "How can I track my order?", a: "You can track your order in the 'My Orders' section of your profile once it has been shipped." },
    { q: "What is the return policy?", a: "We offer a 7-day return policy on all unworn items with original tags attached." },
    { q: "How do I change my shipping address?", a: "Addresses can be changed within 2 hours of placing an order by contacting support." },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4 dark:text-white">How can we help?</h1>
          <p className="text-gray-500 dark:text-gray-400">Everything you need to know about our products and services.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
                <FaQuestionCircle className="text-red-500" /> Quick Support
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white dark:bg-gray-800 p-4 rounded-2xl border dark:border-gray-700 cursor-pointer">
                    <summary className="font-bold text-sm list-none dark:text-gray-200">{faq.q}</summary>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-red-500 rounded-3xl p-8 text-white shadow-xl shadow-red-200 dark:shadow-none">
              <h3 className="font-bold text-lg mb-4">Direct Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3"><FaEnvelope /> support@urbancart.com</div>
                <div className="flex items-center gap-3"><FaPhone /> +91 98765 43210</div>
                <div className="flex items-center gap-3"><FaMapMarkerAlt /> Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="5" required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10 py-4 bg-red-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}