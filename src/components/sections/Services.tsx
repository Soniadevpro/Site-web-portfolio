"use client"

import { useState } from 'react'
import { Zap, Rocket, Wrench, ShoppingCart, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      title: "Site Vitrine",
      subtitle: "Impact immédiat",
      description: "Site professionnel optimisé pour convertir vos visiteurs en clients",
      price: "À partir de 800 €",
      features: ["Design responsive", "SEO optimisé", "Formulaire de contact", "Livraison 5-10 jours"],
      icon: Zap,
      gradient: "from-sakura-500 to-pink-600",
      popular: true
    },
    {
      title: "Application Web",
      subtitle: "Solution sur-mesure",
      description: "Application complète avec interface utilisateur et administration",
      price: "À partir de 2 500 €",
      features: ["Frontend React/Next.js", "Backend Django/Node.js", "API REST", "Interface admin"],
      icon: Rocket,
      gradient: "from-fuji-500 to-blue-600",
      popular: false
    },
    {
      title: "Maintenance",
      subtitle: "Support continu",
      description: "Évolutions, corrections et support technique de vos projets",
      price: "300-350 €/jour",
      features: ["Mises à jour", "Nouvelles fonctionnalités", "Corrections bugs", "Support technique"],
      icon: Wrench,
      gradient: "from-bamboo-500 to-green-600",
      popular: false
    },
    {
      title: "E-commerce",
      subtitle: "Boutique en ligne",
      description: "Solution complète pour vendre en ligne avec paiement sécurisé",
      price: "À partir de 1 500 €",
      features: ["Catalogue produits", "Paiement Stripe", "Gestion commandes", "Analytics"],
      icon: ShoppingCart,
      gradient: "from-purple-500 to-indigo-600",
      popular: false
    }
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-sumi-800 relative overflow-hidden">
      
      {/* Animations d'arrière-plan SUBTILES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Vagues fluides en arrière-plan */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 600,120 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient1)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 50 0; 0 0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f27189" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute top-0 right-0 w-full h-24 opacity-5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200,60 C900,120 600,0 0,60 L0,0 L1200,0 Z" fill="currentColor">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -30 0; 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        
        {/* Points connectés qui dérivent */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-drift opacity-20"
            style={{
              left: `${-10 + i * 5}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${25 + Math.random() * 10}s`
            }}
          >
            <div className={`w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-sakura-400' : i % 3 === 1 ? 'bg-fuji-400' : 'bg-bamboo-400'
            }`}></div>
          </div>
        ))}
        
        {/* Formes géométriques en mouvement */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-sakura-200/20 dark:border-sakura-600/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border-2 border-fuji-200/15 dark:border-fuji-600/15 rotate-45 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sumi-900 dark:text-white mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-sumi-600 dark:text-sumi-300 max-w-3xl mx-auto">
            Des solutions web modernes adaptées à vos besoins, 
            du site vitrine à l&apos;application complexe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-sumi-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border ${hoveredCard === index ? 'border-sakura-300 dark:border-sakura-500' : 'border-gray-100 dark:border-sumi-700'} overflow-hidden`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-sakura-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Populaire
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-sumi-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                
                <p className="text-sm text-sakura-600 dark:text-sakura-400 mb-3 font-medium">
                  {service.subtitle}
                </p>
                
                <p className="text-sumi-600 dark:text-sumi-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-2xl font-bold bg-gradient-to-r from-sakura-600 to-fuji-600 bg-clip-text text-transparent mb-4">
                  {service.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-sumi-500 dark:text-sumi-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-sakura-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${service.gradient} text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  En savoir plus
                </button>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-sakura-50 to-fuji-50 dark:from-sumi-800 dark:to-sumi-700 rounded-3xl p-8 text-center border border-sakura-200 dark:border-sumi-600">
          <h3 className="text-2xl font-bold text-sumi-900 dark:text-white mb-4">
            Informations pratiques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="font-semibold text-sumi-800 dark:text-sumi-200 mb-1">TJM</div>
              <div className="text-sumi-600 dark:text-sumi-300">300 à 350 €/jour</div>
            </div>
            <div>
              <div className="font-semibold text-sumi-800 dark:text-sumi-200 mb-1">Devis</div>
              <div className="text-sumi-600 dark:text-sumi-300">Gratuit sous 48h</div>
            </div>
            <div>
              <div className="font-semibold text-sumi-800 dark:text-sumi-200 mb-1">Paiement</div>
              <div className="text-sumi-600 dark:text-sumi-300">30% à la commande</div>
            </div>
          </div>
          
          <p className="text-sm text-sumi-500 dark:text-sumi-400 mb-6">
            Tous les prix sont HT • TVA non applicable, art. 293 B du CGI
          </p>
          
          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sakura-500 to-fuji-500 text-white font-medium px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Demander un devis</span>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}