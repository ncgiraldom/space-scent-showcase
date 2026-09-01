import { whatsappLink } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("Hola Space Parfums, quiero hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-black/50 transition-transform hover:scale-110"
    >
      <MessageCircle size={20} />
    </a>
  );
}
