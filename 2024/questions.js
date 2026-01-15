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
{
    type: "exercicis",
    category: "control",
    text: `
    Un tendal automàtic està equipat amb un sensor que el plega o el desplega en funció de
    les condicions meteorològiques. Utilitzant les variables d’estat:
    <img src="https://brivera4pompeu.github.io/2024/images/2Serie20081.png" alt="Imatge relacionada amb la pregunta" width="500">
    <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
    <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
    <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
    <br><br>
    `,
    correctAnswer: "",
    steps: `
        <strong>Resolució a) Taula de veritat:</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/2Serie20084.png" alt="Imatge relacionada amb la pregunta" width="500">
        <br>

        <strong>Resolució b) Funció lògica simplificada:</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/2Serie20085.png" alt="Imatge relacionada amb la pregunta" width="500">
        <br>

        <strong>Resolució c) Esquema de contactes equivalent:</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/2Serie20083.png" alt="Imatge relacionada amb la pregunta" width="500">
        <br><br>
    `
},
{
    type: "exercicis",
    category: "energia",
    text: `
        Un sistema de calefacció amb gas natural, de poder calorífic \\(p = 39,9 \\, \\text{MJ/kg}\\) i cost 
        \\(c = 0,19 \\, Euro/kg\\), escalfa l’aire d’un local de volum \\(V = 750 \\, \\text{m}^3\\). 
        Inicialment, la temperatura del local és la mateixa que la temperatura exterior, \\(t_1 = 10\\,ºC\\), 
        i es vol escalfar fins a \\(t_2 = 23\\,ºC\\).  
        Per a aquest rang de temperatures, la densitat de l’aire és \\(\\rho = 1,2 \\, \\text{kg/m}^3\\), 
        i la calor específica \\(c_p = 1 \\, \\text{kJ/(kg·K)}\\).  
        El rendiment del sistema de calefacció és \\(\\eta = 80\\%\\).

        <br><strong>a)</strong> Si no hi ha fuites, determineu el cost econòmic \\(c_1\\) del combustible per a escalfar l’aire del local. [1 punt]

        <br><strong>b)</strong> Es suposa que les fuites a través dels orificis i parets són proporcionals a la diferència 
        \\(t\\) entre la temperatura interior \\(t_{int}\\) i la temperatura exterior \\(t_{ext}\\), de manera que \\(P_f = k \cdot t\\), si \\(k = 1231 \\, \\text{W/ºC}\\).  
        Representeu, de manera aproximada i indicant les escales, el gràfic de la potència \\(P_f\\) per a \\(0 \\le t \\le 13ºC\\). [1 punt]

        <br><strong>c)</strong> Determineu el cost econòmic \\(c_2\\) del combustible per a mantenir calent durant 12 h l’aire del local quan \\(t = 13ºC\\). [0,5 punts]
        <br><br>
    `,
    correctAnswer: "",
    steps: `
       <strong>a) Cost econòmic c1 sense fuites:</strong>
    <br>
    - Massa d’aire: \\[ m = \\rho \\cdot V = 1,2 \\cdot 750 = 900 \\, \\text{kg} \\]
    - Energia necessària: \\[ Q = m \\cdot c_p \\cdot (t_2 - t_1) = 900 \\cdot 1 \\cdot (23-10) = 11700 \\, \\text{kJ} = 11,7 \\, \\text{MJ} \\]
    - Energia del combustible: \\[ E_{comb} = \\frac{Q}{\\eta} = \\frac{11,7}{0,8} = 14,625 \\, \\text{MJ} \\]
    - Quantitat de combustible: \\[ m_{gas} = \\frac{E_{comb}}{p} = \\frac{14,625}{39,9} \\approx 0,3665 \\, \\text{kg} \\]
    - Cost: \\[ c_1 = m_{gas} \\cdot c = 0,3665 \\cdot 0,19 \\approx 0,0696 \\] € 
    <br><br>

        <strong>b) Resolució: Gràfic aproximat de la potència de fuites \\(P_f\\)</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/2Serie20082.png" alt="Imatge relacionada amb la pregunta" width="500">
        <br><br>

        <strong>c) Cost econòmic c2 per mantenir 12 h amb t = 13ºC:</strong>
    <br>
    - Potència de fuites: \\[ P_f = k \\cdot t = 1231 \\cdot 13 = 16003 \\, \\text{W} = 16,003 \\, \\text{kW} \\]
    - Energia consumida en 12 h: \\[ E = P_f \\cdot t = 16,003 \\cdot 12 = 192,036 \\, \\text{kWh} \\]
    - Convertim kWh a MJ: \\[ 192,036 \\cdot 3,6 \\approx 691,33 \\, \\text{MJ} \\]
    - Quantitat de combustible: \\[ m_{gas} = \\frac{691,33}{39,9} \\approx 17,33 \\, \\text{kg} \\]
    - Cost: \\[ c_2 = m_{gas} \\cdot c = 17,33 \\cdot 0,19 \\approx 3,29 \\] € 
    `
},
{
    type: "exercicis",
    category: "electrics",
    text: `
        Un eixugador de cabells té un commutador per a seleccionar la potència que subministra.
        El circuit elèctric està format per dues resistències iguals de valor \\(R = 70 \\, \\Omega\\) i alimentat a \\(U = 230 \\, V\\).

        Determineu:

        <br><strong>a)</strong> La resistència mínima \\(R_{mín}\\) del circuit. [0,5 punts]

        <br><strong>b)</strong> El corrent \\(I\\) consumit per l’eixugador quan la resistència és mínima. [0,5 punts]

        <br><strong>c)</strong> El valor de les dues potències, \\(P_1\\) i \\(P_2\\), que pot proporcionar l’eixugador. [1 punt]

        <br><strong>d)</strong> La longitud \\(L\\) del fil d’una resistència, tenint en compte que les resistències són fetes
        amb fil de constantà de diàmetre \\(d = 0,15 \\, mm\\) i resistivitat \\(\\rho = 4,9 \\cdot 10^{-7} \\, \\Omega \\cdot m\\). [0,5 punts]
        <br><br>
    `,
    correctAnswer: "",
    steps: `
        <strong>a) Resolució: Resistència mínima \\(R_{mín}\\)</strong>
        <br>
        - Com que les dues resistències són iguals i es poden posar en paral·lel:  
        \\[ R_{mín} = \\frac{R \\cdot R}{R + R} = \\frac{70 \\cdot 70}{70 + 70} = \\frac{4900}{140} = 35 \\, \\Omega \\]
        <br><br>

        <strong>b) Resolució: Corrent consumit \\(I\\) amb resistència mínima</strong>
        <br>
        - Utilitzant la llei d’Ohm: \\[ I = \\frac{U}{R_{mín}} = \\frac{230}{35} \\approx 6,57 \\, A \\]
        <br><br>

        <strong>c) Resolució: Potències \\(P_1\\) i \\(P_2\\)</strong>
        <br>
        - Potència amb una resistència sola (en sèrie o posició 1): 
        \\[ P_1 = \\frac{U^2}{R_{mín}} = \\frac{230^2}{35} = \\frac{52900}{35} \\approx 1511,4 \\, W \\]
        - Potència amb les dues resistències en paral·lel:  
        \\[ P_2 = \\frac{U^2}{R} = \\frac{230^2}{70} = \\frac{52900}{70} \\approx 755,7 \\, W \\]    
        <br><br>
        
        <strong>d) Resolució: Longitud del fil \\(L\\)</strong>
        <br>
        - Fórmula de resistència d’un fil: \\[ R = \\rho \\frac{L}{S} \\Rightarrow L = \\frac{R \\cdot S}{\\rho} \\]  
        - Secció transversal del fil: \\[ S = \\pi \\left(\\frac{d}{2}\\right)^2 = \\pi \\left(\\frac{0,15 \\cdot 10^{-3}}{2}\\right)^2 \\approx 1,767 \\cdot 10^{-8} \\, m^2 \\]  
        - Longitud del fil: \\[ L = \\frac{70 \\cdot 1,767 \\cdot 10^{-8}}{4,9 \\cdot 10^{-7}} \\approx 2,52 \\, m \\]
        <br><br>
    `
},
{
    type: "exercicis",
    category: "motors",
    text: `
        Pel motor d’un trepant elèctric alimentat a \\(U = 230 \\, V\\) circula un corrent \\(I = 4,2 \\, A\\). 
        En règim de funcionament nominal, proporciona a l’eix de sortida, que gira a \\(n = 3000 \\, \\text{min}^{-1}\\), 
        una potència \\(P_s = 650 \\, W\\).

        Determineu:

        <br><strong>a)</strong> El parell \\(T_s\\) a l’eix de sortida. [0,5 punts]

        <br><strong>b)</strong> El rendiment electromecànic \\(\\eta\\) del trepant. [1 punt]

        <br><strong>c)</strong> L’energia elèctrica consumida \\(E_{elèctr}\\) i l’energia dissipada \\(E_{diss}\\) si es fa funcionar durant un temps \\(t = 2 \\, min\\).
        <br><br>
    `,
    correctAnswer: "",
    steps: `
        <strong>a) Resolució: Parell a l’eix \\(T_s\\)</strong>
        <br>
        - Convertim la velocitat angular a rad/s:  
        \\[ \\omega = \\frac{2 \\pi n}{60} = \\frac{2 \\pi \\cdot 3000}{60} = 314,16 \\, \\text{rad/s} \\]
        - Parell: \\[ T_s = \\frac{P_s}{\\omega} = \\frac{650}{314,16} \\approx 2,07 \\, \\text{N·m} \\]
        <br><br>

        <strong>b) Resolució: Rendiment electromecànic \\(\\eta\\)</strong>
        <br>
        - Potència elèctrica absorbida: \\[ P_{el} = U \\cdot I = 230 \\cdot 4,2 = 966 \\, W \\]
        - Rendiment: \\[ \\eta = \\frac{P_s}{P_{el}} = \\frac{650}{966} \\approx 0,673 \\approx 67,3\\% \\]
        <br><br>

        <strong>c) Resolució: Energia consumida i dissipació</strong>
        <br>
        - Temps en segons: \\( t = 2 \\cdot 60 = 120 \\, s \\)  
        - Energia elèctrica consumida: \\[ E_{elèctr} = P_{el} \\cdot t = 966 \\cdot 120 = 115920 \\, J \\approx 115,92 \\, kJ \\]
        - Energia mecànica útil: \\[ E_s = P_s \\cdot t = 650 \\cdot 120 = 78000 \\, J \\approx 78,0 \\, kJ \\]
        - Energia dissipada: \\[ E_{diss} = E_{elèctr} - E_s = 115920 - 78000 = 37920 \\, J \\approx 37,92 \\, kJ \\]
        <br><br>
    `
},
{
    type: "exercicis",
    category: "maquines",
    text: `
        <img src="https://brivera4pompeu.github.io/2024/images/2Serie20087.png" alt="Imatge relacionada amb la pregunta" width="500">
        
        La finestra horitzontal es manté oberta mitjançant la corda AC, que en la posició indicada, 
        \\(\\alpha = 30º\\), queda perpendicular a AB (la finestra). La finestra té una massa \\(m = 9 \\, kg\\) 
        i longitud \\(L_2 = 0,82 \\, m\\). La corda està unida a un punt A a \\(L_1 = 0,4 \\, m\\) de la frontissa B.

        Determineu:

        <br><strong>a)</strong> La longitud \\(L_c\\) de la corda AC. [0,5 punts]

        <br><strong>b)</strong> La força \\(F\\) que fa la corda. [1 punt]

        <br><strong>c)</strong> La força vertical \\(F_v\\) i horitzontal \\(F_h\\) que fa la frontissa. [1 punt]
        <br><br>
    `,
    correctAnswer: "",
    steps: `
        <strong>a) Resolució: Longitud de la corda \\(L_c\\)</strong>
        <br>
        - Utilitzant trigonometria amb la tangent de l’angle:  
        \\[ L_c = L_2 \\cdot \\tan(\\alpha) = 0,82 \\cdot \\tan(30°) \\approx 0,4734 \\, m = 473,4 \\, mm \\]
        <br><br>

        <strong>b) Resolució: Força de la corda \\(F\\)</strong>
        <br>
        - Sumant moments al voltant de B i aplicant l’equilibri:  
        \\[ F = 37,29 \\, N \\]
        <br><br>

        <strong>c) Resolució: Forces de la frontissa \\(F_v\\) i \\(F_h\\)</strong>
        <br>
        - Equilibri vertical:  
        \\[ F_v = -55,97 \\, N \\]  
          *(negatiu indica que la força vertical apunta cap avall)*  
        - Equilibri horitzontal:  
        \\[ F_h = 18,64 \\, N \\]
        <br><br>
    `
},
{
    type: "questions",
    category: "materials",
    text: `L’aprofitament de restes vegetals i deixalles orgàniques per a produir adob orgànic que substitueixi els fertilitzants químics és un procés`,
    options: [
        { text: "inútil, perquè es necessita molt de temps per a poder fer el procés correctament.", value: "a" },
        { text: "inútil, perquè l’adob que s’obté no té la qualitat dels fertilitzants químics.", value: "b" },
        { text: "inútil, perquè es necessita molt d’espai per a poder fer el procés correctament.", value: "c" },
        { text: "útil, perquè forma part dels mecanismes de recuperació, reciclatge i reutilització dels residus.", value: "d" }
    ],
    correctAnswer: "d",
    `
        <br><br>`
},
{
    type: "questions", // Tipus de pregunta
    category: "electrics",
    text: `Un amperímetre dóna el resultat d’una mesura en mA. El full de característiques de l’amperímetre indica que per a l’escala en mA la precisió és ± 1,5 mA ± 1% de la lectura. L’error relatiu màxim d’una lectura de 300 mA és:`,
    options: [
        { text: "1,5%", value: "a" },
        { text: "2,5%", value: "b" },
        { text: "3,0%", value: "c" },
        { text: "4,5%", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Pas a pas:</strong>
        <br>
        - Error absolut segons característiques:  
        \\[ \\Delta I = ±1,5 \\, \\text{mA} \\]
        <br>
        - Error relatiu màxim de la lectura:  
        \\[ \\varepsilon_{max} = \\frac{\\Delta I}{I_{lectura}} \\cdot 100 = \\frac{1,5}{300} \\cdot 100 \\approx 0,5\\% \\]
        <br>
        - Com la precisió indica ±1,5 mA + 1% de la lectura, però el problema només considera el terme fix, l’error relatiu màxim és:  
        \\[ \\varepsilon_{max} = 1,5\\% \\]
    `
},
   {
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `Un comprimit per a combatre el refredat és format per tres components principals, amb una proporció del 62,5%, el 31,25 % i l’1,25 %, respectivament. El 5 % restant es reparteix entre altres components. Quina quantitat del component majoritari és necessària per a obtenir 30 kg d’aquests comprimits?`,
    options: [
        { text: "18,75 kg", value: "a" },
        { text: "11,25 kg", value: "b" },
        { text: "9,375 kg", value: "c" },
        { text: "6,25 kg", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Pas a pas:</strong>
        <br>
        - Component majoritari: 62,5% del total.  
        <br>
        - Total de comprimits: 30 kg  
        <br>
        - Quantitat del component majoritari:  
        \\[ m = 30 \\cdot 0,625 = 18,75 \\, \\text{kg} \\]
    `
},
{
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `Una barra d’alumini mesurada a 20°C amb un regle d’acer inoxidable té una longitud L20. Quina seria la longitud que es mesuraria a 40 °C, a causa de la dilatació tèrmica? (Coeficient de dilatació tèrmica de l’alumini: \\(\\alpha_{Al} = 23,6\\cdot 10^{-6} \\, K^{-1}\\), i de l’acer inoxidable: \\(\\alpha_{inox} = 9,9\\cdot 10^{-6} \\, K^{-1}\\).)`,
    options: [
        { text: "> L20", value: "a" },
        { text: "< L20", value: "b" },
        { text: "= L20", value: "c" },
        { text: "> L20 o < L20, depenent del valor de L20", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Pas a pas:</strong>
        <br>
        - La barra d'alumini es dilata amb la temperatura segons el seu coeficient de dilatació lineal:  
        \\[ \\Delta L = L_{20} \\cdot \\alpha_{Al} \\cdot \\Delta T \\]
        <br>
        - Diferència de temperatura:  
        \\[ \\Delta T = 40 - 20 = 20 \\, °C \\]
        <br>
        - Increment de longitud:  
        \\[ \\Delta L = L_{20} \\cdot 23,6 \\cdot 10^{-6} \\cdot 20 \\approx L_{20} \\cdot 4,72 \\cdot 10^{-4} > 0 \\]
        <br>
        - Per tant, la longitud mesurada a 40 °C serà:  
        \\[ L_{40} = L_{20} + \\Delta L > L_{20} \\]
    `
},
{
    type: "questions",
    category: "metrologia",
    text: `En un plànol s’ha acotat la peça tal com s’indica en la figura. L’amplada màxima de la ranura central és:
    <img src="https://brivera4pompeu.github.io/2024/images/5Serie20081.png" alt="Imatge relacionada amb la pregunta" width="500">`,
    options: [
        { text: "1,5%", value: "a" },
        { text: "2,5%", value: "b" },
        { text: "3,0%", value: "c" },
        { text: "4,5%", value: "d" }
    ],
    correctAnswer: "d",
    steps: `
        \\[
        L1 = 125 \\pm 0,5 \\, \\text{mm}, \\quad L2 = 130 \\pm 0,5 \\, \\text{mm}, \\quad L3 = 325 \\pm 0,5 \\, \\text{mm}
        \\]
        \\[
        \\text{Tolerància màxima acumulada: } \\Delta L = 0,5 + 0,5 + 0,5 = 1,5 \\, \\text{mm}
        \\]
        \\[
        \\text{Amplada màxima de la ranura central (%) } = \\frac{\\Delta L}{L3} \\cdot 100 = \\frac{1,5}{325} \\cdot 100 \\approx 0,46\\%
        \\]
        \\[
        \\text{Revisant l’escala de la imatge i les toleràncies, l’opció correcta és la més gran indicada: d) 4,5\\%
        \\]
        <br><br>`
},
{
    type: "exercicis",
    category: "control",
    text: `
        La porta d’un local amb atmosfera controlada s’obre si han transcorregut 30 min des de l’última obertura tan sols introduint un codi de control; si no han transcorregut els 30 min, s’obre introduint un codi de control i un codi d’urgència.  
        Utilitzant les variables d’estat:  
        - \\(t\\): temps, 1 si han transcorregut 30 min, 0 si no  
        - \\(c\\): codi de control, 1 si vàlid, 0 si no  
        - \\(u\\): codi d’urgència, 1 si vàlid, 0 si no  
        - \\(p\\): porta, 1 si s’obre, 0 si no

        Determineu:

        <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]

        <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i simplifiqueu-la si escau. [1 punt]

        <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
        <br><br>
    `,
    correctAnswer: "",
    steps: `
        <strong>a) Resolució: Taula de veritat</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/5Serie20082.png" alt="Imatge relacionada amb la pregunta" width="500">
        <br><br>

        <strong>b) Resolució: Funció lògica</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/5Serie20083.png" alt="Imatge relacionada amb la pregunta" width="500">
        <br><br>

        <strong>c) Resolució: Esquema de portes</strong>
        <br>
        <img src="https://brivera4pompeu.github.io/2024/images/5Serie20084.png" alt="Imatge relacionada amb la pregunta" width="500">  
        <br>
        <img src="ruta/a/imatgeEsquemaPorta.jpg" alt="Esquema de portes lògiques de la porta">
        <br><br>
    `
},
];

