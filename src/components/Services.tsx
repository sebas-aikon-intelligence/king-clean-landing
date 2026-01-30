import Image from "next/image";

const WHATSAPP_NUMBER = "573222898383";

const serviceCategories = [
  {
    id: "dormitorio",
    name: "Dormitorio",
    image: "/mattress-cleaning.jpg",
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    services: [
      {
        name: "Colchón Sencillo",
        description: "Limpieza profunda + eliminación de ácaros",
      },
      {
        name: "Colchón Doble",
        description: "Desinfección completa + aromatización",
      },
      {
        name: "Colchón Queen",
        description: "Tratamiento premium + vapor caliente",
      },
      {
        name: "Colchón King",
        description: "Servicio completo para colchones grandes",
      },
      {
        name: "Espaldar de Cama",
        description: "Limpieza de cabeceros tapizados",
      },
    ],
  },
  {
    id: "sala",
    name: "Sala y Estar",
    image: "/sofa-cleaning-bogota.jpg",
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    services: [
      {
        name: "Sofá 2 Puestos",
        description: "Limpieza de tapicería + manchas",
      },
      {
        name: "Sofá 3 Puestos",
        description: "Tratamiento profundo anti-ácaros",
      },
      {
        name: "Sofá en L",
        description: "Cobertura completa de esquineros",
      },
      {
        name: "Poltrona",
        description: "Limpieza individual de sillones",
      },
      {
        name: "Puff",
        description: "Desinfección de puffs y cojines grandes",
      },
      {
        name: "Sillas de Comedor",
        description: "Por unidad o juego completo",
      },
    ],
  },
  {
    id: "pisos",
    name: "Ventanas y Pisos",
    image: "/blinds-cleaning-bogota.jpg",
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    services: [
      {
        name: "Persianas",
        description: "Limpieza de láminas sin desmontar",
      },
      {
        name: "Tapete Pequeño",
        description: "Hasta 2m² - Manchas y olores",
      },
      {
        name: "Tapete Mediano",
        description: "2m² a 4m² - Limpieza profunda",
      },
      {
        name: "Tapete Grande",
        description: "Más de 4m² - Servicio premium",
      },
    ],
  },
  {
    id: "vehiculos",
    name: "Vehículos",
    image: "/car-cleaning-closeup.jpg",
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
          d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM5 12h14M5 16h14M5 8h14"
        />
      </svg>
    ),
    services: [
      {
        name: "Interior Carro",
        description: "Tapicería, alfombras y techo",
      },
      {
        name: "Interior Camioneta",
        description: "Limpieza completa SUV/Camioneta",
      },
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Aspirado Profundo",
    description: "Eliminamos polvo, pelos y partículas superficiales",
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
    step: 2,
    title: "Baño de Vapor",
    description: "Vapor a alta temperatura que mata el 99% de ácaros y bacterias",
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
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Desinfección",
    description: "Productos profesionales que eliminan bacterias y hongos",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Aromatización",
    description: "Fragancia fresca y duradera a tu elección",
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
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Limpiamos Todo lo que{" "}
            <span className="text-gradient">Necesitas</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Desde colchones hasta interiores de vehículos. Nuestro proceso
            profesional de 4 pasos garantiza resultados impecables.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-background-alt rounded-2xl p-6 text-center group hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-white group-hover:text-primary transition-colors">
                {step.step}
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="font-bold text-text-primary group-hover:text-white mb-2 font-[family-name:var(--font-poppins)]">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary group-hover:text-white/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-background-alt rounded-3xl overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={`Servicio de limpieza de ${category.name} en Bogotá`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] shadow-black/10 drop-shadow-md">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 bg-white rounded-xl p-4 border border-transparent hover:border-primary/20 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-text-primary">
                          {service.name}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {service.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hola King Clean, quiero cotizar servicios de ${category.name}. ¿Me pueden ayudar?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-white text-white hover:text-primary font-semibold py-4 px-6 rounded-xl border-2 border-primary transition-all duration-300 cursor-pointer"
                >
                  <span>Cotizar {category.name}</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
