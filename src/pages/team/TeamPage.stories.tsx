import type { Meta, StoryObj } from '@storybook/react-vite'
import { TeamPage } from './TeamPage'

const meta = {
  component: TeamPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TeamPage>
export default meta

export const Default: StoryObj<typeof meta> = {}
