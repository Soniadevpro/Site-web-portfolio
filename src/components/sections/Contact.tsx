"use client"

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulation d'envoi - Remplace par ton API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          project: '',
          budget: '',
          message: '',
          timeline: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-sumi-900 relative overflow-hidden">
      
      {/* Animations d'arrière-plan subtiles */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-sumi-900 dark:text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-sumi-600 dark:text-sumi-300 max-w-2xl mx-auto">
            Discutons de votre projet ! Réponse garantie sous 24h
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-semibold text-sumi-900 dark:text-white mb-8">
              Restons en contact
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-sakura-50 to-pink-50 dark:from-sumi-800 dark:to-sumi-700 rounded-xl">
                <div className="w-12 h-12 bg-sakura-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-sumi-900 dark:text-white">Email</div>
                  <div className="text-sumi-600 dark:text-sumi-300">sonia.sabbahi@email.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-fuji-50 to-blue-50 dark:from-sumi-800 dark:to-sumi-700 rounded-xl">
                <div className="w-12 h-12 bg-fuji-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-sumi-900 dark:text-white">Téléphone</div>
                  <div className="text-sumi-600 dark:text-sumi-300">+33 X XX XX XX XX</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-bamboo-50 to-green-50 dark:from-sumi-800 dark:to-sumi-700 rounded-xl">
                <div className="w-12 h-12 bg-bamboo-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-sumi-900 dark:text-white">Localisation</div>
                  <div className="text-sumi-600 dark:text-sumi-300">France • Remote friendly</div>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="p-6 bg-gradient-to-r from-sakura-50 to-fuji-50 dark:from-sumi-800 dark:to-sumi-700 rounded-2xl border border-sakura-200 dark:border-sumi-600">
              <h4 className="font-semibold text-sumi-900 dark:text-white mb-2 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Disponibilité actuelle
              </h4>
              <p className="text-sumi-600 dark:text-sumi-300 mb-2">
                <strong>Prochaine mission :</strong> Mars 2025
              </p>
              <p className="text-sm text-sumi-500 dark:text-sumi-400">
                Temps de réponse moyen : <strong>4h</strong>
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="bg-white dark:bg-sumi-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-sumi-700">
              
              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    Message envoyé avec succès ! Je vous réponds sous 24h.
                  </span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="text-red-500" size={20} />
                  <span className="text-red-700 dark:text-red-300 font-medium">
                    Erreur lors de l'envoi. Réessayez ou contactez-moi directement.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nom et Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sumi-700 dark:text-sumi-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-sumi-600 rounded-lg focus:ring-2 focus:ring-sakura-500 focus:border-transparent bg-white dark:bg-sumi-700 text-sumi-900 dark:text-white transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-sumi-700 dark:text-sumi-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-sumi-600 rounded-lg focus:ring-2 focus:ring-sakura-500 focus:border-transparent bg-white dark:bg-sumi-700 text-sumi-900 dark:text-white transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                {/* Type de projet et Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sumi-700 dark:text-sumi-300 mb-2">
                      Type de projet
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-sumi-600 rounded-lg focus:ring-2 focus:ring-sakura-500 focus:border-transparent bg-white dark:bg-sumi-700 text-sumi-900 dark:text-white transition-colors"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="vitrine">Site vitrine</option>
                      <option value="ecommerce">Site e-commerce</option>
                      <option value="webapp">Application web</option>
                      <option value="mobile">App mobile</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-sumi-700 dark:text-sumi-300 mb-2">
                      Budget indicatif
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-sumi-600 rounded-lg focus:ring-2 focus:ring-sakura-500 focus:border-transparent bg-white dark:bg-sumi-700 text-sumi-900 dark:text-white transition-colors"
                    >
                      <option value="">Budget approximatif</option>
                      <option value="500-1000">500 - 1 000 €</option>
                      <option value="1000-2500">1 000 - 2 500 €</option>
                      <option value="2500-5000">2 500 - 5 000 €</option>
                      <option value="5000+">5 000 € et plus</option>
                      <option value="tjm">Tarif journalier</option>
                    </select>
                  </div>
                </div>
                
                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-sumi-700 dark:text-sumi-300 mb-2">
                    Timeline souhaitée
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-sumi-600 rounded-lg focus:ring-2 focus:ring-sakura-500 focus:border-transparent bg-white dark:bg-sumi-700 text-sumi-900 dark:text-white transition-colors"
                  >
                    <option value="">Quand souhaitez-vous commencer ?</option>
                    <option value="asap">Dès que possible</option>
                    <option value="1month">Dans le mois</option>
                    <option value="2-3months">Dans 2-3 mois</option>
                    <option value="later">Plus tard</option>
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-sumi-700 dark:text-sumi-300 mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-sumi-600 rounded-lg focus:ring-2 focus:ring-sakura-500 focus:border-transparent bg-white dark:bg-sumi-700 text-sumi-900 dark:text-white transition-colors resize-none"
                    placeholder="Décrivez votre projet, vos besoins spécifiques, vos attentes..."
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sakura-500 to-fuji-500 text-white font-medium py-4 px-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-sumi-500 dark:text-sumi-400">
                  En envoyant ce formulaire, vous acceptez d'être contacté concernant votre projet.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}