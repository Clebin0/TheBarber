"use client"

// Versão simplificada sem dependências externas
export const motion = {
  div: ({ children, className, initial, animate, transition, whileInView, viewport, ...props }: any) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
}
