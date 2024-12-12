import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import Control from 'components/Control'
import Button from 'components/Button/Button';

export default function App() {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Form>
        <Control.Root error="" field="firstName">
          <Control.Label>First Name *</Control.Label>
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
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}