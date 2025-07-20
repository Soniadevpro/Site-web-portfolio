"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '../ui/theme-toggle'
import { Menu, X, Coffee, Sparkles } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-sumi-900/90 backdrop-blur-xl shadow-xl border-b border-sakura-200 dark:border-sumi-700' 
        : 'bg-transparent'
    }`}>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo CLEAN */}
          <Link href="#home" className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-sakura-500 to-fuji-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            
            <div className="hidden sm:block">
              <div className="font-japanese font-bold text-xl text-sumi-900 dark:text-white group-hover:text-sakura-600 dark:group-hover:text-sakura-400 transition-colors">
                Sonia Sabbahi
              </div>
              <div className="text-xs text-sumi-500 dark:text-sumi-400 font-medium tracking-wider">
                Développeuse Full-Stack
              </div>
            </div>
          </Link>

          {/* Navigation Desktop CLEAN */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? 'text-sakura-600 dark:text-sakura-400'
                    : 'text-sumi-600 dark:text-sumi-300 hover:text-sakura-600 dark:hover:text-sakura-400'
                }`}
              >
                <span className="relative">
                  {item.name}
                  
                  {/* Indicateur actif */}
                  <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-sakura-500 to-fuji-500 transform transition-transform duration-300 origin-center ${
                    activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                  
                  {/* Effet hover */}
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-sakura-300 to-fuji-300 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Status DISCRET */}
            <div className="hidden md:flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Disponible
              </span>
            </div>

            <ThemeToggle />
            
            {/* CTA Button SIMPLE */}
            <Link
              href="#contact"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-sakura-500 to-fuji-500 text-white font-medium px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Coffee size={16} />
              <span>Discutons</span>
            </Link>
            
            {/* Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-sakura-100 dark:bg-sumi-800 text-sumi-700 dark:text-sumi-200 hover:bg-sakura-200 dark:hover:bg-sumi-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile CLEAN */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-sakura-100 dark:border-sumi-700">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-sakura-500 to-fuji-500 text-white'
                      : 'text-sumi-600 dark:text-sumi-300 hover:bg-sakura-50 dark:hover:bg-sumi-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Mobile */}
              <div className="pt-4 mt-4 border-t border-sakura-100 dark:border-sumi-700">
                <Link
                  href="#contact"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-sakura-500 to-fuji-500 text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Coffee size={18} />
                  <span>Commencer un projet</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}