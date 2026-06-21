document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // BASE 1: QUESTÕES TEÓRICAS (18 Questões)
    // ==========================================
    const textQuestionsData = [
        { text: "01. I - A mucosa é a camada composta por um epitélio cilíndrico simples. II - A submucosa é constituída por tecido conjuntivo frouxo. III- Na mucosa encontram-se células parietais e zimogênicas. A qual órgão se referem essas informações?", options: ["Estômago", "Intestino grosso", "Duodeno", "Esôfago", "Nenhuma das alternativas"], correct: "Estômago", explanation: "Células parietais e principais são exclusivas do estômago." },
        { text: "02. São características histológicas do duodeno:", options: ["Presença de glândulas na submucosa (Brünner).", "Os enterócitos apresentam microvilosidades.", "Presença de poucas células caliciformes.", "Apresenta camada muscular longitudinal e circular.", "Todas as alternativas descritas estão corretas."], correct: "Todas as alternativas descritas estão corretas.", explanation: "O duodeno possui todas essas adaptações absortivas e protetoras." },
        { text: "03. As glândulas de Brünner e o plexo mioentérico podem ser encontrados, respectivamente:", options: ["Camada mucosa do íleo e camada muscular do tubo digestório.", "Camada submucosa do duodeno e camada muscular do tubo digestório.", "Camada mucosa do íleo e camada submucosa do tubo digestório.", "Cavidade oral e submucosa do esôfago."], correct: "Camada submucosa do duodeno e camada muscular do tubo digestório.", explanation: "Brünner é da submucosa duodenal e o plexo de Auerbach fica entre as camadas musculares." },
        { text: "04. É um órgão oco, sua parede consiste em uma camada mucosa de epitélio colunar simples, camada fibromuscular rica em fibras elásticas e músculo liso, e uma serosa.", options: ["Pâncreas", "Fígado", "Vesícula biliar", "Ducto biliar", "Ilhota pancreática"], correct: "Vesícula biliar", explanation: "A ausência de submucosa é clássica da vesícula biliar." },
        { text: "05. I- No espaço porta há ramos da artéria hepática, veia porta e ductos biliares. II- A veia centro-lobular está no centro dos lóbulos. III- O parênquima é constituído por hepatócitos.", options: ["Apenas as afirmativas II e III são corretas.", "Todas as afirmativas são corretas.", "Apenas a afirmativa I é verdadeira.", "Todas as afirmativas são falsas."], correct: "Todas as afirmativas são corretas.", explanation: "Todas as descrições da arquitetura hepática estão precisas." },
        { text: "06. I- A arteríola central e os cordões medulares compõem a polpa branca. II- O baço é encapsulado com polpa branca e vermelha. III- A barreira hematotímica fica na cortical do timo.", options: ["Apenas os itens I e II estão corretos.", "Apenas os itens II e III estão corretos.", "Apenas os itens I e III estão corretos.", "Todos os itens estão corretos."], correct: "Apenas os itens II e III estão corretos.", explanation: "Cordões medulares são de linfonodos, não do baço." },
        { text: "07. Sobre o Sistema linfoide (V/F): (1) Primários: medula, linfonodo e timo. (2) Linfonodos não são encapsulados, têm corpúsculos de Hassall. (3) Baço filtra a linfa. (4) No linfonodo, folículos ficam na paramedular.", options: ["V, F, V, F", "F, F, F, F", "V, V, F, F", "F, V, F, V"], correct: "F, F, F, F", explanation: "Linfonodo é secundário/encapsulado. Baço filtra sangue. Folículos ficam na cortical." },
        { text: "08. Quanto às características da derme, está correto o item:", options: ["Camada reticular é tecido conjuntivo frouxo.", "Na derme podem ser evidenciados vasos, receptores sensoriais e estruturas como folículos pilosos.", "A derme constitui o panículo adiposo.", "Células de Merkel localizam-se na derme."], correct: "Na derme podem ser evidenciados vasos, receptores sensoriais e estruturas como folículos pilosos.", explanation: "A derme abriga os anexos cutâneos e a neurovascularização." },
        { text: "09. Sobre a epiderme (V/F): (1) Camada basal tem células cúbicas sobre a membrana basal. (2) Queratinócitos migram e sofrem apoptose formando a camada córnea. (3) Na camada basal aderem-se por desmossomos à membrana.", options: ["V, V, V", "V, F, V", "V, V, F", "F, F, F"], correct: "V, V, F", explanation: "Aderem à membrana basal por HEMIdesmossomos." },
        { text: "10. Sobre o parênquima renal, é correto afirmar que:", options: ["O folheto parietal reveste capilares.", "As células do folheto visceral são chamadas de podócitos.", "Cada néfron não possui túbulo distal.", "Corpúsculos renais são formados por túbulo contorcido proximal."], correct: "As células do folheto visceral são chamadas de podócitos.", explanation: "Os podócitos abraçam intimamente os capilares do glomérulo." },
        { text: "11. Sistema urinário (V/F): (1) Formado por rins, ureteres, bexiga e uretra. (2) Ocorre exclusivamente reabsorção nos túbulos. (3) Seio renal contém cálices e pélvis. (4) Pirâmides estão na cortical e glomérulos na medular.", options: ["F, F, V, F", "F, V, V, F", "V, V, F, V", "V, F, V, F"], correct: "V, F, V, F", explanation: "A(2) é F (há secreção) e a (4) é F (pirâmides na medular, glomérulos na cortical)." },
        { text: "12. Assinale a alternativa correta a respeito do sistema neuroendócrino:", options: ["A dupla origem embriológica não influencia a histofisiologia.", "A neuro-hipófise perde conexão com o diencéfalo.", "A pars distalis é glândula cordonal, derivada da bolsa de Rathke.", "Corpos de Herring fazem parte da pars intermedia."], correct: "A pars distalis é glândula cordonal, derivada da bolsa de Rathke.", explanation: "A adeno-hipófise origina-se do ectoderma oral (Rathke)." },
        { text: "13. Sobre as células da adenohipófise, é correto afirmar que:", options: ["Células acidófilas secretam ADH e ocitocina.", "Células basófilas coram com hematoxilina e são tireotróficas, corticotróficas e gonadotróficas.", "Células cromófobas têm pigmentação eosinofílica.", "Células cromófobas secretam hormônio do crescimento."], correct: "Células basófilas coram com hematoxilina e são tireotróficas, corticotróficas e gonadotróficas.", explanation: "Basófilas produzem TSH, ACTH, FSH e LH." },
        { text: "14. Considerando a histologia testicular, assinale a alternativa correta:", options: ["Túbulos seminíferos estão no interstício e produzem testosterona.", "Interstício testicular protege os espermatozoides.", "A bolsa escrotal tem papel fundamental na termorregulação.", "A túnica albugínea reveste internamente os túbulos."], correct: "A bolsa escrotal tem papel fundamental na termorregulação.", explanation: "O escroto mantém a temperatura abaixo da corporal, vital para a espermatogênese." },
        { text: "15. Paciente com espermatócitos secundários, mas sem espermátides. Assinale a alternativa correta:", options: ["A ausência de espermátides indica bloqueio na meiose II.", "Espermatócitos secundários sofrem mitose.", "A espermatogênese ocorre normalmente sem espermátides.", "A ausência é compensada por proliferação de espermatogônias."], correct: "A ausência de espermátides indica bloqueio na meiose II.", explanation: "Espermatócitos secundários devem completar a Meiose II para formar espermátides." },
        { text: "16. Com relação aos folículos ovarianos e a Falha Ovariana Prematura (FOP), assinale a correta:", options: ["Folículos primordiais produzem estrogênio na FOP.", "Folículos secundários são os mais afetados na FOP.", "Na FOP, há redução significativa dos folículos primordiais (reserva ovariana).", "FOP ocorre por proliferação excessiva de folículos."], correct: "Na FOP, há redução significativa dos folículos primordiais (reserva ovariana).", explanation: "A FOP é o esgotamento precoce dos folículos primordiais." },
        { text: "17. Sobre a histologia uterina, assinale a alternativa correta:", options: ["O endométrio basal sofre descamação durante a menstruação.", "O miométrio é uma camada de tecido conjuntivo frouxo.", "O endométrio funcional apresenta glândulas e estroma especializado.", "A camada serosa responde ao FSH."], correct: "O endométrio funcional apresenta glândulas e estroma especializado.", explanation: "Apenas a camada funcional responde aos ciclos e descama." },
        { text: "18. Sistema urinário (V/F): (1) Bexiga revestida por epitélio pseudoestratificado. (2) Uretra feminina revestida por urotélio em toda extensão. (3) Uretra masculina revestida apenas por pseudoestratificado.", options: ["V, V, V", "F, F, F", "V, F, V", "F, V, F"], correct: "F, F, F", explanation: "Bexiga tem urotélio; uretra feminina tem estratificado pavimentoso; uretra masculina varia." }
    ];

    // ==========================================
    // BASE 2: LÂMINAS HIGIENIZADA (65 Questões Únicas)
    // ==========================================
    const imageQuestionsData = [
        // LOTE 1 (8 imagens)
        { image: "WhatsApp Image 2026-06-21 at 14.48.32.jpeg", text: "Projeções cônicas na mucosa e epitélio estratificado pavimentoso fortemente queratinizado.", options: ["Papilas filiformes", "Vilosidades intestinais", "Pregas gástricas", "Epitélio esofágico"], correct: "Papilas filiformes", explanation: "Papilas filiformes são finas, queratinizadas e sem corpúsculos gustativos." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.34 (3).jpeg", text: "As estruturas circuladas em vermelho no centro dos lóbulos hepáticos correspondem a qual vaso?", options: ["Veia centro-lobular", "Ramo da veia porta", "Artéria hepática", "Ducto biliar"], correct: "Veia centro-lobular", explanation: "Fica no centro do lóbulo clássico, drenando os sinusoides." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.34 (4).jpeg", text: "Tríade portal: Seta azul (epitélio cúbico) e vermelha (parede muscular). Identifique:", options: ["Ducto biliar e ramo da artéria hepática", "Veia porta e ducto biliar", "Artéria hepática e veia central", "Ducto biliar e veia porta"], correct: "Ducto biliar e ramo da artéria hepática", explanation: "Ducto = epitélio cúbico. Artéria = muscular espessa." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.33 (2).jpeg", text: "Ausência de vilosidades, criptas profundas e muitas células caliciformes. Trata-se do:", options: ["Intestino grosso (Cólon)", "Estômago", "Duodeno", "Íleo"], correct: "Intestino grosso (Cólon)", explanation: "O cólon não possui vilosidades e tem glândulas ricas em muco." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.34 (2).jpeg", text: "Mucosa com epitélio cilíndrico simples, camada fibromuscular, SEM submucosa verdadeira.", options: ["Vesícula biliar", "Estômago", "Intestino delgado", "Bexiga urinária"], correct: "Vesícula biliar", explanation: "Falta de submucosa é o diferencial da vesícula." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.33.jpeg", text: "Epitélio com planura estriada. Setas vermelhas apontam para glândulas unicelulares de muco. São:", options: ["Células caliciformes", "Células de Paneth", "Enterócitos", "Células parietais"], correct: "Células caliciformes", explanation: "Têm formato de cálice e acumulam mucina apical." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.34 (1).jpeg", text: "Ácinos serosos. Células circuladas, pálidas no centro do ácino, são exclusivas de qual órgão?", options: ["Pâncreas (células centroacinares)", "Glândula parótida", "Fígado", "Estômago"], correct: "Pâncreas (células centroacinares)", explanation: "Elas iniciam o sistema de ductos dentro do próprio ácino pancreático." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.33 (3).jpeg", text: "Aglomerado basofílico circulado em vermelho na parede digestória. Corresponde a um:", options: ["Nódulo/Folículo Linfoide", "Gânglio do plexo mioentérico", "Ácino seromucoso", "Glândula de Brünner"], correct: "Nódulo/Folículo Linfoide", explanation: "MALT - Tecido linfoide associado à mucosa." },
        
        // LOTE 2 (9 imagens)
        { image: "WhatsApp Image 2026-06-21 at 14.48.34.jpeg", text: "Estrutura circular mais pálida no centro de ácinos serosos pancreáticos.", options: ["Ilhota de Langerhans", "Corpúsculo Renal", "Folículo Ovariano", "Ácino Mucoso"], correct: "Ilhota de Langerhans", explanation: "Porção endócrina do pâncreas." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.35 (4).jpeg", text: "Células epiteliais altas e aglomeradas no túbulo contorcido distal adjacente ao glomérulo.", options: ["Mácula Densa", "Podócito", "Células Justaglomerulares", "Células Mesangiais"], correct: "Mácula Densa", explanation: "Atua como osmorreceptor renal de sódio." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.35 (3).jpeg", text: "Inúmeros corpúsculos renais e túbulos contorcidos confirmam que esta região é o:", options: ["Córtex Renal", "Medula Renal", "Pelve Renal", "Cápsula Renal"], correct: "Córtex Renal", explanation: "Os glomérulos ficam restritos ao córtex." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.35 (2).jpeg", text: "Estrutura histológica principal marcador divisório por ser encontrada APENAS na região cortical do rim:", options: ["Corpúsculo Renal", "Túbulo Coletor", "Alça de Henle", "Vasa Recta"], correct: "Corpúsculo Renal", explanation: "Nunca adentram a medula renal." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.35 (1).jpeg", text: "Principal função da Célula de Sertoli no túbulo seminífero:", options: ["Suporte, nutrição e barreira hemato-testicular", "Produção de testosterona", "Contração tubular", "Diferenciação direta em espermatozoide"], correct: "Suporte, nutrição e barreira hemato-testicular", explanation: "Célula somática essencial para proteger os espermatozoides." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.35.jpeg", text: "Cordões ricamente vascularizados com células acidófilas e basófilas. Órgão endócrino:", options: ["Adenohipófise", "Neurohipófise", "Córtex da Suprarrenal", "Paratireoide"], correct: "Adenohipófise", explanation: "Pars distalis apresenta forte distinção tintorial celular." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.36 (4).jpeg", text: "Epitélio característico das vias urinárias (ureter):", options: ["Epitélio de Transição (Urotélio)", "Epitélio Pseudoestratificado Cilíndrico", "Epitélio Cúbico Simples", "Epitélio Estratificado Pavimentoso"], correct: "Epitélio de Transição (Urotélio)", explanation: "Adapta-se ao estiramento com suas células em guarda-chuva." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.36 (3).jpeg", text: "Túbulos do rim (4 e 5) revestidos por uma única camada de células em formato de cubo:", options: ["Epitélio Cúbico Simples", "Epitélio Pavimentoso Simples", "Epitélio Cilíndrico Simples", "Epitélio de Transição"], correct: "Epitélio Cúbico Simples", explanation: "Típico de túbulos menores e ductos coletores." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.36 (2).jpeg", text: "Epitélio com camada acelular de queratina extremamente espessa e eosinofílica:", options: ["Pele Espessa (Palma/Planta)", "Esôfago", "Pele Fina", "Traqueia"], correct: "Pele Espessa (Palma/Planta)", explanation: "Ausência de pelos e gigantesco estrato córneo." },
        
        // LOTE 3 (9 imagens)
        { image: "WhatsApp Image 2026-06-21 at 14.48.32 (1).jpeg", text: "Células de citoplasma volumoso e eosinofílico na mucosa gástrica. Nome e secreção:", options: ["Célula parietal / Ácido clorídrico (HCl)", "Célula principal / Pepsinogênio", "Célula mucosa / Muco", "Célula enteroendócrina / Gastrina"], correct: "Célula parietal / Ácido clorídrico (HCl)", explanation: "Produzem HCl e fator intrínseco." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.33 (1).jpeg", text: "Mucosa com projeções digitiformes (vilosidades) e criptas. Qual segmento?", options: ["Intestino delgado", "Estômago", "Intestino grosso", "Esôfago"], correct: "Intestino delgado", explanation: "Vilosidades são exclusivas do intestino delgado." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.36 (1).jpeg", text: "Estriações longitudinais no córtex renal formadas por ductos coletores que sobem da medula:", options: ["Raios medulares (de Ferrein)", "Colunas renais (de Bertin)", "Túbulos contorcidos proximais", "Alças de Henle"], correct: "Raios medulares (de Ferrein)", explanation: "São extensões de tubos retos em meio ao córtex." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.36.jpeg", text: "Tecido conjuntivo denso que recobre externamente o Rim:", options: ["Cápsula Renal", "Túnica Albugínea", "Pleura Visceral", "Peritônio Parietal"], correct: "Cápsula Renal", explanation: "Protege e modela o órgão." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.37.jpeg", text: "Células grandes acidófilas no tecido conjuntivo testicular. Principal função:", options: ["Produção e secreção de testosterona", "Formação da barreira hemato-testicular", "Sustentação das espermatogônias", "Contração tubular"], correct: "Produção e secreção de testosterona", explanation: "Células de Leydig (intersticiais)." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.37 (4).jpeg", text: "Seta verde aponta a maior célula germinativa no túbulo seminífero, com cromatina em grumos:", options: ["Espermatócito primário", "Espermatogônia", "Espermátide", "Célula de Sertoli"], correct: "Espermatócito primário", explanation: "Fica muito tempo na Prófase I da meiose, tornando-se volumosa." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.38 (4).jpeg", text: "Seta azul aponta o folheto parietal da Cápsula de Bowman. Qual o tipo de epitélio?", options: ["Epitélio pavimentoso simples", "Epitélio cúbico simples", "Epitélio de transição", "Epitélio cilíndrico simples"], correct: "Epitélio pavimentoso simples", explanation: "Camada externa muito fina para delimitar o espaço capsular." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.38 (5).jpeg", text: "Cistos com material coloide (ciano) na Pars Intermedia da hipófise representam:", options: ["Cistos de Rathke (Resquícios da bolsa de Rathke)", "Corpos de Herring", "Folículos tireoidianos", "Ilhotas de Langerhans"], correct: "Cistos de Rathke (Resquícios da bolsa de Rathke)", explanation: "Vestígios do ectoderma oral embriológico." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.38 (3).jpeg", text: "Região à direita, intensamente celular e corada, corresponde a:", options: ["Adeno-hipófise (Pars distalis)", "Neuro-hipófise (Pars nervosa)", "Pars tuberalis", "Hipotálamo"], correct: "Adeno-hipófise (Pars distalis)", explanation: "Natureza glandular cordonal rica em células." },

        // LOTE 4 (10 imagens)
        { image: "WhatsApp Image 2026-06-21 at 14.48.38 (1).jpeg", text: "Ducto transversal com epitélio pseudoestratificado cilíndrico com estereocílios e músculo liso:", options: ["Epidídimo", "Ducto Deferente", "Ureter", "Traqueia"], correct: "Epidídimo", explanation: "Estereocílios longos absorvem o excesso de fluido." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.38.jpeg", text: "Ducto altamente enovelado com espermatozoides no lúmen:", options: ["Epidídimo", "Túbulo Seminífero", "Rede Testis", "Ducto Deferente"], correct: "Epidídimo", explanation: "Um único ducto gigantesco enovelado." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.39 (5).jpeg", text: "Concreções calcáreas (areia cerebral) são marcadores de qual glândula?", options: ["Glândula Pineal", "Glândula Paratireoide", "Hipófise", "Suprarrenal"], correct: "Glândula Pineal", explanation: "Corpora arenacea aumentam com a idade." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.39 (4).jpeg", text: "Dilatações axonais neurossecretoras (Corpúsculos de Herring) e Pituícitos. Região e função:", options: ["Neuro-hipófise / Armazenar e liberar ADH e Ocitocina", "Adeno-hipófise / Produzir GH", "Hipotálamo / Sintetizar hormônios", "Pineal / Secretar Melatonina"], correct: "Neuro-hipófise / Armazenar e liberar ADH e Ocitocina", explanation: "A neuro-hipófise não sintetiza hormônios, apenas armazena." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.39 (3).jpeg", text: "Células com grânulos acidófilos, basófilos e cromófobas. Parte da hipófise representada:", options: ["Adeno-hipófise (Pars distalis)", "Neuro-hipófise (Pars nervosa)", "Pars intermedia", "Infundíbulo"], correct: "Adeno-hipófise (Pars distalis)", explanation: "O parênquima clássico que produz as trofinas." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.39 (2).jpeg", text: "Fronteira com cistos coloides entre porção glandular e porção neural. Região limítrofe:", options: ["Pars intermedia da hipófise", "Folículo da tireoide", "Medula da suprarrenal", "Eminência mediana"], correct: "Pars intermedia da hipófise", explanation: "Separa as duas origens embrionárias." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.39 (1).jpeg", text: "Resquícios embriológicos na 'Pars Intermedia' repletos de coloide eosinofílico:", options: ["Cistos de Rathke", "Folículos de Graaf", "Corpos de Herring", "Ilhotas de Langerhans"], correct: "Cistos de Rathke", explanation: "Vestígios da fenda hipofisária." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.39.jpeg", text: "Células grandes, poliédricas no interstício testicular (Células de Leydig). Função:", options: ["Produção de testosterona", "Formação da barreira hemato-testicular", "Sustentação dos espermatozoides", "Contração tubular"], correct: "Produção de testosterona", explanation: "Sintetizam os andrógenos locais e sistêmicos." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.40 (4).jpeg", text: "Segmento modificado do túbulo distal com células epiteliais altas e núcleos apinhados no polo vascular:", options: ["Mácula Densa", "Cápsula de Bowman", "Célula Justaglomerular", "Podócitos"], correct: "Mácula Densa", explanation: "Sensor de sódio/cloreto do aparelho justaglomerular." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.40 (3).jpeg", text: "Espaços vasculares entre cordões de hepatócitos. Classificação dos capilares:", options: ["Capilares sinusoides", "Capilares contínuos", "Capilares fenestrados", "Artérias de distribuição"], correct: "Capilares sinusoides", explanation: "Endotélio descontínuo para trocas intensas." },

        // LOTE 5 (9 imagens)
        { image: "WhatsApp Image 2026-06-21 at 14.48.40 (2).jpeg", text: "Cordões de células principais (basofílicas) e oxífilas (acidófilas). Glândula e função:", options: ["Paratireoide / Regulação do cálcio (PTH)", "Tireoide / Produção de T3 e T4", "Pineal / Melatonina", "Adrenal / Cortisol"], correct: "Paratireoide / Regulação do cálcio (PTH)", explanation: "O PTH retira cálcio dos ossos para o sangue." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.40 (1).jpeg", text: "Folículos com coloide. Qual o epitélio de revestimento em repouso metabólico?", options: ["Epitélio cúbico simples", "Epitélio pavimentoso estratificado", "Epitélio cilíndrico", "Epitélio de transição"], correct: "Epitélio cúbico simples", explanation: "Células foliculares da tireoide adaptam sua altura ao metabolismo." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.40.jpeg", text: "Zona intermediária e mais espessa do córtex suprarrenal (Zona Fasciculada) produz:", options: ["Glicocorticoides (ex: Cortisol)", "Mineralocorticoides (ex: Aldosterona)", "Catecolaminas", "Andrógenos"], correct: "Glicocorticoides (ex: Cortisol)", explanation: "As células formam fascículos (feixes retos)." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.41 (5).jpeg", text: "Camada mais superficial (6) da mucosa do palato duro (estratificado pavimentoso queratinizado):", options: ["Camada Córnea", "Camada Granulosa", "Camada Espinhosa", "Camada Basal"], correct: "Camada Córnea", explanation: "Anucleada e queratinizada para proteção mastigatória." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.41 (4).jpeg", text: "Estrutura esférica vascularizada responsável pela ultrafiltração do plasma:", options: ["Corpúsculo Renal (de Malpighi)", "Mácula Densa", "Túbulo Proximal", "Alça de Henle"], correct: "Corpúsculo Renal (de Malpighi)", explanation: "Unidade primária de filtração do néfron." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.41 (3).jpeg", text: "Projeções do epitélio da pele em direção ao tecido conjuntivo subjacente:", options: ["Cristas Epidérmicas", "Papilas Dérmicas", "Glândulas Sudoríparas", "Camada Reticular"], correct: "Cristas Epidérmicas", explanation: "Interdigitam-se com as papilas dérmicas para ancoragem física." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.41 (2).jpeg", text: "Receptor de pressão com aspecto de 'cebola cortada' na derme profunda:", options: ["Corpúsculo de Vater-Pacini", "Corpúsculo de Meissner", "Célula de Merkel", "Terminação livre"], correct: "Corpúsculo de Vater-Pacini", explanation: "Lamelas concêntricas detectam vibração rápida e pressão." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.41 (1).jpeg", text: "Células da pars distalis com citoplasma de forte afinidade pela eosina (róseo). Nome e hormônio:", options: ["Células acidófilas / Hormônio do Crescimento (GH)", "Células basófilas / ACTH", "Células cromófobas / Prolactina", "Pituícitos / Ocitocina"], correct: "Células acidófilas / Hormônio do Crescimento (GH)", explanation: "Produzem os hormônios somatotrófico (GH) e lactotrófico (PRL)." },
        { image: "WhatsApp Image 2026-06-21 at 14.48.41.jpeg", text: "Tufo vascular anastomosado dentro da cápsula de Bowman:", options: ["Glomérulo Renal", "Túbulo Proximal", "Mácula Densa", "Vasa Recta"], correct: "Glomérulo Renal", explanation: "Rede capilar fenestrada sob alta pressão para vazamento do plasma." },

        // LOTE 6 (10 imagens focadas em Estrutura / Orgão / Função - Bloco 19.53.xx)
        { image: "WhatsApp Image 2026-06-21 at 19.53.32.jpeg", text: "Identifique a estrutura destacada, o órgão e a sua principal função.", options: ["Papilas filiformes / Língua / Fricção mecânica (sem corpúsculos gustativos)", "Vilosidades / Intestino / Absorção", "Pregas gástricas / Estômago / Digestão", "Papilas fungiformes / Língua / Paladar"], correct: "Papilas filiformes / Língua / Fricção mecânica (sem corpúsculos gustativos)", explanation: "Pontiagudas, queratinizadas e funcionam apenas como 'lixas' na língua." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.32 (1).jpeg", text: "Células eosinofílicas volumosas em glândulas. Identifique a estrutura, o órgão e a função.", options: ["Células parietais / Estômago / Secreção de HCl e fator intrínseco", "Células principais / Estômago / Secreção de pepsinogênio", "Células caliciformes / Intestino / Secreção de muco", "Células de Paneth / Duodeno / Enzimas antibacterianas"], correct: "Células parietais / Estômago / Secreção de HCl e fator intrínseco", explanation: "Fundamentais para acidificar o lúmen e absorver Vitamina B12." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.32 (2).jpeg", text: "Camada superficial extremamente espessa e acelular. Identifique a estrutura, o local e a função.", options: ["Estrato córneo espesso / Pele espessa (palmo-plantar) / Proteção mecânica intensa contra atrito", "Urotélio / Bexiga / Distensão e impermeabilidade", "Mucosa mastigatória / Palato / Facilitação da fala", "Mucosa / Esôfago / Lubrificação"], correct: "Estrato córneo espesso / Pele espessa (palmo-plantar) / Proteção mecânica intensa contra atrito", explanation: "Queratina morta absorve o choque na sola do pé e palma das mãos." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.32 (3).jpeg", text: "Células claras e cilíndricas intercaladas. Estruturas, órgão e função do epitélio:", options: ["Células caliciformes e enterócitos / Intestino delgado / Absorção de nutrientes e lubrificação", "Células parietais e principais / Estômago / Digestão química", "Células ciliadas e basais / Traqueia / Limpeza do trato", "Células claras e escuras / Ducto coletor / Equilíbrio ácido-base"], correct: "Células caliciformes e enterócitos / Intestino delgado / Absorção de nutrientes e lubrificação", explanation: "Parceria perfeita: Enterócitos absorvem, Caliciformes lubrificam." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.33.jpeg", text: "Aglomeração basofílica na parede. Estrutura, órgão/sistema e função:", options: ["Nódulo Linfoide (MALT) / Trato Gastrointestinal / Defesa imunológica local e vigilância", "Glândula de Brünner / Trato Gastrointestinal / Secreção alcalina", "Ilhota de Langerhans / Endócrino / Regulação glicêmica", "Corpúsculo de Malpighi / Urinário / Filtração"], correct: "Nódulo Linfoide (MALT) / Trato Gastrointestinal / Defesa imunológica local e vigilância", explanation: "Linfócitos estocados próximos às barreiras de contato antigênico." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.33 (1).jpeg", text: "Tríade portal (seta vermelha indica vaso de lúmen menor e muscular). Estrutura, órgão, função:", options: ["Ramo da Artéria Hepática / Fígado / Fornecer sangue arterial oxigenado", "Ducto Biliar / Fígado / Drenar a bile", "Ramo da Veia Porta / Fígado / Traz nutrientes do intestino", "Capilar Sinusoide / Fígado / Mistura de sangue"], correct: "Ramo da Artéria Hepática / Fígado / Fornecer sangue arterial oxigenado", explanation: "Garante a oxigenação celular do hepatócito." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.33 (2).jpeg", text: "Mucosa com glândulas retas e sem vilosidades. Estrutura destacada, órgão, função:", options: ["Criptas de Lieberkühn profundas / Intestino Grosso (Cólon) / Absorção de água e lubrificação fecal", "Vilosidades curtas / Intestino Delgado / Absorção de B12", "Fovéolas gástricas / Estômago / Suco gástrico", "Pseudovilosidades / Vesícula Biliar / Concentração biliar"], correct: "Criptas de Lieberkühn profundas / Intestino Grosso (Cólon) / Absorção de água e lubrificação fecal", explanation: "Sem vilosidades, muitas caliciformes para lubrificar as fezes endurecendo." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.33 (3).jpeg", text: "Espaços entre cordões celulares. Estrutura, órgão, função:", options: ["Capilares sinusoides / Fígado / Permuta lenta e extensa com hepatócitos", "Vasa recta / Rim / Concentração osmótica", "Capilares contínuos / Baço / Filtração", "Capilares fenestrados / Pâncreas / Captação hormonal"], correct: "Capilares sinusoides / Fígado / Permuta lenta e extensa com hepatócitos", explanation: "Seu trajeto tortuoso e endotélio fenestrado desaceleram o sangue para limpeza e troca." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.33 (4).jpeg", text: "Projeções alongadas em direção ao lúmen. Estrutura, órgão, função:", options: ["Vilosidades / Intestino Delgado / Ampliação extrema da superfície para maximizar absorção", "Criptas retas / Intestino Grosso / Produção de muco", "Fovéolas / Estômago / Secreção de ácido", "Alvéolos / Pulmão / Hematose"], correct: "Vilosidades / Intestino Delgado / Ampliação extrema da superfície para maximizar absorção", explanation: "Adaptação brutal de área de contato microscópica para os nutrientes." },
        { image: "WhatsApp Image 2026-06-21 at 19.53.33 (5).jpeg", text: "Estruturas poligonais delimitadas. Unidade, órgão e função:", options: ["Lóbulo Hepático Clássico / Fígado / Metabolismo e fluxo centrípeto sanguíneo / centrífugo biliar", "Lóbulo Pancreático / Pâncreas / Secreção exócrina e endócrina", "Corpúsculo Renal / Rim / Filtração", "Lóbulo Tímico / Timo / Maturação de células T"], correct: "Lóbulo Hepático Clássico / Fígado / Metabolismo e fluxo centrípeto sanguíneo / centrífugo biliar", explanation: "Hexágono clássico que define as fronteiras de processamento bioquímico do sangue que chega da porta/artéria." },

        // LOTE 7 (10 Imagens Focadas - Bloco 20.13.xx)
        { image: "WhatsApp Image 2026-06-21 at 20.13.56.jpeg", text: "A imagem em destaque aponta para estruturas tubulares (setas) em meio ao córtex. Identifique a estrutura principal, o órgão e a função associada.", options: ["Túbulo Contorcido Proximal / Rim / Reabsorção obrigatória de água e nutrientes", "Túbulo Coletor / Rim / Concentração de urina pela ADH", "Ducto Excretor / Glândula Sudorípara / Excreção de suor", "Alça de Henle / Rim / Multiplicação por contracorrente"], correct: "Túbulo Contorcido Proximal / Rim / Reabsorção obrigatória de água e nutrientes", explanation: "Túbulos muito eosinofílicos e com borda em escova (microvilosidades), localizados no córtex, são os proximais, responsáveis por reabsorver quase 100% da glicose/aminoácidos." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.55 (3).jpeg", text: "O corte foca no epitélio seminífero. Identifique a célula destacada superiormente e a função dela no órgão.", options: ["Célula de Sertoli (Testículo) / Sustentação, nutrição e formação da barreira hemato-testicular", "Célula Mioide (Testículo) / Contração para expelir o fluido", "Espermatogônia (Testículo) / Mitose e renovação celular", "Espermatócito Primário (Testículo) / Crossing-over genético"], correct: "Célula de Sertoli (Testículo) / Sustentação, nutrição e formação da barreira hemato-testicular", explanation: "Essas células colunares altas protegem a linhagem espermatogênica de ataques do próprio sistema imune masculino." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.55 (2).jpeg", text: "Cordões celulares ricamente vascularizados com diferentes afinidades tintoriais. Identifique a região, o órgão e a função geral.", options: ["Pars Distalis (Adeno-hipófise) / Hipófise / Produção e secreção de hormônios tróficos", "Pars Nervosa (Neuro-hipófise) / Hipófise / Liberação de ADH e Ocitocina", "Zona Reticular / Suprarrenal / Produção de Andrógenos", "Paratireoide / Glândula / Controle do metabolismo do Cálcio"], correct: "Pars Distalis (Adeno-hipófise) / Hipófise / Produção e secreção de hormônios tróficos", explanation: "A diversidade de células acidófilas, basófilas e cromófobas caracteriza a fábrica hormonal da adeno-hipófise." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.55 (1).jpeg", text: "A estrutura circular mais pálida no centro do parênquima glandular. Identifique a estrutura, o órgão e a função.", options: ["Ilhota de Langerhans / Pâncreas / Porção endócrina responsável pela regulação da glicemia", "Glomérulo / Rim / Porção filtrante", "Folículo Primordial / Ovário / Reserva Ovariana", "Nódulo Linfoide / Baço / Filtração linfática"], correct: "Ilhota de Langerhans / Pâncreas / Porção endócrina responsável pela regulação da glicemia", explanation: "Formada por células Alfa, Beta e Delta, regula inteiramente a insulina e o glucagon no sangue." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.55.jpeg", text: "A imagem destaca células claras no centro dos ácinos serosos. Identifique as células, o órgão e sua função principal.", options: ["Células Centroacinares / Pâncreas / Início do sistema ductal e secreção de fluido rico em bicarbonato", "Células de Paneth / Duodeno / Defesa Imune", "Células Parietais / Estômago / Acidez", "Células C parafoliculares / Tireoide / Calcitonina"], correct: "Células Centroacinares / Pâncreas / Início do sistema ductal e secreção de fluido rico em bicarbonato", explanation: "São células ductais invaginadas únicas da estrutura exócrina pancreática que neutralizam o ácido estomacal." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.54 (3).jpeg", text: "As setas indicam o espaço e os folhetos ao redor do tufo vascular. Identifique a estrutura global, o órgão e a função fundamental.", options: ["Corpúsculo Renal / Rim / Ultrafiltração inicial do plasma sanguíneo", "Folículo de Graaf / Ovário / Maturação oocitária", "Ácino Pancreático / Pâncreas / Digestão química", "Glomo Carotídeo / Vasos / Quimiorrecepção"], correct: "Corpúsculo Renal / Rim / Ultrafiltração inicial do plasma sanguíneo", explanation: "Onde o sangue penetra a alta pressão para a extração primária de urina nas cápsulas de Bowman." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.54 (2).jpeg", text: "A imagem evidencia a transição entre duas zonas distintas (linhas azul e amarela). Identifique as zonas (estrutura), o órgão e a função local.", options: ["Córtex e Medula Renal / Rim / Filtração (córtex) e regulação osmótica/concentração (medula)", "Mucosa e Submucosa / Estômago / Absorção e sustentação", "Polpa Branca e Vermelha / Baço / Imunidade e hemocaterese", "Epiderme e Derme / Pele / Barreira e nutrição"], correct: "Córtex e Medula Renal / Rim / Filtração (córtex) e regulação osmótica/concentração (medula)", explanation: "O córtex detém os filtros (corpúsculos), e a medula as longas tubulações para secar a urina." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.54 (1).jpeg", text: "Observam-se cavidades císticas contendo coloide em uma área limítrofe. Identifique a estrutura, o órgão e a origem biológica associada.", options: ["Cistos de Rathke (Pars Intermedia) / Hipófise / Resquício do ectoderma oral embrionário", "Folículos / Tireoide / Estocagem de tiroglobulina", "Gânglios císticos / Sistema Nervoso / Produção de LCR", "Corpos Albicans / Ovário / Cicatrizes ovulatórias"], correct: "Cistos de Rathke (Pars Intermedia) / Hipófise / Resquício do ectoderma oral embrionário", explanation: "Marcam exatamente a fronteira do choque tecidual ocorrido no embrião entre a boca e o assoalho cerebral." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.54.jpeg", text: "A parede exibe mucosa preagueada (seta amarela), camada muscular e serosa (ausência de submucosa). Identifique as túnicas da estrutura, o órgão e a função.", options: ["Camadas Mucosa, Fibromuscular e Serosa / Vesícula Biliar / Armazenamento e concentração hidroeletrolítica da bile", "Túnicas Íntima, Média e Adventícia / Artéria Elástica / Condução sob pressão", "Mucosa, Submucosa e Muscular / Intestino / Peristaltismo forte", "Camadas da Parede / Bexiga Urinária / Distensão por urina"], correct: "Camadas Mucosa, Fibromuscular e Serosa / Vesícula Biliar / Armazenamento e concentração hidroeletrolítica da bile", explanation: "Sem submucosa e sem muscular da mucosa, a vesícula desidrata a bile para fortificá-la." },
        { image: "WhatsApp Image 2026-06-21 at 20.13.53.jpeg", text: "As setas apontam para unidades secretoras esféricas intensamente basofílicas. Identifique a estrutura, o órgão e a função.", options: ["Ácinos Serosos / Pâncreas (Exócrino) / Síntese e secreção de enzimas digestivas em grânulos de zimogênio", "Ácinos Mucosos / Glândula Sublingual / Secreção fluida de proteção", "Folículos Linfoides / Linfonodo / Proliferação de linfócitos B", "Alvéolos Mamários / Glândula Mamária / Secreção láctea apócrina"], correct: "Ácinos Serosos / Pâncreas (Exócrino) / Síntese e secreção de enzimas digestivas em grânulos de zimogênio", explanation: "O forte caráter basofílico basal é devido ao abundante RER fabricando proteínas digestivas." }
    ];

    // Algoritmo de Embaralhamento (Fisher-Yates) robusto
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

    // Seletores do DOM (Opcionais com blindagem ?.)
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

    // Toggle Tema Noturno
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            themeToggle.textContent = body.classList.contains('dark-mode') ? "☀️ Claro" : "🌙 Escuro";
        });
    }

    // Gerenciador de Telas
    function showScreen(screen) {
        startScreen?.classList.remove('active');
        questionScreen?.classList.remove('active');
        resultScreen?.classList.remove('active');
        screen?.classList.add('active');
    }

    // Ouvintes dos Botões de Modo
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

    // Início do Quiz
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

    // Carregamento da Questão
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

    // Temporizador
    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timerDisplay) timerDisplay.textContent = `⏱ ${timeLeft}s`;
            
            if (timeLeft <= 10 && timerDisplay) timerDisplay.classList.add('danger');
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleAnswer(-1); // Estourou o tempo
            }
        }, 1000);
    }

    // Lidar com Respostas
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

    // Mostrador de Feedback
    function showFeedback(isCorrect, title, explanation) {
        if (!feedbackContainer) return;
        feedbackContainer.classList.remove('hidden');
        feedbackContainer.classList.add(isCorrect ? 'correct-box' : 'wrong-box');
        if (feedbackTitle) feedbackTitle.textContent = title;
        if (feedbackExplanation) feedbackExplanation.textContent = explanation;
    }

    // Avançar
    btnNext?.addEventListener('click', () => {
        if (currentQuestionIndex < activeQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    });

    // Tela de Resultados
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

    // Resetar
    btnRestart?.addEventListener('click', () => {
        showScreen(startScreen);
    });
});