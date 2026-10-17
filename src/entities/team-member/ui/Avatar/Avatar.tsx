import style from './Avatar.module.css'

interface AvatarProps {
  src?: string
  alt: string
}

export function Avatar({ src, alt }: AvatarProps) {
  if (src) return <img className={style.root} src={src} alt={alt} />

  return (
    <svg className={style.root} viewBox="0 0 100 100" role="img" aria-label={alt}>
      <rect width="100" height="100" fill="#e1e1e1" />
      <circle cx="50" cy="38" r="20" fill="#fff" />
      <ellipse cx="50" cy="100" rx="32" ry="30" fill="#fff" />
    </svg>
  )
}
