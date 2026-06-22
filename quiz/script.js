document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // BASE 1: QUESTÕES TEÓRICAS (30 Questões)
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
        { text: "18. Sistema urinário (V/F): (1) Bexiga revestida por epitélio pseudoestratificado. (2) Uretra feminina revestida por urotélio em toda extensão. (3) Uretra masculina revestida apenas por pseudoestratificado.", options: ["V, V, V", "F, F, F", "V, F, V", "F, V, F"], correct: "F, F, F", explanation: "Bexiga tem urotélio; uretra feminina tem estratificado pavimentoso; uretra masculina varia." },
        { text: "EXTRA 01. (Digestório - Difícil) O espaço de Disse (espaço perissinusoidal) no fígado localiza-se entre os hepatócitos e o endotélio sinusoide. Uma célula importante residente neste espaço, responsável por armazenar vitamina A e, em casos de cirrose, transdiferenciar-se para secretar colágeno (fibrose), é a:", options: ["Célula de Ito (Célula Estrelada Hepática)", "Célula de Kupffer", "Hepatócito perilobular", "Célula endotelial fenestrada", "Colangiócito"], correct: "Célula de Ito (Célula Estrelada Hepática)", explanation: "As Células de Ito estocam lipídios (Vitamina A) em estado normal. Em processos inflamatórios/alcoólicos crônicos, perdem essa função e passam a sintetizar colágeno tipo I e III, gerando a cirrose." },
        { text: "EXTRA 02. (Digestório - Médio) Sobre as glândulas gástricas e a fisiologia da mucosa, a célula responsável pela secreção de fator intrínseco (essencial para absorção de vitamina B12) e a célula que secreta gastrina são, respectivamente:", options: ["Célula Parietal e Célula G (Enteroendócrina)", "Célula Principal e Célula G", "Célula Parietal e Célula D", "Célula Mucosa do colo e Célula G", "Célula Principal e Enterocromafim"], correct: "Célula Parietal e Célula G (Enteroendócrina)", explanation: "As células parietais (oxínticas) produzem HCl e o vital fator intrínseco. As células G, localizadas principalmente no antro pilórico, secretam o hormônio gastrina no sangue." },
        { text: "EXTRA 03. (Endócrino - Difícil) O trato hipotálamo-hipofisário transporta hormônios sintetizados no hipotálamo para serem armazenados na neuro-hipófise. Os corpos celulares dos neurônios que produzem ADH (Vasopressina) e Ocitocina estão localizados principalmente nos núcleos:", options: ["Supraóptico e Paraventricular", "Ventromedial e Arqueado", "Supraquiasmático e Pré-óptico", "Tuberal e Mamilar", "Centroacinares e Alfa"], correct: "Supraóptico e Paraventricular", explanation: "Os neurônios magnocelulares do núcleo supraóptico sintetizam principalmente ADH, enquanto os do núcleo paraventricular sintetizam predominantemente ocitocina." },
        { text: "EXTRA 04. (Endócrino - Médio) Na glândula suprarrenal (adrenal), a camada do córtex responsável pela produção de mineralocorticoides (como a aldosterona) e a sua regulação principal ocorrem na:", options: ["Zona Glomerulosa, regulada pela Angiotensina II e Potássio", "Zona Fasciculada, regulada pelo ACTH", "Zona Reticular, regulada pelo ACTH", "Medula, regulada pelo Sistema Nervoso Simpático", "Zona Glomerulosa, regulada exclusivamente pelo ACTH"], correct: "Zona Glomerulosa, regulada pela Angiotensina II e Potássio", explanation: "A zona glomerulosa é a camada mais externa do córtex, responsável pela aldosterona, sendo controlada primariamente pelo sistema Renina-Angiotensina-Aldosterona (e não pelo eixo hipofisário do ACTH)." },
        { text: "EXTRA 05. (Pele e Anexos - Difícil) Os melanócitos, células responsáveis pela pigmentação da pele e absorção de radiação UV, possuem uma origem embriológica peculiar e localização epitelial estrita. Identifique-as:", options: ["Origem na crista neural, localizados na camada basal", "Origem na mesoderme, localizados na camada espinhosa", "Origem no ectoderma de revestimento, localizados na derme papilar", "Origem na crista neural, localizados na camada granulosa", "Origem no endoderma, localizados na junção dermoepidérmica"], correct: "Origem na crista neural, localizados na camada basal", explanation: "Diferente dos queratinócitos (que vêm do ectoderma superficial), os melanócitos migram da crista neural durante a embriogênese e se instalam no estrato basal da epiderme." },
        { text: "EXTRA 06. (Pele e Anexos - Médio) Na epiderme, as Células de Langerhans desempenham um papel vital para o sistema imunológico cutâneo. Sua principal função e localização predominante no tecido são:", options: ["Apresentação de antígenos (Células dendríticas) / Camada espinhosa", "Percepção tátil fina (Mecanorreceptores) / Camada basal", "Produção de queratina rígida / Camada granulosa", "Proteção UV (Melanina) / Camada córnea", "Nutrição da epiderme / Camada lúcida"], correct: "Apresentação de antígenos (Células dendríticas) / Camada espinhosa", explanation: "As células de Langerhans são macrófagos especializados (apresentadoras de antígenos) derivadas da medula óssea, que infiltram o estrato espinhoso da epiderme para vigiar invasões microbianas." },
        { text: "EXTRA 07. (Genital Masculino - Médio) A barreira hemato-testicular é crucial para isolar as células germinativas em estágios avançados do ataque do sistema imune masculino (já que são formadas após a tolerância imunológica). Ela é formada principalmente por:", options: ["Junções oclusivas (tight junctions) entre células de Sertoli adjacentes", "Células mioides peritubulares na lâmina própria", "Junções comunicantes (gap junctions) entre as células de Leydig", "Endotélio contínuo e impenetrável dos capilares testiculares", "Glicoproteínas impermeáveis da túnica albugínea"], correct: "Junções oclusivas (tight junctions) entre células de Sertoli adjacentes", explanation: "As zonas de oclusão lateral das Células de Sertoli dividem o túbulo em compartimento basal (onde o sangue tem acesso às espermatogônias) e adluminal (onde a meiose ocorre isolada e protegida)." },
        { text: "EXTRA 08. (Genital Feminino - Difícil) Durante a fase lútea do ciclo ovariano, o corpo lúteo se desenvolve sob influência do LH. Quais são os dois tipos celulares que formam o corpo lúteo e qual o principal hormônio secretado por essa estrutura para manter o endométrio?", options: ["Células granulínicas-luteínicas e teca-luteínicas / Progesterona", "Células foliculares e células da teca externa / Estrogênio", "Oócitos secundários e células da granulosa / Inibina", "Células luteínicas e células hilares / Androstenediona", "Células mesoteliais e fibroblásticas / Progesterona"], correct: "Células granulínicas-luteínicas e teca-luteínicas / Progesterona", explanation: "Após a ovulação, a parede do folículo colapsa. As células da granulosa e da teca interna hipertrofiam, acumulam lipídios (luteinização) e passam a secretar massivamente progesterona." },
        { text: "EXTRA 09. (Urinário - Difícil) O aparelho justaglomerular regula a pressão arterial e a taxa de filtração renal. Ele é composto pela mácula densa, células justaglomerulares e células mesangiais extraglomerulares. Histologicamente, as células justaglomerulares são:", options: ["Células musculares lisas modificadas da arteríola aferente que secretam renina", "Células epiteliais modificadas do túbulo contorcido distal que secretam renina", "Podócitos modificados que contraem o tufo capilar e reduzem o lúmen", "Células endoteliais fenestradas da arteríola eferente", "Fibroblastos da cápsula de Bowman que secretam eritropoietina"], correct: "Células musculares lisas modificadas da arteríola aferente que secretam renina", explanation: "As células justaglomerulares substituem as fibras musculares lisas na túnica média da arteríola aferente. Elas possuem grânulos de renina, que são liberados quando a pressão arterial cai." },
        { text: "EXTRA 10. (Urinário - Médio) A concentração final da urina ocorre nos ductos coletores renais sob a forte ação do hormônio antidiurético (ADH ou Vasopressina). A nível histocelular, este hormônio atua aumentando a permeabilidade da água induzindo a translocação de:", options: ["Aquaporinas para a membrana apical das células principais do ducto", "Canais de Sódio (ENaC) para a membrana basolateral das células intercalares", "Bombas de Prótons para as células intercalares do tipo A", "Glicoproteínas de Tamm-Horsfall para a membrana do urotélio pélvico", "Canais de Cálcio no túbulo contorcido proximal"], correct: "Aquaporinas para a membrana apical das células principais do ducto", explanation: "O ADH liga-se aos receptores nas células principais do ducto coletor, fazendo com que vesículas contendo Aquaporina-2 se fundam com a membrana celular apical, 'puxando' a água da urina de volta para o sangue." },
        { text: "EXTRA 11. (Linfático - Médio) O Timo é um órgão linfoide primário caracterizado pela ausência de nódulos linfoides e pela presença exclusiva de Corpúsculos de Hassall. A principal função da complexa 'barreira hemato-tímica' é:", options: ["Impedir que antígenos circulantes entrem em contato com linfócitos T em maturação na região cortical", "Filtrar os antígenos presentes na linfa aferente antes que atinjam a medula", "Destruir eritrócitos senescentes e reciclar ferro no estroma reticular", "Permitir a entrada de linfócitos B para formar centros germinativos", "Secretar timosina diretamente nos capilares sinusoides da medula"], correct: "Impedir que antígenos circulantes entrem em contato com linfócitos T em maturação na região cortical", explanation: "A barreira hemato-tímica blinda o córtex do timo para que os linfócitos T imaturos não sejam precocemente expostos a antígenos do sangue durante a sua 'educação' imune e seleção clonal." },
        { text: "EXTRA 12. (Linfático - Difícil) No baço, a teoria da 'circulação aberta' é um conceito histofisiológico fascinante. Morfologicamente, ela defende que os capilares penicilares arteriais não se conectam de forma contínua e fechada aos sinusoides venosos, mas sim:", options: ["Despejam o sangue nos cordões esplênicos (de Billroth), forçando as hemácias a se espremerem ativamente para entrar nos sinusoides", "Drenam o sangue diretamente para a veia trabecular, pulando o parênquima linfático", "Lançam o sangue nos vasos linfáticos eferentes da polpa branca (Malpighi)", "Terminam em fundo cego dentro da grossa cápsula conjuntiva esplênica", "Despejam a linfa diretamente no centro germinativo ativando linfócitos T"], correct: "Despejam o sangue nos cordões esplênicos (de Billroth), forçando as hemácias a se espremerem ativamente para entrar nos sinusoides", explanation: "Na circulação aberta do baço, o sangue é 'jogado' na polpa vermelha. As hemácias precisam ser flexíveis o suficiente para se arrastar pelas fendas endoteliais do sinusoide e voltar à circulação. Se estiverem velhas ou rígidas, ficam presas e são fagocitadas pelos macrófagos (hemocaterese)." }
    ];

    // ==========================================
    // BASE 2: LÂMINAS (75 Questões - Estrutura/Órgão/Função + Tecido)
    // ==========================================
    const imageQuestionsData = [
        // LOTE 1
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.32.jpeg", 
            text: "Observando o corte histológico com projeções pontiagudas apicais, responda: Qual é este órgão? Além disso, especifique o tipo de tecido de revestimento superficial.", 
            options: ["Língua / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Esôfago / Tecido Epitelial Estratificado Pavimentoso Não-Queratinizado", "Pele Fina / Tecido Epitelial Cúbico Simples", "Intestino Grosso / Tecido Epitelial Cilíndrico Simples"], 
            correct: "Língua / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "As papilas filiformes da língua sofrem forte atrito, necessitando de um epitélio pluriestratificado com queratina para proteção." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (3).jpeg", 
            text: "Focando na grande estrutura vascular circulada no centro do parênquima, responda: Qual é este órgão? Além disso, especifique o tipo de tecido que forma o endotélio desse vaso.", 
            options: ["Fígado / Tecido Epitelial Pavimentoso Simples", "Pâncreas / Tecido Conjuntivo Reticular", "Baço / Tecido Epitelial Cúbico Simples", "Tireoide / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Fígado / Tecido Epitelial Pavimentoso Simples", 
            explanation: "Trata-se da veia centro-lobular do fígado. Como todo vaso sanguíneo, seu endotélio é um tecido epitelial de revestimento pavimentoso simples." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (4).jpeg", 
            text: "O corte apresenta uma região de tríade no parênquima. Qual é a principal função da estrutura apontada pela seta vermelha (vaso de menor luz e parede grossa)? Especifique o tecido formador de sua camada média.", 
            options: ["Fornecer sangue altamente oxigenado / Tecido Muscular Liso", "Drenar a bile produzida / Tecido Epitelial Cúbico Simples", "Trazer sangue rico em nutrientes do intestino / Tecido Conjuntivo Frouxo", "Absorver glicose / Tecido Epitelial Pavimentoso Simples"], 
            correct: "Fornecer sangue altamente oxigenado / Tecido Muscular Liso", 
            explanation: "A seta aponta para o ramo da artéria hepática (parede espessa devido ao músculo liso), responsável por nutrir os hepatócitos com oxigênio." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (2).jpeg", 
            text: "Corte transversal do tubo digestório exibindo profundas glândulas retas e ausência de vilosidades. Qual é este órgão? Especifique o tipo de tecido do seu revestimento mucoso.", 
            options: ["Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Caliciformes", "Intestino Delgado (Duodeno) / Tecido Epitelial Pseudoestratificado", "Estômago (Corpo) / Tecido Epitelial Estratificado Pavimentoso", "Vesícula Biliar / Tecido Epitelial Cúbico Simples"], 
            correct: "Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Caliciformes", 
            explanation: "A falta de vilosidades aliada às numerosas criptas repletas de células caliciformes define a histologia do cólon para a lubrificação fecal." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (2).jpeg", 
            text: "Este órgão apresenta mucosa preagueada e uma forte camada muscular, mas não possui submucosa verdadeira. Qual é este órgão? Especifique o tecido do seu epitélio superficial.", 
            options: ["Vesícula Biliar / Tecido Epitelial Cilíndrico Simples", "Bexiga Urinária / Tecido Epitelial de Transição (Urotélio)", "Estômago / Tecido Epitelial Cilíndrico Estratificado", "Esôfago / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Vesícula Biliar / Tecido Epitelial Cilíndrico Simples", 
            explanation: "A ausência de lâmina muscular da mucosa e de submucosa é o critério diagnóstico clássico da vesícula biliar." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33.jpeg", 
            text: "As setas vermelhas apontam para células de citoplasma apical pálido inseridas no epitélio intestinal. Qual célula é esta? Especifique o tipo de tecido em que ela se enquadra estruturalmente.", 
            options: ["Célula Caliciforme / Tecido Epitelial Glandular Exócrino Unicelular", "Célula de Paneth / Tecido Epitelial Glandular Endócrino", "Enterócito / Tecido Conjuntivo Mucoso", "Célula Parietal / Tecido Epitelial Glandular Multicelular"], 
            correct: "Célula Caliciforme / Tecido Epitelial Glandular Exócrino Unicelular", 
            explanation: "As células caliciformes são o clássico exemplo de glândulas exócrinas unicelulares, especializadas em produzir muco protetor." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (1).jpeg", 
            text: "No centro das unidades secretoras arredondadas observam-se núcleos de células mais pálidas, que se insinuam para o interior do ácino. Qual célula é esta? Especifique o tipo de tecido em torno dela.", 
            options: ["Célula Centroacinar / Tecido Epitelial Glandular Exócrino Acinoso Seroso", "Célula Mioepitelial / Tecido Muscular Liso", "Hepatócito / Tecido Epitelial Glandular Misto", "Célula Mucosa do Colo / Tecido Epitelial Glandular Tubular"], 
            correct: "Célula Centroacinar / Tecido Epitelial Glandular Exócrino Acinoso Seroso", 
            explanation: "Exclusivas do pâncreas exócrino, as células centroacinares representam a porção inicial dos ductos intercalares que invaginam para dentro do ácino seroso." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (3).jpeg", 
            text: "Observa-se um maciço aglomerado fortemente basofílico na camada submucosa do intestino. Qual é a principal função desta estrutura anatômica? Especifique o tipo de tecido que a compõe.", 
            options: ["Defesa imunológica local (MALT) / Tecido Conjuntivo Reticular com linfócitos", "Peristaltismo intestinal / Tecido Muscular Liso", "Secreção de muco alcalino / Tecido Epitelial Glandular Exócrino", "Absorção lipídica / Tecido Epitelial Cilíndrico Simples"], 
            correct: "Defesa imunológica local (MALT) / Tecido Conjuntivo Reticular com linfócitos", 
            explanation: "Trata-se de um folículo linfoide (MALT). É suportado por uma malha de tecido conjuntivo reticular densamente povoado por linfócitos para patrulha imunológica." 
        },

        // LOTE 2
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34.jpeg", 
            text: "A imagem evidencia uma estrutura circular pálida mergulhada no parênquima escuro acinar. Qual é a principal função desta estrutura? Especifique o tipo de tecido.", 
            options: ["Regulação da glicemia sanguínea (Insulina/Glucagon) / Tecido Epitelial Glandular Endócrino Cordonal", "Produção de enzimas digestivas ativas / Tecido Epitelial Glandular Exócrino", "Filtração glomerular / Tecido Epitelial Pavimentoso Simples", "Maturação folicular / Tecido Epitelial Estratificado Cúbico"], 
            correct: "Regulação da glicemia sanguínea (Insulina/Glucagon) / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A Ilhota de Langerhans é um cordão endócrino intrincado responsável pela homeostase glicêmica do corpo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (4).jpeg", 
            text: "A seta indica um agrupamento epitelial especializado encostado no polo vascular de um glomérulo. Qual é a principal função desta estrutura? Especifique o tecido que a forma.", 
            options: ["Sensor osmótico de Sódio e Cloreto (Quimiorrecepção) / Tecido Epitelial Cilíndrico Simples", "Secreção de Renina / Tecido Muscular Liso Modificado", "Barreira de Filtração Plasmática / Tecido Epitelial Pavimentoso", "Reabsorção de glicose / Tecido Epitelial Cúbico com Microvilosidades"], 
            correct: "Sensor osmótico de Sódio e Cloreto (Quimiorrecepção) / Tecido Epitelial Cilíndrico Simples", 
            explanation: "A Mácula Densa monitora o fluxo tubular; suas células tornam-se cilíndricas e apinhadas em adaptação a essa função quimiossensora." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (3).jpeg", 
            text: "O parênquima exibe várias estruturas esféricas (corpúsculos) intercaladas com ductos cortados transversalmente. Qual é este órgão de forma global? Especifique o tecido dos túbulos ao redor.", 
            options: ["Rim (Região Cortical) / Tecido Epitelial Cúbico Simples", "Baço (Polpa Branca) / Tecido Conjuntivo Reticular", "Ovário (Córtex) / Tecido Epitelial Pavimentoso Simples", "Testículo (Túbulos Seminíferos) / Tecido Epitelial Estratificado Germinativo"], 
            correct: "Rim (Região Cortical) / Tecido Epitelial Cúbico Simples", 
            explanation: "A presença dos corpúsculos renais diagnostica imediatamente o córtex do rim. O tecido adjacente pertence aos túbulos contorcidos (epitélio cúbico simples)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (2).jpeg", 
            text: "A lâmina apresenta uma nítida separação morfológica (indicada pelas linhas azul e amarela). Em qual órgão ocorre a separação entre uma zona de filtração corpuncular e uma zona de concentração ductal? Especifique o tecido formador dos túbulos coletores.", 
            options: ["Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", "Suprarrenal / Tecido Epitelial Glandular Endócrino Cordonal", "Cérebro / Tecido Nervoso (Massa Cinzenta e Branca)", "Linfonodo / Tecido Conjuntivo Reticular"], 
            correct: "Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", 
            explanation: "A transição corticomedular do rim abriga túbulos coletores que aumentam gradativamente a altura do seu epitélio simples (de cúbico para cilíndrico) conforme descem para a papila." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (1).jpeg", 
            text: "Seta aponta para células cilíndricas basais altas que repousam na membrana basal do túbulo seminífero, possuindo núcleo irregular. Qual célula é esta? Especifique o tipo de tecido geral deste epitélio.", 
            options: ["Célula de Sertoli / Tecido Epitelial Estratificado Germinativo", "Espermatogônia / Tecido Epitelial Pseudoestratificado", "Célula de Leydig / Tecido Conjuntivo Frouxo", "Miofibroblasto / Tecido Muscular Liso"], 
            correct: "Célula de Sertoli / Tecido Epitelial Estratificado Germinativo", 
            explanation: "As células de Sertoli são os 'pilares' estruturais e nutricionais do tecido epitelial estratificado especial (germinativo) do testículo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35.jpeg", 
            text: "O arranjo altamente celular mescla núcleos com citoplasmas róseos (acidófilos) e roxos (basófilos) intimamente dispostos entre vasos fenestrados. Qual é este órgão? Especifique seu tecido.", 
            options: ["Adeno-hipófise (Pars Distalis) / Tecido Epitelial Glandular Endócrino Cordonal", "Neuro-hipófise / Tecido Nervoso Secretor", "Córtex da Adrenal / Tecido Epitelial Glandular Fasciculado", "Glândula Pineal / Tecido Nervoso Modificado"], 
            correct: "Adeno-hipófise (Pars Distalis) / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A rica cromofilia celular (acidófilas/basófilas) disposta em cordões é a marca registrada da Adeno-hipófise." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (4).jpeg", 
            text: "A imagem ilustra um epitélio estratificado onde as células mais apicais são grandes e arredondadas (guarda-chuvas) recobrindo ductos urinários. Qual é a principal função deste epitélio? Especifique o tipo de tecido.", 
            options: ["Impermeabilização e proteção contra a toxicidade da urina e distensão / Tecido Epitelial de Transição (Urotélio)", "Reabsorção intensa de Sódio e Água / Tecido Epitelial Cúbico Simples", "Condução de fluidos sem estiramento / Tecido Epitelial Cilíndrico Estratificado", "Fricção mecânica / Tecido Epitelial Estratificado Pavimentoso Queratinizado"], 
            correct: "Impermeabilização e proteção contra a toxicidade da urina e distensão / Tecido Epitelial de Transição (Urotélio)", 
            explanation: "O Urotélio é altamente especializado para impedir o retorno da urina tóxica para o plasma e se achatar quando a via urinária enche." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (3).jpeg", 
            text: "Os ductos transversais (números 4 e 5) mostram células com largura e altura quase idênticas e núcleos perfeitamente esféricos centrais. Qual é este órgão? Especifique a tipologia do tecido.", 
            options: ["Rim / Tecido Epitelial Cúbico Simples", "Fígado / Tecido Epitelial Cilíndrico Simples", "Pâncreas / Tecido Epitelial Pavimentoso Simples", "Tireoide / Tecido Conjuntivo Frouxo"], 
            correct: "Rim / Tecido Epitelial Cúbico Simples", 
            explanation: "Pela presença de túbulos coletores menores do rim, onde a morfologia clássica do epitélio cúbico simples fica impecavelmente demonstrada." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (2).jpeg", 
            text: "Uma imensa massa acelular eosinofílica repousa sobre as células epiteliais. Este aspecto é encontrado nas palmas das mãos e solas dos pés. Qual é este órgão anatômico global? Especifique o tipo do tecido epitelial.", 
            options: ["Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Língua / Tecido Epitelial Estratificado Pavimentoso Não-Queratinizado", "Esôfago / Tecido Epitelial Pseudoestratificado Cilíndrico", "Unha / Tecido Conjuntivo Denso Modelado"], 
            correct: "Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "O gigantesco estrato córneo e a epiderme viável multilaminar caracterizam o sistema tegumentar em áreas de fricção constante." 
        },

        // LOTE 3
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.32 (1).jpeg", 
            text: "A imagem destaca grandes células piramidais eosinofílicas, ricas em mitocôndrias, que povoam a porção média das glândulas da mucosa digestiva. Qual célula é esta? Especifique o tipo de tecido onde ela atua.", 
            options: ["Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino", "Célula Principal (Zimogênica) / Tecido Epitelial Cilíndrico Simples", "Hepatócito / Tecido Epitelial Glandular Endócrino", "Célula Caliciforme / Tecido Epitelial Glandular Unicelular"], 
            correct: "Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino", 
            explanation: "As células parietais gastam muita energia (mitocôndrias = acidofilia) para bombear HCl para o lúmen das glândulas exócrinas gástricas." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (1).jpeg", 
            text: "A mucosa se ergue em formato de longos dedos alongados em direção ao lúmen. Qual é a principal função desta estrutura morfológica? Especifique o tecido conjuntivo que preenche o seu interior (eixo).", 
            options: ["Aumentar a área de absorção de nutrientes / Tecido Conjuntivo Frouxo", "Produzir muco para o bolo fecal / Tecido Conjuntivo Denso", "Permitir a distensão elástica / Tecido Muscular Liso", "Realizar a hematose / Tecido Conjuntivo Reticular"], 
            correct: "Aumentar a área de absorção de nutrientes / Tecido Conjuntivo Frouxo", 
            explanation: "As vilosidades intestinais possuem um núcleo de tecido conjuntivo frouxo (lâmina própria) rico em capilares e quilíferos centrais para levar a nutrição absorvida para o sangue." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (1).jpeg", 
            text: "As setas verdes indicam estriações formadas por ductos retos invadindo perpendicularmente o córtex renal a partir da medula. Qual é este órgão anatômico? Especifique o tecido desses túbulos.", 
            options: ["Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", "Fígado / Tecido Epitelial Glandular Cordonal", "Cérebro / Tecido Nervoso com feixes axonais", "Timo / Tecido Conjuntivo Reticular"], 
            correct: "Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", 
            explanation: "Os raios medulares de Ferrein são arranjos do parênquima renal que transportam a urina inicialmente processada no córtex em direção às pirâmides medulares." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36.jpeg", 
            text: "A linha limite do parênquima renal demonstra uma espessa bainha fibrosa que não possui função secretora ou filtrante. Qual é a principal função desta estrutura? Especifique o seu tipo de tecido.", 
            options: ["Proteção e suporte estrutural do órgão (Cápsula Renal) / Tecido Conjuntivo Denso Não Modelado", "Secreção de aldosterona / Tecido Epitelial Glandular Endócrino", "Contração e expulsão de fluidos / Tecido Muscular Liso", "Fixação do rim à parede abdominal / Tecido Adiposo Unilocular"], 
            correct: "Proteção e suporte estrutural do órgão (Cápsula Renal) / Tecido Conjuntivo Denso Não Modelado", 
            explanation: "A cápsula de tecido conjuntivo denso do rim suporta altas pressões internas e blinda o órgão contra patógenos externos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.37.jpeg", 
            text: "Células grandes e poliédricas (com citoplasma rosa) estão alojadas no espaço extracelular entre túbulos que produzem gametas. Qual célula é esta? Especifique o tecido que preenche este espaço intersticial.", 
            options: ["Célula de Leydig (Intersticial) / Tecido Conjuntivo Frouxo", "Célula de Sertoli / Tecido Epitelial Estratificado", "Espermatogônia / Tecido Conjuntivo Denso", "Miofibroblasto / Tecido Muscular Liso"], 
            correct: "Célula de Leydig (Intersticial) / Tecido Conjuntivo Frouxo", 
            explanation: "As Células de Leydig localizam-se no tecido conjuntivo frouxo rico em capilares sanguíneos (para onde a testosterona é secretada) entre os túbulos seminíferos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.37 (4).jpeg", 
            text: "A seta verde aponta a maior célula do epitélio seminífero, parada na meiose I, possuindo um grande núcleo arredondado e cromatina visível. Qual célula é esta? Especifique o tecido onde ocorre este processo.", 
            options: ["Espermatócito Primário / Tecido Epitelial Estratificado Germinativo", "Espermatozoide / Tecido Epitelial Pseudoestratificado", "Célula Mioide / Tecido Muscular Liso", "Macrófago / Tecido Conjuntivo Frouxo"], 
            correct: "Espermatócito Primário / Tecido Epitelial Estratificado Germinativo", 
            explanation: "O epitélio germinativo do testículo apresenta os espermatócitos primários numa longa fase de prófase, tornando-os altamente conspícuos na histologia." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (4).jpeg", 
            text: "A seta azul descreve uma delicada parede de camada única que delimita uma cavidade em meia-lua ao redor do glomérulo. Qual é a principal função desse folheto parietal? Especifique o tipo de tecido.", 
            options: ["Reter e direcionar o ultrafiltrado (urina primária) para o polo tubular / Tecido Epitelial Pavimentoso Simples", "Filtrar os capilares sanguíneos / Tecido Epitelial Cúbico Simples", "Reabsorver glicose e proteínas / Tecido Epitelial Cilíndrico com Microvilosidades", "Aumentar a pressão sanguínea sistêmica / Tecido Muscular Liso"], 
            correct: "Reter e direcionar o ultrafiltrado (urina primária) para o polo tubular / Tecido Epitelial Pavimentoso Simples", 
            explanation: "A fina cápsula parietal não filtra ativamente; ela atua como um invólucro impermeável de tecido pavimentoso que captura a água vazada dos capilares." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (5).jpeg", 
            text: "No meio da fenda residual da glândula pituitária, observam-se bolsões (cistos de Rathke) revestidos por células residuais cheios de fluido coloide. Qual é este órgão? Especifique o tecido formador dessa região intermediária.", 
            options: ["Glândula Hipófise (Pars Intermedia) / Tecido Epitelial Glandular Cúbico a Cilíndrico Simples", "Tireoide / Tecido Epitelial Pavimentoso Estratificado", "Pâncreas Endócrino / Tecido Conjuntivo Mucoso", "Suprarrenal (Medula) / Tecido Nervoso Modificado"], 
            correct: "Glândula Hipófise (Pars Intermedia) / Tecido Epitelial Glandular Cúbico a Cilíndrico Simples", 
            explanation: "Os cistos de Rathke marcam a parte intermédia da hipófise, sendo circundados por resquícios epiteliais da bolsa embriológica oral." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (3).jpeg", 
            text: "Visualização panorâmica em que a parte celular e corada à direita contrasta diretamente com a porção pálida e fibrilar à esquerda. Qual é este órgão completo? Especifique os tecidos de ambas as porções (direita e esquerda).", 
            options: ["Glândula Hipófise / Tecido Epitelial Glandular Endócrino (D) e Tecido Nervoso (E)", "Rim / Tecido Epitelial Cúbico (D) e Tecido Conjuntivo (E)", "Testículo / Tecido Epitelial Germinativo (D) e Tecido Muscular (E)", "Tireoide / Tecido Glandular Folicular (D) e Tecido Adiposo (E)"], 
            correct: "Glândula Hipófise / Tecido Epitelial Glandular Endócrino (D) e Tecido Nervoso (E)", 
            explanation: "A adeno-hipófise (epitelial) e a neuro-hipófise (nervosa) fundem-se na glândula pituitária, criando um choque histológico de tecidos inconfundível." 
        },

        // LOTE 4
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (1).jpeg", 
            text: "A imagem mostra o lúmen de um longo ducto ladeado por células com imensas projeções imóveis (estereocílios) agrupadas, circundado por uma forte bainha muscular. Qual é a principal função desta estrutura? Especifique o tecido epitelial.", 
            options: ["Absorver os fluidos testiculares e nutrir os espermatozoides durante a maturação / Tecido Epitelial Pseudoestratificado Cilíndrico", "Impelir o espermatozoide em direção à uretra / Tecido Epitelial de Transição", "Produzir frutose para o sêmen / Tecido Epitelial Cúbico Simples", "Realizar fagocitose celular / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Absorver os fluidos testiculares e nutrir os espermatozoides durante a maturação / Tecido Epitelial Pseudoestratificado Cilíndrico", 
            explanation: "No epidídimo, os estereocílios (vilosidades ramificadas longas e imóveis) maximizam a área para secar o fluido testicular, e o epitélio pseudoestratificado auxilia no suporte e maturação." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38.jpeg", 
            text: "Incontáveis perfis tubulares tortuosos empacotados, com grande concentração intraluminal de espermatozoides visíveis. Qual é este órgão? Especifique o tecido intertubular que o preenche.", 
            options: ["Epidídimo / Tecido Conjuntivo Frouxo e Tecido Muscular Liso peritubular", "Ducto Deferente / Tecido Cartilaginoso Hialino", "Próstata / Tecido Conjuntivo Denso Modelado", "Túbulo Seminífero / Tecido Ósseo Esponjoso"], 
            correct: "Epidídimo / Tecido Conjuntivo Frouxo e Tecido Muscular Liso peritubular", 
            explanation: "Como o ducto epididimário tem metros de comprimento enovelados, um único corte fatia-o dezenas de vezes, sustentado por conjuntivo e circundado por musculatura lisa contrátil." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (5).jpeg", 
            text: "Corte encefálico profundo exibindo massas calcificadas amorfas (corpos arenáceos) num estroma com pouca densidade celular clássica. Qual é este órgão? Especifique a natureza do tecido base.", 
            options: ["Glândula Pineal (Epífise) / Tecido Nervoso Modificado (Neuroendócrino)", "Adeno-hipófise / Tecido Epitelial Glandular Endócrino", "Paratireoide / Tecido Conjuntivo Mucoso", "Tireoide / Tecido Epitelial Glandular Folicular"], 
            correct: "Glândula Pineal (Epífise) / Tecido Nervoso Modificado (Neuroendócrino)", 
            explanation: "A areia cerebral (concreções de fosfato e carbonato de cálcio) precipita entre os pinealócitos neuroendócrinos derivados do diencéfalo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (4).jpeg", 
            text: "Aspecto neurofibrilar desorganizado, salpicado por manchas granulosas basofílicas nas terminações axonais (Corpúsculos de Herring). Qual é a principal função deste órgão? Especifique o tecido.", 
            options: ["Armazenar (não produzir) e liberar neuro-hormônios diretos no sangue / Tecido Nervoso Secetor", "Sintetizar hormônios tireotróficos / Tecido Epitelial Endócrino Cordonal", "Transmitir impulsos elétricos reflexos periféricos / Tecido Nervoso Somático", "Manter a barreira hematoencefálica ocluída / Tecido Conjuntivo Reticular"], 
            correct: "Armazenar (não produzir) e liberar neuro-hormônios diretos no sangue / Tecido Nervoso Secetor", 
            explanation: "A pars nervosa hipofisária é formada pelos axônios distais do hipotálamo, que guardam grânulos de ADH/Ocitocina envoltos pela glia local (pituícitos)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (3).jpeg", 
            text: "Aglutinados epiteliais demonstram intensa variação de cores (células coradas em rosa, roxo e transparentes). Qual célula forma a população 'Cromófoba' pálida? Especifique o órgão.", 
            options: ["Células em estado de repouso ou degranuladas que não fixam corante / Glândula Adeno-hipófise", "Células secretoras de mucina ativa / Glândula Submandibular", "Células neuroendócrinas amielínicas / Glândula Pineal", "Células de sustentação basais / Bulbo Olfatório"], 
            correct: "Células em estado de repouso ou degranuladas que não fixam corante / Glândula Adeno-hipófise", 
            explanation: "As cromófobas ('que têm aversão à cor') são células tronco ou células hipofisárias que acabaram de esvaziar todo o seu conteúdo hormonal acidófilo/basófilo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (2).jpeg", 
            text: "A linha cística contendo coloide delimita abruptamente as partes glandular maciça e fibrilar neurogênica. Qual é este órgão complexo? Especifique o tipo de tecido da parte maciça celular (à direita).", 
            options: ["Glândula Pituitária (Hipófise) / Tecido Epitelial Glandular Endócrino Cordonal", "Adrenal (Suprarrenal) / Tecido Epitelial Glandular Fasciculado", "Ovário Folicular / Tecido Epitelial Cúbico Simples", "Tireoide/Paratireoide / Tecido Conjuntivo Denso Modelado"], 
            correct: "Glândula Pituitária (Hipófise) / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A visão tripla (Pars Distalis Endócrina - Pars Intermedia Cística - Pars Nervosa Glial) confere à Hipófise essa histologia única." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (1).jpeg", 
            text: "Fendas preenchidas por coloide formam as vesículas em foco, originárias da invaginação do teto da boca primitiva no feto. Qual é a estrutura nomeada destas vesículas? Especifique o tecido de revestimento interno.", 
            options: ["Cistos de Rathke / Tecido Epitelial Cúbico a Cilíndrico Baixo Simples", "Folículos da Tireoide / Tecido Epitelial Pavimentoso Estratificado", "Corpúsculos de Hassall / Tecido Epitelial Reticular", "Alvéolos Pulmonares / Tecido Epitelial Pavimentoso Simples"], 
            correct: "Cistos de Rathke / Tecido Epitelial Cúbico a Cilíndrico Baixo Simples", 
            explanation: "Essas vesículas revestidas de epitélio simples e ladeadas por basófilas residuais definem os Cistos de Rathke da porção intermédia da hipófise." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39.jpeg", 
            text: "Seta focando no espaço extracelular fora da parede de um túbulo e mirando células globosas arranjadas em nichos capilares. Qual é a principal função destas células intersticiais (de Leydig)? Especifique o tecido de suporte.", 
            options: ["Sintetizar hormônios andrógenos sob ação do LH / Tecido Conjuntivo Frouxo", "Englobar as espermatogônias e formar a barreira sangue-testículo / Tecido Epitelial Estratificado", "Contrair a parede tubular espasmodicamente / Tecido Muscular Estriado Esquelético", "Fagocitar resíduos da meiose / Tecido Conjuntivo Denso Não Modelado"], 
            correct: "Sintetizar hormônios andrógenos sob ação do LH / Tecido Conjuntivo Frouxo", 
            explanation: "O conjuntivo frouxo preenche o interstício, permitindo rica vascularização que recolhe a testosterona secretada diretamente pelas Células de Leydig." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (4).jpeg", 
            text: "O ponteiro demarca uma placa hipercelular no túbulo que toca o hilo vascular do glomérulo. Qual é esta estrutura anatômica sensora? Especifique o tipo de tecido em que se diferencia.", 
            options: ["Mácula Densa / Tecido Epitelial Cilíndrico Simples Especializado", "Folheto Parietal / Tecido Epitelial Pavimentoso Simples", "Podócitos / Tecido Epitelial de Revestimento Modificado", "Células Mesangiais Extraglomerulares / Tecido Conjuntivo Reticular"], 
            correct: "Mácula Densa / Tecido Epitelial Cilíndrico Simples Especializado", 
            explanation: "As células do túbulo distal ficam tão altas e finas no ponto de contato vascular que seus núcleos formam uma 'mácula densa' visível encarregada de provar a osmolaridade." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (3).jpeg", 
            text: "As setas apontam para canais brancos irregulares e extremamente fenestrados fluindo radialmente na placa hepática. Qual é este vaso? Especifique o tecido das suas paredes.", 
            options: ["Capilar Sinusoide / Tecido Epitelial Pavimentoso Simples Endotelial (Descontínuo)", "Veia Central / Tecido Muscular Liso e Endotélio Contínuo", "Canalículo Biliar / Tecido Epitelial Cúbico Simples", "Artéria de Distribuição / Tecido Muscular Estriado e Conjuntivo elástico"], 
            correct: "Capilar Sinusoide / Tecido Epitelial Pavimentoso Simples Endotelial (Descontínuo)", 
            explanation: "O fluxo sanguíneo misto flui por esses labirintos lentos (sinusoides), nos quais grandes fenestras epiteliais viabilizam o toque direto das macromoléculas com os hepatócitos." 
        },

        // LOTE 5
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (2).jpeg", 
            text: "Ilha celular composta por dois tipos de células muito visíveis: as principais (pequenas e roxas) e as oxífilas (grandes e totalmente eosinófilas). Qual é a principal função fisiológica deste órgão? Especifique seu tecido.", 
            options: ["Produzir Paratormônio (PTH) para aumentar o nível de cálcio sanguíneo / Tecido Epitelial Glandular Endócrino Cordonal", "Secreção de hormônios do metabolismo basal (T3 e T4) / Tecido Epitelial Glandular Folicular", "Produção de adrenalina para lutar ou fugir / Tecido Nervoso Modificado (Medula Adrenal)", "Produção de Enzimas digestivas serosas / Tecido Epitelial Glandular Exócrino Acinar"], 
            correct: "Produzir Paratormônio (PTH) para aumentar o nível de cálcio sanguíneo / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "Essas características duplas (Principais + Oxífilas) arranjadas em densos cordões diagnosticam de imediato a paratireoide, a maestra da calcemia do corpo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (1).jpeg", 
            text: "Cavidades vesiculares esféricas e variadas margeadas por uma borda celular única e repletas de um gel denso homogêneo rosa. Qual é este órgão? Especifique o tecido que delimita esse fluido coloidal.", 
            options: ["Glândula Tireoide / Tecido Epitelial Cúbico Simples (Folicular)", "Glândula Hipófise (Intermédia) / Tecido Epitelial Cilíndrico Estratificado", "Mama em lactação / Tecido Epitelial Cúbico Estratificado", "Vesícula Biliar / Tecido Epitelial Cilíndrico Simples com Microvilosidades"], 
            correct: "Glândula Tireoide / Tecido Epitelial Cúbico Simples (Folicular)", 
            explanation: "As células foliculares adotam o aspecto cúbico quando o ritmo metabólico tireoidiano está normofuncional, envolvendo a estocagem maciça de glicoproteínas (tiroglobulina)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40.jpeg", 
            text: "A enorme faixa mediana destacada exibe células pálidas empilhadas como longas fitas lineares perpendiculares à cápsula. Qual é a principal função desta zona celular? Especifique o tecido base.", 
            options: ["Secreção de Glicocorticoides induzida pelo ACTH hipofisário / Tecido Epitelial Glandular Endócrino Cordonal", "Produção de Mineralocorticoides autônoma pela renina / Tecido Epitelial Glandular Endócrino Glomerular", "Secreção intensa de Catecolaminas neurotrópicas / Tecido Nervoso Neuroendócrino", "Ativação parassimpática intestinal / Tecido Muscular Liso"], 
            correct: "Secreção de Glicocorticoides induzida pelo ACTH hipofisário / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A Zona Fasciculada da glândula adrenal corresponde a 80% do córtex e empilha espongiócitos que fabricam intensamente cortisol anti-estresse sob comando superior." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (5).jpeg", 
            text: "Uma imponente barreira eosinofílica e anucleada forma a superfície apical do corte gengival/palatal (6). Qual é a principal função desta camada de revestimento? Especifique o tipo de tecido geral da mucosa.", 
            options: ["Proteção contra forte atrito mastigatório local e invasão microbiana / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Filtração passiva de fluidos salivares / Tecido Epitelial Pseudoestratificado Cilíndrico Ciliado", "Percepção refinada de texturas e sabores químicos / Tecido Epitelial Estratificado Pavimentoso Não-Queratinizado", "Impermeabilidade a líquidos ácidos corrosivos / Tecido Epitelial de Transição Urotelial"], 
            correct: "Proteção contra forte atrito mastigatório local e invasão microbiana / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "A ortoqueratinização do palato duro assegura um epitélio pavimentoso altamente abrasivo e impermeável ao esmagamento rígido da comida contra o osso." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (4).jpeg", 
            text: "O ponteiro foca em formações redondas densas espalhadas num fundo tubular. Qual é este órgão inteiro? Especifique a natureza do tecido formando o tufo interior das esferas (Glomérulo).", 
            options: ["Rim / Tecido Epitelial Pavimentoso Simples Fenestrado (Endotélio Capilar)", "Linfonodo / Tecido Conjuntivo Reticular e Linfócitos Nodulares", "Ovário / Tecido Epitelial Cúbico Simples a Estratificado (Granulosa)", "Baço / Tecido Epitelial Glandular Cordonal Vermelho"], 
            correct: "Rim / Tecido Epitelial Pavimentoso Simples Fenestrado (Endotélio Capilar)", 
            explanation: "Essas massas microscópicas renais revelam os glomérulos, cuja formatação é um ninho de capilares intensamente fenestrados permitindo o ultrafiltrado maciço sem perda de hemácias." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (3).jpeg", 
            text: "Pontiagudas e repetitivas invaginações se aprofundam na área rosa inferior. Qual é a principal função destas cristas epidérmicas descendentes? Especifique o tecido no qual elas mergulham.", 
            options: ["Maximizar a adesão, superfície de troca e evitar forças de cisalhamento do tegumento / Tecido Conjuntivo Frouxo a Denso Não Modelado (Derme)", "Garantir a expulsão do suor apócrino das glândulas profundas / Tecido Conjuntivo Reticular", "Produzir queratina rígida para unhas e calos / Tecido Ósseo Compacto", "Permitir o escorregamento dos órgãos vizinhos nas fáscias / Tecido Adiposo Unilocular"], 
            correct: "Maximizar a adesão, superfície de troca e evitar forças de cisalhamento do tegumento / Tecido Conjuntivo Frouxo a Denso Não Modelado (Derme)", 
            explanation: "Sem as cristas epidérmicas cravadas nas papilas dérmicas conjuntivas, qualquer atrito severo arrancaria a epiderme em uma única placa descamativa." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (2).jpeg", 
            text: "Gigantescas lamelas fibrocelulares concêntricas mimetizando as folhas de uma cebola dissecada transversalmente. Qual é esta estrutura mecanorresceptora? Especifique o tecido das suas cápsulas lameladas externas.", 
            options: ["Corpúsculo de Vater-Pacini / Tecido Conjuntivo Especializado com células fibroblásticas modificadas (Células de Schwann lamelares perineurais)", "Corpúsculo de Meissner / Tecido Epitelial Glandular Estratificado Pavimentoso", "Nódulo de Ranvier / Tecido Muscular Liso Fibrilar", "Glomo Aórtico / Tecido Nervoso Ependimário Multipolar"], 
            correct: "Corpúsculo de Vater-Pacini / Tecido Conjuntivo Especializado com células fibroblásticas modificadas (Células de Schwann lamelares perineurais)", 
            explanation: "O Pacini atua como micro-amortecedor líquido. As camadas conjuntivo-neurais deslocam-se microscopicamente ao toque profundo/rápido para disparar a fibra no núcleo interior." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (1).jpeg", 
            text: "Células secretoras da pars distalis evidenciando franca paixão pelo corante ácido rosa (eosina). Qual é a principal função metabólica promovida por um dos hormônios secretado por estas células (GH)? Especifique o tecido estrutural.", 
            options: ["Estimular diretamente e indiretamente o anabolismo proteico, mitose e crescimento esquelético corporal / Tecido Epitelial Glandular Endócrino Cordonal", "Inibir a motilidade do músculo liso uterino no parto / Tecido Nervoso Autônomo Parassimpático", "Forçar as células tubulares a reter excesso de Sódio plasmático / Tecido Epitelial Glandular Folicular", "Desencadear a ovulação via pico de Luteinizante / Tecido Epitelial Cúbico Simples Granular"], 
            correct: "Estimular diretamente e indiretamente o anabolismo proteico, mitose e crescimento esquelético corporal / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "As células somatotróficas (acidófilas) expelem Hormônio do Crescimento para alavancar a cartilagem epifisária nos ossos e massa muscular na infância/adolescência via IGf-1 hepático." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41.jpeg", 
            text: "O ponteiro destaca o emaranhado de capilares anastomosados sustentados por células mesangiais no interior da cápsula de Bowman. Esse tufo vascular, onde ocorre a filtração do sangue, é denominado:", 
            options: ["Glomérulo Renal / Tecido Epitelial Pavimentoso Modificado (Endotélio Fenestrado e Podócitos)", "Túbulo Contorcido Proximal / Tecido Epitelial Cúbico", "Mácula Densa / Tecido Epitelial Cilíndrico", "Cápsula Renal / Tecido Conjuntivo Denso"], 
            correct: "Glomérulo Renal / Tecido Epitelial Pavimentoso Modificado (Endotélio Fenestrado e Podócitos)", 
            explanation: "O glomérulo é a complexa rede capilar fenestrada localizada dentro do corpúsculo renal, responsável por vazar o ultrafiltrado plasmático sob alta pressão." 
        },

        // LOTE 6
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32.jpeg", 
            text: "Observando o corte histológico, responda: Qual é a função principal dessa estrutura pontiaguda? Além disso, especifique o tipo de tecido de revestimento.", 
            options: ["Lixar o alimento (fricção mecânica) e movê-lo / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Sentir o sabor dos alimentos (gustação) / Tecido Epitelial Pseudoestratificado com botões", "Absorver os líquidos do bolo alimentar / Tecido Epitelial Cilíndrico Simples com Cílios", "Amortecer a dentição / Tecido Conjuntivo Denso Modelado"], 
            correct: "Lixar o alimento (fricção mecânica) e movê-lo / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "Ao contrário das outras papilas linguais, as filiformes são puramente anatômico-mecânicas. Sua forte queratinização garante abrasividade sem danos à língua." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32 (1).jpeg", 
            text: "Observando as células globosas e rosas (eosinofílicas) nas glândulas, responda: Qual célula é esta? Além disso, especifique o tipo de tecido onde se encontram.", 
            options: ["Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino (Glândulas Gástricas)", "Célula Caliciforme / Tecido Epitelial Glandular Unicelular Endócrino", "Hepatócito / Tecido Epitelial Glandular Anfícrino (Cordonal)", "Célula Principal (Zimogênica) / Tecido Epitelial Glandular Exócrino (Glândulas Fúndicas)"], 
            correct: "Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino (Glândulas Gástricas)", 
            explanation: "As células parietais produzem HCl e sua rica rede de canalículos e mitocôndrias atrai intensamente o corante eosina (conferindo a cor rosa forte no tecido glandular)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32 (2).jpeg", 
            text: "Observando a grossa camada pálida superficial, responda: Qual é este órgão/região tegumentar? Além disso, especifique o tipo de tecido que a produz e forma.", 
            options: ["Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Esôfago Inferior / Tecido Epitelial Cilíndrico Pseudoestratificado Secretor", "Palato Mole e Faringe / Tecido Epitelial Estratificado Pavimentoso Sem Queratina", "Vagina (Mucosa Seca) / Tecido Epitelial Estratificado de Transição"], 
            correct: "Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "Peles muito sujeitas a traumas severos ininterruptos (palmas/plantas) produzem estrato córneo colossal (fita rosa anucleada) sobre o tecido pavimentoso de sustentação basal." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32 (3).jpeg", 
            text: "Observando as células em formato de cálice intercaladas, responda: Qual é a principal função combinada dessa barreira celular? Além disso, especifique o tipo de tecido presente.", 
            options: ["Absorver nutrientes e secretar muco lubrificante constante / Tecido Epitelial Cilíndrico Simples com Células Caliciformes e Microvilosidades", "Ciliar partículas estranhas e aquecer os gases inspirados / Tecido Epitelial Pseudoestratificado Cilíndrico Ciliado", "Digerir a celulose alimentar via pepsina de amplo espectro / Tecido Epitelial Cilíndrico Estratificado", "Detectar variações de pH no filtrado renal para ajustar fluxo / Tecido Epitelial Cúbico Alto Especializado"], 
            correct: "Absorver nutrientes e secretar muco lubrificante constante / Tecido Epitelial Cilíndrico Simples com Células Caliciformes e Microvilosidades", 
            explanation: "As caliciformes lubrificam o quimo denso para não agredir os frágeis e abundantes enterócitos (cilíndricos e microvilosos) que executam a assimilação digestiva fina." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33.jpeg", 
            text: "Observando o espesso e grande nódulo hipercorado, responda: Qual é a função principal dessa massa ovalada? Além disso, especifique o tecido conjuntivo especial subjacente.", 
            options: ["Vigilância imunológica primária contra antígenos intraluminais invasores / Tecido Conjuntivo Reticular (Preenchido por Linfócitos Nodulares)", "Contração autônoma basal da túnica mucosa rítmica / Tecido Muscular Liso Intestinal (Muscularis Mucosae)", "Secreção endócrina massiva de Peptídeo Vasoativo Intestinal / Tecido Epitelial Glandular Endócrino Folicular", "Digestão apócrina de triglicerídeos alimentares longos / Tecido Adiposo Multilocular Glandular"], 
            correct: "Vigilância imunológica primária contra antígenos intraluminais invasores / Tecido Conjuntivo Reticular (Preenchido por Linfócitos Nodulares)", 
            explanation: "Os folículos linfoides (MALT/GALT) são as bases imunes de sentinela para impedir que patógenos ingeridos pela via oral atinjam a via sanguínea. Assentam em tecido reticular." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (1).jpeg", 
            text: "Focando na estrutura indicada pela seta vermelha no triângulo conjuntivo, responda: Qual vaso vascular é este? Além disso, especifique o tipo de tecido formador de sua camada concêntrica evidente.", 
            options: ["Ramo da Artéria Hepática / Tecido Muscular Liso", "Ramo da Veia Porta / Tecido Conjuntivo Elástico Denso", "Ducto Biliar Intra-Hepático / Tecido Epitelial Cúbico Simples", "Canalículo Linfático Reticular / Tecido Epitelial Pavimentoso Simples Fenestrado"], 
            correct: "Ramo da Artéria Hepática / Tecido Muscular Liso", 
            explanation: "Na tríade portal, a artéria salta aos olhos pela espessa camada muscular cor de rosa e lúmen bem menor em relação ao grande lúmen colapsado da veia porta adjacente." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (2).jpeg", 
            text: "Observando as glândulas invaginadas em formato de tubo e a planura sem projeções (sem vilosidades), responda: Qual é este órgão? Além disso, especifique o tecido de revestimento predominante.", 
            options: ["Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Células Caliciformes", "Estômago (Fundo) / Tecido Epitelial Cilíndrico Simples Mucossecretor", "Intestino Delgado (Íleo) / Tecido Epitelial Pseudoestratificado Cilíndrico Ciliado", "Vesícula Biliar e Ductor Cístico / Tecido Epitelial Cilíndrico Estratificado Escamoso"], 
            correct: "Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Células Caliciformes", 
            explanation: "As Criptas de Lieberkühn dominam o cólon. A inexistência de vilos e a extrema profusão das células mucosas para permitir a passagem do bolo fecal sólido caracterizam tal tecido." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (3).jpeg", 
            text: "Focando nas fendas capilares tortuosas entre os cordões de tecido, responda: Qual é a função principal desses estreitos capilares? Além disso, especifique o órgão e o tecido epitelial.", 
            options: ["Promover extrema e lenta troca gasosa e metabólica celular / Fígado / Tecido Epitelial Pavimentoso Simples (Endotélio Sinusoide Descontínuo)", "Filtrar ativamente hemácias senescentes desgastadas da circulação / Baço / Tecido Epitelial Cúbico com Macrófagos Fixos", "Reabsorver 100% da glicose e aminoácidos para o plasma circulante / Rim / Tecido Epitelial Cúbico Simples com Microvilos", "Oxigenar alvéolos / Pulmão / Tecido Epitelial Pavimentoso Estratificado Respiratório"], 
            correct: "Promover extrema e lenta troca gasosa e metabólica celular / Fígado / Tecido Epitelial Pavimentoso Simples (Endotélio Sinusoide Descontínuo)", 
            explanation: "A lentidão extrema provocada pela vasta anastomose dos capilares sinusóides permite ao endotélio finíssimo entregar tudo que veio na veia porta diretamente para as enzimas do fígado." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (4).jpeg", 
            text: "Observando as digitações longas que se estendem do tubo basal, responda: Qual é a função basilar anatômica dessas projeções? Além disso, especifique o órgão e seu tecido preenchedor central.", 
            options: ["Extrema amplificação da superfície de interface contato/absorção nutritiva / Intestino Delgado / Tecido Conjuntivo Frouxo da Lâmina Própria", "Tracionar o bolo alimentar em direção ao esfíncter anal ativo / Intestino Grosso / Tecido Muscular Estriado Esquelético", "Criação de turbilhonamento fluido espumoso de muco no lúmen / Estômago Antral / Tecido Muscular Liso Contínuo", "Absorção gasosa no parênquima / Brônquios / Tecido Cartilaginoso Hialino Ciliado"], 
            correct: "Extrema amplificação da superfície de interface contato/absorção nutritiva / Intestino Delgado / Tecido Conjuntivo Frouxo da Lâmina Própria", 
            explanation: "As vilosidades são o milagre evolutivo do intestino delgado. Recheadas de conjuntivo frouxo leniente, permitem a perfusão capilar total, ampliando em centenas de vezes a área útil de captação tecidual." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (5).jpeg", 
            text: "Focando na área macroscópica em formato hexagonal apontada, responda: Qual é a identidade morfológica desse maciço perfeitamente contornado? Além disso, especifique o órgão e o tecido epitelial do qual ele é feito.", 
            options: ["Lóbulo Hepático Clássico Anatômico / Fígado / Tecido Epitelial Glandular Misto Anfícrino (Cordões de Hepatócitos radiais)", "Lóbulo Esplênico Pulposo Filtrante / Baço / Tecido Conjuntivo Reticular Linfocitário Branco", "Pirâmide de Malpighi Medular / Rim / Tecido Epitelial Cúbico Formador de Ductos Coletores e Alças", "Ácino Pancreático Mucoso / Pâncreas / Tecido Epitelial Glandular Exócrino Seromucoso Intercalado"], 
            correct: "Lóbulo Hepático Clássico Anatômico / Fígado / Tecido Epitelial Glandular Misto Anfícrino (Cordões de Hepatócitos radiais)", 
            explanation: "Com a veia central como eixo de uma roda de bicicleta, e os hepatócitos como aros irradiando para as tríades nos aros externos, a forma hexagonal deste lóbulo coordena todo o complexo tecido exócrino/endócrino do fígado." 
        },

        // LOTE 7
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.56.jpeg", 
            text: "Observando os cortes tubulares espessos contendo bordas internas felpudas borradas, responda: Qual é o órgão retratado? Além disso, especifique o tipo de tecido formador das referidas estruturas luminais túbulofiliares.", 
            options: ["Rim (Túbulos Contorcidos Proximais Corticais) / Tecido Epitelial Cúbico Simples com Microvilosidades apicais", "Fígado (Canalículos Biliares de Hering) / Tecido Epitelial Pavimentoso Simples e Liso", "Pulmão (Bronquíolos Terminais de transição) / Tecido Epitelial Cilíndrico Estratificado Ciliado e Claro", "Pâncreas (Ductos Excretores Maiores Interlobulares) / Tecido Epitelial Cilíndrico Pseudoestratificado Seco"], 
            correct: "Rim (Túbulos Contorcidos Proximais Corticais) / Tecido Epitelial Cúbico Simples com Microvilosidades apicais", 
            explanation: "As microvilosidades apicais que formam a clássica 'borda em escova' obliteram um pouco a luz do tubo, gerando uma altíssima recaptação ativa e dependente no tecido renal proximal do paciente." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55 (3).jpeg", 
            text: "Focando na seta fina voltada para a base da parede tubular complexa, responda: Qual célula está sendo primariamente apontada e ancorada nela? Além disso, especifique o tipo de tecido orgânico em que atua preeminentemente.", 
            options: ["Célula de Sertoli somática / Tecido Epitelial Estratificado Germinativo do Túbulo Seminífero Masculino", "Célula Mioide peritubular / Tecido Conjuntivo Denso Fibrilar Intersticial Glandular", "Célula Granulosa folicular ovariana / Tecido Epitelial Cúbico Estratificado Matutino do Córtex", "Macrófago Fixo Residente / Tecido Conjuntivo Frouxo do Epidídimo Enovelado Periférico"], 
            correct: "Célula de Sertoli somática / Tecido Epitelial Estratificado Germinativo do Túbulo Seminífero Masculino", 
            explanation: "As células de Sertoli não geram espermatozoides, mas as suas ramificações abraçam toda a espessura do epitélio para orquestrar e zelar pela viabilidade imunológica do tecido germinativo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55 (2).jpeg", 
            text: "Corte de cordões celulares ricamente supridos de sangue sem formar ductos. Responda: Qual é o órgão exibido recheado de células tingidas de rosa e roxo? Especifique o tecido global de sua estrutura endócrina primária.", 
            options: ["Adeno-hipófise Glândula Pituitária Anterior / Tecido Epitelial Glandular Endócrino Cordonal de Secreção Direta", "Medula da Glândula Suprarrenal ou Adrenal / Tecido Nervoso Modificado (Feocromócitos Aminérgicos)", "Paratireoide Central Secundária / Tecido Epitelial Glandular Cordonal (Células Principais Homogêneas Claras)", "Pâncreas (Ilhotas Circulares) / Tecido Epitelial Glandular Endócrino Folícular de Langerhans"], 
            correct: "Adeno-hipófise Glândula Pituitária Anterior / Tecido Epitelial Glandular Endócrino Cordonal de Secreção Direta", 
            explanation: "A maciça coloração dupla e salpicada das células basófilas e acidófilas nos cordões teciduais banhados por capilares caracteriza a poderosa adeno-hipófise mestre metabólica." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55 (1).jpeg", 
            text: "Observando o amontoado celular circular mais claro encrostado e circundado por unidades glandulares serosas ríspidas e escuras, responda: Qual é a função endócrina principal desta estrutura? Especifique o órgão e o tecido formador dessa estrutura circular isolada.", 
            options: ["Sintetizar e secretar insulina e glucagon diretamente no plasma / Pâncreas / Tecido Epitelial Glandular Endócrino Cordonal das Ilhotas", "Ultrafiltração passiva hidrostática do plasma em urina livre / Rim / Tecido Epitelial Pavimentoso Glomerular Fendido", "Contração peritubular autônoma visceral expiratória / Próstata / Tecido Muscular Liso Endócrino Fibrilar", "Depuração dos Linfócitos Imunocompetentes Ativos / Baço / Tecido Conjuntivo Reticular (Manto Linfoide e Polpa)"], 
            correct: "Sintetizar e secretar insulina e glucagon diretamente no plasma / Pâncreas / Tecido Epitelial Glandular Endócrino Cordonal das Ilhotas", 
            explanation: "Esse grupo ilhado de tecido endócrino repousa em pleno mar de tecido exócrino pancreático. As Ilhotas de Langerhans garantem que não entremos em comas hipo/hiperglicêmicos vitais." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55.jpeg", 
            text: "Observando a microscopia de unidades serosas, há focos esparsos indicando células claras flutuando sozinhas invaginadas no meio da luz escura dos ácinos serosos glandulares. Qual célula intra-acinar é esta? Especifique o órgão e o seu tecido primordial formador.", 
            options: ["Célula Centroacinar ductal intra-luminal / Pâncreas / Tecido Epitelial Glandular Exócrino Acinoso Tubo-Seroso de Fundo Cego", "Célula Enteroendócrina difusa gástrica / Estômago Fúndico / Tecido Epitelial Cilíndrico Simples de Glândulas Tubulares Retas", "Célula C (Parafolicular) difusa inter-glandular / Tireoide / Tecido Epitelial Glandular Endócrino Folicular Vesicular Redondo", "Célula Mioepitelial Periférica abraçadora de unidades / Glândula Sudorípara Apócrina / Tecido Muscular Liso Epitelióide Basal"], 
            correct: "Célula Centroacinar ductal intra-luminal / Pâncreas / Tecido Epitelial Glandular Exócrino Acinoso Tubo-Seroso de Fundo Cego", 
            explanation: "As células centroacinares marcam o epitélio do ducto invaginando a parede acinar, constituindo uma prova cabal tecidual diagnóstica inconfundível para o tecido pancreático." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54 (3).jpeg", 
            text: "O recorte visualiza um glomérulo central ladeado pelas setas. Qual é a principal função histofisiológica desse compartimento delimitado pelas setas? Além disso, especifique o tecido da fina camada apontada pela seta azul do lado direito extracapilar.", 
            options: ["Conter o vazamento do ultrafiltrado plasmático impedindo extravio tecidual da urina em formação / Tecido Epitelial Pavimentoso Simples da Cápsula Parietal", "Reabsorver seletivamente todo o Sódio e Água circulante da luz / Tecido Epitelial Cúbico Simples Intersticial dos Túbulos", "Produzir eritropoietina em reposta hipóxica sanguínea sistêmica / Tecido Conjuntivo Reticular Mesangial de Suporte Imunológico", "Absorver glicose basal pela membrana apical espessa filtrante / Tecido Epitelial Cilíndrico Alto Podocitário Modificado Parietal"], 
            correct: "Conter o vazamento do ultrafiltrado plasmático impedindo extravio tecidual da urina em formação / Tecido Epitelial Pavimentoso Simples da Cápsula Parietal", 
            explanation: "Sem a fina e robusta camada pavimentosa de tecido (folheto parietal capsular de Bowman), o rim apenas vilaria um vazamento sanguíneo cego sem fluxo condicionado ordenado e pressórico tubular." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54 (2).jpeg", 
            text: "O corte topográfico ilustra transição dramática da anatomia (linha azul cortical para amarela medular) ao lado esquerdo da linha divisória. Qual é a justificativa de separar estes limites com o nome Córtex e Medula Renal? Especifique o tecido dos túbulos perfeitamente dispostos longitudinalmente na área amarela inferior medular rebaixada.", 
            options: ["O Córtex possui toda a zona vascular filtrante com os glomérulos corpúsculares densos, enquanto a medula possui apenas longas e finas tubulações desprovidas de corpúsculos / Tecido Epitelial Cúbico a Cilíndrico Simples de Ductos Retos", "O Córtex concentra urina passivamente com alças em U puras exclusivas e finas, enquanto a Medula filtra o sangue maciçamente e metabolicamente ativa / Tecido Epitelial Pseudoestratificado Denso", "O Córtex possui tecido glandular endócrino exclusivo, enquanto a Medula armazena a urina transitória para a pelve esticável sem modificar fluxo hidroeletrolítico vital / Tecido Muscular Liso Puro", "Nenhuma distinção estrutural histológica, a divisão serve à fisiologia bruta grosseira não baseada no parênquima epitelial / Tecido Conjuntivo Frouxo Fibrilar"], 
            correct: "O Córtex possui toda a zona vascular filtrante com os glomérulos corpúsculares densos, enquanto a medula possui apenas longas e finas tubulações desprovidas de corpúsculos / Tecido Epitelial Cúbico a Cilíndrico Simples de Ductos Retos", 
            explanation: "Ao olho nú sob a lente, a simples observação de uma bolinha glomerular vermelha elimina a medula e sela o diagnóstico de tecido cortical reativo sem titubeio nenhum do histologista avaliador da peça." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54 (1).jpeg", 
            text: "Corte mostrando bolhas amorfas e acelulares formadoras de vesículas residuais isolantes no centro glândular. Responda: Qual é o órgão onde se alocam esses cistos? Além disso, especifique o tecido embrionário derivado que compõe a zona de fenda intermédia em contato basofílico cístico primário à esquerda.", 
            options: ["Glândula Hipófise (Porção Intermédia Pituitária) / Tecido Epitelial Glandular Cúbico Derivado do Ectoderma Oral Primitivo de Rathke", "Glândula Pineal (Holocefálica Central) / Tecido Nervoso Mesenquimal Pial Modificado Com Acúmulo Calco-Fosfático", "Glândula Paratireoide Inferior Bilateral Oculta / Tecido Epitelial Cordonal Derivado da Faringe Fibrilar e Bolsas Branquiais Enzimáticas", "Glândula Tireoide Lóbulo Piramidal Mediano Anômalo / Tecido Epitelial Folicular Cúbico Alto e Cilíndrico Derivado Sublingual e Duto Tireoglosso Fibrado"], 
            correct: "Glândula Hipófise (Porção Intermédia Pituitária) / Tecido Epitelial Glandular Cúbico Derivado do Ectoderma Oral Primitivo de Rathke", 
            explanation: "A boca migratória fetal que subiu para o encéfalo em formação deixa esse legado anatômico visual na forma da pars intermédia repleta de fluido não-glandular tecidual cístico residual oco." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54.jpeg", 
            text: "Parede oca sem qualquer glândula fúndica própria invaginada ou mesmo vilosidade estrita isolada intestinal, mas fortemente preagueada macroscopicamente sobre sua fibra muscular compacta exposta inferiormente. Qual é este órgão? Especifique o tecido epitelial absorvível exposto.", 
            options: ["Vesícula Biliar Sacular Concêntrica Isolada Sem Submucosa Lassa / Tecido Epitelial Cilíndrico Simples Revestidor Sem Caliciformes Absorvível Ricamente Irrigado", "Bexiga Urinária Distensível Elástica Contráctil / Tecido Epitelial de Transição (Urotelial Cístico Multiestratificado Modulável) Protetivo Tóxico", "Duto Deferente Epididimário Reprodutor Alongado Tubo / Tecido Epitelial Pseudoestratificado Cilíndrico com Longos Estereocílios Apicais Fibrilares Não Móveis Espessos", "Esôfago Superior Contínuo Torácico Proximal Sem Muscular Endócrina / Tecido Epitelial Estratificado Pavimentoso Não Queratinizado Macio Descendente Rápido"], 
            correct: "Vesícula Biliar Sacular Concêntrica Isolada Sem Submucosa Lassa / Tecido Epitelial Cilíndrico Simples Revestidor Sem Caliciformes Absorvível Ricamente Irrigado", 
            explanation: "Essas invaginações fakes e confusas chamam-se pseudovilosidades epiteliais mucosas de Rokitansky e revelam a vesícula e seu epitélio simples desidratador do suco hepático concentrando bile lipofílica." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.53.jpeg", 
            text: "Um agrupamento massivo de células triangulares que exibem fortíssima e evidente dupla coloração subcelular: bases roxo-escuras (basófilas por intenso RER proteico) e ápices intensamente rosados com grânulos isolados aglutinados (eosinófilos zimogênicos) de contornos definidos em cacho de uva cego apical central nulo. Qual é o órgão de secreção massiva em foco? Especifique o tipo de tecido das unidades circulares serosas piramidais predominantes unidas firmes basolaterais acinares exócrinas ativas digestivas puras.", 
            options: ["Pâncreas Exócrino / Tecido Epitelial Glandular Exócrino Acinoso Seroso de Fundo Cego (Células Acinares Pancreáticas Zimogênicas) Puro", "Fígado Endócrino e Exócrino Anfícrino Misto Irradiado / Tecido Epitelial Glandular Misto Cordonal Hepático Difuso (Hepatócitos Reticulares Maciços) e Glicogênicos Ricos", "Glândula Salivar Sublingual Mista Tubulo-Acinosa Mucosa e Serosa Pálida Esbranquiçada Dilatada Oca / Tecido Epitelial Glandular Exócrino Mucoso (Ácinos Claros de Crescente Seroso Lateral Expresso e Ductos Aparentes Distais)", "Estômago Fúndico Principal e Parietal / Tecido Epitelial Glandular Exócrino Tubular Reto Paralelo Aberto Basal Contínuo (Células Acidófilas Soltas Dispersas Parietais Profundas Cegas Ricas Mitocondriais Oxi)"], 
            correct: "Pâncreas Exócrino / Tecido Epitelial Glandular Exócrino Acinoso Seroso de Fundo Cego (Células Acinares Pancreáticas Zimogênicas) Puro", 
            explanation: "Esse aspecto dual (roxa embaixo, rosa em cima) no mesmo microscópio é a assinatura de fábrica de altíssima escala do Pâncreas exócrino, que cospe enzimas proteicas o dia inteiro após uma dieta de gorduras ricas e massivas." 
        },

        // LOTE 8 (As 10 Lâminas Inéditas)
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.02.jpeg", 
            text: "Observando a superfície epitelial da imagem à esquerda, nota-se uma projeção em formato de cogumelo (com botões associados), enquanto à direita observam-se clássicas pontas queratinizadas. Focando na estrutura em formato de cogumelo, responda: Qual é a estrutura, o órgão, a função e o tecido de revestimento?", 
            options: ["Papila Fungiforme / Língua / Percepção de paladar e tato / Tecido Epitelial Estratificado Pavimentoso (com botões gustativos)", "Papila Filiforme / Língua / Mastigação / Tecido Epitelial Estratificado Pavimentoso Fortemente Queratinizado", "Prega Gástrica / Estômago / Secreção de suco gástrico / Tecido Epitelial Cilíndrico Simples", "Vilosidade / Duodeno / Absorção fina / Tecido Epitelial Cilíndrico com Caliciformes"], 
            correct: "Papila Fungiforme / Língua / Percepção de paladar e tato / Tecido Epitelial Estratificado Pavimentoso (com botões gustativos)", 
            explanation: "As papilas fungiformes têm ápice dilatado (cogumelo) e base estreita, e abrigam botões gustativos na superfície dorsal, ao contrário das pontiagudas papilas filiformes à direita." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00.jpeg", 
            text: "Observa-se uma estrutura circular gigante afundada na mucosa, ladeada por um profundo sulco (fosso) e glândulas serosas profundas. Identifique a estrutura, o órgão, sua função e o tecido da glândula associada inferior.", 
            options: ["Papila Circunvalada e Glândulas de Von Ebner / Língua / Lavar o fosso para novas percepções gustativas / Tecido Epitelial Glandular Exócrino Seroso", "Amígdala Palatina e Criptas / Faringe / Defesa imunológica local / Tecido Epitelial Glandular Endócrino", "Corpúsculo Gustativo Frontal / Lábio / Detecção de sabores doces / Tecido Nervoso Especializado", "Papila Foliada Lateral / Mucosa Jugal / Fricção mecânica salivar / Tecido Epitelial Glandular Mucoso"], 
            correct: "Papila Circunvalada e Glândulas de Von Ebner / Língua / Lavar o fosso para novas percepções gustativas / Tecido Epitelial Glandular Exócrino Seroso", 
            explanation: "As grandes papilas circunvaladas possuem o fosso onde o alimento se dissolve. As glândulas serosas de Von Ebner secretam fluido contínuo para limpar o fosso e liberar os botões gustativos para novos sabores." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (4).jpeg", 
            text: "A letra 'A' aponta para uma mucosa formando um complexo e intrincado labirinto de pregas extremamente ramificadas direcionadas ao lúmen central. Identifique o órgão, a função principal dessa região específica e o tecido do epitélio de revestimento.", 
            options: ["Tuba Uterina (Ampola) / Sistema Genital Feminino (Fecundação e transporte mecânico) / Tecido Epitelial Cilíndrico Simples Ciliado", "Vesícula Seminal / Sistema Genital Masculino (Produção de frutose e prostaglandinas) / Tecido Epitelial Pseudoestratificado", "Ducto Deferente / Sistema Genital Masculino (Condução rápida de sêmen) / Tecido Epitelial Estratificado Cúbico", "Vesícula Biliar / Sistema Digestório (Armazenamento de bile lipofílica) / Tecido Epitelial Cúbico Alto Liso"], 
            correct: "Tuba Uterina (Ampola) / Sistema Genital Feminino (Fecundação e transporte mecânico) / Tecido Epitelial Cilíndrico Simples Ciliado", 
            explanation: "O labirinto mucoso exuberante é típico da ampola da tuba uterina. O epitélio ciliar bate ativamente para transportar o oócito ou o zigoto rumo à cavidade do útero." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (3).jpeg", 
            text: "Círculos azuis delimitam células com núcleo basal, citoplasma intensamente basófilo na base (roxo) e apicalmente eosinófilo (rosa) preenchido. Identifique a estrutura formadora, órgão, função orgânica e o tecido em que se enquadra.", 
            options: ["Ácino Seroso / Pâncreas / Síntese e secreção de enzimas digestivas ativas / Tecido Epitelial Glandular Exócrino Acinoso", "Ácino Mucoso / Glândula Sublingual / Lubrificação salivar pura / Tecido Epitelial Glandular Exócrino Tubuloacinoso", "Folículo Tireoidiano / Tireoide / Armazenamento de T3 e T4 coloidal / Tecido Epitelial Glandular Endócrino Vesicular", "Cordão Celular Paratireoideo / Paratireoide / Secreção de PTH / Tecido Epitelial Glandular Endócrino Cordonal"], 
            correct: "Ácino Seroso / Pâncreas / Síntese e secreção de enzimas digestivas ativas / Tecido Epitelial Glandular Exócrino Acinoso", 
            explanation: "As células acinares do pâncreas são o ápice do modelo de exportação proteica: o RER basal cria uma 'mancha' roxa e os grânulos zimogênicos apicais (proteínas) coram-se de rosa (eosina)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00 (1).jpeg", 
            text: "A letra 'A' (e contorno negro) aponta para um aglomerado pálido celular encapsulado em meio a um mar de ácinos serosos escuros digestivos. Identifique a estrutura, órgão, função principal e tecido histológico exato.", 
            options: ["Ilhota de Langerhans / Pâncreas / Secreção de insulina e glucagon para o sangue / Tecido Epitelial Glandular Endócrino Cordonal", "Glomérulo Renal de Malpighi / Rim / Ultrafiltração de plasma sob alta pressão / Tecido Epitelial Pavimentoso Fenestrado", "Corpúsculo de Hassall Tímico / Timo / Seleção negativa de células T agressivas / Tecido Conjuntivo Reticular Glial", "Folículo Linfoide Germinativo / Baço / Proliferação e memória de linfócitos B / Tecido Conjuntivo Frouxo Nodular"], 
            correct: "Ilhota de Langerhans / Pâncreas / Secreção de insulina e glucagon para o sangue / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A Ilhota pancreática é um micro-órgão endócrino isolado e pálido flutuando no denso e escuro tecido exócrino seroso. Regula unicamente os picos e vales da glicemia." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01.jpeg", 
            text: "A letra 'A' indica um grande vaso solitário no qual convergem inúmeros espaços vasculares tortuosos finos. Identifique a estrutura vascular central, o órgão em foco, a função hemo-dinâmica e o tecido de revestimento interno do vaso.", 
            options: ["Veia Centro-lobular / Fígado / Drenagem centrípeta final do sangue dos sinusoides / Tecido Epitelial Pavimentoso Simples (Endotélio)", "Artéria Centro-Folicular Branca / Baço / Distribuição arterial sob pressão esplênica / Tecido Muscular Liso Esfincteriano", "Ducto Excretor Intralobular Central / Pâncreas / Coleta do suco pancreático final / Tecido Epitelial Cúbico Simples", "Arteríola Eferente Glomerular / Rim / Retirada do sangue não filtrado do glomérulo / Tecido Epitelial Cilíndrico Alto"], 
            correct: "Veia Centro-lobular / Fígado / Drenagem centrípeta final do sangue dos sinusoides / Tecido Epitelial Pavimentoso Simples (Endotélio)", 
            explanation: "A veia central repousa no meio do lóbulo hepático recolhendo o sangue que escorreu pelos sinusoides hepáticos (onde ocorreu a limpeza e metabolismo)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (2).jpg", 
            text: "A região pontilhada no centro da imagem exibe ductos e vasos de diferentes calibres cercados por fibras. 'A', 'B' e 'C' apontam o parênquima. Identifique a região pontilhada central, o órgão, a função geral e o tecido que suporta essas vias.", 
            options: ["Tríade Portal / Fígado / Distribuição de sangue oxigenado, sangue rico em nutrientes e coleta de bile / Tecido Conjuntivo Frouxo a Denso", "Espaço de Disse / Fígado / Armazenamento de Vitamina A e Fator Endotelial / Tecido Adiposo Multilocular", "Hilo Renal Profundo / Rim / Entrada da artéria e saída de urina e veia renal / Tecido Conjuntivo Denso Modelado", "Polpa Branca Foliada / Baço / Filtragem imunológica exclusiva do ferro / Tecido Cartilaginoso Elástico"], 
            correct: "Tríade Portal / Fígado / Distribuição de sangue oxigenado, sangue rico em nutrientes e coleta de bile / Tecido Conjuntivo Frouxo a Denso", 
            explanation: "O espaço porta contém os clássicos componentes da tríade portal. O tecido conjuntivo deste espaço fornece o suporte mecânico essencial para essas três vias vitais." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (1).jpg", 
            text: "A letra 'A' (e o colchete negro) destaca uma estrutura tubular específica pertencente à tríade portal, revestida por células epiteliais visivelmente arredondadas e de luz clara. Identifique a estrutura, órgão, função direcional e o tecido exato do tubo.", 
            options: ["Ducto Biliar Intra-hepático / Fígado / Drenagem centrífuga da bile rumo ao ducto hepático comum / Tecido Epitelial Cúbico Simples", "Ramo da Veia Porta Fina / Fígado / Traz sangue desoxigenado rico em nutrientes da digestão intestinal / Tecido Epitelial Pavimentoso Simples", "Arteríola Hepática Nutritiva / Fígado / Sangue oxigenado a alta pressão sistêmica / Tecido Muscular Liso Múltiplo", "Capilar Linfático Calibroso / Fígado / Drenagem coloidal e imune de extravasamentos / Tecido Epitelial Pseudoestratificado"], 
            correct: "Ducto Biliar Intra-hepático / Fígado / Drenagem centrífuga da bile rumo ao ducto hepático comum / Tecido Epitelial Cúbico Simples", 
            explanation: "Na tríade portal, apenas o ducto biliar se revela perfeitamente circular ou ovalado e ladeado por um belíssimo colar de pérolas formador do seu epitélio cúbico simples basofílico." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00 (2).jpg", 
            text: "A letra 'A' aponta um vaso central, enquanto 'B' e 'C' apontam cordões celulares e fendas vasculares. Focando na célula majoritária formadora dos cordões (B), identifique-a, o órgão de residência, sua função bioquímica e seu tecido estrutural.", 
            options: ["Hepatócito / Fígado / Detoxificação, síntese de proteínas plasmáticas e produção de bile exócrina / Tecido Epitelial Glandular Anfícrino Cordonal", "Célula Acinar Sérica / Pâncreas / Síntese de suco pancreático ativador e digestivo / Tecido Epitelial Glandular Exócrino Acinoso Seroso", "Célula Principal Gástrica / Estômago / Secreção de Lipase e Pepsinogênio ácido ativável / Tecido Epitelial Glandular Exócrino Tubular Reto", "Espongiocito Cortical / Suprarrenal Adrenal / Produção estimulada de Cortisol em fendas radiais / Tecido Epitelial Glandular Endócrino Fasciculado"], 
            correct: "Hepatócito / Fígado / Detoxificação, síntese de proteínas plasmáticas e produção de bile exócrina / Tecido Epitelial Glandular Anfícrino Cordonal", 
            explanation: "O hepatócito (B) é a célula mais versátil do corpo. Disposto em fileiras banhadas pelos capilares sinusoides (C) ao longo da veia central (A), possui dupla função glandular endócrina e exócrina (anfícrino)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00 (3).jpg", 
            text: "A imagem em baixo aumento evidencia prismas poligonais distintos separados de forma incrivelmente demarcada por grossas faixas nítidas de tecido conjuntivo inter-estrutural. Identifique a unidade estrutural inteira, o órgão clássico em que isso ocorre naturalmente e sua classificação tecidual principal isolada.", 
            options: ["Lóbulo Hepático Clássico (Fígado de Porco) / Fígado / Metabolismo e processamento do fluxo veno-arterial portal / Tecido Epitelial Glandular Anfícrino (Parênquima Central Isolado)", "Lóbulo Esplênico Pulposo (Baço Humano) / Baço / Destruição seletiva de antígenos maciços humorais circulantes e reciclagem / Tecido Conjuntivo Reticular Nodular Denso", "Corpúsculo Cístico Renal (Rim de Camundongo) / Rim / Fenda capsular e glomerular aglomerada para excreção final / Tecido Epitelial Pavimentoso Modificado Estrito", "Ácino Adiposo Multilocular Glandular (Pele de Porco) / Hipoderme Tegumentar / Termogênese celular fria basal / Tecido Adiposo Multilocular Lobulado"], 
            correct: "Lóbulo Hepático Clássico (Fígado de Porco) / Fígado / Metabolismo e processamento do fluxo veno-arterial portal / Tecido Epitelial Glandular Anfícrino (Parênquima Central Isolado)", 
            explanation: "Ao contrário do humano, o fígado suíno (de porco) deposita septos inteiros e contínuos de tecido conjuntivo entre os lóbulos clássicos, tornando a demarcação hexagonal uma visão perfeita de sala de aula histológica microscópica." 
        }
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