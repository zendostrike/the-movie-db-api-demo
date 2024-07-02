# The MovieDB API demo

Demo simple usando MovieDB API.

Demo online: https://the-movie-db-api-demo.vercel.app/

Se tomó en cuenta:

- CSS modular con convención BEM
- Componentes tipados con Typescript
- Manejo de estado con Redux
- Mejora de DX con exports nombrados y archivos Barrel
- Manejo de estados de carga y error
- Responsivo para desktop y mobile
- Debouncing para evitar múltiples llamadas al servidor
- Unit Testing

No se tomó en cuenta:

- Caché del lado del servidor
- Rutas
- Paginación

## Instalación

```
npm i
```

## Correr localmente

Copiar archivo de variables de entorno

```
cp .env.example .env.local
```

Reemplazar por llave correcta

```
VITE_THE_MOVIE_DB_API_KEY=MI_LLAVE_CORRECTA
VITE_BASE_API_URL=https://api.themoviedb.org/3
```

Y correr la aplicación:

```
npm run dev
```

## Correr los tests

```
npm run test
```
