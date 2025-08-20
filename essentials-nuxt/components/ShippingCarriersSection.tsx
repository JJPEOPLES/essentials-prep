export default defineComponent({
  name: 'ShippingCarriersSection',
  render() {
    return (
      <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <SectionTitle 
            title="Shipping Carriers" 
            subtitle="We partner with trusted carriers for reliable delivery"
          />
          <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="h-16 flex items-center justify-center mx-auto mb-6">
                  <img src="/images/carriers/ups.png" alt="UPS" class="h-20 object-contain" />
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-800">UPS</h3>
                <p class="text-gray-600">Fast and reliable ground shipping</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="h-16 flex items-center justify-center mx-auto mb-6">
                  <img src="/images/carriers/fedex.png" alt="FedEx" class="h-20 object-contain" />
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-800">FedEx</h3>
                <p class="text-gray-600">Express delivery worldwide</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="h-16 flex items-center justify-center mx-auto mb-6">
                  <img src="/images/carriers/usps.png" alt="USPS" class="h-20 object-contain" />
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-800">USPS</h3>
                <p class="text-gray-600">Cost-effective postal services</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="h-16 flex items-center justify-center mx-auto mb-6">
                  <img src="/images/carriers/dhl.png" alt="DHL" class="h-20 object-contain" />
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-800">DHL</h3>
                <p class="text-gray-600">International express delivery</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    )
  }
})