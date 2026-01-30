import Image from "next/image";
// Force refresh


const WHATSAPP_NUMBER = "573222898383";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola King Clean, tengo mascotas y necesito eliminar olores y manchas de orina. ¿Pueden ayudarme?"
);

export default function PetSection() {
  const benefits = [
    {
      title: "100% Eliminación de Orina",
      description:
        "Nuestro tratamiento especializado elimina completamente el olor a orina de perros y gatos, incluso manchas antiguas.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Eliminación de Ácaros",
      description:
        "El pelo de mascota atrae ácaros. Nuestro vapor a alta temperatura los elimina, mejorando la salud respiratoria de tu familia.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "90% Manchas Difíciles",
      description:
        "Vómito, heces, barro... Nuestros productos profesionales atacan las manchas más complicadas que dejan las mascotas.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Seguro para Mascotas",
      description:
        "Usamos productos biodegradables y seguros. Tu mascota puede volver a usar el mueble después del secado.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="mascotas" className="py-16 lg:py-24 bg-[#06B6D4]/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#06B6D4]/10 text-[#06B6D4] font-medium rounded-full text-sm mb-6">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Para Dueños de Mascotas
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-[family-name:var(--font-poppins)]">
              El <span className="text-[#06B6D4]">Terror de la Orina</span> y los
              Ácaros
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              Sabemos lo difícil que es mantener limpios los muebles cuando
              tienes mascotas. <strong>King Clean es el especialista</strong> en
              eliminar esos olores y manchas que parecen imposibles. Tu hogar
              volverá a oler a limpio, garantizado.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-xl flex items-center justify-center text-[#06B6D4] mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-text-primary mb-2 font-[family-name:var(--font-poppins)]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotizar Limpieza para Mascotas
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 to-primary/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl shadow-elevated overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 h-full">
                <Image
                  src="/pet-cleaning.jpg"
                  alt="Limpieza de muebles con mascotas - Eliminación de olores y pelos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elevated p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-success">100%</span>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm">
                      Eliminación
                    </p>
                    <p className="text-xs text-text-secondary">
                      de olores de orina
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats 2 */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-elevated p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#06B6D4]">90%</span>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm">Manchas</p>
                    <p className="text-xs text-text-secondary">difíciles removidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
