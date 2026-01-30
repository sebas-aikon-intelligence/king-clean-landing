"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tiempo demora el servicio?",
    answer:
      "El servicio completo toma entre 2 y 4 horas, dependiendo del número de ítems a limpiar y su tamaño. Por ejemplo, un colchón doble tarda aproximadamente 45 minutos. Te damos un tiempo estimado cuando cotizas.",
  },
  {
    question: "¿Tengo que pagar antes del servicio?",
    answer:
      "NO. En King Clean no pedimos abonos ni anticipos. Pagas únicamente cuando el servicio está terminado y has verificado el resultado. Tu satisfacción es nuestra prioridad.",
  },
  {
    question: "¿Qué pasa si la mancha no sale?",
    answer:
      "Eliminamos el 90% de las manchas difíciles. Si alguna mancha no sale completamente, te lo informamos antes de terminar y ajustamos el precio. Además, tienes garantía de 24 horas después del secado: si no quedas satisfecho, volvemos gratis.",
  },
  {
    question: "¿Atienden en Soacha?",
    answer:
      "Sí, atendemos en toda Bogotá y Soacha. No hay costo adicional de desplazamiento en estas zonas. Escríbenos tu dirección y confirmamos disponibilidad.",
  },
  {
    question: "¿Cuánto tarda en secar?",
    answer:
      "El tiempo de secado depende del tipo de mueble y la ventilación del espacio. Generalmente, los colchones secan en 4-6 horas y los sofás en 3-4 horas. Te damos recomendaciones para acelerar el secado.",
  },
  {
    question: "¿Es seguro para niños y mascotas?",
    answer:
      "Absolutamente. Usamos productos biodegradables y seguros. Una vez seco el mueble, niños y mascotas pueden usarlo sin ningún problema. No dejamos residuos tóxicos.",
  },
  {
    question: "¿Qué horarios manejan?",
    answer:
      "Trabajamos de lunes a sábado, de 7:00 AM a 7:00 PM. Agenda tu cita con anticipación para garantizar disponibilidad en el horario que prefieras.",
  },
  {
    question: "¿Cómo eliminar el olor a orina de mascota?",
    answer:
      "Nuestro tratamiento especializado para mascotas elimina el 100% del olor a orina. Usamos enzimas profesionales que descomponen las moléculas de olor en su origen, no solo las enmascaran. Es la única forma efectiva de eliminar el olor por completo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full text-sm mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Resolvemos Todas Tus <span className="text-secondary">Dudas</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Las respuestas a las preguntas más comunes sobre nuestro servicio.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-background-alt rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "shadow-elevated" : "shadow-card"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-gray-100/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-text-primary pr-4 font-[family-name:var(--font-poppins)]">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary text-white rotate-180"
                      : "bg-gray-200 text-text-secondary"
                  }`}
                >
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
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a
            href={`https://wa.me/573222898383?text=${encodeURIComponent(
              "Hola King Clean, tengo una pregunta sobre el servicio."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors cursor-pointer"
          >
            <span>Escríbenos por WhatsApp</span>
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
    </section>
  );
}
