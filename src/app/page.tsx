'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Great_Vibes } from 'next/font/google'
import { Pacifico } from 'next/font/google'

import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  BookOpenText,
  ArrowUp
} from 'lucide-react';
const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })



export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const sectionIds = ['about', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Education', value: 'education' },
    { label: 'SAAS', value: 'saas' },
    { label: 'Restaurant', value: 'restaurant' },
  ];

  const taggedProjects = [
    {
      title: "E-commerce Platform Yulius",
      type: "ecommerce",
      description: "A modern e-commerce platform using Laravel, MySQL, and vanilla frontend stack.",
      tech: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      demo: "#",
    },
    {
      title: "Private LMS",
      type: "education",
      description: "LMS with Zoom and Laravel Voyager dashboard for students and teachers.",
      tech: ["Laravel", "Zoom API", "Voyager", "HTML", "CSS", "JavaScript"],
      demo: "#",
    },
    {
      title: "E-commerce App - Étoile de Rêve",
      type: "ecommerce",
      description: "Reservation for birthday parties. Built with Angular + Laravel.",
      tech: ["Laravel", "Angular", "HTML", "CSS", "JavaScript", "MySQL"],
      demo: "https://www.etoiledereve-animations.fr/",
    },
    {
      title: "Hsabati (SaaS Finance App)",
      type: "saas",
      description: "SaaS for billing, stock, and invoices. Built with Laravel API and Next.js.",
      tech: ["Laravel API", "Next.js", "MySQL", "GIT"],
      demo: "https://www.hsabati.com/",
    },
    {
      title: "Yoyammy (Restaurant QR Ordering)",
      type: "restaurant",
      description: "QR-based ordering app for restaurants using Laravel and JavaScript.",
      tech: ["Laravel", "HTML", "CSS", "JavaScript"],
      demo: "#",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("all");

  const filteredProjects = selectedTab === "all"
    ? taggedProjects
    : taggedProjects.filter((p) => p.type === selectedTab);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mohamed HARRAD
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${activeSection === section
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'hover:text-purple-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 bg-black/30 rounded-lg mb-4 space-y-1">
                {['about', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 hover:text-purple-300 capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Hello, I'm{' '}
                <br />
                <span className={`${pacifico.className} bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-5xl`}>
                  Mohamed HARRAD
                </span>


              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Full Stack Developer | Laravel & JavaScript Specialist
              </p>
              <p className="text-gray-400 mb-8">
                I have over three years of experience building scalable and performant web apps using Laravel, Next.js, Vue.js, and modern stacks. Passionate about clean code, smooth UX, and business-focused solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="/cv/Harrad_Med_CV.pdf"
                  download
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Medharrad" target='_blank' className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-harrad-6b31a923a/" target='_blank' className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:harrademed@gmail.com" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-76 h-76 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="relative z-10 w-96 h-96 mx-auto   flex items-center justify-center">
                <Image
                  src="/images/med.png"
                  alt="Mohamed HARRAD"
                  width={256}
                  height={256}
                  className="rounded-full w-90 h-110 object-cover "
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Experience & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className="space-y-8">
              {[{
                role: "Full Stack Developer",
                company: "HSABATI",
                link: "https://www.hsabati.com/",
                period: "Sep 2024 – Present",
                desc: "Built secure REST APIs with Laravel, integrated with Next.js frontend, and built admin dashboards using Vue.js.",
                skills: ["Laravel", "Vue JS", "Next.js"]
              }, {
                role: "Full Stack Developer",
                company: "IRMA Service",
                link: "https://irmaservice.com/",
                period: "Jul 2023 – Oct 2024",
                desc: "Created e-commerce platform with user management, inventory, payment, and Zoom API integration.",
                skills: ["Laravel", "Zoom API", "UX"]
              }, {
                role: "Full Stack Developer",
                company: "YOYAMY",
                period: "2021 – 2023",
                desc: "Built a restaurant web app with ordering, reservations, and tailored business modules.",
                skills: ["Laravel", "PHP", "Custom Systems"]
              }].map((job, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{job.role}</h4>
                      <a href={job.link} className="text-purple-400 hover:text-purple-300 transition-colors">
                        {job.company}
                      </a>
                    </div>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Calendar size={16} /> {job.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => {
                      const colorClasses = [
                        "bg-purple-400/20 text-purple-300",
                        "bg-pink-400/20 text-pink-300",
                        "bg-blue-400/20 text-blue-300",
                        "bg-green-400/20 text-green-300",
                        "bg-yellow-400/20 text-yellow-300",
                        "bg-indigo-400/20 text-indigo-300",
                      ];
                      const colorClass = colorClasses[idx % colorClasses.length];
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1 ${colorClass} rounded-full text-sm`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-8">
              {[
                {
                  degree: "Bachelor's in Math & Computer Science",
                  school: "University Ibn Zohr Agadir",
                  year: "2020 – 2022"
                },
                {
                  degree: "DEUG in Math & Computer Science",
                  school: "University Ibn Zohr Agadir",
                  year: "2017 – 2020"
                },
                {
                  degree: "Baccalaureate in Math Sciences",
                  school: "HASSAN II High School, Ouled Teima",
                  year: "2017"
                }
              ].map((edu, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpenText className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-purple-400 mb-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${selectedTab === tab.value
                  ? "bg-purple-500 text-white border-purple-500"
                  : "text-purple-300 border-purple-300 hover:bg-purple-400/10"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ scale: 0.9, y: -10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition transform hover:scale-105 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center text-center px-4">
                    <span className="text-white text-lg font-semibold">{project.title}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((skill, idx) => {
                        const colorClasses = [
                          "bg-purple-400/20 text-purple-300",
                          "bg-pink-400/20 text-pink-300",
                          "bg-blue-400/20 text-blue-300",
                          "bg-green-400/20 text-green-300",
                          "bg-yellow-400/20 text-yellow-300",
                          "bg-indigo-400/20 text-indigo-300",
                        ];
                        const colorClass = colorClasses[idx % colorClasses.length];
                        return (
                          <span key={skill} className={`px-3 py-1 ${colorClass} rounded-full text-sm`}>
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-4">
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={16} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-gray-300">harrademed@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-purple-400" size={20} />
                  <span className="text-gray-300">+212 6 90 62 66 45</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={20} />
                  <span className="text-gray-300">Sidi Maarouf, Casablanca</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-lg">
              <form
                action="https://formsubmit.co/c4c2dbd24943e1bd17a7e254c61392ad"
                method="POST"
                className="space-y-6"
              >
                {/* disable CAPTCHA & redirect */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Mohamed HARRAD. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
