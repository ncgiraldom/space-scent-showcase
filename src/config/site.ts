export const site = {
  name: "Space Parfums",
  slogan: "Fragancias inspiradas de alta calidad",
  // Número oficial de WhatsApp — único lugar de configuración
  whatsappNumber: "573028534471",
  whatsappDisplay: "+57 302 853 4471",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappPedido(p: { nombre: string; genero: string; precio: number }) {
  return whatsappLink(
    `Hola Space Parfums, estoy interesado en comprar el perfume: ${p.nombre} (${p.genero}) de precio $${p.precio.toLocaleString("es-CO")} COP. ¿Tienen disponibilidad?`
  );
}

export function formatPrice(price: number) {
  return `$${price.toLocaleString("es-CO")} COP`;
}
