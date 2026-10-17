import { Button, TextArea, TextField } from '@/shared/ui'
import { useFeedbackForm } from '../model/useFeedbackForm'
import './FeedbackForm.css'

export function FeedbackForm() {
  const { values, errors, status, handleChange, handleSubmit } = useFeedbackForm()

  return (
    <form className="feedback-form" onSubmit={handleSubmit} noValidate>
      <TextField label="Имя" name="name" autoComplete="name" value={values.name} onChange={handleChange} error={errors.name} />
      <TextField label="Email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} error={errors.email} />
      <TextArea label="Сообщение" name="message" value={values.message} onChange={handleChange} error={errors.message} />

      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Отправка…' : 'Отправить'}
      </Button>

      {status === 'success' && <p className="feedback-form__status feedback-form__status--ok" role="status">Спасибо! Сообщение отправлено.</p>}
      {status === 'error' && <p className="feedback-form__status feedback-form__status--err" role="alert">Не удалось отправить. Попробуйте ещё раз.</p>}
    </form>
  )
}
