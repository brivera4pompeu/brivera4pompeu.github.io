const questions = [
   {
    type: "questions",
    category: "materials",
    text: `Amb un voltímetre digital es mesura cinc vegades la caiguda de tensió entre els borns d’una pila, i els valors obtinguts són 9,015 V, 9,025 V, 9,000 V, 8,975 V i 8,985 V. Es pot prendre com a resultat de la mesura, amb l’interval d’incertesa corresponent, 9,000 V?`,
    options: [
        { text: "Sí, perquè és el tercer valor dels cinc obtinguts.", value: "a" },
        { text: "Sí, perquè és la mitjana dels valors obtinguts.", value: "b" },
        { text: "Sí, perquè és el valor més proper a l’última mesura.", value: "c" },
        { text: "Sí, perquè és el valor més proper a la primera mesura.", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
        \\[
        V = \\frac{9{,}015 + 9{,}025 + 9{,}000 + 8{,}975 + 8{,}985}{5}
        \\]
        \\[
        V = \\frac{45{,}000}{5} = 9{,}000 \\, V
        \\]
        \\[
        \\Delta V = \\frac{V_{màx} - V_{mín}}{2} = \\frac{9{,}025 - 8{,}975}{2} = 0{,}025 \\, V
        \\]
        \\[
        V = (9{,}000 \\pm 0{,}025) \\, V
        \\]
        <br><br>`
},
   {
    type: "questions",
    category: "materials",
    text: `Una fàbrica de rajoles produeix un model de mides 200 mm x 310 mm. Si amb una caixa d’aquestes peces es pot enrajolar una superfície de 0,992 m², quantes rajoles conté cada caixa com a mínim?`,
    options: [
        { text: "14", value: "a" },
        { text: "15", value: "b" },
        { text: "16", value: "c" },
        { text: "17", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        \\[
        A_{rajola} = 200 \\, \\text{mm} \\times 310 \\, \\text{mm} = 62000 \\, \\text{mm²}
        \\]
        \\[
        A_{rajola} = 62000 \\, \\text{mm²} \\times \\frac{1 \\text{ m²}}{10^6 \\, \\text{mm²}} = 0{,}062 \\, \\text{m²}
        \\]
        \\[
        N_{rajoles} = \\frac{0{,}992 \\, \\text{m²}}{0{,}062 \\, \\text{m²/rajola}} \\approx 16
        \\]
        <br><br>`
},
  {
    type: "questions",
    category: "materials",
    text: `En una cadena de fabricació hi ha tres estacions de control de qualitat en les quals es retiren les unitats defectuoses. La taxa mitjana de rebuig de cada estació és 3 %, 1% i 0,5 %, respectivament. D’un lot inicial de 1600 unitats, quantes se’n rebutgen en total?`,
    options: [
        { text: "24", value: "a" },
        { text: "48", value: "b" },
        { text: "64", value: "c" },
        { text: "72", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        \\[
        N_{inicial} = 1600
        \\]
        \\[
        N_{rebutjades1} = 1600 \\times 0{,}03 = 48
        \\]
        \\[
        N_{restants1} = 1600 - 48 = 1552
        \\]
        \\[
        N_{rebutjades2} = 1552 \\times 0{,}01 = 15{,}52 \\approx 16
        \\]
        \\[
        N_{restants2} = 1552 - 16 = 1536
        \\]
        \\[
        N_{rebutjades3} = 1536 \\times 0{,}005 = 7{,}68 \\approx 8
        \\]
        \\[
        N_{rebutjades\ total} = 48 + 16 + 8 = 72
        \\]
        <br><br>`
},

];

