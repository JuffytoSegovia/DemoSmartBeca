// app/admin/components/AdminStats.tsx - Estadísticas del sistema para admin
export default function AdminStats() {
  // Datos simulados para el MVP
  const stats = [
    {
      title: 'Total Convocatorias',
      value: '15',
      icon: '📋',
      color: 'text-blue-600'
    },
    {
      title: 'Estudiantes Registrados',
      value: '1,234',
      icon: '👨‍🎓',
      color: 'text-green-600'
    },
    {
      title: 'Postulaciones Activas',
      value: '456',
      icon: '📄',
      color: 'text-yellow-600'
    },
    {
      title: 'Becas Otorgadas',
      value: '89',
      icon: '🏆',
      color: 'text-purple-600'
    }
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Estadísticas del Sistema
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