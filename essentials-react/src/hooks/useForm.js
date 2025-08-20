import { useState } from 'react';
import { sendEmail } from '../services/emailService';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    // Validate on blur
    const fieldErrors = validate({ [name]: values[name] });
    if (fieldErrors[name]) {
      setErrors({
        ...errors,
        [name]: fieldErrors[name]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = validate(values);
    setErrors(formErrors);
    
    // Mark all fields as touched
    const touchedFields = {};
    Object.keys(values).forEach(key => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);
    
    // If no errors, proceed with submission
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Add recipient email to the form data
        const formData = {
          ...values,
          recipient: 'essentials3pl@gmail.com'
        };
        
        // Send the email
        const result = await sendEmail(formData);
        
        if (result.success) {
          setIsSubmitted(true);
          // Reset form
          setValues(initialValues);
          setTouched({});
        } else {
          // Handle error
          console.error('Failed to send email:', result.message);
          alert('There was a problem sending your message. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('There was a problem sending your message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

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
  };
};

export default useForm;