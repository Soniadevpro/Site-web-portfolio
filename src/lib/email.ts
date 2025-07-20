import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  project: string
  budget: string
  timeline: string
  message: string
}

// Configuration du transporteur - CORRECTION ICI
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Le reste du code reste identique...
const createEmailForYou = (data: ContactFormData) => {
  return {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `🚀 Nouveau projet : ${data.name} - ${data.project || 'Non spécifié'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #ea4c69 0%, #6366f1 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau message de contact !</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Détails du contact</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #ea4c69;">👤 Nom :</strong> ${data.name}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #ea4c69;">📧 Email :</strong> 
            <a href="mailto:${data.email}" style="color: #6366f1;">${data.email}</a>
          </div>
          
          ${data.project ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #ea4c69;">🎯 Type de projet :</strong> ${data.project}
            </div>
          ` : ''}
          
          ${data.budget ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #ea4c69;">💰 Budget :</strong> ${data.budget}
            </div>
          ` : ''}
          
          ${data.timeline ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #ea4c69;">⏰ Timeline :</strong> ${data.timeline}
            </div>
          ` : ''}
          
          <div style="margin-top: 20px;">
            <strong style="color: #ea4c69;">💬 Message :</strong>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #ea4c69;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #fef7f7 0%, #f0f4ff 100%); border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              📅 Reçu le ${new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 12px;">
          Portfolio Sonia Sabbahi - Développeuse Full-Stack
        </div>
      </div>
    `,
  }
}

const createConfirmationEmail = (data: ContactFormData) => {
  return {
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: `✅ Message reçu - Sonia Sabbahi`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #ea4c69 0%, #6366f1 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Merci ${data.name} !</h1>
          <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Votre message a bien été reçu</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1e293b; margin-bottom: 20px;">🚀 Et maintenant ?</h2>
          
          <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 15px; display: flex; align-items: center;">
              <div style="background: #22c55e; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; flex-shrink: 0;">1</div>
              <div>
                <strong>Analyse de votre demande</strong><br>
                <small style="color: #64748b;">Je vais étudier votre projet en détail</small>
              </div>
            </div>
            
            <div style="margin-bottom: 15px; display: flex; align-items: center;">
              <div style="background: #6366f1; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; flex-shrink: 0;">2</div>
              <div>
                <strong>Réponse personnalisée sous 24h</strong><br>
                <small style="color: #64748b;">Proposition détaillée avec devis si applicable</small>
              </div>
            </div>
            
            <div style="display: flex; align-items: center;">
              <div style="background: #ea4c69; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; flex-shrink: 0;">3</div>
              <div>
                <strong>Démarrage de votre projet</strong><br>
                <small style="color: #64748b;">Si tout vous convient, on lance le développement !</small>
              </div>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #fef7f7 0%, #f0f4ff 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #1e293b;">📋 Récapitulatif de votre demande :</h3>
            <p style="margin: 5px 0; color: #64748b;"><strong>Projet :</strong> ${data.project || 'Non spécifié'}</p>
            <p style="margin: 5px 0; color: #64748b;"><strong>Budget :</strong> ${data.budget || 'À définir'}</p>
            <p style="margin: 5px 0; color: #64748b;"><strong>Timeline :</strong> ${data.timeline || 'À définir'}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #64748b; margin-bottom: 15px;">En attendant, n'hésitez pas à :</p>
            <div>
              <a href="mailto:${process.env.EMAIL_FROM}" style="background: #ea4c69; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 5px; display: inline-block; margin-bottom: 10px;">📧 M'écrire directement</a>
              <a href="https://linkedin.com/in/sonia-sabbahi" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 5px; display: inline-block; margin-bottom: 10px;">🔗 LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 12px;">
          <p>Sonia Sabbahi - Développeuse Full-Stack</p>
          <p>Spécialisée en React, Next.js, Django & React Native</p>
        </div>
      </div>
    `,
  }
}

export async function sendContactEmails(data: ContactFormData) {
  try {
    // Vérification de la configuration
    await transporter.verify()
    
    // Envoi des deux emails en parallèle
    const [emailToYou, confirmationEmail] = await Promise.all([
      transporter.sendMail(createEmailForYou(data)),
      transporter.sendMail(createConfirmationEmail(data))
    ])
    
    console.log('✅ Emails envoyés avec succès')
    return { success: true, emailToYou, confirmationEmail }
    
  } catch (error) {
    console.error('❌ Erreur envoi email:', error)
    throw new Error('Échec de l\'envoi des emails')
  }
}