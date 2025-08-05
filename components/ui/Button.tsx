// components/ui/Button.tsx - Botón reutilizable para toda la app
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  
  // Estilos base del botón
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors'
  
  // Estilos según variante
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}