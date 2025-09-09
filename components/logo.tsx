interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeClasses[size]} font-bold bg-gradient-to-br from-orange-500 to-red-600 bg-clip-text text-transparent`}
      >
        e
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-brand-orange">ExpertSolutions</span>
        <span className="text-sm text-orange-500 font-medium">realidade digital</span>
      </div>
    </div>
  )
}
