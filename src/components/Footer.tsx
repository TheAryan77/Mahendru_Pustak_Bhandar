import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Shipping Info', href: '#shipping' },
    { name: 'Return Policy', href: '#returns' },
  ];

  const categories = [
    { name: 'Spiritual Books 🕉️', href: '#spiritual' },
    { name: 'Novels 📖', href: '#novels' },
    { name: 'Academic Books 📚', href: '#academic' },
    { name: 'Children Books 👶', href: '#children' },
    { name: 'Notebooks 📝', href: '#notebooks' },
    { name: 'Art Supplies 🎨', href: '#art' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#instagram', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: '#twitter', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#youtube', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                MAHENDRU PUSTAK BHANDAR
              </h3>
              <p className="text-gray-400 text-sm">
                Your trusted partner in knowledge and creativity since 1985 📚✨
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary-300">👨‍💼 Founder</h4>
                <p className="text-white">Santosh Mahendru</p>
              </div>
              <div className="bg-gradient-to-r from-secondary-500/20 to-accent-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-secondary-300">🤝 Co-founder</h4>
                <p className="text-white">Nikhil Mahendru</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary-300">
              Quick Links 🔗
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondary-300">
              Categories 📂
            </h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {category.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-accent-300">
              Contact Us 📞
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Visit Our Store</p>
                  <p className="text-gray-400 text-sm">
                    123 Knowledge Street<br />
                    Education Colony<br />
                    Delhi - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-gray-400 text-sm">info@mahendrupustakbhandar.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Store Hours</p>
                  <p className="text-gray-400 text-sm">
                    Mon-Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-4">
              Stay Updated! 📬✨
            </h4>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest book releases, special offers, and educational content!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Subscribe 🔔
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Mahendru Pustak Bhandar. All rights reserved. Made with ❤️ for book lovers!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
