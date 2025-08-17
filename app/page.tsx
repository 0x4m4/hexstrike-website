"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronDown, Shield, Zap, Brain, Globe, Lock, Terminal } from "lucide-react"
import MermaidDiagram from "@/components/MermaidDiagram"

export default function HomePage() {
  const [displayText, setDisplayText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const fullText = "v.7.0 COMING SOON!"

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        setTimeout(() => {
          setShowCursor(false)
        }, 2000)
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [isLoaded])

  useEffect(() => {
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)

      setTimeout(() => {
        clearInterval(cursorInterval)
        setShowCursor(false)
      }, 2000)

      return () => clearInterval(cursorInterval)
    }
  }, [isTypingComplete])

  const potentialFeatures = [
    {
      title: "AI-Powered Automation",
      description: "Autonomous security testing with intelligent decision-making",
      icon: Brain
    },
    {
      title: "Comprehensive Tool Arsenal",
      description: "Professional security tools in one unified platform",
      icon: Shield
    },
    {
      title: "Multi-Agent Architecture",
      description: "Specialized AI agents for different security domains",
      icon: Zap
    },
    {
      title: "Vulnerability Intelligence",
      description: "Real-time CVE analysis and exploit generation capabilities",
      icon: Lock
    },
    {
      title: "Advanced Web Testing",
      description: "Browser automation with JavaScript execution and DOM analysis",
      icon: Globe
    },
    {
      title: "CTF & Binary Analysis",
      description: "Specialized tools for reverse engineering and forensics",
      icon: Terminal
    }
  ]

  return (
    <div className="bg-black text-red-300 relative">
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center min-h-screen w-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-2 border-red-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <div className="text-red-400 font-mono text-sm tracking-wider">
            <span className="animate-pulse">INITIALIZING HEXSTRIKE AI...</span>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="fixed inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent"></div>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Social Links */}
        <div
          className={`absolute top-6 right-6 z-20 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex gap-2 md:gap-4 flex-wrap justify-end">
            <a
              href="https://discord.gg/BWnmrrSHbA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-red-900/30 border border-red-500/30 rounded-lg hover:bg-red-900/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="text-red-400 group-hover:text-red-300 font-mono text-xs md:text-sm transition-colors hidden sm:inline">
                Discord
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/hexstrike-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-red-900/30 border border-red-500/30 rounded-lg hover:bg-red-900/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-red-400 group-hover:text-red-300 font-mono text-xs md:text-sm transition-colors hidden sm:inline">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/0x4m4/hexstrike-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-red-900/30 border border-red-500/30 rounded-lg hover:bg-red-900/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-red-400 group-hover:text-red-300 font-mono text-xs md:text-sm transition-colors hidden sm:inline">
                GitHub
              </span>
            </a>
            <a
              href="https://0x4m4.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-red-900/30 border border-red-500/30 rounded-lg hover:bg-red-900/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <Terminal className="w-4 h-4 md:w-5 md:h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="text-red-400 group-hover:text-red-300 font-mono text-xs md:text-sm transition-colors hidden sm:inline">
                Developer
              </span>
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div
            className={`mb-8 animate-[breathe_4s_ease-in-out_infinite] transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/hexstrike-logo.png"
              alt="hexstrike AI Logo"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-all duration-500"
            />
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mb-6 tracking-wider font-mono transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">hexstrike</span>{" "}
            <span className="text-red-400">AI</span>
          </h1>

          <div
            className={`mb-8 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4 tracking-[0.2em] font-mono min-h-[1.2em]">
              <span className="drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">{displayText}</span>
              {showCursor && <span className="text-red-400 animate-pulse">█</span>}
            </h2>
          </div>

          <p
            className={`text-sm md:text-lg lg:text-xl text-red-300 font-mono tracking-wider max-w-2xl leading-relaxed transition-all duration-1000 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-red-400 font-semibold">AI-BASED OFFENSIVE SECURITY TOOL</span>
            <br />
            <span className="text-red-500 text-base">v7.0 Major Release Coming Soon</span>
          </p>

          <div
            className={`mt-12 flex items-center gap-4 transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-500"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-red-500"></div>
          </div>

          <div
            className={`mt-16 animate-bounce transition-all duration-1000 delay-1200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ChevronDown className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </section>

      {/* About the Tool Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-8 font-mono tracking-wider">
            <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">ABOUT HEXSTRIKE AI</span>
          </h2>
          
          <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-8 mb-12">
            <p className="text-red-300 font-mono text-lg leading-relaxed mb-6">
              HexStrike AI is a revolutionary AI-powered offensive security framework that combines 
              <span className="text-red-400 font-bold"> professional security tools</span> with 
              <span className="text-red-400 font-bold"> autonomous AI agents</span> to deliver 
              comprehensive security testing capabilities.
            </p>
            <p className="text-red-300/80 font-mono leading-relaxed">
              Built on a multi-agent architecture, HexStrike AI leverages intelligent decision-making, 
              real-time vulnerability analysis, and advanced automation to revolutionize how security 
              professionals approach penetration testing, bug bounty hunting, and CTF challenges.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 text-center mb-16 font-mono tracking-wider">
            <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">HOW IT WORKS</span>
          </h2>

          <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-8 mb-12">
            <p className="text-red-300 font-mono text-center text-lg leading-relaxed mb-8">
              HexStrike AI operates with human-in-the-loop interaction through external LLMs via MCP, 
              creating a continuous cycle of prompts, analysis, execution, and feedback.
            </p>

            {/* Clean SVG Flow Diagram */}
            <div className="flex justify-center items-center w-full px-4">
              <div className="bg-red-900/5 border border-red-500/20 rounded-lg p-4 md:p-8 w-full max-w-6xl">
                <div className="flex justify-center items-center overflow-x-auto">
                  <svg viewBox="0 0 720 180" className="w-full h-auto min-w-[600px] max-w-[850px]" style={{minHeight: '120px'}}>
                    {/* Step 1: User Prompt */}
                    <rect x="40" y="40" width="140" height="80" rx="8" fill="#1a0000" stroke="#ef4444" strokeWidth="2"/>
                    <text x="110" y="65" textAnchor="middle" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold">01</text>
                    <text x="110" y="85" textAnchor="middle" fill="#fef2f2" fontSize="13" fontFamily="monospace" fontWeight="bold">User Prompt</text>
                    <text x="110" y="105" textAnchor="middle" fill="#fecaca" fontSize="11" fontFamily="monospace">Instructions</text>
                    
                    {/* Arrow 1 */}
                    <path d="M 185 80 L 205 80" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Step 2: LLM Processing */}
                    <rect x="210" y="40" width="140" height="80" rx="8" fill="#1a0000" stroke="#ef4444" strokeWidth="2"/>
                    <text x="280" y="65" textAnchor="middle" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold">02</text>
                    <text x="280" y="85" textAnchor="middle" fill="#fef2f2" fontSize="13" fontFamily="monospace" fontWeight="bold">LLM Processing</text>
                    <text x="280" y="105" textAnchor="middle" fill="#fecaca" fontSize="11" fontFamily="monospace">Routes via MCP</text>
                    
                    {/* Arrow 2 */}
                    <path d="M 355 80 L 375 80" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Step 3: Execute Tests */}
                    <rect x="380" y="40" width="140" height="80" rx="8" fill="#1a0000" stroke="#ef4444" strokeWidth="2"/>
                    <text x="450" y="65" textAnchor="middle" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold">03</text>
                    <text x="450" y="85" textAnchor="middle" fill="#fef2f2" fontSize="13" fontFamily="monospace" fontWeight="bold">Execute Tests</text>
                    <text x="450" y="105" textAnchor="middle" fill="#fecaca" fontSize="11" fontFamily="monospace">Security Analysis</text>
                    
                    {/* Arrow 3 */}
                    <path d="M 525 80 L 545 80" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Step 4: Feedback Loop */}
                    <rect x="550" y="40" width="140" height="80" rx="8" fill="#1a0000" stroke="#ef4444" strokeWidth="2"/>
                    <text x="620" y="65" textAnchor="middle" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold">04</text>
                    <text x="620" y="85" textAnchor="middle" fill="#fef2f2" fontSize="13" fontFamily="monospace" fontWeight="bold">Feedback Loop</text>
                    <text x="620" y="105" textAnchor="middle" fill="#fecaca" fontSize="11" fontFamily="monospace">Next Iteration</text>
                    
                    {/* Return Arrow */}
                    <path d="M 620 125 L 620 145 L 110 145 L 110 125" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="3,3" markerEnd="url(#arrowhead)"/>
                    
                    {/* Arrow marker definition */}
                    <defs>
                      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 text-center mb-16 font-mono tracking-wider">
            <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">CAPABILITIES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {potentialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 hover:bg-red-900/20 hover:border-red-500/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-red-500 mr-4 group-hover:text-red-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400 mb-3 font-mono group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-red-300/80 font-mono text-sm group-hover:text-red-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
                <div className="text-red-500 font-bold text-3xl mb-2 font-mono">200+</div>
                <div className="text-red-400 font-mono text-sm">Security Tools</div>
              </div>
              <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
                <div className="text-red-500 font-bold text-3xl mb-2 font-mono">50+</div>
                <div className="text-red-400 font-mono text-sm">AI Agents</div>
              </div>
              <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
                <div className="text-red-500 font-bold text-3xl mb-2 font-mono">100%</div>
                <div className="text-red-400 font-mono text-sm">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <a 
            href="https://github.com/0x4m4/hexstrike-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-red-900/20 border border-red-500/30 hover:border-red-500/50 hover:bg-red-900/30 rounded-lg px-8 py-6 text-red-400 hover:text-red-300 transition-all duration-300 group cursor-pointer relative z-10"
            style={{ textDecoration: 'none' }}
          >
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <div className="text-left">
              <div className="text-xl font-bold font-mono">View on GitHub</div>
              <div className="text-sm font-mono text-red-500/70">Open Source Repository</div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-500/20 bg-red-900/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-800 font-mono text-sm">
            © 2025 HEXSTRIKE AI | <a 
              href="https://0x4m4.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400 transition-colors underline"
            >
              0x4m4.com
            </a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.5));
          }
          50% { 
            transform: scale(1.05);
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.8));
          }
        }
      `}</style>
    </div>
  )
}
