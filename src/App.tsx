import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDown, ArrowLeftRight, ArrowRight, ArrowUpRight, Cable, Check, ChevronDown,
  CircuitBoard, Globe2, Menu, PackageCheck, RadioTower, Router, ShieldCheck,
  X,
} from 'lucide-react'
import { siteConfig } from './siteConfig'

gsap.registerPlugin(ScrollTrigger)

const A = '/assets/'

const capabilities = [
  {
    number: '01',
    title: 'Networking equipment',
    description: 'Network hardware for business connectivity, wireless access, and data communication needs.',
    image: `${A}networking-equipment.webp`,
    icon: Router,
    tags: ['Switches', 'Routers', 'Wireless'],
  },
  {
    number: '02',
    title: 'Telecom & connectivity',
    description: 'Telecommunications and connectivity products selected around each supply requirement.',
    image: `${A}fiber-cabling.webp`,
    icon: Cable,
    tags: ['Fiber', 'Cabling', 'Connectivity'],
  },
  {
    number: '03',
    title: 'Security technology',
    description: 'Security and access-control equipment supplied for commercial and institutional needs.',
    image: `${A}cctv-security.webp`,
    icon: ShieldCheck,
    tags: ['CCTV', 'Access control', 'Equipment'],
  },
  {
    number: '04',
    title: 'Data center & IT',
    description: 'Equipment for data-center, computing, and technology infrastructure requirements.',
    image: `${A}data-center.webp`,
    icon: CircuitBoard,
    tags: ['Racks', 'IT equipment', 'Infrastructure'],
  },
]

const steps = [
  { n: '01', title: 'Specify', text: 'Share the equipment, quantities, technical requirements, and destination.' },
  { n: '02', title: 'Source', text: 'Identify suitable products through international suppliers and manufacturers.' },
  { n: '03', title: 'Trade & supply', text: 'Coordinate the agreed import or export and equipment supply requirements.' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)
  const links = [
    ['Products', '#capabilities'],
    ['Supply process', '#approach'],
    ['Import & export', '#trade'],
    ['About', '#about'],
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="NOUR home" onClick={close}>
          <img src={`${A}nour-logo.png`} alt="NOUR" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
          {links.map(([label, href], i) => <motion.a key={href} href={href} onClick={close} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }}>{label}<ArrowUpRight size={16} /></motion.a>)}
          <a className="mobile-contact" href="#contact" onClick={close}>Start a conversation <ArrowRight size={16} /></a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-mark" />{children}</div>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-image" role="img" aria-label="Communications technology equipment in a blue-lit setting" />
    <div className="hero-grid" />
    <div className="hero-glow" />
    <div className="hero-content wrap">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <Eyebrow light>GLOBAL SOURCING · IMPORT & EXPORT</Eyebrow>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>
        Technology sourced<br /><span className="gradient-text">across borders.</span>
      </motion.h1>
      <motion.p className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>
        Import, export, and supply of communication systems and technology equipment for businesses and organizations.
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .27 }}>
        <a className="button button-primary" href="#capabilities">Explore product areas <ArrowRight size={17} /></a>
        <a className="text-link" href="#trade">How we trade <ArrowUpRight size={15} /></a>
      </motion.div>
      <motion.div className="hero-foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
        <span className="hero-scroll"><ArrowDown size={14} /> SCROLL TO EXPLORE</span>
        <span className="hero-foot-line" />
        <span className="hero-index">01 <i /> 03</span>
      </motion.div>
    </div>
    <div className="hero-side-label">SOURCED ACROSS BORDERS</div>
  </section>
}

function IntroStrip() {
  return <section className="intro-strip">
    <div className="wrap intro-inner">
      <span className="intro-label">THE NOUR TRADE MODEL</span>
      <p>Source globally. <em>Supply with clarity.</em></p>
      <div className="intro-orbit" aria-hidden="true"><span /><span /><span /></div>
    </div>
  </section>
}

function Capabilities() {
  return <section className="section capabilities-section" id="capabilities">
    <div className="wrap">
      <div className="section-heading split-heading reveal">
        <div><Eyebrow>WHAT WE TRADE</Eyebrow><h2>Technology for a<br /><span className="muted-title">connected world.</span></h2></div>
        <p>Explore the communications, networking, security, and IT equipment categories NOUR works with.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((item) => {
          const Icon = item.icon
          return <motion.article className="capability-card reveal" key={item.number} whileHover={{ y: -6 }} transition={{ duration: .25 }}>
            <div className="cap-image-wrap"><img src={item.image} alt={item.title} loading="lazy" /><span className="cap-number">{item.number}</span><span className="cap-icon"><Icon size={19} strokeWidth={1.6} /></span><span className="image-shade" /></div>
            <div className="cap-body"><div className="cap-heading"><h3>{item.title}</h3><ArrowUpRight size={18} /></div><p>{item.description}</p><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </motion.article>
        })}
      </div>
    </div>
  </section>
}

function Approach() {
  return <section className="section approach-section" id="approach">
    <div className="wrap approach-layout">
      <div className="approach-intro reveal"><Eyebrow>FROM REQUEST TO SUPPLY</Eyebrow><h2>Trade that starts<br />with <span className="gradient-text">clarity.</span></h2><p>We focus on the commercial flow behind technology supply: understand the requirement, identify suitable products, and coordinate the agreed cross-border trade.</p><a className="text-link" href="#contact">Discuss a sourcing request <ArrowRight size={16} /></a>
        <div className="approach-rings" aria-hidden="true"><span /><span /><span /><i /></div>
      </div>
      <div className="steps-list">
        {steps.map((step, i) => <motion.div className="step-row reveal" key={step.n} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .5, delay: i * .1 }}>
          <span className="step-number">{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="step-check"><Check size={15} /></span>
        </motion.div>)}
      </div>
    </div>
  </section>
}

function Trade() {
  const tradeStages = [
    { n: '01', title: 'International sourcing', text: 'Connect equipment requirements with suitable global suppliers and manufacturers.', icon: Globe2 },
    { n: '02', title: 'Import & export', text: 'Coordinate cross-border trade for communications and technology products.', icon: ArrowLeftRight },
    { n: '03', title: 'Equipment supply', text: 'Supply the agreed products to businesses and organizations.', icon: PackageCheck },
  ]
  return <section className="section trade-section" id="trade">
    <div className="wrap">
      <div className="section-heading environments-heading reveal">
        <div><Eyebrow>THE NOUR TRADE MODEL</Eyebrow><h2>From global source<br /><span className="muted-title">to equipment supply.</span></h2></div>
        <p>A clear path for organizations looking to source communications and technology equipment across borders.</p>
      </div>
      <div className="trade-grid">
        {tradeStages.map(({ n, title, text, icon: Icon }) => <motion.article className="trade-card reveal" key={n} whileHover={{ y: -5 }}>
            <div className="trade-card-top"><span>{n}</span><span className="trade-card-icon"><Icon size={19} /></span></div>
            <h3>{title}</h3><p>{text}</p><span className="trade-card-line" />
          </motion.article>
        )}
      </div>
      <div className="trade-route reveal"><span>REQUIREMENT</span><i /><span>SOURCING</span><i /><span>CROSS-BORDER TRADE</span><i /><span>SUPPLY</span></div>
    </div>
  </section>
}

function About() {
  return <section className="section about-section" id="about">
    <div className="wrap about-layout">
      <div className="about-visual trade-visual reveal" aria-label="Illustration of international trade connections">
        <div className="trade-visual-top"><span>INTERNATIONAL TRADE</span><span>NO / 01</span></div>
        <div className="trade-globe"><span className="trade-orbit orbit-a" /><span className="trade-orbit orbit-b" /><span className="trade-orbit orbit-c" /><span className="trade-globe-core"><Globe2 size={70} strokeWidth={1} /></span><i className="trade-node node-a" /><i className="trade-node node-b" /><i className="trade-node node-c" /></div>
        <div className="trade-visual-bottom"><span><i /> SOURCE</span><ArrowRight size={14} /><span><i /> TRADE</span><ArrowRight size={14} /><span><i /> SUPPLY</span></div>
      </div>
      <div className="about-copy reveal"><Eyebrow>ABOUT NOUR</Eyebrow><h2>Connecting markets<br />with <span className="gradient-text">technology.</span></h2><p className="about-lead">NOUR focuses on import, export, and supply of communication systems and technology equipment.</p><p>We connect product requirements with international sourcing and cross-border trade, helping organizations access the equipment they need.</p><div className="about-points"><span><Globe2 size={17} /> International sourcing</span><span><RadioTower size={17} /> Communications equipment</span></div><a className="text-link" href="#contact">Start a sourcing conversation <ArrowRight size={16} /></a></div>
    </div>
  </section>
}

function Contact() {
  const [status, setStatus] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (!name || !email || !message) return
    if (!siteConfig.contactEmail) {
      setStatus('The enquiry form is ready. Add NOUR’s approved business email in src/siteConfig.ts to enable sending.')
      return
    }
    const subject = encodeURIComponent(`Website enquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
    setStatus('Your email app is opening with your enquiry.')
  }

  return <section className="contact-section" id="contact">
    <div className="contact-glow" aria-hidden="true" />
    <div className="wrap contact-layout">
      <div className="contact-copy reveal"><Eyebrow light>LET’S CONNECT</Eyebrow><h2>Let’s source<br /><span className="gradient-text">what you need.</span></h2><p>Looking for a communication system or technology product? Share the equipment, quantity, and destination you have in mind.</p><div className="contact-direct"><span className="contact-dot" /> START A TRADE ENQUIRY</div></div>
      <form className="contact-form reveal" onSubmit={submit}>
        <div className="form-top"><span>YOUR EQUIPMENT ENQUIRY</span><span>01 — 03</span></div>
        <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
        <label>Business email<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
        <label>What are you looking for?<textarea name="message" rows={3} placeholder="Product, quantity, and destination…" required /></label>
        <button className="button button-primary form-submit" type="submit">Send an equipment enquiry <ArrowRight size={16} /></button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </div>
  </section>
}

function Footer() {
  return <footer className="site-footer"><div className="wrap footer-main"><a className="footer-brand" href="#top"><img src={`${A}nour-logo.png`} alt="NOUR" /></a><p>Communications equipment<br />sourced across borders.</p><a className="back-top" href="#top">Back to top <ArrowUpRight size={15} /></a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} NOUR. All rights reserved.</span><span>Import · Export · Technology supply</span><a href="#top">alnour-group.com <ArrowUpRight size={13} /></a></div></footer>
}

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: .85 })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 26 }, {
          opacity: 1, y: 0, duration: .72, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })
    })

    return () => { cancelAnimationFrame(frame); lenis.destroy(); ctx.revert() }
  }, [])

  return <>
    <div className="announcement"><span className="announcement-dot" /> Global sourcing · Import & export · Technology supply <ChevronDown size={13} /></div>
    <Header />
    <main>
      <Hero />
      <IntroStrip />
      <Capabilities />
      <Approach />
      <Trade />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
}
