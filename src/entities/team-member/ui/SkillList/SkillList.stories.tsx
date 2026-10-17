import type { Meta, StoryObj } from '@storybook/react-vite'
import { SkillList } from './SkillList'

const meta = {
  component: SkillList,
  args: { skills: ['Yougile', 'Scrum', 'Kanban', 'Miro', 'Notion', 'Google Таблицы'] },
  decorators: [(Story) => <div style={{ width: 296 }}><Story /></div>],
} satisfies Meta<typeof SkillList>
export default meta

export const Default: StoryObj<typeof meta> = {}

export const Few: StoryObj<typeof meta> = { args: { skills: ['Scrum', 'Miro'] } }
