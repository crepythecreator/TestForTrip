import { LinkButton, PortfolioIcon, TelegramIcon } from '@/shared/ui'
import type { MemberAction } from '../../model/types'
import style from './MemberActions.module.css'

interface MemberActionsProps {
  contact: MemberAction
  portfolio: MemberAction
}

export function MemberActions({ contact, portfolio }: MemberActionsProps) {
  return (
    <div className={style.root}>
      <LinkButton className={style.action} href={contact.href} icon={<TelegramIcon />}>
        {contact.label}
      </LinkButton>
      <LinkButton className={style.action} href={portfolio.href} icon={<PortfolioIcon />}>
        {portfolio.label}
      </LinkButton>
    </div>
  )
}
