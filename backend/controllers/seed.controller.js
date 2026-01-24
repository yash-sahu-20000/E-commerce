import Product from "../models/Product.js";

const Products = [
  {
    "title": "iPhone 15 Pro",
    "description": "The iPhone 15 Pro delivers elite performance with Apple’s A17 Pro chip and a premium titanium build. It features an advanced camera system for stunning photos and videos, a bright Super Retina XDR display, long-lasting battery life, and smooth iOS performance designed for power users.",
    "price": 129999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 8,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Samsung Galaxy S24",
    "description": "Samsung Galaxy S24 offers a powerful Android experience with a vivid AMOLED display and flagship performance. Its AI-enhanced camera captures sharp photos in all lighting conditions, while the optimized battery ensures all-day usage. Designed for speed, productivity, and immersive entertainment.",
    "price": 89999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 12,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "MacBook Air M2",
    "description": "MacBook Air M2 combines powerful performance with ultra-portable design. Powered by Apple’s M2 chip, it delivers fast multitasking, excellent battery life, a stunning Retina display, and silent operation. Perfect for students, professionals, and creators who need reliable everyday performance.",
    "price": 114999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 6,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Sony Noise Cancelling Headphones",
    "description": "Sony noise cancelling headphones deliver immersive sound with industry-leading noise reduction. Designed for comfort and clarity, they offer deep bass, crisp vocals, long battery life, and seamless wireless connectivity—perfect for music lovers, travelers, and focused work sessions.",
    "price": 19999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 15,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Smart LED TV",
    "description": "This Smart LED TV provides a stunning viewing experience with vibrant colors and sharp clarity. Built-in smart features allow easy access to streaming apps, while powerful speakers enhance audio quality. Ideal for entertainment, gaming, and family movie nights.",
    "price": 45999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 9,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Men Cotton T-Shirt",
    "description": "This men’s cotton t-shirt is crafted from soft, breathable fabric for all-day comfort. Its classic fit and durable stitching make it suitable for casual wear, workouts, or layering. Easy to maintain and stylish, it’s a versatile wardrobe essential.",
    "price": 799,
    "category": "69738530e9806fd18686d8c3",
    "stock": 50,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Women Denim Jeans",
    "description": "These women’s denim jeans feature a modern slim fit with stretchable fabric for superior comfort. Designed for everyday wear, they offer durability, flexibility, and a flattering silhouette. Perfect for casual outings or pairing with both traditional and western tops.",
    "price": 1999,
    "category": "69738530e9806fd18686d8c3",
    "stock": 30,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Running Shoes",
    "description": "Lightweight running shoes designed for comfort and performance. Featuring cushioned soles, breathable mesh fabric, and excellent grip, they reduce impact and improve stability. Ideal for jogging, workouts, and daily activities requiring long-lasting comfort and support.",
    "price": 3499,
    "category": "69738530e9806fd18686d8c3",
    "stock": 20,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Leather Wallet",
    "description": "This premium leather wallet combines style with functionality. Crafted from high-quality leather, it offers multiple card slots, secure cash storage, and a slim profile. Durable and elegant, it’s perfect for everyday use and makes a great gifting option.",
    "price": 1299,
    "category": "69738530e9806fd18686d8c3",
    "stock": 40,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Women Handbag",
    "description": "A stylish women’s handbag designed to complement both casual and formal outfits. Spacious compartments allow easy organization of essentials, while the durable material ensures long-term use. A perfect blend of elegance, practicality, and everyday convenience.",
    "price": 2499,
    "category": "69738530e9806fd18686d8c3",
    "stock": 22,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Car Tyre",
    "description": "High-quality all-season car tyre engineered for superior grip and durability. It offers excellent road stability, reduced noise, and improved fuel efficiency. Designed to perform well in varied weather conditions, ensuring safety and comfort on every drive.",
    "price": 5999,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 18,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Bike Helmet",
    "description": "This ISI-certified bike helmet provides reliable protection with a strong outer shell and cushioned inner padding. Designed for comfort and airflow, it ensures safety during daily commutes and long rides, making it an essential accessory for every rider.",
    "price": 2499,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 25,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Car Vacuum Cleaner",
    "description": "A compact and powerful car vacuum cleaner designed for effortless interior cleaning. It easily removes dust, food crumbs, and debris from tight spaces. Lightweight and portable, it’s ideal for maintaining a clean and fresh car environment.",
    "price": 3499,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 10,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Car Phone Holder",
    "description": "This car phone holder offers secure grip and hands-free convenience while driving. Easily adjustable and compatible with most smartphones, it ensures safe navigation access without distractions. Designed for durability, it enhances driving comfort and road safety.",
    "price": 999,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 35,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Wooden Dining Table",
    "description": "A solid wooden dining table crafted for durability and elegance. Designed to seat six people comfortably, it adds warmth and style to your dining space. Perfect for family meals, gatherings, and long-term everyday use.",
    "price": 28999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 4,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Office Chair",
    "description": "Ergonomic office chair designed for long working hours. Features adjustable height, lumbar support, and breathable cushioning to reduce back strain. Ideal for home offices and professional setups, offering comfort, durability, and improved posture.",
    "price": 8999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 12,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Sofa Set",
    "description": "This comfortable sofa set combines modern design with plush seating. Built with strong materials and soft cushioning, it offers excellent support for relaxation. Perfect for living rooms, it enhances both comfort and aesthetic appeal.",
    "price": 45999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 3,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Bookshelf",
    "description": "A stylish wooden bookshelf designed to organize books and decor efficiently. Its sturdy construction ensures durability, while the compact design fits well in bedrooms, offices, or study rooms. Perfect for keeping your space neat and organized.",
    "price": 5999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 14,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Face Moisturizer",
    "description": "This face moisturizer deeply hydrates and nourishes the skin, leaving it soft and refreshed. Enriched with natural ingredients, it helps improve skin texture, prevent dryness, and maintain a healthy glow suitable for daily skincare routines.",
    "price": 499,
    "category": "69738639e9806fd18686d8d3",
    "stock": 60,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Lipstick",
    "description": "Long-lasting lipstick with rich pigmentation and smooth application. Designed to keep lips moisturized while delivering vibrant color, it’s suitable for daily wear and special occasions, enhancing your look with confidence and elegance.",
    "price": 699,
    "category": "69738639e9806fd18686d8d3",
    "stock": 45,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Hair Shampoo",
    "description": "This nourishing shampoo gently cleanses hair while strengthening roots. Formulated to reduce dryness and damage, it leaves hair smooth, shiny, and manageable. Suitable for regular use and all hair types.",
    "price": 349,
    "category": "69738639e9806fd18686d8d3",
    "stock": 70,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Basmati Rice",
    "description": "Premium quality basmati rice known for its long grains and aromatic fragrance. Ideal for daily meals and special dishes, it cooks fluffy and flavorful, making it a staple choice for healthy and delicious home-cooked food.",
    "price": 899,
    "category": "69738608e9806fd18686d8cf",
    "stock": 100,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Organic Cooking Oil",
    "description": "This organic cooking oil is extracted using natural methods to retain nutrients and flavor. Suitable for everyday cooking, it promotes healthier meals while enhancing taste. A perfect addition to a balanced and nutritious kitchen.",
    "price": 599,
    "category": "69738608e9806fd18686d8cf",
    "stock": 80,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Dry Fruits Mix",
    "description": "A nutritious mix of premium dry fruits packed with essential vitamins and minerals. Ideal for snacking or adding to meals, it supports energy, immunity, and overall health while offering great taste and freshness.",
    "price": 799,
    "category": "69738608e9806fd18686d8cf",
    "stock": 55,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker delivering powerful sound with deep bass and clear vocals. Designed for indoor and outdoor use, it offers long battery life, quick connectivity, and a compact build. Perfect for parties, travel, and everyday music enjoyment.",
    "price": 3999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 25,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Wireless Mouse",
    "description": "Ergonomic wireless mouse designed for smooth and precise control. It offers responsive tracking, silent clicks, and long battery life. Ideal for office work, studying, and everyday computer usage, ensuring comfort during extended working hours.",
    "price": 999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 40,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Mechanical Keyboard",
    "description": "High-performance mechanical keyboard built for speed and durability. Featuring tactile keys, customizable backlighting, and sturdy construction, it enhances typing and gaming experiences. Perfect for professionals, programmers, and gamers who value precision and comfort.",
    "price": 5499,
    "category": "69738585e9806fd18686d8c7",
    "stock": 18,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Smart Fitness Band",
    "description": "This smart fitness band tracks daily activity, heart rate, sleep patterns, and workouts. With a lightweight design and long battery life, it helps users stay active and monitor health easily throughout the day.",
    "price": 2499,
    "category": "69738585e9806fd18686d8c7",
    "stock": 35,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Laptop Backpack",
    "description": "Durable laptop backpack designed with padded compartments for device safety. It offers multiple storage pockets, water-resistant material, and comfortable shoulder straps. Ideal for office use, travel, and daily commuting with essential gear.",
    "price": 2999,
    "category": "69738585e9806fd18686d8c7",
    "stock": 22,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Casual Shirt",
    "description": "Men’s casual shirt made from breathable fabric for everyday comfort. Designed with a modern fit and stylish pattern, it suits office wear and casual outings. Easy to maintain and versatile for different occasions.",
    "price": 1499,
    "category": "69738530e9806fd18686d8c3",
    "stock": 45,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Women Kurti",
    "description": "Elegant women’s kurti crafted from soft fabric for all-day comfort. Featuring a stylish design and relaxed fit, it’s suitable for casual wear, festive occasions, and office use, offering a perfect balance of tradition and modern style.",
    "price": 1799,
    "category": "69738530e9806fd18686d8c3",
    "stock": 28,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Sports Jacket",
    "description": "Lightweight sports jacket designed for outdoor activities and workouts. It provides protection against wind and mild cold while allowing easy movement. Ideal for jogging, travel, and casual wear in changing weather conditions.",
    "price": 2599,
    "category": "69738530e9806fd18686d8c3",
    "stock": 20,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Sunglasses",
    "description": "Stylish sunglasses offering UV protection and comfortable fit. Designed to reduce glare and protect eyes from harmful rays, they enhance both fashion and functionality. Suitable for daily use, travel, and outdoor activities.",
    "price": 1299,
    "category": "69738530e9806fd18686d8c3",
    "stock": 50,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Formal Shoes",
    "description": "Classic formal shoes crafted from premium materials for a polished look. Designed for comfort and durability, they are perfect for office wear, meetings, and special occasions, adding elegance and confidence to your outfit.",
    "price": 3499,
    "category": "69738530e9806fd18686d8c3",
    "stock": 24,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Engine Oil",
    "description": "High-quality engine oil designed to improve engine performance and longevity. It reduces friction, enhances fuel efficiency, and ensures smooth operation. Suitable for regular vehicle maintenance and reliable performance across various driving conditions.",
    "price": 899,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 60,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Car Seat Cover",
    "description": "Premium car seat covers designed to protect seats from wear and stains. Crafted for comfort and durability, they enhance the interior look while providing easy installation and long-lasting use for daily driving.",
    "price": 4999,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 14,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Bike Gloves",
    "description": "Protective bike gloves designed for comfort and grip during rides. Featuring breathable material and padded palms, they reduce vibration and hand fatigue. Ideal for daily commuting, touring, and long-distance biking.",
    "price": 799,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 40,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Car Air Freshener",
    "description": "Long-lasting car air freshener that keeps your vehicle smelling fresh and pleasant. Designed to eliminate odors effectively, it enhances driving comfort and creates a refreshing environment for daily commutes and long journeys.",
    "price": 399,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 70,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Jump Starter Kit",
    "description": "Portable jump starter kit designed for emergency vehicle startups. Compact and powerful, it can recharge batteries quickly and safely. An essential 6973869ae9806fd18686d8d7 accessory for long trips and unexpected breakdown situations.",
    "price": 6999,
    "category": "6973869ae9806fd18686d8d7",
    "stock": 10,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Bedside Table",
    "description": "Compact bedside table designed for convenience and storage. Crafted from durable material, it offers space for essentials like lamps, books, and accessories. Perfect for bedrooms, adding both functionality and style.",
    "price": 4999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 16,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Wardrobe Cabinet",
    "description": "Spacious wardrobe cabinet designed for organized storage of clothes and accessories. Built with sturdy materials, it offers durability and a clean design that complements modern bedrooms while maximizing storage efficiency.",
    "price": 32999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 5,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Study Table",
    "description": "Modern study table designed for productivity and comfort. Featuring a spacious tabletop and strong build, it is suitable for studying, office work, and computer use. Ideal for home offices and student rooms.",
    "price": 7999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 18,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "TV Unit",
    "description": "Stylish TV unit designed to organize entertainment essentials. It provides space for media devices, storage compartments, and cable management, enhancing living room aesthetics while offering practical functionality.",
    "price": 15999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 7,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Recliner Chair",
    "description": "Comfortable recliner chair designed for ultimate relaxation. Featuring soft cushioning and adjustable reclining positions, it offers excellent support for long hours of rest, reading, or watching television at home.",
    "price": 24999,
    "category": "697385c4e9806fd18686d8cb",
    "stock": 6,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Face Cleanser",
    "description": "Gentle face cleanser that removes dirt, oil, and impurities without drying the skin. Suitable for daily use, it refreshes and cleanses deeply while maintaining natural moisture balance for healthy-looking skin.",
    "price": 349,
    "category": "69738639e9806fd18686d8d3",
    "stock": 80,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Sunscreen Lotion",
    "description": "Broad-spectrum sunscreen lotion providing protection against harmful UV rays. Lightweight and non-greasy, it helps prevent sun damage, tanning, and premature aging. Suitable for daily outdoor use on all skin types.",
    "price": 599,
    "category": "69738639e9806fd18686d8d3",
    "stock": 65,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Hair Serum",
    "description": "Nourishing hair serum designed to reduce frizz and add shine. Enriched with essential oils, it smoothens hair texture and improves manageability, making it ideal for daily hair care and styling routines.",
    "price": 499,
    "category": "69738639e9806fd18686d8d3",
    "stock": 55,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Perfume Spray",
    "description": "Long-lasting perfume spray with a refreshing and elegant fragrance. Designed for daily wear and special occasions, it enhances confidence and leaves a pleasant impression throughout the day.",
    "price": 1299,
    "category": "69738639e9806fd18686d8d3",
    "stock": 42,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Makeup Kit",
    "description": "Complete makeup kit containing essential 69738639e9806fd18686d8d3 products for everyday use. Designed for convenience and versatility, it helps create natural or glamorous looks with ease, making it ideal for beginners and professionals alike.",
    "price": 2999,
    "category": "69738639e9806fd18686d8d3",
    "stock": 20,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },

  {
    "title": "Wheat Flour",
    "description": "High-quality wheat flour made from carefully selected grains. Ideal for making soft rotis, breads, and baked items, it ensures nutrition, taste, and freshness for daily home cooking needs.",
    "price": 499,
    "category": "69738608e9806fd18686d8cf",
    "stock": 120,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Organic Honey",
    "description": "Pure organic honey sourced naturally for rich taste and nutrition. Packed with antioxidants and natural sweetness, it’s ideal for daily consumption, beverages, and healthy recipes promoting overall wellness.",
    "price": 649,
    "category": "69738608e9806fd18686d8cf",
    "stock": 75,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Pulses Mix",
    "description": "Nutritious mix of premium quality pulses rich in protein and fiber. Suitable for daily meals, it supports a balanced diet and provides essential nutrients for healthy living and energy.",
    "price": 699,
    "category": "69738608e9806fd18686d8cf",
    "stock": 90,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Spice Masala Pack",
    "description": "Aromatic spice masala pack blended from high-quality ingredients. Enhances flavor and aroma of dishes while maintaining authenticity. Ideal for everyday cooking and preparing traditional meals with rich taste.",
    "price": 299,
    "category": "69738608e9806fd18686d8cf",
    "stock": 110,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  },
  {
    "title": "Green Tea",
    "description": "Refreshing green tea rich in antioxidants, supporting metabolism and overall health. Light and soothing, it’s perfect for daily consumption as a healthy beverage alternative promoting wellness and relaxation.",
    "price": 399,
    "category": "69738608e9806fd18686d8cf",
    "stock": 85,
    "images":[
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179746/products/oahjkd6ckvkuyyrwyhmd.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179748/products/zibvvpxtupjlg0wnwfie.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179749/products/kscf7qlutecloqueeunq.avif",
    "https://res.cloudinary.com/dcute6a59/image/upload/v1769179751/products/jmcbff061ii8ogx0yodz.avif"
]
  }
]




export const seedProducts = async (req, res) => {
  try {

    const products = await Product.insertMany(Products);

    res.status(201).json({
      message: "Products seeded successfully",
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to seed products",
      error: error.message,
    });
  }
};
