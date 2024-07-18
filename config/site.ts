export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Сайт на NextUI",
  description: "Сайт с применением технологий Next.js и NextUI.",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Блог",
      href: "/blog",
    },
    {
      label: "Что это",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Профиль",
      href: "/profile",
    },
    {
      label: "Проекты",
      href: "/projects",
    },
    {
      label: "Команда",
      href: "/team",
    },
    {
      label: "Настройки",
      href: "/settings",
    },
    {
      label: "Помощь",
      href: "/help-feedback",
    },
    {
      label: "Выйти",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/21trew",
    telegram: "https://web.telegram.org/k/#@IAm21Trew",
    blog: "https://web.telegram.org/k/#@dev_from0to1",
    discord: "https://discord.gg/21trew",
    email: "mailto:21trew@gmail.com",
  },
};
