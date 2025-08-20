export default defineComponent({
  name: 'ComparisonSection',
  render() {
    return (
      <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <SectionTitle 
            title="Why Choose Essentials 3PL?" 
            subtitle="See how we compare to traditional logistics providers"
          />
          <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={100}>
                <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Traditional Providers</h3>
                  <ul class="space-y-4">
                    <li class="flex items-center space-x-3">
                      <Icon name="fa6-solid:times" class="text-red-500" />
                      <span class="text-gray-600">Limited visibility</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <Icon name="fa6-solid:times" class="text-red-500" />
                      <span class="text-gray-600">Slow response times</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <Icon name="fa6-solid:times" class="text-red-500" />
                      <span class="text-gray-600">High costs</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
                  <h3 class="text-2xl font-bold mb-6 text-center">Essentials 3PL</h3>
                  <ul class="space-y-4">
                    <li class="flex items-center space-x-3">
                      <Icon name="fa6-solid:check" class="text-green-400" />
                      <span>Complete transparency</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <Icon name="fa6-solid:check" class="text-green-400" />
                      <span>24/7 support</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <Icon name="fa6-solid:check" class="text-green-400" />
                      <span>Cost-effective solutions</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    )
  }
})