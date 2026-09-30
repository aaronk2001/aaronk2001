import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { site, hero, proofStats, now, about, contact } from './content/site'
import { experience } from './content/experience'
import { projects as projectData } from './content/projects'
import { caseStudies as studyData } from './content/caseStudies'
import { skillClusters } from './content/skills'
import { certs } from './content/certs'
import type { CaseStudy, Media, Project, Track } from './content/types'

const projects: Project[] = projectData
const caseStudies: CaseStudy[] = studyData

const ROOT = path.resolve(import.meta.dir, '..')

// GitHub repo per project id. Only repos that are public at build time get linked.
const REPOS: Record<string, string> = {
  'pi-fleet': 'homelab',
  'robot-arm-v2': 'robot-arm',
  'linda-agent': 'linda',
  'yolov8-hailo': 'yolov8-hailo-pi5',
  'fpv-robot-cv': 'robotcar',
  'homelab-monitoring': 'homelab-monitoring-stack',
  'career-planner': 'ascent-career-os',
  walrus: 'walrus',
  polymarked: 'polymarked',
  'tts-app': 'text-to-speech',
  'phantom-studio': 'phantom',
  'plc-python-bridge': 'PLC-Controls',
  'plc-virtual-lab': 'PLC-Controls',
  'mmm-money-hub': 'mmm-app',
}

const publicRepos = new Set(
  (
    await Promise.all(
      [...new Set(Object.values(REPOS))].map(async r => {
        const res = await fetch(`https://github.com/aaronk2001/${r}`, { method: 'HEAD' })
        return res.ok ? r : ''
      }),
    )
  ).filter(Boolean),
)

const TRACKS: Record<Track, string> = {
  robotics: 'Robotics',
  controls: 'Controls & Automation',
  'cv-ml': 'Computer Vision & ML',
  fabrication: 'Fabrication',
  software: 'Software',
}

const shipped = projects.filter(p => p.status !== 'planned')
const repoUrl = (id: string) =>
  publicRepos.has(REPOS[id] ?? '') ? `https://github.com/aaronk2001/${REPOS[id]}` : undefined

// Asset paths in content are site-absolute (/work/x.svg); in the repo they live under assets/.
const asset = (src: string, depth: number) => `${'../'.repeat(depth)}assets${src}`

const imageOf = (m: Media | undefined) => (m && m.kind !== 'none' ? m : undefined)

function img(m: Media | undefined, depth: number, width: number) {
  const i = imageOf(m)
  if (!i) return ''
  const src = asset(i.kind === 'video' ? i.poster : i.src, depth)
  return `<img src="${src}" alt="${i.alt.replace(/"/g, '&quot;')}" width="${width}">`
}

function studyImage(cs: CaseStudy): Media | undefined {
  return (
    imageOf(cs.media) ??
    cs.chapters.map(c => imageOf(c.media)).find(Boolean) ??
    cs.projectIds.map(id => imageOf(projects.find(p => p.id === id)?.media)).find(Boolean)
  )
}

// GitHub heading anchor slugs
const anchor = (s: string) =>
  s.toLowerCase().trim().replace(/[^\p{L}\p{N} _-]/gu, '').replace(/ /g, '-')

const firstSentence = (s: string) => s.match(/^.*?[.!?](\s|$)/)?.[0].trim() ?? s

const bullets = (xs: string[]) => xs.map(x => `- ${x}`).join('\n')

const codeList = (xs: string[]) => xs.map(x => `\`${x}\``).join(' ')

function outcomeTable(os: { value: string; label: string }[]) {
  const cells = os.map(o => `<td align="center"><b>${o.value}</b><br><sub>${o.label}</sub></td>`)
  return `<table><tr>${cells.join('')}</tr></table>`
}

function grid(cells: string[], cols: number) {
  const rows: string[] = []
  for (let i = 0; i < cells.length; i += cols) {
    const row = cells.slice(i, i + cols)
    const w = Math.floor(100 / cols)
    rows.push(`<tr>\n${row.map(c => `<td width="${w}%" valign="top">\n\n${c}\n\n</td>`).join('\n')}\n</tr>`)
  }
  return `<table>\n${rows.join('\n')}\n</table>`
}

function readme() {
  const links = [
    `<a href="assets/resume.pdf"><b>Resume (PDF)</b></a>`,
    `<a href="${contact.linkedin}"><b>LinkedIn</b></a>`,
    `<a href="projects.md"><b>All projects</b></a>`,
  ].join(' &nbsp;|&nbsp; ')

  const work = grid(
    caseStudies.map(cs => {
      const href = `work/${cs.slug}.md`
      const pic = img(studyImage(cs), 0, 400)
      const top = cs.outcomes.slice(0, 2).map(o => `<b>${o.value}</b> ${o.label}`).join('<br>')
      return [
        pic && `<a href="${href}">${pic}</a>`,
        `### [${cs.title}](${href})`,
        `<sub>${cs.period} | ${cs.role}</sub>`,
        cs.subtitle,
        top,
      ].filter(Boolean).join('\n\n')
    }),
    2,
  )

  const exp = experience
    .map(e => {
      const hl = e.highlights.length ? `\n\n${codeList(e.highlights)}` : ''
      const note = e.note ? `<br><sub>${e.note}</sub>` : ''
      return `### ${e.role}\n**${e.org}** | ${e.dates}${note}\n\n${e.body}${hl}`
    })
    .join('\n\n')

  const trackOrder = Object.keys(TRACKS)
  const seen = new Set<string>()
  const featured = shipped
    .filter(p => imageOf(p.media))
    .sort((a, b) => trackOrder.indexOf(a.track) - trackOrder.indexOf(b.track))
    .filter(p => {
      const src = (p.media as { src: string }).src
      return !seen.has(src) && !!seen.add(src)
    })
  const projectGrid = grid(
    featured.map(p => {
      const href = `projects.md#${anchor(p.name)}`
      const repo = repoUrl(p.id)
      return [
        `<a href="${href}">${img(p.media, 0, 260)}</a>`,
        `**[${p.name}](${href})**`,
        `<sub>${firstSentence(p.summary)}</sub>`,
        repo && `<sub>[Source on GitHub](${repo})</sub>`,
      ].filter(Boolean).join('\n\n')
    }),
    3,
  )

  const skills = skillClusters
    .map(c => {
      const s = c.skills
        .filter(k => k.level !== 'learning')
        .map(k => (k.level === 'core' ? `**${k.name}**` : k.name))
      return `**${c.label}:** ${s.join(', ')}`
    })
    .join('<br>\n')

  const certRows = certs
    .filter(c => c.status !== 'planned')
    .map(c => `| [${c.name}](${c.url}) | ${c.issuer} | ${c.status === 'complete' ? (c.year ?? 'Complete') : 'In progress'} |`)

  const portrait = imageOf(about.portrait)

  return `<h1 align="center">${site.name}</h1>

<p align="center"><b>${site.role}</b> | ${site.location}</p>

<p align="center">${hero.valueLine}</p>

<p align="center">${links}</p>

${outcomeTable(proofStats)}

> ${hero.availability}

## About

<table><tr>
<td width="28%" valign="top">${portrait ? img(portrait, 0, 220) : ''}</td>
<td valign="top">

${about.paragraphs.join('\n\n')}

</td>
</tr></table>

## Selected work

${work}

## Experience

${exp}

## Projects

${projectGrid}

**[See all ${shipped.length} projects, grouped by discipline](projects.md)**

## Skills

${skills}

<details>
<summary><b>Education and certifications</b></summary>

| Credential | Issuer | Status |
|---|---|---|
${certRows.join('\n')}

</details>

## Now (${now.updated})

${now.items.map(i => `- **${i.title}:** ${i.detail}`).join('\n')}

## Contact

${contact.body} Reach me on [LinkedIn](${contact.linkedin}) or grab the [resume](assets/resume.pdf). Based in ${contact.location}.
`
}

function caseStudyPage(cs: CaseStudy) {
  const chapters = cs.chapters
    .map(ch => {
      const parts = [
        `## ${ch.title}`,
        ch.summary,
        imageOf(ch.media) && `<p align="center">${img(ch.media, 1, 720)}</p>`,
        `**Problem**\n\n${bullets(ch.problem)}`,
        `**Constraints**\n\n${bullets(ch.constraints)}`,
        `**What I built**\n\n${bullets(ch.built)}`,
        ch.outcomes.length && JSON.stringify(ch.outcomes) !== JSON.stringify(cs.outcomes) ? outcomeTable(ch.outcomes) : '',
        ch.videos?.length
          ? `**Video**\n\n${grid(
              ch.videos.map(
                v =>
                  `<a href="https://www.youtube.com/watch?v=${v.id}"><img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" width="100%"></a>\n\n<sub>${v.title} (${v.source})</sub>`,
              ),
              2,
            )}`
          : '',
      ]
      return parts.filter(Boolean).join('\n\n')
    })
    .join('\n\n')

  const related = cs.projectIds
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is Project => !!p && p.status !== 'planned')
    .map(p => `- [${p.name}](../projects.md#${anchor(p.name)})`)

  const hero = cs.media.kind !== 'none' ? `<p align="center">${img(cs.media, 1, 720)}</p>\n\n` : ''

  return `[Back to portfolio](../README.md)

# ${cs.title}

**${cs.subtitle}**<br>
<sub>${cs.period} | ${cs.role}</sub>

${hero}${cs.summary}

${outcomeTable(cs.outcomes)}

${codeList(cs.tech)}

${chapters}
${related.length ? `\n## Related projects\n\n${related.join('\n')}\n` : ''}${cs.disclosure ? `\n---\n\n<sub>${cs.disclosure}</sub>\n` : ''}`
}

function projectsPage() {
  const sections = (Object.keys(TRACKS) as Track[])
    .map(t => {
      const ps = shipped.filter(p => p.track === t)
      if (!ps.length) return ''
      const entries = ps.map(p => {
        const repo = repoUrl(p.id)
        const study = p.caseStudy && caseStudies.find(cs => cs.slug === p.caseStudy)
        const meta = [p.year, p.status === 'complete' ? 'Complete' : 'In progress'].join(' | ')
        const linkRow = [
          repo && `[Source on GitHub](${repo})`,
          study && `[Case study: ${study.title}](work/${study.slug}.md)`,
        ].filter(Boolean).join(' | ')
        return [
          `### ${p.name}`,
          `<sub>${meta}</sub>`,
          imageOf(p.media) && img(p.media, 0, 480),
          p.summary,
          p.outcomes?.length ? bullets(p.outcomes) : '',
          codeList(p.tech),
          linkRow,
          p.body.length ? `<details>\n<summary>How it works</summary>\n\n${p.body.join('\n\n')}\n\n</details>` : '',
        ].filter(Boolean).join('\n\n')
      })
      return `## ${TRACKS[t]}\n\n${entries.join('\n\n')}`
    })
    .filter(Boolean)

  const toc = (Object.keys(TRACKS) as Track[])
    .filter(t => shipped.some(p => p.track === t))
    .map(t => `[${TRACKS[t]}](#${anchor(TRACKS[t])})`)
    .join(' | ')

  return `[Back to portfolio](README.md)

# Projects

${shipped.length} projects across robotics, controls, vision and software. ${toc}

${sections.join('\n\n')}
`
}

const GUARDS: [string, RegExp][] = [
  ['phone number', /\(?\b\d{3}\)?[-. ]\d{3}[-. ]\d{4}\b/],
  ['email address', /[\w.+-]+@[\w-]+\.[a-z]{2,}/i],
  ['private finance data', /\bsalary\b|account balance/i],
  ['em/en dash or middle dot', /[—–·]/],
]

const outputs: Record<string, string> = {
  'README.md': readme(),
  'projects.md': projectsPage(),
  ...Object.fromEntries(caseStudies.map(cs => [`work/${cs.slug}.md`, caseStudyPage(cs)])),
}

for (const [file, text] of Object.entries(outputs)) {
  for (const [what, re] of GUARDS) {
    const m = text.match(re)
    if (m) throw new Error(`${file}: contains ${what}: "${m[0]}"`)
  }
  for (const [, src] of text.matchAll(/<img src="([^"]+)"/g)) {
    if (src.startsWith('http')) continue
    const full = path.resolve(ROOT, path.dirname(file), src)
    if (!existsSync(full)) throw new Error(`${file}: missing image ${src}`)
  }
}

mkdirSync(path.join(ROOT, 'work'), { recursive: true })
for (const [file, text] of Object.entries(outputs)) {
  writeFileSync(path.join(ROOT, file), text.replace(/\n{3,}/g, '\n\n'))
}
const hidden = [...new Set(Object.values(REPOS))].filter(r => !publicRepos.has(r))
console.log(`wrote ${Object.keys(outputs).length} files; linked public repos: ${[...publicRepos].join(', ') || 'none'}`)
if (hidden.length) console.log(`private (not linked): ${hidden.join(', ')}`)
