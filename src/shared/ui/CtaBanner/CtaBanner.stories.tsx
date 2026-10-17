import type { Meta, StoryObj } from '@storybook/react-vite'
import { TelegramIcon } from '../icons'
import { CtaBanner } from './CtaBanner'

const meta = {
  component: CtaBanner,
  parameters: { layout: 'padded' },
  args: {
    title: 'Хотите присоединиться?',
    description:
      'Мы открыты к сотрудничеству и всегда рады людям, которые хотят делать классные продукты.',
    action: { label: 'Написать нам', href: '#', icon: <TelegramIcon /> },
  },
} satisfies Meta<typeof CtaBanner>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutIcon: Story = {
  args: { action: { label: 'Откликнуться', href: '#' } },
}
