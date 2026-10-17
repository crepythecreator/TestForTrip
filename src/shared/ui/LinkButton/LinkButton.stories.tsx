import type { Meta, StoryObj } from '@storybook/react-vite'
import { PortfolioIcon, TelegramIcon } from '../icons'
import { LinkButton } from './LinkButton'

const meta = {
  component: LinkButton,
  args: { href: '#', children: 'Написать', icon: <TelegramIcon /> },
} satisfies Meta<typeof LinkButton>
export default meta

type Story = StoryObj<typeof meta>

export const Shadow: Story = {}

export const Outline: Story = { args: { variant: 'outline', children: 'Написать нам' } }

export const OtherIcon: Story = { args: { children: 'Портфолио', icon: <PortfolioIcon /> } }

export const WithoutIcon: Story = { args: { icon: undefined } }
