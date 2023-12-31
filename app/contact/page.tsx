import ContactForm from '@/app/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Kirim pesan untuk saya',
};

export default function Contact() {
  return (
    <section className="relative p-4 min-w-[334px]">
      <div className="font-mono text-base text-gray12">
        <div className="min-h-[calc(100vh-38px-39px-34px-32px-104px)] w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl">Kirim Pesan 📬</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}