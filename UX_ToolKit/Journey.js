/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  [https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek](https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek) ***/

angular.module("angular", [])
    .controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2025/26";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
        $scope.JourneyIndex = 0;
        
        $scope.Journeys = [
            {       
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /**** PERSONA: LAURA            *******/
                /**** "La organizadora semanal" *******/
                /*************************************/
                
                Id: 0,
                Name: "Laura",
                Photo: "woman.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere organizar las comidas de la semana para no improvisar y cocinar más sano",
                touch1: "Móvil (en casa, por la noche)",
                feel1: "3",
                con1: "Cansancio y poco tiempo; miedo a que la app sea complicada o le pida registrarse antes de usarla",
                ima1: "cartoon-planning.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en la store una app de recetas con lista de la compra y planificador semanal",
                touch2: "Móvil (Google Play / App Store)",
                feel2: "3",
                con2: "Muchas apps similares; reseñas que hablan de anuncios, funciones de pago o pérdida de datos",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                goal3: "Descarga la app, explora recetas rápidas (≤30 min) y aptas para niños usando filtros",
                touch3: "Móvil (home y buscador de recetas)",
                feel3: "4",
                con3: "Si los filtros no funcionan bien o los ingredientes son raros/medidas en tazas, se frustra",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                goal4: "Añade recetas a un plan semanal (lunes a domingo, comida/cena) y ajusta raciones",
                touch4: "Móvil (pantalla de planificación semanal)",
                feel4: "5",
                con4: "Necesita mover recetas entre días fácilmente y ver bien los ingredientes totales de la semana",
                ima4: "cartoon-PCtyping.png",
                
                /*** PASO #5: ANALIZA ***/ 
                goal5: "Genera la lista de la compra: la app agrupa ingredientes, suma cantidades y elimina duplicados",
                touch5: "Móvil (lista de la compra)",
                feel5: "5",
                con5: "Si los ingredientes no se agrupan por categorías/tienda o no puede editar/borrar lo que ya tiene, se complica",
                ima5: "cartoon-phoning.png",
                
                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Comparte la lista con su pareja y la usa en el súper tachando lo comprado; la guarda para la próxima semana",
                touch6: "Móvil (compartir por WhatsApp y usar en el súper)",
                feel6: "5",
                con6: "Necesita que la lista no se desordene al compartir y que funcione bien incluso con mala cobertura",
                ima6: "cartoon-resting.png",
                
            },
            {   
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /**** PERSONA: DANI               *******/
                /**** "El foodie ahorrador"     *******/
                /*************************************/
                
                Id: 1,
                Name: "Dani",
                Photo: "man.png",
                
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere cocinar algo rico y barato con lo que ya tiene en casa y sin desperdiciar comida",
                touch1: "Móvil (en la cocina, mirando la nevera)",
                feel1: "2",
                con1: "Presupuesto ajustado y sensación de 'no tengo nada' aunque haya ingredientes básicos",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en redes sociales y en la store una app que sugiera recetas por ingredientes y muestre coste",
                touch2: "Móvil (TikTok/Instagram + store)",
                feel2: "3",
                con2: "Recetas que parecen baratas pero tienen muchos ingredientes; desconfianza por reseñas de anuncios y funciones de pago",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                goal3: "Descarga la app e introduce los ingredientes que ya tiene (pollo, arroz, tomate, etc.)",
                touch3: "Móvil (pantalla de 'mi pantry' / ingredientes)",
                feel3: "4",
                con3: "Si la lista de ingredientes es muy larga o confusa, o no encuentra algunos productos, se frustra",
                ima3: "cartoon-phone-street.png",
                
                /*** PASO #4: OBSERVA ***/ 
                goal4: "Explora recetas sugeridas filtradas por 'barato' y 'pocos ingredientes', con coste aproximado",
                touch4: "Móvil (listado de recetas con filtros)",
                feel4: "4",
                con4: "Necesita ver claramente el coste estimado y que las recetas 'baratas' no tengan productos gourmet",
                ima4: "cartoon-PCtyping.png",
                
                /*** PASO #5: ANALIZA ***/ 
                goal5: "Ajusta raciones y ve cómo cambian cantidades y coste; genera lista solo con lo que le falta comprar",
                touch5: "Móvil (detalle de receta + lista 'lo que me falta')",
                feel5: "5",
                con5: "Si el cálculo de coste no es claro o no puede ordenar la lista por supermercado/pasillos, pierde utilidad",
                ima5: "cartoon-phone-sitting.png",

                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Va al súper con la lista (incluso offline), compra sin pasarse y cocina guardando la receta en favoritos",
                touch6: "Móvil (en el súper y luego en la cocina)",
                feel6: "5",
                con6: "Necesita que la app funcione bien offline y que pueda añadir notas/fotos a sus recetas probadas",
                ima6: "cartoon-PChard.png",
                
            }
        ];
        
        $scope.model = $scope.Journeys[0];

    }]);