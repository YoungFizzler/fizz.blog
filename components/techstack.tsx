import { Badge } from "@/components/ui/badge";
import { siteConfig, type StackCategory } from "@/settings/config";

function StackCard({ category }: { category: StackCategory }) {
  return (
    <div
      className="group relative flex h-full flex-col gap-3 overflow-visible p-4 transition-colors duration-200 hover:bg-white/5"
      style={{ border: "1px dashed rgba(113, 113, 122, 0.3)" }}
    >
      <div
        className="pointer-events-none absolute -left-1 -top-1 size-2 transition-colors duration-200"
        style={{
          borderLeft: "1px solid rgba(113, 113, 122, 0.3)",
          borderTop: "1px solid rgba(113, 113, 122, 0.3)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-1 -top-1 size-2 transition-colors duration-200"
        style={{
          borderRight: "1px solid rgba(113, 113, 122, 0.3)",
          borderTop: "1px solid rgba(113, 113, 122, 0.3)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-1 -right-1 size-2 transition-colors duration-200"
        style={{
          borderRight: "1px solid rgba(113, 113, 122, 0.3)",
          borderBottom: "1px solid rgba(113, 113, 122, 0.3)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-1 -left-1 size-2 transition-colors duration-200"
        style={{
          borderLeft: "1px solid rgba(113, 113, 122, 0.3)",
          borderBottom: "1px solid rgba(113, 113, 122, 0.3)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -m-1 border border-dashed border-transparent transition-colors duration-200 group-hover:border-white/60" />
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-white">{category.label}</span>
        {category.summary && (
          <span className="jetbrains-mono text-[11px] text-neutral-500">
            {category.summary}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <Badge
            key={`${category.label}-${item}`}
            variant="secondary"
            className="bg-zinc-800 text-white shadow-[0px_8px_16px_-4px_#0000001a,0px_4px_8px_-2px_#0000001a,0px_2px_4px_-1px_#0000001a,0px_1px_2px_0px_#0000001a,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] hover:bg-zinc-700"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Techstack() {
  const { stack } = siteConfig;

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-sm text-muted-foreground">
        <span className="font-medium text-white">{stack.title}</span>{" "}
        {stack.subtitle}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stack.categories.map((category) => (
          <StackCard key={category.label} category={category} />
        ))}
      </div>
    </div>
  );
}


