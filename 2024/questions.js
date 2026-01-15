const questions = [
   {
    type: "questions",
    category: "maquines",
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
    category: "organitzacio",
    text: `En una cadena de fabricació hi ha tres estacions de control de qualitat en les quals es retiren les unitats defectuoses. La taxa mitjana de rebuig de cada estació és 3 %, 1% i 0,5 %, respectivament. D’un lot inicial de 1600 unitats, quantes se’n rebutgen en total?`,
    options: [
        { text: "24", value: "a" },
        { text: "48", value: "b" },
        { text: "64", value: "c" },
        { text: "72", value: "d" }
    ],
    correctAnswer: "d",
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
        N_{rebutjades2} = 1552 \\times 0{,}01 \\approx 15{,}52 \\approx 16
        \\]
        \\[
        N_{restants2} = 1552 - 16 = 1536
        \\]
        \\[
        N_{rebutjades3} = 1536 \\times 0{,}005 \\approx 7{,}68 \\approx 8
        \\]
        \\[
        N_{rebutjades\\ total} = 48 + 16 + 8 = 72
        \\]
        <br><br>`
},

{
    type: "questions",
    category: "organitzacio",
    text: `Una empresa subministra dues categories del mateix producte. Els productes de la primera categoria han passat per uns controls de qualitat més estrictes i són més cars que els de la segona categoria. Es pot considerar aquesta manera d’actuar com una conducta adequada?`,
    options: [
        { text: "Sí, sempre que el benefici dels productes de la segona categoria sigui nul o es destini a obres socials.", value: "a" },
        { text: "No, s’ha actuat malament posant un control de qualitat menys estricte que l’altre.", value: "b" },
        { text: "No, els de la segona categoria estan mal fets i caldria rebutjar-los.", value: "c" },
        { text: "Sí, sempre que les dues categories compleixin les prestacions mínimes especificades.", value: "d" }
    ],
    correctAnswer: "d",
    steps: `
        <br><br>`
},
{
    type: "questions",
    category: "materials",
    text: `Un tipus de paper adequat per a imprimir imatges digitals en color té un gramatge de 160 g/m². Es comercialitza en paquets de 250 fulls de format A4, que mesuren 210 mm x 297 mm. Quant pesen els 250 fulls d’un paquet? (g = 10 m/s²)`,
    options: [
        { text: "2,495 N", value: "a" },
        { text: "24,95 N", value: "b" },
        { text: "0,2495 N", value: "c" },
        { text: "12,48 N", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
        \\[
        A_{full} = 0{,}210 \\, \\text{m} \\times 0{,}297 \\, \\text{m} = 0{,}06237 \\, \\text{m²}
        \\]
        \\[
        m_{full} = 160 \\, \\text{g/m²} \\times 0{,}06237 \\, \\text{m²} = 9{,}9792 \\, \\text{g} \\approx 0{,}009979 \\, \\text{kg}
        \\]
        \\[
        m_{paquet} = 250 \\times 0{,}009979 \\, \\text{kg} = 2{,}49475 \\, \\text{kg}
        \\]
        \\[
        P = m_{paquet} \\times g = 2{,}49475 \\times 10 = 24{,}95 \\, \\text{N}
        \\]
        <br><br>`
},
{
    type: "questions",
    category: "materials",
    text: `L’Administració d’un país fa una inversió de 10200 M€ en la millora de la xarxa de transports. Aquesta inversió es destina a quatre actuacions: tres en la xarxa ferroviària (I, II, IV) i una en la de carreteres (III). Si les quantitats invertides són I: 4000 M€, II: 1100 M€, III: 3800 M€ i IV: 1300 M€, quin percentatge correspon a la inversió en la xarxa ferroviària i quin a la inversió en carreteres?`,
    options: [
        { text: "87,25% - 12,75%", value: "a" },
        { text: "60,78% - 39,22%", value: "b" },
        { text: "62,75% - 37,25%", value: "c" },
        { text: "89,22% - 10,78%", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        \\[
        I_{ferroviaria} = 4000 + 1100 + 1300 = 6400 \\, \\text{M€}
        \\]
        \\[
        I_{carreteres} = 3800 \\, \\text{M€}
        \\]
        \\[
        I_{total} = 10200 \\, \\text{M€}
        \\]
        \\[
        \\%_{ferroviaria} = \\frac{6400}{10200} \\times 100 \\approx 62,75\\%
        \\]
        \\[
        \\%_{carreteres} = \\frac{3800}{10200} \\times 100 \\approx 37,25\\%
        \\]
        <br><br>`
},
{
    type: "questions",
    category: "materials",
    text: `Un avió que transporta 325 passatgers recorre 8000 km i emet 340 t de CO2 a l’atmosfera. Quina és la quantitat de CO2 per passatger i quilòmetre emesa a l’atmosfera per l’avió?`,
    options: [
        { text: "130,8 g", value: "a" },
        { text: "115,4 g", value: "b" },
        { text: "119,5 g", value: "c" },
        { text: "127,8 g", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        \\[
        \\text{CO2 total} = 340 \\, \\text{t} = 340 \\times 10^3 \\, \\text{kg} = 340000 \\, \\text{kg}
        \\]
        \\[
        \\text{Passatgers} = 325
        \\]
        \\[
        \\text{Distància} = 8000 \\, \\text{km}
        \\]
        \\[
        \\text{CO2 per passatger i km} = \\frac{340000 \\, \\text{kg}}{325 \\times 8000 \\, \\text{km}}
        \\]
        \\[
        \\text{CO2 per passatger i km} = \\frac{340000}{2600000} = 0{,}1308 \\, \\text{kg/passatger·km}
        \\]
        \\[
        0{,}1308 \\, \\text{kg/passatger·km} = 130{,}8 \\, \\text{g/passatger·km}
        \\]
        <br><br>`
},
{
    type: "questions",
    category: "materials",
    text: `Un vehicle circula entre dues poblacions properes per una carretera de 10 km de longitud a una velocitat de 50 km/h. El cost econòmic del temps emprat per a fer aquest viatge s’estima que és 8,4 €/h, i se sap que el cost econòmic de tot el trajecte és 3,68 €. Quin s’estima que és el cost econòmic directe, en €/km, del vehicle?`,
    options: [
        { text: "0,20 €/km", value: "a" },
        { text: "0,34 €/km", value: "b" },
        { text: "0,37 €/km", value: "c" },
        { text: "0,47 €/km", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        \\[
        L = 10 \\, \\text{km}, \\quad v = 50 \\, \\text{km/h}
        \\]
        \\[
        t = \\frac{L}{v} = \\frac{10}{50} = 0{,}2 \\, \\text{h}
        \\]
        \\[
        C_{temps} = 8{,}4 \\, €/h \\times 0{,}2 \\, h = 1{,}68 \\, €
        \\]
        \\[
        C_{total} = 3{,}68 \\, €
        \\]
        \\[
        C_{directe} = C_{total} - C_{temps} = 3{,}68 - 1{,}68 = 2{,}00 \\, €
        \\]
        \\[
        C_{directe/km} = \\frac{2{,}00 \\, €}{10 \\, \\text{km}} = 0{,}20 \\, €/km
        \\]
        <br><br>`
},
{
    type: "questions",
    category: "metrologia",
    text: `En el plànol d’una peça que s’ha de fabricar amb acer s’indica que la distància entre dos punts és \\( 65^{+0,2}_{-0,1} \\) mm. El valor nominal d'aquesta distància és:`,
    options: [
        { text: "65,2 mm", value: "a" },
        { text: "65 mm", value: "b" },
        { text: "64,9 mm", value: "c" },
        { text: "65,15 mm", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
        \\[
        \\text{Distància indicada: } 65^{+0,2}_{-0,1} \\, \\text{mm}
        \\]
        \\[
        \\text{Valor nominal = valor central} = 65 \\, \\text{mm}
        \\]
        <br><br>`
},
{
    type: "questions",
    category: "materials",
    text: `Una barra massissa, la secció rectangular de la qual mesura 25 mm x 300 mm, pot suportar una força axial de tracció màxima de 360 kN sense trencar-se. Quina és la resistència a la ruptura del material?`,
    options: [
        { text: "4,8 MPa", value: "a" },
        { text: "48 MPa", value: "b" },
        { text: "480 MPa", value: "c" },
        { text: "576 MPa", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        \\[
        Seccio = 25 \\, \\text{mm} \\times 300 \\, \\text{mm} = 7500 \\, \\text{mm²}
        \\]
        \\[
        F = 360 \\, \\text{kN} = 360 \\times 10^3 \\, \\text{N} = 360000 \\, \\text{N}
        \\]
        \\[
        \\sigma_{ruptura} = \\frac{F}{A} = \\frac{360000}{7500} \\, \\text{N/mm²}
        \\]
        \\[
        \\sigma_{ruptura} = 48 \\, \\text{N/mm²} = 480 \\, \\text{MPa}
        \\]
        <br><br>`
},
];

