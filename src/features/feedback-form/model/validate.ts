import type { FeedbackErrors, FeedbackValues } from './types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateFeedback(values: FeedbackValues): FeedbackErrors {
  const errors: FeedbackErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Введите имя (минимум 2 символа)'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Введите корректный email'
  if (values.message.trim().length < 10) errors.message = 'Сообщение должно быть не короче 10 символов'
  return errors
}
