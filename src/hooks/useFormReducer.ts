import { useReducer } from 'react'

const emailRegex = /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/

const reducer = (state: FormState, action: FormReducerAction) => {
  const value = action.value
  let error: FormReducerError

  switch (action.field) {
    case 'firstName':
      if (value!.length < 1) {
        error = 'This field is required'
      }
      return {...state, firstName: { value, error }}
    case 'lastName':
      if (value!.length < 1) {
        error = 'This field is required'
      }
      
      return {...state, lastName: { value, error }}
    case 'email':
      let regex = emailRegex

      if (!value!.match(regex)) {
        error = 'Please enter a valid email address'
      }
      return {...state, email: { value, error }}
    case 'queryType':
      if (!value) {
        error = 'Please select a query type'
      }
      return {...state, queryType: { value, error }}
    case 'message':
      if (value!.length < 1) {
        error = 'This field is required'
      }
      return {...state, message: { value, error }}
    case 'agreeOnContact':
      if (value === 'unchecked') {
        error = 'To submit this form, please consent on being contacted'
      }
      return {...state, agreeOnContract: { value, error }}
    default:
      throw new Error('Invalid field given to useFormValues hook reducer.')
  }
}

export default function useFormReducer() {
  const initialValue: FormState = { 
    firstName: { 
      value: '', error: '' 
    }, 
    lastName: { 
      value: '', error: '' 
    },  
    email: { 
      value: '', error: '' 
    },
    queryType: { 
      value: undefined, error: '' 
    }, 
    message: { 
      value: '', error: '' 
    },
    agreeOnContact: { 
      value: 'unchecked', error: '' 
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialValue)

  return [state, dispatch]
}