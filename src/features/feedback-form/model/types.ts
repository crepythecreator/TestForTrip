export interface FeedbackValues {
  name: string
  email: string
  message: string
}

export type FeedbackErrors = Partial<Record<keyof FeedbackValues, string>>
