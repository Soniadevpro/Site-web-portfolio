import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmails } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validation des données requises
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      )
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Nettoyage des données
    const cleanData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      project: data.project?.trim() || '',
      budget: data.budget?.trim() || '',
      timeline: data.timeline?.trim() || '',
      message: data.message.trim()
    }

    // Envoi des emails
    await sendContactEmails(cleanData)
    
    // Log pour debug (optionnel)
    console.log(`📧 Nouveau contact de ${cleanData.name} (${cleanData.email})`)
    
    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès',
        details: 'Vous recevrez une confirmation par email'
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('❌ Erreur API contact:', error)
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du message',
        details: 'Veuillez réessayer ou me contacter directement'
      },
      { status: 500 }
    )
  }
}