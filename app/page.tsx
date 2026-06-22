"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Star, Check, ChevronDown, ChevronUp, Mail, Phone,
  Facebook, Instagram, Youtube, Twitter, ArrowRight, Dumbbell,
  Users, Calendar, TrendingUp, Award, Clock, Heart, Zap,
  Target, BarChart3, MessageCircle, Send, Play,
} from "lucide-react";

// ==================== NAVIGATION ====================
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "nav-scrolled py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            JR <span className="text-flex-red">Fitness.</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact"
              className="hidden sm:inline-flex btn-primary bg-flex-red text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-flex-red-dark">
              Join Now
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden fixed inset-0 bg-flex-black/98 backdrop-blur-lg z-40 transition-transform duration-300 ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`} style={{ top: "70px" }}>
        <div className="flex flex-col items-center gap-8 pt-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-white/80 hover:text-flex-red transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary bg-flex-red text-white px-8 py-3 rounded text-lg font-semibold mt-4">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}

// ==================== HERO ====================
function Hero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero.png" alt="Fitness background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-flex-red/20 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 animate-fadeInUp">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star size={14} className="text-flex-red fill-flex-red" />
              <span className="text-xs font-medium">Elite Training Facility</span>
            </div>
            <span className="text-sm text-white/60">4.9 Rated by 12K+ Athletes</span>
          </div>
          <h1 className="heading-xl mb-6 animate-fadeInUp delay-100">
            <span className="text-flex-red">DISCIPLINE</span><br />
            <span className="text-white">BUILDS CHAMPIONS</span>
          </h1>
          <p className="text-body max-w-lg mb-8 animate-fadeInUp delay-200">
            JR Fitness is where ambition meets results. Expert coaching, proven programs, and a community committed to helping you become the strongest version of yourself.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300">
            <a href="#pricing"
              className="btn-primary inline-flex items-center gap-2 bg-flex-red text-white px-8 py-3.5 rounded font-semibold hover:bg-flex-red-dark">
              Start Your Journey
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded font-semibold hover:bg-white/10 transition-all">
              View Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ABOUT ====================
function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Award, text: "Certified Trainers" },
    { icon: Calendar, text: "Flexible Memberships" },
    { icon: Target, text: "Personalized Workouts" },
    { icon: Dumbbell, text: "Modern Equipment" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-flex-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-lg">
              <img src="/images/about.png" alt="Fitness training" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-flex-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-flex-red/30 rounded-lg -z-10" />
          </div>
          <div className="reveal-right">
            <span className="text-sm font-medium text-white/50 uppercase tracking-wider">JR Fitness. Engineered For Results.</span>
            <h2 className="heading-lg mt-4 mb-6">
              TRAIN WITH<br />
              <span className="text-white/40">PURPOSE AND PRECISION.</span>
            </h2>
            <p className="text-body mb-6">
              At JR Fitness, we don&apos;t believe in shortcuts. Every program is built on proven methods, real accountability, and coaching that pushes you to do more than you thought possible - one structured session at a time.
            </p>
            <p className="text-body mb-8">
              Our certified coaches combine science-backed programming with hands-on guidance, so every rep, every set, and every milestone moves you closer to the strongest version of yourself.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-flex-red/20 flex items-center justify-center">
                    <Check size={12} className="text-flex-red" />
                  </div>
                  <span className="text-sm text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary inline-flex items-center gap-2 bg-flex-red text-white px-6 py-3 rounded font-semibold">Our Story</a>
              <a href="#pricing" className="inline-flex items-center gap-2 text-white font-semibold hover:text-flex-red transition-colors">Join Membership <ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== STATS ====================
function Stats() {
  const [counts, setCounts] = useState({ members: 0, trainers: 0, classes: 0, rate: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounts();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const targets = { members: 2150, trainers: 40, classes: 230, rate: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounts({
        members: Math.round(targets.members * easeOut),
        trainers: Math.round(targets.trainers * easeOut),
        classes: Math.round(targets.classes * easeOut),
        rate: Math.round(targets.rate * easeOut),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const stats = [
    { value: counts.members, suffix: "+", label: "Active Members" },
    { value: counts.trainers, suffix: "+", label: "Certified Trainers" },
    { value: counts.classes, suffix: "+", label: "Weekly Classes" },
    { value: counts.rate, suffix: "%", label: "Success Rate" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-flex-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number mb-2">{stat.value.toLocaleString()}<span className="text-flex-red">{stat.suffix}</span></div>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES ====================
function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "PERSONAL TRAINING",
      subtitle: "Personal Training",
      description: "One-on-one coaching tailored to your body, pace, and goals. Customized sessions, expert guidance, measurable progress.",
      image: "/images/services1.png",
      tags: ["1:1 Coaching", "Form Guidance", "Motivation", "Progress Tracking", "Expert Support"],
    },
    {
      number: "02",
      title: "NUTRITION COACHING",
      subtitle: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your workouts and optimize recovery. Expert advice for lasting results.",
      image: "/images/services2.png",
      tags: ["Meal Plans", "Macro Tracking", "Supplement Guide", "Weekly Reviews", "Diet Adjustments"],
    },
    {
      number: "03",
      title: "GROUP CLASSES",
      subtitle: "Group Classes",
      description: "High-energy group sessions from HIIT to yoga. Train with a community that pushes you to be your best every single day.",
      image: "/images/services3.png",
      tags: ["HIIT", "Yoga", "Strength", "Cardio", "Boxing"],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-flex-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">What We Offer</span>
          <h2 className="heading-lg mt-4">
            BUILT FOR<br />
            <span className="text-white/40">EVERY GOAL.</span><br />
            <span className="text-white/20">EVERY LEVEL.</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Whether you&apos;re chasing strength, stamina, or a full transformation, our programs meet you where you are and push you further.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#pricing" className="btn-primary inline-flex items-center gap-2 bg-flex-red text-white px-6 py-3 rounded font-semibold">Explore Programs</a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition-all">Become a Member</a>
          </div>
        </div>
        <div className="reveal">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`relative overflow-hidden rounded-lg card-hover cursor-pointer ${activeSlide === index ? "ring-2 ring-flex-red" : ""}`} onClick={() => setActiveSlide(index)}>
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.subtitle} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-flex-black via-flex-black/50 to-transparent" />
                </div>
                <div className="p-6 bg-flex-gray">
                  <div className="text-5xl font-black text-flex-red/20 mb-2">{service.number}</div>
                  <h3 className="text-xl font-bold mb-3">{service.subtitle}</h3>
                  <p className="text-sm text-white/60 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="service-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button key={index} onClick={() => setActiveSlide(index)} className={`carousel-dot ${activeSlide === index ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    { name: "Daniel Mercer", date: "Member since Nov 2025", rating: 5, text: "JR Fitness completely changed the way I approach training. The coaches hold me accountable, the programs are structured, and the energy in the room keeps me coming back every week." },
    { name: "Olivia Hart", date: "Member since Oct 2025", rating: 5, text: "I finally found a gym that takes my goals seriously. The personalized programming and progress tracking helped me stay consistent and see real results in three months." },
    { name: "Lucas Bennett", date: "Member since Oct 2025", rating: 5, text: "The group classes push me harder than I would ever push myself, and the community here is the most supportive I have ever trained with. Best decision I have made for my health." },
    { name: "Emma Wilson", date: "Member since Oct 2025", rating: 5, text: "From my first session, I felt challenged and supported in equal measure. The personal training program rebuilt my confidence and my strength." },
    { name: "Marcus Johnson", date: "Member since Oct 2025", rating: 5, text: "The nutrition coaching combined with the training program gave me results I did not think were possible. I recommend JR Fitness to anyone serious about getting stronger." },
    { name: "Sophia Lee", date: "Member since Oct 2025", rating: 5, text: "Top-tier coaches, modern equipment, and a culture built around discipline and progress. JR Fitness is not just a gym - it is how I train for life." },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-flex-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full">
              <Star size={14} className="text-flex-red fill-flex-red" />
              <span className="text-xs font-medium">Trusted by Members</span>
            </div>
            <span className="text-sm text-white/60">4.9 Rated by 12K+ Athletes</span>
          </div>
          <h2 className="heading-lg">
            PROVEN RESULTS.<br />
            <span className="text-white/40">REAL MEMBERS.</span>
          </h2>
          <p className="text-body mt-4">No filters, no shortcuts - just people who showed up and did the work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card p-8 rounded-lg ${index >= 3 ? "hidden lg:block" : ""}`}>
              <div className="quote-mark mb-4">&ldquo;</div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-sm">&mdash; {testimonial.name}</p>
                <p className="text-xs text-white/40">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {[0, 1, 2].map((index) => (
            <button key={index} onClick={() => setActiveIndex(index)} className={`carousel-dot ${activeIndex === index ? "active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ ====================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqs = [
    { question: "Do I need prior fitness experience to join?", answer: "Not at all. Our programs are designed for every level from complete beginners to advanced athletes. Your coach will tailor everything to your pace." },
    { question: "How does the membership work?", answer: "Choose from our Basic, Pro, or Elite membership plans. Each offers different levels of access, coaching, and classes. You can upgrade or change your plan at any time." },
    { question: "Do you offer personal training?", answer: "Yes! Our Pro membership includes dedicated 1:1 coaching with certified trainers who will build a custom program just for you." },
    { question: "Can I pause or cancel my membership?", answer: "Absolutely. We offer flexible month-to-month options and you can pause your membership for up to 3 months if needed." },
    { question: "Are group classes included in the membership?", answer: "Group classes are included with our Elite membership. Basic members can purchase class packs as an add-on." },
    { question: "Do you offer nutrition guidance?", answer: "Yes, nutrition coaching is available as an add-on to any membership. Our certified nutritionists will create a meal plan tailored to your goals." },
    { question: "What should I bring for my first session?", answer: "Just bring comfortable workout clothes, a water bottle, and a towel. We provide all equipment and lockers for your belongings." },
    { question: "Do you have online coaching options?", answer: "Yes! We offer virtual personal training sessions and online fitness programs for members who prefer to train from home." },
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-flex-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-lg">
            FREQUENTLY<br />
            ASKED QUESTIONS
          </h2>
        </div>
        <div className="space-y-4 reveal">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-flex-gray rounded-lg overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium text-sm pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-flex-red shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-white/50 shrink-0" />
                )}
              </button>
              <div className={`faq-content ${openIndex === index ? "open" : ""}`} style={{ maxHeight: openIndex === index ? "500px" : "0", padding: openIndex === index ? "0 20px 20px" : "0 20px" }}>
                <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT ====================
function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-flex-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-lg">
              <img src="/images/contact.png" alt="Contact" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-flex-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="contact-info-card rounded-lg">
                  <Mail size={20} className="text-white shrink-0" />
                  <div>
                    <p className="text-xs text-white/70">Replies within 2 business days</p>
                    <p className="text-sm font-medium">Email us at: help@domain.com</p>
                  </div>
                </div>
                <div className="contact-info-card rounded-lg">
                  <Phone size={20} className="text-white shrink-0" />
                  <div>
                    <p className="text-xs text-white/70">Phone support hours:</p>
                    <p className="text-sm font-medium">Toll-Free: (+1) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Get in Touch</span>
            <h2 className="heading-lg mt-4 mb-6">
              READY TO<br />
              GET <span className="text-white/40">STARTED?</span>
            </h2>
            <p className="text-body mb-8">
              Have questions about membership, coaching, or class schedules? Our team responds fast - reach out and let&apos;s get you training.
            </p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div><input type="text" placeholder="Full Name" className="form-input" /></div>
                <div><input type="email" placeholder="Email Address" className="form-input" /></div>
              </div>
              <div><input type="tel" placeholder="Phone Number" className="form-input" /></div>
              <div>
                <select className="form-input bg-transparent">
                  <option value="" className="bg-flex-gray">Choose our services</option>
                  <option value="personal-training" className="bg-flex-gray">Personal Training</option>
                  <option value="group-classes" className="bg-flex-gray">Group Classes</option>
                  <option value="nutrition" className="bg-flex-gray">Nutrition Coaching</option>
                  <option value="membership" className="bg-flex-gray">Membership Inquiry</option>
                </select>
              </div>
              <div><textarea placeholder="How can we help you?" rows={4} className="form-input resize-none" /></div>
              <button type="submit" className="btn-primary bg-flex-red text-white px-8 py-3.5 rounded font-semibold hover:bg-flex-red-dark">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== NEWSLETTER ====================
function Newsletter() {
  return (
    <section className="newsletter-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-white mb-4">
              YOUR STRONGEST<br />
              SELF IS WAITING
            </h2>
            <p className="text-white/80 mb-8">Stop planning. Start training. Every day you wait is a day you could have grown stronger.</p>
            <a href="#pricing" className="inline-flex items-center gap-2 bg-white text-flex-red px-8 py-3.5 rounded font-semibold hover:bg-white/90 transition-colors">Get Started</a>
          </div>
          <div className="lg:border-l lg:border-white/20 lg:pl-12">
            <h3 className="text-3xl font-bold mb-4">STAY MOTIVATED</h3>
            <p className="text-sm text-white/80 mb-6">Get weekly training tips, nutrition guidance, and real motivation straight to your inbox.</p>
            <div className="flex gap-3">
              <input type="email" placeholder="Email" className="flex-1 bg-white text-flex-black px-4 py-3 rounded outline-none placeholder:text-gray-500" />
              <button className="bg-flex-black text-white px-6 py-3 rounded font-semibold hover:bg-flex-black/80 transition-colors">Subscribe</button>
            </div>
            <label className="flex items-center gap-2 mt-4 text-sm text-white/70 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              I want to receive updates
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-flex-black pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tight">JR <span className="text-flex-red">Fitness.</span></a>
            <p className="text-sm text-white/50 mt-4 mb-6">Contact Details</p>
            <div className="space-y-2 text-sm text-white/60">
              <p>Email: support@domainname.com</p>
              <p>Phone: +1 (312) 584-9021</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="social-icon"><Twitter size={16} /></a>
              <a href="#" className="social-icon"><Instagram size={16} /></a>
              <a href="#" className="social-icon"><Youtube size={16} /></a>
              <a href="#" className="social-icon"><Facebook size={16} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Membership", "Classes", "Services", "Blogs", "Contact"].map((link) => (
                <li key={link}><a href="#" className="footer-link text-sm">{link}.</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Utility page</h4>
            <ul className="space-y-3">
              {["404", "Style Guide", "Changelog", "Licenses", "Legal"].map((link) => (
                <li key={link}><a href="#" className="footer-link text-sm">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-white/60 mb-6">
              <p>Mon-Fri: 6:00 AM &ndash; 9:00 PM</p>
              <p>Sat-Sun: 7:00 AM &ndash; 7:00 PM</p>
            </div>
            <h4 className="font-semibold mb-4">Visit Our Studio</h4>
            <div className="text-sm text-white/60">
              <p>JR Fitness Training Center</p>
              <p>41 West Maple Street</p>
              <p>Chicago, IL 60610, USA</p>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-flex-red text-sm mt-3 hover:underline">View in map</a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; 2026 JR Fitness. All rights reserved.</p>
          <a href="#contact" className="text-xs text-flex-red hover:underline flex items-center gap-1">Start your membership <ArrowRight size={12} /></a>
        </div>
      </div>
    </footer>
  );
}

// ==================== TRAINERS ====================
function Trainers() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const trainers = [
    { name: "Marcus Reed", role: "Strength & Conditioning", image: "/images/trainer1.png" },
    { name: "Elena Cruz", role: "Yoga & Mobility", image: "/images/trainer2.png" },
    { name: "Jordan Pace", role: "HIIT & Cardio", image: "/images/trainer1.png" },
    { name: "Sophie Lane", role: "Nutrition & Recovery", image: "/images/trainer2.png" },
  ];

  return (
    <section id="trainers" ref={sectionRef} className="py-24 bg-flex-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Meet The Team</span>
          <h2 className="heading-lg mt-4">
            COACHES WHO<br />
            <span className="text-white/40">PUSH YOU FURTHER.</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Every JR Fitness coach is certified, experienced, and personally invested in your progress - because your results are our reputation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {trainers.map((trainer, index) => (
            <div key={index} className="card-hover rounded-lg overflow-hidden bg-flex-gray">
              <div className="relative h-72 overflow-hidden">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-flex-black via-transparent to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold mb-1">{trainer.name}</h3>
                <p className="text-sm text-flex-red">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PRICING ====================
function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "$29",
      description: "Great for getting started",
      features: ["Gym Floor Access", "Locker Room", "2 Group Classes / Week", "Mobile App Access"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$59",
      description: "Most popular for steady progress",
      features: ["Everything in Basic", "Unlimited Group Classes", "1 Personal Training Session / Month", "Nutrition Check-In"],
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$99",
      description: "For serious, dedicated training",
      features: ["Everything in Pro", "4 Personal Training Sessions / Month", "Custom Nutrition Plan", "Priority Booking"],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-flex-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Membership Plans</span>
          <h2 className="heading-lg mt-4">
            INVEST IN<br />
            <span className="text-white/40">YOUR STRENGTH.</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Transparent pricing, real value. Choose the plan that matches your commitment, and upgrade anytime as your goals grow.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 reveal">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-lg p-8 card-hover ${plan.highlighted ? "bg-flex-red" : "bg-flex-gray"}`}>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-white/50"}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={plan.highlighted ? "text-white/80" : "text-white/50"}>/month</span>
              </div>
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className={plan.highlighted ? "text-white" : "text-flex-red"} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={`btn-primary block text-center px-6 py-3 rounded font-semibold ${
                plan.highlighted ? "bg-white text-flex-black hover:bg-white/90" : "bg-flex-red text-white hover:bg-flex-red-dark"
              }`}>
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== HOW IT WORKS ====================
function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }); },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    { number: "01", title: "Sign Up", description: "Choose a membership plan that fits your goals and schedule.", image: "/images/steps1.png" },
    { number: "02", title: "Get Assessed", description: "Meet your coach for a fitness assessment and personalized plan.", image: "/images/steps2.png" },
    { number: "03", title: "Start Training", description: "Jump into sessions and classes, tracking progress along the way.", image: "/images/steps3.png" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-flex-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Getting Started</span>
          <h2 className="heading-lg mt-4">
            THREE STEPS.<br />
            <span className="text-white/40">ZERO EXCUSES.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 reveal">
          {steps.map((step, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg card-hover">
              <div className="relative h-64 overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-flex-black via-flex-black/50 to-transparent" />
              </div>
              <div className="p-6 bg-flex-gray">
                <div className="text-5xl font-black text-flex-red/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Trainers />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
