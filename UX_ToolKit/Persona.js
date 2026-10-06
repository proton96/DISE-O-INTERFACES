// Holaaaaa

angular.module("angular", [])
    .controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2025/26";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
        $scope.PersonaIndex = 0;
        $scope.Personas = [
            {       
                
                /*************************************/
                /**** PRIMERA PERSONA: LAURA   *******/
                /**** "La organizadora semanal" *******/
                /*************************************/
                
                Id: 0,
                Name: "Laura",
                Photo: "woman.png",
                Quote: "Quiero planificar la semana y la compra en menos de 5 minutos",
                Age: 34,
                Occupation: "Administrativa, madre de dos niños (6 y 9 años)",
                Family: "Pareja y dos hijos",
                Location: "Granada (Maracena)",
                Character: "Práctica, organizada, con poco tiempo, valora la claridad y lo rápido",
                PersonalityTraits: [
                    { Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
                    { Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
                    { Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
                    { Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
                ], 
                Goals: [
                    "Planificar las comidas de la semana rápidamente",
                    "Generar automáticamente la lista de la compra sin copiar y pegar",
                    "Compartir la lista con su pareja sin que se desordene",
                    "Encontrar recetas rápidas (≤30 min) y aptas para niños"
                ],
                Frustrations: [
                    "Que le pidan registrarse antes de ver recetas o usar la lista",
                    "Búsqueda que no filtra bien por tiempo, dieta o 'apto para niños'",
                    "Listas que no se pueden editar/compartir fácilmente o se 'rompen'",
                    "Recetas con medidas raras (tazas, onzas) y sin equivalencias claras",
                    "Apps que pierden sus recetas o listas tras una actualización"
                ],
                Bio: "Laura trabaja a media jornada y lleva la organización de comidas en casa. Quiere cocinar más sano, pero entre el trabajo, los niños y las actividades, acaba improvisando o pidiendo comida. Usa el móvil para todo (WhatsApp, Instagram, banca online) y ya ha probado apps de recetas, pero siempre vuelve a usar el navegador y notas en el teléfono. Busca una app que le permita planificar la semana, generar la lista automáticamente y compartirla con su pareja sin complicaciones.",
                Tech: [
                    { Name: "TIC/Internet", Value: 4 },
                    { Name: "Móvil", Value: 5 },
                    { Name: "RRSS", Value: 4 },
                    { Name: "Software", Value: 3 }
                ], 
                Contextos: "Quiere organizar las comidas semanales y la compra de forma rápida, sin perder tiempo copiando ingredientes ni lidiando con apps complejas. Le interesa cocinar más sano y ahorrar tiempo.",  
                PreferredChannels: [
                    { Name: "Publicidad Tradicional", Value: 2 },
                    { Name: "Online & Social Media", Value: 4 },
                    { Name: "Recomendaciones & sugerencias", Value: 3 },
                    { Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
                ]
            },
            {   
                
                /*************************************/
                /**** SEGUNDA PERSONA: DANI    *******/
                /**** "El foodie ahorrador"     *******/
                /*************************************/
                
                Id: 1,
                Name: "Dani",
                Photo: "man.png",
                Quote: "Quiero recetas baratas, con pocos ingredientes y saber qué me falta comprar",
                Age: 27,
                Occupation: "Estudiante de máster y repartidor a ratos",
                Family: "Vive en piso compartido",
                Location: "Granada (Centro)",
                Character: "Curioso, creativo, le gusta probar cosas nuevas, muy sensible al precio",
                PersonalityTraits: [
                    { Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
                    { Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
                    { Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
                    { Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
                ], 
                Goals: [
                    "Encontrar recetas baratas y con pocos ingredientes",
                    "Ajustar raciones y ver cómo cambian cantidades y coste estimado",
                    "Ordenar la lista por supermercado o pasillos y marcar lo que ya tiene",
                    "Guardar recetas de webs y TikTok sin copiar y pegar todo a mano"
                ],
                Frustrations: [
                    "Recetas con listas larguísimas y productos gourmet o difíciles de encontrar",
                    "Apps que no dejan ver el coste aproximado ni filtrar por 'barato' / 'pocos ingredientes'",
                    "Tener que volver a escribir recetas que ya vio en TikTok o blogs",
                    "Anuncios invasivos que tapan ingredientes o pasos mientras cocina",
                    "Que la app no funcione bien offline (en el súper o en la cocina)"
                ],
                Bio: "Dani vive en un piso compartido, cocina bastante pero con presupuesto ajustado. Le gusta descubrir recetas nuevas en TikTok e Instagram, pero luego se lía al hacer la compra: compra de más, se le olvidan ingredientes o acaba tirando comida. Quiere una app que le ayude a cocinar rico, barato y sin desperdiciar, permitiéndole buscar por lo que ya tiene en casa y ver qué le falta comprar y cuánto le va a costar.",
                Tech: [
                    { Name: "TIC/Internet", Value: 5 },
                    { Name: "Móvil", Value: 5 },
                    { Name: "RRSS", Value: 5 },
                    { Name: "Software", Value: 4 }
                ], 
                Contextos: "Busca recetas económicas y prácticas, ajustadas a lo que ya tiene en casa. Quiere una lista de la compra inteligente, ordenada por supermercado/pasillo y que funcione bien incluso con mala cobertura.",  
                PreferredChannels: [
                    { Name: "Publicidad Tradicional (Ads)", Value: 2 },
                    { Name: "Online & Social Media", Value: 5 },
                    { Name: "Recomendaciones & sugerencias", Value: 4 },
                    { Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
                ]
            }
        ];
        $scope.model = $scope.Personas[0];
    }]);