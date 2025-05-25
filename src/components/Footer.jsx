const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 mt-24">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">MonsterScale</h3>
        <p className="text-sm">Unleash your business potential with our powerful scaling solutions.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Features</a></li>
          <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-2">
          <li>Email: info@monsterscale.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Scale St, Growth City</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-300">Facebook</a>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
      <p>&copy; 2024 MonsterScale. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
