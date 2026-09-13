# Taller Consumo de APIs HTTP/JSON

## Integrantes
- Nombre: Lina Margarita Cardozo Rosas 

## Objetivo
El objetivo del taller es comprender el funcionamiento de las solicitudes HTTP en el consumo de APIs, analizar las respuestas en formato JSON y aplicar diferentes métodos (GET, POST, PUT, DELETE) utilizando diversas herramientas de prueba.  

## Tecnologías utilizadas
- HTML  
- CSS  
- JavaScript  
- HTTP  
- JSON  

## API utilizada
- JSONPlaceholder (API de prueba para simulación de datos)  

## Herramientas
- Visual Studio Code  
- Postman  
- SOAPUI  
- cURL  

## Resultados
Se realizaron pruebas de consumo de la API mediante diferentes métodos:  
- **GET**: consulta de todos los usuarios y consulta por ID.  
- **POST**: creación de un nuevo usuario con datos en formato JSON.  
- **PUT**: actualización de un usuario existente, confirmando la persistencia del ID.  
- **DELETE**: eliminación de un recurso, obteniendo respuestas vacías con código 200 OK.  
- Se verificaron los códigos HTTP, tiempos de respuesta, encabezados y cuerpos de las respuestas en cada caso.  

## Conclusiones
- Se concluye que la API devuelve información en formato JSON, lo que facilita la manipulación de datos y confirma la consistencia del modelo de usuarios.  
- Se determina que la verificación de códigos HTTP como 200, 201 y 404 es esencial para garantizar la confiabilidad de las aplicaciones y diferenciar entre errores de servidor y errores de JavaScript.  
- Se evidencia que cada herramienta utilizada (JavaScript, Postman, SOAPUI y cURL) aporta ventajas específicas, ampliando la capacidad de prueba y asegurando una evaluación más completa de las APIs.  
- Se establece que los encabezados HTTP, en especial `Content-Type`, son fundamentales para la correcta interpretación de los datos y la comunicación entre cliente y servidor.  
- Se concluye que los tiempos de respuesta pueden variar entre ejecuciones debido a factores como latencia de red, carga del servidor, procesos locales del cliente y variabilidad del sistema, lo que refuerza la necesidad de realizar múltiples mediciones y calcular promedios.  
- Se confirma que el reto final permitió integrar las funcionalidades mínimas de un cliente universal de APIs, consolidando el aprendizaje práctico sobre solicitudes GET, POST, PUT y DELETE, así como el manejo de errores y respuestas en diferentes escenarios.  
