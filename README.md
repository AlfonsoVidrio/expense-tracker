# Planificador de Gastos

![Captura de la aplicación](url-de-captura.png)

Aplicación para gestionar presupuestos y gastos personales construida con React y TypeScript.

## Características

- **Gestión de presupuesto**: Define un presupuesto inicial y realiza un seguimiento.
- **CRUD de gastos**: Agrega, edita y elimina gastos con nombre, cantidad, categoría y fecha.
- **Persistencia local**: Los datos se guardan automáticamente en localStorage.
- **Filtro por categoría**: Filtra los gastos por categoría para una mejor visualización.
- **Gráfico circular**: Visualiza el porcentaje de gasto con una barra de progreso circular.
- **Swipe gestures**: Desliza para editar o eliminar gastos en dispositivos táctiles.
- **Modal de confirmación**: Confirmación antes de resetear la aplicación.

## Tecnologías

- React 19
- TypeScript
- Tailwind CSS v4
- Headless UI
- Vite
- react-circular-progressbar
- react-date-picker
- react-swipeable-list

## Instalación

```bash
npm install
npm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta el linter |
