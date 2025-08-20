interface Props {
  to?: string
  href?: string
  className?: string
  onClick?: () => void
  children: any
}

export default defineComponent({
  name: 'Button',
  props: {
    to: String,
    href: String,
    className: String,
    onClick: Function
  },
  setup(props: Props, { slots }) {
    if (props.to) {
      return () => (
        <NuxtLink to={props.to} class={props.className}>
          {slots.default?.()}
        </NuxtLink>
      )
    }
    
    if (props.href) {
      return () => (
        <a href={props.href} class={props.className} target="_blank" rel="noopener noreferrer">
          {slots.default?.()}
        </a>
      )
    }
    
    return () => (
      <button class={props.className} onClick={props.onClick}>
        {slots.default?.()}
      </button>
    )
  }
})