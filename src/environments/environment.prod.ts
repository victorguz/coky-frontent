export const environment = {
  production: true,
  apiUrl: "http://localhost:3000/",
  authApiUrl: "http://localhost:3000/auth/",
  secretKey: "jkb6fvgsd57rvb323b2nbbn234ds!#",
  /**
   * Dominios (dominio.com) a los que se enviará el token en el header de la petición.
   * Utilizar solo en caso que el dominio sea distinto del actual, ya que es allowed por defecto.
   */
  allowedDomains: [],
  /**
   * Rutas en las que no se tendrá en cuenta el envío del token.
   * Pueden ser del mismo dominio.
   */
  disallowedRoutes: [],
};
