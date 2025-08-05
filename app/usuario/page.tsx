// app/usuario/page.tsx - Dashboard del Estudiante
'use client'

import { useRouter } from 'next/navigation'
import Button from '../../components/ui/Button'
import { ROUTES, APP_CONFIG } from '../../lib/constants'
import UserStats from './components/UserStats'

export default function UserDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simple */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                👨‍🎓 Panel de Estudiante
              </h1>
              <p className="text-gray-600 text-sm">Bienvenido al sistema de becas</p>
            </div>
            <div className="space-x-3">
              <Button 
                variant="secondary"
                onClick={() => router.push(ROUTES.HOME)}
              >
                Inicio
              </Button>
              <Button 
                variant="secondary"
                onClick={() => router.push(ROUTES.AUTH)}
              >
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Estadísticas básicas */}
        <UserStats />

        {/* Acciones principales */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Acciones Disponibles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Botón Convocatorias */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                📋 Ver Convocatorias
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explora las becas disponibles
              </p>
              <Button 
                className="w-full"
                onClick={() => router.push(ROUTES.USER_CONVOCATORIAS)}
              >
                Ver Convocatorias
              </Button>
            </div>

            {/* Botón Mis Postulaciones */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                📄 Mis Postulaciones
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Revisa el estado de tus postulaciones
              </p>
              <Button 
                className="w-full"
                onClick={() => alert('MVP: Función próximamente')}
              >
                Ver Postulaciones
              </Button>
            </div>

            {/* Botón Perfil */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                👤 Mi Perfil
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Actualiza tu información personal
              </p>
              <Button 
                className="w-full"
                onClick={() => alert('MVP: Función próximamente')}
              >
                Ver Perfil
              </Button>
            </div>
          </div>
        </div>

        {/* Info MVP */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>{APP_CONFIG.name} - {APP_CONFIG.version} | Vista: Estudiante</p>
        </div>
      </main>
    </div>
  )
}