export type Track = 'robotics' | 'controls' | 'fabrication' | 'cv-ml' | 'software'
export type ProjectStatus = 'complete' | 'in-progress' | 'planned'
export type Level = 'core' | 'working' | 'learning'
export type CertStatus = 'complete' | 'in-progress' | 'planned'

export type Media =
 | { kind: 'image'; src: string; alt: string; width: number; height: number; caption?: string }
 | { kind: 'video'; src: string; poster: string; alt: string; width: number; height: number; caption?: string }
 | { kind: 'none' }

export interface Project {
 id: string
 name: string
 track: Track
 status: ProjectStatus
 year: string
 summary: string
 body: string[]
 tech: string[]
 outcomes?: string[]
 next?: string[]
 media: Media
 links?: { label: string; href: string }[]
 caseStudy?: string
 skills?: string[]
 // true pins a project into Selected work, false keeps a complete one out
 featured?: boolean
}

export interface Outcome { value: string; label: string }

export interface Chapter {
 id: string
 title: string
 summary?: string
 problem: string[]
 constraints: string[]
 built: string[]
 outcomes: Outcome[]
 media?: Media
 videos?: { id: string; title: string; source: string }[]
}

export interface CaseStudy {
 slug: string
 flagship: boolean
 title: string
 subtitle: string
 period: string
 role: string
 summary: string
 outcomes: Outcome[]
 tech: string[]
 media: Media
 chapters: Chapter[]
 disclosure?: string
 projectIds: string[]
}

export interface Skill { name: string; url: string; level: Level; note: string; projects?: string[] }
export interface SkillCluster { id: string; label: string; skills: Skill[] }
export interface Cert { id: string; name: string; issuer: string; status: CertStatus; url: string; year?: string; note: string }
export interface ExperienceEntry { org: string; role: string; dates: string; note?: string; body: string; highlights: string[] }
export interface Stat { id: string; value: string; label: string; sub?: string }
export interface NowBlock { updated: string; items: { title: string; detail: string }[] }
export interface AboutBlock { paragraphs: string[]; quote?: string; portrait: Media }
export interface ContactBlock { heading: string; body: string; linkedin: string; resume: string; location: string }
export interface Site {
 name: string
 role: string
 tagline: string
 location: string
 url: string
 description: string
 nav: { label: string; href: string }[]
 keywords: string[]
}
