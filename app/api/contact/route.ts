import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, courriel, message } = body;

    if (!nom || !courriel || !message) {
      return NextResponse.json({ success: false, error: 'Champs manquants' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log('[contact] RESEND_API_KEY non défini — email non envoyé (mode dev)');
      console.log('[contact] Soumission reçue:', { nom, courriel, message: message.slice(0, 50) });
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Sprint Comptable Gesys <noreply@gesys.ai>',
      to: ['jim@gesys.ai'],
      subject: `[agents.gesys.ai] Nouvelle demande de démo — ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">Nouvelle demande de démo — Sprint Comptable Gesys</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e3a5f; width: 100px;">Nom</td>
              <td style="padding: 8px;">${nom}</td>
            </tr>
            <tr style="background: #f5f7fa;">
              <td style="padding: 8px; font-weight: bold; color: #1e3a5f;">Courriel</td>
              <td style="padding: 8px;"><a href="mailto:${courriel}">${courriel}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e3a5f; vertical-align: top;">Message</td>
              <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;" />
          <p style="color: #666; font-size: 12px;">Envoyé depuis agents.gesys.ai</p>
        </div>
      `,
    });

    if (error) {
      console.error('[contact] Erreur Resend:', error);
      return NextResponse.json({ success: false, error: 'Erreur envoi email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Erreur inattendue:', err);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
