interface Props {
  src: string
  alt: string
  placeholder?: string
  class?: string
  loading?: 'lazy' | 'eager'
}

export default defineComponent({
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'
    },
    class: {
      type: String,
      default: ''
    },
    loading: {
      type: String as PropType<'lazy' | 'eager'>,
      default: 'lazy'
    }
  },
  setup(props: Props) {
    const { elementRef, isInView } = useLazyLoad({ threshold: 0.1 })
    const imageLoaded = ref(false)
    const imageError = ref(false)

    const handleLoad = () => {
      imageLoaded.value = true
    }

    const handleError = () => {
      imageError.value = true
    }

    const shouldLoadImage = computed(() => {
      return props.loading === 'eager' || isInView.value
    })

    return () => (
      <div ref={elementRef} class={`relative overflow-hidden ${props.class}`}>
        {/* Placeholder */}
        {!imageLoaded.value && !imageError.value && (
          <img
            src={props.placeholder}
            alt=""
            class="absolute inset-0 w-full h-full object-cover blur-sm"
            aria-hidden="true"
          />
        )}
        
        {/* Actual Image */}
        {shouldLoadImage.value && (
          <img
            src={props.src}
            alt={props.alt}
            class={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded.value ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={props.loading}
          />
        )}
        
        {/* Error State */}
        {imageError.value && (
          <div class="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div class="text-center text-gray-500">
              <Icon name="fa6-solid:image" class="text-2xl mb-2" />
              <p class="text-sm">Failed to load image</p>
            </div>
          </div>
        )}
        
        {/* Loading Spinner */}
        {shouldLoadImage.value && !imageLoaded.value && !imageError.value && (
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="fa6-solid:spinner" class="text-2xl text-gray-400 animate-spin" />
          </div>
        )}
      </div>
    )
  }
})