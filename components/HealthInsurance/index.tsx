
import { HEALTH_INSURANCE } from '@/lib/constants';

export default function HealthInsurance() {
  return (
    <section
      id="coberturas"
      className="relative overflow-hidden bg-[#f8eee7] py-20 sm:py-24"
    >
      {/* Detalle decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-[#df9679]/10"
      />

      <div className="relative z-10 mx-auto w-11/12 max-w-5xl">
        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-[#f5d8c9] px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#75452f]">
            Obras sociales y coberturas
          </span>

          <h2 className="mb-5 font-display text-3xl font-semibold text-[#183b2b] sm:text-4xl xl:text-5xl">
            Tu cobertura también importa
          </h2>

          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#af4c0f]/70" />

          <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-[#555] sm:text-lg">
            Para facilitar tu acceso al acompañamiento psicológico,
            trabajamos con las siguientes obras sociales y prepagas.
          </p>
        </div>

        {/* Listado de coberturas */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#e8d9cd] bg-[#fffdfa]/70 p-6 sm:p-9 lg:p-12">
          <h3 className="mb-8 font-display text-2xl font-semibold italic text-[#af4c0f] sm:text-3xl">
            Trabajamos con:
          </h3>

          <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:gap-x-16">
            {HEALTH_INSURANCE.map((insurance) => (
              <li
                key={insurance}
                className="flex items-center gap-4 font-sans text-base text-[#563c2c] sm:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#df9679]"
                />

                <span>{insurance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Aclaración */}
        <p className="mx-auto mt-7 max-w-2xl text-center font-sans text-sm leading-relaxed text-[#777]">
          Si tu cobertura no aparece en este listado, podés consultar
          directamente para conocer las posibilidades de atención.
        </p>
      </div>
    </section>
  );
}
