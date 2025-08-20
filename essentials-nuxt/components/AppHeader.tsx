export default defineComponent({
  name: 'AppHeader',
  setup() {
    const isMenuActive = ref(false)
    const isScrolled = ref(false)
    const route = useRoute()

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value
    }

    // Close menu when route changes
    watch(() => route.path, () => {
      isMenuActive.value = false
    })

    // Add scroll effect to header
    onMounted(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          isScrolled.value = true
        } else {
          isScrolled.value = false
        }
      }

      window.addEventListener('scroll', handleScroll)
      
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
    })

    return {
      isMenuActive,
      isScrolled,
      toggleMenu,
      route
    }
  },
  render() {
    return (
      <header class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        this.isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div class="container mx-auto px-6">
          <div class="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-lg">E3</span>
              </div>
              <div>
                <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Essentials 3PL
                </h1>
                <p class="text-xs text-gray-500 font-medium">Owned by Hassan Nasir LLC</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav class="hidden md:flex items-center space-x-8">
              <NuxtLink 
                to="/" 
                class={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  this.route.path === '/' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Home
              </NuxtLink>
              <NuxtLink 
                to="/services" 
                class={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  this.route.path === '/services' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Services
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  this.route.path === '/about' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                About
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                class={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  this.route.path === '/contact' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Contact
              </NuxtLink>
            </nav>

            {/* Right Section */}
            <div class="flex items-center space-x-4">
              <DarkModeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={this.toggleMenu}
                class="md:hidden w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Icon name="fa6-solid:bars" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div class={`md:hidden transition-all duration-300 overflow-hidden ${
            this.isMenuActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div class="py-4 border-t border-gray-200/50">
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4">
                <h2 class="text-lg font-bold text-gray-900">Essentials 3PL</h2>
                <p class="text-sm text-gray-600">Owned by Hassan Nasir LLC</p>
              </div>
              
              <div class="space-y-2">
                <NuxtLink 
                  to="/" 
                  class={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    this.route.path === '/' 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  🏠 Home
                </NuxtLink>
                <NuxtLink 
                  to="/services" 
                  class={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    this.route.path === '/services' 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  🚚 Services
                </NuxtLink>
                <NuxtLink 
                  to="/about" 
                  class={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    this.route.path === '/about' 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  ℹ️ About
                </NuxtLink>
                <NuxtLink 
                  to="/contact" 
                  class={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    this.route.path === '/contact' 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  📞 Contact
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
})