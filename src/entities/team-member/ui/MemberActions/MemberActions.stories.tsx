import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemberActions } from './MemberActions'

const meta = {
  component: MemberActions,
  args: {
    contact: { label: 'Написать', href: '#' },
    portfolio: { label: 'Портфолио', href: '#' },
  },
  decorators: [(Story) => <div style={{ width: 296 }}><Story /></div>],
} satisfies Meta<typeof MemberActions>
export default meta

export const Default: StoryObj<typeof meta> = {}
