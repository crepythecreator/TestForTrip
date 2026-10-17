import style from './MemberHeader.module.css'

interface MemberHeaderProps {
  firstName: string
  lastName: string
  role: string
}

export function MemberHeader({ firstName, lastName, role }: MemberHeaderProps) {
  return (
    <div className={style.root}>
      <h2 className={style.firstName}>{firstName}</h2>
      <p className={style.lastName}>{lastName}</p>
      <p className={style.role}>{role}</p>
    </div>
  )
}
