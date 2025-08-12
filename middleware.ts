// middleware.ts
import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
  localePrefix: 'always', // /en/... şeklinde URL zorunlu
});

export const config = {
  matcher: [
    '/',                    // kök path
    '/(tr|en)/:path*',      // yerelleştirilmiş path'ler
    '/((?!_next|.*\\..*).*)'// statik dosyaları hariç tut
  ]
};
