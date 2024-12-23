import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-black py-10 relative bottom-0 font-Poppins bg-color4.05"
    >
      <div className="container mx-auto px-5">
        {/* Flex container for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Info */}
          <div>
            <h2 className="lg:text-4xl text-color2 font-semibold mb-4 font-Rochester">
              FoodBites
            </h2>
            <p className="text-sm">
              A platform connecting people through food donations. Join us to
              make a difference in someone’s life!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg text-color2 font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-color2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/foods" className="hover:underline text-color2">
                  Foods
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-color2">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-color2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-color2">
              Contact Us
            </h2>
            <ul className="space-y-2 text-color2">
              <li>Email: support@foodbites.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Food Street, Culinary City</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-color2">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/shahriar.kawsik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://x.com/ShahriarKawsik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriar-kawsik-21916117b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="http://www.instagram.com/shahriar.kawsik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center border-t border-gray-300 pt-5">
          <p className="text-sm" style={{ color: "rgb(64, 63, 63)" }}>
            &copy; 2024 FoodBites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
