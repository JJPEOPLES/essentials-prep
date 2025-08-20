import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage',
  render() {
    return (
      <>
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 overflow-hidden">
          {/* Animated background elements */}
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div class="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow"></div>
            <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style="animation-delay: 2s"></div>
          </div>
          
          <div class="container mx-auto px-6 relative z-10">
            <div class="text-center text-white">
              <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                About Us
              </h1>
              <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Learn more about Essentials 3PL and our commitment to excellence in logistics
              </p>
              <div class="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span class="text-sm font-medium">🏢 Owned by Hassan Nasir LLC</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Essentials 3PL was founded with a simple mission: to provide businesses with reliable, efficient, and cost-effective logistics solutions. Since our inception, we have grown to become a trusted partner for companies across various industries, helping them streamline their supply chains and focus on their core business activities.
                </p>
                <p>
                  With decades of combined experience in logistics and supply chain management, our team brings expertise and innovation to every partnership. We understand the unique challenges businesses face in today's fast-paced market, and we're committed to delivering solutions that drive growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section class="py-20 bg-white">
          <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <AnimatedSection delay={100}>
                <div class="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl z-0"></div>
                  
                  <div class="relative z-10">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon name="fa6-solid:flag" class="text-white text-2xl" />
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      Our Mission
                    </h2>
                    <p class="text-gray-600 leading-relaxed text-lg">
                      To empower businesses through innovative logistics solutions that optimize supply chains, reduce costs, and enhance customer satisfaction.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vision */}
              <AnimatedSection delay={200}>
                <div class="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl z-0"></div>
                  
                  <div class="relative z-10">
                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon name="fa6-solid:eye" class="text-white text-2xl" />
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                      Our Vision
                    </h2>
                    <p class="text-gray-600 leading-relaxed text-lg">
                      To be the leading provider of integrated logistics services, recognized for excellence, reliability, and continuous innovation in the industry.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div class="container mx-auto px-6">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={100}>
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                  
                  <div class="relative z-10 text-center">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                      <Icon name="fa6-solid:handshake" class="text-white text-2xl" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      Integrity
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      We conduct our business with honesty, transparency, and ethical standards that build trust with our clients and partners.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                  
                  <div class="relative z-10 text-center">
                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                      <Icon name="fa6-solid:award" class="text-white text-2xl" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      Excellence
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      We strive for excellence in every aspect of our operations, continuously improving our processes and services.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                  
                  <div class="relative z-10 text-center">
                    <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                      <Icon name="fa6-solid:users" class="text-white text-2xl" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      Collaboration
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                  
                  <div class="relative z-10 text-center">
                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                      <Icon name="fa6-solid:leaf" class="text-white text-2xl" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      Sustainability
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      We are committed to environmentally responsible practices that minimize our ecological footprint.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={500} class="md:col-span-2 lg:col-span-1">
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div class="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                  
                  <div class="relative z-10 text-center">
                    <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                      <Icon name="fa6-solid:lightbulb" class="text-white text-2xl" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      Innovation
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      We embrace new technologies and creative solutions to address evolving logistics challenges.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </>
    )
  }
})