import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemberCard } from './MemberCard'

const meta = {
  component: MemberCard,
  args: {
    firstName: 'Имя',
    lastName: 'Фамилия',
    role: 'Project Manager',
    bio: [
      'Местный решала. Держит в фокусе задачи, сроки, людей и всё остальное, что каким-то образом должно однажды превратиться в работающий продукт.',
      'В свободное от решений время она в походах, на горе или несётся к новым горизонтам. Команда её очень боится любит, поэтому старается не отвлекать.',
    ],
    skills: ['Yougile', 'Scrum', 'Kanban', 'Miro', 'Notion', 'Google Таблицы'],
    contactAction: { label: 'Написать', href: '#' },
    portfolioAction: { label: 'Портфолио', href: '#' },
  },
} satisfies Meta<typeof MemberCard>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAvatar: Story = {
  args: { avatarUrl: 'https://i.pravatar.cc/226?img=47' },
}
