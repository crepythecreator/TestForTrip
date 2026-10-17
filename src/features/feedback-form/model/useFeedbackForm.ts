import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { submitFeedback } from '../api/submitFeedback'
import type { FeedbackErrors, FeedbackValues } from './types'
import { validateFeedback } from './validate'

const initialValues: FeedbackValues = { name: '', email: '', message: '' }

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useFeedbackForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<FeedbackErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'submitting') setStatus('idle')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validateFeedback(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')
    try {
      await submitFeedback(values)
      setValues(initialValues)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { values, errors, status, handleChange, handleSubmit }
}
