---
name: nestjs-nodejs
description: "Desarrolla, depura, refactoriza y prueba backends con NestJS o Node.js. Usa este skill para APIs, módulos, servicios, inyección de dependencias, Node.js sin framework, TypeORM/PostgreSQL, validación, autenticación, seguridad, errores y pruebas Jest."
argument-hint: "Describe el cambio, fallo o endpoint que quieres trabajar"
---

# NestJS y Node.js

## Cuándo usarlo

- Crear o modificar endpoints, módulos, providers, servicios o entidades en NestJS.
- Crear o mantener servicios y scripts Node.js sin NestJS, incluidos módulos, operaciones asíncronas y streams.
- Diagnosticar errores de ejecución, compilación, dependencias o configuración en Node.js.
- Trabajar con persistencia, transacciones, validación de entrada, autenticación o autorización.
- Añadir o corregir pruebas unitarias y end-to-end de una API.
- Revisar cambios de backend para detectar defectos de comportamiento, seguridad o compatibilidad.

## Flujo de trabajo

1. **Delimita el resultado.** Identifica el comportamiento solicitado y sus criterios observables. Si falta una decisión de contrato que cambie la implementación (por ejemplo, códigos HTTP o reglas de acceso), pregunta antes de fijarla. No bloquees por detalles que el repositorio ya resuelva.

2. **Lee el contexto local.** Revisa las instrucciones del repositorio, `package.json`, configuración de TypeScript/Nest, y el módulo, controlador, servicio y pruebas más cercanos. Comprueba versiones y scripts disponibles; no supongas APIs de otra versión ni instales dependencias sin necesidad.

3. **Sigue el flujo que decide el comportamiento.** En NestJS, traza la petición por guardas, pipes, interceptores, controlador, servicio y almacenamiento, según corresponda. En Node.js sin framework, localiza el punto de entrada y sigue llamadas, límites de I/O y manejo de errores asíncronos. Si el archivo inicial solo delega, avanza al código que realmente calcula, valida o muta el dato. Formula una hipótesis local comprobable y el chequeo más barato que podría refutarla.

4. **Elige el cambio más acotado.** Mantén módulos y providers con responsabilidades claras, usa inyección de dependencias y conserva las APIs públicas y convenciones existentes. Reutiliza utilidades y patrones locales. Evita refactors, cambios de configuración o modificaciones de esquema ajenos al resultado pedido.

5. **Valida los límites de entrada y salida.** Usa DTOs y el mecanismo de validación ya configurado para datos externos; no confíes en tipos TypeScript como validación en runtime. Conserva tipos concretos y contratos de respuesta. Usa excepciones HTTP de NestJS o el manejador existente para errores; no conviertas fallos internos en respuestas exitosas ni filtres detalles sensibles.

6. **Protege persistencia, autenticación y secretos.** Usa la capa de acceso a datos del proyecto. Para TypeORM y PostgreSQL, respeta las versiones, relaciones, transacciones y estrategia de migraciones existentes. No actives `synchronize` ni alteres datos/esquemas sin que el cambio lo requiera explícitamente. Usa parámetros para consultas. En login, almacena contraseñas solo con un algoritmo de hash adecuado disponible en el proyecto, verifica la identidad antes de emitir credenciales y aplica autorización en cada operación protegida; evita respuestas que revelen si una cuenta existe. No añadas credenciales a código, logs o respuestas; usa la configuración segura existente.

7. **Respeta el runtime de Node.js.** En código sin framework, conserva el sistema de módulos configurado por el proyecto. Maneja rechazos y errores asíncronos en el límite adecuado; evita bloquear el event loop con trabajo síncrono costoso en rutas de servidor. Para streams, respeta backpressure y cierre de recursos. No añadas estas capas si no son relevantes para el cambio.

8. **Prueba el comportamiento.** Añade o ajusta pruebas en el nivel más cercano que cubra el contrato: unidad para lógica de servicio/controlador y e2e para rutas, validación, guards o integración cuando sea necesario. Incluye casos normales y límites relevantes, como entidad inexistente, entrada inválida y falta de permisos. No te limites a comprobar que una clase está definida.

9. **Ejecuta la comprobación enfocada primero.** Corre la prueba específica o el chequeo más barato relacionado con el cambio. Después, si el alcance lo justifica y los scripts existen, ejecuta build, pruebas relevantes y lint/typecheck. Inspecciona los comandos antes de usarlos: si lint aplica `--fix`, prefiere una ejecución no mutante sobre los archivos tocados.

10. **Cierra con evidencia.** Resume el comportamiento cambiado, los archivos principales y las verificaciones ejecutadas. Indica claramente las pruebas que no pudieron correr y cualquier riesgo o decisión pendiente; no afirmes que una comprobación pasó si no se ejecutó.

## Criterios de calidad

- El cambio corrige la causa del comportamiento observado y respeta el contrato existente.
- Los datos de entrada externos se validan en runtime y los errores usan semántica HTTP coherente.
- Las dependencias se inyectan mediante NestJS y la lógica permanece en la capa responsable.
- Las operaciones de base de datos son seguras y no dependen de cambios implícitos de esquema.
- La autenticación no expone secretos ni permite omitir la autorización de recursos protegidos.
- El código Node.js respeta el modelo asíncrono y libera recursos cuando aplica.
- Las pruebas cubren el resultado observable y los casos de fallo relevantes.
- El cambio es pequeño, compatible con las versiones y convenciones detectadas, y viene acompañado de una verificación reportada con precisión.
