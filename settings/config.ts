export interface HeroContent {
  greeting: string;
  name: string;
  handle: string;
  handleUrl: string;
  country: string;
  taglinePrefix: string;
  taglineHighlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  memberCount?: number;
  description?: string;
}

export interface ProjectBadge {
  label: string;
  href?: string;
}

export interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
  badges: ProjectBadge[];
}

export interface ProjectsConfig {
  eyebrow: string;
  highlight: string;
  items: Project[];
}

export interface ActivityConfig {
  title: string;
  subtitle: string;
  githubUsername: string;
}

export interface MetaConfig {
  title: string;
  description: string;
  openGraphImage: string;
}

export interface SiteConfig {
  meta: MetaConfig;
  hero: HeroContent;
  socials: SocialLink[];
  projects: ProjectsConfig;
  activity: ActivityConfig;
}

export const siteConfig: SiteConfig = {
  meta: {
    title: "fizz.blog",
    description: "15 Year old Designer & Fullstack Developer",
    openGraphImage: "/opengraph.png",
  },
  hero: {
    greeting: "Hey It's me",
    name: "Fizz",
    handle: "realfizz",
    handleUrl: "https://github.com/realfizz",
    country: "/uk.svg",
    taglinePrefix: "15 Year old",
    taglineHighlights: ["Designer", "Fullstack Developer"],
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/realfizz",
      description: "Check out my code",
    },
    {
      name: "Discord",
      url: "http://discord.com/users/1229934153454325843",
      description: "Let's chat",
    },
  ],
  projects: {
    eyebrow: "Check out my",
    highlight: "Projects",
    items: [
      {
        title: "AutoAce",
        description: "Request-based homework solver",
        href: "https://autoace.io",
        image: "/projects/autoace.png",
        badges: [
          { label: "next.js", href: "https://nextjs.org" },
          { label: "shadcn ui", href: "https://ui.shadcn.com" },
          { label: "hono", href: "https://hono.dev" },
        ],
      },
      {
        title: "Clutch",
        description: "Supabase for cheat developers",
        href: "https://clutch.cx",
        image: "/projects/clutch.png",
        badges: [
          { label: "next.js", href: "https://nextjs.org" },
          { label: "elysiaJS", href: "https://elysiajs.com" },
          { label: "drizzleORM", href: "https://orm.drizzle.team" },
        ],
      },
      {
        title: "Dumped",
        description: "Auto-Updating Offset API",
        href: "https://dumped.wtf",
        image: "/projects/dumpedwtf.png",
        badges: [
          { label: "next.js", href: "https://nextjs.org" },
          { label: "hono", href: "https://hono.dev" },
          { label: "kv-storage", href: "https://developers.cloudflare.com/kv" },
        ],
      },
    ],
  },
  activity: {
    title: "Fizz's",
    subtitle: "Github Activity:",
    githubUsername: "realfizz",
  },
};

