document.addEventListener("DOMContentLoaded", () => {
    // Base 1: Questões de Texto (Prova Teórica)
    const textQuestionsData = [
        {
            text: "01. I - A mucosa é a camada composta por um epitélio cilíndrico simples. II - A submucosa é constituída por tecido conjuntivo frouxo. III- Na mucosa encontram-se células parietais e zimogênicas. A qual órgão se referem essas informações?",
            options: ["Estômago", "Intestino grosso", "Duodeno", "Esôfago", "Nenhuma das alternativas anteriores"],
            correct: "Estômago",
            explanation: "A presença de células parietais e zimogênicas (principais) na mucosa é uma característica exclusiva da histologia do estômago."
        },
        {
            text: "02. São características histológicas do duodeno:",
            options: ["Presença de glândulas na submucosa (Brünner).", "Os enterócitos apresentam microvilosidades.", "Presença de poucas células caliciformes.", "Apresenta camada muscular longitudinal e circular.", "Todas as alternativas descritas estão corretas."],
            correct: "Todas as alternativas descritas estão corretas.",
            explanation: "O duodeno apresenta todas essas adaptações em sua mucosa, submucosa e camada muscular para digestão e absorção."
        },
        {
            text: "03. As glândulas de Brünner e o plexo mioentérico podem ser encontrados, respectivamente:",
            options: ["Camada mucosa do íleo e camada muscular do tubo digestório.", "Camada submucosa do duodeno e camada muscular do tubo digestório.", "Camada mucosa do íleo e camada submucosa do tubo digestório.", "Camada submucosa do duodeno e camada submucosa do tubo digestório.", "Cavidade oral e na submucosa do esôfago."],
            correct: "Camada submucosa do duodeno e camada muscular do tubo digestório.",
            explanation: "As glândulas de Brünner estão na submucosa duodenal e o plexo mioentérico (Auerbach) entre as camadas musculares."
        },
        {
            text: "04. É um órgão oco, sua parede consiste em uma camada mucosa de epitélio colunar simples, camada fibromuscular rica em fibras elásticas e músculo liso, e uma serosa.",
            options: ["Pâncreas", "Fígado", "Vesícula biliar", "Ducto biliar", "Ilhota pancreática"],
            correct: "Vesícula biliar",
            explanation: "A ausência de uma verdadeira submucosa e a presença de camada fibromuscular são clássicas da vesícula biliar."
        },
        {
            text: "05. I- No espaço porta há ramos da artéria hepática, veia porta e ductos biliares. II- A veia centro-lobular está no centro dos lóbulos. III- O parênquima é constituído por hepatócitos.",
            options: ["Apenas as afirmativas II e III são corretas.", "Todas as afirmativas são corretas.", "Apenas a afirmativa I é verdadeira.", "Todas as afirmativas são falsas.", "Apenas as afirmativas I e II são corretas."],
            correct: "Todas as afirmativas são corretas.",
            explanation: "Todas as descrições estruturais do lóbulo hepático e suas tríades portais estão corretas."
        },
        {
            text: "06. I- A arteríola central e os cordões medulares compõem a polpa branca. II- O baço é encapsulado com polpa branca e vermelha. III- A barreira hematotímica fica na cortical do timo.",
            options: ["Apenas os itens I e II estão corretos.", "Apenas os itens II e III estão corretos.", "Apenas os itens I e III estão corretos.", "Somente o item II está correto.", "Todos os itens estão corretos."],
            correct: "Apenas os itens II e III estão corretos.",
            explanation: "A afirmativa I (no texto original como VI) é falsa porque cordões medulares são estruturas típicas de linfonodos, não da polpa branca do baço."
        },
        {
            text: "07. Sobre o Sistema linfoide, assinale a sequência correta de V ou F: \n(1) Órgãos primários: medula, linfonodo e timo. \n(2) Linfonodos não são encapsulados, têm corpúsculos de Hassall. \n(3) O baço filtra a linfa. \n(4) No linfonodo, folículos ficam na região paramedular.",
            options: ["V, F, V, F", "F, F, F, F", "V, V, F, F", "F, V, F, V"],
            correct: "F, F, F, F",
            explanation: "Todas Falsas. Linfonodo é secundário e encapsulado. Baço filtra sangue. Hassall é no timo. Folículos linfoides ficam no córtex superficial."
        },
        {
            text: "08. Quanto às características da derme, está correto o item:",
            options: ["Camada reticular é tecido conjuntivo frouxo.", "Na derme podem ser evidenciados vasos, receptores sensoriais e estruturas como folículos pilosos.", "A derme constitui o panículo adiposo.", "Corpúsculos de Vater-Pacini estão na derme papilar.", "Células de Merkel localizam-se na derme."],
            correct: "Na derme podem ser evidenciados vasos, receptores sensoriais e estruturas como folículos pilosos.",
            explanation: "A derme abriga anexos epidérmicos, rica vascularização e nervos. (Merkel está na epiderme; panículo adiposo é hipoderme)."
        },
        {
            text: "09. Sobre a epiderme (V/F): (1) Camada basal tem células prismáticas baixas/cuboides sobre a membrana basal. (2) Queratinócitos migram e sofrem apoptose formando a camada córnea. (3) Na camada basal aderem-se por desmossomos à membrana.",
            options: ["V, V, V", "V, F, V", "V, V, F", "F, F, F"],
            correct: "V, V, F",
            explanation: "A última é falsa pois os queratinócitos aderem à membrana basal por HEMIdesmossomos (desmossomos ligam células entre si)."
        },
        {
            text: "10. Sobre o parênquima renal, é correto afirmar que:",
            options: ["Corpúsculos renais são formados por túbulo contorcido proximal.", "O polo vascular serve de saída para o túbulo contorcido distal.", "O folheto parietal reveste capilares.", "As células do folheto visceral são chamadas de podócitos.", "Cada néfron não possui túbulo distal."],
            correct: "As células do folheto visceral são chamadas de podócitos.",
            explanation: "Os podócitos formam o folheto visceral da cápsula de Bowman e envolvem intimamente os capilares glomerulares."
        },
        {
            text: "11. Sistema urinário (V/F): (1) Formado por rins, ureteres, bexiga e uretra. (2) Ocorre exclusivamente reabsorção nos túbulos. (3) Seio renal contém cálices e pélvis. (4) Pirâmides estão na cortical e glomérulos na medular.",
            options: ["F, F, V, F", "F, V, V, F", "F, V, F, F", "V, V, F, V", "V, F, V, F"],
            correct: "V, F, V, F",
            explanation: "A (2) é falsa (há secreção também). A (4) é falsa (pirâmides estão na medular e glomérulos na cortical)."
        },
        {
            text: "12. Assinale a alternativa correta a respeito do sistema neuroendócrino:",
            options: ["A pars distalis pode ser chamada de lobo neural.", "A dupla origem embriológica não influencia a histofisiologia.", "A neuro-hipófise perde conexão com o diencéfalo.", "A pars distalis é glândula cordonal, derivada da bolsa de Rathke.", "Corpos de Herring fazem parte da pars intermedia."],
            correct: "A pars distalis é glândula cordonal, derivada da bolsa de Rathke.",
            explanation: "A adenohipófise (pars distalis) tem origem epitelial da bolsa de Rathke e organiza-se em cordões celulares secretores."
        },
        {
            text: "13. Sobre as células da adenohipófise, é correto afirmar que:",
            options: ["Células acidófilas secretam ADH e ocitocina.", "Células basófilas coram com hematoxilina e são tireotróficas, corticotróficas e gonadotróficas.", "Células cromófobas têm pigmentação eosinofílica.", "Células acidófilas e basófilas têm coloração idêntica.", "Células cromófobas secretam hormônio do crescimento."],
            correct: "Células basófilas coram com hematoxilina e são tireotróficas, corticotróficas e gonadotróficas.",
            explanation: "As células basófilas são afinadas com corantes básicos e englobam as produtoras de TSH, ACTH, FSH e LH."
        },
        {
            text: "14. Considerando a histologia testicular, assinale a alternativa correta:",
            options: ["Túnica albugínea reveste internamente os túbulos.", "Túbulos seminíferos estão no interstício e produzem testosterona.", "Interstício testicular protege os espermatozoides.", "A bolsa escrotal tem papel fundamental na termorregulação.", "A localização dos testículos é irrelevante para a temperatura."],
            correct: "A bolsa escrotal tem papel fundamental na termorregulação.",
            explanation: "A bolsa escrotal mantém os testículos cerca de 2 a 3 graus abaixo da temperatura corporal, essencial para a espermatogênese."
        },
        {
            text: "15. Paciente com espermatócitos secundários, mas sem espermátides. Assinale a alternativa correta:",
            options: ["A ausência de espermátides indica bloqueio na meiose II.", "Espermatócitos secundários são diploides que sofrem mitose.", "A presença de espermatócitos secundários confirma espermatogênese completa.", "Espermatogênese ocorre normalmente sem espermátides.", "A ausência é compensada por proliferação de espermatogônias."],
            correct: "A ausência de espermátides indica bloqueio na meiose II.",
            explanation: "Os espermatócitos secundários sofrem meiose II para formar espermátides. A ausência destas indica bloqueio nessa fase divisória."
        },
        {
            text: "16. Com relação aos folículos ovarianos e a Falha Ovariana Prematura (FOP), assinale a correta:",
            options: ["Folículos primordiais produzem estrogênio na FOP.", "Folículos secundários são os mais afetados na FOP.", "Na FOP, há redução significativa dos folículos primordiais (reserva ovariana).", "Atresia de folículos antrais é a causa da FOP.", "FOP ocorre por proliferação excessiva de folículos."],
            correct: "Na FOP, há redução significativa dos folículos primordiais (reserva ovariana).",
            explanation: "A FOP caracteriza-se primariamente pelo esgotamento da reserva de folículos primordiais antes dos 40 anos."
        },
        {
            text: "17. Sobre a histologia uterina, assinale a alternativa correta:",
            options: ["O endométrio basal sofre descamação durante a menstruação.", "O miométrio é uma camada de tecido conjuntivo frouxo.", "O endométrio funcional apresenta glândulas e estroma especializado.", "A camada serosa é o perimétrio, que responde ao FSH.", "Durante a fase secretora, o endométrio reduz atividade glandular."],
            correct: "O endométrio funcional apresenta glândulas e estroma especializado.",
            explanation: "É o endométrio funcional que sofre as modificações hormonais mensais (proliferação e secreção glandular) e descama na menstruação."
        },
        {
            text: "18. Sistema urinário (V/F): (1) Bexiga revestida por epitélio pseudoestratificado cilíndrico. (2) Uretra feminina revestida por urotélio em toda extensão. (3) Uretra masculina (prostática e membranosa) revestida por epitélio pseudoestratificado.",
            options: ["V, V, V", "F, F, F", "V, F, V", "F, V, F"],
            correct: "F, F, F",
            explanation: "Todas falsas. Bexiga tem urotélio. Uretra feminina passa a estratificado pavimentoso. Uretra masculina muda de urotélio para pseudoestratificado/estratificado."
        }
    ];

    // Base 2: Questões com Imagem (As 36 Lâminas)
    const imageQuestionsData = [
        // Lote 1
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.32.jpeg",
            text: "Identifique a estrutura evidenciada na imagem, caracterizada por projeções cônicas na mucosa e epitélio estratificado pavimentoso fortemente queratinizado.",
            options: ["Papilas filiformes da língua", "Vilosidades intestinais", "Pregas gástricas", "Papilas fungiformes", "Epitélio esofágico"],
            correct: "Papilas filiformes da língua",
            explanation: "As papilas filiformes são as mais numerosas da língua, têm formato cônico e são fortemente queratinizadas para fricção, não possuindo botões gustativos."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (3).jpeg",
            text: "Na imagem do parênquima hepático, as estruturas circuladas em vermelho (localizadas no centro dos lóbulos clássicos) correspondem a qual vaso?",
            options: ["Veia centro-lobular", "Ramo da veia porta", "Artéria hepática", "Ducto biliar", "Capilar sinusoide"],
            correct: "Veia centro-lobular",
            explanation: "A veia centro-lobular (ou veia central) localiza-se no centro do lóbulo hepático, recebendo o fluxo sanguíneo centrípeto dos capilares sinusoides."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (4).jpeg",
            text: "Na tríade portal mostrada, a seta azul (estrutura com epitélio cúbico simples) e a seta vermelha (estrutura com parede muscular espessa circular) apontam, respectivamente, para:",
            options: ["Ducto biliar e ramo da artéria hepática", "Ramo da veia porta e ducto biliar", "Artéria hepática e veia centro-lobular", "Ducto biliar e veia porta", "Canalículo biliar e sinusoide"],
            correct: "Ducto biliar e ramo da artéria hepática",
            explanation: "Na tríade portal, o ducto biliar (azul) é revestido por epitélio cúbico, a artéria hepática (vermelha) tem parede muscular e lúmen menor, e a veia porta (amarela) tem lúmen amplo."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (2).jpeg",
            text: "A imagem mostra as camadas da parede do trato gastrointestinal. Note a ausência de vilosidades, a presença de criptas profundas e grande quantidade de células caliciformes na mucosa. Trata-se do:",
            options: ["Intestino grosso (Cólon)", "Estômago", "Duodeno", "Íleo", "Esôfago"],
            correct: "Intestino grosso (Cólon)",
            explanation: "O intestino grosso carece de vilosidades. Suas glândulas intestinais (Criptas de Lieberkühn) são retas e tubulares, muito ricas em células caliciformes para lubrificar o bolo fecal."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (2).jpeg",
            text: "Conforme o esquema evidenciado na lâmina: esta estrutura possui mucosa com epitélio cilíndrico simples, e a linha laranja aponta a camada muscular. Note que ela NÃO possui submucosa verdadeira. Qual é o órgão?",
            options: ["Vesícula biliar", "Estômago", "Apêndice cecal", "Intestino delgado", "Bexiga urinária"],
            correct: "Vesícula biliar",
            explanation: "A ausência de camada submucosa e a presença de pregas/pseudovilosidades anastomosadas na mucosa são diagnósticos diferenciais clássicos da parede da vesícula biliar."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.33.jpeg",
            text: "Neste epitélio cilíndrico simples com planura estriada (microvilosidades apontadas pelos triângulos), as setas vermelhas apontam para glândulas unicelulares produtoras de muco. Quais são essas células?",
            options: ["Células caliciformes", "Células de Paneth", "Enterócitos", "Células parietais", "Células enteroendócrinas"],
            correct: "Células caliciformes",
            explanation: "As células caliciformes têm formato de cálice e acumulam grânulos apicais de mucina. Por não reterem bem a coloração H&E rotineira, aparecem claras/vazias ao microscópio."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (1).jpeg",
            text: "A imagem mostra ácinos serosos. As células circuladas em azul/roxo, com citoplasma pálido e localizadas no centro do ácino, são exclusivas de qual órgão?",
            options: ["Pâncreas (células centroacinares)", "Glândula parótida", "Glândula submandibular", "Fígado", "Estômago"],
            correct: "Pâncreas (células centroacinares)",
            explanation: "As células centroacinares representam o início invaginado dos ductos intercalares para dentro do ácino seroso, sendo uma característica histológica exclusiva do pâncreas exócrino."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (3).jpeg",
            text: "A imagem evidencia a parede de um órgão do trato digestório, com a presença de um grande aglomerado de células basofílicas circulado em vermelho. Essa estrutura imune corresponde a um:",
            options: ["Nódulo/Folículo Linfoide", "Gânglio do plexo mioentérico", "Ácino seromucoso", "Glândula de Brünner", "Linfonodo encapsulado"],
            correct: "Nódulo/Folículo Linfoide",
            explanation: "Trata-se de um nódulo linfoide (tecido linfoide associado à mucosa - MALT), frequentemente encontrado na lâmina própria ou submucosa do intestino (ex: apêndice, placas de Peyer)."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.34.jpeg",
            text: "A imagem exibe ácinos serosos pancreáticos e uma estrutura circular mais pálida no centro. Identifique essa estrutura central.",
            options: ["Ilhota de Langerhans (Pancreática)", "Corpúsculo Renal", "Folículo Ovariano", "Nódulo Linfoide", "Ácino Mucoso"],
            correct: "Ilhota de Langerhans (Pancreática)",
            explanation: "As Ilhotas de Langerhans são a porção endócrina do pâncreas. Elas se destacam como aglomerados de células mais claras (menos coradas) em meio aos ácinos exócrinos basofílicos."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (4).jpeg",
            text: "A imagem foca nos corpúsculos renais. As setas azuis apontam para uma região de células epiteliais altas e aglomeradas no túbulo contorcido distal, adjacente ao glomérulo. Como se chama essa estrutura sensora?",
            options: ["Mácula Densa", "Podócito", "Células Justaglomerulares", "Células Mesangiais", "Folheto Parietal"],
            correct: "Mácula Densa",
            explanation: "A mácula densa é uma placa de células cilíndricas especializadas do túbulo distal que detecta a concentração de sódio, formando parte do aparelho justaglomerular."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (3).jpeg",
            text: "Na imagem panorâmica à esquerda, observamos inúmeros corpúsculos renais esféricos e cortes transversais de túbulos contorcidos. Essa morfologia confirma que estamos analisando qual região do rim?",
            options: ["Córtex Renal", "Medula Renal", "Pelve Renal", "Cálice Maior", "Cápsula Renal"],
            correct: "Córtex Renal",
            explanation: "A presença dos corpúsculos renais (glomérulo + cápsula de Bowman) é exclusiva do córtex renal."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (2).jpeg",
            text: "O corte demonstra a transição entre o córtex (linha azul) e a medula (linha amarela) renal. Qual estrutura histológica é o principal marcador divisório por ser encontrada APENAS na região cortical?",
            options: ["Corpúsculo Renal", "Túbulo Coletor", "Alça de Henle", "Vasa Recta", "Epitélio de Transição"],
            correct: "Corpúsculo Renal",
            explanation: "Os corpúsculos renais nunca estão presentes na medula, sendo o principal ponto de referência visual para identificar o córtex do rim."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (1).jpeg",
            text: "A imagem detalha o epitélio do túbulo seminífero no testículo. Qual é a principal função da Célula de Sertoli, apontada na lâmina?",
            options: ["Suporte, nutrição e barreira hemato-testicular", "Produção de testosterona", "Contração do túbulo seminífero", "Diferenciação direta em espermatozoide", "Secreção de LH e FSH"],
            correct: "Suporte, nutrição e barreira hemato-testicular",
            explanation: "As células de Sertoli são células somáticas que envolvem, nutrem e protegem as células germinativas, formando também a barreira hemato-testicular."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.35.jpeg",
            text: "A lâmina revela células organizadas em cordões, ricamente vascularizadas por capilares, exibindo afinidades tintoriais distintas (acidófilas avermelhadas e basófilas arroxeadas). Qual é este órgão endócrino?",
            options: ["Adenohipófise", "Neurohipófise", "Córtex da Suprarrenal", "Glândula Pineal", "Paratireoide"],
            correct: "Adenohipófise",
            explanation: "A adenohipófise (pars distalis) caracteriza-se pela sua natureza cordonal e pela presença evidente de células acidófilas, basófilas e cromófobas."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (4).jpeg",
            text: "A imagem demonstra o epitélio de revestimento do ureter. Qual é a classificação desse epitélio característico das vias urinárias?",
            options: ["Epitélio de Transição (Urotélio)", "Epitélio Pseudoestratificado Cilíndrico", "Epitélio Estratificado Pavimentoso", "Epitélio Cúbico Simples", "Epitélio Cilíndrico Simples"],
            correct: "Epitélio de Transição (Urotélio)",
            explanation: "O urotélio é estratificado e possui células superficiais em formato de guarda-chuva ou cúpula (ricas em uroplaquina), adaptando-se ao estiramento."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (3).jpeg",
            text: "Esses túbulos (marcados com 4 e 5), apresentando limites celulares evidentes, luzes amplas e revestidos por uma única camada de células em formato de cubo, pertencem ao rim. Como se classifica este epitélio?",
            options: ["Epitélio Cúbico Simples", "Epitélio Pavimentoso Simples", "Epitélio Cilíndrico Simples", "Epitélio Estratificado Cúbico", "Epitélio de Transição"],
            correct: "Epitélio Cúbico Simples",
            explanation: "As células têm largura e altura semelhantes com núcleos redondos e centrais, clássico do epitélio cúbico simples encontrado em túbulos coletores renais menores."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (2).jpeg",
            text: "A imagem apresenta um epitélio estratificado pavimentoso recoberto por uma camada acelular de queratina extremamente espessa e eosinofílica (rosa forte). Trata-se de um corte de:",
            options: ["Pele Espessa (Palma/Planta)", "Esôfago", "Pele Fina", "Mucosa Vaginal", "Traqueia"],
            correct: "Pele Espessa (Palma/Planta)",
            explanation: "O gigantesco estrato córneo e a ausência de folículos pilosos são as características definitivas da pele espessa, encontrada nas palmas das mãos e solas dos pés."
        },

        // Lote 2
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.32 (1).jpeg",
            text: "Na lâmina de mucosa gástrica, as células circuladas em vermelho se destacam por seu citoplasma volumoso e fortemente eosinofílico. Qual é o nome dessa célula e sua principal secreção?",
            options: ["Célula parietal / Ácido clorídrico (HCl)", "Célula principal / Pepsinogênio", "Célula mucosa do colo / Muco", "Célula enteroendócrina / Gastrina", "Célula de Paneth / Lisozima"],
            correct: "Célula parietal / Ácido clorídrico (HCl)",
            explanation: "As células parietais (ou oxínticas) são grandes, arredondadas e eosinofílicas, responsáveis pela produção do ácido gástrico e do fator intrínseco."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (1).jpeg",
            text: "O corte histológico revela uma mucosa com projeções digitiformes (vilosidades) e glândulas tubulares (criptas). Essa morfologia é diagnóstica de qual segmento do tubo digestório?",
            options: ["Intestino delgado", "Estômago", "Intestino grosso", "Esôfago", "Vesícula biliar"],
            correct: "Intestino delgado",
            explanation: "A presença de vilosidades intestinais (projeções da mucosa para o lúmen) é a característica microscópica definitiva e exclusiva do intestino delgado."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (1).jpeg",
            text: "No córtex renal (linha amarela), as setas verdes apontam para estriações longitudinais formadas por túbulos retos e ductos coletores que se projetam da medula. Como se chamam essas estruturas?",
            options: ["Raios medulares (de Ferrein)", "Colunas renais (de Bertin)", "Túbulos contorcidos proximais", "Alças de Henle", "Corpúsculos renais"],
            correct: "Raios medulares (de Ferrein)",
            explanation: "Os raios medulares são feixes paralelos de túbulos coletores e porções retas dos néfrons que penetram no córtex a partir da medula renal."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.36.jpeg",
            text: "A estrutura apontada recobre externamente o parênquima do órgão (Rim). É formada por tecido conjuntivo denso não modelado e ajuda a proteger o órgão. Trata-se da:",
            options: ["Cápsula Renal", "Túnica Albugínea", "Pleura Visceral", "Cápsula de Glisson", "Peritônio Parietal"],
            correct: "Cápsula Renal",
            explanation: "Os rins são revestidos por uma cápsula fibrosa de tecido conjuntivo denso que adere intimamente à superfície do córtex renal."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.37.jpeg",
            text: "No corte de testículo, a seta preta aponta para células grandes e acidófilas localizadas no tecido conjuntivo entre os túbulos seminíferos. Qual é a principal função dessas células?",
            options: ["Produção e secreção de testosterona", "Formação da barreira hemato-testicular", "Sustentação das espermatogônias", "Fagocitose de corpos residuais", "Contração para expulsão dos espermatozoides"],
            correct: "Produção e secreção de testosterona",
            explanation: "As células intersticiais de Leydig localizam-se no interstício testicular e são responsáveis pela síntese e secreção do hormônio testosterona."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.37 (4).jpeg",
            text: "Na parede do túbulo seminífero, a seta VERDE aponta para a maior célula da linhagem germinativa, caracterizada por um núcleo volumoso com cromatina em grumos. Identifique-a:",
            options: ["Espermatócito primário", "Espermatogônia", "Espermátide", "Célula de Sertoli", "Célula mieloide"],
            correct: "Espermatócito primário",
            explanation: "O espermatócito primário é a célula mais volumosa do epitélio seminífero, frequentemente observada com o núcleo em fases prolongadas da prófase I da meiose."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (4).jpeg",
            text: "No corpúsculo renal evidenciado, a seta AZUL aponta para a camada externa da Cápsula de Bowman. Qual é o tipo de epitélio que compõe essa estrutura?",
            options: ["Epitélio pavimentoso simples", "Epitélio cúbico simples", "Epitélio de transição (urotélio)", "Epitélio cilíndrico simples", "Epitélio pseudoestratificado"],
            correct: "Epitélio pavimentoso simples",
            explanation: "O folheto parietal da Cápsula de Bowman é o limite externo do corpúsculo renal e é tipicamente formado por um epitélio pavimentoso simples."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (5).jpeg",
            text: "A imagem destaca a 'Pars Intermedia' da glândula hipófise. As estruturas císticas circuladas (marcadas em ciano), que contêm um material coloide, representam o quê?",
            options: ["Cistos de Rathke (Resquícios da bolsa de Rathke)", "Corpos de Herring", "Folículos tireoidianos anômalos", "Ilhotas de Langerhans", "Glomérulos em degeneração"],
            correct: "Cistos de Rathke (Resquícios da bolsa de Rathke)",
            explanation: "A pars intermedia da hipófise frequentemente contém pequenos cistos cheios de coloide conhecidos como cistos de Rathke, vestígios embriológicos da invaginação do ectoderma oral."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (3).jpeg",
            text: "Esta visão panorâmica permite diferenciar as duas porções principais da hipófise. A região à direita, intensamente celular e corada, corresponde a qual parte da glândula?",
            options: ["Adeno-hipófise (Pars distalis)", "Neuro-hipófise (Pars nervosa)", "Pars tuberalis", "Hipotálamo", "Córtex adrenal"],
            correct: "Adeno-hipófise (Pars distalis)",
            explanation: "A adeno-hipófise é altamente celular e cordonal, corando-se intensamente devido às células cromófilas, enquanto a neuro-hipófise (à esquerda) tem aspecto pálido característico de tecido nervoso."
        },

        // Lote 3
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (1).jpeg",
            text: "A imagem apresenta um ducto cortado transversalmente, revestido por um epitélio pseudoestratificado cilíndrico com longas projeções apicais (estereocílios) e circundado por músculo liso. Qual é esse órgão?",
            options: ["Epidídimo", "Ducto Deferente", "Ureter", "Tuba Uterina", "Traqueia"],
            correct: "Epidídimo",
            explanation: "O epidídimo é caracterizado por seu epitélio pseudoestratificado com estereocílios (microvilosidades longas e ramificadas que absorvem fluido) e uma fina camada muscular lisa."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.38.jpeg",
            text: "Neste corte histológico panorâmico, visualizamos múltiplos perfis de um ducto altamente enovelado, com espermatozoides visíveis em seu lúmen. Trata-se do:",
            options: ["Epidídimo", "Túbulo Seminífero", "Ducto Eferente", "Rede Testis", "Ducto Deferente"],
            correct: "Epidídimo",
            explanation: "O ducto do epidídimo é extremamente longo e enovelado, por isso, em um único corte histológico, vemos várias secções transversais e oblíquas do mesmo tubo."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (5).jpeg",
            text: "As estruturas basofílicas irregulares, laminadas e calcificadas (apontadas como concreções calcáreas) são marcadores histológicos clássicos de qual glândula endócrina?",
            options: ["Glândula Pineal", "Glândula Paratireoide", "Hipófise", "Tireoide", "Suprarrenal"],
            correct: "Glândula Pineal",
            explanation: "A glândula pineal possui as características concreções calcáreas (areia cerebral ou corpora arenacea), que aumentam em número e tamanho com a idade."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (4).jpeg",
            text: "A imagem revela uma estrutura de aspecto neural com dilatações axonais repletas de grânulos neurossecretores (Corpúsculos de Herring) e núcleos de células da glia (Pituícitos). Qual é a região e sua função?",
            options: ["Neuro-hipófise / Armazenar e liberar ADH e Ocitocina", "Adeno-hipófise / Produzir e secretar Hormônio do Crescimento", "Hipotálamo / Sintetizar hormônios liberadores", "Glândula Pineal / Secretar Melatonina", "Córtex Adrenal / Produzir Cortisol"],
            correct: "Neuro-hipófise / Armazenar e liberar ADH e Ocitocina",
            explanation: "A neuro-hipófise não sintetiza hormônios, mas armazena os hormônios (ADH e Ocitocina) produzidos no hipotálamo dentro dos Corpúsculos de Herring."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (3).jpeg",
            text: "O parênquima cordonal exibe células com grânulos acidófilos (róseos), basófilos (arroxeados) e células sem afinidade tintorial (cromófobas). Qual parte da hipófise está representada?",
            options: ["Adeno-hipófise (Pars distalis)", "Neuro-hipófise (Pars nervosa)", "Pars intermedia", "Infundíbulo", "Eminência mediana"],
            correct: "Adeno-hipófise (Pars distalis)",
            explanation: "A pars distalis da adeno-hipófise é classicamente formada por esses três tipos celulares de acordo com sua afinidade por corantes histológicos."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (2).jpeg",
            text: "A agulha aponta para formações císticas contendo coloide. Elas estão localizadas na fronteira entre a porção glandular densa (à direita) e a porção neural pálida (à esquerda). Essa região limítrofe é a:",
            options: ["Pars intermedia da hipófise", "Folículo da tireoide", "Medula da suprarrenal", "Eminência mediana", "Córtex da paratireoide"],
            correct: "Pars intermedia da hipófise",
            explanation: "A pars intermedia divide a pars distalis da pars nervosa na hipófise, sendo frequentemente identificada pela presença dos cistos de Rathke cheios de coloide."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (1).jpeg",
            text: "As estruturas circuladas em azul/ciano, repletas de um material eosinofílico, são resquícios embriológicos encontrados na 'Pars Intermedia' da hipófise. Como são chamadas?",
            options: ["Cistos de Rathke", "Folículos de Graaf", "Corpos de Herring", "Ilhotas de Langerhans", "Glomérulos"],
            correct: "Cistos de Rathke",
            explanation: "Os Cistos de Rathke são remanescentes da bolsa de Rathke (uma invaginação do ectoderma oral do embrião), que dá origem à adeno-hipófise."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.39.jpeg",
            text: "A seta aponta para o compartimento intersticial do testículo, focando em células grandes, poliédricas e com citoplasma acidófilo (Células de Leydig). Qual é a principal função dessas células?",
            options: ["Produção de testosterona", "Fagocitose de corpos residuais", "Formação da barreira hemato-testicular", "Sustentação dos espermatozoides", "Contração tubular"],
            correct: "Produção de testosterona",
            explanation: "As células intersticiais de Leydig são responsáveis pela biossíntese do hormônio testosterona, processo estimulado pelo LH (Hormônio Luteinizante)."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (4).jpeg",
            text: "No polo vascular deste corpúsculo renal, o ponteiro indica um segmento modificado do túbulo contorcido distal onde as células epiteliais são mais altas, estreitas e com núcleos apinhados. Trata-se da:",
            options: ["Mácula Densa", "Cápsula de Bowman", "Podócitos", "Célula Justaglomerular", "Célula Mesangial Extraglomerular"],
            correct: "Mácula Densa",
            explanation: "A mácula densa atua como um osmorreceptor sensível à concentração de cloreto de sódio (NaCl) no fluido tubular, auxiliando no controle da pressão arterial e taxa de filtração."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (3).jpeg",
            text: "No parênquima hepático mostrado, as setas amarelas indicam os espaços vasculares dispostos entre os cordões de hepatócitos. Qual é a classificação desses capilares?",
            options: ["Capilares sinusoides", "Capilares contínuos", "Capilares fenestrados com diafragma", "Vênulas pós-capilares", "Artérias de distribuição"],
            correct: "Capilares sinusoides",
            explanation: "O fígado possui capilares sinusoides, que têm trajeto tortuoso, lúmen amplo e endotélio descontinuado, permitindo trocas intensas de macromoléculas entre o sangue e os hepatócitos."
        },

        // Lote 4 (As 9 Novas Lâminas)
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (2).jpeg",
            text: "O parênquima glandular exibido é formado por cordões de células principais (menores e basofílicas) e agrupamentos de células oxífilas (maiores e fortemente acidófilas). Qual é a glândula e sua principal função?",
            options: ["Paratireoide / Regulação do cálcio (PTH)", "Tireoide / Produção de T3 e T4", "Adenohipófise / Secreção de hormônios tróficos", "Pineal / Produção de melatonina", "Adrenal / Produção de cortisol"],
            correct: "Paratireoide / Regulação do cálcio (PTH)",
            explanation: "As células principais produzem o paratormônio (PTH) que aumenta a calcemia, e as células oxífilas (cujo número aumenta com a idade) são características inconfundíveis da glândula paratireoide."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (1).jpeg",
            text: "A estrutura histológica apresentada organiza-se em folículos preenchidos por coloide. Qual é o epitélio que reveste esses folículos em condições normais de repouso metabólico?",
            options: ["Epitélio cúbico simples", "Epitélio pavimentoso estratificado", "Epitélio cilíndrico pseudoestratificado", "Epitélio de transição", "Epitélio prismático simples com microvilosidades"],
            correct: "Epitélio cúbico simples",
            explanation: "Os folículos tireoidianos são classicamente revestidos por um epitélio cúbico simples (células foliculares), que pode se tornar mais cilíndrico quando a glândula está hiperativa."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.40.jpeg",
            text: "A imagem mostra a divisão histológica do córtex de uma glândula endócrina. A região intermediária, mais espessa e constituída por cordões celulares paralelos separados por capilares (denominada Zona Fasciculada), produz principalmente:",
            options: ["Glicocorticoides (ex: Cortisol)", "Mineralocorticoides (ex: Aldosterona)", "Catecolaminas (ex: Adrenalina)", "Andrógenos (ex: DHEA)", "Melatonina"],
            correct: "Glicocorticoides (ex: Cortisol)",
            explanation: "O córtex da glândula suprarrenal (adrenal) divide-se em zonas: glomerulosa (produz mineralocorticoides), fasciculada (produz glicocorticoides) e reticular (produz andrógenos)."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (5).jpeg",
            text: "O corte apresenta a mucosa do palato duro, revestida por epitélio estratificado pavimentoso queratinizado. A seta número 6 indica a camada mais superficial deste epitélio. Como ela é denominada?",
            options: ["Camada Córnea", "Camada Granulosa", "Camada Espinhosa", "Camada Basal", "Lâmina Própria"],
            correct: "Camada Córnea",
            explanation: "A camada córnea (6) é a mais apical, formada por células escamosas anucleadas e mortas, repletas de queratina, o que confere forte proteção mecânica à mucosa mastigatória."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (4).jpeg",
            text: "Na visão panorâmica do córtex renal, o ponteiro destaca uma estrutura esférica intensamente vascularizada, responsável pela ultrafiltração do plasma. Qual é o nome anatômico/histológico dessa estrutura inteira?",
            options: ["Corpúsculo Renal (de Malpighi)", "Mácula Densa", "Túbulo Contorcido Proximal", "Alça de Henle", "Raio Medular"],
            correct: "Corpúsculo Renal (de Malpighi)",
            explanation: "O corpúsculo renal é formado pelo tufo de capilares glomerulares e pela cápsula de Bowman que o envolve, atuando como a unidade filtrante primária do néfron."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (3).jpeg",
            text: "No corte de pele espessa, o ponteiro indica as projeções do epitélio em direção ao tecido conjuntivo subjacente, que se interdigitam com as papilas dérmicas para aumentar a adesão. Como se chamam essas projeções epiteliais?",
            options: ["Cristas Epidérmicas", "Papilas Dérmicas", "Glândulas Sudoríparas", "Corpúsculos de Meissner", "Camada Reticular"],
            correct: "Cristas Epidérmicas",
            explanation: "As cristas epidérmicas são invaginações da epiderme que se encaixam perfeitamente nas papilas dérmicas (projeções do conjuntivo dérmico), fortalecendo a junção dermoepidérmica contra atritos."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (2).jpeg",
            text: "Observa-se uma estrutura encapsulada com aspecto clássico de 'cebola cortada' (lamelas concêntricas de células de Schwann modificadas), localizada na derme profunda. Trata-se de um receptor sensorial de pressão. Identifique-o:",
            options: ["Corpúsculo de Vater-Pacini", "Corpúsculo de Meissner", "Célula de Merkel", "Corpúsculo de Ruffini", "Terminação nervosa livre"],
            correct: "Corpúsculo de Vater-Pacini",
            explanation: "Os corpúsculos de Pacini são mecanorreceptores que detectam pressão profunda e vibração rápida, sendo facilmente identificados por suas múltiplas lamelas concêntricas características."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (1).jpeg",
            text: "As imagens exibem o parênquima da pars distalis da hipófise. As células circuladas em vermelho evidenciam um citoplasma de forte afinidade pelo corante eosina (róseo). Como são chamadas essas células e qual hormônio podem produzir?",
            options: ["Células acidófilas / Hormônio do Crescimento (GH)", "Células basófilas / Adrenocorticotrófico (ACTH)", "Células cromófobas / Prolactina (PRL)", "Pituícitos / Ocitocina", "Células de Leydig / Testosterona"],
            correct: "Células acidófilas / Hormônio do Crescimento (GH)",
            explanation: "Na adeno-hipófise, as células acidófilas (róseas) produzem principalmente GH (células somatotróficas) ou Prolactina (lactotróficas). As basófilas (arroxeadas) secretam FSH, LH, ACTH e TSH."
        },
        {
            image: "WhatsApp Image 2026-06-21 at 14.48.41.jpeg",
            text: "O ponteiro destaca o emaranhado de capilares anastomosados sustentados por células mesangiais no interior da cápsula de Bowman. Esse tufo vascular, onde ocorre a filtração do sangue, é denominado:",
            options: ["Glomérulo Renal", "Túbulo Contorcido Proximal", "Mácula Densa", "Cápsula Renal", "Vasa Recta"],
            correct: "Glomérulo Renal",
            explanation: "O glomérulo é a complexa rede capilar fenestrada localizada dentro do corpúsculo renal, responsável por vazar o ultrafiltrado plasmático para o espaço capsular sob alta pressão."
        }
    ];

    // Algoritmo de Embaralhamento (Fisher-Yates)
    function shuffleArray(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Estado da Aplicação
    let activeQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 30;
    let timerInterval;
    let isAnswered = false;

    // Seletores do DOM
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const modeButtons = document.querySelectorAll('.btn-mode');
    
    const questionCounterText = document.getElementById('question-counter');
    const timerDisplay = document.getElementById('timer-display');
    const progressBar = document.getElementById('progress-bar');
    const imageContainer = document.getElementById('image-container');
    const questionImage = document.getElementById('question-image');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const btnNext = document.getElementById('btn-next');
    
    const scoreText = document.getElementById('score-text');
    const scoreTotalText = document.getElementById('score-total-text');
    const performanceText = document.getElementById('performance-text');
    const btnRestart = document.getElementById('btn-restart');

    // Inicialização de Eventos
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            themeToggle.textContent = body.classList.contains('dark-mode') ? "☀️ Claro" : "🌙 Escuro";
        });
    }

    // Navegação de Telas
    function showScreen(screen) {
        startScreen?.classList.remove('active');
        questionScreen?.classList.remove('active');
        resultScreen?.classList.remove('active');
        screen?.classList.add('active');
    }

    // Controle do Menu
    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.getAttribute('data-mode');
            let selectedData = [];

            if (mode === 'text') {
                selectedData = textQuestionsData;
            } else if (mode === 'image') {
                selectedData = imageQuestionsData;
            } else if (mode === 'both') {
                selectedData = [...textQuestionsData, ...imageQuestionsData];
            }

            startQuiz(selectedData);
        });
    });

    // Pipeline Principal
    function startQuiz(dataArray) {
        currentQuestionIndex = 0;
        score = 0;
        
        activeQuestions = shuffleArray(dataArray).map(question => ({
            ...question,
            options: shuffleArray(question.options)
        }));

        showScreen(questionScreen);
        loadQuestion();
    }

    function loadQuestion() {
        isAnswered = false;
        timeLeft = 30;
        
        if (timerDisplay) {
            timerDisplay.textContent = `⏱ ${timeLeft}s`;
            timerDisplay.classList.remove('danger');
        }
        
        btnNext?.classList.add('hidden');
        if (feedbackContainer) {
            feedbackContainer.classList.add('hidden');
            feedbackContainer.className = 'feedback hidden'; 
        }

        const currentQuestion = activeQuestions[currentQuestionIndex];
        
        if (questionCounterText) questionCounterText.textContent = `Questão ${currentQuestionIndex + 1} de ${activeQuestions.length}`;
        if (progressBar) progressBar.style.width = `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%`;
        
        // Controle da imagem
        if (currentQuestion.image && questionImage && imageContainer) {
            questionImage.src = currentQuestion.image;
            imageContainer.classList.remove('hidden');
        } else if (imageContainer && questionImage) {
            questionImage.src = "";
            imageContainer.classList.add('hidden');
        }

        if (questionText) questionText.textContent = currentQuestion.text;

        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            currentQuestion.options.forEach((optionText, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = optionText;
                button.onclick = () => handleAnswer(index);
                optionsContainer.appendChild(button);
            });
        }

        startTimer();
    }

    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timerDisplay) timerDisplay.textContent = `⏱ ${timeLeft}s`;
            
            if (timeLeft <= 10 && timerDisplay) timerDisplay.classList.add('danger');
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleAnswer(-1);
            }
        }, 1000);
    }

    function handleAnswer(selectedIndex) {
        if (isAnswered) return;
        isAnswered = true;
        clearInterval(timerInterval);

        const currentQuestion = activeQuestions[currentQuestionIndex];
        const optionButtons = optionsContainer?.querySelectorAll('.option-btn') || [];

        optionButtons.forEach(btn => btn.disabled = true);

        const correctIndex = currentQuestion.options.findIndex(opt => opt === currentQuestion.correct);

        if (selectedIndex !== -1 && currentQuestion.options[selectedIndex] === currentQuestion.correct) {
            score++;
            if(optionButtons[selectedIndex]) optionButtons[selectedIndex].classList.add('correct');
            showFeedback(true, "🎉 Resposta Correta!", currentQuestion.explanation);
        } else {
            if (selectedIndex !== -1 && optionButtons[selectedIndex]) {
                optionButtons[selectedIndex].classList.add('wrong');
            }
            if(correctIndex !== -1 && optionButtons[correctIndex]) {
                optionButtons[correctIndex].classList.add('correct');
            }
            
            const titleText = selectedIndex === -1 ? "⏰ Tempo Esgotado!" : "❌ Resposta Incorreta!";
            showFeedback(false, titleText, currentQuestion.explanation);
        }

        if (btnNext) {
            btnNext.textContent = currentQuestionIndex === activeQuestions.length - 1 ? "Finalizar Simulado ➔" : "Próxima Questão ➔";
            btnNext.classList.remove('hidden');
        }
    }

    function showFeedback(isCorrect, title, explanation) {
        if (!feedbackContainer) return;
        feedbackContainer.classList.remove('hidden');
        feedbackContainer.classList.add(isCorrect ? 'correct-box' : 'wrong-box');
        if (feedbackTitle) feedbackTitle.textContent = title;
        if (feedbackExplanation) feedbackExplanation.textContent = explanation;
    }

    btnNext?.addEventListener('click', () => {
        if (currentQuestionIndex < activeQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        showScreen(resultScreen);
        if (scoreText) scoreText.textContent = score;
        if (scoreTotalText) scoreTotalText.textContent = `de ${activeQuestions.length}`;
        
        if (performanceText) {
            const percentage = Math.round((score / activeQuestions.length) * 100);
            if (percentage >= 70) {
                performanceText.textContent = `Desempenho: ${percentage}% - Excelente trabalho!`;
                performanceText.style.color = 'var(--correct-border)';
            } else {
                performanceText.textContent = `Desempenho: ${percentage}% - Continue estudando!`;
                performanceText.style.color = 'var(--wrong-border)';
            }
        }
    }

    btnRestart?.addEventListener('click', () => {
        showScreen(startScreen);
    });
});