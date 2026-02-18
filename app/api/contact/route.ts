import { NextRequest, NextResponse } from 'next/server'

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company } = body

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!company || !company.trim()) {
      return NextResponse.json(
        { error: 'Company is required' },
        { status: 400 }
      )
    }

    // TODO: Implement email sending to your email service
    // For now, just log the data
    console.log('[v0] Demo booking received:', { name, email, company })

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification to your team
    // 4. Integrate with CRM or booking system

    return NextResponse.json(
      {
        success: true,
        message: 'Demo booking request received. We will contact you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
