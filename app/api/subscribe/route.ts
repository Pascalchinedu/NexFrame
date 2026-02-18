import { NextRequest, NextResponse } from 'next/server'

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // TODO: Implement newsletter subscription
    // For now, just log the subscription
    console.log('[v0] Newsletter subscription received:', email)

    // In production, you would:
    // 1. Save to database
    // 2. Integrate with email service (Mailchimp, Brevo, etc.)
    // 3. Send confirmation email
    // 4. Add to newsletter list
    // 5. Implement double opt-in flow

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to our newsletter.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
}
