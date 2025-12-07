interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center px-1.5 py-0 text-[10px] font-medium rounded-md transition-colors";

  const variants = {
    default: "bg-zinc-800 text-white shadow-[0px_4px_8px_-2px_#0000001a,0px_2px_4px_-1px_#0000001a,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] hover:bg-zinc-700",
    secondary: "bg-zinc-700 text-zinc-200 hover:bg-zinc-600",
    outline: "border border-zinc-600 text-zinc-300 hover:bg-zinc-800"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
