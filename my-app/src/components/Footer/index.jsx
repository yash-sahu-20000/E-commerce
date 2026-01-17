import {
  FaTruck,
  FaUndo,
  FaLock,
  FaGift,
  FaHeadset,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between text-center gap-8">
        {[
          { icon: FaTruck, title: "Free Shipping", desc: "For all Orders Over $100" },
          { icon: FaUndo, title: "30 Days Returns", desc: "For an Exchange Product" },
          { icon: FaLock, title: "Secured Payment", desc: "Payment Cards Accepted" },
          { icon: FaGift, title: "Special Gifts", desc: "Our First Product Order" },
          { icon: FaHeadset, title: "Support 24/7", desc: "Contact Us Anytime" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 min-w-[150px]"
          >
            <item.icon className="text-3xl mb-3 text-gray-800 dark:text-white" />
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700" />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap gap-10">
        
        <div className="flex-1 min-w-[220px]">
          <h3 className="font-semibold text-lg mb-4">Contact us</h3>
          <p>Classyshop - Mega Super Store</p>
          <p>507-Union Trade Centre France</p>
          <p className="mt-3">yash@yashsahucompany.com</p>
          <p className="mt-2 text-red-500 font-bold text-lg">
            (+91) 9876543312
          </p>

          <div className="mt-4 font-semibold text-red-500">
            Online Chat
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get Expert Help
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[180px]">
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-lg mb-4">Our company</h3>
          <ul className="space-y-2">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & conditions</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[260px]">
          <h3 className="font-semibold text-lg mb-4">
            Subscribe to newsletter
          </h3>
          <p className="mb-4 text-sm">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 border rounded-md mb-3 dark:bg-gray-800 dark:border-gray-700"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
            SUBSCRIBE
          </button>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>
              I agree to the terms and conditions and the privacy policy
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-between items-center gap-4">
        
        <div className="flex gap-4 text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaPinterestP />
          <FaInstagram />
        </div>

        <div className="flex gap-3 text-sm">
          <span>VISA</span>
          <span>MasterCard</span>
          <span>Amex</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
}
