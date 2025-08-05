// app/admin/page.tsx - Dashboard del Administrador
'use client'

import { useRouter } from 'next/navigation'
import Button from '../../components/ui/Button'
import { ROUTES, APP_CONFIG } from '../../lib/constants'
import AdminStats from './components/AdminStats'

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simple */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-red-600">
                ⚙️ Panel de Administrador
              </h1>
              <p className="text-gray-600 text-sm">Control total del sistema</p>
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
        
        {/* Estadísticas del sistema */}
        <AdminStats />

        {/* Módulos de administración */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Módulos de Administración
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Gestión de Convocatorias */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                📋 Convocatorias
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Crear y gestionar convocatorias
              </p>
              <Button 
                className="w-full"
                onClick={() => router.push(ROUTES.ADMIN_CONVOCATORIAS)}
              >
                Gestionar
              </Button>
            </div>

            {/* Gestión de Etapas */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                📊 Etapas
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Configurar etapas del proceso
              </p>
              <Button 
                className="w-full"
                onClick={() => router.push(ROUTES.ADMIN_ETAPAS)}
              >
                Gestionar
              </Button>
            </div>

            {/* Gestión de Contenido */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                📝 Contenido
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Administrar contenido y requisitos
              </p>
              <Button 
                className="w-full"
                onClick={() => router.push(ROUTES.ADMIN_CONTENIDO)}
              >
                Gestionar
              </Button>
            </div>

            {/* Reportes */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                📈 Reportes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Estadísticas y reportes del sistema
              </p>
              <Button 
                className="w-full"
                onClick={() => alert('MVP: Función próximamente')}
              >
                Ver Reportes
              </Button>
            </div>
          </div>
        </div>

        {/* Info MVP */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>{APP_CONFIG.name} - {APP_CONFIG.version} | Vista: Administrador</p>
        </div>
      </main>
    </div>
  )
}