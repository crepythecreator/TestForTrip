import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemberBio } from './MemberBio'

const meta = {
  component: MemberBio,
  args: {
    paragraphs: [
      'Местный решала. Держит в фокусе задачи, сроки, людей и всё остальное, что каким-то образом должно однажды превратиться в работающий продукт.',
      'В свободное от решений время она в походах, на горе или несётся к новым горизонтам.',
    ],
  },
  decorators: [(Story) => <div style={{ width: 296 }}><Story /></div>],
} satisfies Meta<typeof MemberBio>
export default meta

export const Default: StoryObj<typeof meta> = {}

export const SingleParagraph: StoryObj<typeof meta> = {
  args: { paragraphs: ['Короткое описание.'] },
}
