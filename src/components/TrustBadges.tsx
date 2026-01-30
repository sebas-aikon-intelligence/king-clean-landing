export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Garantía 24 Horas",
      description: "Si no quedas satisfecho, volvemos gratis tras el secado",
      color: "primary",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Sin Anticipos",
      description: "Paga solo cuando termines de ver el resultado",
      color: "success",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Precios Más Bajos",
      description: "El mejor precio del mercado, garantizado",
      color: "secondary",
    },
  ];

  return (
    <section className="py-12 bg-background-alt border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${
                  badge.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : badge.color === "success"
                    ? "bg-success/10 text-success"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                {badge.icon}
              </div>
              <div>
                <h3 className="font-bold text-text-primary text-lg font-[family-name:var(--font-poppins)]">
                  {badge.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
