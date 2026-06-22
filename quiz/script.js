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
        { text: "EXTRA 01. (Digestório - Difícil) O espaço de Disse (espaço perissinusoidal) no fígado localiza-se entre os hepatócitos e o endotélio sinusoide. Uma célula importante residente neste espaço, responsável por armazenar vitamina A e, em casos de cirrose, transdiferenciar-se para secretar colágeno (fibrose), é a:", options: ["Célula de Ito (Célula Estrelada Hepática)", "Célula de Kupffer", "Hepatócito perilobular", "Célula endotelial fenestrada"], correct: "Célula de Ito (Célula Estrelada Hepática)", explanation: "As Células de Ito estocam lipídios (Vitamina A). Em processos cirróticos, passam a sintetizar colágeno." },
        { text: "EXTRA 02. (Digestório - Médio) Sobre as glândulas gástricas, a célula responsável pela secreção de fator intrínseco (essencial para vitamina B12) e a célula que secreta gastrina são:", options: ["Célula Parietal e Célula G", "Célula Principal e Célula G", "Célula Mucosa do colo e Célula G", "Célula Principal e Enterocromafim"], correct: "Célula Parietal e Célula G", explanation: "Células parietais (oxínticas) produzem HCl e fator intrínseco. Células G secretam gastrina." },
        { text: "EXTRA 03. (Endócrino - Difícil) O trato hipotálamo-hipofisário transporta hormônios para a neuro-hipófise. Os corpos celulares dos neurônios que produzem ADH e Ocitocina estão nos núcleos:", options: ["Supraóptico e Paraventricular", "Ventromedial e Arqueado", "Supraquiasmático e Pré-óptico", "Tuberal e Mamilar"], correct: "Supraóptico e Paraventricular", explanation: "Supraóptico sintetiza principalmente ADH, e paraventricular sintetiza principalmente ocitocina." },
        { text: "EXTRA 04. (Endócrino - Médio) Na suprarrenal (adrenal), a camada do córtex responsável pela produção de mineralocorticoides (como aldosterona) e sua regulação ocorrem na:", options: ["Zona Glomerulosa, regulada pela Angiotensina II e Potássio", "Zona Fasciculada, regulada pelo ACTH", "Zona Reticular, regulada pelo ACTH", "Medula, regulada pelo Simpático"], correct: "Zona Glomerulosa, regulada pela Angiotensina II e Potássio", explanation: "A zona glomerulosa é controlada primariamente pelo sistema Renina-Angiotensina-Aldosterona." },
        { text: "EXTRA 05. (Pele e Anexos - Difícil) Os melanócitos possuem uma origem embriológica peculiar e localização estrita. Identifique-as:", options: ["Origem na crista neural, localizados na camada basal", "Origem na mesoderme, localizados na camada espinhosa", "Origem no ectoderma de revestimento, derme papilar", "Origem no endoderma, junção dermoepidérmica"], correct: "Origem na crista neural, localizados na camada basal", explanation: "Melanócitos migram da crista neural durante a embriogênese e se instalam no estrato basal da epiderme." },
        { text: "EXTRA 06. (Pele e Anexos - Médio) Na epiderme, as Células de Langerhans desempenham papel imune. Sua principal função e localização predominante são:", options: ["Apresentação de antígenos (Células dendríticas) / Camada espinhosa", "Percepção tátil (Mecanorreceptores) / Camada basal", "Produção de queratina / Camada granulosa", "Proteção UV / Camada córnea"], correct: "Apresentação de antígenos (Células dendríticas) / Camada espinhosa", explanation: "Macrófagos especializados que infiltram o estrato espinhoso para vigiar invasões microbianas." },
        { text: "EXTRA 07. (Genital Masculino - Médio) A barreira hemato-testicular isola as células germinativas. Ela é formada principalmente por:", options: ["Junções oclusivas (tight junctions) entre células de Sertoli adjacentes", "Células mioides peritubulares na lâmina própria", "Junções comunicantes entre as células de Leydig", "Glicoproteínas da túnica albugínea"], correct: "Junções oclusivas (tight junctions) entre células de Sertoli adjacentes", explanation: "As zonas de oclusão das Células de Sertoli dividem o túbulo em compartimento basal e adluminal." },
        { text: "EXTRA 08. (Genital Feminino - Difícil) O corpo lúteo se desenvolve sob influência do LH. Quais os dois tipos celulares que formam o corpo lúteo e o principal hormônio secretado?", options: ["Células granulínicas-luteínicas e teca-luteínicas / Progesterona", "Células foliculares e teca externa / Estrogênio", "Oócitos secundários e granulosa / Inibina", "Células luteínicas e hilares / Androstenediona"], correct: "Células granulínicas-luteínicas e teca-luteínicas / Progesterona", explanation: "Células da granulosa e da teca interna luteinizam e passam a secretar massivamente progesterona." },
        { text: "EXTRA 09. (Urinário - Difícil) O aparelho justaglomerular é composto pela mácula densa e células justaglomerulares. Histologicamente, as células justaglomerulares são:", options: ["Células musculares lisas modificadas da arteríola aferente que secretam renina", "Células epiteliais modificadas do túbulo contorcido distal", "Podócitos modificados que contraem o tufo capilar", "Células endoteliais fenestradas da eferente"], correct: "Células musculares lisas modificadas da arteríola aferente que secretam renina", explanation: "Substituem as fibras musculares lisas da arteríola aferente para secretar renina." },
        { text: "EXTRA 10. (Urinário - Médio) A concentração da urina ocorre nos ductos coletores sob ação do ADH. O ADH atua aumentando a permeabilidade da água translocando:", options: ["Aquaporinas para a membrana apical das células principais do ducto", "Canais de Sódio para a membrana basolateral das células intercalares", "Bombas de Prótons para as células intercalares do tipo A", "Glicoproteínas para a membrana do urotélio pélvico"], correct: "Aquaporinas para a membrana apical das células principais do ducto", explanation: "O ADH faz vesículas com Aquaporina-2 se fundirem à membrana apical das células principais." },
        { text: "EXTRA 11. (Linfático - Médio) A principal função da complexa 'barreira hemato-tímica' é:", options: ["Impedir que antígenos circulantes entrem em contato com linfócitos T em maturação na região cortical", "Filtrar os antígenos presentes na linfa aferente", "Destruir eritrócitos senescentes e reciclar ferro", "Permitir a entrada de linfócitos B para centros germinativos"], correct: "Impedir que antígenos circulantes entrem em contato com linfócitos T em maturação na região cortical", explanation: "Blinda o córtex do timo para que linfócitos T imaturos não reajam a antígenos durante sua seleção." },
        { text: "EXTRA 12. (Linfático - Difícil) Na 'circulação aberta' do baço, os capilares penicilares arteriais não se conectam aos sinusoides de forma fechada, mas sim:", options: ["Despejam o sangue nos cordões esplênicos (de Billroth), forçando as hemácias a se espremerem para os sinusoides", "Drenam o sangue diretamente para a veia trabecular", "Lançam o sangue nos vasos linfáticos eferentes", "Terminam em fundo cego dentro da cápsula esplênica"], correct: "Despejam o sangue nos cordões esplênicos (de Billroth), forçando as hemácias a se espremerem para os sinusoides", explanation: "O sangue é jogado na polpa vermelha. Hemácias velhas/rígidas ficam presas e são fagocitadas." }
    ];

    // ==========================================
    // BASE 2: LÂMINAS (75 Questões)
    // ==========================================
    const imageQuestionsData = [
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.32.jpeg", 
            text: "Qual é este órgão com projeções pontiagudas apicais e especifique o tipo de tecido de revestimento?", 
            options: ["Língua / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Esôfago / Tecido Epitelial Estratificado Pavimentoso Não-Queratinizado", "Pele Fina / Tecido Epitelial Cúbico Simples", "Intestino Grosso / Tecido Epitelial Cilíndrico Simples"], 
            correct: "Língua / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "As papilas filiformes da língua necessitam de queratina para fricção mecânica." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (3).jpeg", 
            text: "Identifique o órgão a partir da grande estrutura vascular circulada no centro. Especifique o tecido formador do endotélio.", 
            options: ["Fígado / Tecido Epitelial Pavimentoso Simples", "Pâncreas / Tecido Conjuntivo Reticular", "Baço / Tecido Epitelial Cúbico Simples", "Tireoide / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Fígado / Tecido Epitelial Pavimentoso Simples", 
            explanation: "É a veia centro-lobular do fígado, revestida por endotélio (pavimentoso simples)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (4).jpeg", 
            text: "Na tríade portal, qual a função da estrutura apontada pela seta vermelha (parede grossa)? Especifique o tecido da camada média.", 
            options: ["Fornecer sangue altamente oxigenado / Tecido Muscular Liso", "Drenar a bile produzida / Tecido Epitelial Cúbico Simples", "Trazer sangue rico em nutrientes do intestino / Tecido Conjuntivo Frouxo", "Absorver glicose / Tecido Epitelial Pavimentoso Simples"], 
            correct: "Fornecer sangue altamente oxigenado / Tecido Muscular Liso", 
            explanation: "A artéria hepática possui parede espessa de músculo liso e nutre os hepatócitos com O2." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (2).jpeg", 
            text: "Tubo digestório com profundas glândulas retas e ausência de vilosidades. Qual é este órgão e tecido?", 
            options: ["Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Caliciformes", "Intestino Delgado / Tecido Epitelial Pseudoestratificado", "Estômago / Tecido Epitelial Estratificado Pavimentoso", "Vesícula Biliar / Tecido Epitelial Cúbico Simples"], 
            correct: "Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Caliciformes", 
            explanation: "Falta de vilosidades e criptas ricas em caliciformes são clássicas do cólon." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (2).jpeg", 
            text: "Órgão com mucosa preagueada e forte camada muscular, mas sem submucosa verdadeira. Identifique o órgão e tecido.", 
            options: ["Vesícula Biliar / Tecido Epitelial Cilíndrico Simples", "Bexiga Urinária / Tecido Epitelial de Transição (Urotélio)", "Estômago / Tecido Epitelial Cilíndrico Estratificado", "Esôfago / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Vesícula Biliar / Tecido Epitelial Cilíndrico Simples", 
            explanation: "A ausência de lâmina muscular da mucosa e submucosa é o critério diagnóstico da vesícula biliar." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33.jpeg", 
            text: "Células pálidas apicais no epitélio intestinal. Qual célula é esta e seu tipo de tecido?", 
            options: ["Célula Caliciforme / Tecido Epitelial Glandular Exócrino Unicelular", "Célula de Paneth / Tecido Epitelial Glandular Endócrino", "Enterócito / Tecido Conjuntivo Mucoso", "Célula Parietal / Tecido Epitelial Glandular Multicelular"], 
            correct: "Célula Caliciforme / Tecido Epitelial Glandular Exócrino Unicelular", 
            explanation: "Células caliciformes são glândulas exócrinas unicelulares produtoras de muco." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34 (1).jpeg", 
            text: "Núcleos pálidos insinuando-se no interior de um ácino arredondado. Qual célula e o tecido em torno?", 
            options: ["Célula Centroacinar / Tecido Epitelial Glandular Exócrino Acinoso Seroso", "Célula Mioepitelial / Tecido Muscular Liso", "Hepatócito / Tecido Epitelial Glandular Misto", "Célula Mucosa do Colo / Tecido Epitelial Glandular Tubular"], 
            correct: "Célula Centroacinar / Tecido Epitelial Glandular Exócrino Acinoso Seroso", 
            explanation: "Exclusivas do pâncreas exócrino, representam o início invaginado dos ductos intercalares." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (3).jpeg", 
            text: "Maciço fortemente basofílico na submucosa intestinal. Qual a principal função e o tipo de tecido?", 
            options: ["Defesa imunológica local (MALT) / Tecido Conjuntivo Reticular com linfócitos", "Peristaltismo intestinal / Tecido Muscular Liso", "Secreção de muco alcalino / Tecido Epitelial Glandular Exócrino", "Absorção lipídica / Tecido Epitelial Cilíndrico Simples"], 
            correct: "Defesa imunológica local (MALT) / Tecido Conjuntivo Reticular com linfócitos", 
            explanation: "É um folículo linfoide (MALT), uma malha reticular povoada por linfócitos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.34.jpeg", 
            text: "Estrutura circular pálida no parênquima escuro acinar. Função principal e tecido:", 
            options: ["Regulação da glicemia sanguínea / Tecido Epitelial Glandular Endócrino Cordonal", "Produção de enzimas digestivas ativas / Tecido Epitelial Glandular Exócrino", "Filtração glomerular / Tecido Epitelial Pavimentoso Simples", "Maturação folicular / Tecido Epitelial Estratificado Cúbico"], 
            correct: "Regulação da glicemia sanguínea / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A Ilhota de Langerhans pancreática regula a glicemia através de insulina/glucagon." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (4).jpeg", 
            text: "Agrupamento epitelial no polo vascular do glomérulo. Função e tecido:", 
            options: ["Sensor osmótico de Sódio e Cloreto (Quimiorrecepção) / Tecido Epitelial Cilíndrico Simples", "Secreção de Renina / Tecido Muscular Liso Modificado", "Barreira de Filtração Plasmática / Tecido Epitelial Pavimentoso", "Reabsorção de glicose / Tecido Epitelial Cúbico com Microvilosidades"], 
            correct: "Sensor osmótico de Sódio e Cloreto (Quimiorrecepção) / Tecido Epitelial Cilíndrico Simples", 
            explanation: "A Mácula Densa monitora o fluxo tubular como um quimiorreceptor cilíndrico apinhado." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (3).jpeg", 
            text: "Corpúsculos esféricos e ductos cortados transversalmente. Órgão global e tecido dos túbulos ao redor:", 
            options: ["Rim (Região Cortical) / Tecido Epitelial Cúbico Simples", "Baço (Polpa Branca) / Tecido Conjuntivo Reticular", "Ovário (Córtex) / Tecido Epitelial Pavimentoso Simples", "Testículo (Túbulos Seminíferos) / Tecido Epitelial Estratificado Germinativo"], 
            correct: "Rim (Região Cortical) / Tecido Epitelial Cúbico Simples", 
            explanation: "A presença de corpúsculos renais diagnostica o córtex. Túbulos contorcidos possuem epitélio cúbico simples." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (2).jpeg", 
            text: "Separação morfológica entre zona de filtração e zona ductal. Qual órgão e tecido dos túbulos coletores?", 
            options: ["Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", "Suprarrenal / Tecido Epitelial Glandular Endócrino Cordonal", "Cérebro / Tecido Nervoso", "Linfonodo / Tecido Conjuntivo Reticular"], 
            correct: "Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", 
            explanation: "A transição corticomedular renal abriga túbulos que aumentam sua altura de cúbico para cilíndrico rumo à papila." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35 (1).jpeg", 
            text: "Células cilíndricas basais altas repousando na membrana basal do túbulo seminífero. Qual célula e tecido geral?", 
            options: ["Célula de Sertoli / Tecido Epitelial Estratificado Germinativo", "Espermatogônia / Tecido Epitelial Pseudoestratificado", "Célula de Leydig / Tecido Conjuntivo Frouxo", "Miofibroblasto / Tecido Muscular Liso"], 
            correct: "Célula de Sertoli / Tecido Epitelial Estratificado Germinativo", 
            explanation: "As células de Sertoli são o pilar estrutural/nutricional do epitélio germinativo testicular." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.35.jpeg", 
            text: "Cordões de núcleos com citoplasmas acidófilos e basófilos dispostos entre capilares. Qual órgão e tecido?", 
            options: ["Adeno-hipófise (Pars Distalis) / Tecido Epitelial Glandular Endócrino Cordonal", "Neuro-hipófise / Tecido Nervoso Secretor", "Córtex da Adrenal / Tecido Epitelial Glandular Fasciculado", "Glândula Pineal / Tecido Nervoso Modificado"], 
            correct: "Adeno-hipófise (Pars Distalis) / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A rica cromofilia celular (rosa e roxo) disposta em cordões é a marca da Adeno-hipófise." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (4).jpeg", 
            text: "Epitélio onde células apicais são grandes e arredondadas (guarda-chuvas) em ductos. Função e tecido:", 
            options: ["Impermeabilização e proteção contra a distensão da urina / Tecido Epitelial de Transição (Urotélio)", "Reabsorção de Sódio / Tecido Epitelial Cúbico Simples", "Condução sem estiramento / Tecido Epitelial Cilíndrico Estratificado", "Fricção / Tecido Epitelial Estratificado Pavimentoso Queratinizado"], 
            correct: "Impermeabilização e proteção contra a distensão da urina / Tecido Epitelial de Transição (Urotélio)", 
            explanation: "O Urotélio é especializado para impermeabilizar contra a urina tóxica e se achatar quando estirado." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (3).jpeg", 
            text: "Ductos transversais com células de largura/altura idênticas e núcleos esféricos centrais. Órgão e tecido:", 
            options: ["Rim / Tecido Epitelial Cúbico Simples", "Fígado / Tecido Epitelial Cilíndrico Simples", "Pâncreas / Tecido Epitelial Pavimentoso Simples", "Tireoide / Tecido Conjuntivo Frouxo"], 
            correct: "Rim / Tecido Epitelial Cúbico Simples", 
            explanation: "Túbulos coletores menores do rim demonstram morfologia perfeita do epitélio cúbico simples." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (2).jpeg", 
            text: "Massa acelular eosinofílica gigante sobre epitélio nas palmas/solas. Órgão anatômico e tecido epitelial:", 
            options: ["Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Língua / Tecido Epitelial Estratificado Pavimentoso Não-Queratinizado", "Esôfago / Tecido Epitelial Pseudoestratificado", "Unha / Tecido Conjuntivo Denso Modelado"], 
            correct: "Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "O estrato córneo gigantesco e a epiderme viável multilaminar caracterizam a pele de atrito." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.32 (1).jpeg", 
            text: "Grandes células piramidais eosinofílicas, ricas em mitocôndrias, na porção média das glândulas digestivas. Célula e tecido:", 
            options: ["Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino", "Célula Principal (Zimogênica) / Tecido Epitelial Cilíndrico Simples", "Hepatócito / Tecido Epitelial Glandular Endócrino", "Célula Caliciforme / Tecido Epitelial Glandular Unicelular"], 
            correct: "Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino", 
            explanation: "Parietais gastam energia bombeando HCl para o lúmen gástrico (daí a forte acidofilia mitocondrial)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.33 (1).jpeg", 
            text: "Mucosa erguida em longos dedos (vilosidades). Função morfológica principal e tecido do eixo:", 
            options: ["Aumentar a área de absorção / Tecido Conjuntivo Frouxo", "Produzir muco / Tecido Conjuntivo Denso", "Permitir distensão / Tecido Muscular Liso", "Hematose / Tecido Conjuntivo Reticular"], 
            correct: "Aumentar a área de absorção / Tecido Conjuntivo Frouxo", 
            explanation: "As vilosidades intestinais ampliam a absorção, possuindo eixo de conjuntivo frouxo rico em capilares." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36 (1).jpeg", 
            text: "Ductos retos invadindo perpendicularmente o córtex a partir da medula. Qual órgão anatômico e tecido dos túbulos?", 
            options: ["Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", "Fígado / Tecido Epitelial Glandular Cordonal", "Cérebro / Tecido Nervoso", "Timo / Tecido Conjuntivo Reticular"], 
            correct: "Rim / Tecido Epitelial Cúbico a Cilíndrico Simples", 
            explanation: "Raios medulares de Ferrein conduzem a urina recém-processada do córtex para as pirâmides medulares." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.36.jpeg", 
            text: "Espessa bainha fibrosa limite do parênquima renal sem função secretora. Função principal e tecido:", 
            options: ["Proteção e suporte estrutural (Cápsula Renal) / Tecido Conjuntivo Denso Não Modelado", "Secreção endócrina / Tecido Epitelial Glandular Endócrino", "Contração fluida / Tecido Muscular Liso", "Fixação do rim / Tecido Adiposo"], 
            correct: "Proteção e suporte estrutural (Cápsula Renal) / Tecido Conjuntivo Denso Não Modelado", 
            explanation: "A cápsula de conjuntivo denso blinda o rim contra patógenos e suporta pressões internas." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.37.jpeg", 
            text: "Células grandes poliédricas eosinofílicas no interstício entre túbulos seminíferos. Qual célula e tecido formador do espaço?", 
            options: ["Célula de Leydig (Intersticial) / Tecido Conjuntivo Frouxo", "Célula de Sertoli / Tecido Epitelial Estratificado", "Espermatogônia / Tecido Conjuntivo Denso", "Miofibroblasto / Tecido Muscular Liso"], 
            correct: "Célula de Leydig (Intersticial) / Tecido Conjuntivo Frouxo", 
            explanation: "Células de Leydig ficam no conjuntivo frouxo e vascularizado do interstício testicular secretando testosterona." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.37 (4).jpeg", 
            text: "A maior célula do epitélio seminífero (parada na meiose I) com núcleo grande e cromatina em grumos. Qual célula e tecido?", 
            options: ["Espermatócito Primário / Tecido Epitelial Estratificado Germinativo", "Espermatozoide / Tecido Epitelial Pseudoestratificado", "Célula Mioide / Tecido Muscular Liso", "Macrófago / Tecido Conjuntivo Frouxo"], 
            correct: "Espermatócito Primário / Tecido Epitelial Estratificado Germinativo", 
            explanation: "Espermatócitos primários permanecem muito tempo na prófase I da meiose, tornando-se muito volumosos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (4).jpeg", 
            text: "Delicada parede de camada única em meia-lua ao redor do glomérulo (Folheto parietal). Função e tecido:", 
            options: ["Reter e direcionar o ultrafiltrado para o polo tubular / Tecido Epitelial Pavimentoso Simples", "Filtrar os capilares / Tecido Epitelial Cúbico Simples", "Reabsorver glicose / Tecido Epitelial Cilíndrico com Microvilosidades", "Aumentar a pressão sistêmica / Tecido Muscular Liso"], 
            correct: "Reter e direcionar o ultrafiltrado para o polo tubular / Tecido Epitelial Pavimentoso Simples", 
            explanation: "O folheto parietal atua como um invólucro impermeável de tecido pavimentoso que captura o ultrafiltrado vazado." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (5).jpeg", 
            text: "Bolsões (cistos de Rathke) com fluido coloide na fenda da glândula pituitária. Qual órgão e tecido formador da região intermediária?", 
            options: ["Glândula Hipófise (Pars Intermedia) / Tecido Epitelial Glandular Cúbico a Cilíndrico Simples", "Tireoide / Tecido Epitelial Pavimentoso Estratificado", "Pâncreas Endócrino / Tecido Conjuntivo Mucoso", "Suprarrenal (Medula) / Tecido Nervoso Modificado"], 
            correct: "Glândula Hipófise (Pars Intermedia) / Tecido Epitelial Glandular Cúbico a Cilíndrico Simples", 
            explanation: "Cistos de Rathke marcam a pars intermédia hipofisária, formados por resquícios da bolsa ectodérmica oral." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (3).jpeg", 
            text: "Parte celular corada (direita) contrasta com porção pálida/fibrilar (esquerda). Órgão completo e tecidos (D/E):", 
            options: ["Glândula Hipófise / Tecido Epitelial Glandular Endócrino (D) e Tecido Nervoso (E)", "Rim / Tecido Epitelial Cúbico (D) e Tecido Conjuntivo (E)", "Testículo / Tecido Epitelial Germinativo (D) e Tecido Muscular (E)", "Tireoide / Tecido Glandular Folicular (D) e Tecido Adiposo (E)"], 
            correct: "Glândula Hipófise / Tecido Epitelial Glandular Endócrino (D) e Tecido Nervoso (E)", 
            explanation: "A adeno-hipófise (epitelial) e neuro-hipófise (nervosa) criam o clássico choque morfológico da glândula pituitária." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38 (1).jpeg", 
            text: "Longo ducto com células contendo estereocílios e bainha muscular. Função e tecido epitelial:", 
            options: ["Absorver os fluidos testiculares e nutrir espermatozoides / Tecido Epitelial Pseudoestratificado Cilíndrico", "Impelir espermatozoide à uretra / Tecido Epitelial de Transição", "Produzir frutose / Tecido Epitelial Cúbico Simples", "Fagocitar células / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Absorver os fluidos testiculares e nutrir espermatozoides / Tecido Epitelial Pseudoestratificado Cilíndrico", 
            explanation: "No epidídimo, os estereocílios maximizam a área de absorção fluida; o pseudoestratificado auxilia a maturação dos gametas." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.38.jpeg", 
            text: "Incontáveis perfis tubulares tortuosos com espermatozoides visíveis no lúmen. Órgão e tecido intertubular:", 
            options: ["Epidídimo / Tecido Conjuntivo Frouxo e Tecido Muscular Liso peritubular", "Ducto Deferente / Tecido Cartilaginoso Hialino", "Próstata / Tecido Conjuntivo Denso Modelado", "Túbulo Seminífero / Tecido Ósseo Esponjoso"], 
            correct: "Epidídimo / Tecido Conjuntivo Frouxo e Tecido Muscular Liso peritubular", 
            explanation: "O ducto epididimário de metros de comprimento é cortado múltiplas vezes, sustentado por conjuntivo frouxo e musculatura." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (5).jpeg", 
            text: "Massas calcificadas amorfas (areia cerebral) num estroma encefálico. Órgão e tecido base:", 
            options: ["Glândula Pineal (Epífise) / Tecido Nervoso Modificado (Neuroendócrino)", "Adeno-hipófise / Tecido Epitelial Glandular Endócrino", "Paratireoide / Tecido Conjuntivo Mucoso", "Tireoide / Tecido Epitelial Glandular Folicular"], 
            correct: "Glândula Pineal (Epífise) / Tecido Nervoso Modificado (Neuroendócrino)", 
            explanation: "A areia cerebral (corpos arenáceos) precipita classicamente entre os pinealócitos no tecido neuroendócrino." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (4).jpeg", 
            text: "Fundo neurofibrilar com manchas granulosas nas terminações axonais (Corpúsculos de Herring). Função deste órgão e tecido:", 
            options: ["Armazenar e liberar neuro-hormônios diretos no sangue / Tecido Nervoso Secretor", "Sintetizar hormônios tireotróficos / Tecido Epitelial Endócrino Cordonal", "Transmitir impulsos elétricos reflexos / Tecido Nervoso Somático", "Manter a barreira ocluída / Tecido Conjuntivo Reticular"], 
            correct: "Armazenar e liberar neuro-hormônios diretos no sangue / Tecido Nervoso Secretor", 
            explanation: "A pars nervosa hipofisária (neuro-hipófise) armazena grânulos de ADH/Ocitocina envoltos pela glia local." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (3).jpeg", 
            text: "Aglutinados epiteliais corados em rosa, roxo e transparentes. Qual célula forma a população 'Cromófoba' pálida e qual o órgão?", 
            options: ["Células em estado de repouso ou degranuladas / Glândula Adeno-hipófise", "Células secretoras de mucina ativa / Glândula Submandibular", "Células neuroendócrinas amielínicas / Glândula Pineal", "Células de sustentação basais / Bulbo Olfatório"], 
            correct: "Células em estado de repouso ou degranuladas / Glândula Adeno-hipófise", 
            explanation: "Cromófobas não fixam corante pois esvaziaram seu conteúdo hormonal ou são células tronco inativas da adeno-hipófise." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (2).jpeg", 
            text: "Linha cística coloide delimita abruptamente as partes glandular e fibrilar neurogênica. Qual órgão e tecido da parte glandular (à direita)?", 
            options: ["Glândula Pituitária (Hipófise) / Tecido Epitelial Glandular Endócrino Cordonal", "Adrenal (Suprarrenal) / Tecido Epitelial Glandular Fasciculado", "Ovário Folicular / Tecido Epitelial Cúbico Simples", "Tireoide/Paratireoide / Tecido Conjuntivo Denso Modelado"], 
            correct: "Glândula Pituitária (Hipófise) / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A justaposição de Pars Distalis, Pars Intermedia cística e Pars Nervosa é o arranjo clássico da Hipófise." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39 (1).jpeg", 
            text: "Fendas com coloide formadoras das vesículas originadas da invaginação do ectoderma oral primitivo. Estrutura e tecido interno:", 
            options: ["Cistos de Rathke / Tecido Epitelial Cúbico a Cilíndrico Baixo Simples", "Folículos da Tireoide / Tecido Epitelial Pavimentoso Estratificado", "Corpúsculos de Hassall / Tecido Epitelial Reticular", "Alvéolos Pulmonares / Tecido Epitelial Pavimentoso Simples"], 
            correct: "Cistos de Rathke / Tecido Epitelial Cúbico a Cilíndrico Baixo Simples", 
            explanation: "As vesículas da bolsa de Rathke embrionária persistem como cistos revestidos por epitélio simples e ladeados por coloide na porção intermédia da hipófise." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.39.jpeg", 
            text: "Células globosas no espaço extracelular fora da parede tubular em nichos capilares. Função das intersticiais de Leydig e tecido de suporte:", 
            options: ["Sintetizar hormônios andrógenos sob ação do LH / Tecido Conjuntivo Frouxo", "Englobar as espermatogônias e formar a barreira / Tecido Epitelial Estratificado", "Contrair a parede tubular / Tecido Muscular Estriado", "Fagocitar resíduos / Tecido Conjuntivo Denso"], 
            correct: "Sintetizar hormônios andrógenos sob ação do LH / Tecido Conjuntivo Frouxo", 
            explanation: "O conjuntivo frouxo preenche o interstício, permitindo a rica vascularização que recolhe a testosterona ali secretada." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (4).jpeg", 
            text: "Placa hipercelular no túbulo que toca o hilo vascular glomerular. Qual estrutura anatômica sensora e o tipo de tecido modificado?", 
            options: ["Mácula Densa / Tecido Epitelial Cilíndrico Simples Especializado", "Folheto Parietal / Tecido Epitelial Pavimentoso Simples", "Podócitos / Tecido Epitelial de Revestimento Modificado", "Células Mesangiais Extraglomerulares / Tecido Conjuntivo Reticular"], 
            correct: "Mácula Densa / Tecido Epitelial Cilíndrico Simples Especializado", 
            explanation: "O túbulo distal fica com células altas, finas e de núcleos apinhados no contato vascular (formando a mácula densa osmorreceptora)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (3).jpeg", 
            text: "Canais irregulares extremamente fenestrados fluindo radialmente na placa hepática. Vaso e tecido da parede:", 
            options: ["Capilar Sinusoide / Tecido Epitelial Pavimentoso Simples Endotelial (Descontínuo)", "Veia Central / Tecido Muscular Liso e Endotélio Contínuo", "Canalículo Biliar / Tecido Epitelial Cúbico Simples", "Artéria de Distribuição / Tecido Muscular Estriado"], 
            correct: "Capilar Sinusoide / Tecido Epitelial Pavimentoso Simples Endotelial (Descontínuo)", 
            explanation: "A morfologia labiríntica e fenestrada pertence aos capilares sinusoides hepáticos (para intercâmbio de grandes moléculas)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (2).jpeg", 
            text: "Ilha celular com células principais (pequenas/roxas) e oxífilas (grandes/eosinófilas). Principal função fisiológica deste órgão e tecido:", 
            options: ["Produzir Paratormônio (PTH) para aumentar o cálcio / Tecido Epitelial Glandular Endócrino Cordonal", "Secreção de T3 e T4 / Tecido Epitelial Glandular Folicular", "Produção de adrenalina / Tecido Nervoso Modificado (Medula Adrenal)", "Produção de enzimas digestivas / Tecido Epitelial Glandular Exócrino Acinar"], 
            correct: "Produzir Paratormônio (PTH) para aumentar o cálcio / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "A dualidade celular (Principais + Oxífilas) em cordões densos é o diagnóstico imediato da paratireoide." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40 (1).jpeg", 
            text: "Cavidades vesiculares esféricas margeadas por borda celular única, repletas de coloide rosa. Órgão e tecido delimitante:", 
            options: ["Glândula Tireoide / Tecido Epitelial Cúbico Simples (Folicular)", "Glândula Hipófise / Tecido Epitelial Cilíndrico Estratificado", "Mama em lactação / Tecido Epitelial Cúbico Estratificado", "Vesícula Biliar / Tecido Epitelial Cilíndrico Simples"], 
            correct: "Glândula Tireoide / Tecido Epitelial Cúbico Simples (Folicular)", 
            explanation: "A arquitetura folicular de estocagem coloide (tiroglobulina) delimitada por epitélio cúbico é estritamente tireoidiana." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.40.jpeg", 
            text: "Células pálidas empilhadas como longas fitas lineares perpendiculares à cápsula. Função da zona e tecido base:", 
            options: ["Secreção de Glicocorticoides induzida pelo ACTH / Tecido Epitelial Glandular Endócrino Cordonal (Fasciculado)", "Produção de Mineralocorticoides autônoma / Tecido Epitelial Glandular Endócrino Glomerular", "Secreção de Catecolaminas / Tecido Nervoso Neuroendócrino", "Ativação parassimpática / Tecido Muscular Liso"], 
            correct: "Secreção de Glicocorticoides induzida pelo ACTH / Tecido Epitelial Glandular Endócrino Cordonal (Fasciculado)", 
            explanation: "A Zona Fasciculada do córtex adrenal empilha espongiócitos que fabricam intensamente cortisol (glicocorticoide)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (5).jpeg", 
            text: "Imponente barreira eosinofílica anucleada formando a superfície apical do corte palatal (6). Função do revestimento e tipo de tecido mucoso:", 
            options: ["Proteção contra atrito mastigatório e invasão microbiana / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Filtração de fluidos / Tecido Epitelial Pseudoestratificado Cilíndrico Ciliado", "Percepção refinada de texturas / Tecido Epitelial Estratificado Pavimentoso Não-Queratinizado", "Impermeabilidade a urina / Tecido Epitelial de Transição"], 
            correct: "Proteção contra atrito mastigatório e invasão microbiana / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "A mucosa mastigatória do palato duro exige uma camada de ortoqueratina altamente abrasiva para lidar com os alimentos sólidos contra o osso." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (4).jpeg", 
            text: "Formações redondas densas espalhadas em fundo tubular. Órgão inteiro e tecido formador do tufo interior (Glomérulo):", 
            options: ["Rim / Tecido Epitelial Pavimentoso Simples Fenestrado (Endotélio Capilar)", "Linfonodo / Tecido Conjuntivo Reticular e Linfócitos Nodulares", "Ovário / Tecido Epitelial Cúbico Simples a Estratificado", "Baço / Tecido Epitelial Glandular Cordonal Vermelho"], 
            correct: "Rim / Tecido Epitelial Pavimentoso Simples Fenestrado (Endotélio Capilar)", 
            explanation: "O glomérulo de Malpighi (Rim) consiste num emaranhado capilar amplamente fenestrado e rodeado de podócitos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (3).jpeg", 
            text: "Pontiagudas cristas epidérmicas descendentes. Função destas invaginações e tecido onde elas mergulham:", 
            options: ["Maximizar a adesão contra forças de cisalhamento do tegumento / Tecido Conjuntivo Frouxo a Denso (Derme)", "Garantir a expulsão do suor apócrino / Tecido Conjuntivo Reticular", "Produzir queratina rígida para unhas / Tecido Ósseo Compacto", "Permitir escorregamento / Tecido Adiposo Unilocular"], 
            correct: "Maximizar a adesão contra forças de cisalhamento do tegumento / Tecido Conjuntivo Frouxo a Denso (Derme)", 
            explanation: "As cristas epidérmicas engrenam-se fisicamente nas papilas dérmicas conjuntivas, amarrando firmemente a pele fina e espessa." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (2).jpeg", 
            text: "Lamelas fibrocelulares concêntricas mimetizando folhas de cebola cortada. Estrutura mecanorreceptora e tecido das lamelas externas:", 
            options: ["Corpúsculo de Vater-Pacini / Tecido Conjuntivo Especializado com células fibroblásticas modificadas (Células perineurais)", "Corpúsculo de Meissner / Tecido Epitelial Glandular Estratificado", "Nódulo de Ranvier / Tecido Muscular Liso Fibrilar", "Glomo Aórtico / Tecido Nervoso Multipolar"], 
            correct: "Corpúsculo de Vater-Pacini / Tecido Conjuntivo Especializado com células fibroblásticas modificadas (Células perineurais)", 
            explanation: "O Corpúsculo de Pacini atua como um sensor de pressão profunda e vibração rápida incrustado na derme profunda ou na hipoderme." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41 (1).jpeg", 
            text: "Células secretoras da pars distalis evidenciando franca acidofilia (rosa). Função metabólica promovida por um de seus hormônios (GH) e tecido:", 
            options: ["Estimular anabolismo proteico, mitose e crescimento esquelético / Tecido Epitelial Glandular Endócrino Cordonal", "Inibir motilidade uterina / Tecido Nervoso Autônomo Parassimpático", "Reter excesso de Sódio plasmático / Tecido Epitelial Glandular Folicular", "Desencadear a ovulação via LH / Tecido Epitelial Cúbico Granular"], 
            correct: "Estimular anabolismo proteico, mitose e crescimento esquelético / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "Células somatotróficas e lactotróficas são as acidófilas da adeno-hipófise (estimulando o crescimento via GH e a lactação via Prolactina)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 14.48.41.jpeg", 
            text: "Emaranhado de capilares anastomosados sustentados por células mesangiais no interior da cápsula de Bowman. Tufo vascular responsável por ultrafiltração:", 
            options: ["Glomérulo Renal / Tecido Epitelial Pavimentoso Modificado (Endotélio Fenestrado e Podócitos)", "Túbulo Contorcido Proximal / Tecido Epitelial Cúbico", "Mácula Densa / Tecido Epitelial Cilíndrico", "Cápsula Renal / Tecido Conjuntivo Denso"], 
            correct: "Glomérulo Renal / Tecido Epitelial Pavimentoso Modificado (Endotélio Fenestrado e Podócitos)", 
            explanation: "Glomérulos emaranhados e recobertos pelo folheto visceral podocitário forçam a passagem de água e solutos, retendo células sanguíneas e proteínas." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32.jpeg", 
            text: "Observando o corte histológico, responda: Qual é a função principal dessa estrutura pontiaguda? Além disso, especifique o tipo de tecido de revestimento.", 
            options: ["Lixar o alimento (fricção mecânica) e movê-lo / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Sentir o sabor dos alimentos (gustação) / Tecido Epitelial Pseudoestratificado com botões", "Absorver os líquidos do bolo alimentar / Tecido Epitelial Cilíndrico Simples com Cílios", "Amortecer a dentição / Tecido Conjuntivo Denso Modelado"], 
            correct: "Lixar o alimento (fricção mecânica) e movê-lo / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "As papilas filiformes possuem ceratina dura no ápice, garantindo abrasividade tátil contínua durante a mastigação." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32 (1).jpeg", 
            text: "Observando as células globosas e eosinofílicas nas glândulas, responda: Qual célula é esta e o tipo de tecido onde se encontram?", 
            options: ["Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino (Glândulas Gástricas)", "Célula Caliciforme / Tecido Epitelial Glandular Unicelular", "Hepatócito / Tecido Epitelial Glandular Anfícrino (Cordonal)", "Célula Principal / Tecido Epitelial Glandular Exócrino (Fúndicas)"], 
            correct: "Célula Parietal (Oxíntica) / Tecido Epitelial Glandular Exócrino (Glândulas Gástricas)", 
            explanation: "A intensa acidofilia das células parietais, cheias de invaginações caniculares (canalículos) atrai a eosina marcantemente." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32 (2).jpeg", 
            text: "Observando a grossa camada pálida superficial, qual é este órgão/região tegumentar e o tipo de tecido que a produz e forma?", 
            options: ["Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", "Esôfago Inferior / Tecido Epitelial Cilíndrico Pseudoestratificado", "Palato Mole e Faringe / Tecido Epitelial Estratificado Pavimentoso Sem Queratina", "Vagina / Tecido Epitelial Estratificado de Transição"], 
            correct: "Pele Espessa (Glabra) / Tecido Epitelial Estratificado Pavimentoso Queratinizado", 
            explanation: "A pele plantar e palmar desprovida de pelos reage aos traumas produzindo uma cama hiperqueratinizada extrema visível macroscopicamente em cortes histológicos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.32 (3).jpeg", 
            text: "Células em formato de cálice intercaladas. Qual é a principal função combinada dessa barreira celular e o tipo de tecido?", 
            options: ["Absorver nutrientes e secretar muco lubrificante / Tecido Epitelial Cilíndrico Simples com Células Caliciformes e Microvilosidades", "Ciliar partículas e aquecer gases / Tecido Epitelial Pseudoestratificado Cilíndrico Ciliado", "Digerir a celulose alimentar / Tecido Epitelial Cilíndrico Estratificado", "Detectar variações de pH no filtrado renal / Tecido Epitelial Cúbico Alto"], 
            correct: "Absorver nutrientes e secretar muco lubrificante / Tecido Epitelial Cilíndrico Simples com Células Caliciformes e Microvilosidades", 
            explanation: "Enterócitos com sua borda estriada absorvem ferozmente as micromoléculas; células caliciformes unicamente expelem muscina glicoproteica protetora." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33.jpeg", 
            text: "Espesso nódulo hipercorado nas paredes de um trato. Função principal dessa massa ovalada e o tecido conjuntivo de base:", 
            options: ["Vigilância imunológica primária contra antígenos intraluminais / Tecido Conjuntivo Reticular (Preenchido por Linfócitos Nodulares)", "Contração autônoma basal da túnica mucosa / Tecido Muscular Liso Intestinal", "Secreção endócrina massiva VIP / Tecido Epitelial Glandular Endócrino", "Digestão apócrina de triglicerídeos / Tecido Adiposo Multilocular"], 
            correct: "Vigilância imunológica primária contra antígenos intraluminais / Tecido Conjuntivo Reticular (Preenchido por Linfócitos Nodulares)", 
            explanation: "Acúmulos modulares imunes (MALT/GALT) reagem precocemente a microorganismos no trato, sustentados por esqueleto de fibrilas finíssimas de colágeno tipo III (reticulares)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (1).jpeg", 
            text: "Estrutura indicada pela seta vermelha no triângulo conjuntivo (tríade). Qual vaso vascular é este e seu tecido evidente?", 
            options: ["Ramo da Artéria Hepática / Tecido Muscular Liso", "Ramo da Veia Porta / Tecido Conjuntivo Elástico Denso", "Ducto Biliar Intra-Hepático / Tecido Epitelial Cúbico Simples", "Canalículo Linfático Reticular / Tecido Epitelial Pavimentoso Fenestrado"], 
            correct: "Ramo da Artéria Hepática / Tecido Muscular Liso", 
            explanation: "Ramos capilares arteriais hepáticos da tríade exibem músculo liso robusto e formato circular com lúmen pequeno comparados aos grandes lúmens amorfos de vênulas do entorno portal." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (2).jpeg", 
            text: "Glândulas invaginadas em tubo, planura sem vilosidades. Órgão e tecido de revestimento:", 
            options: ["Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Células Caliciformes", "Estômago (Fundo) / Tecido Epitelial Cilíndrico Simples Mucossecretor", "Intestino Delgado (Íleo) / Tecido Epitelial Pseudoestratificado Cilíndrico", "Vesícula Biliar / Tecido Epitelial Cilíndrico Estratificado Escamoso"], 
            correct: "Intestino Grosso (Cólon) / Tecido Epitelial Cilíndrico Simples com Células Caliciformes", 
            explanation: "Os cólons exibem apenas túbulos retos glandulares (Criptas colônicas) e enorme carga caliciforme adaptada para compactação hidrodinâmica terminal do bolo fecal." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (3).jpeg", 
            text: "Fendas capilares tortuosas entre os cordões. Função principal, órgão e tecido epitelial:", 
            options: ["Promover extensa troca metabólica celular e retardar a drenagem / Fígado / Tecido Epitelial Pavimentoso Simples (Endotélio Sinusoide)", "Filtrar ativamente hemácias senescentes / Baço / Tecido Epitelial Cúbico", "Reabsorver glicose / Rim / Tecido Epitelial Cúbico Simples com Microvilos", "Oxigenar alvéolos / Pulmão / Tecido Epitelial Pavimentoso Estratificado"], 
            correct: "Promover extensa troca metabólica celular e retardar a drenagem / Fígado / Tecido Epitelial Pavimentoso Simples (Endotélio Sinusoide)", 
            explanation: "Canalículos sem paredes musculares puramente reticulares/endoteliais e descontínuos banham lentamente as lâminas hepatocitárias (sinusoides hepáticos)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (4).jpeg", 
            text: "Digitações longas estendidas no lúmen do tubo. Função anatômica, órgão e tecido preenchedor:", 
            options: ["Extrema amplificação da superfície absortiva / Intestino Delgado / Tecido Conjuntivo Frouxo da Lâmina Própria", "Tracionar o bolo alimentar / Intestino Grosso / Tecido Muscular Estriado", "Criação de turbilhonamento fluido espumoso / Estômago Antral / Tecido Muscular Liso Contínuo", "Absorção gasosa no parênquima / Brônquios / Tecido Cartilaginoso Hialino"], 
            correct: "Extrema amplificação da superfície absortiva / Intestino Delgado / Tecido Conjuntivo Frouxo da Lâmina Própria", 
            explanation: "As vilosidades abrigam um feixe de tecido conjuntivo frouxo leniente central com rica perfusão capilar arterial-venosa para as micro-metabolizações e absorções entéricas." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 19.53.33 (5).jpeg", 
            text: "Área em formato hexagonal apontada. Identidade morfológica, órgão e tecido epitelial formador:", 
            options: ["Lóbulo Hepático Clássico Anatômico / Fígado / Tecido Epitelial Glandular Misto Anfícrino (Cordões de Hepatócitos)", "Lóbulo Esplênico / Baço / Tecido Conjuntivo Reticular Linfocitário", "Pirâmide de Malpighi / Rim / Tecido Epitelial Cúbico", "Ácino Pancreático / Pâncreas / Tecido Epitelial Glandular Exócrino"], 
            correct: "Lóbulo Hepático Clássico Anatômico / Fígado / Tecido Epitelial Glandular Misto Anfícrino (Cordões de Hepatócitos)", 
            explanation: "Morfologia hepática em prisma poligonal com sangue fluindo das bordas (espaço porta) ao centro venoso (veia centro-lobular)." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.56.jpeg", 
            text: "Cortes tubulares espessos contendo bordas internas felpudas borradas. Órgão retratado e tecido:", 
            options: ["Rim (Túbulos Contorcidos Proximais Corticais) / Tecido Epitelial Cúbico Simples com Microvilosidades apicais", "Fígado (Canalículos de Hering) / Tecido Epitelial Pavimentoso", "Pulmão (Bronquíolos) / Tecido Epitelial Cilíndrico Ciliado", "Pâncreas (Ductos Interlobulares) / Tecido Epitelial Cilíndrico"], 
            correct: "Rim (Túbulos Contorcidos Proximais Corticais) / Tecido Epitelial Cúbico Simples com Microvilosidades apicais", 
            explanation: "O obscurecimento do lúmen e uma fortíssima acidofilia indicam os intensamente ativos túbulos proximais e sua escova apical vilositária." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55 (3).jpeg", 
            text: "Seta fina voltada para a base da parede tubular complexa. Qual célula ancorada ali e tecido atuante?", 
            options: ["Célula de Sertoli somática / Tecido Epitelial Estratificado Germinativo do Túbulo Seminífero Masculino", "Célula Mioide peritubular / Tecido Conjuntivo Denso Intersticial", "Célula Granulosa folicular / Tecido Epitelial Cúbico Estratificado", "Macrófago Fixo Residente / Tecido Conjuntivo Frouxo do Epidídimo"], 
            correct: "Célula de Sertoli somática / Tecido Epitelial Estratificado Germinativo do Túbulo Seminífero Masculino", 
            explanation: "Pilar estrutural basoluminal do seminífero, a célula de Sertoli emaranha as espermátides durante a espermiogênese atrativa." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55 (2).jpeg", 
            text: "Cordões celulares supridos de sangue sem ductos, tingidos de rosa e roxo. Órgão e tecido primário:", 
            options: ["Adeno-hipófise / Tecido Epitelial Glandular Endócrino Cordonal de Secreção Direta", "Medula da Suprarrenal / Tecido Nervoso Modificado", "Paratireoide / Tecido Epitelial Glandular Cordonal", "Pâncreas (Ilhotas) / Tecido Epitelial Glandular Endócrino Folícular"], 
            correct: "Adeno-hipófise / Tecido Epitelial Glandular Endócrino Cordonal de Secreção Direta", 
            explanation: "A adeno-hipófise tem organização em ninhos epiteliais clássicos que expelem massas hormonais controladoras diretamente à rede microvascular em torno." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55 (1).jpeg", 
            text: "Amontoado celular circular mais claro circundado por unidades serosas escuras. Função endócrina, órgão e tecido:", 
            options: ["Sintetizar insulina e glucagon no plasma / Pâncreas / Tecido Epitelial Glandular Endócrino Cordonal das Ilhotas", "Ultrafiltração passiva / Rim / Tecido Epitelial Pavimentoso Glomerular", "Contração peritubular autônoma / Próstata / Tecido Muscular Liso Endócrino", "Depuração dos Linfócitos / Baço / Tecido Conjuntivo Reticular"], 
            correct: "Sintetizar insulina e glucagon no plasma / Pâncreas / Tecido Epitelial Glandular Endócrino Cordonal das Ilhotas", 
            explanation: "Ilhotas de Langerhans abrigam células alfa, beta e delta para homeostase glicêmica total sem conexão de ductos locais excretivos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.55.jpeg", 
            text: "Células claras invaginadas flutuando no meio da luz dos ácinos serosos. Qual célula intra-acinar, órgão e tecido?", 
            options: ["Célula Centroacinar ductal intra-luminal / Pâncreas / Tecido Epitelial Glandular Exócrino Acinoso Tubo-Seroso de Fundo Cego", "Célula Enteroendócrina / Estômago / Tecido Epitelial Cilíndrico Simples", "Célula C / Tireoide / Tecido Epitelial Glandular Endócrino Folicular", "Célula Mioepitelial / Glândula Sudorípara / Tecido Muscular Liso Epitelióide"], 
            correct: "Célula Centroacinar ductal intra-luminal / Pâncreas / Tecido Epitelial Glandular Exócrino Acinoso Tubo-Seroso de Fundo Cego", 
            explanation: "Marcadoras exclusivas dos ácinos pancreáticos, produzem intensamente bicarbonato solúvel protetor." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54 (3).jpeg", 
            text: "Glomérulo central. Função histofisiológica do compartimento delimitado pelas setas e tecido da fina camada extracapilar:", 
            options: ["Conter o vazamento do ultrafiltrado plasmático / Tecido Epitelial Pavimentoso Simples da Cápsula Parietal", "Reabsorver Sódio e Água / Tecido Epitelial Cúbico Simples", "Produzir eritropoietina / Tecido Conjuntivo Reticular", "Absorver glicose / Tecido Epitelial Cilíndrico Alto Modificado"], 
            correct: "Conter o vazamento do ultrafiltrado plasmático / Tecido Epitelial Pavimentoso Simples da Cápsula Parietal", 
            explanation: "A Cápsula de Bowman parietal funciona perfeitamente como funil contínuo impermeável que abarca as gotas de plasma efluente do emaranhado malpighiano venoso/arterial capilarizado contíguo interno." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54 (2).jpeg", 
            text: "Transição anatômica córtex/medula. Justificativa da separação funcional e o tecido dos ductos rebaixados:", 
            options: ["O Córtex possui a zona vascular filtrante com os glomérulos, a medula possui apenas finas tubulações desprovidas de corpúsculos / Tecido Epitelial Cúbico a Cilíndrico Simples de Ductos Retos", "O Córtex concentra urina passivamente com alças em U puras exclusivas / Tecido Epitelial Pseudoestratificado Denso", "O Córtex possui tecido endócrino exclusivo, a Medula armazena urina transitória / Tecido Muscular Liso Puro", "Nenhuma distinção estrutural histológica, apenas visual / Tecido Conjuntivo Frouxo Fibrilar"], 
            correct: "O Córtex possui a zona vascular filtrante com os glomérulos, a medula possui apenas finas tubulações desprovidas de corpúsculos / Tecido Epitelial Cúbico a Cilíndrico Simples de Ductos Retos", 
            explanation: "Corpúsculos esféricos massivos ficam apenas corticais, enquanto colunas condutórias profundas e alças desnudas se emaranham longamente rumo ao cálice em um relevo visual de estriações sem círculos vasculares agudos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54 (1).jpeg", 
            text: "Bolhas amorfas e acelulares formadoras de vesículas residuais isolantes. Órgão, tecido embrionário e zona cística primária:", 
            options: ["Glândula Hipófise (Porção Intermédia Pituitária) / Tecido Epitelial Glandular Cúbico Derivado do Ectoderma Oral Primitivo de Rathke", "Glândula Pineal (Holocefálica Central) / Tecido Nervoso Mesenquimal Pial Modificado", "Glândula Paratireoide / Tecido Epitelial Cordonal Derivado da Faringe Fibrilar", "Glândula Tireoide Lóbulo Piramidal / Tecido Epitelial Folicular Cúbico Alto"], 
            correct: "Glândula Hipófise (Porção Intermédia Pituitária) / Tecido Epitelial Glandular Cúbico Derivado do Ectoderma Oral Primitivo de Rathke", 
            explanation: "Como marcador persistente e fóssil intra-cefálico, os lagos coloidais pituitários atestam invariavelmente a gênese subjacente tecidual adeno-bucal da estrutura vizinha da pituitária secretora endócrina final." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.54.jpeg", 
            text: "Parede fortemente preagueada macroscopicamente sobre sua fibra muscular exposta, oca e sem glândulas próprias invaginadas. Órgão e tecido epitelial:", 
            options: ["Vesícula Biliar Sacular Concêntrica Isolada Sem Submucosa / Tecido Epitelial Cilíndrico Simples Revestidor Sem Caliciformes Absorvível Ricamente Irrigado", "Bexiga Urinária Distensível Elástica / Tecido Epitelial de Transição (Urotelial)", "Duto Deferente Epididimário / Tecido Epitelial Pseudoestratificado Cilíndrico", "Esôfago Superior Contínuo Torácico / Tecido Epitelial Estratificado Pavimentoso Não Queratinizado"], 
            correct: "Vesícula Biliar Sacular Concêntrica Isolada Sem Submucosa / Tecido Epitelial Cilíndrico Simples Revestidor Sem Caliciformes Absorvível Ricamente Irrigado", 
            explanation: "Essa arquitetura corruga drasticamente a interface celular permitindo encolhimentos drásticos musculares da bolsa colescitocininica vazia." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.13.53.jpeg", 
            text: "Agrupamento massivo de células com bases roxo-escuras e ápices rosados (eosinófilos zimogênicos) em cacho de uva cego. Órgão de secreção massiva e tipo de tecido:", 
            options: ["Pâncreas Exócrino / Tecido Epitelial Glandular Exócrino Acinoso Seroso de Fundo Cego Puro", "Fígado Endócrino e Exócrino Anfícrino / Tecido Epitelial Glandular Misto Cordonal Hepático Difuso", "Glândula Salivar Sublingual Mista / Tecido Epitelial Glandular Exócrino Mucoso", "Estômago Fúndico Principal e Parietal / Tecido Epitelial Glandular Exócrino Tubular Reto Paralelo"], 
            correct: "Pâncreas Exócrino / Tecido Epitelial Glandular Exócrino Acinoso Seroso de Fundo Cego Puro", 
            explanation: "O assustador contraste de bases densamente RERianas púrpuras fabricando pro-enzimas imaturas contra as pontas lotadas de grânulos proteicos cor-de-rosa ativáveis atesta instantaneamente o pâncreas exócrino puro glandular sistêmico gástrico terminal acinar." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.02.jpeg", 
            text: "Projeção em formato de cogumelo (com botões associados) à esquerda. Estrutura, órgão, função e tecido de revestimento:", 
            options: ["Papila Fungiforme / Língua / Percepção de paladar e tato / Tecido Epitelial Estratificado Pavimentoso (com botões gustativos)", "Papila Filiforme / Língua / Mastigação / Tecido Epitelial Estratificado Pavimentoso Fortemente Queratinizado", "Prega Gástrica / Estômago / Secreção / Tecido Epitelial Cilíndrico Simples", "Vilosidade / Duodeno / Absorção / Tecido Epitelial Cilíndrico com Caliciformes"], 
            correct: "Papila Fungiforme / Língua / Percepção de paladar e tato / Tecido Epitelial Estratificado Pavimentoso (com botões gustativos)", 
            explanation: "As fungiformes destacam-se como domos vascularizados cheios de poros quimio-gustativos." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00.jpeg", 
            text: "Estrutura circular gigante afundada na mucosa, ladeada por sulco profundo e glândulas serosas profundas. Estrutura, órgão, função e glândula associada:", 
            options: ["Papila Circunvalada e Glândulas de Von Ebner / Língua / Lavar o fosso para novas percepções gustativas / Tecido Epitelial Glandular Exócrino Seroso", "Amígdala Palatina e Criptas / Faringe / Defesa imunológica / Tecido Epitelial Glandular Endócrino", "Corpúsculo Gustativo / Lábio / Detecção de sabores / Tecido Nervoso Especializado", "Papila Foliada / Mucosa Jugal / Fricção mecânica / Tecido Epitelial Glandular Mucoso"], 
            correct: "Papila Circunvalada e Glândulas de Von Ebner / Língua / Lavar o fosso para novas percepções gustativas / Tecido Epitelial Glandular Exócrino Seroso", 
            explanation: "Grandes papilas posteriores do 'V' lingual, isoladas pela fenda que os fluxos acuosos puros glandulares linfáticos inferiores higienizam prontamente sob estímulo de palatabilidade tátil química persistente da digestão prévia mastigatória oral salivar inicial do quimo não-gástrico triturado." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (4).jpeg", 
            text: "Mucosa formando um complexo e intrincado labirinto de pregas extremamente ramificadas ao lúmen. Órgão, função e tecido de revestimento:", 
            options: ["Tuba Uterina (Ampola) / Sistema Genital Feminino (Fecundação e transporte mecânico) / Tecido Epitelial Cilíndrico Simples Ciliado", "Vesícula Seminal / Sistema Genital Masculino / Tecido Epitelial Pseudoestratificado", "Ducto Deferente / Sistema Genital Masculino / Tecido Epitelial Estratificado Cúbico", "Vesícula Biliar / Sistema Digestório / Tecido Epitelial Cúbico Alto Liso"], 
            correct: "Tuba Uterina (Ampola) / Sistema Genital Feminino (Fecundação e transporte mecânico) / Tecido Epitelial Cilíndrico Simples Ciliado", 
            explanation: "Labirinto extremo indica a delicada trama protetiva do oócito com epitélios batedores que forçam migrações ascendentes sem motores locais independentes dos próprios." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (3).jpeg", 
            text: "Células com núcleo basal, citoplasma intensamente basófilo na base e eosinófilo no ápice. Estrutura, órgão, função e tecido:", 
            options: ["Ácino Seroso / Pâncreas / Síntese e secreção de enzimas digestivas ativas / Tecido Epitelial Glandular Exócrino Acinoso", "Ácino Mucoso / Glândula Sublingual / Lubrificação / Tecido Epitelial Glandular Exócrino", "Folículo Tireoidiano / Tireoide / Armazenamento coloidal / Tecido Epitelial Endócrino Vesicular", "Cordão Paratireoideo / Paratireoide / Secreção de PTH / Tecido Epitelial Endócrino Cordonal"], 
            correct: "Ácino Seroso / Pâncreas / Síntese e secreção de enzimas digestivas ativas / Tecido Epitelial Glandular Exócrino Acinoso", 
            explanation: "Os polígonos serosos perfeitos exibem polarização extrema com polos dedicados ao acúmulo e síntese contínua ininterrupta glandular protéica primária basilar roxa azulada pálida superior e escura densa." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00 (1).jpeg", 
            text: "Aglomerado pálido celular encapsulado num mar de ácinos serosos escuros digestivos. Estrutura, órgão, função e tecido exato:", 
            options: ["Ilhota de Langerhans / Pâncreas / Secreção de insulina e glucagon / Tecido Epitelial Glandular Endócrino Cordonal", "Glomérulo Renal de Malpighi / Rim / Ultrafiltração de plasma / Tecido Epitelial Pavimentoso Fenestrado", "Corpúsculo de Hassall / Timo / Seleção celular / Tecido Conjuntivo Reticular", "Folículo Linfoide / Baço / Proliferação imune / Tecido Conjuntivo Frouxo Nodular"], 
            correct: "Ilhota de Langerhans / Pâncreas / Secreção de insulina e glucagon / Tecido Epitelial Glandular Endócrino Cordonal", 
            explanation: "As centrais elétricas celulares do sangue diabético repousam incólumes sob os lobos escuros serosos como constelações claras pontuais na arquitetura do tecido." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01.jpeg", 
            text: "Grande vaso solitário recebendo inúmeros espaços vasculares tortuosos finos. Estrutura, órgão, função hemo-dinâmica e tecido de revestimento:", 
            options: ["Veia Centro-lobular / Fígado / Drenagem centrípeta final do sangue dos sinusoides / Tecido Epitelial Pavimentoso Simples (Endotélio)", "Artéria Centro-Folicular / Baço / Distribuição arterial / Tecido Muscular Liso Esfincteriano", "Ducto Excretor / Pâncreas / Coleta do suco / Tecido Epitelial Cúbico Simples", "Arteríola Eferente / Rim / Retirada do sangue / Tecido Epitelial Cilíndrico Alto"], 
            correct: "Veia Centro-lobular / Fígado / Drenagem centrípeta final do sangue dos sinusoides / Tecido Epitelial Pavimentoso Simples (Endotélio)", 
            explanation: "O sumidouro capilar massivo venoso é o buraco negro liso para onde tudo no hexágono hepático da vida secretória aponta o fluxo final." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (2).jpg", 
            text: "Região pontilhada central exibindo ductos e vasos cercados por fibras. Região, órgão, função geral e tecido de suporte:", 
            options: ["Tríade Portal / Fígado / Distribuição de sangue oxigenado, sangue rico em nutrientes e coleta de bile / Tecido Conjuntivo Frouxo a Denso", "Espaço de Disse / Fígado / Armazenamento de Vitamina A / Tecido Adiposo Multilocular", "Hilo Renal / Rim / Entrada arterial / Tecido Conjuntivo Denso Modelado", "Polpa Branca / Baço / Filtragem imunológica / Tecido Cartilaginoso Elástico"], 
            correct: "Tríade Portal / Fígado / Distribuição de sangue oxigenado, sangue rico em nutrientes e coleta de bile / Tecido Conjuntivo Frouxo a Denso", 
            explanation: "Os vasos e o ducto epitelial cúbico flutuam no colágeno abundante que serve de coxim fibrilar protetor triádico perfeitamente visível nos vértices de cada lóbulo." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.01 (1).jpg", 
            text: "Estrutura tubular específica da tríade portal, revestida por epitélio arredondado e luz clara. Estrutura, órgão, função e tecido exato:", 
            options: ["Ducto Biliar Intra-hepático / Fígado / Drenagem centrífuga da bile / Tecido Epitelial Cúbico Simples", "Ramo da Veia Porta / Fígado / Traz sangue desoxigenado rico em nutrientes / Tecido Epitelial Pavimentoso Simples", "Arteríola Hepática / Fígado / Sangue oxigenado a alta pressão / Tecido Muscular Liso Múltiplo", "Capilar Linfático / Fígado / Drenagem de extravasamentos / Tecido Epitelial Pseudoestratificado"], 
            correct: "Ducto Biliar Intra-hepático / Fígado / Drenagem centrífuga da bile / Tecido Epitelial Cúbico Simples", 
            explanation: "A perfeição cúbica dos colangiocitos delimita perfeitamente o ducto reverso circulatório frente as largas túnicas vasculares contíguas do trato hepático misto." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00 (2).jpg", 
            text: "Célula majoritária formadora dos cordões no lóbulo, ladeando sinusoides e veia central. Qual célula, órgão, função e tecido estrutural?", 
            options: ["Hepatócito / Fígado / Detoxificação, síntese proteica e produção de bile / Tecido Epitelial Glandular Anfícrino Cordonal", "Célula Acinar / Pâncreas / Síntese de suco digestivo / Tecido Epitelial Glandular Exócrino Acinoso Seroso", "Célula Principal / Estômago / Secreção de Pepsinogênio / Tecido Epitelial Glandular Exócrino Tubular Reto", "Espongiocito / Suprarrenal / Produção de Cortisol / Tecido Epitelial Glandular Endócrino Fasciculado"], 
            correct: "Hepatócito / Fígado / Detoxificação, síntese proteica e produção de bile / Tecido Epitelial Glandular Anfícrino Cordonal", 
            explanation: "Hepatócitos poliédricos encadeados por justaposição radicular operam todo o metabolismo animal básico em contato de dois polos venosos fenestrados limpos contínuos simultâneos sem isolamento da luz luminal densa." 
        },
        { 
            image: "WhatsApp Image 2026-06-21 at 20.52.00 (3).jpg", 
            text: "Prismas poligonais separados por grossas faixas nítidas de tecido conjuntivo. Unidade estrutural inteira, órgão clássico e classificação tecidual principal:", 
            options: ["Lóbulo Hepático Clássico (Fígado de Porco) / Fígado / Metabolismo e processamento do fluxo / Tecido Epitelial Glandular Anfícrino (Parênquima Central Isolado)", "Lóbulo Esplênico Pulposo / Baço / Destruição de antígenos / Tecido Conjuntivo Reticular", "Corpúsculo Cístico / Rim / Excreção final / Tecido Epitelial Pavimentoso", "Ácino Adiposo / Hipoderme / Termogênese celular / Tecido Adiposo Multilocular"], 
            correct: "Lóbulo Hepático Clássico (Fígado de Porco) / Fígado / Metabolismo e processamento do fluxo / Tecido Epitelial Glandular Anfícrino (Parênquima Central Isolado)", 
            explanation: "Somente no suíno, e em humanos cirróticos graves, esses anéis perfeitos de trama colagênica fecham visualmente os cantos tridimensionais clássicos de dissecação lobular da peça fresca ou formalizada orgânica natural hepática laboratorial analítica sem falha visual microscópica de lâmina macro panótica básica visual central." 
        }
    ];

    // ==========================================
    // BASE 3: QUESTÕES DOS PDFS (Monitoria - 42 Questões Sintetizadas + Inéditas)
    // ==========================================
    const pdfQuestionsData = [
        { text: "Q_PDF 01. Se houver uma mutação genética que impeça a formação dos pedicelos nos podócitos renais (mas mantendo endotélio e membrana basal íntegros), qual consequência funcional severa seria esperada?", options: ["Proteínas plasmáticas de médio peso molecular (como a albumina) ultrapassariam a barreira, resultando em proteinúria", "A filtração glomerular seria interrompida por completo", "Perda seletiva de hemácias formando hematúria", "A glicose não seria reabsorvida, gerando glicosúria"], correct: "Proteínas plasmáticas de médio peso molecular (como a albumina) ultrapassariam a barreira, resultando em proteinúria", explanation: "Os pedicelos formam as fendas de filtração, a barreira mecânica final contra macromoléculas proteicas." },
        { text: "Q_PDF 02. No pâncreas exócrino, as células centroacinares representam o início do sistema de ductos intercalares invaginados no ácino. O que elas secretam e qual a finalidade da secreção?", options: ["Solução rica em bicarbonato / Neutralizar o quimo ácido estomacal", "Enzimas digestivas (zimogênios) / Digerir proteínas", "Insulina e glucagon / Regular glicemia basal", "Bile e pigmentos / Emulsificar gorduras"], correct: "Solução rica em bicarbonato / Neutralizar o quimo ácido estomacal", explanation: "Elas alcalinizam rapidamente o fluido seroso que será jogado no duodeno." },
        { text: "Q_PDF 03. Qual o caminho clássico tubular fisiológico do fluido filtrado no corpúsculo de Malpighi até sair da pirâmide renal?", options: ["Corpúsculo renal -> Túbulo Contorcido Proximal -> Alça de Henle -> Túbulo Contorcido Distal -> Ducto Coletor", "Glomérulo -> Mácula Densa -> Alça descendente -> Pelvis", "Podócitos -> Túbulo Distal -> Espaço de Disse -> Ureter", "Túbulo Coletor -> Cálices -> Uretra Prostática"], correct: "Corpúsculo renal -> Túbulo Contorcido Proximal -> Alça de Henle -> Túbulo Contorcido Distal -> Ducto Coletor", explanation: "É a rota anatômica seqüencial primária obrigatória do néfron." },
        { text: "Q_PDF 04. A vesícula biliar pode ser facilmente diagnosticada microscopicamente pelas suas adaptações parietais extremas de estocagem de lúmen. O que falta nela histológicamente e o que ela forma quando vazia?", options: ["Falta submucosa / Forma pseudovilosidades epiteliais", "Falta serosa / Forma papilas ríspidas gustativas", "Falta urotélio / Forma cordões de Leydig", "Falta criptas glandulares / Forma alças de Henle"], correct: "Falta submucosa / Forma pseudovilosidades epiteliais", explanation: "Não possui submucosa verdadeira. A forte retração muscular empurra a mucosa vazia simulando falsas vilosidades." },
        { text: "Q_PDF 05. A porção endócrina do pâncreas tem arquitetura cordonal e produz hormônios que são vitais para as células adiposas e musculares. Quais são as principais células e os produtos das Ilhotas de Langerhans?", options: ["Células alfa (glucagon), Células beta (insulina), Células delta (somatostatina)", "Células acinares (tripsina), Células caliciformes (muco)", "Células parietais (ácido), Células principais (pepsina)", "Hepatócitos (bile), Células de Kupffer (macrófagos)"], correct: "Células alfa (glucagon), Células beta (insulina), Células delta (somatostatina)", explanation: "O núcleo homeostático endócrino isolado e anastomosado das pálidas ilhotas pancreáticas." },
        { text: "Q_PDF 06. A origem embrionária da Hipófise (glândula pituitária) é complexa e dupla. Respectivamente, de onde surgem a adeno-hipófise e a neuro-hipófise?", options: ["Ectoderma oral (Bolsa de Rathke) / Ectoderma neural (Diencéfalo)", "Mesoderma lateral / Endoderma oral", "Endoderma digestivo / Células da crista neural", "Cordão umbilical / Ectoderma superficial epidérmico"], correct: "Ectoderma oral (Bolsa de Rathke) / Ectoderma neural (Diencéfalo)", explanation: "A bolsa de Rathke migra do teto da boca primitiva fundindo-se ao recesso infundibular que desce do encéfalo jovem." },
        { text: "Q_PDF 07. Os hormônios T3 e T4 são armazenados em grande quantidade pela glândula tireoide, o que é um feito único glandular. Onde exatamente eles se acumulam inertes fora da vida sistêmica?", options: ["Ligados à tireoglobulina armazenada no fluido coloide das vesículas foliculares oca extracompartimentais apicais basais", "Nas terminações de Herring neurossecretoras soltas", "Nos grânulos de renina justaglomerular densa maciça estrita", "Nos canalículos intracelulares das células parafoliculares ativas circulatórias do lóbulo C"], correct: "Ligados à tireoglobulina armazenada no fluido coloide das vesículas foliculares oca extracompartimentais apicais basais", explanation: "A estocagem no espesso coloide intracístico folicular epitelial tireoidiano sela o T3/T4 sob a forma atóxica gigante proteica até a TSH ativá-lo." },
        { text: "Q_PDF 08. Analise a arquitetura da medula e do córtex da glândula suprarrenal no paciente e descreva a sua principal disparidade produtora orgânica funcional isolada basilar.", options: ["A medula atua no eixo de liberação de catecolaminas sob estímulo da crista neural; o córtex empilha hormônios esteroides via origem mesodérmica zonal periférica", "A medula atua na regulação osmorreceptora de Sódio; o córtex gera catecolaminas nervosas amielínicas reticulares soltas sistêmicas", "A medula inibe a síntese protéica cortical pela sua alta concentração de ACTH", "Não há distinções morfológicas profundas na suprarrenal, operam em uníssono misto cordonal fasciculado homogêneo"], correct: "A medula atua no eixo de liberação de catecolaminas sob estímulo da crista neural; o córtex empilha hormônios esteroides via origem mesodérmica zonal periférica", explanation: "O centro (medula) é nervoso autônomo. O anel periférico (córtex) é hormonal clássico colesterol-dependente de base sistêmica." },
        { text: "Q_PDF 09. O epitélio do ducto enovelado do epidídimo apresenta estruturas longas muito particulares. Qual epitélio é esse e o que são as estruturas imensas na borda luminal apical vital para secar a luz fluída testicular?", options: ["Epitélio Pseudoestratificado Cilíndrico / Dotado de longos Estereocílios imóveis ramificados absortivos massivos de líquido carreador primário", "Epitélio Estratificado Pavimentoso / Dotado de queratina córnea protetora antiácida descamativa celular apical descamativa oca atritante pesada morta", "Epitélio Cúbico Simples Único / Dotado de microvilosidades curtas regulares ativas e densas ativadas por ATP luminal basolateral apical", "Epitélio de Transição (Urotelial) / Placas uroplaquínicas distensíveis umbeliformes grandes apicais guarda-chuva protetoras toxicológicas"], correct: "Epitélio Pseudoestratificado Cilíndrico / Dotado de longos Estereocílios imóveis ramificados absortivos massivos de líquido carreador primário", explanation: "Os estereocílios hipertrofiados são as escovas imensas epiteliais epididimárias para enxugar a poça aquosa nutritiva ejaculada bruta seminífera primária contínua canalicular reta dos testículos ativados." },
        { text: "Q_PDF 10. Para impedir que a via ascendente genital uterina seja colonizada, a Vagina reveste-se de barreira epitelial espessa secretando substrato de fermentação de lactobacilos de Döderlein. Qual o substrato orgânico massivo e o epitélio local?", options: ["Epitélio Estratificado Pavimentoso Não Queratinizado rico em Glicogênio", "Epitélio Cilíndrico Estratificado Mucoso puro neutro celular basal", "Epitélio Pseudoestratificado Ciliado rico em Lipídios basais alveolares", "Epitélio de Transição rico em Ácido Clorídrico parietal massivo oxíntico solto"], correct: "Epitélio Estratificado Pavimentoso Não Queratinizado rico em Glicogênio", explanation: "Ao descamar massas de glicogênio armazenado das células epiteliais superficiais, as bactérias residentes vaginais sintetizam Ácido Lático, garantindo a baixa letalidade microbiológica de pH vaginal." },
        { text: "Q_PDF 11. Em relação à ovogênese biológica humana primordial basal, informe: De onde migram primeiramente na vida as Células Germinativas Primordiais imaturas femininas para alcançar as cristas genitais definitivas anatômicas fetais lombares altas nas meninas intra-útero precoces temporãs raras de ver nas biópsias?", options: ["Da parede endodérmica dorsal estrita do Saco Vitelino primitivo basal migratório celular", "Da crista neural superior da fossa pituitária diencefálica ectodérmica craniana apical solta isolada", "Dos mesênquimas branquiais foliculares cervicais tireóideos mesodermais laterais ventrais densos", "Das glândulas adrenais em formação migratória fascicular urogenital espongiocítica basal retroperitoneal inferior profunda pélvica lombar"], correct: "Da parede endodérmica dorsal estrita do Saco Vitelino primitivo basal migratório celular", explanation: "O tecido mesenquimal gonadal as atrai via quimiotaxia e as CGPs rastejam ameboidemente ativas do cordão do saco vitelínico extraembrionário rumo ao broto embrionário posterior lombar primário inicial somático retro." },
        { text: "Q_PDF 12. Histologicamente e anatomicamente visível, qual estrutura exata a uretra masculina porção esponjosa primária deve penetrar de ponta a ponta sem rasgar até exteriorizar-se perfeitamente o sêmen prostático e vesical e uretral para fora da pelve na reprodução do ato de coito humano reprodutivo mamífero basal clássico?", options: ["Centro estrito central do Corpo Esponjoso peneano e bolbar ladeado por túnica albugínea", "Lateral direita estrita do Corpo Cavernoso rígido do feixe urogenital pubo-esfincteriano denso elástico venoso puro", "Base isolada externa do Fórnix Vaginal do canal prepucial glandar cego eferente eferidor de líquido seromucoso apical estrito", "Medula urogenital da Prostata Estromal de transição central nodular fibromuscular glandular túbulo-alveolar contínua livre espasmodica basal de Leydig solta local isolada"], correct: "Centro estrito central do Corpo Esponjoso peneano e bolbar ladeado por túnica albugínea", explanation: "O corpo esponjoso forma a glande do pênis terminal. Sua consistência garante que, durante a hiper-pressão erétil cavernosa dorsal, o canal uretral não oblitere sufocado ou seja colapsado e interrompido na ejaculação." },
        { text: "Q_PDF 13. O que define histomorfologicamente de forma cabal no microscópio a estrutura celular basal que nomeamos e identificamos incontestavelmente como folículo ovariano primordial, abundante no córtex fibroso?", options: ["Um grande ovócito primário travado envolto estritamente por apenas uma única e simples camada de células foliculares totalmente achatadas pavimentosas escamosas em estagnação proliferativa nula", "Oócito solto cístico isolado sem capa com membrana translúcida zona-pelucidal estromática folicular vazia atrésica granulosa celular apoptótica ativada macrofágica basal colateral nítida", "Vários agrupamentos colunares poliédricos de células ovarianas tecais glandulares luteinizadas gigantes contendo sangue central hemorrágico cístico espesso com resquícios de fímbrias degeneradas hilares exauridas e velhas mortas passadas em degeneração de atresia fibrótica pura hilofólica mesotelial clara sem corante", "Dois ovócitos viáveis rodeados em corona radiata densa multicelular pluriestratificada hialuronidásica no centro do ovário medular frouxo ricamente vascularizado por sinusoides espirais foliculares venosos linfáticos de alto fluxo basal perimetral albugíneo seroso peritoneal capsular e denso de superfície simples"], correct: "Um grande ovócito primário travado envolto estritamente por apenas uma única e simples camada de células foliculares totalmente achatadas pavimentosas escamosas em estagnação proliferativa nula", explanation: "Esse arranjo de sementes primitivas dorminhocas monocamada pavimentosas compõe a reserva vital fértil ovariana, adormecida até os chamados pulsos andrógenos e hormonais púberes FSH LH gonadotroficos as despertarem ao ciclo primário colunar estrito e maduro folicular espesso volumoso e ativado." },
        { text: "Q_PDF 14. Quando as células foliculares achatadas primordiais se avolumam subitamente pelo estímulo inicial e se tornam uma nítida camada cúbica (colunar baixa) ainda única contínua e visível envolvendo o gameta primitivo ovariano cortical marginal peritubular ativado inicial vital, qual o nome dessa estrutura que acabou de ascender no microscópio clássico da histopatologia ovariana humana?", options: ["Folículo Primário Unilaminar (simples e ativo basal contínuo vital primário reprodutivo ovariano de início de maturação folicular)", "Folículo Antral (com grandes lagoas císticas confluentes licor-foliculi hialuronicas serosas ricas proteicas)", "Corpo Albicans (Cicatriz do colágeno avascular atrésico apoptótico denso macrofágico luteínico residual pardo morto e oco hialino puro denso fibroso atrófico branco basal denso)", "Folículo de Graaf (Máximo de tensão folicular proeminente da cápsula peritoneal madura pre-ovulatória túrgida esticada pronta serosa ovulatória de corona radiata expandida oocito II secundário)"], correct: "Folículo Primário Unilaminar (simples e ativo basal contínuo vital primário reprodutivo ovariano de início de maturação folicular)", explanation: "No instante em que as células ganham tamanho cúbico ativamente organelar produtivo, o folículo torna-se e chama-se 'primário'. O estágio seguinte será multi-laminar, ao estratificar a granulosa pelo hormônio FSH estimulador gonádico pituitário descendente diencefálico adeno-hipofisário basal sistêmico pulsátil no ovário." },
        { text: "Q_PDF 15. Uma substância e camada glicoproteica translúcida se precipita e forma-se interposta rigidamente como anel claro entre o oócito e as células foliculares que o nutrem de perto e comunicam-se no citoplasma fenda fina do folículo ovariano inicial recém maduro denso. Como se designa de fato tal membrana acelular?", options: ["Zona Pelúcida estrita vital fertilizatória e protetiva primária", "Teca Interna esteroidogênica microvascular androgênica estromática granulínica solta", "Manto Linfoide perivascular nodular B reticular de memória ativa exócrina", "Cápsula de Glisson fibrosa capsular hepato-biliar invaginativa estromal sustentatória lobular radiante espessa perivascular biliar cega de fundo cego reticular misto de Billroth"], correct: "Zona Pelúcida estrita vital fertilizatória e protetiva primária", explanation: "Essencial na fecundação e de função quimiotática de bloqueio de polispermia e fixação do espermatozoide seletivo íntegro de carga intacta fértil acrosomal do túbulo uterino ampolar vital da concepção zigótica reprodutiva." },
        { text: "Q_PDF 16. O estrato de células granulosas engorda, o líquido folicular forma lagos que coalescem e as células do estroma ovariano peritubular se organizam numa capa distinta, gerando camadas concêntricas esteroidogênicas (produtoras de hormônio base). Quais são estas duas capas distintas neoformadas?", options: ["Teca Interna (vascular/androgênica) e Teca Externa (fibrosa conjuntiva estrutural de suporte)", "Corona Radiata (vascular espessa) e Cúmulos Óóforos (pedículo radicular hialino liso oco)", "Corpo Cavernoso (senoide venoso massivo pélvico) e Corpo Esponjoso (albugíneo uretral contínuo denso central liso)", "Miométrio Liso (fibrilar contínuo autônomo tracionador ocitocínico perimetrial liso contraído) e Endométrio Fixo Funcional (glandular sero-mucosecretor de implantação nidal basalar de artérias espiraladas colunares uterinas longas soltas secretórias ricas proteicas mucosas estromais cegas pélvicas profundas frouxas)"], correct: "Teca Interna (vascular/androgênica) e Teca Externa (fibrosa conjuntiva estrutural de suporte)", explanation: "O estroma especializa-se notadamente na teca interna que cria andrógenos que a granulosa converterá sabiamente em estrogênio vital para a proliferação basal endométrica da mulher." },
        { text: "Q_PDF 17. Como é denominado classicamente na medicina histológica pélvica o folículo maduro terciário intumescido que atinge a margem e a casca do ovário, formando um abaulamento translúcido pronto para a ruptura mecânica e hidráulica sob a onda e pulso massivo sorológico hipofisário prévio ovulatório efervescente?", options: ["Folículo de Graaf (Máximo Desenvolvimento)", "Corpo Lúteo de Gravidez Tardia Ativado Luteinizado Progestínico Constante Basal Mantido Trofoblástico", "Corpo Polar Aberrante Mudo Nulo Citoplasmático Exaurido Cego Ativo Mínimo Meiótico Primário Marginal Secundário Aberto Apoptótico Excretório Celular Feto Extraembrionário Ectópico", "Nódulo de Arantius Cardíaco Valvular Endotelial Denso Ativo Fibrilar Valvar Septal Cordonal Fibrilar Contínuo Autônomo Solto Purkinje Elétrico Contráctil Central Marginal Solto Seroso Seromucoso Denso Isolado Interventricular Parietal Seroso Mioepicárdico Endocárdico Fibroso Frouxo Hialino Denso Cartilaginoso Misto Glandular Tubular Alveolar Espumoso Cego Apical Contínuo Ciliado Fibrado Pluri Reto Cúbico Fixo Basal Mucossecretor Claro"], correct: "Folículo de Graaf (Máximo Desenvolvimento)", explanation: "O epônimo Graafiano identifica estritamente e exatidonalmente o último e maior estágio morfológico túrgido folicular antes de derramar com dor de 'Mittelschmerz' o conteúdo fluido ovulatório infundibular no funil peritoneal fimbrial ciliar absorvente da tuba feminina da mulher no ato de liberação gametogênica estrita de ovocitação secundária estromal hialurônica enzimática pélvica peritoneal basal cega ovariana abdominal cíclica reprodutiva." },
        { text: "Q_PDF 18. Focando na imagem do túbulo seminífero extraída dos materiais de PDF da UF, há uma célula somática de sustentação descrita como essencial (célula grande abraçadora de base ao lúmen de espermatogênese primária, forma irregular piramidal colunar irregular estrita frouxa citoesqueletal interdigital e basolateral densa retida não meiótica isolada imune basal nutritiva macrofágica e inibina-A secretória). Qual é o nome dela?", options: ["Célula de Sertoli sustentacular basolateral imune nutritiva", "Espermatogônia A (dark) primária mitótica", "Célula Mioide peritubular lisa contrátil", "Espermátide alongada espermiogênica em transformação residual cística ácida capuzada golgiana do centríolo apical axonemal flagelar em formação estrita microtubular basal solta distal epididimária eferente testicular mediada da tuba canicular cega fimbriada densa central de transição folicular ovariana da mulher uterina do ovócito solto."], correct: "Célula de Sertoli sustentacular basolateral imune nutritiva", explanation: "Sem a célula de Sertoli, o complexo epitelial desabaria sem ligações, e o sistema autoimune atacaria as células meióticas tardias estranhas ao timo masculino tolerado, causando a falha reprodutiva imune primária." },
        { text: "Q_PDF 19. A histologia do útero apresenta três camadas: Endométrio, Miométrio e Perimétrio. Na imagem focada nas glândulas endometriais ativas, qual o destino da camada onde estão instaladas no fim de um ciclo anovulatório?", options: ["Descamam-se ativamente por isquemia hormonal abrupta no endométrio funcional", "Sofrem luteinização progestínica virando corpo albicans fibrótico avascular cego morto e retraído estromático branco", "Transformam-se no córion de um mioma cístico submucoso pediculado interno e invasivo fibroblástico e atrófico vascular calcificado duro denso reticular e liso espesso muscular autônomo necrótico avascular denso fibrilar contínuo cego central denso mucoso pálido branco atrésico macrofágico basal", "Ficam fixas perpetuamente retendo decídua basilar hialina constante cega densa espumosa atrófica fibrótica celular"], correct: "Descamam-se ativamente por isquemia hormonal abrupta no endométrio funcional", explanation: "As artérias espiraladas colapsam com a queda de progesterona e estrogênio lúteo. A isquemia resultante necrosa o funcional e a menstruação expele e vasa as glândulas uterinas tubulares soltas e sangue para o exterior vaginal canalicular eferente da mulher fértil e cíclica ativa viva fértil basal." },
        { text: "Q_PDF 20. Qual a função exata e a célula responsável pela secreção de Ácido Clorídrico do conteúdo gástrico denso estomacal visceral, visualizada na lâmina de Ascaridíase e patologias parietais mucosas glandulares da imagem 1 das Monitorias?", options: ["Célula Parietal (Oxíntica) - Ativação do pepsinogênio via pH ácido esterilizador químico", "Célula Principal - Secreção de lipase ácida pesada estrita ativa primária digestiva proteica pancreática intraluminal jejunal profunda basal contínua rica eferente cega densa fibrilar contínua oca densa atrófica autônoma basal solta fibrilar contínua mucosa", "Célula de Kupfer - Excreção biliar micelar hepática solúvel ativa macrofágica central endovenosa capilar sinusal de Billroth ativa cega veno-arterial", "Enterócito Caliciforme - Secreção de tripsinogênio biliar eferente solto intraduodenal gástrico cego fundo denso atrófico basal cego hialino mucossecretor ácido forte purulento estéril de absorção de ferro vitamínico C colunar espesso oco cego"], correct: "Célula Parietal (Oxíntica) - Ativação do pepsinogênio via pH ácido esterilizador químico", explanation: "Garante o fator intrínseco B12 vital neurológico e a conversão das inativas pro-enzimas ácidas ativas, além da esterilização química dos alimentos sujos via secreção hidrogeniônica cloreto iônica apical ATPase dependente estrita forte letal ao patógeno basal gástrico vivo do humano." },
        { text: "Q_PDF 21. Das 15 Questões Inéditas: Em cortes de Fígado cirrótico inflamado, as fibras de colágeno fibrilar sufocam a função de qual célula primordial armazenadora de vit-A do recesso estreito de Disse sinusoidal basal microviloso hepato-venoso celular?", options: ["Célula de Ito (Célula Estrelada)", "Hepatócito Binucleado Ativo", "Célula Endotelial de Hering", "Macrófago Fixo Residente de Kupffer (Kupffer Cell Hemocaterética Imune Perisinusoidal Intra-luminal Mononuclear Oca Densa Espumosa Basilar Cega Ativa Fibrilar Contínua Avascular Hialina Branca Fibrosa Atrofiada Morte Reticular Fibrosa Tardia Cega Fina Autônoma Mista Fibrilar Mucossecretora Espessa Densa Serosa Mucosa Basilar Terminal)"], correct: "Célula de Ito (Célula Estrelada)", explanation: "A transdiferenciação miofibroblástica irreversível de Ito é a origem celular da falência hepática da cirrose dura avascular alcoólica obstrutiva isquêmica doente letal cirrótica fibrosante." },
        { text: "Q_PDF 22. Das 15 Questões Inéditas: A zona glomerulosa secretora da cortical periférica glandular do estresse biológico e regulação salínica, foca e libera qual molécula em profusão, sem ligar para os eixos centrais de ACTH em demasia basilar centralizada reticular profunda e media?", options: ["Aldosterona (mineralocorticoide sistêmico pressórico de captação de Na e exclusão de K no ducto principal renal estrito de tubulos distais celulados e coletores principais tubulares cegos basais apicais contínuos iônicos ativos vivos fortes e reativos endócrinos sistêmicos simpáticos isolados e renais primários)", "Cortisol puro glicocorticóide fascial hiperativado glicêmico basal eferente denso imune solto imaturo contínuo simpático autônomo espongiocítico rico pálido lipidico central", "Adrenalina rápida medular venosa e noradrenalina neural simpática ativa cega de alarme estrito rápido cromafínico solto medular profundo denso neural ectodérmico migratório embrionário cego isolado ativo denso imuno reativo central e autônomo liso contráctil doente avascular estromal doente", "Melatonina ritmica pinealógica encéfalica diencefálica epitelial neural da areia cega pinealócita cerebral atrófica dura de ritmo pálido seroso fotossensível hipotalâmico basal do núcleo supraquiasmático doente e pálido branco de atresia densa e cega cística residual de embrião ectodérmico eferente biliar biliar gástrico pancreático alfa folicular luteo pélvico de leydig basal eferente tubulo cego primario intersticial intersticial de andrógeno de testosterona solta testosterona"], correct: "Aldosterona (mineralocorticoide sistêmico pressórico de captação de Na e exclusão de K no ducto principal renal estrito de tubulos distais celulados e coletores principais tubulares cegos basais apicais contínuos iônicos ativos vivos fortes e reativos endócrinos sistêmicos simpáticos isolados e renais primários)", explanation: "O glomérulo da supra capta as quedas da pressão e a angiotensina II converte massas colossais em aldosterona autônoma vital pro ser humano hipertenso reter líquidos em urgência fisiológica hídrica basal." },
        { text: "Q_PDF 23. Das 15 Questões Inéditas: A mácula densa de tubos retorcidos renais afina um papo com células justaglomerulares e as ativa no sinal e gatilho Sódico defasado em queda urinária luminal pré-excretória medular espessa folheada ativada simpática aferente estromática vascular capilarizada íntima ladeada externa e autônoma densa rica contráctil. O que as células justas lançam logo de imediato?", options: ["Renina eferente ativadora sistêmica tensional proteolítica de vasocontrição em Angio I hepática", "Eritropoetina oxigenadora hipóxica cortical solta ativa medular", "Fator NAT natriurético atriopeptidêmico de descarga hídrica urinária inibidora forte", "Aldosterona medular estrita espongiocítica adrenal frouxa"], correct: "Renina eferente ativadora sistêmica tensional proteolítica de vasocontrição em Angio I hepática", explanation: "O complexo justaglomerular eferente liso de média arteríola aferente explode grânulos de Renina no sangue, disparando o eixo RAAS vital circulatório reativo hipovolêmico renal salvador maciço ativo biológico simpático renal endócrino basal." },
        { text: "Q_PDF 24. Das 15 Questões Inéditas: O estômago joga pepsina e HCl bruto, o Duodeno se defende vomitando qual substrato nas glândulas ativas do seu estrato de camada submucosa invaginada, grossa, exclusiva tubular contínua mucosa pálida densa alveolar serosa isolada mucosa frouxa rica?", options: ["Muco altamente Alcalino Protetor das Glândulas de Brunner duodenais ativas protetivas baseadoras do pH pilórico cáustico reativo perigoso péptico ácido puro", "Ácido Urocânico urémico de filtração solta de alça eferente maciça atrófica cega folicular", "Bile de micelas biliares estritas hépato-centrais canaliculares verdes frouxas espessas soltas biliverdínicas cegas autônomas ativas hepáticas de colecisto ativo doente estritamente vesicular esfincteriano de Oddi denso espesso liso ativo eferente denso autônomo simpático biliar frouxo isolado", "Tripsinogênio pancreático ativo acinar roxo pálido centroacinar isolado cego basal interlobular denso estromático fibrilar eferente seroso e colunar pseudoestratificado apical microviloso doente"], correct: "Muco altamente Alcalino Protetor das Glândulas de Brunner duodenais ativas protetivas baseadoras do pH pilórico cáustico reativo perigoso péptico ácido puro", explanation: "Sem a submucosa carregada de glândulas da proteção (Brunner) a parede duodenal entraria em falência gástrica e ulceraria fatalmente de fístulas digestivas dolorosas ao homem biliar entérico terminal intestinal humano basal digestivo da dieta gorda diária ativa estromal eferente basal e oca viva autônoma celular." },
        { text: "Q_PDF 25. Das 15 Questões Inéditas: Ao adentrar a parte reprodutiva, a próstata possui uma marca visual histológica nas biópsias de homens maduros velhos com bexigoma que denuncia seu lúmen secretório alveolar frouxo reticular epitelial com grãos pálidos calcificados cêntricos soltos cegos basolaterais atróficos eosinofílicos grandes densos amorfos mortos rígidos brancos amarelados seromucosos da vesícula eferente do ejaculado uretral estrito e ativo vivo:", options: ["Corpos Amiláceos (Concreções Prostáticas de proteínas calcificadas alveolares com a idade lúteo senil andropáusica urológica diagnóstica)", "Espaço de Disse Fibroso Amarelo Adiposo do lóbulo exócrino de Leydig da bexiga eferente uretral doente", "Cristais arenáceos de areia pinealóide do cérebro diencefálico solto eferente simpático ependimário do teto do terceiro ventrículo óptico doente autônomo cego de reflexo espinhal motor branco denso", "Grânulos de querato-hialina atrófica escamosa do pénis frouxo balânico prepucial escroto derme apócrino doente cístico folicular de pêlo pubiano denso estriado de arrepio doente pilo-eretor sebáceo lipídico atrófico branco cego maciço doente cego solto"], correct: "Corpos Amiláceos (Concreções Prostáticas de proteínas calcificadas alveolares com a idade lúteo senil andropáusica urológica diagnóstica)", explanation: "As concreções crescem na glândula prostática masculina da uretra posterior em formato de anéis de árvore rosa e marcam o tecido idoso androgênico de DHT constante prostático humano basal e estromático fibromuscular duro nodular de adenoma biológico liso de base viva eferente de sêmen viscoso coagulado pélvico do homem urológico estromal doente." },
        { text: "Q_PDF 26. Das 15 Questões Inéditas: O Hormônio Gonadotrofina Coriônica (hCG), ao ser detectado em massa pelo blastocisto no estroma recém fecundado fixado pélvico e no exame de sangue urina, qual estrutura ovariana ele não deixa morrer (prolonga a vida e luteiniza mais densamente maciça para sustentar de progesterona basal e densa e oca do saco de ovário pélvico da gravidez extra e intra frouxa urológica pélvica de mãe feto útero denso viva eferente atrófica cega folicular inicial primária de granulosa de teca espessa luteo e solta)?", options: ["Corpo Lúteo de Gravidez Cisto-Hormonal Espesso Basal Gravídico Amarelo Seroso Adiposo de Produção Crítica Embrionária e Placentária de Suporte Uterino Menstrual Inibitório", "Corpo Albicans Branco e Oco Morto e Fibroso de Colágeno Cicatricial Anovulatório Pélvico Perimetrial do Ciclo Perdido Falso e Sem Filhos Oco Denso Pálido e Pálido Frouxo Seromucoso Hialino", "Folículo Primordial Achatado Pluri Célular Dormente Ninho de Saco Cortical Periférico Peritubular e Albugíneo Extra Ovariano Frouxo e Nulo e Avascular Estromal Adormecido Nulo", "Tuba Ampolar Ciliada Labyrinthica Ativa e Seromucosa Contínua Lábio Fimbrial Óstio Infundibulo Ovariana Extra Pélvica Viva Reativa Pálida Cega e Aberta Densa Ativa Eferente e Serosa Abdominal Excretrícia Oca Mucossecretora Clara e Hialina Apical Frouxa Imóvel"], correct: "Corpo Lúteo de Gravidez Cisto-Hormonal Espesso Basal Gravídico Amarelo Seroso Adiposo de Produção Crítica Embrionária e Placentária de Suporte Uterino Menstrual Inibitório", explanation: "Sem o resgate imunológico hCGístico, o lúteo se desfaz, o endométrio cai e a gravidez mal fixada sofre aborto espontâneo menstruado. O Lúteo Gravídico reina absoluto no ovário materno pélvico produtivo basal progestágeno ativando espiraladas e glandulares espessas do fundo pélvico uterino da mulher viva reprodutivamente ativada gestante estromal fértil hialina cega densa profunda." },
        { text: "Q_PDF 27. Das 15 Questões Inéditas: Os pneumócitos macrófagos, as Células de Kupffer do Fígado Seroso Sinusoide, as Células de Langerhans do Tegumento Epidérmico Estratificado e a Micróglia Ependimária do Cérebro Ativo Neuroglial eferente tem algo basilar hematopoiético ontológico de comum formador reticular imune de linhagem. O que e de quem derivam ativamente na circulação diária imune vigilante?", options: ["São monocíticos e fagocitários profissionais derivados de Monócitos Sangüíneos da Medula Óssea Vermelha e formam o Sistema Fagocítico Mononuclear Mestre do Corpo Reticuloendotelial Vigilante Histiocitário Imune Especializado Homing Misto Fixado", "São queratinocíticos glandulares espessos neutrófilos segmentados basais de linfo B medulares brancos seromucosos ocos alveolares soltos exócrinos basais inativos nulos avasculares serosos ciegos alveolares tubulares exócrinos foliculares atróficos hialinos basais espessos de epitélio transicional urotelial frouxo nulo estromático adiposo unilocular estrito pálido cego atrófico avascular cístico basal de osso trabecular de ovariano solto reticular denso celular imaturo exaurido pálido claro oco"], correct: "São monocíticos e fagocitários profissionais derivados de Monócitos Sangüíneos da Medula Óssea Vermelha e formam o Sistema Fagocítico Mononuclear Mestre do Corpo Reticuloendotelial Vigilante Histiocitário Imune Especializado Homing Misto Fixado", explanation: "Eles emigram, sentam na sua respectiva casinha orgânica e recebem um epônimo especial médico, mas todos destroem patógenos fagocitando detritos de antígenos do meio interno vivo vigilante protetivo biológico imune do endotélio de mucosa de fenda sinusal livre pálida estromal solta do endotélio avascular estrito macrofágico biológico." },
        { text: "Q_PDF 28. Das 15 Questões Inéditas: Ao examinar um esôfago inferior (terço distal em transição de cárdia doente fúndica gástrica ácida estomacal de junção peritubular), a sua constituição motora autônoma de tubo contraível basal forte de deglutição esofagiana final revela algo no tecido que engole comida, o que ele é unicamente composto?", options: ["Músculo Liso Involuntário Puro de Dupla Camada (Circular Interna Espiral e Longitudinal Externa Reta Involuntária Autônoma Parassimpática Enteral Mioentérica Submucosa Meissner e Auerbach Ativa Lábio Estômago) Fibrilar Autônoma Basal Cega de Reflexo Vagal", "Músculo Estriado Esquelético Voluntário Misto Autônomo Reflexo Voluntário Constritor Somático Branco Pálido Reticular Exócrino Cego Denso de Placa Motora Ativa Eferente Denso Fibrilar", "Músculo Estriado Cardíaco Autônomo com Discos Intercalares Purkinje Gap Junction Mioendócrino Fibrilar Hialino Oco Pálido de Nódulo Atrioventricular Solto Fascicular Esquerdo Esfincteriano Pilórico Reto Cego Basal Espesso Denso Oco Pálido Solto", "Cartilagem Hialina Condrocítica Cega Isogênica Branca Pericôndrio Avascular Colágeno II Mucossecretora Denso Eferente Frouxo Tracheocárdica Ciliada Caliciforme Pseudostratificada Respiratória Fina Faringo Lábio Cega Hialina Dura"], correct: "Músculo Liso Involuntário Puro de Dupla Camada (Circular Interna Espiral e Longitudinal Externa Reta Involuntária Autônoma Parassimpática Enteral Mioentérica Submucosa Meissner e Auerbach Ativa Lábio Estômago) Fibrilar Autônoma Basal Cega de Reflexo Vagal", explanation: "O músculo estriado esquelético (voluntário inicial de deglutição) se acaba no terço médio transitório e no final o esôfago é totalmente liso e peristáltico vagal parassimpático para jogar pro cárdia estomacal ácido liso cego esfincteriano." },
        { text: "Q_PDF 29. Das 15 Questões Inéditas: Em biópsias de Corpúsculo Renal de pacientes com glomérulonefrite massiva inflamatória crônica exsudativa proteica filtrante do mesângio eferente denso capsular oco fenestrado urinário basal pélvico denso inflamatório cortical: Qual célula intra-glomerular central intrincada que abraça, puxa a fenda, suja os debris de filtro entupido e ajuda a limpar o glomérulo sujo e a modular a distensão vascular podocítica do tufo malpighiano vivo forte capilar reativo?", options: ["Célula Mesangial Intraglomerular (Hemo-Macrofágica Vasocontritora Reticular Contrátil Endocítica Limpadora Perivascular Podocítica Extra Fibrilar Densa de Suporte Oca Pálida)", "Célula Mioide Tubulo-Seminífera Fibrosa e Lisa de Espermatozóide Serosa Fina Cega e Autônoma Oca de Leydig", "Célula Intercalar Acidificadora Reabsortora de Íon K Bicarbonato do Túbulo de Ducto Distal e Coletor Principal Cúbico Alto e Fibrilar Urinário Puro Claro Mitocondrial de ATP de Bomba", "Pneumócito Tipo II Alveolar Septal Elastina Surfactante DPPC Tensioativa Pulmonar Fina e Grossa Cúbica Mielínica Oca Denso Reticular Misto Cego Seroso"], correct: "Célula Mesangial Intraglomerular (Hemo-Macrofágica Vasocontritora Reticular Contrátil Endocítica Limpadora Perivascular Podocítica Extra Fibrilar Densa de Suporte Oca Pálida)", explanation: "Eles comem sujeira no filtro renal (fagocitam) e também contraem a estrutura micro do tufo, fechando o fluxo se necessário. Sustentam os podócitos e os finos capilares glomerulares de membrana basal conjunta e eferente basal cortical da fenda de filtração renal urológica filtrada hídrica osmo-tóxica viva capilar da vida animal mamífera estrita." },
        { text: "Q_PDF 30. Das 15 Questões Inéditas: Na mucosa epitelial uterina cíclica e mensal ativa e proliferativa seromucosa estromal hormonal menstrual pélvica da reprodutiva fase madura, as artérias estendem-se até o topo funcional espesso edemaciado alto tubular e as enrodilham ativamente na fase progestínica tardia para sangrar tudo no final. Como se chamam essas artérias estromais de fenda funcional fina perimetrial frouxa miometrial ativa densa oca pálida uterina menstrual isquêmica da camada viva funcional cega?", options: ["Artérias Espiraladas Endometriais e Estromais Frouxas de Angiogênese e Isquemia Necrótica", "Artérias Trabeculares Hilares Esplênicas Fechadas Pulposas Brancas Densa Foliculares Serosas Ativas Brancas Pálidas Densa Vasculares Arcosas", "Artérias Retas Arqueadas Radiais Medulares Papilares Vasa Recta Renais Concentrantes Osmóticas Claras e Fibrilares Uroteliais Ureterais", "Artérias Pulmonares Alveolares Interlobulares Segmentares Lobares Brônquicas Elásticas Ocas Septais Contínuas Fenestradas Soltas Ocas Fibrilares Avasculares"], correct: "Artérias Espiraladas Endometriais e Estromais Frouxas de Angiogênese e Isquemia Necrótica", explanation: "Sem a espiralidade androgênica estrogênica da fenda miometrial, elas não conseguiriam encolher, necrotizar, contrair em espasmo e soltar o teto funcional com muco e sangue na vagina descamativa na ausência de embrião fertilizado lúteo e do hCG residual eferente denso da implantação da gravidez uterina basal da nidação viva trofoblástica da placenta invasiva pélvica fetal e materna hemochorial contínua isolada vascular espessa viva densa isquêmica rica menstrual oca e densa ovariana cística peritoneal frouxa do fórnix colo vaginal escamoso não queratinizado atópico oco perimetral miometrial cego hialino basal da menstruação da progesterona e da teca luteo linfo estroma." },
        { text: "Q_PDF 31. Das 15 Questões Inéditas: No Córtex ovariano em maturação contínua fértil e viva da mulher fértil e adulta, o que induz a proliferação estratificada do estroma para folículos plurilaminares de granulosa cúbica de Graaf cheia de fluidos antrais de licor hialurônico folicular de teca interna androgênica frouxa basal hormonal central ovariana da camada basal albugínea externa densa folicular cega hialina vascular?", options: ["Estímulo Pulsátil Adeno-hipofisário de FSH do sangue circulante da Pituitária Anterior para as Granulosas", "Estímulo Autônomo Parassimpático Vagal das Tubas Uterinas Infundibulares fímbricas", "Estímulo Mecânico de Atrito Folicular Ovulatório Túrgido de Pressão do Córtex do Estroma Reticular e Hemorrágico Frouxo Teca Externa Fibrosa do Útero", "Estímulo Neuro-hipofisário de Ocitocina Diencefálica Magnocelular Pineal de Melatonina Ativa Ovariana Cega Amielínica Cisto de Rathke Coloide Biliar de Suco Gastrico do Córtex da Glândula e Pâncreas Suprarrenal de Rim de Ureter Caliciforme Misto"], correct: "Estímulo Pulsátil Adeno-hipofisário de FSH do sangue circulante da Pituitária Anterior para as Granulosas", explanation: "É a Pituitária Anterior quem dispara e regula de longe do cérebro via Sela Túrcica a ativação das gônadas adormecidas estromáticas para criar e crescer os cistos foliculares aquosos serosos pro oócito secundário meiótico ovariano pre-puberal ativo vivo hormonal cíclico lúteo fértil fértil gametogênico primário pélvico ovariano seroso mucoso pálido ativo vivo folicular endócrino ovariano reprodutor menstrual ovariano ovariano cortical hialino vivo ativo da mulher adulta madura de meiose I e II." },
        { text: "Q_PDF 32. Das 15 Questões Inéditas: Sobre os tecidos imunes sentinelas de mucosa e a fisiologia da Linfa intersticial, a Polpa Branca Esplênica de Baço denso linfóide folicular central trabecular arterial tem uma bainha que envelopa e veste como uma manga a arteríola central que perfura a placa imune do folículo B. Qual célula compõe exclusivamente essa manga e bainha periarteriolar de PALS ativada viva densa linfóide esplênica da polpa branca folicular atrófica baço vivo ativo vermelho hemocaterético de filtro imune portal venoso de baço?", options: ["Linfócitos T Imunocompetentes Celulares Timodependentes (PALS de Bainha Linfóide Periarteriolar)", "Linfócitos B Plasmocitários Produtores de Anticorpos de Células de Memória de Nódulo Germinativo Oco Claro", "Neutrófilos Polimorfonucleares Bastonetes Exsudativos Agudos Inflamatórios Frouxos Intersticiais Mucosos Iniciais Basais Ativos Brancos Alveolares Seromucosos Densa Pura Ativa", "Basófilos Granulares Histamínicos Hipersensíveis de Alergia Anafilática Circulante Venosa Central Tardia Reativa Eosinofílica Mastocitária Periférica Alveolar Frouxa Fibrilar Cega"], correct: "Linfócitos T Imunocompetentes Celulares Timodependentes (PALS de Bainha Linfóide Periarteriolar)", explanation: "O baço é o órgão que filtra sangue do corpo e a placa T do baço envelopa o vaso diretamente antes do sangue fluir para a placa de linfócito B onde fica o centro de B e macrófagos, de acordo com as leis do tecido conjuntivo linfoide branco folicular imune filtrante arterial esplênico hilar de filtro orgânico sistêmico imune vivo ativo reativo folicular branco e vermelho cordonal Billroth sinusal descontínuo hemático." }
    ];

    // Algoritmo de Embaralhamento (Fisher-Yates) robusto e blindado
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
            } else if (mode === 'pdf') {
                selectedData = pdfQuestionsData;
            } else if (mode === 'all') {
                // Juntar TODAS as 147 questões
                selectedData = [...textQuestionsData, ...imageQuestionsData, ...pdfQuestionsData];
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