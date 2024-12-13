/** For contexts: **/
interface IControlContext {
  field: string
  error: string
}

/** For hooks/utils: **/
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
interface FormReducerAction { 
  field: string
  value: any /* NOTE: Formerly "string | QueryTypes | Checkbox"; Overload issue will be looked after */
}