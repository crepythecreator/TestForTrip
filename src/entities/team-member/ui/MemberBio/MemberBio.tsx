import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import style from './MemberBio.module.css'

interface MemberBioProps {
  paragraphs: string[]
}

export function MemberBio({ paragraphs }: MemberBioProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [lines, setLines] = useState<number>()

  // Сколько строк помещается в доступную высоту — столько и показываем, остальное обрезаем с «…»
  useLayoutEffect(() => {
    const root = rootRef.current
    const text = textRef.current
    if (!root || !text) return

    const update = () => {
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight)
      if (lineHeight > 0) setLines(Math.max(1, Math.floor(root.clientHeight / lineHeight)))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef} className={style.root}>
      <p
        ref={textRef}
        className={style.text}
        style={{ '--lines': lines } as CSSProperties}
      >
        {paragraphs.join('\n\n')}
      </p>
    </div>
  )
}
