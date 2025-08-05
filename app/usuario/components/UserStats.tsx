// app/usuario/components/UserStats.tsx - Estadísticas básicas del usuario
export default function UserStats() {
  // Datos simulados para el MVP
  const stats = [
    {
      title: 'Convocatorias Disponibles',
      value: '12',
      icon: '📋',
      color: 'text-blue-600'
    },
    {
      title: 'Mis Postulaciones',
      value: '3',
      icon: '📄',
      color: 'text-green-600'
    },
    {
      title: 'En Proceso',
      value: '2',
      icon: '⏳',
      color: 'text-yellow-600'
    },
    {
      title: 'Completadas',
      value: '1',
      icon: '✅',
      color: 'text-purple-600'
    }
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Resumen de Actividad
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}