import { useState } from 'react';

export default function useFormState() {
  const useCustomHook = useState<FormState>({ 
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
  })

  return useCustomHook;
}
