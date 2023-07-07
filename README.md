# Filtrado de trabajos

Muestra una lista de todos los tabajos disponibles, ubicados en assets/data.json

Puedes ver la funcionalidad deseada en [este enlace](https://fem-job-filtering.vercel.app/)

## Diseño

No os preocupéis por el diseño CSS, no es el objetivo. Dejadlo para el final. Con que se vea una tarjeta es suficiente. Si queréis, podéis copiar los estilos de la solución anterior

<img src="https://oscarm.tinytake.com/media/14b3f20?filename=1688711415692_TinyTake07-07-2023-08-29-45_638243082150387968.png&sub_type=thumbnail_preview&type=attachment&width=1200&height=576" title="Powered by TinyTake Screen Capture"/>

## Metodología

1. Explorad la carpeta _design_ y mirad el diseño esperado. [Haced _cajitas_](https://raw.githubusercontent.com/breatheco-de/exercise-landing-page-javascript/master/strategy.png) para determinar los diferentes componentes de la interfaz gráfica
2. Crea primero la parte estática de la app. Para este ejercicio, os recomiendo no crear componentes hijos, codificarlo todo en la App. El motivo es que aún no hemos aprendido a pasar manejadores de eventos a los hijos, ni a elevear el estado.
3. Piensa que variables de estado existen en esta aplicación
4. Codifica las variables de estado y cambia aquellas partes del JSX que deban variar en función de dichas variables. Juega con el valor inicial de estas para ir codificando los diferentes estados en los que tiene que estar tu interfaz.
5. ¿Si cambio la variable que determina los filtros que deben aparecer en el contenedor superior, se renderiza la lista de trabajos aplicando dicho filtro?
6. Agrega los eventos necesarios para cambiar las variables de estado en función de la interacción del usuario. Con el evento onClick en los _tags_ adecuados debería ser suficiente.
