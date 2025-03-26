'use client';

import Button from './Button';

export default function NewsletterForm() {
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const emailInput = form.elements.namedItem('email') as HTMLInputElement;
      const email = emailInput.value;
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const statusMessage = form.querySelector('.status-message') as HTMLParagraphElement;

      try {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Subscribing...';
        statusMessage.textContent = '';

        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          statusMessage.textContent = 'Successfully subscribed!';
          statusMessage.className = 'status-message text-green-600 dark:text-green-400 mt-4 text-sm';
          emailInput.value = '';
        } else {
          throw new Error(data.error || 'Failed to subscribe');
        }
      } catch (error) {
        statusMessage.textContent = error instanceof Error ? error.message : 'Failed to subscribe';
        statusMessage.className = 'status-message text-red-600 dark:text-red-400 mt-4 text-sm';
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Subscribe';
      }
    }} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <div className="flex-1">
        <input 
          type="email" 
          name="email"
          required
          placeholder="Enter your email" 
          className="w-full px-6 py-4 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
        />
      </div>
      <Button type="submit" variant="primary">Subscribe</Button>
      <p className="status-message mt-4 text-sm"></p>
    </form>
  );
} 