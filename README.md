# Три шага с нами

Секция «Команда» с заголовком, вводным текстом, сеткой из 11 карточек участников и CTA-блоком «Хотите присоединиться?».

Стек: React 19, TypeScript, Vite, CSS Modules, Storybook.

## Запуск

```bash
npm install
npm run dev
```

Приложение откроется на http://localhost:5173.

| Команда                   | Что делает                           |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | dev-сервер приложения                |
| `npm run build`           | проверка типов и production-сборка   |
| `npm run preview`         | предпросмотр собранного приложения   |
| `npm run lint`            | проверка ESLint                      |
| `npm run storybook`       | Storybook на http://localhost:6006   |
| `npm run build-storybook` | статическая сборка Storybook         |

## Storybook

Каждый компонент можно посмотреть отдельно в Storybook: у всех есть `*.stories.tsx` рядом с компонентом.

```bash
npm run storybook
```

В нём доступны:

- **shared/ui**: `LinkButton`, `CtaBanner`;
- **entities/team-member**: `MemberCard`, `Avatar`, `MemberHeader`, `MemberBio`, `SkillList`, `MemberActions`;
- **widgets/team-section**: `TeamSection`, `TeamGrid`;
- **pages/team**: `TeamPage` целиком.

## Структура (Feature-Sliced Design)

```
src/
  app/                  точка входа и глобальные стили
  pages/team/           страница, только собирает виджет
  widgets/team-section/ заголовок, текст, сетка карточек и CTA
  entities/team-member/ карточка участника и данные
    model/members.ts    массив участников
  shared/ui/            переиспользуемые компоненты и иконки
```

Данные участников лежат в [src/entities/team-member/model/members.ts](src/entities/team-member/model/members.ts), карточка получает их через пропсы.
