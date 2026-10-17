import type { Meta, StoryObj } from '@storybook/react-vite'
import { TeamSection } from './TeamSection'

const meta = {
  component: TeamSection,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TeamSection>
export default meta

export const Default: StoryObj<typeof meta> = {}
