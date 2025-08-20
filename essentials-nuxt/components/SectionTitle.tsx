interface Props {
  title: string
  subtitle?: string
  className?: string
}

export default defineComponent({
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props: Props) {
    return {
      ...props
    }
  },
  render() {
    return (
      <div class={`text-center mb-16 ${this.className}`}>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {this.title}
          </span>
        </h2>
        {this.subtitle && (
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {this.subtitle}
          </p>
        )}
      </div>
    )
  }
})