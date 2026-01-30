import Image from "next/image";

const WHATSAPP_NUMBER = "573222898383";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola King Clean, quiero cotizar el servicio de limpieza para mi hogar. ¿Me pueden ayudar?"
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>+500 hogares satisfechos en Bogotá</span>
            </div>

            {/* H1 - Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 font-[family-name:var(--font-poppins)]">
              Limpieza Profunda{" "}
              <span className="text-gradient">Sin Moverte</span> de Casa
            </h1>

            {/* Subheadline - Pain Points */}
            <p className="text-lg sm:text-xl text-text-secondary mb-4 max-w-xl mx-auto lg:mx-0">
              Eliminamos el{" "}
              <strong className="text-primary">100% de olores de orina de mascota</strong>{" "}
              y hasta el{" "}
              <strong className="text-primary">90% de las manchas más difíciles</strong>{" "}
              de tus colchones, sofás y muebles.
            </p>

            {/* Value Propositions */}
            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 text-text-secondary">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Vapor + Desinfección + Aroma</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Bogotá y Soacha</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lunes a Sábado</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Cotizar por WhatsApp</span>
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-text-primary font-semibold text-lg px-8 py-4 rounded-full border-2 border-gray-200 hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <span>Ver Precios</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Microcopy */}
            <p className="mt-6 text-sm text-text-muted flex items-center justify-center lg:justify-start gap-2">
              <svg
                className="w-4 h-4 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Personal verificado y 100% confiable
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-elevated overflow-hidden">
                <Image
                  src="/hero-cleaning.jpg"
                  alt="Servicio de limpieza profesional King Clean - Técnico lavando un sofá"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Checkmark Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-elevated p-4 flex items-center gap-3 animate-fade-in-up">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-success"
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
                </div>
                <div>
                  <p className="font-bold text-text-primary">Servicio a Domicilio</p>
                  <p className="text-sm text-text-secondary">Rápido y confiable</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-elevated p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-text-primary">Sin Abonos</p>
                  <p className="text-sm text-text-secondary">Pago al final</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
