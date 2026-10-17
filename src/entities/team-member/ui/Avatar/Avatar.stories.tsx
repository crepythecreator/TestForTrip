import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

const meta = { component: Avatar, args: { alt: 'Аватар' } } satisfies Meta<typeof Avatar>
export default meta

type Story = StoryObj<typeof meta>

export const Placeholder: Story = {}

export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/226?img=47' },
}
