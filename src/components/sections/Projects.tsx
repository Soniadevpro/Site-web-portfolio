"use client"

import { useState } from 'react'
import { ExternalLink, Github, Eye, Code } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Boutique en ligne complète avec gestion des commandes et paiement sécurisé",
      category: "ecommerce",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      stats: { users: "10K+", conversion: "+300%", rating: "4.9/5" },
      status: "Live",
      gradient: "from-purple-500 to-pink-600",
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com/...",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Interface d'administration moderne avec analytics en temps réel",
      category: "webapp",
      tech: ["React", "Django", "Charts.js", "Redis"],
      stats: { components: "50+", users: "2K+", uptime: "99.9%" },
      status: "Live",
      gradient: "from-blue-500 to-cyan-600",
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com/...",
    },
    {
      id: 3,
      title: "Portfolio Créatif",
      description: "Site vitrine avec animations 3D et design moderne",
      category: "vitrine",
      tech: ["Next.js", "Three.js", "Framer Motion", "Vercel"],
      stats: { lighthouse: "100/100", animations: "12", load: "<1s" },
      status: "Live",
      gradient: "from-green-500 to-emerald-600",
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com/...",
    },
    {
      id: 4,
      title: "App Mobile",
      description: "Application React Native avec fonctionnalités avancées",
      category: "mobile",
      tech: ["React Native", "Firebase", "Expo", "TypeScript"],
      stats: { downloads: "50K+", rating: "4.8/5", platforms: "2" },
      status: "Live",
      gradient: "from-orange-500 to-red-600",
      demoUrl: "https://app-store.com",
      githubUrl: "https://github.com/...",
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'webapp', name: 'Web Apps', count: projects.filter(p => p.category === 'webapp').length },
    { id: 'vitrine', name: 'Sites Vitrine', count: projects.filter(p => p.category === 'vitrine').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-sumi-900">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sumi-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-sumi-600 dark:text-sumi-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives
          </p>
        </div>

        {/* Stats globales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          <div className="text-center bg-gradient-to-r from-sakura-50 to-pink-50 dark:from-sumi-800 dark:to-sumi-700 p-4 rounded-xl">
            <div className="text-2xl font-bold text-sakura-600 dark:text-sakura-400">4+</div>
            <div className="text-sm text-sumi-600 dark:text-sumi-300">Projets Live</div>
          </div>
          <div className="text-center bg-gradient-to-r from-fuji-50 to-blue-50 dark:from-sumi-800 dark:to-sumi-700 p-4 rounded-xl">
            <div className="text-2xl font-bold text-fuji-600 dark:text-fuji-400">60K+</div>
            <div className="text-sm text-sumi-600 dark:text-sumi-300">Utilisateurs</div>
          </div>
          <div className="text-center bg-gradient-to-r from-bamboo-50 to-green-50 dark:from-sumi-800 dark:to-sumi-700 p-4 rounded-xl">
            <div className="text-2xl font-bold text-bamboo-600 dark:text-bamboo-400">4.8/5</div>
            <div className="text-sm text-sumi-600 dark:text-sumi-300">Rating moyen</div>
          </div>
          <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-sumi-800 dark:to-sumi-700 p-4 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
            <div className="text-sm text-sumi-600 dark:text-sumi-300">Satisfaction</div>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-sakura-500 to-fuji-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-sumi-800 text-sumi-700 dark:text-sumi-200 hover:bg-sakura-100 dark:hover:bg-sumi-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-sumi-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-sumi-700"
            >
              
              {/* Header avec gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoUrl && (
                    <Link href={project.demoUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="text-white" size={16} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Github className="text-white" size={16} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-sumi-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sumi-600 dark:text-sumi-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-sumi-700 text-sumi-700 dark:text-sumi-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i} className="text-center bg-gray-50 dark:bg-sumi-700 p-2 rounded-lg">
                      <div className="text-sm font-bold text-sumi-800 dark:text-sumi-200">{value}</div>
                      <div className="text-xs text-sumi-500 dark:text-sumi-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center text-sm flex items-center justify-center space-x-1`}
                    >
                      <Eye size={16} />
                      <span>Voir le projet</span>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="flex-1 border border-sumi-300 dark:border-sumi-600 text-sumi-700 dark:text-sumi-200 font-medium py-2 px-4 rounded-lg hover:bg-sumi-50 dark:hover:bg-sumi-700 transition-all duration-300 text-center text-sm flex items-center justify-center space-x-1"
                    >
                      <Code size={16} />
                      <span>Code source</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sakura-50 to-fuji-50 dark:from-sumi-800 dark:to-sumi-700 rounded-2xl p-8 border border-sakura-200 dark:border-sumi-600">
            <h3 className="text-2xl font-bold text-sumi-900 dark:text-white mb-4">
              Votre projet sera le prochain ?
            </h3>
            <p className="text-sumi-600 dark:text-sumi-300 mb-6 max-w-2xl mx-auto">
              Discutons de votre idée et voyons comment nous pouvons la transformer en réalité
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sakura-500 to-fuji-500 text-white font-medium px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Démarrer un projet</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}