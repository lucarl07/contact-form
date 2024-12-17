import { useState } from 'react';

export function useFormValues() {
  return useState<FormValues>({ 
    firstName: '', 
    lastName: '',  
    email: '',
    queryType: undefined, 
    message: '',
    agreeOnContact: 'unchecked'
  })
}

export function useFormErrors() {
  return useState<FormErrors>({ 
    firstName: '', 
    lastName: '',  
    email: '',
    queryType: '', 
    message: '',
    agreeOnContact: ''
  })
}