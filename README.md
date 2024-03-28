# Challenge Stocks para Metafarma
 
 La siguiente demo se encuentra realizada con Vite js y React, las elecciones de las tecnologías fueron en base al ejercicio dado. Con el objetivo de cumplir las mismas, se eligió vite por su potencia y rapidez al renderizar. Y React siendo el stack de mayor conocimiento de quien suscribe. 
 
## Stack
 Las siguientes tecnologías fueron aplicadas al proyecto:
- Vite Js
- React Js
- Typescript
- Highcharts
- Tailwind Css
- useDebounce
- SWR
- React-router-dom
- Toastify
 
## Arquitectura
La estructura de de carpetas contempla un poco la idea de atomic design, tratando de modularizar la logica lo mayor posible y separar las pages de los componentes que sean presentacionales y contenedores.
 
## Endpoints:
Bajo la premisa dada, el desafío fue la correcta implementación de los siguientes endpoints:

- [Endpoint para obtener los valores de un stock](https://api.twelvedata.com/time_series?symbol=TSLA&interval=5min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=*************)
- [Endpoint de búsqueda para el autocomplete](https://api.twelvedata.com/stocks?symbol=NFLX&amp;source=docs)
- [Endpoint para tabla de stocks](https://api.twelvedata.com/stocks)

## Visual:

Para la visual se elegió mantenerse minimalista tratando de no marear ni llenar de información al usuario. 

Viste del dashboard:
![image](https://github.com/MarianellaGL/stocks-challenge/assets/53187007/806b11c1-0adf-456e-b8e2-cd308aeb19be)

Vista del detalle de acciones: 
![image](https://github.com/MarianellaGL/stocks-challenge/assets/53187007/1be2a52c-2cf8-49cf-8207-be04c1375553)



## Cómo correr el proyecto: 
Para correr el challenge, se debe bajar el repositorio, hacer `npm install`, y luego debidamente correrá con `npm run dev`. El endpoint de valores de stock aguarda una variable de entorno(debe agregarse el .env en el root): *VITE_STOCK_API_KEY* , la cual será provista al logearse en la pagina de twelveData. 
