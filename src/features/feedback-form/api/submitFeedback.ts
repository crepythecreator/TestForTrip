import type { FeedbackValues } from '../model/types'

// Заглушка: замените на реальный запрос к бэкенду.
export async function submitFeedback(values: FeedbackValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  console.info('Feedback sent', values)
}
