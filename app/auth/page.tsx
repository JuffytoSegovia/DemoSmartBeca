// app/auth/page.tsx - Página principal de autenticación
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../../components/ui/Button'
import { ROUTES, APP_CONFIG, USER_ROLES } from '../../lib/constants'
import LoginForm from './components/LoginForm'
import RoleSelector from './components/RoleSelector'

export default function AuthPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [showLogin, setShowLogin] = useState(false)

  // Función para manejar la selección de rol
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role)
    setShowLogin(true)
  }

  // Función para simular login exitoso
  const handleLoginSuccess = () => {
    // Redirigir según el rol seleccionado
    if (selectedRole === USER_ROLES.STUDENT) {
      router.push(ROUTES.USER)
    } else if (selectedRole === USER_ROLES.ADMIN) {
      router.push(ROUTES.ADMIN)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simple */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                🎓 {APP_CONFIG.name}
              </h1>
              <p className="text-gray-600 text-sm">Acceso al Sistema</p>
            </div>
            <Button 
              variant="secondary"
              onClick={() => router.push(ROUTES.HOME)}
            >
              ← Volver al Inicio
            </Button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          
          {!showLogin ? (
            // Mostrar selector de rol
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Selecciona tu tipo de usuario
              </h2>
              <p className="text-gray-600 mb-8">
                Elige el rol con el que deseas acceder al sistema
              </p>
              
              <RoleSelector onRoleSelect={handleRoleSelect} />
            </div>
          ) : (
            // Mostrar formulario de login
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Iniciar Sesión
                </h2>
                <p className="text-gray-600 mt-2">
                  Acceso como: <span className="font-medium text-blue-600">
                    {selectedRole === USER_ROLES.STUDENT ? 'Estudiante' : 'Administrador'}
                  </span>
                </p>
              </div>

              <LoginForm 
                role={selectedRole}
                onLoginSuccess={handleLoginSuccess}
                onBack={() => setShowLogin(false)}
              />
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>MVP de demostración - Versión {APP_CONFIG.version}</p>
          <p className="mt-1">
            Este es un sistema simulado para pruebas de navegación y flujo
          </p>
        </div>
      </main>
    </div>
  )
}