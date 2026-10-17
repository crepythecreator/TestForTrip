import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import '../field.css'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function TextField({ label, error, ...props }: TextFieldProps) {
  const id = useId()
  return (
    <div className="ui-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />
      {error && <span id={`${id}-err`} className="ui-field__error" role="alert">{error}</span>}
    </div>
  )
}
