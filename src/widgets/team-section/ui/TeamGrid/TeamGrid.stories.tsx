import type { Meta, StoryObj } from '@storybook/react-vite'
import { TeamGrid } from './TeamGrid'

const member = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  role: 'Project Manager',
  bio: [
    'Местный решала. Держит в фокусе задачи, сроки, людей и всё остальное, что каким-то образом должно однажды превратиться в работающий продукт.',
    'В свободное от решений время она в походах, на горе или несётся к новым горизонтам.',
  ],
  skills: ['Yougile', 'Scrum', 'Kanban', 'Miro', 'Notion', 'Google Таблицы'],
  contactAction: { label: 'Написать', href: '#' },
  portfolioAction: { label: 'Портфолио', href: '#' },
}

const meta = {
  component: TeamGrid,
  parameters: { layout: 'padded' },
  args: {
    members: Array.from({ length: 7 }, (_, i) => ({ ...member, id: String(i) })),
  },
} satisfies Meta<typeof TeamGrid>
export default meta

export const Default: StoryObj<typeof meta> = {}
