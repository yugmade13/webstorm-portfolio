'use client';

import { useForm } from '@formspree/react';
import * as process from 'process';

export default function ContactForm() {
  const [ state, handleSubmit ] = useForm(`${process.env.NEXT_PUBLIC_FORMSPREE_ID}`);

  if (state.succeeded) {
    return (
      <div className="min-h-[calc(100vh-38px-39px-34px-32px-104px)] flex flex-col justify-center sm:items-center">
        <h1 className="text-3xl">Terima Kasih! 👌</h1>
        <p className="text-gray7 sm:text-center max-w-[400px] mt-4">
          Pesan Anda telah diterima. Anda akan segera menerima jawabannya!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[500px] text-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <label
            className="mb-2 font-sans text-gray7 w-24"
            htmlFor="name"
          >
            Nama:
          </label>
          <input
            className="block text-medium font-sans appearance-none outline-none w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray5 bg-gray2"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start mt-4">
          <label
            className="mb-2 font-sans text-gray7 w-24"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="block text-medium font-sans appearance-none outline-none w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray5 bg-gray2"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start mt-4">
          <label
            className="mb-2 font-sans text-gray7 w-24"
            htmlFor="message"
          >
            Pesan:
          </label>
          <textarea
            rows={5}
            className="block text-medium font-sans appearance-none outline-none w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray5 bg-gray2"
            id="message"
            name="message"
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            aria-label="Send Message"
            disabled={state.submitting}
            type="submit"
            className="text-medium font-sans text-white px-2 py-1.5 bg-blue-primary rounded-md button-active"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  );
}