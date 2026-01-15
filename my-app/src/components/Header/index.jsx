import React from 'react';

export default function Header() {
  return (
    <div className="bg-primary">
      <header className="container mx-auto px-4">
        <div className="top-strip flex text-sm font-bold justify-between text-gray-800 py-2">
          <div className="w-1/2">
            Super Deal! Free Shipping on Orders Over $50
          </div>
        </div>
      </header>
    </div>
  );
}

