export const mainNavLinks = [
  { url: '/projects', label: 'Projects', iconName: 'FolderGit2' },
  { url: '/experience', label: 'Experience', iconName: 'Briefcase' },
  { url: '/resume', label: 'Resume', iconName: 'FileText' },
  { url: '/about', label: 'About me', iconName: 'User' }
]

export const subNavLinks = [
  { url: '/resume', label: 'Resume' },
  { url: 'https://github.com/kanha321', label: 'GitHub', external: true },
  { url: 'https://linkedin.com/in/kanha321', label: 'LinkedIn', external: true }
]

export const footerLinks = [
  { url: 'mailto:devkanhaji321@gmail.com', label: 'Email me', iconName: 'Mail' },
  { url: 'https://github.com/kanha321', label: 'GitHub', iconName: 'GitHub' },
  { url: 'https://linkedin.com/in/kanha321', label: 'LinkedIn', iconName: 'Linkedin' },
  { url: `${import.meta.env.BASE_URL}Shubhams_CV.pdf`, label: 'Download CV (PDF)', iconName: 'FileText', download: true }
]
