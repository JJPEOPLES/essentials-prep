export default defineComponent({
  name: 'DarkModeToggle',
  setup() {
    const colorMode = useColorMode()

    const toggleDarkMode = () => {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }

    return {
      colorMode,
      toggleDarkMode
    }
  },
  render() {
    return (
      <button
        onClick={this.toggleDarkMode}
        class="w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
        title="Toggle dark mode"
      >
        {this.colorMode.value === 'dark' ? (
          <Icon name="fa6-solid:sun" class="text-yellow-500" />
        ) : (
          <Icon name="fa6-solid:moon" class="text-gray-600" />
        )}
      </button>
    )
  }
})