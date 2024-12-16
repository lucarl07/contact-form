function validateForm(state: FormState) {
  debugger;
  const { firstName, lastName, email, queryType, message, agreeOnContact } = state
  const updates = state
  
  const emailRegex = /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/

  if (firstName.value.length === 0) {
    updates.firstName = { 
      value: '', 
      error: 'This field is required' 
    }
  }
  if (lastName.value.length === 0) {
    updates.lastName = { 
      value: '', 
      error: 'This field is required' 
    }
  }
  if (!email.value.match(emailRegex)) {
    updates.email = { 
      value: '', 
      error: 'Please enter a valid email address' 
    }
  }
  if (!queryType?.value) {
    updates.queryType = { 
      value: undefined, 
      error: 'Please select a query type' 
    }
  }
  if (message.value.length === 0) {
    updates.message = { 
      value: '', 
      error: 'This field is required' 
    }
  }
  if (agreeOnContact.value !== 'checked') {
    updates.agreeOnContact = { 
      value: 'unchecked', 
      error: 'To submit this form, please consent on being contacted' 
    }
  }
  
  return updates;
}

export default validateForm;
