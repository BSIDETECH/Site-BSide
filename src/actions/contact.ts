'use server';

export async function submitContact(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const interest = formData.get('interest');
  const message = formData.get('message');

  // Simulate network delay
  await new Promise(res => setTimeout(res, 1500));

  console.log('Received contact form submission:', {
    name,
    email,
    interest,
    message,
  });

  // TODO: Integrar provedor (Firebase/Resend)
  return { success: true, message: "Mensagem enviada" };
}
