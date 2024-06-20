import { stackMiddlewares } from '@/middlewares/stackMiddlewares'

const middlewares = []
// export default stackMiddlewares(middlewares)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
