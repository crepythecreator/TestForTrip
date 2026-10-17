import { useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import '../field.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function TextArea({ label, error, ...props }: TextAreaProps) {
  const id = useId()
  return (
    <div className="ui-field">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} rows={5} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />
      {error && <span id={`${id}-err`} className="ui-field__error" role="alert">{error}</span>}
    </div>
  )
}
