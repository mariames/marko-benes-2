import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
  from: string;
  to: string;
  currency: string;
  completionDate: string;
}

export async function POST(req: Request) {
  const formData = await req.json() as Partial<FormData>;

  if (!formData.name || !formData.email || !formData.service) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
  }

  // Create the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: "marko@benis.studio", 
      pass: "jedanDmol92!",
    },
  });

  const mailOptions = {
    from: 'marko@benis.studio',
    to: 'marko@benis.studio', // Or any dynamic address you prefer
    subject: 'New Service Request Submission',
    text: `
      New service inquiry received:

      Name: ${formData.name}
      Email: ${formData.email}
      Service: ${formData.service}
      Message: ${formData.message || 'No message provided'}
      From: ${formData.from || 'Not specified'}
      To: ${formData.to || 'Not specified'}
      Currency: ${formData.currency || 'usd'}
      Expected Completion Date: ${formData.completionDate || 'Not specified'
}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
