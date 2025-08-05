// app/auth/components/RoleSelector.tsx - Selector de roles de usuario
import { USER_ROLES } from '../../../lib/constants'

interface RoleSelectorProps {
  onRoleSelect: (role: string) => void
}

export default function RoleSelector({ onRoleSelect }: RoleSelectorProps) {
  const roles = [
    {
      id: USER_ROLES.STUDENT,
      title: '👨‍🎓 Estudiante',
      description: 'Buscar y postular a convocatorias de becas',
      features: ['Ver convocatorias disponibles', 'Postular a becas', 'Seguimiento de postulaciones']
    },
    {
      id: USER_ROLES.ADMIN,
      title: '⚙️ Administrador',
      description: 'Gestionar convocatorias y contenido del sistema',
      features: ['Crear convocatorias', 'Gestionar etapas', 'Administrar contenido']
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {roles.map((role) => (
        <div
          key={role.id}
          className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
          onClick={() => onRoleSelect(role.id)}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {role.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {role.description}
          </p>
          
          {/* Lista de características */}
          <ul className="space-y-2 mb-6">
            {role.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          {/* Botón de selección */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Seleccionar
          </button>
        </div>
      ))}
    </div>
  )
}