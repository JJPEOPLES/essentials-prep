export const useForm = (initialValues: Record<string, any>, validate: (values: Record<string, any>) => Record<string, string>) => {
  const values = ref({ ...initialValues })
  const errors = ref<Record<string, string>>({})
  const touched = ref<Record<string, boolean>>({})
  const isSubmitting = ref(false)
  const isSubmitted = ref(false)

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    const { name, value } = target
    
    values.value = {
      ...values.value,
      [name]: value
    }
    
    // Clear error when field is edited
    if (errors.value[name]) {
      errors.value = {
        ...errors.value,
        [name]: ''
      }
    }
  }

  const handleBlur = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    const { name } = target
    
    touched.value = {
      ...touched.value,
      [name]: true
    }
    
    // Validate on blur
    const fieldErrors = validate({ [name]: values.value[name] })
    if (fieldErrors[name]) {
      errors.value = {
        ...errors.value,
        [name]: fieldErrors[name]
      }
    }
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    
    // Validate all fields
    const formErrors = validate(values.value)
    errors.value = formErrors
    
    // Mark all fields as touched
    const touchedFields: Record<string, boolean> = {}
    Object.keys(values.value).forEach(key => {
      touchedFields[key] = true
    })
    touched.value = touchedFields
    
    // If no errors, proceed with submission
    if (Object.keys(formErrors).length === 0) {
      isSubmitting.value = true
      
      try {
        const formData = new FormData()
        Object.keys(values.value).forEach(key => {
          formData.append(key, values.value[key])
        })
        formData.append('_subject', `New inquiry from ${values.value.name} - ${values.value.company}`)
        formData.append('_captcha', 'false')
        
        const response = await fetch('https://formsubmit.co/essentials3pl@gmail.com', {
          method: 'POST',
          body: formData
        })
        
        if (response.ok) {
          isSubmitted.value = true
          // Reset form
          values.value = { ...initialValues }
          touched.value = {}
        } else {
          throw new Error('Form submission failed')
        }
      } catch (error) {
        console.error('Error sending email:', error)
        alert('There was a problem sending your message. Please try again later.')
      } finally {
        isSubmitting.value = false
      }
    }
  }

  const resetForm = () => {
    values.value = { ...initialValues }
    errors.value = {}
    touched.value = {}
    isSubmitting.value = false
    isSubmitted.value = false
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  }
}