import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-sumi-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sakura-400 to-fuji-500 rounded-full"></div>
              <span className="text-xl font-japanese font-bold">Sonia Sabbahi</span>
            </div>
            <p className="text-sumi-300 text-sm">
              Développeuse Web & Mobile Freelance.<br/>
              Créons ensemble votre projet digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-sumi-300 hover:text-sakura-400 transition-colors text-sm">Accueil</a>
              <a href="#services" className="block text-sumi-300 hover:text-sakura-400 transition-colors text-sm">Services</a>
              <a href="#about" className="block text-sumi-300 hover:text-sakura-400 transition-colors text-sm">À propos</a>
              <a href="#contact" className="block text-sumi-300 hover:text-sakura-400 transition-colors text-sm">Contact</a>
            </nav>
          </div>

          {/* Contact et réseaux */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-sumi-300 mb-4">
              <p>sonia@tonmail.com</p>
              <p>France • Remote</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-sumi-800 rounded-full flex items-center justify-center hover:bg-sakura-600 transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-sumi-800 rounded-full flex items-center justify-center hover:bg-sakura-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-sumi-800 rounded-full flex items-center justify-center hover:bg-sakura-600 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sumi-700 mt-8 pt-8 text-center">
          <p className="text-sumi-400 text-sm flex items-center justify-center space-x-1">
            <span>© 2025 Sonia Sabbahi. Fait avec</span>
            <Heart size={14} className="text-sakura-400" />
            <span>et Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}