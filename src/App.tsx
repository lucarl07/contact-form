// Hooks:
import useFormState from 'hooks/useFormState'
import validateForm from './utils/validateForm'

// Components:
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import Control from 'components/Control'
import Button from 'components/Button/Button';

export default function App() {
  const [formValues, setFormValues] = useFormState()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: { value, error: '' } })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    const value = checked ? 'checked' : 'unchecked'
    setFormValues({ ...formValues, [name]: { value, error: '' } })
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    debugger;
    e.preventDefault()
    setFormValues(validateForm(formValues))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Contact Us</Title>
        <div className="flex space-x-3">
          <Control.Root 
            field="firstName"
            error={formValues.firstName.error} 
          >
            <Control.Label>First Name *</Control.Label>
            <Control.Input 
              type="text"
              value={formValues.firstName.value}
              onChange={handleChange} />
            <Control.Error />
          </Control.Root>
          <Control.Root 
            field="lastName" 
            error={formValues.lastName.error}
          >
            <Control.Label>Last Name *</Control.Label>
            <Control.Input 
              type="text"
              value={formValues.lastName.value}
              onChange={handleChange} />
            <Control.Error />
          </Control.Root>
        </div>
        <Control.Root
          field="email"
          error={formValues.email.error}
        >
          <Control.Label>Email Address *</Control.Label>
          <Control.Input 
            type="text"
            value={formValues.email.value}
            onChange={handleChange} />
          <Control.Error />
        </Control.Root>
        <Control.Root 
          field="queryType" 
          error={formValues.queryType?.error}
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
          error={formValues.message.error} 
          field="message"
        >
          <Control.Label>Message *</Control.Label>
          <Control.TextArea 
            rows={3} 
            value={formValues.message.value}
            onChange={handleChange} />
          <Control.Error />
        </Control.Root>
        <Control.Root 
          error={formValues.agreeOnContact.error} 
          field="agreeOnContact"
        >
          <div className="flex items-center w-full gap-4">
            <Control.Input 
              type="checkbox"
              onChange={handleCheckbox} />
            <Control.Label>I consent to being contacted by the team *</Control.Label>
          </div>
        </Control.Root>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}