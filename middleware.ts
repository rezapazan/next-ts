import { stackMiddlewares } from '@/middlewares/stackMiddlewares'
import { NextRequest, NextResponse } from 'next/server'

const middlewares = []
// export default stackMiddlewares(middlewares)
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
