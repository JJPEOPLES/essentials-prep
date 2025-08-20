export default defineComponent({
  name: 'ScrollToTop',
  setup() {
    const isVisible = ref(false)

    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        isVisible.value = true
      } else {
        isVisible.value = false
      }
    }

    // Set the top scroll position
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', toggleVisibility)
      
      onUnmounted(() => {
        window.removeEventListener('scroll', toggleVisibility)
      })
    })

    return {
      isVisible,
      scrollToTop
    }
  },
  render() {
    return (
      <div 
        class={`scroll-to-top ${this.isVisible ? 'visible' : ''}`}
        onClick={this.scrollToTop}
      >
        <Icon name="fa6-solid:arrow-up" />
        
        <style jsx>{`
          .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            z-index: 1000;
          }

          .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
          }
        `}</style>
      </div>
    )
  }
})