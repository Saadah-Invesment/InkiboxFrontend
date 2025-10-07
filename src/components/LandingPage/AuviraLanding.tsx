export default function AuviraLanding() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400" />
            <span className="font-semibold tracking-tight">Auvira</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#how" className="hover:text-blue-700">How it works</a>
            <a href="#sectors" className="hover:text-blue-700">Sectors</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden sm:inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50">Book a demo</a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-100 blur-3xl"/>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">New • MVP live</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Your 24/7 AI Operations Assistant</h1>
              <p className="mt-4 text-lg text-slate-600">Auvira answers calls & chats, books appointments, takes payments, and manages documents—so your team never misses a lead again.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#demo" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow">Book a Live Demo</a>
                <a href="#how" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 ring-1 ring-slate-300 font-semibold text-slate-700 hover:bg-slate-50">See how it works</a>
              </div>
              <div className="mt-6 text-sm text-slate-500">Supported: Phone • WhatsApp • Calendly/Google Calendar • Stripe • Google Drive</div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs leading-relaxed">
{`Caller: Hi, I’d like to see Dr. Ahmed next week.\nAuvira: Sure — checking the calendar… Next available is Tue 10:30.\nCaller: Book it and send a payment link.\nAuvira: Done. Confirmation sent via WhatsApp. Please upload your reports here: link.`}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-lg border p-3">
                    <div className="text-slate-500">Appointments</div>
                    <div className="mt-1 text-2xl font-bold">+37%</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-slate-500">Response time</div>
                    <div className="mt-1 text-2xl font-bold">&lt; 5s</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-slate-500">No-shows</div>
                    <div className="mt-1 text-2xl font-bold">−22%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
            {['Twilio','WhatsApp','Calendly','Google Calendar','Stripe','Google Drive'].map((x)=> (
              <div key={x} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Run your operations on autopilot</h2>
          <p className="mt-2 text-slate-600">From first contact to confirmed booking with payment and documents—Auvira handles it.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {t:'AI Call & Chat Reception',d:'Answer phone & WhatsApp instantly with natural language, transcription, and intent detection.'},
              {t:'Smart Scheduling',d:'Find the next slot across calendars, auto-book, and send confirmations & reminders.'},
              {t:'Payments Built-in',d:'Generate Stripe checkout links per service. Confirm on success and reduce no-shows.'},
              {t:'Document Handling',d:'Collect pre-visit forms, IDs, and reports. Store securely and notify the specialist.'},
              {t:'Follow-ups & Automations',d:'Zapier/Make workflows for reminders, receipts, and handoffs.'},
              {t:'Sector Templates',d:'Pre-tuned flows for Clinics, Law Firms, Real Estate, & more.'},
            ].map((f)=> (
              <div key={f.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-4" />
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {[
              {n:'1',t:'Contact',d:'Caller messages via phone or WhatsApp. Auvira greets & understands intent.'},
              {n:'2',t:'Book',d:'Auvira finds a matching slot across connected calendars and books it.'},
              {n:'3',t:'Pay',d:'A secure Stripe link is sent automatically; confirmation is instant.'},
              {n:'4',t:'Docs',d:'Client uploads documents; the specialist is notified with secure access.'},
            ].map((s)=> (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-bold">{s.n}</div>
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Built for your sector</h2>
          <p className="mt-2 text-slate-600">Start with Clinics or Law Firms. Expand to Real Estate, Beauty, Automotive & more.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {t:'Clinics',d:'Intake forms, insurance IDs, pre-visit reports, consent workflow.'},
              {t:'Law Firms',d:'Matter type triage, retainer payments, document upload links.'},
              {t:'Real Estate',d:'Viewing bookings, pre-qualification, lead handoff to agents.'},
            ].map((x)=> (
              <div key={x.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{x.d}</p>
                <a href="#demo" className="mt-4 inline-flex text-sm font-semibold text-blue-700">Use this template →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Simple, usage-friendly pricing</h2>
          <p className="mt-2 text-slate-600">Start with MVP access. Scale as you grow.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              {name:'Starter',price:'$99/mo',pts:['AI call & WhatsApp','Calendly/Google Calendar','Stripe links','Up to 500 conversations']},
              {name:'Pro',price:'$299/mo',highlight:true,pts:['Everything in Starter','Sector template (Clinic/Law)','Document workflows','Up to 3,000 conversations']},
              {name:'Business',price:'Custom',pts:['White-glove onboarding','Custom automations','SLA & support','Unlimited conversations']},
            ].map((p)=> (
              <div key={p.name} className={`rounded-2xl border ${p.highlight? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'} bg-white p-6 flex flex-col`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  {p.highlight && <span className="text-xs font-semibold text-blue-700">Most popular</span>}
                </div>
                <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {p.pts.map((pt)=> <li key={pt} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"/> {pt}</li>)}
                </ul>
                <a href="#demo" className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${p.highlight? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'ring-1 ring-slate-300 hover:bg-slate-50'}`}>Choose plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="py-16 bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">See Auvira in action</h2>
          <p className="mt-3 text-slate-300">Book a 15‑minute walkthrough. We’ll show call → booking → payment → document upload end‑to‑end.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://calendly.com/your-calendly/auvira-demo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900">Book on Calendly</a>
            <a href="mailto:hello@auvira.io?subject=Auvira%20Demo%20Request" className="inline-flex items-center justify-center rounded-2xl ring-1 ring-white/40 px-6 py-3 font-semibold">Email us</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4">
            {[
              {q:'Do we need to switch our phone provider?',a:'No. We provision a new Twilio number (or port yours) and route calls to Auvira, then to your staff as needed.'},
              {q:'Can we keep our calendars?',a:'Yes. We integrate with Google Calendar and/or Calendly to read availability and book automatically.'},
              {q:'How do payments work?',a:'Auvira generates Stripe checkout links for each service. On success, we confirm the booking and send receipts.'},
              {q:'Is my data secure?',a:'We use role-based access, encrypted storage, and audit trails. Documents are stored in your own Google Drive/Dropbox.'},
            ].map((f)=> (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400" />
              <div>
                <div className="font-semibold">Auvira</div>
                <div className="text-xs text-slate-500">Your 24/7 AI Operations Assistant</div>
              </div>
            </div>
            <div className="text-sm text-slate-500">©️ {new Date().getFullYear()} Auvira. All rights reserved.</div>
            <div className="flex gap-4 text-sm">
              <a href="mailto:support@auvira.io" className="hover:text-blue-700">Support</a>
              <a href="#" className="hover:text-blue-700">Privacy</a>
              <a href="#" className="hover:text-blue-700">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}