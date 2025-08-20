import { defineComponent, computed } from 'vue'

interface Props {
  className?: string
  animation?: string
  delay?: number | string
  threshold?: number
}

export default defineComponent({
  name: 'AnimatedSection',
  props: {
    className: {
      type: String,
      default: ''
    },
    animation: {
      type: String,
      default: 'fade-in'
    },
    delay: {
      type: [Number, String],
      default: 0
    },
    threshold: {
      type: Number,
      default: 0.1
    }
  },
  setup(props: Props, { slots, attrs }) {
    const { elementRef, isVisible } = useAnimateOnScroll({ 
      threshold: props.threshold,
      rootMargin: '0px'
    })

    const animationClass = computed(() => isVisible.value ? props.animation : '')
    const delayClass = computed(() => props.delay ? `delay-${props.delay}` : '')

    return {
      elementRef,
      animationClass,
      delayClass
    }
  },
  render() {
    return (
      <div 
        ref="elementRef"
        class={`${this.className} ${this.animationClass} ${this.delayClass}`}
        {...this.$attrs}
      >
        {this.$slots.default?.()}
      </div>
    )
  }
})

// Add styles
const style = `
<style scoped>
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
`