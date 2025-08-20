export const useLazyLoad = (options: IntersectionObserverInit = {}) => {
  const elementRef = ref<HTMLElement | null>(null)
  const isInView = ref(false)

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isInView.value = true
        observer.disconnect()
      }
    }, options)

    observer.observe(elementRef.value)

    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    })
  })

  return {
    elementRef,
    isInView
  }
}