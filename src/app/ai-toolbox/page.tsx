import { loadToolbox, inferredIconFor, byCategory } from "@/lib/toolbox";

export const metadata = {
  title: "AI Toolbox",
  description: "Curated tools we actually use and recommend.",
};

export default function AIToolboxPage() {
  const items = loadToolbox();
  const cats = byCategory(items);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">AI Toolbox</h1>
      <p className="text-sm text-gray-600">
        Some links may be affiliate links. We only recommend tools we believe add real value.
      </p>

      {cats.map(([category, tools]) => (
        <section key={category} className="space-y-4">
          <h2 className="text-xl font-semibold">{category}</h2>
          <div className="grid gap-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border p-4 flex items-center gap-4"
              >
                {t.logo || inferredIconFor(t.url) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.logo || inferredIconFor(t.url)}
                    alt=""
                    className="h-10 w-10 rounded"
                  />
                ) : null}
                <div className="flex-1">
                  <div className="text-sm font-semibold">{t.name}</div>
                  {t.blurb ? (
                    <p className="text-sm text-gray-600">{t.blurb}</p>
                  ) : null}
                </div>
                <a
                  href={t.affiliate_url || t.url}
                  className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#0891b2] text-white hover:opacity-90 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
