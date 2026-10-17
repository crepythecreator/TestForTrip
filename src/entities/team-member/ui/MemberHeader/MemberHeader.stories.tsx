import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemberHeader } from './MemberHeader'

const meta = {
  component: MemberHeader,
  args: { firstName: 'Имя', lastName: 'Фамилия', role: 'Project Manager' },
} satisfies Meta<typeof MemberHeader>
export default meta

export const Default: StoryObj<typeof meta> = {}
