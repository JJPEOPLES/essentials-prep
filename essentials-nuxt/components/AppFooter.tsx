export default defineComponent({
  name: 'AppFooter',
  setup() {
    const currentYear = new Date().getFullYear()

    return {
      currentYear
    }
  },
  render() {
    return (
      <footer class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div class="absolute inset-0">
          <div class="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
          <div class="absolute top-32 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse-slow"></div>
          <div class="absolute bottom-20 left-1/3 w-20 h-20 bg-blue-400/10 rounded-full animate-float" style="animation-delay: 2s"></div>
        </div>

        <div class="container mx-auto px-6 py-16 relative z-10">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div class="lg:col-span-1">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span class="text-white font-bold text-lg">E3</span>
                </div>
                <div>
                  <h2 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Essentials 3PL
                  </h2>
                  <p class="text-xs text-gray-300">Owned by Hassan Nasir LLC</p>
                </div>
              </div>
              <p class="text-gray-300 leading-relaxed mb-6">
                Your trusted partner in logistics and supply chain management. We provide comprehensive 3PL solutions to help your business grow.
              </p>
              
              {/* Social Media */}
              <div class="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  <Icon name="fa6-brands:facebook-f" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  <Icon name="fa6-brands:twitter" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  <Icon name="fa6-brands:linkedin-in" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  <Icon name="fa6-brands:instagram" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 class="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul class="space-y-3">
                <li>
                  <NuxtLink 
                    to="/" 
                    class="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span class="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    <span>Home</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/services" 
                    class="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span class="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    <span>Services</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/about" 
                    class="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span class="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    <span>About</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/contact" 
                    class="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span class="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    <span>Contact</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 class="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="fa6-solid:location-dot" class="text-sm" />
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    630 Rankin Ave, Schenectady, NY 12308
                  </p>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="fa6-solid:phone" class="text-sm" />
                  </div>
                  <a 
                    href="tel:518-918-2695" 
                    class="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    518-918-2695
                  </a>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="fa6-solid:envelope" class="text-sm" />
                  </div>
                  <a 
                    href="mailto:essentials3pl@gmail.com" 
                    class="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    essentials3pl@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 class="text-xl font-bold mb-6 text-white">Our Services</h3>
              <ul class="space-y-3">
                <li class="text-gray-300 flex items-center space-x-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Warehousing</span>
                </li>
                <li class="text-gray-300 flex items-center space-x-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Inventory Management</span>
                </li>
                <li class="text-gray-300 flex items-center space-x-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Order Fulfillment</span>
                </li>
                <li class="text-gray-300 flex items-center space-x-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Distribution</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div class="border-t border-gray-700/50 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p class="text-gray-400 text-center md:text-left">
                &copy; {this.currentYear} Essentials 3PL. All Rights Reserved.
              </p>
              <div class="flex items-center space-x-4">
                <p class="text-gray-400">Owned by Hassan Nasir LLC</p>
                <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-xs">HN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}</style>
      </footer>
    )
  }
})