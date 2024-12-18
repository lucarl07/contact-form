type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>

type QueryTypes = 'enquiry' | 'support' | undefined

type Checkbox = 'checked' | 'unchecked'

interface IControlContext {
  field: string
  error: string
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