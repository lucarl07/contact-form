function validateForm(values: FormValues, errors: FormErrors, setter: StateSetter<FormErrors>) {
  const { firstName, lastName, email, queryType, message, agreeOnContact } = values
  const updatedErrors = errors

  /** Explanation for the following RegEx:
   * 
   * Credits to: Gil from Stack Overflow
   * 
   * ^ = Matches the beginning of the string
   * 
   * [a-zA-Z0-9]+ = Matches one or more (+) letters and numbers
   * 
   * ([._-][0-9a-zA-Z]+)* = Optional block (*), Matches any single "._-" followed by at least a letter or number
   * 
   * @ = Matches "@"
   * 
   * [a-zA-Z0-9]+ = Matches one or more (+) letters and numbers
   * 
   * ([.-][0-9a-zA-Z]+)* = Optional block (*), Matches any single ".-" followed by at least a letter or number
   * 
   * \. = Matches "." (it needs to be escaped)
   * 
   * [a-zA-Z]{2,} = Matches two or more ({2,}) letters
   * 
   * $ = Matches the end of the string 
   * **/
  const emailRegEx = /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/

  if (firstName.length === 0) {
    updatedErrors.firstName = 'This field is required'
  }
  if (lastName.length === 0) {
    updatedErrors.lastName = 'This field is required'
  }
  if (email.length === 0) {
    updatedErrors.email = 'This field is required'
  }
  if (!email.match(emailRegEx)) {
    updatedErrors.email = 'Please enter a valid email address'
  }
  if (queryType === null || queryType === undefined) {
    updatedErrors.queryType = 'Please select a query type'
  }
  if (message.length === 0) {
    updatedErrors.message = 'This field is required'
  }
  if (agreeOnContact === 'unchecked') {
    updatedErrors.agreeOnContact = 'To submit this form, please consent on being contacted'
  }

  setter({ ...errors, ...updatedErrors })
}

export default validateForm;
