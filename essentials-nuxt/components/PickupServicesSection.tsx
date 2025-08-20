export default defineComponent({
  name: 'PickupServicesSection',
  render() {
    return (
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <SectionTitle 
            title="Retail Pickup Services" 
            subtitle="Convenient pickup options for your customers"
          />
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="fa6-solid:store" class="text-white text-2xl" />
                </div>
                <h3 class="text-2xl font-bold mb-4">In-Store Pickup</h3>
                <p class="text-gray-600 leading-relaxed">
                  Customers can pick up their orders directly from retail locations, 
                  providing convenience and reducing shipping costs.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="fa6-solid:car" class="text-white text-2xl" />
                </div>
                <h3 class="text-2xl font-bold mb-4">Curbside Pickup</h3>
                <p class="text-gray-600 leading-relaxed">
                  Safe and contactless pickup service where customers can collect 
                  their orders without leaving their vehicle.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    )
  }
})