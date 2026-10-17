import { FeedbackForm } from '@/features/feedback-form'
import './FeedbackSection.css'

export function FeedbackSection() {
  return (
    <section className="feedback-section">
      <h1>Обратная связь</h1>
      <p>Расскажите, что думаете, — мы ответим на указанный email.</p>
      <FeedbackForm />
    </section>
  )
}
