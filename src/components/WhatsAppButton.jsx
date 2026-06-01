import { useContent } from '../hooks/useContent';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppButton() {
  const { data, t } = useContent();
  const number = data.personal.phone.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${number}?text=${encodeURIComponent(t.whatsappMsg)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg shadow-green-500/40 hover:scale-110 transition-all"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
      <WhatsAppIcon size={28} className="relative" />
    </a>
  );
}
