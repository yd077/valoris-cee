import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, error: "Veuillez remplir tous les champs obligatoires." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "valoris-energy.fr",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER || "contact@valoris-energy.fr",
          pass: process.env.SMTP_PASS || "Valoris69!",
        },
      });

      const mailOptions = {
        from: '"Site Web Valoris Energy" <contact@valoris-energy.fr>',
        to: "contact@valoris-energy.fr",
        replyTo: email,
        subject: `Nouveau message de ${firstName} ${lastName} via le site web - Sujet: ${subject || 'Non précisé'}`,
        text: `Nom: ${firstName} ${lastName}\nEmail: ${email}\nTéléphone: ${phone || 'Non renseigné'}\nSujet: ${subject || 'Non précisé'}\n\nMessage:\n${message}`,
        html: `<p><strong>Nom:</strong> ${firstName} ${lastName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
               <p><strong>Sujet:</strong> ${subject || 'Non précisé'}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Erreur lors de l'envoi de l'email." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
