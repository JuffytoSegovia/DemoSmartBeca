// app/auth/components/LoginForm.tsx - Formulario de login simulado
import { useState } from 'react'
import Button from '../../../components/ui/Button'

interface LoginFormProps {
  role: string | null
  onLoginSuccess: () => void
  onBack: () => void
}

export default function LoginForm({ role, onLoginSuccess, onBack }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Simular proceso de login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular delay de autenticación
    setTimeout(() => {
      setIsLoading(false)
      onLoginSuccess()
    }, 1000)
  }

  // Función para login rápido con datos demo
  const handleDemoLogin = () => {
    setEmail(role === 'estudiante' ? 'estudiante@demo.com' : 'admin@demo.com')
    setPassword('demo123')
    setTimeout(() => {
      onLoginSuccess()
    }, 500)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="usuario@ejemplo.com"
            required
          />
        </div>

        {/* Campo Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Botones */}
        <div className="space-y-3">
          <Button
            type="submit"
            className="w-full"
            onClick={undefined}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={handleDemoLogin}
          >
            🚀 Login Demo Rápido
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={onBack}
          >
            ← Cambiar Rol
          </Button>
        </div>
      </form>

      {/* Información de demo */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h4 className="font-medium text-blue-900 mb-2">💡 Datos de Demo:</h4>
        <div className="text-sm text-blue-700">
          <p><strong>Email:</strong> {role === 'estudiante' ? 'estudiante@demo.com' : 'admin@demo.com'}</p>
          <p><strong>Password:</strong> demo123</p>
          <p className="mt-2 text-xs">O usa el botón "Login Demo Rápido" para acceso inmediato</p>
        </div>
      </div>
    </div>
  )
}