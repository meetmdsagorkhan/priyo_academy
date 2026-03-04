'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  BrainCircuit,
  CreditCard,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users
} from 'lucide-react';
import CourseShowcaseTable from '@/components/course-showcase-table';
import ThemeToggle from '@/components/theme-toggle';
import WebinarTable from '@/components/webinar-table';

const courseItems = [
  { title: 'Full-Stack Web Development Bootcamp', mentor: 'Tanvir Hasan', duration: '16 Weeks', fee: '৳12,500', rating: 4.9, batch: 'Featured' as const, cta: 'Apply for Evaluation' },
  { title: 'UI/UX Design for Product Teams', mentor: 'Nusrat Jahan', duration: '12 Weeks', fee: '৳9,900', rating: 4.8, batch: 'Featured' as const, cta: 'Apply for Evaluation' },
  { title: 'Data Analytics with Python', mentor: 'Rahat Sarker', duration: '12 Weeks', fee: '৳10,500', rating: 4.8, batch: 'Featured' as const, cta: 'Apply for Evaluation' },
  { title: 'Freelancing Launchpad (Evening Batch)', mentor: 'Sabbir Ahmed', duration: 'Starts 18 June 2026', fee: '৳6,500', batch: 'Upcoming Batch' as const, cta: 'Apply for Evaluation' },
  { title: 'Digital Marketing Sprint', mentor: 'Shadman Khan', duration: 'Starts 25 June 2026', fee: '৳8,400', batch: 'Upcoming Batch' as const, cta: 'Apply for Evaluation' },
  { title: 'Motion Graphics Career Track', mentor: 'Afsana Noor', duration: 'Starts 02 July 2026', fee: '৳11,200', batch: 'Upcoming Batch' as const, cta: 'Apply for Evaluation' }
];

const webinars = [
  { title: 'How Beginners Can Start Earning in 90 Days', host: 'Career Success Team', schedule: '12 June 2026 • 8:30 PM', access: 'Free', cta: 'Register Free', type: 'Upcoming' as const },
  { title: 'AI Tools for Freelancers in Bangladesh', host: 'Industry Panel', schedule: '19 June 2026 • 9:00 PM', access: 'Free', cta: 'Register Free', type: 'Upcoming' as const },
  { title: 'Portfolio Review Live Session', host: 'Mentor Circle', schedule: '27 June 2026 • 8:00 PM', access: '৳199', cta: 'Book Spot', type: 'Upcoming' as const },
  { title: 'Roadmap to Remote Jobs from Bangladesh', host: 'Priyo Mentors', schedule: '2,300+ attended', access: 'Replay Available', cta: 'Watch Replay', type: 'Previous' as const },
  { title: 'Winning Your First Upwork Client', host: 'Freelancer Panel', schedule: '1,900+ attended', access: 'Replay Available', cta: 'Watch Replay', type: 'Previous' as const },
  { title: 'CV & LinkedIn Optimization Masterclass', host: 'HR Experts', schedule: '1,400+ attended', access: 'Replay Available', cta: 'Watch Replay', type: 'Previous' as const }
];

const features = [
  { feature: 'Industry Expert Mentors', icon: Users },
  { feature: 'Live & Recorded Classes', icon: BadgeCheck },
  { feature: 'Real Projects', icon: GraduationCap },
  { feature: 'Job Placement Support', icon: BriefcaseBusiness },
  { feature: 'Secure Payment via Priyo Pay', icon: ShieldCheck }
];

const admissionSteps = [
  {
    title: 'Create Your Talent Profile',
    text: 'Open a professional profile at work.priyo.com so we can understand your skills, interests, learning goals, and career direction.',
    icon: Users
  },
  {
    title: 'AI-Based Eligibility Assessment',
    text: 'Our intelligent system evaluates profile strength, skill level, learning readiness, and career alignment before course placement.',
    icon: BrainCircuit
  },
  {
    title: 'Selective Enrollment',
    text: 'We admit committed, goal-driven learners only. Eligible applicants get access; others receive better-fit guidance.',
    icon: UserCheck
  }
];

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-brand-gradient shadow-glow" />
            <div>
              <p className="font-semibold">Priyo Academy</p>
              <p className="text-xs text-slate-400">Learn → Work → Earn → Paid</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#courses" className="hover:text-brand-500">Programs</a>
            <a href="#ecosystem" className="hover:text-brand-500">Ecosystem</a>
            <a href="#admission" className="hover:text-brand-500">Admission</a>
            <a href="#cta" className="stat-badge">Apply Now</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="section-shell py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-500/15 px-4 py-2 text-xs font-semibold text-rose-200"
        >
          <Sparkles className="h-4 w-4" />
          New: Admission open for pre-vetted skill tracks
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50/90 via-white/80 to-cyan-50/80 p-6 text-slate-900 shadow-soft md:p-10">
          <div className="absolute -top-10 left-1/2 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Learn Skills. Get Work. Receive Payments.</h1>
              <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-lg">Join the Priyo ecosystem — Learn from industry experts, access real work opportunities through Priyo Marketplace, and receive payments seamlessly via Priyo Pay.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a href="#courses" className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5">Explore Programs</a>
                <a href="#admission" className="rounded-xl bg-brand-gradient px-6 py-3 font-semibold text-slate-900 shadow-glow">Apply for Evaluation</a>
              </div>
              <div className="mt-7 flex flex-wrap gap-3 text-xs sm:text-sm">
                {['1000+ hiring partners across BD & remote', 'AI-based course fit evaluation', 'Curated, non-mass cohorts'].map((item) => (
                  <span key={item} className="rounded-full border border-slate-300 px-3 py-1">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-slate-900 p-6 text-white">
              <p className="text-sm text-emerald-300">Career Engine</p>
              <h3 className="mt-2 text-2xl font-bold">Evaluation → Skill Build → Marketplace Work</h3>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>• Create profile at work.priyo.com</p>
                <p>• Get AI eligibility and course matching</p>
                <p>• Join curated learning track and start earning</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section id="ecosystem" className="section-shell py-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-center text-3xl font-bold">One Ecosystem for Your Full Career Journey</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">From learning skills to finding gigs and receiving secure payouts, Priyo powers every step.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[{ title: 'Priyo Academy', desc: 'Learn in-demand digital skills', icon: GraduationCap }, { title: 'Priyo Marketplace', desc: 'Get freelance work opportunities', icon: BriefcaseBusiness }, { title: 'Priyo Pay', desc: 'Receive payments seamlessly', icon: CreditCard }].map((item, i) => (
            <motion.article key={item.title} whileHover={{ y: -6 }} className="glass-card relative p-6 text-center">
              <item.icon className="mx-auto h-10 w-10 text-brand-500" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.desc}</p>
              {i < 2 && <ArrowRight className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-500 md:block" />}
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="courses" className="section-shell py-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Programs & Events</h2>
            <p className="mt-2 text-slate-300">Course and webinar sections now use card systems with category navigation.</p>
          </div>
          <div className="stat-badge">Join a curated community of serious learners</div>
        </div>

        <CourseShowcaseTable items={courseItems} />
        <WebinarTable items={webinars} />
      </motion.section>

      <motion.section id="admission" className="section-shell py-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="glass-card p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">Application-Based Enrollment Process</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your Journey Starts with Evaluation, Not Payment.</h2>
          <p className="mt-4 max-w-4xl text-slate-300">Before enrolling in any course, every applicant must create a professional profile in Priyo Marketplace. Our AI system evaluates your eligibility to ensure you&apos;re placed in the right course — not just any course.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {admissionSteps.map(({ title, text, icon: Icon }, index) => (
              <motion.article key={title} whileHover={{ y: -5 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-500/15 p-2 text-brand-500"><Icon className="h-5 w-5" /></span>
                  <p className="text-sm font-semibold text-brand-500">Step {index + 1}</p>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://work.priyo.com" className="rounded-xl bg-brand-gradient px-6 py-3 font-semibold text-slate-900 shadow-glow">Create Marketplace Profile</a>
            <a href="#courses" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:border-brand-500">Apply for Course Evaluation</a>
          </div>
        </div>
      </motion.section>

      <section id="why-priyo" className="section-shell py-16">
        <h2 className="text-center text-3xl font-bold">Why Choose Priyo Academy</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ feature, icon: Icon }) => (
            <article key={feature} className="glass-card p-5 text-center transition hover:-translate-y-1">
              <Icon className="mx-auto h-8 w-8 text-brand-500" />
              <p className="mt-3 text-sm font-medium">{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <motion.section id="cta" className="section-shell py-20" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-300/40 bg-gradient-to-r from-emerald-300 via-green-300 to-cyan-300 px-8 py-14 text-center text-slate-900 shadow-glow">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-3xl" />
          <p className="text-sm font-semibold uppercase tracking-wide">Selective Admission. Serious Learners Only.</p>
          <h2 className="mt-3 text-4xl font-extrabold">Apply Now to Join Priyo&apos;s Curated Talent Pipeline</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-800">Get matched by AI, placed into the right cohort, and move from learning to earning with marketplace access.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="https://work.priyo.com" className="rounded-xl bg-slate-950 px-8 py-3 font-semibold text-white">Create Marketplace Profile</a>
            <a href="#admission" className="rounded-xl border border-slate-900/20 bg-white/70 px-8 py-3 font-semibold">Apply for Evaluation</a>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-brand-500/20 bg-black/40">
        <div className="section-shell grid gap-8 py-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold">Priyo Academy</h3>
            <p className="mt-2 max-w-md text-sm text-slate-400">A premium skill development platform connecting education, freelance work, and secure payouts in one scalable ecosystem.</p>
          </div>
          {['About', 'Courses', 'Marketplace', 'Priyo Pay', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-sm text-slate-300 hover:text-brand-500">{item}</a>
          ))}
        </div>
        <div className="section-shell flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Priyo Academy. All rights reserved.</p>
          <p>Follow us: Facebook · LinkedIn · YouTube · Instagram</p>
        </div>
      </footer>
    </main>
  );
}
