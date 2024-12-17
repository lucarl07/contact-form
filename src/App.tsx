// Hooks & utilities:
import validateForm from 'src/utils/validateForm'
import { useFormErrors, useFormValues } from 'hooks/formHooks'

// Components:
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import Control from 'components/Control'
import Button from 'components/Button/Button';

export default function App() {
  const [formValues, setFormValues] = useFormValues()
  const [formErrors, setFormErrors] = useFormErrors()

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
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Contact Us</Title>
        <div className="flex space-x-3">
          <Control.Root 
            field="firstName"
            error={formErrors.firstName}
          >
            <Control.Label>First Name *</Control.Label>
            <Control.Input 
              type="text"
              value={formValues.firstName}
              onChange={handleChange} />
            <Control.Error />
          </Control.Root>
          <Control.Root 
            field="lastName" 
            error={formErrors.lastName}
          >
            <Control.Label>Last Name *</Control.Label>
            <Control.Input 
              type="text"
              value={formValues.lastName}
              onChange={handleChange} />
            <Control.Error />
          </Control.Root>
        </div>
        <Control.Root
          field="email"
          error={formErrors.email}
        >
          <Control.Label>Email Address *</Control.Label>
          <Control.Input 
            type="text"
            value={formValues.email}
            onChange={handleChange} />
          <Control.Error />
        </Control.Root>
        <Control.Root 
          field="queryType" 
          error={formErrors.queryType}
        >
          <Control.Label>Query Type *</Control.Label>
          <div className="flex space-x-3">
            <Control.Input 
              type="radio" id="enquiry" value="enquiry"
              desc="General Enquiry"
              onChange={handleChange} />
            <Control.Input 
              type="radio" id="support" value="support"
              desc="Support Request"
              onChange={handleChange} />
          </div>
          <Control.Error />
        </Control.Root>
        <Control.Root 
          field="message"
          error={formErrors.message}
        >
          <Control.Label>Message *</Control.Label>
          <Control.TextArea 
            rows={3} 
            value={formValues.message}
            onChange={handleChange} />
          <Control.Error />
        </Control.Root>
        <Control.Root 
          field="agreeOnContact"
          error={formErrors.agreeOnContact}
        >
          <div className="flex items-center w-full gap-4">
            <Control.Input 
              type="checkbox"
              onChange={handleCheckbox} />
            <Control.Label>I consent to being contacted by the team *</Control.Label>
          </div>
          <Control.Error />
        </Control.Root>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}