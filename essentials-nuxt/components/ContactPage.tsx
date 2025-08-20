import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const initialValues = {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    
    const validateForm = (values: Record<string, any>) => {
      const errors: Record<string, string> = {}
      
      if (!values.name?.trim()) {
        errors.name = 'Name is required'
      }
      
      if (!values.company?.trim()) {
        errors.company = 'Company name is required'
      }
      
      if (!values.email?.trim()) {
        errors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid'
      }
      
      if (!values.phone?.trim()) {
        errors.phone = 'Phone number is required'
      }
      
      if (!values.service) {
        errors.service = 'Please select a service'
      }
      
      if (!values.message?.trim()) {
        errors.message = 'Message is required'
      }
      
      return errors
    }

    const {
      values,
      errors,
      touched,
      isSubmitting,
      isSubmitted,
      handleChange,
      handleBlur,
      handleSubmit,
      resetForm
    } = useForm(initialValues, validateForm)

    return () => (
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
                Contact Us
              </h1>
              <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our team for inquiries, quotes, or support
              </p>
              <div class="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span class="text-sm font-medium">🏢 Owned by Hassan Nasir LLC</span>
              </div>
            </div>
          </div>
        </section>

        <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              <AnimatedSection class="lg:col-span-2" delay={100}>
                <div class="bg-white rounded-3xl shadow-2xl shadow-blue-500/10 p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                  {/* Decorative gradient border */}
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div class="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                  
                  <div class="relative z-10">
                    <div class="text-center mb-8">
                      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Send Us a Message
                      </h2>
                      <p class="text-gray-600 text-lg">
                        Your message will be sent to <span class="font-semibold text-blue-600">essentials3pl@gmail.com</span>
                      </p>
                    </div>
                    
                    {isSubmitted.value ? (
                      <div class="text-center py-12">
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Icon name="fa6-solid:check" class="text-white text-2xl" />
                          </div>
                          <h3 class="text-2xl font-bold text-gray-900 mb-4">Thank you for your message!</h3>
                          <p class="text-gray-600 mb-2">Your message has been sent to <span class="font-semibold text-blue-600">essentials3pl@gmail.com</span>.</p>
                          <p class="text-gray-600 mb-6">We will contact you soon.</p>
                          <button 
                            onClick={resetForm}
                            class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            Send Another Message
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form class="space-y-6" onSubmit={handleSubmit}>
                        {/* Name and Company Row */}
                        <div class="grid md:grid-cols-2 gap-6">
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input 
                              type="text"
                              name="name"
                              value={values.value.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter your full name"
                              class={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.value.name && touched.value.name ? 'border-red-300' : 'border-gray-300'
                              }`}
                            />
                            {errors.value.name && touched.value.name && <p class="text-red-500 text-sm mt-1">{errors.value.name}</p>}
                          </div>
                          
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                            <input 
                              type="text"
                              name="company"
                              value={values.value.company}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter your company name"
                              class={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.value.company && touched.value.company ? 'border-red-300' : 'border-gray-300'
                              }`}
                            />
                            {errors.value.company && touched.value.company && <p class="text-red-500 text-sm mt-1">{errors.value.company}</p>}
                          </div>
                        </div>
                        
                        {/* Email and Phone Row */}
                        <div class="grid md:grid-cols-2 gap-6">
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input 
                              type="email"
                              name="email"
                              value={values.value.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="your.email@company.com"
                              class={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.value.email && touched.value.email ? 'border-red-300' : 'border-gray-300'
                              }`}
                            />
                            {errors.value.email && touched.value.email && <p class="text-red-500 text-sm mt-1">{errors.value.email}</p>}
                          </div>
                          
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input 
                              type="tel"
                              name="phone"
                              value={values.value.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="(555) 123-4567"
                              class={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.value.phone && touched.value.phone ? 'border-red-300' : 'border-gray-300'
                              }`}
                            />
                            {errors.value.phone && touched.value.phone && <p class="text-red-500 text-sm mt-1">{errors.value.phone}</p>}
                          </div>
                        </div>
                        
                        {/* Service Selection */}
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">Service of Interest *</label>
                          <select 
                            name="service"
                            value={values.value.service}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            class={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                              errors.value.service && touched.value.service ? 'border-red-300' : 'border-gray-300'
                            }`}
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="warehousing">🏭 Warehousing</option>
                            <option value="inventory">📦 Inventory Management</option>
                            <option value="fulfillment">🚚 Order Fulfillment</option>
                            <option value="distribution">🌐 Distribution</option>
                            <option value="other">💼 Other Services</option>
                          </select>
                          {errors.value.service && touched.value.service && <p class="text-red-500 text-sm mt-1">{errors.value.service}</p>}
                        </div>
                        
                        {/* Message */}
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                          <textarea 
                            name="message"
                            value={values.value.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows="5"
                            placeholder="Tell us about your logistics needs, volume expectations, and any specific requirements..."
                            class={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                              errors.value.message && touched.value.message ? 'border-red-300' : 'border-gray-300'
                            }`}
                          />
                          {errors.value.message && touched.value.message && <p class="text-red-500 text-sm mt-1">{errors.value.message}</p>}
                        </div>
                        
                        {/* Submit Button */}
                        <div class="pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting.value}
                            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          >
                            {isSubmitting.value ? (
                              <div class="flex items-center justify-center space-x-2">
                                <Icon name="fa6-solid:spinner" class="animate-spin" />
                                <span>Sending Message...</span>
                              </div>
                            ) : (
                              <div class="flex items-center justify-center space-x-2">
                                <span>Send Message</span>
                                <Icon name="fa6-solid:paper-plane" />
                              </div>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection class="space-y-8" delay={200}>
                {/* Contact Information Card */}
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
                  <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Contact Information
                  </h2>
                  
                  <div class="space-y-6">
                    {/* Location */}
                    <div class="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon name="fa6-solid:map-marker-alt" class="text-white text-lg" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-1">Our Location</h3>
                        <p class="text-gray-600">630 Rankin Ave, Schenectady, NY 12308</p>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div class="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon name="fa6-solid:phone" class="text-white text-lg" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-1">Phone Number</h3>
                        <a href="tel:518-918-2695" class="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          518-918-2695
                        </a>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div class="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon name="fa6-solid:envelope" class="text-white text-lg" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-1">Email Address</h3>
                        <a href="mailto:essentials3pl@gmail.com" class="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          essentials3pl@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    {/* Business Hours */}
                    <div class="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon name="fa6-solid:clock" class="text-white text-lg" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-2">Business Hours</h3>
                        <div class="space-y-1 text-sm text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Company Info Card */}
                <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span class="text-2xl font-bold text-white">E3</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Essentials 3PL</h3>
                    <p class="text-gray-600 mb-4">Owned by Hassan Nasir LLC</p>
                    <div class="bg-white/60 rounded-2xl p-4 backdrop-blur-sm">
                      <p class="text-sm text-gray-700 leading-relaxed">
                        Professional third-party logistics services providing warehousing, inventory management, 
                        order fulfillment, and distribution solutions for businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div class="grid grid-cols-2 gap-4">
                  <a 
                    href="tel:518-918-2695"
                    class="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl text-center font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <div class="flex flex-col items-center space-y-2">
                      <Icon name="fa6-solid:phone" class="text-xl" />
                      <span class="text-sm">Call Now</span>
                    </div>
                  </a>
                  <a 
                    href="mailto:essentials3pl@gmail.com"
                    class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl text-center font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <div class="flex flex-col items-center space-y-2">
                      <Icon name="fa6-solid:envelope" class="text-xl" />
                      <span class="text-sm">Email Us</span>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </>
    )
  }
})