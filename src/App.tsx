// Dependencies:
import React from 'react'
import { createPortal } from 'react-dom';

// Hooks & utilities:
import validateForm from 'utils/validateForm'
import useFade from 'hooks/useFade';
import { useFormErrors, useFormValues } from 'hooks/formHooks'

// Components:
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import Control from 'components/Control'
import Button from 'components/Button/Button';
import Success from './components/Success/Success';

export default function App() {
  const [formValues, setFormValues] = useFormValues()
  const [formErrors, setFormErrors] = useFormErrors()
  const {isVisible, setVisible, fadeProps: fp} = useFade(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    const value = checked ? 'checked' : 'unchecked'
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    validateForm(formValues, formErrors, setFormErrors)

    const areThereNoErrors = Object.entries(formErrors).every((err) => err[1] === '')

    if (areThereNoErrors) {
      setVisible(true)
      setInterval(() => {
        setVisible(false)
      }, 3000);
    }
  }

  return (
    <>
      {isVisible && createPortal(
        <Success animation={fp.animation} onAnimationEnd={fp.onAnimationEnd} />, 
        document.body
      )}
      <Container>
        <Title>Contact Us</Title>
        <Form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <Control.Root field="firstName" error={formErrors.firstName}>
              <Control.Label required="true">First Name</Control.Label>
              <Control.Input value={formValues.firstName} onChange={handleChange} />
            </Control.Root>

            <Control.Root field="lastName" error={formErrors.lastName}>
              <Control.Label required="true">Last Name</Control.Label>
              <Control.Input value={formValues.lastName} onChange={handleChange} />
            </Control.Root>
          </div>

          <Control.Root field="email" error={formErrors.email}>
            <Control.Label required="true">Email Address</Control.Label>
            <Control.Input value={formValues.email} onChange={handleChange} />
          </Control.Root>

          <Control.Root field="queryType" error={formErrors.queryType}>
            <Control.Label required="true">Query Type</Control.Label>
            <div className="flex space-x-3">
              <Control.Input 
                type="radio" id="enquiry" value="enquiry"
                desc="General Enquiry" onChange={handleChange} />
              
              <Control.Input 
                type="radio" id="support" value="support"
                desc="Support Request" onChange={handleChange} />
            </div>
          </Control.Root>
          
          <Control.Root field="message" error={formErrors.message}>
            <Control.Label required="true">Message</Control.Label>
            <Control.TextArea 
              rows={3} value={formValues.message} 
              onChange={handleChange} />
          </Control.Root>

          <Control.Root field="agreeOnContact" error={formErrors.agreeOnContact}>
            <div className="flex items-center w-full gap-4">
              <Control.Input type="checkbox" onChange={handleCheckbox} />
              <Control.Label required="true">
                I consent to being contacted by the team
              </Control.Label>
            </div>
          </Control.Root>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
}