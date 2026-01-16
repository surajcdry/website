type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  // {
  //   name: 'AutoWallX',
  //   description:
  //     'A mac app to switch wallpapers according to the appearance of the mac (dark mode and light mode).',
  //   link: 'https://github.com/surajcdry/AutoWallX',
  //   video:
  //     '#',
  //   id: 'project1',
  // },
  // {
  //   name: 'cookWithThis',
  //   description: 'React app to find recipes with the ingredients that you have. Uses Groq API.',
  //   link: 'https://surajcdry.github.io/cookWithThis/',
  //   video:
  //     'https://youtu.be/Fb9n-d-zrws',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  // {
  //   company: 'Academic Center @ St. Joseph\'s University',
  //   title: 'STEM Peer Tutor',
  //   start: 'Aug 2025',
  //   end: 'Present',
  //   link: 'https://sjny.edu',
  //   id: 'work1',
  // },
  // {
  //   company: 'Computer Club @ St. Joseph\'s University',
  //   title: 'President',
  //   start: '2024',
  //   end: 'President',
  //   link: 'https://engage.sjcny.edu/organization/sjc2',
  //   id: 'work2',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/surajcdry',
  },
  {
    label: 'X',
    link: 'https://x.com/surajcdry',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/surajcdry',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/surajcdry',
  },
]

export const EMAIL = 'suraj@surajc.com'
