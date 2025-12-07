export function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-xs">
        <span>Developed with <span className="bg-muted-foreground bg-clip-text text-transparent"><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a> & <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Shadcn UI</a></span></span>
        <span className="text-muted-foreground">
          © 2025 Fizz. All rights reserved.
        </span>
      </div>
    </div>
  );
}
