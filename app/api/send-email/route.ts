import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const USER_EMAIL = process.env.EMAIL_USER
const USER_PASS = process.env.EMAIL_PASS

export async function POST(
  req: Request,
) {

    const body = await req.json()
    const { nombre, email, telefono, mensaje } = body

    if (!USER_EMAIL || !USER_PASS) {
      throw new Error('EMAIL_USER and EMAIL_PASS must be set')
    }

    // Configura el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_EMAIL,
        pass: USER_PASS,
      },
    })

    try {
      // Envía el email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "stoviatandil@gmail.com",
        subject: `Nuevo mensaje de ${nombre} - ${email} - LANDING PAGE`,
        text: `
          Nombre: ${nombre}
          Email: ${email}
          Teléfono: ${telefono || 'No proporcionado'}
          Mensaje: ${mensaje}
        `,
        html: `
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `,
      })


      return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 })
    } catch (error) {
      console.error('Error al enviar el email:', error)
      return NextResponse.json({ message: 'Error al enviar el email' }, { status: 500 })
    }

}