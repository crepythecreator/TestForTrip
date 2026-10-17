import type { MemberCardData } from '../../model/types'
import { Avatar } from '../Avatar'
import { MemberActions } from '../MemberActions'
import { MemberBio } from '../MemberBio'
import { MemberHeader } from '../MemberHeader'
import { SkillList } from '../SkillList'
import style from './MemberCard.module.css'

export function MemberCard({
  firstName,
  lastName,
  role,
  bio,
  skills,
  avatarUrl,
  contactAction,
  portfolioAction,
}: MemberCardData) {
  return (
    <article className={style.root}>
      <div className={style.top}>
        <Avatar src={avatarUrl} alt={`${firstName} ${lastName}`} />
        <MemberHeader firstName={firstName} lastName={lastName} role={role} />
      </div>
      <MemberBio paragraphs={bio} />
      <div className={style.bottom}>
        <SkillList skills={skills} />
        <hr className={style.divider} />
        <MemberActions contact={contactAction} portfolio={portfolioAction} />
      </div>
    </article>
  )
}
