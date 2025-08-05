// lib/constants.ts - Todas las rutas y configuración centralizada
export const ROUTES = {
  // Páginas principales
  HOME: '/',
  AUTH: '/auth',
  
  // Usuario estudiante
  USER: '/usuario',
  USER_CONVOCATORIAS: '/usuario/convocatorias',
  
  // Administrador
  ADMIN: '/admin',
  ADMIN_CONVOCATORIAS: '/admin/convocatorias',
  ADMIN_ETAPAS: '/admin/etapas',
  ADMIN_CONTENIDO: '/admin/contenido',
} as const

// Configuración de la app
export const APP_CONFIG = {
  name: 'SmartBeca',
  description: 'Sistema de Gestión de Becas - MVP',
  version: '1.0.0-mvp'
} as const

// Roles de usuario
export const USER_ROLES = {
  STUDENT: 'estudiante',
  ADMIN: 'admin'
} as const