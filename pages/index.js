// Import necessary modules and components
import React from 'react';

// Dummy data for cards
const cardData = [
  { id: 1, title: 'Card 1', content: 'Content for Card 1' },
  { id: 2, title: 'Card 2', content: 'Content for Card 2' },
  { id: 3, title: 'Card 3', content: 'Content for Card 3' },
  // Add more card data as needed
];

// Header component
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-6">
            <img src="/path/to/your/logo.png" alt="Logo" className="h-8" />
          </div>
          {/* Navbar */}
          <nav className="flex">
            <a href="/" className="mr-4">Home</a>
            <a href="/contact" className="mr-4">Contact</a>
            <a href="/about" className="mr-4">About</a>
          </nav>
        </div>
        {/* Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Button</button>
      </div>
    </header>
  );
};

// Body component with color cards
const Body = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card) => (
          <div key={card.id} className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto flex justify-between">
        {/* Dummy text */}
        <div className="w-1/3">
          <p>Dummy text here.</p>
        </div>
        {/* Menu */}
        <div className="w-1/3">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
        {/* Another column */}
        <div className="w-1/3">
          <p>Another column here.</p>
        </div>
      </div>
    </footer>
  );
};

// Main index page component
const Index = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Body */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
