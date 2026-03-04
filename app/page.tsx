import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  BrainCircuit,
  CalendarClock,
  CreditCard,
  GraduationCap,
  ShieldCheck,
  Star,
  UserCheck,
  Users
} from 'lucide-react';
import ThemeToggle from '@/components/theme-toggle';
import WebinarTable from '@/components/webinar-table';

type CourseCard = {
  title: string;
  mentor: string;
  schedule: string;
  fee: string;
  rating?: number;
  tone: string;
  cta: string;
};

const featuredCourses: CourseCard[] = [
  { title: 'Full-Stack Web Development Bootcamp', mentor: 'Tanvir Hasan', schedule: '16 Weeks', fee: '৳12,500', rating: 4.9, tone: 'from-emerald-500 to-cyan-500', cta: 'Apply for Evaluation' },
  { title: 'UI/UX Design for Product Teams', mentor: 'Nusrat Jahan', schedule: '12 Weeks', fee: '৳9,900', rating: 4.8, tone: 'from-lime-500 to-green-500', cta: 'Apply for Evaluation' },
  { title: 'Data Analytics with Python', mentor: 'Rahat Sarker', schedule: '12 Weeks', fee: '৳10,500', rating: 4.8, tone: 'from-green-400 to-emerald-700', cta: 'Apply for Evaluation' }
];

const upcomingBatches: CourseCard[] = [
  { title: 'Freelancing Launchpad (Evening Batch)', mentor: 'Sabbir Ahmed', schedule: 'Starts 18 June 2026', fee: '৳6,500', tone: 'from-teal-500 to-emerald-600', cta: 'Apply for Evaluation' },
  { title: 'Digital Marketing Sprint', mentor: 'Shadman Khan', schedule: 'Starts 25 June 2026', fee: '৳8,400', tone: 'from-green-500 to-teal-500', cta: 'Apply for Evaluation' },
  { title: 'Motion Graphics Career Track', mentor: 'Afsana Noor', schedule: 'Starts 02 July 2026', fee: '৳11,200', tone: 'from-emerald-600 to-green-500', cta: 'Apply for Evaluation' }
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

const launchHighlights = [
  { title: 'Quality Over Quantity', text: 'Unlike mass-batch models, we focus on curated cohorts with serious career intent.', icon: UserCheck },
  { title: 'Career Alignment First', text: 'Our process maps each learner to the right track based on readiness and goals.', icon: BriefcaseBusiness },
  { title: 'Marketplace-Ready Talent', text: 'Every path is designed to prepare you for real client opportunities in Priyo Marketplace.', icon: CreditCard }
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

function ProgramGrid({ title, subtitle, icon: Icon, items }: { title: string; subtitle: string; icon: typeof GraduationCap; items: CourseCard[] }) {
  return (
    <section className="mt-14">
      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-lg bg-brand-500/15 p-2 text-brand-500"><Icon className="h-5 w-5" /></span>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-slate-300">{subtitle}</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="glass-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-glow">
            <div className={`flex h-32 items-end bg-gradient-to-br ${item.tone} p-4`}>
              <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-semibold uppercase text-white">Priyo Academy</span>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-300">By {item.mentor}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>{item.schedule}</span>
                {item.rating ? <span className="flex items-center gap-1 text-amber-400"><Star className="h-4 w-4 fill-current" />{item.rating}</span> : <span className="text-brand-500">Open</span>}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-base font-bold text-brand-500">{item.fee}</span>
                <button className="rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-slate-900">{item.cta}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-2xl">
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

      <section className="section-shell py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="stat-badge">Bangladesh&apos;s Next-Gen Skill Ecosystem</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Learn Skills. <br />Get Work. <br />Receive Payments.</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">Priyo Academy helps learners build in-demand skills and move directly into Priyo Marketplace with secure payouts via Priyo Pay.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#courses" className="rounded-xl bg-brand-gradient px-6 py-3 font-semibold text-slate-900 shadow-glow">Explore Courses</a>
              <a href="#admission" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:border-brand-500">Apply for Evaluation</a>
            </div>
          </div>
          <div className="glass-card relative overflow-hidden p-8">
            <div className="absolute -top-10 right-8 h-32 w-32 rounded-full bg-brand-600/25 blur-3xl" />
            <div className="rounded-2xl bg-gradient-to-br from-brand-500/80 via-brand-600/50 to-slate-900 p-8">
              <p className="text-sm text-emerald-100">Career Launch Framework</p>
              <h3 className="mt-2 text-2xl font-bold">From learner to earning professional</h3>
              <div className="mt-6 space-y-3 text-sm text-slate-100">
                <p>01. Build job-ready portfolio projects</p>
                <p>02. Access verified work opportunities</p>
                <p>03. Receive secure payouts via Priyo Pay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {launchHighlights.map(({ title, text, icon: Icon }) => (
            <article key={title} className="glass-card p-6">
              <Icon className="h-8 w-8 text-brand-500" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="section-shell py-16">
        <h2 className="text-center text-3xl font-bold">One Ecosystem for Your Full Career Journey</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">From learning skills to finding gigs and receiving secure payouts, Priyo powers every step.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[{ title: 'Priyo Academy', desc: 'Learn in-demand digital skills', icon: GraduationCap }, { title: 'Priyo Marketplace', desc: 'Get freelance work opportunities', icon: BriefcaseBusiness }, { title: 'Priyo Pay', desc: 'Receive payments seamlessly', icon: CreditCard }].map((item, i) => (
            <article key={item.title} className="glass-card relative p-6 text-center">
              <item.icon className="mx-auto h-10 w-10 text-brand-500" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.desc}</p>
              {i < 2 && <ArrowRight className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-500 md:block" />}
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="section-shell py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Programs & Events</h2>
            <p className="mt-2 text-slate-300">Explore featured courses, upcoming cohorts, and webinar sessions in one place.</p>
          </div>
          <div className="stat-badge">Join a curated community of serious learners</div>
        </div>

        <ProgramGrid title="Featured Courses" subtitle="Most enrolled and highest-rated tracks" icon={GraduationCap} items={featuredCourses} />
        <ProgramGrid title="Upcoming Batches" subtitle="New intakes opening soon" icon={CalendarClock} items={upcomingBatches} />
        <WebinarTable items={webinars} />
      </section>

      <section id="admission" className="section-shell py-16">
        <div className="glass-card p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">Application-Based Enrollment Process</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your Journey Starts with Evaluation, Not Payment.</h2>
          <p className="mt-4 max-w-4xl text-slate-300">Before enrolling in any course, every applicant must create a professional profile in Priyo Marketplace. Our AI system evaluates your eligibility to ensure you&apos;re placed in the right course — not just any course.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {admissionSteps.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-500/15 p-2 text-brand-500"><Icon className="h-5 w-5" /></span>
                  <p className="text-sm font-semibold text-brand-500">Step {index + 1}</p>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://work.priyo.com" className="rounded-xl bg-brand-gradient px-6 py-3 font-semibold text-slate-900 shadow-glow">Create Marketplace Profile</a>
            <a href="#courses" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:border-brand-500">Apply for Course Evaluation</a>
          </div>
        </div>
      </section>

      <section id="why-priyo" className="section-shell py-16">
        <h2 className="text-center text-3xl font-bold">Why Choose Priyo Academy</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ feature, icon: Icon }) => (
            <article key={feature} className="glass-card p-5 text-center">
              <Icon className="mx-auto h-8 w-8 text-brand-500" />
              <p className="mt-3 text-sm font-medium">{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="section-shell py-20">
        <div className="rounded-3xl bg-brand-gradient px-8 py-14 text-center text-slate-900 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-wide">Selective Admission. Serious Learners Only.</p>
          <h2 className="mt-3 text-4xl font-bold">We Don&apos;t Sell Courses. We Build Talent.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-800">Join a curated community of goal-driven learners and apply to be evaluated for the right learning path.</p>
          <button className="mt-8 rounded-xl bg-slate-950 px-8 py-3 font-semibold text-white">Apply for Evaluation</button>
        </div>
      </section>

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
