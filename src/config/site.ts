export const site = {
  name: "Space Perfums",
  // Número oficial de WhatsApp — único lugar de configuración
  whatsappNumber: "573028534471",
  whatsappDisplay: "+57 302 853 4471",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}
