"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Code, Coffee, Award, Users, Heart, Zap, Star, Briefcase } from 'lucide-react'

export function About() {
  const [activeTab, setActiveTab] = useState('tech')

  // Compétences techniques sans jauges ridicules
  const techSkills = [
    { name: "JavaScript", experience: "4 ans", level: "Experte", icon: "⚡", description: "ES6+, async/await, frameworks modernes" },
    { name: "Python", experience: "3 ans", level: "Avancée", icon: "🐍", description: "Django, FastAPI, scripts automation" },
    { name: "React", experience: "3 ans", level: "Experte", icon: "⚛️", description: "Hooks, Context, performance optimization" },
    { name: "Django", experience: "2 ans", level: "Solide", icon: "🌿", description: "API REST, ORM, architecture MVC" },
    { name: "TypeScript", experience: "2 ans", level: "Solide", icon: "📘", description: "Types avancés, interfaces, génériques" },
    { name: "Next.js", experience: "1 an", level: "En progression", icon: "🚀", description: "SSR, API routes, optimisation" }
  ]

  // Soft skills de tes 10 ans d'expérience
  const softSkills = [
    { skill: "Communication client", icon: "💬", description: "10 ans d'expérience en relation client directe" },
    { skill: "Gestion de projet", icon: "📋", description: "Coordination équipes, respect des délais" },
    { skill: "Résolution de problèmes", icon: "🧩", description: "Approche analytique et créative" },
    { skill: "Adaptabilité", icon: "🔄", description: "Transition réussie commerce → tech" },
    { skill: "Écoute active", icon: "👂", description: "Comprendre les vrais besoins clients" },
    { skill: "Pédagogie", icon: "🎓", description: "Expliquer la technique aux non-techniques" }
  ]

  // Valeurs ajoutées uniques
  const uniqueValues = [
    { title: "Double expertise", subtitle: "Tech + Business", icon: Briefcase, description: "Je comprends autant le code que les enjeux business" },
    { title: "Orientation client", subtitle: "Service avant tout", icon: Heart, description: "10 ans à satisfaire des clients exigeants" },
    { title: "Communication", subtitle: "Pas de jargon", icon: Users, description: "J'explique la tech de manière accessible" },
    { title: "Qualité", subtitle: "Détail obsessionnel", icon: Star, description: "Perfectionniste par nature et expérience" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-fuji-50 via-sakura-50 to-bamboo-50 dark:from-sumi-900 dark:via-sumi-800 dark:to-sumi-900 relative overflow-hidden">
      
      {/* Animations subtiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-sakura-300' : i % 3 === 1 ? 'bg-fuji-300' : 'bg-bamboo-300'
            }`}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-japanese font-bold text-sumi-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-sumi-600 dark:text-sumi-300 max-w-2xl mx-auto">
            Développeuse avec 10 ans d'expérience client et une passion pour la technologie
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Photo et présentation */}
          <div className="text-center lg:text-left">
            
            {/* Photo */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-sakura-400 to-fuji-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="relative">
                <Image
                  src="/images/sonia-photo.png"
                  alt="Sonia Sabbahi - Développeuse Full-Stack"
                  width={300}
                  height={300}
                  className="rounded-3xl shadow-2xl border-4 border-white dark:border-sumi-700 hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-sumi-800 shadow-lg rounded-full px-4 py-2 border border-sakura-200 dark:border-sumi-600">
                  <span className="text-sm font-medium text-sakura-600 dark:text-sakura-400">
                    Dev + 10 ans commerce
                  </span>
                </div>
              </div>
            </div>

            {/* Présentation */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="text-lg text-sumi-600 dark:text-sumi-300 mb-6 leading-relaxed">
                <strong>Reconversion réussie</strong> du commerce vers le développement ! 
                Je combine ma passion pour la tech avec 10 ans d'expérience en relation client 
                et service.
              </p>
              
              <p className="text-sumi-600 dark:text-sumi-300 mb-8 leading-relaxed">
                Cette double expertise me permet de créer des solutions techniques qui 
                <strong> répondent vraiment aux besoins utilisateurs</strong>, avec une approche 
                centrée sur l'expérience et la satisfaction client.
              </p>
              
              {/* Ma différence */}
              <div className="bg-white/50 dark:bg-sumi-800/50 backdrop-blur-sm p-6 rounded-2xl border border-sakura-200 dark:border-sumi-600">
                <h3 className="text-lg font-semibold text-sumi-800 dark:text-sumi-200 mb-3 flex items-center">
                  <Zap className="mr-2 text-sakura-500" size={20} />
                  Ma différence
                </h3>
                <p className="text-sumi-600 dark:text-sumi-300 italic">
                  "Je ne code pas juste pour coder, je développe des solutions qui font vraiment sens pour les utilisateurs et les entreprises."
                </p>
              </div>
            </div>
          </div>

          {/* Compétences avec onglets */}
          <div>
            
            {/* Onglets */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'tech'
                    ? 'bg-gradient-to-r from-sakura-500 to-fuji-500 text-white shadow-lg'
                    : 'bg-white dark:bg-sumi-800 text-sumi-600 dark:text-sumi-300 hover:bg-sakura-50 dark:hover:bg-sumi-700'
                }`}
              >
                <Code className="inline mr-2" size={16} />
                Compétences Tech
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'soft'
                    ? 'bg-gradient-to-r from-sakura-500 to-fuji-500 text-white shadow-lg'
                    : 'bg-white dark:bg-sumi-800 text-sumi-600 dark:text-sumi-300 hover:bg-sakura-50 dark:hover:bg-sumi-700'
                }`}
              >
                <Users className="inline mr-2" size={16} />
                Soft Skills
              </button>
            </div>
            
            {/* Contenu des onglets */}
            {activeTab === 'tech' && (
              <div className="space-y-4">
                {techSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-sumi-800 p-4 rounded-xl border border-gray-200 dark:border-sumi-600 hover:border-sakura-300 dark:hover:border-sakura-500 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-sumi-800 dark:text-sumi-200">{skill.name}</h4>
                          <div className="text-right">
                            <div className="text-xs text-sumi-500 dark:text-sumi-400">{skill.experience}</div>
                            <div className={`text-sm font-medium ${
                              skill.level === 'Experte' ? 'text-green-600' :
                              skill.level === 'Avancée' ? 'text-blue-600' :
                              skill.level === 'Solide' ? 'text-purple-600' :
                              'text-orange-600'
                            }`}>
                              {skill.level}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-sumi-600 dark:text-sumi-300">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'soft' && (
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-sumi-800 p-4 rounded-xl border border-gray-200 dark:border-sumi-600 hover:border-sakura-300 dark:hover:border-sakura-500 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div>
                        <h4 className="font-semibold text-sumi-800 dark:text-sumi-200 mb-1">{skill.skill}</h4>
                        <p className="text-sm text-sumi-600 dark:text-sumi-300">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Valeurs ajoutées uniques */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-sumi-900 dark:text-white mb-6">
                Mes atouts uniques
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {uniqueValues.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div
                      key={index}
                      className="text-center bg-gradient-to-br from-sakura-50 to-fuji-50 dark:from-sumi-800 dark:to-sumi-700 p-4 rounded-xl border border-sakura-200 dark:border-sumi-600 hover:scale-105 transition-transform duration-200"
                    >
                      <IconComponent className="w-8 h-8 text-sakura-500 mx-auto mb-2" />
                      <div className="font-semibold text-sumi-800 dark:text-sumi-200 text-sm">{value.title}</div>
                      <div className="text-xs text-sakura-600 dark:text-sakura-400 mb-1">{value.subtitle}</div>
                      <div className="text-xs text-sumi-600 dark:text-sumi-300">{value.description}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}