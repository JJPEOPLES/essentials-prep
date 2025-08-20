export default defineComponent({
  name: 'PartnersSection',
  render() {
    return (
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <SectionTitle 
            title="Our E-commerce Partners" 
            subtitle="We work with leading platforms to streamline your operations"
          />
          <div class="grid md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            <AnimatedSection delay={100}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/Amazon_logo.svg" alt="Amazon" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">Amazon</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/Shopify_logo_2018.svg" alt="Shopify" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">Shopify</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/WooCommerce_logo.svg" alt="WooCommerce" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">WooCommerce</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/EBay_logo.svg" alt="eBay" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">eBay</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/Etsy-Logo.png" alt="Etsy" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">Etsy</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/TiktokShop.png" alt="TikTok Shop" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">TikTok Shop</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={700}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/Walmart_logo.svg" alt="Walmart" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">Walmart</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={800}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/Target.png" alt="Target" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">Target</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={900}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/samsclub.png" alt="Sam's Club" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">Sam's Club</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={1000}>
              <div class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src="/images/logos/bjs.png" alt="BJ's Wholesale Club" class="h-20 mx-auto mb-4 object-contain" />
                <h3 class="font-bold text-gray-800">BJ's</h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    )
  }
})