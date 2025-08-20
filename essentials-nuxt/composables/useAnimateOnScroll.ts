export const useAnimateOnScroll = (options: IntersectionObserverInit = {}) => {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options
    })

    observer.observe(elementRef.value)

    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    })
  })

  return {
    elementRef,
    isVisible
  }
}