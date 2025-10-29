const questions = [
    {
        type: "questions",
        category: "electrics",
        text: `Amb un voltímetre digital es mesura cinc vegades la caiguda de tensió entre els borns d’una pila, i els valors obtinguts són 9,015 V, 9,025 V, 9,000 V, 8,975 V i 8,985 V. Es pot prendre com a resultat de la mesura, amb l’interval d’incertesa corresponent, 9,000 V?`, 
            options: [
            { text: "Sí, perquè és el tercer valor dels cinc obtinguts.", value: "a" },
            { text: "Sí, perquè és la mitjana dels valors obtinguts.", value: "b" },
            { text: "Sí, perquè és el valor més proper a l’última mesura.", value: "c" },
            { text: "Sí, perquè és el valor més proper a la primera mesura.", value: "d" }
        ],
        correctAnswer: "b",  // No és necessari aquí perquè es tracta d'un exercici obert
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: ` Una fàbrica de rajoles produeix un model de mides 200 mm x 310 mm. Si amb una caixa d’aquestes peces es pot enrajolar una superfície de 0,992 m^2, quantes rajoles conté cada caixa com a mínim?`,
        options: [
            { text: "14", value: "a" },
            { text: "15", value: "b" },
            { text: "16", value: "c" },
            { text: "17", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            A = 200 \\, \\text{mm} \\times 310 \\, \\text{mm} = 62000 \\, \\text{mm^2}
            \\]
            \\[
            A = 62000 \\, \\text{mm^2} \\frac{1 \\times 10^6} {10^6} \\ = 0{,}062 \\, \\text{m^2}
            \\]
            \\[
            \\Delta T = 70 \\, ^\\circ \\text{C} - 10 \\, ^\\circ \\text{C} = 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = m \\times c_e \\times \\Delta T
            \\]
            \\[
            Q = 11000 \\, \\text{g} \\times 4{,}18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ \\text{C}} \\times 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = 11000 \\times 4{,}18 \\times 60 = 2{,}7588 \\times 10^6 \\, \\text{J}
            \\]
            \\[
            W = 0{,}9 \\, \\text{kWh} \\times 3600000 \\, \\text{J/kWh} = 3240000 \\, \\text{J}
            \\]
            \\[
            \\eta = \\frac{Q}{W} \\times 100
            \\]
            \\[
            \\eta = \\frac{2{,}7588 \\times 10^6}{3{,}24 \\times 10^6} \\times 100 = 85{,}15 \\, \\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una família que anualment generava 525 kg d’envasos, en un any ha aconseguit reduir aquesta quantitat un 60 %. Quina reducció en emissions de GEH ha obtingut respecte a l’any anterior, tenint en compte que el factor d’emissió dels envasos és de 120,09 g CO2eq/kg residu?`,
        options: [
            { text: "25,22 kg CO2eq", value: "a" },
            { text: "37,83 kg CO2eq", value: "b" },
            { text: "63,05 kg CO2eq", value: "c" },
            { text: "88,27 kg CO2eq", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Quantitat inicial d’envasos} = 525 \\, \\text{kg}
            \\]
            \\[
            \\text{Percentatge de reducció} = 60\\%
            \\]
            \\[
            \\text{Quantitat reduïda} = 525 \\, \\text{kg} \\times 0{,}60 = 315 \\, \\text{kg}
            \\]
            \\[
            \\text{Quantitat de residu restant} = 525 \\, \\text{kg} - 315 \\, \\text{kg} = 210 \\, \\text{kg}
            \\]
            \\[
            \\text{Emissions inicials} = 525 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions inicials} = 63047,25 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions inicials} = 63{,}05 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 210 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25218{,}9 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25{,}22 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Reducció en emissions} = 63{,}05 \, \\text{kg CO2eq} - 25{,}22 \, \\text{kg CO2eq} = 37{,}83 \, \\text{kg CO2eq}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    }
];

