import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOrderConfirmation(email: string, orderDetails: any) {
  try {
    const result = await resend.emails.send({
      from: 'Your Store <orders@yourstore.com>',
      to: email,
      subject: 'Order Confirmation',
      html: `<p>Thank you for your order!</p><p>Order details: ${JSON.stringify(orderDetails)}</p>`
    });
    console.log('Order confirmation email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    throw error;
  }
}

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  try {
    const resetUrl = `https://yourstore.com/reset-password?token=${resetToken}`;
    const result = await resend.emails.send({
      from: 'Your Store <security@yourstore.com>',
      to: email,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`
    });
    console.log('Password reset email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
}

export async function sendNewsletter(subscribers: string[], content: string) {
  try {
    const result = await resend.emails.send({
      from: 'Your Store <newsletter@yourstore.com>',
      to: subscribers,
      subject: 'Latest News and Offers',
      html: content
    });
    console.log('Newsletter sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending newsletter:', error);
    throw error;
  }
}

export async function sendAbandonedCartReminder(email: string, cartItems: any[]) {
  try {
    const result = await resend.emails.send({
      from: 'Your Store <reminders@yourstore.com>',
      to: email,
      subject: 'Don\'t forget about your cart!',
      html: `<p>You left these items in your cart: ${cartItems.map(item => item.name).join(', ')}</p>`
    });
    console.log('Abandoned cart reminder sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending abandoned cart reminder:', error);
    throw error;
  }
}