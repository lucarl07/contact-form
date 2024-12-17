type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>

type QueryTypes = 'enquiry' | 'support' | undefined

type Checkbox = 'checked' | 'unchecked'

interface IControlContext {
  field: string
  error: string | undefined
}

interface FormState {
  firstName: {
    value: string
    error: FormReducerError
  }
  lastName: {
    value: string
    error: FormReducerError
  }
  email: {
    value: string
    error: FormReducerError
  }
  queryType?: {
    value: QueryTypes
    error: FormReducerError
  }
  message: {
    value: string
    error: FormReducerError
  }
  agreeOnContact: { 
    value: Checkbox
    error: FormReducerError
  }
}

interface FormValues {
  firstName: string 
  lastName: string  
  email: string
  queryType: QueryTypes 
  message: string
  agreeOnContact: Checkbox
}

interface FormErrors {
  firstName: string
  lastName: string  
  email: string
  queryType: string 
  message: string
  agreeOnContact: string
}