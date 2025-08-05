// app/page.tsx - Página de inicio del sistema SmartBeca
'use client'

import { useRouter } from 'next/navigation'
import Button from '../components/ui/Button'
import { ROUTES, APP_CONFIG } from '../lib/constants'

export default function HomePage() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simple */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            🎓 {APP_CONFIG.name}
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            {APP_CONFIG.description}
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero section simple */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bienvenido al Sistema de Becas
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Gestiona convocatorias, postulaciones y procesos de selección de manera eficiente
          </p>
          
          {/* Botón principal */}
          <Button 
            onClick={() => router.push(ROUTES.AUTH)}
            className="text-lg px-8 py-3"
          >
            Ingresar al Sistema
          </Button>
        </div>

        {/* Características básicas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-2">
              👨‍🎓 Para Estudiantes
            </h3>
            <p className="text-gray-600 text-sm">
              Busca y postula a convocatorias de becas disponibles
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-2">
              ⚙️ Para Administradores  
            </h3>
            <p className="text-gray-600 text-sm">
              Gestiona convocatorias, etapas y contenido del sistema
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-2">
              📊 Reportes y Control
            </h3>
            <p className="text-gray-600 text-sm">
              Seguimiento completo del proceso de selección
            </p>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-blue-50 p-8 rounded-lg text-center border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            ¿Listo para comenzar?
          </h3>
          <p className="text-gray-600 mb-6">
            Accede al sistema para gestionar o postular a becas
          </p>
          
          <div className="space-x-4">
            <Button onClick={() => router.push(ROUTES.AUTH)}>
              Iniciar Sesión
            </Button>
            <Button 
              variant="secondary"
              onClick={() => alert('Demo - Funcionalidad próximamente')}
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 {APP_CONFIG.name} - {APP_CONFIG.version} | MVP de demostración
          </p>
        </div>
      </footer>
    </div>
  )
}