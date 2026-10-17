import { members } from '@/entities/team-member'
import { CtaBanner, TelegramIcon } from '@/shared/ui'
import pic from '../assets/aboutPicture.png'
import { TeamGrid } from './TeamGrid'
import style from './TeamSection.module.css'

export function TeamSection() {
  return (
    <section className={style.root}>
      <header className={style.header}>
        <div className={style.intro}>
          <h1 className={style.title}>Три шага с нами</h1>
          <p className={style.description}>
            Британские учёные доказали, что долгое планирование не безопасно для вашего
            предвкушения. Мы не стали спорить. Собрали команду райдеров, путешественников и просто
            неравнодушных людей, чтобы сделать сложное проще. Будем знакомы?
          </p>
        </div>
        <img className={style.illustration} src={pic} alt="" />
      </header>
      <TeamGrid members={members} />
      <div className={style.banner}>
        <CtaBanner
          title="Хотите присоединиться?"
          description="Мы открыты к сотрудничеству и всегда рады людям, которые хотят делать классные продукты."
          action={{ label: 'Написать нам', href: '#', icon: <TelegramIcon /> }}
        />
      </div>
    </section>
  )
}
