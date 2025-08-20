export default defineComponent({
  name: 'StatsSection',
  render() {
    return (
      <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-4 gap-8 text-center text-white">
            <AnimatedSection delay={100}>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="text-4xl font-bold mb-2">500+</div>
                <div class="text-lg">Happy Clients</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="text-4xl font-bold mb-2">99.9%</div>
                <div class="text-lg">On-Time Delivery</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="text-4xl font-bold mb-2">1M+</div>
                <div class="text-lg">Orders Processed</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="text-4xl font-bold mb-2">24/7</div>
                <div class="text-lg">Support</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    )
  }
})