const WHATSAPP_NUMBER = "573222898383";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola King Clean, quiero conocer los precios para el servicio de limpieza. ¿Pueden enviarme la lista de precios?"
);

// Pricing data - Update these values with your actual prices
const pricingData = [
  {
    category: "Colchones",
    icon: (
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    items: [
      { name: "Colchón Sencillo", price: "Desde $XX.XXX" },
      { name: "Colchón Doble", price: "Desde $XX.XXX" },
      { name: "Colchón Queen", price: "Desde $XX.XXX" },
      { name: "Colchón King", price: "Desde $XX.XXX" },
      { name: "Espaldar de Cama", price: "Desde $XX.XXX" },
    ],
  },
  {
    category: "Sofás y Sala",
    icon: (
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    items: [
      { name: "Sofá 2 Puestos", price: "Desde $XX.XXX" },
      { name: "Sofá 3 Puestos", price: "Desde $XX.XXX" },
      { name: "Sofá en L", price: "Desde $XX.XXX" },
      { name: "Poltrona", price: "Desde $XX.XXX" },
      { name: "Puff", price: "Desde $XX.XXX" },
      { name: "Silla de Comedor (unidad)", price: "Desde $XX.XXX" },
    ],
  },
  {
    category: "Tapetes y Persianas",
    icon: (
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    items: [
      { name: "Persiana (por m²)", price: "Desde $XX.XXX" },
      { name: "Tapete Pequeño (hasta 2m²)", price: "Desde $XX.XXX" },
      { name: "Tapete Mediano (2-4m²)", price: "Desde $XX.XXX" },
      { name: "Tapete Grande (+4m²)", price: "Desde $XX.XXX" },
    ],
  },
  {
    category: "Vehículos",
    icon: (
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
          d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM5 12h14M5 16h14M5 8h14"
        />
      </svg>
    ),
    items: [
      { name: "Interior Carro", price: "Desde $XX.XXX" },
      { name: "Interior Camioneta/SUV", price: "Desde $XX.XXX" },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-16 lg:py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-cta/10 text-cta font-medium rounded-full text-sm mb-4">
            Precios Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Los <span className="text-cta">Mejores Precios</span> del Mercado
          </h2>
          <p className="text-lg text-text-secondary">
            Sin sorpresas, sin costos ocultos. Cotiza gratis por WhatsApp y
            obtén el precio exacto para tu necesidad.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="bg-primary px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-text-primary font-medium">
                      {item.name}
                    </span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
            ¿Necesitas un Presupuesto Personalizado?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Escríbenos por WhatsApp con la lista de lo que necesitas limpiar y
            te enviamos la cotización exacta en minutos.{" "}
            <strong>Sin compromiso, sin abonos.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotizar por WhatsApp
            </a>

            <div className="flex items-center gap-2 text-white/80">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Respuesta en menos de 30 min</span>
            </div>
          </div>
        </div>

        {/* Includes */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            <strong className="text-text-primary">Todos los servicios incluyen:</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Aspirado Profundo",
              "Baño de Vapor",
              "Desinfección",
              "Eliminación de Ácaros",
              "Aromatización",
            ].map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-text-secondary shadow-card"
              >
                <svg
                  className="w-4 h-4 text-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
