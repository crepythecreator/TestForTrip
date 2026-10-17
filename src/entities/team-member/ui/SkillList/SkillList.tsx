import style from './SkillList.module.css'

interface SkillListProps {
  skills: string[]
}

export function SkillList({ skills }: SkillListProps) {
  return (
    <ul className={style.root}>
      {skills.map((skill) => (
        <li key={skill} className={style.item}>
          {skill}
        </li>
      ))}
    </ul>
  )
}
