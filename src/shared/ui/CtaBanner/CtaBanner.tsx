import type { ReactNode } from 'react'
import { LinkButton } from '../LinkButton'
import style from './CtaBanner.module.css'

interface CtaBannerProps {
  title: string
  description: string
  action: {
    label: string
    href: string
    icon?: ReactNode
  }
}

export function CtaBanner({ title, description, action }: CtaBannerProps) {
  return (
    <section className={style.root}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      <LinkButton variant="outline" href={action.href} icon={action.icon}>
        {action.label}
      </LinkButton>
    </section>
  )
}
