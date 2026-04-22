import React, { useEffect, useState, type ReactNode } from 'react';
import { 
  MessageSquare, Users, Share2, Zap, CheckCircle2, ArrowRight, LayoutDashboard, 
  Smartphone, Globe, ShieldCheck, Menu, X, Mail, Instagram, Twitter, Linkedin, 
  CircleDashed, Box, AlignLeft, BookOpen, Settings, Search, BarChart3, 
  MessageCircle, Bell, Clock, Building2, Store, Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Utilities ---
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
];

type RevealDirection = 'left' | 'right' | 'up';

const revealVariants = {
  hidden: (direction: RevealDirection) => ({
    opacity: 0,
    x: direction === 'left' ? -48 : direction === 'right' ? 48 : 0,
    y: direction === 'up' ? 24 : 0,
    scale: 0.98
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1
  }
};

const ScrollReveal = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  as: Component = motion.div
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  as?: typeof motion.div;
}) => {
  return (
    <Component
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={revealVariants}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </Component>
  );
};

const BrandMark = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className={cn(
      'bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-brand',
      compact ? 'w-8 h-8' : 'w-10 h-10'
    )}>
      <MessageSquare className={cn(compact ? 'w-4 h-4' : 'w-5 h-5', 'text-white')} />
    </div>
    <span className={cn('font-bold tracking-tight text-primary', compact ? 'text-lg' : 'text-xl')}>
      OneChat<span className="text-sky-300">.</span>
    </span>
  </div>
);

// --- Components ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
      scrolled ? "py-4" : "py-6"
    )}>
      <div className="container-max pointer-events-auto">
        <div className={cn(
          "flex items-center justify-between px-6 h-16 rounded-2xl transition-all duration-300",
          scrolled ? "glass shadow-default" : "bg-transparent"
        )}>
          <a href="#home" className="flex items-center" aria-label="OneChat home">
            <BrandMark />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-secondary hover:text-[#10b981] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">Log in</a>
            <button className="btn-primary">Start Free Trial</button>
          </div>

          <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-6 rounded-2xl glass shadow-hover flex flex-col gap-4 md:hidden pointer-events-auto"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-semibold text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
              <button className="btn-secondary w-full">Log in</button>
              <button className="btn-primary w-full">Start Free Trial</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroImage = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] mx-auto z-10 flex items-center justify-center perspective-[2000px]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/20 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-soft"></div>
      <div className="absolute top-1/4 -right-12 w-64 h-64 bg-[#6366f1]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 -left-12 w-48 h-48 bg-[#34d399]/20 rounded-full blur-2xl flex items-center justify-center">
         <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center -rotate-12"
          >
            <Zap className="w-8 h-8 text-[#10b981]" />
         </motion.div>
      </div>

      {/* Main Dashboard Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: 48, rotateY: -15, rotateX: 10 }}
        animate={{ opacity: 1, x: 0, rotateY: -10, rotateX: 5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[90%] md:w-[110%] relative z-20 rounded-[28px] bg-white shadow-2xl overflow-hidden border border-border"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Browser Header */}
        <div className="h-10 bg-gray-50 border-b border-border flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
            <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
          </div>
          <div className="mx-auto h-6 w-1/2 bg-white rounded-md border border-border flex items-center justify-center">
             <span className="text-[10px] text-muted-text flex items-center gap-1"><Zap className="w-3 h-3"/> onechat.app/inbox</span>
          </div>
        </div>
        
        {/* App Layout */}
        <div className="flex h-[400px]">
          {/* Sidebar */}
          <div className="w-[60px] md:w-[220px] border-r border-border bg-gray-50 flex flex-col p-3">
             <div className="hidden md:flex items-center gap-2 mb-6 px-2">
                <BrandMark compact />
             </div>
             <div className="flex-1 flex flex-col gap-1">
               {['Inbox', 'Team', 'Campaigns', 'Contacts'].map((item, i) => (
                 <div key={item} className={cn("h-10 rounded-lg flex items-center gap-3 px-3", i===0 ? "bg-white shadow-sm text-[#10b981]" : "text-secondary")}>
                   <div className="w-4 h-4 bg-current opacity-70 rounded-sm"></div>
                   <span className="text-sm font-medium hidden md:block">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-white">
             {/* Header */}
             <div className="h-14 border-b border-border flex items-center justify-between px-6">
                <span className="font-semibold text-sm">Shared Inbox</span>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Bell className="w-4 h-4 text-secondary" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping-slow"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 ml-2"></div>
                </div>
             </div>
             {/* Chat List + Window */}
             <div className="flex-1 flex overflow-hidden p-4 gap-4">
               {/* Chat List */}
               <div className="w-[180px] hidden lg:flex flex-col gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-16 border border-border rounded-xl p-2 flex gap-2 items-center">
                       <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0"></div>
                       <div className="flex-1 space-y-1.5">
                         <div className="h-3 w-3/4 bg-gray-200 rounded-sm"></div>
                         <div className="h-2 w-full bg-gray-100 rounded-sm"></div>
                       </div>
                    </div>
                  ))}
               </div>
               {/* Chat Window */}
               <div className="flex-1 border border-border rounded-xl bg-[#f8fafc] flex flex-col overflow-hidden relative">
                 <div className="h-12 border-b border-border bg-white flex items-center px-4 font-medium text-sm gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#10b981]"></div> Sarah (Support)
                 </div>
                 <div className="flex-1 p-4 flex flex-col gap-3 justify-end">
                    <div className="self-start max-w-[80%] bg-white border border-border p-3 rounded-2xl rounded-tl-sm text-xs shadow-sm">
                      Hi, I need help with my recent order.
                    </div>
                    {/* Animated Reply */}
                    <motion.div 
                      key="reply"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.4 }}
                      className="self-end max-w-[80%] bg-[#10b981] text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-md"
                    >
                      Hello! I'd be happy to look into that for you. Could you please provide your order number?
                    </motion.div>
                 </div>
                 <div className="h-12 bg-white border-t border-border m-2 rounded-lg flex items-center px-3">
                    <div className="h-4 w-1/3 bg-gray-100 rounded"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 md:-right-8 z-30 glass p-4 rounded-2xl shadow-glass flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
        </div>
        <div>
          <p className="text-xs font-bold text-primary">Ticket Assigned</p>
          <p className="text-[10px] text-secondary">Alex is typing...</p>
        </div>
      </motion.div>

      <motion.div 
         animate={{ y: [8, -8, 8] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
         className="absolute bottom-1/4 -left-4 md:-left-12 z-30 glass p-3 rounded-xl shadow-glass flex items-center gap-2 backdrop-blur-xl"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
          <img src="https://i.pravatar.cc/100?img=33" alt="avatar" />
        </div>
        <div className="flex -space-x-2 mr-2">
           <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="w-6 h-6 rounded-full border border-white" />
           <img src="https://i.pravatar.cc/100?img=24" alt="avatar" className="w-6 h-6 rounded-full border border-white" />
        </div>
        <div className="text-[10px] font-semibold text-primary px-2 bg-white/50 rounded-full py-0.5">Team Sync</div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center scroll-mt-28">
      <div className="absolute inset-0 bg-[#f8fafc] -z-20"></div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10"></div>
      
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial="hidden" animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-2xl"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold mb-6">
                 <span className="flex h-2 w-2 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 New: Automated Routine Replies
               </div>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6"
            >
              One WhatsApp Number. <br />
              <span className="gradient-text-hero">Your Entire Team.</span>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-secondary mb-8 leading-relaxed max-w-xl"
            >
              Stop sharing phones. Equip your sales and support teams with a powerful shared inbox built specifically for WhatsApp Business.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary h-14 px-8 text-base shadow-brand">
                Start Free Trial
              </button>
              <button className="btn-secondary h-14 px-8 text-base">
                Book a Demo
              </button>
            </motion.div>
            
            <motion.div 
               variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
               className="mt-10 flex items-center gap-4 text-sm text-secondary font-medium"
            >
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-10 h-10 rounded-full border-2 border-background" />
                 ))}
               </div>
               <p>Joined by <span className="text-primary font-bold">1,000+</span> teams growing on WhatsApp</p>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Mockup */}
          <div className="relative">
             <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-12 border-y border-border bg-white overflow-hidden flex flex-col items-center">
       <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-8 text-center">Trusted by innovative teams worldwide</p>
       <div className="w-full flex space-x-12 animate-scroll">
         {/* Duplicate lists for seamless scrolling */}
         {[1, 2].map((listIndex) => (
           <div key={listIndex} className="flex space-x-16 items-center flex-shrink-0">
             <div className="font-extrabold text-2xl text-gray-400 flex items-center gap-2 tracking-tighter"><Zap className="w-6 h-6"/> STRIKE</div>
             <div className="font-bold text-2xl text-gray-400 flex items-center gap-2"><CircleDashed className="w-6 h-6"/> ACME Corp</div>
             <div className="font-bold text-2xl text-gray-400 flex items-center gap-2 tracking-tight"><Box className="w-6 h-6"/> GlobalNet</div>
             <div className="font-semibold text-2xl text-gray-400 flex items-center gap-2"><AlignLeft className="w-6 h-6"/> Linea</div>
             <div className="font-black text-2xl text-gray-400 flex items-center gap-2 tracking-tight"><BookOpen className="w-6 h-6"/> NexGen</div>
             <div className="font-bold text-2xl text-gray-400 flex items-center gap-2 tracking-wider">PULSE</div>
           </div>
         ))}
       </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: Users, title: "Shared Inbox", bg: "bg-blue-50", color: "text-blue-500",
      desc: "Connect your WhatsApp Business API and let your entire team reply from one unified dashboard."
    },
    {
      icon: ShieldCheck, title: "Role-based Access", bg: "bg-purple-50", color: "text-purple-500",
      desc: "Control who sees what. Set specific permissions for agents, managers, and admins."
    },
    {
      icon: Zap, title: "Automated Routing", bg: "bg-green-50", color: "text-green-500",
      desc: "Send chats to the right agent instantly based on language, department, or availability."
    },
    {
      icon: BarChart3, title: "Advanced Analytics", bg: "bg-amber-50", color: "text-amber-500",
      desc: "Track response times, resolution rates, and agent performance to improve customer satisfaction."
    },
    {
      icon: MessageCircle, title: "Broadcast Campaigns", bg: "bg-rose-50", color: "text-rose-500",
      desc: "Send personalized promotional messages to thousands of opted-in customers at once."
    },
    {
      icon: BookOpen, title: "CRM Integration", bg: "bg-indigo-50", color: "text-indigo-500",
      desc: "See customer context right next to the chat by connecting HubSpot, Salesforce, or Shopify."
    }
  ];

  return (
    <section id="features" className="section-wrapper bg-[#f8fafc] scroll-mt-28">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label">Features</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Everything you need to scale WhatsApp support</h2>
          <p className="text-lg text-secondary">
            Built for speed and collaboration. OneChat gives your team the tools to manage conversations efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.06}
              className="feature-card group cursor-pointer"
            >
              <div className={cn("card-icon", feature.bg)}>
                <feature.icon className={cn("w-6 h-6", feature.color)} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-secondary leading-relaxed text-sm">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Connect your number", desc: "Link your existing WhatsApp Business API number in minutes. No coding required." },
    { num: "02", title: "Invite your team", desc: "Add your sales and support agents and organize them into specific departments." },
    { num: "03", title: "Setup routing rules", desc: "Define how incoming messages should be distributed among your available team members." },
    { num: "04", title: "Start responding", desc: "Collaborate on chats with internal notes and provide faster resolutions together." }
  ];

  return (
    <section className="section-wrapper bg-white py-32 border-y border-border scroll-mt-28">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">How it works</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">From setup to first reply in minutes</h2>
            <p className="text-lg text-secondary mb-12 max-w-md">
              We've stripped away the complexity of WhatsApp API integration so you can focus on your customers.
            </p>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#10b981] before:via-border before:to-transparent">
               {steps.map((step, i) => (
                 <ScrollReveal
                    key={i}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                    delay={i * 0.08}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                 >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#10b981] text-white font-bold text-sm shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#f8fafc] p-5 rounded-2xl border border-border shadow-sm group-hover:border-[#10b981]/30 transition-colors">
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
          </div>
          
          <ScrollReveal 
            className="lg:h-[700px] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[32px] p-8 shadow-2xl relative overflow-hidden hidden lg:flex flex-col border border-border"
            direction="right"
            delay={0.1}
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             
             {/* Fake Code / Setup UI Window */}
             <div className="w-full bg-[#0f172a]/80 backdrop-blur border border-white/10 rounded-xl overflow-hidden shadow-2xl mt-auto relative z-10">
               <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 <span className="ml-4 text-xs font-mono text-white/50">setup-wizard.tsx</span>
               </div>
               <div className="p-6 font-mono text-sm">
                  <div className="flex gap-4 opacity-50 mb-4 items-center">
                    <span className="text-white/30">1</span>
                    <span className="text-green-400">Ã¢Å“â€œ Connected Number: +1 555 0123</span>
                  </div>
                  <div className="flex gap-4 mb-4 items-center bg-white/5 p-2 rounded -mx-2">
                    <span className="text-white/30 px-2">2</span>
                    <span className="text-blue-400 animate-pulse">Syncing Contacts... 45%</span>
                  </div>
                  <div className="flex gap-4 opacity-30 items-center">
                    <span className="text-white/30">3</span>
                    <span className="text-white">Invite Team Members</span>
                  </div>
               </div>
             </div>

             <div className="absolute top-1/4 right-8 glass-dark p-4 rounded-xl flex items-center gap-4 animate-float border border-white/10">
               <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                 <CheckCircle2 className="w-6 h-6 text-white" />
               </div>
               <div>
                 <p className="text-white font-bold">API Connected</p>
                 <p className="text-white/50 text-xs text-green-400">Status: Active & Routing</p>
               </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    { id: 'sales', icon: Zap, label: 'Sales Teams', title: 'Close deals faster over WhatsApp', desc: 'Convert inquiries to sales with quick replies, automated catalogs, and CRM sync. Never let a hot lead go cold.' },
    { id: 'support', icon: Users, label: 'Customer Support', title: 'Resolve issues collaboratively', desc: 'Assign tickets, use internal notes, and maintain a full history of customer interactions without leaving the app.' },
    { id: 'realestate', icon: Building2, label: 'Real Estate', title: 'Schedule viewings instantly', desc: 'Share property brochures and virtual tours directly. Automate follow-ups for prospective buyers.' },
    { id: 'ecommerce', icon: Store, label: 'E-commerce', title: 'Automate order updates', desc: 'Send automated shipping notifications and handle return requests seamlessly through WhatsApp.' }
  ];

  const [activeTab, setActiveTab] = useState(cases[0].id);
  const activeCase = cases.find(c => c.id === activeTab);
  const activeIndex = Math.max(0, cases.findIndex(c => c.id === activeTab));

  return (
    <section id="solutions" className="section-wrapper bg-[#f8fafc] scroll-mt-28">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label">Solutions</div>
          <h2 className="text-4xl font-extrabold tracking-tight">One platform, limitless use cases</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col overflow-x-auto lg:w-1/3 gap-2 pb-4 lg:pb-0 scrollbar-hide">
            {cases.map((c) => (
              <motion.button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal flex-shrink-0 cursor-pointer",
                  activeTab === c.id 
                    ? "bg-white shadow-card border border-border text-primary scale-[1.02]" 
                    : "text-secondary hover:bg-gray-100"
                )}
              >
                <c.icon className={cn("w-5 h-5", activeTab === c.id ? "text-[#10b981]" : "text-slate-400")} />
                <span className="font-semibold">{c.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm min-h-[400px] flex flex-col justify-center relative overflow-hidden">
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: activeIndex % 2 === 0 ? -28 : 28 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: activeIndex % 2 === 0 ? 28 : -28 }}
                 transition={{ duration: 0.45, ease: 'easeOut' }}
                 className="relative z-10 max-w-lg"
               >
                 <div className="w-14 h-14 bg-green-50 text-[#10b981] rounded-2xl flex items-center justify-center mb-6">
                   {activeCase && <activeCase.icon className="w-7 h-7" />}
                 </div>
                 <h3 className="text-3xl font-bold tracking-tight mb-4">{activeCase?.title}</h3>
                 <p className="text-lg text-secondary leading-relaxed mb-8">{activeCase?.desc}</p>
                 <button className="text-[#10b981] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                   Explore {activeCase?.label} solutions <ArrowRight className="w-4 h-4" />
                 </button>
               </motion.div>
             </AnimatePresence>

             {/* Decorative Background for Card */}
             <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform translate-x-1/4 translate-y-1/4">
                  <path fill="#10b981" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98.1,-18.1,98.6,-2.4C99.1,13.2,93.4,29.1,83.9,42.5C74.4,55.9,61.1,66.8,46.5,74.5C31.9,82.2,16,86.7,0.4,85.9C-15.1,85.2,-30.3,79.2,-44.1,70.8C-57.9,62.4,-70.3,51.6,-78.9,38.3C-87.5,25,-92.3,9.2,-91.3,-6.2C-90.3,-21.6,-83.4,-36.5,-73.4,-48.6C-63.4,-60.7,-50.2,-69.9,-36.3,-77.2C-22.4,-84.5,-7.8,-89.9,7.1,-89.5C22.1,-89.1,44.7,-76.4ZM44.7,-76.4"/>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="section-wrapper bg-white py-32 border-t border-border scroll-mt-28">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Simple pricing, no surprises</h2>
          <p className="text-lg text-secondary">Start free, upgrade when you need more power.</p>
          
          <div className="inline-flex items-center p-1.5 bg-gray-100 rounded-full mt-8">
            <button className="px-6 py-2 rounded-full font-semibold text-sm bg-white shadow-sm text-primary">Monthly</button>
            <button className="px-6 py-2 rounded-full font-semibold text-sm text-secondary">Annually <span className="text-xs text-[#10b981] ml-1">-20%</span></button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Starter */}
          <ScrollReveal direction="left" className="pricing-card lg:h-[90%] cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <p className="text-sm text-secondary mb-6">For small teams getting started.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">$29</span><span className="text-secondary">/mo</span>
            </div>
            <button className="btn-secondary w-full mb-8">Start Free Trial</button>
            <div className="space-y-4">
              {['3 Team Members', '1 WhatsApp Number', 'Basic Routing', 'Standard Support'].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" /> {feature}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Business (Popular) */}
          <ScrollReveal direction="up" delay={0.08} className="pricing-card pricing-card-popular text-white relative z-10 lg:-mt-8 lg:mb-8 cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-brand">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Business</h3>
            <p className="text-sm text-gray-400 mb-6">For growing businesses needing scale.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">$79</span><span className="text-gray-400">/mo</span>
            </div>
            <button className="btn-primary w-full mb-8">Start Free Trial</button>
            <div className="space-y-4">
              {['10 Team Members', '3 WhatsApp Numbers', 'Advanced Automated Rules', 'Broadcast Campaigns', 'CRM Integrations', 'Priority Support'].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0" /> {feature}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Enterprise */}
          <ScrollReveal direction="right" className="pricing-card lg:h-[90%] cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-sm text-secondary mb-6">Custom solutions for large operations.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">Custom</span>
            </div>
            <button className="btn-secondary w-full mb-8">Contact Sales</button>
            <div className="space-y-4">
              {['Unlimited Members', 'Unlimited Numbers', 'Custom Integrations', 'Dedicated Account Manager', 'SLA Guarantee'].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" /> {feature}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[#0f172a] -z-20"></div>
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#10b981]/20 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#6366f1]/20 to-transparent rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal
            direction="up"
            className="glass-dark border border-white/10 rounded-[40px] p-12 md:p-20 shadow-2xl backdrop-blur-xl"
          >
            <Globe className="w-16 h-16 text-[#34d399] mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to upgrade your WhatsApp workflow?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">
              Join thousands of teams already providing exceptional conversational experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary h-14 px-8 text-base shadow-brand border border-[#34d399]/30">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary h-14 px-8 text-base bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 hover:text-white">
                Talk to Sales
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-6 mt-8">No credit card required. Cancel anytime.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-border">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BrandMark compact />
            </div>
            <p className="text-secondary text-sm max-w-xs mb-8 leading-relaxed">
              The modern customer service and sales platform built exclusively for WhatsApp Business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-primary">Product</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Shared Inbox</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Broadcasting</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Automation Rules</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Solutions</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Sales Teams</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Real Estate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Resources</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Company</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-[#10b981] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 OneChat Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
             <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const OneChat = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#10b981]/20">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};
