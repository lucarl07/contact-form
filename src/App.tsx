import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import Control from 'components/Control'
import Button from 'components/Button/Button';

export default function App() {
  return (
    <Container>
      <Form>
        <Title>Contact Us</Title>
        <div className="flex space-x-3">
          <Control.Root error="" field="firstName">
            <Control.Label>First Name *</Control.Label>
            <Control.Input type="text" />
            <Control.Error />
          </Control.Root>
          <Control.Root error="" field="lastName">
            <Control.Label>Last Name *</Control.Label>
            <Control.Input type="text" />
            <Control.Error />
          </Control.Root>
        </div>
        <Control.Root error="" field="email">
          <Control.Label>Email Address *</Control.Label>
          <Control.Input type="text" />
          <Control.Error />
        </Control.Root>
        <Control.Root error="" field="queryType">
          <Control.Label>Query Type *</Control.Label>
          <div className="flex space-x-3">
            <Control.Input type="radio" id="enquiry" value="General Enquiry" />
            <Control.Input type="radio" id="support" value="Support Request" />
          </div>
        </Control.Root>
        <Control.Root error="" field="message">
          <Control.Label>Message *</Control.Label>
          <Control.TextArea rows={3} />
          <Control.Error />
        </Control.Root>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}