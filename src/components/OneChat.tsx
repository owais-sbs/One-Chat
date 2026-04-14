import React from 'react';
import { 
  MessageSquare, 
  Users, 
  Share2, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  LayoutDashboard, 
  Smartphone, 
  Globe, 
  ShieldCheck,
  Menu,
  X,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  CircleDashed,
  Box,
  AlignLeft,
  BookOpen,
  Settings,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Spotlight } from './ui/Spotlight';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-surface" />
          </div>
          <span className="font-extrabold text-xl tracking-tight">One Chat</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Features', 'Pricing', 'Docs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-semibold text-primary/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="rounded-full px-6 border-border font-semibold">Log in</Button>
          <Button className="rounded-full px-6 font-semibold">Start Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {['Product', 'Features', 'Pricing', 'Docs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-secondary hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Start Free</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden bg-white flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-center h-full">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] xl:w-[40%] z-20 flex flex-col justify-center py-12 lg:py-0 px-6 lg:px-12 xl:pl-[max(8%,calc(50vw-600px))]">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.05] mb-4 tracking-tight text-black">
            One inbox for all your WhatsApp business conversations
          </h1>
          <p className="text-base md:text-lg text-black/80 mb-8 font-medium leading-relaxed max-w-lg">
            Consolidate multiple WhatsApp Business accounts into a single, shared inbox. Assign chats, collaborate seamlessly, and respond faster as a team.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="h-12 px-6 rounded-xl text-sm font-semibold bg-black text-white hover:bg-black/90">
              Start Free
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 rounded-xl text-sm font-semibold border-border border bg-white hover:bg-gray-50 text-black">
              Book Demo
            </Button>
          </div>
        </div>

        {/* Right Dashboard Image */}
        <div className="relative w-full lg:w-[55%] xl:w-[60%] h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-start z-10 lg:pl-8">
          <div className="relative w-full h-full max-h-[600px] overflow-hidden">
            <img 
              src="https://i.pinimg.com/1200x/53/0d/64/530d6495b0473031495f4aa2f8f786f8.jpg" 
              alt="Dashboard" 
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        {/* Logos Row - Below everything */}
        <div className="absolute bottom-8 left-0 right-0 w-full px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-50 grayscale text-black filter">
            <span className="font-extrabold text-xl tracking-tighter flex items-center gap-3">
              <CircleDashed className="w-5 h-5" /> Canoon
            </span>
            <span className="font-bold text-xl flex items-center gap-3">
              <Box className="w-5 h-5" /> Liahum
            </span>
            <span className="font-semibold text-xl tracking-tight flex items-center gap-3">
              <AlignLeft className="w-5 h-5" /> Linear
            </span>
            <span className="font-bold text-xl flex items-center gap-3 tracking-tight">
              <BookOpen className="w-5 h-5" /> Notion
            </span>
            <span className="font-black text-xl tracking-tightest flex items-center gap-2">
              <b className="text-2xl">S</b> stripe
            </span>
            <span className="font-bold text-xl flex items-center gap-2">
              <div className="w-4 h-4 bg-black rounded-t-full rounded-b-sm border-2 border-black block"></div> Shopre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemIllustration = ({ type }: { type: number }) => {
  const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 }
  };

  if (type === 0) {
    return (
      <svg viewBox="0 0 80 80" className="w-14 h-14">
        <motion.g
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <motion.rect x="10" y="20" width="24" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/20" />
          <motion.rect x="18" y="12" width="24" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
          <motion.rect x="26" y="24" width="24" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
          <motion.circle cx="44" cy="54" r="2" fill="currentColor" className="text-primary" />
          <motion.circle cx="38" cy="54" r="2" fill="currentColor" className="text-primary" />
          <motion.circle cx="32" cy="54" r="2" fill="currentColor" className="text-primary" />
          <motion.rect x="30" y="30" width="16" height="2" rx="1" fill="currentColor" className="text-primary/60" />
          <motion.rect x="30" y="36" width="12" height="2" rx="1" fill="currentColor" className="text-primary/40" />
        </motion.g>
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg viewBox="0 0 80 80" className="w-14 h-14">
        <motion.g
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <motion.circle cx="40" cy="28" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
          <motion.path d="M24 56 C24 44 32 38 40 38 C48 38 56 44 56 56" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
          <motion.circle cx="18" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/50" />
          <motion.path d="M10 50 C10 42 14 38 18 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2 2" className="text-primary/40" />
          <motion.circle cx="62" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/50" />
          <motion.path d="M70 50 C70 42 66 38 62 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2 2" className="text-primary/40" />
          <motion.line x1="40" y1="38" x2="40" y2="52" stroke="currentColor" strokeWidth="1.5" className="text-primary/30" />
          <motion.circle cx="40" cy="52" r="3" fill="currentColor" className="text-primary/60" />
        </motion.g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 80" className="w-14 h-14">
      <motion.g
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <motion.circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/20" />
        <motion.path d="M40 20 L40 40 L54 50" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" strokeLinecap="round" strokeLinejoin="round" />
        <motion.circle cx="40" cy="40" r="3" fill="currentColor" className="text-primary" />
        <motion.circle cx="66" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
        <motion.path d="M70 14 L74 18 M70 18 L74 14" stroke="currentColor" strokeWidth="1.5" className="text-primary" strokeLinecap="round" />
        <motion.circle cx="14" cy="62" r="4" fill="currentColor" className="text-primary/30" />
        <motion.circle cx="66" cy="62" r="4" fill="currentColor" className="text-primary/30" />
      </motion.g>
    </svg>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "Scattered Chats",
      desc: "Losing track of conversations across multiple WhatsApp numbers and devices.",
      bullets: ["Multiple devices and tabs", "Multiple devices", "Chaotic Inbox"]
    },
    {
      title: "No Ownership",
      desc: "Teams struggling to track who's handling which chat, leading to double-replies.",
      bullets: ["Unclear responsibility", "Double replies", "Confusion"]
    },
    {
      title: "Missed Leads",
      desc: "Slow response times and forgotten messages costing your business valuable sales.",
      bullets: ["Lost opportunities", "Slow response times", "Frustrated customers"]
    }
  ];

  return (
    <section id="problem" className="bg-background py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Problem</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-full bg-surface border border-border/80 rounded-2xl p-8 hover:shadow-default transition-all">
                <div className="mb-6 text-primary">
                  <ProblemIllustration type={i} />
                </div>
                <h3 className="text-xl font-bold mb-6">{p.title}</h3>
                <ul className="space-y-2 mt-auto">
                  {p.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start text-[15px] font-medium text-primary/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 mr-3 shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SaaSDashboard = ({ type }: { type: number }) => {
  const bg = "bg-[#FAFAFA]";
  const border = "border-border/60";
  const accent = "#2563EB";
  const muted = "#94A3B8";

  if (type === 0) {
    return (
      <svg viewBox="0 0 500 320" className="w-full h-auto">
        <rect x="20" y="20" width="140" height="280" rx="8" fill="white" stroke={border} strokeWidth="1"/>
        <rect x="32" y="40" width="116" height="12" rx="2" fill={bg}/>
        <rect x="32" y="60" width="80" height="8" rx="2" fill={bg}/>
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <circle cx="48" cy={100 + i * 50} r="16" fill={bg} stroke={border}/>
            <rect x="72" y={92 + i * 50} width="60" height="6" rx="2" fill={bg}/>
            <rect x="72" y={104 + i * 50} width="40" height="4" rx="1" fill={bg}/>
          </g>
        ))}

        <rect x="180" y="20" width="140" height="280" rx="8" fill="white" stroke={border} strokeWidth="1"/>
        <rect x="192" y="40" width="116" height="12" rx="2" fill={bg}/>
        <rect x="192" y="60" width="80" height="8" rx="2" fill={bg}/>
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <circle cx="208" cy={100 + i * 50} r="16" fill={bg} stroke={border}/>
            <rect x="232" y={92 + i * 50} width="60" height="6" rx="2" fill={bg}/>
            <rect x="232" y={104 + i * 50} width="40" height="4" rx="1" fill={bg}/>
          </g>
        ))}

        <rect x="340" y="20" width="140" height="280" rx="8" fill="white" stroke={border} strokeWidth="1"/>
        <rect x="352" y="40" width="116" height="12" rx="2" fill={bg}/>
        <rect x="352" y="60" width="80" height="8" rx="2" fill={bg}/>
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <circle cx="368" cy={100 + i * 50} r="16" fill={bg} stroke={border}/>
            <rect x="392" y={92 + i * 50} width="60" height="6" rx="2" fill={bg}/>
            <rect x="392" y={104 + i * 50} width="40" height="4" rx="1" fill={bg}/>
          </g>
        ))}

        <rect x="20" y="180" width="460" height="120" rx="8" fill="white" stroke={border} strokeWidth="1"/>
        <rect x="40" y="200" width="100" height="80" rx="4" fill={bg}/>
        <rect x="40" y="200" width="100" height="24" rx="4" fill={accent} fillOpacity="0.1"/>
        <rect x="160" y="200" width="100" height="80" rx="4" fill={bg}/>
        <rect x="160" y="200" width="100" height="24" rx="4" fill={accent} fillOpacity="0.1"/>
        <rect x="280" y="200" width="100" height="80" rx="4" fill={bg}/>
        <rect x="280" y="200" width="100" height="24" rx="4" fill={accent} fillOpacity="0.1"/>
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg viewBox="0 0 500 320" className="w-full h-auto">
        <rect x="20" y="20" width="460" height="280" rx="8" fill="white" stroke={border} strokeWidth="1"/>
        <rect x="40" y="40" width="200" height="24" rx="4" fill={bg}/>
        <rect x="40" y="72" width="120" height="12" rx="2" fill={bg}/>
        
        <rect x="40" y="100" width="420" height="60" rx="6" fill={bg}/>
        <circle cx="70" cy="130" r="18" fill="#E2E8F0"/>
        <rect x="96" y="118" width="80" height="8" rx="2" fill="#CBD5E1"/>
        <rect x="96" y="132" width="50" height="6" rx="1" fill="#E2E8F0"/>
        <rect x="280" y="122" width="60" height="20" rx="4" fill={accent}/>
        <rect x="350" y="124" width="20" height="16" rx="2" fill={muted}/>

        <rect x="40" y="172" width="420" height="60" rx="6" fill={bg}/>
        <circle cx="70" cy="202" r="18" fill="#E2E8F0"/>
        <rect x="96" y="190" width="80" height="8" rx="2" fill="#CBD5E1"/>
        <rect x="96" y="204" width="50" height="6" rx="1" fill="#E2E8F0"/>
        <rect x="280" y="194" width="60" height="20" rx="4" fill={accent}/>
        <rect x="350" y="196" width="20" height="16" rx="2" fill={muted}/>

        <rect x="40" y="244" width="420" height="40" rx="6" fill={bg}/>
        <circle cx="70" cy="264" r="14" fill="#E2E8F0"/>
        <rect x="94" y="256" width="60" height="6" rx="2" fill="#CBD5E1"/>
        <rect x="94" y="268" width="40" height="4" rx="1" fill="#E2E8F0"/>
        <rect x="280" y="256" width="50" height="16" rx="4" fill={accent} fillOpacity="0.5"/>
        <rect x="350" y="258" width="20" height="12" rx="2" fill={muted}/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto">
      <rect x="20" y="20" width="460" height="280" rx="8" fill="white" stroke={border} strokeWidth="1"/>
      
      <rect x="40" y="40" width="180" height="100" rx="6" fill={bg}/>
      <circle cx="70" cy="75" r="14" fill="#E2E8F0"/>
      <rect x="92" y="66" width="60" height="6" rx="2" fill="#CBD5E1"/>
      <rect x="92" y="78" width="40" height="4" rx="1" fill="#E2E8F0"/>
      <rect x="52" y="100" width="140" height="24" rx="4" fill={accent} fillOpacity="0.1"/>
      <rect x="60" y="108" width="100" height="8" rx="2" fill={accent} fillOpacity="0.3"/>

      <rect x="240" y="40" width="180" height="100" rx="6" fill={bg}/>
      <circle cx="270" cy="75" r="14" fill="#E2E8F0"/>
      <rect x="292" y="66" width="60" height="6" rx="2" fill="#CBD5E1"/>
      <rect x="292" y="78" width="40" height="4" rx="1" fill="#E2E8F0"/>
      <rect x="252" y="100" width="140" height="24" rx="4" fill="#22C55E" fillOpacity="0.1"/>
      <rect x="260" y="108" width="80" height="8" rx="2" fill="#22C55E" fillOpacity="0.3"/>

      <rect x="40" y="160" width="380" height="120" rx="6" fill={bg}/>
      <rect x="60" y="180" width="340" height="8" rx="2" fill="#E2E8F0"/>
      <rect x="60" y="196" width="280" height="6" rx="1" fill="#E2E8F0"/>
      <rect x="60" y="210" width="300" height="6" rx="1" fill="#E2E8F0"/>
      
      <circle cx="70" cy="240" r="10" fill="#E2E8F0"/>
      <rect x="88" y="236" width="50" height="8" rx="2" fill="#CBD5E1"/>
      <rect x="320" y="236" width="60" height="16" rx="4" fill={accent} fillOpacity="0.2"/>
      <rect x="328" y="241" width="44" height="6" rx="1" fill={accent} fillOpacity="0.5"/>

      <circle cx="160" cy="240" r="10" fill="#E2E8F0"/>
      <rect x="178" y="236" width="50" height="8" rx="2" fill="#CBD5E1"/>
      <rect x="320" y="236" width="60" height="16" rx="4" fill="#22C55E" fillOpacity="0.2"/>
      <rect x="328" y="241" width="44" height="6" rx="1" fill="#22C55E" fillOpacity="0.5"/>
    </svg>
  );
};

const FeatureBlock = ({ title, desc, image, reverse = false }: any) => {
  return (
    <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16", reverse && "lg:flex-row-reverse")}>
      <div className={cn("max-w-md", reverse ? "lg:order-2" : "")}>
        <h3 className="text-2xl md:text-[28px] font-bold mb-4 tracking-tight leading-tight">{title}</h3>
        <p className="text-primary/70 text-lg mb-0 font-medium leading-relaxed">{desc}</p>
      </div>
      <div className={cn("overflow-hidden rounded-xl", reverse ? "lg:order-1" : "")}>
        <div className="w-full aspect-[16/10] relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-xl" 
          />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="pb-24 pt-6 px-6 max-w-[1200px] mx-auto border-t border-border/50">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Features</h2>
      </div>

      <FeatureBlock 
        title="Multi-account inbox"
        desc="Consolidate multiple WhatsApp Business accounts into a single, shared inbox. Assign chats, collaborate uniformly, and manage your accounts."
        image="https://i.pinimg.com/1200x/6d/63/be/6d63bed81db8975defb1abaafa58fb41.jpg"
      />
      
      <FeatureBlock 
        title="Chat delegation"
        desc="Assign a conversation to a specific member, on a specific team member."
        image="https://i.pinimg.com/1200x/b4/11/e4/b411e44595c8cdda7cff914f58db21f9.jpg"
        reverse
      />

      <FeatureBlock 
        title="Real-time collaboration"
        desc="View time team with broader views and internal notes, and one operational control center."
        image="https://i.pinimg.com/1200x/dc/07/27/dc0727dafb62f0e3d1699115c375e5ab.jpg"
      />

      <div className="mt-20 py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-12">How it works</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { step: "icon1", title: "1. Connect Accounts", desc: "Connect accounts and lab conversations." },
            { step: "icon2", title: "2. Invite Team", desc: "Invite teammates, define venues, and application." },
            { step: "icon3", title: "3. Define Workflows", desc: "Define rules to limit behaviors." },
            { step: "icon4", title: "4. Reply & Analyze", desc: "Reply via cross-app conversation & reply & analyze." }
          ].map((item, i) => (
            <div key={item.step} className="relative group">
              <div className="w-10 h-10 rounded-full border border-border/60 bg-surface flex items-center justify-center mb-4 text-primary">
                {i === 0 && <Zap className="w-4 h-4" strokeWidth={1.5} />}
                {i === 1 && <Users className="w-4 h-4" strokeWidth={1.5} />}
                {i === 2 && <LayoutDashboard className="w-4 h-4" strokeWidth={1.5} />}
                {i === 3 && <MessageSquare className="w-4 h-4" strokeWidth={1.5} />}
              </div>
              {i !== 3 && <div className="hidden md:block absolute top-5 left-16 right-4 border-t border-dashed border-border/60"></div>}
              <h4 className="font-bold text-base mb-2">{item.title}</h4>
              <p className="text-primary/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: "Faster Response Times", desc: "Faster response inside support and sales.", icon: Zap },
    { title: "Increased Lead Conversion", desc: "Increased lead conversion.", icon: ArrowRight },
    { title: "Enhanced Team Coordination", desc: "Enhanced team coordination.", icon: Users },
    { title: "Centralized Operations", desc: "Centralized operations and centralized operations.", icon: LayoutDashboard },
    { title: "Customer Insights", desc: "Customer insights via customer insights.", icon: ShieldCheck },
    { title: "Scalable Support", desc: "Scalable scalable commission customer and support.", icon: Smartphone }
  ];

  return (
    <section className="bg-surface py-20 px-6 border-t border-border/50">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-2xl font-bold mb-12">Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="p-5 rounded-xl bg-background flex gap-4 hover:shadow-default transition-all border border-border/40">
              <b.icon className="w-5 h-5 mt-0.5 text-primary opacity-70 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-sm mb-1 text-primary">{b.title}</h4>
                <p className="text-primary/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    { title: "Customer Support Teams", icon: Users },
    { title: "Sales Departments", icon: ShieldCheck },
    { title: "Marketing Agencies", icon: Share2 },
    { title: "E-commerce Brands", icon: LayoutDashboard },
  ];

  return (
    <section className="pb-24 px-6 max-w-[1200px] mx-auto">
      <h3 className="text-2xl font-bold mb-8">Target audience</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {audiences.map(audience => (
          <div key={audience.title} className="py-3 items-center flex gap-3 text-sm font-semibold text-primary/80">
            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border border-border/50">
              <audience.icon className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
            </div>
            {audience.title}
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#1A1A1A] text-surface rounded-[24px] p-16 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold mb-10 max-w-2xl mx-auto leading-tight text-white tracking-tight">
              Ready to Master Your WhatsApp Business Communications?
            </h2>
            <Button variant="white" size="lg" className="h-12 px-8 text-[15px] font-bold rounded-full bg-white text-black hover:bg-white/90">
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-surface" />
              </div>
              <span className="font-bold text-xl tracking-tight">One Chat</span>
            </div>
            <p className="text-secondary text-sm max-w-xs mb-6">
              The modern standard for WhatsApp Business communications. Built for high-performance teams.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-text hover:text-primary cursor-pointer" />
              <Instagram className="w-5 h-5 text-muted-text hover:text-primary cursor-pointer" />
              <Linkedin className="w-5 h-5 text-muted-text hover:text-primary cursor-pointer" />
              <Mail className="w-5 h-5 text-muted-text hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-wider">Product</h5>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="hover:text-primary cursor-pointer">Inbox</li>
              <li className="hover:text-primary cursor-pointer">Automation</li>
              <li className="hover:text-primary cursor-pointer">Analytics</li>
              <li className="hover:text-primary cursor-pointer">Pricing</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-wider">Company</h5>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="hover:text-primary cursor-pointer">About</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-wider">Legal</h5>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="hover:text-primary cursor-pointer">Privacy</li>
              <li className="hover:text-primary cursor-pointer">Terms</li>
              <li className="hover:text-primary cursor-pointer">Security</li>
              <li className="hover:text-primary cursor-pointer">Cookies</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-text">
          <p>© 2026 One Chat. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-primary cursor-pointer">Status</span>
            <span className="hover:text-primary cursor-pointer">Help Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const OneChat = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Benefits />
      <TargetAudience />
      <CTA />
      <Footer />
    </div>
  );
};
