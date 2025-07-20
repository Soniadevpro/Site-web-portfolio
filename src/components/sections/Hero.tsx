"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Code, Coffee } from 'lucide-react'

export function Hero() {
  const [currentTech, setCurrentTech] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const techs = ['JavaScript', 'Python', 'React', 'Django', 'Next.js', 'TypeScript']

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techs.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sakura-50 via-fuji-50 to-bamboo-50 dark:from-sumi-900 dark:via-sumi-800 dark:to-sumi-900 flex items-center justify-center relative overflow-hidden">
      
      {/* Animations d'arrière-plan DISCRÈTES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Particules géométriques flottantes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <div className={`${
              i % 6 === 0 ? 'w-2 h-2 bg-sakura-300 rounded-full' :
              i % 6 === 1 ? 'w-3 h-3 bg-fuji-300 rounded-full' :
              i % 6 === 2 ? 'w-1.5 h-1.5 bg-bamboo-300 rounded-full' :
              i % 6 === 3 ? 'w-2.5 h-2.5 bg-purple-300 rounded-full' :
              i % 6 === 4 ? 'w-1 h-8 bg-gradient-to-b from-sakura-200 to-transparent' :
              'w-8 h-1 bg-gradient-to-r from-fuji-200 to-transparent'
            } dark:opacity-60`}></div>
          </div>
        ))}
        
        {/* Formes géométriques qui tournent lentement */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-sakura-200 dark:border-sakura-700 rounded-full opacity-20 animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-fuji-200 dark:border-fuji-700 rotate-45 opacity-15 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-bamboo-200/30 to-transparent dark:from-bamboo-700/30 rounded-lg animate-bounce opacity-25" style={{ animationDuration: '5s' }}></div>
        
        {/* Grille subtile */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Vagues de fond très subtiles */}
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 600,120 1200,60 L1200,120 L0,120 Z" fill="currentColor">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 100 0; 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Texte japonais décoratif */}
      <div className="text-8xl md:text-9xl font-japanese text-sakura-100 dark:text-sumi-800 opacity-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
        開発者
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="mb-6 text-lg text-sumi-600 dark:text-sumi-300">
            <span className="font-medium">Salut ! Moi c&apos;est</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-japanese font-bold text-sumi-900 dark:text-sumi-50 mb-6">
            Sonia Sabbahi
          </h1>
          
          <div className="text-2xl md:text-4xl text-sumi-600 dark:text-sumi-300 mb-4 h-16 flex items-center justify-center">
            <span className="mr-3">Développeuse</span>
            <span className="font-bold bg-gradient-to-r from-sakura-600 to-fuji-600 bg-clip-text text-transparent min-w-[180px] text-left">
              {techs[currentTech]}
            </span>
          </div>
          
          <p className="text-xl text-sumi-500 dark:text-sumi-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Je crée des applications web et mobiles modernes qui allient 
            <strong className="text-sakura-600"> performance technique</strong> et 
            <strong className="text-fuji-600"> design élégant</strong>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['JavaScript', 'Python', 'React', 'Django', 'SQL', 'TypeScript'].map((tech, index) => (
              <span
                key={tech}
                className="px-5 py-2 bg-white/60 dark:bg-sumi-800/60 backdrop-blur-sm border border-sakura-200 dark:border-sumi-600 rounded-full text-sm font-medium text-sumi-700 dark:text-sumi-300 hover:scale-105 hover:border-sakura-300 dark:hover:border-sakura-500 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-sakura-500 to-fuji-500 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Code size={20} />
              <span>Découvrir mes services</span>
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-sakura-400 text-sakura-600 dark:text-sakura-400 font-medium rounded-lg hover:bg-sakura-400 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Coffee size={20} />
              <span>Parlons de votre projet</span>
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="#" className="p-4 bg-white/50 dark:bg-sumi-800/50 backdrop-blur-sm rounded-full border border-sakura-200 dark:border-sumi-600 text-sumi-600 dark:text-sumi-300 hover:text-sakura-600 dark:hover:text-sakura-400 hover:border-sakura-300 dark:hover:border-sakura-500 transition-all duration-300 hover:scale-110">
              <Github size={20} />
            </Link>
            <Link href="#" className="p-4 bg-white/50 dark:bg-sumi-800/50 backdrop-blur-sm rounded-full border border-sakura-200 dark:border-sumi-600 text-sumi-600 dark:text-sumi-300 hover:text-sakura-600 dark:hover:text-sakura-400 hover:border-sakura-300 dark:hover:border-sakura-500 transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </Link>
            <Link href="#contact" className="p-4 bg-white/50 dark:bg-sumi-800/50 backdrop-blur-sm rounded-full border border-sakura-200 dark:border-sumi-600 text-sumi-600 dark:text-sumi-300 hover:text-sakura-600 dark:hover:text-sakura-400 hover:border-sakura-300 dark:hover:border-sakura-500 transition-all duration-300 hover:scale-110">
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-sumi-400 dark:text-sumi-500">Découvrir</span>
            <ArrowDown className="text-sumi-400 dark:text-sumi-500" size={20} />
          </div>
        </div>
      </div>
    </section>
  )
}