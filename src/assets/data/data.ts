import { Data } from "./dataModel";

export const data: Data[] = [
    {   
        "id": 1,
        "title":"Qual personagem de Dragon Ball Z você seria?",
        "paragraph": "Descubra qual personagem de Dragon Ball Z você seria neste quiz emocionante! Responda às perguntas e desvende sua verdadeira identidade dentro do mundo épico de Dragon Ball Z. Será Goku, Vegeta, Gohan ou Piccolo? Prepare-se para treinar e se tornar o guerreiro Z mais poderoso!",
        "photoCover": "../../../assets/img/quizzes/dragon-ball-z.webp",
        "questions":[
        {
            "id":1,
            "question": "Qual é a sua abordagem em relação aos desafios?",
            "options":[
                {"id": 1, "name":"Gosto de enfrentá-los de frente e superar meus limites.", "alias":"GK"},
                {"id": 2, "name":"Busco sempre ser o melhor e superar todos os obstáculos.", "alias":"VG"},
                {"id": 3, "name":"Sou paciente e estratégico, preferindo observar antes de agir.", "alias":"PC"},
                {"id": 4, "name":"Tenho um coração gentil e prefiro encontrar soluções pacíficas sempre que possível.", "alias":"GH"}
            ]
        },
        {
            "id":2,
            "question": "O que você valoriza mais em um amigo?",
            "options":[
                {"id": 1, "name":"Lealdade e espírito de equipe.", "alias":"GK"},
                {"id": 2, "name":"Determinação e competitividade.", "alias":"VG"},
                {"id": 3, "name":"Sabedoria e inteligência.", "alias":"PC"},
                {"id": 4, "name":"Compaixão e empatia.", "alias":"GH"}
            ]
        },
        {
            "id":3,
            "question": "Qual é o seu estilo de luta preferido?",
            "options":[
                {"id": 1, "name":"Um estilo de luta dinâmico e cheio de energia.", "alias":"GK"},
                {"id": 2, "name":"Combates intensos e poderosos.", "alias":"VG"},
                {"id": 3, "name":"Utilizo estratégia e técnica em meus ataques.", "alias":"PC"},
                {"id": 4, "name":"Prefiro evitar lutas, mas defendo os outros quando necessário.", "alias":"GH"}
            ]
        },
        {
            "id":4,
            "question": "Como você reage diante de um erro ou derrota?",
            "options":[
                {"id": 1, "name":"Encaro como uma oportunidade de aprender e me tornar mais forte.", "alias":"GK"},
                {"id": 2, "name":"Fico frustrado e determinado a me superar na próxima vez.", "alias":"VG"},
                {"id": 3, "name":"Analiso os erros e busco aperfeiçoar minhas habilidades.", "alias":"PC"},
                {"id": 4, "name":"Sinto-me desanimado, mas busco confortar e apoiar os outros.", "alias":"GH"}
            ]
        },
        {
            "id":5,
            "question": "Qual é a sua motivação principal?",
            "options":[
                {"id": 1, "name":"Proteger aqueles que amo e garantir a paz.", "alias":"GK"},
                {"id": 2, "name":"Alcançar o poder máximo e ser o mais forte.", "alias":"VG"},
                {"id": 3, "name":"Buscar conhecimento e equilíbrio espiritual.", "alias":"PC"},
                {"id": 4, "name":"Encontrar harmonia e felicidade em minha vida.", "alias":"GH"}
            ]
        },
        {
            "id":6,
            "question": "Como você costuma lidar com desafios emocionais?",
            "options":[
                {"id": 1, "name":"Expresso minhas emoções de forma intensa e direta.", "alias":"GK"},
                {"id": 2, "name":"Tento esconder minhas emoções e manter uma imagem forte.", "alias":"VG"},
                {"id": 3, "name":"Procuro refletir e meditar para encontrar equilíbrio.", "alias":"PC"},
                {"id": 4, "name":"Sou sensível às emoções dos outros e busco ajudá-los.", "alias":"GH"}
            ]
        },
        {
            "id":7,
            "question": "Qual é a sua atitude em relação ao treinamento físico?",
            "options":[
                {"id": 1, "name":"Gosto de treinar intensamente e constantemente para melhorar.", "alias":"GK"},
                {"id": 2, "name":"Encaro o treinamento como uma competição pessoal.", "alias":"VG"},
                {"id": 3, "name":"Prefiro treinar de forma disciplinada e focada em técnicas.", "alias":"PC"},
                {"id": 4, "name":"Não sou muito fã de treinamento físico, mas faço o necessário.", "alias":"GH"}
            ]
        }
        ],
        "results":{
            "GK": "Parabéns! Você seria o Goku! Assim como ele, você é determinado, corajoso e valoriza a amizade. Sua busca constante pela superação reflete o espírito de um verdadeiro guerreiro. Continue iluminando o mundo com seu poder e carisma!",
            "VG": "Parabéns! Você é o Vegeta! Determinado, competitivo e sempre em busca de se tornar mais forte, assim como o Príncipe dos Saiyajins. Sua paixão pelo treinamento e ambição o impulsionam a superar limites constantemente. Continue perseverando e alcançando novos níveis de poder!",
            "PC": "Parabéns! Você seria o Piccolo! Assim como ele, você é estratégico, sábio e busca o equilíbrio. Sua abordagem cuidadosa diante dos desafios e sua capacidade de refletir o tornam um verdadeiro protetor da paz. Continue aperfeiçoando suas habilidades e inspirando os outros!",
            "GH": "Parabéns! Você é o Gohan! Com um coração gentil e uma força interior incrível, você é sensível, compassivo e busca conhecimento. Lembre-se do seu poder e enfrente desafios com coragem e determinação!"
        },
        "character": [
            {"id": "GK", "name": "Goku", "photo": "../../../assets/img/quizzes/goku.webp"},
            {"id": "VG", "name": "Vegeta", "photo": "../../../assets/img/quizzes/vegeta.webp"},
            {"id": "PC", "name": "Piccolo", "photo": "../../../assets/img/quizzes/piccolo.webp"},
            {"id": "GH", "name": "Gohan", "photo": "../../../assets/img/quizzes/gohan.webp"}
        ]
    },
    {   
        "id": 2,
        "title":"Qual personagem de Harry Potter você seria?",
        "paragraph": "",
        "photoCover": "../../../assets/img/quizzes/harry-potter.webp",
        "questions":[
        {
            "id":1,
            "question": "Qual é a sua abordagem diante de desafios?",
            "options":[
                {"id": 1, "name":"Enfrento-os com coragem e determinação.", "alias":"HR"},
                {"id": 2, "name":"Lido com eles com um senso de humor e leveza.", "alias":"RN"},
                {"id": 3, "name":"Procuro soluções lógicas e estratégicas.", "alias":"HM"},
                {"id": 4, "name":"Utilizo qualquer meio necessário para alcançar meus objetivos.", "alias":"VD"}
            ]
        },
        {
            "id":2,
            "question": "O que você valoriza mais em uma amizade?",
            "options":[
                {"id": 1, "name":"Lealdade e apoio incondicional.", "alias":"HR"},
                {"id": 2, "name":"Diversão e aventura compartilhada.", "alias":"RN"},
                {"id": 3, "name":"Inteligência e sabedoria.", "alias":"HM"},
                {"id": 4, "name":"Poder e domínio.", "alias":"VD"}
            ]
        },
        {
            "id":3,
            "question": "Qual é a sua maior qualidade?",
            "options":[
                {"id": 1, "name":"Coragem e bravura.", "alias":"HR"},
                {"id": 2, "name":"Senso de humor e descontração.", "alias":"RN"},
                {"id": 3, "name":"Inteligência e conhecimento.", "alias":"HM"},
                {"id": 4, "name":"Ambição e determinação.", "alias":"VD"}
            ]
        },
        {
            "id":4,
            "question": "Como você lida com a adversidade?",
            "options":[
                {"id": 1, "name":"Busco enfrentá-la de frente, mesmo quando é difícil.", "alias":"HR"},
                {"id": 2, "name":"Tento manter um bom humor e encontrar o lado positivo.", "alias":"RN"},
                {"id": 3, "name":"Analiso a situação e uso meu intelecto para resolver problemas.", "alias":"HM"},
                {"id": 4, "name":"Estou disposto a fazer qualquer coisa para superar obstáculos.", "alias":"VD"}
            ]
        },
        {
            "id":5,
            "question": "Qual é a sua motivação principal?",
            "options":[
                {"id": 1, "name":"Proteger aqueles que amo e lutar por justiça.", "alias":"HR"},
                {"id": 2, "name":"Aproveitar a vida e buscar momentos de felicidade.", "alias":"RN"},
                {"id": 3, "name":"Adquirir conhecimento e aprender constantemente.", "alias":"HM"},
                {"id": 4, "name":"Alcançar poder e dominar os outros.", "alias":"VD"}
            ]
        },
        {
            "id":6,
            "question": "Como você age diante de escolhas morais difíceis?",
            "options":[
                {"id": 1, "name":"Sigo meu coração e faço o que é certo, mesmo que seja difícil.", "alias":"HR"},
                {"id": 2, "name":"Procuro fazer escolhas que tragam alegria e felicidade.", "alias":"RN"},
                {"id": 3, "name":"Considero as implicações lógicas e éticas antes de decidir.", "alias":"HM"},
                {"id": 4, "name":"Faço o que for preciso para alcançar meus objetivos, independentemente das consequências.", "alias":"VD"}
            ]
        },
        {
            "id":7,
            "question": "Qual é a sua atitude em relação ao trabalho em equipe?",
            "options":[
                {"id": 1, "name":"Acredito na importância da colaboração e confio nos outros.", "alias":"HR"},
                {"id": 2, "name":"Gosto de trabalhar com os outros e me divertir enquanto faço isso.", "alias":"RN"},
                {"id": 3, "name":"Aprecio a contribuição de cada membro e busco o máximo de sinergia.", "alias":"HM"},
                {"id": 4, "name":"Prefiro trabalhar sozinho para garantir que as coisas sejam feitas da minha maneira.", "alias":"VD"}
            ]
        }
        ],
        "results":{
            "HR": "Parabéns! Você seria o Harry! Corajoso, determinado e com um coração nobre, você está destinado a grandes coisas. Siga em frente com valentia, pois a amizade é sua maior força. Continue enfrentando desafios com audácia e siga seu caminho com bravura!",
            "RN": "Parabéns! Você é o Ron! Assim como ele, você é leal, divertido e tem um grande coração. Sua lealdade inabalável e senso de humor contagiante fazem de você um amigo querido. Lembre-se de que sua determinação e coragem são características valiosas. Em suas aventuras, conte com seus amigos e aproveite os momentos divertidos!",
            "HM": "Parabéns! Você é a Hermione! Assim como ela, você é inteligente, curiosa e determinada. Sua busca constante pelo conhecimento e sua capacidade de solucionar problemas destacam suas qualidades. Lembre-se de que seu intelecto e coragem são poderosos aliados. Continue a explorar seu potencial e fazer a diferença no mundo!",
            "VD": "Você é Voldemort! Assim como ele, você possui uma ambição poderosa e uma determinação incansável para alcançar seus objetivos. Sua sede de poder e habilidade em tomar decisões difíceis podem levá-lo a caminhos sombrios. Lembre-se de que o poder absoluto nem sempre traz a verdadeira realização. Procure encontrar um equilíbrio e considere as consequências de suas ações. A jornada para o autoconhecimento e a redenção pode estar ao seu alcance."
        },
        "character": [
            {"id": "HR", "name": "Harry", "photo": "../../../assets/img/quizzes/harry.webp"},
            {"id": "RN", "name": "Ron", "photo": "../../../assets/img/quizzes/ron.webp"},
            {"id": "HM", "name": "Hermione", "photo": "../../../assets/img/quizzes/hermione.webp"},
            {"id": "VD", "name": "Voldemort", "photo": "../../../assets/img/quizzes/voldemort.webp"}
        ]
    },
    {   
        "id": 3,
        "title":"Qual super-herói da Marvel você seria?",
        "paragraph": "",
        "photoCover": "../../../assets/img/quizzes/marvel.webp",
        "questions":[
        {
            "id":1,
            "question": "Qual palavra melhor descreve sua personalidade?",
            "options":[
                {"id": 1, "name":"Inteligente", "alias":"HF"},
                {"id": 2, "name":"Brincalhão", "alias":"HA"},
                {"id": 3, "name":"Leal", "alias":"CA"},
                {"id": 4, "name":"Poderoso", "alias":"HK"}
            ]
        },
        {
            "id":2,
            "question": "Como você se sente em relação à tecnologia?",
            "options":[
                {"id": 1, "name":"Sou fascinado e sempre procuro estar atualizado.", "alias":"HF"},
                {"id": 2, "name":"Acho interessante, mas não sou tão habilidoso com ela.", "alias":"HA"},
                {"id": 3, "name":"Uso quando necessário, mas prefiro métodos tradicionais.", "alias":"CA"},
                {"id": 4, "name":"Não me importo muito com tecnologia.", "alias":"HK"}
            ]
        },
        {
            "id":3,
            "question": "Qual característica física você considera mais importante?",
            "options":[
                {"id": 1, "name":"Inteligência", "alias":"HF"},
                {"id": 2, "name":"Agilidade", "alias":"HA"},
                {"id": 3, "name":"Força", "alias":"CA"},
                {"id": 4, "name":"Resistência", "alias":"HK"}
            ]
        },
        {
            "id":4,
            "question": "Qual seria sua reação em situações de perigo?",
            "options":[
                {"id": 1, "name":"Planejaria uma estratégia inteligente para enfrentar o problema.", "alias":"HF"},
                {"id": 2, "name":"Usaria seu senso de humor para aliviar a tensão.", "alias":"HA"},
                {"id": 3, "name":"Defenderia os outros e colocaria sua vida em risco, se necessário.", "alias":"CA"},
                {"id": 4, "name":"Desencadearia sua fúria e atacaria sem hesitação.", "alias":"HK"}
            ]
        },
        {
            "id":5,
            "question": "Qual é o seu maior medo?",
            "options":[
                {"id": 1, "name":"Falhar em proteger aqueles que ama.", "alias":"HF"},
                {"id": 2, "name":"Perder as pessoas importantes em sua vida.", "alias":"HA"},
                {"id": 3, "name":"Trair seus princípios e valores.", "alias":"CA"},
                {"id": 4, "name":"Não ter controle sobre si mesmo.", "alias":"HK"}
            ]
        },
        {
            "id":6,
            "question": "Qual é a sua atitude em relação à liderança?",
            "options":[
                {"id": 1, "name":"Gosto de liderar e tomar decisões importantes.", "alias":"HF"},
                {"id": 2, "name":"Prefiro trabalhar em equipe, mas também posso assumir a liderança quando necessário.", "alias":"HA"},
                {"id": 3, "name":"Valorizo líderes justos e honestos.", "alias":"CA"},
                {"id": 4, "name":"Não me importo muito em liderar, desde que o trabalho seja bem feito.", "alias":"HK"}
            ]
        },
        {
            "id":7,
            "question": "Qual é o seu estilo de luta preferido?",
            "options":[
                {"id": 1, "name":"Uso de tecnologia e estratégia.", "alias":"HF"},
                {"id": 2, "name":"Combate ágil e acrobático.", "alias":"HA"},
                {"id": 3, "name":"Combate corpo a corpo tradicional.", "alias":"CA"},
                {"id": 4, "name":"Utilizo minha força e poder para esmagar meus oponentes.", "alias":"HK"}
            ]
        }
        ],
        "results":{
            "HF": "Parabéns! Você é o Homem de Ferro! Com sua mente brilhante e habilidades tecnológicas, você é corajoso, determinado e está sempre à frente dos outros. Continue usando sua criatividade e protegendo aqueles que ama!",
            "HA": "Parabéns! Você é o Homem-Aranha! Inteligente, brincalhão e ágil, você usa seus poderes para ajudar os outros. Lembre-se: com grandes poderes vêm grandes responsabilidades. Continue acreditando em si mesmo e faça a diferença!",
            "CA": "Parabéns! Você é o Capitão América! Assim como ele, você é leal, corajoso e está sempre disposto a defender os outros. Sua ética forte e seu compromisso com a justiça são admiráveis. Você é um líder nato e inspira aqueles ao seu redor. Lembre-se de que sua força não está apenas em seu físico, mas também em sua determinação e senso de dever. Continue a ser um exemplo de nobreza e lute pelos valores em que acredita!",
            "HK": "Parabéns! Você é o Hulk! Assim como ele, você possui uma força imensa e uma determinação poderosa. Sua natureza feroz é equilibrada com um coração gentil. Lembre-se de que você tem a capacidade de superar qualquer desafio e transformar sua força em algo positivo. Continue a ser resiliente e use seu poder para proteger e ajudar os outros!"
        },
        "character": [
            {"id": "HF", "name": "Homem de Ferro", "photo": "../../../assets/img/quizzes/homem-de-ferro.webp"},
            {"id": "HA", "name": "Homem-Aranha", "photo": "../../../assets/img/quizzes/homem-aranha.webp"},
            {"id": "CA", "name": "Capitão América", "photo": "../../../assets/img/quizzes/capitao-america.webp"},
            {"id": "HK", "name": "Hulk", "photo": "../../../assets/img/quizzes/hulk.webp"}
        ]
    },
    {   
        "id": 4,
        "title":"Qual personagem de Star Wars você seria?",
        "paragraph": "",
        "photoCover": "../../../assets/img/quizzes/sky-wars.webp",
        "questions":[
        {
            "id":1,
            "question": "Qual é a sua abordagem em relação aos desafios?",
            "options":[
                {"id": 1, "name":"Eu enfrento os desafios de forma estratégica e calculada.", "alias":"DV"},
                {"id": 2, "name":"Eu confio no meu instinto e me adapto rapidamente às situações.", "alias":"LK"},
                {"id": 3, "name":"Eu sou resiliente e persisto mesmo diante de adversidades.", "alias":"LE"},
                {"id": 4, "name":"Eu prefiro resolver os desafios com astúcia e esperteza.", "alias":"HS"}
            ]
        },
        {
            "id":2,
            "question": "Como você se relaciona com seus familiares e entes queridos?",
            "options":[
                {"id": 1, "name":"Eu tenho uma conexão forte e leal com minha família.", "alias":"DV"},
                {"id": 2, "name":"Eu sou próximo dos meus familiares, mas também valorizo minha independência.", "alias":"LK"},
                {"id": 3, "name":"Eu coloco minha família em primeiro lugar, mesmo que isso signifique sacrifícios pessoais.", "alias":"LE"},
                {"id": 4, "name":"Eu sou um pouco reservado quando se trata de assuntos familiares.", "alias":"HS"}
            ]
        },
        {
            "id":3,
            "question": "Qual é o seu estilo de liderança preferido?",
            "options":[
                {"id": 1, "name":"Eu sou um líder autoritário e determinado.", "alias":"DV"},
                {"id": 2, "name":"Eu sou um líder inspirador e motivador.", "alias":"LK"},
                {"id": 3, "name":"Eu sou um líder estratégico e cuidadoso.", "alias":"LE"},
                {"id": 4, "name":"Eu sou um líder descontraído e carismático.", "alias":"HS"}
            ]
        },
        {
            "id":4,
            "question": "Qual é o seu relacionamento com o conceito de destino?",
            "options":[
                {"id": 1, "name":"Eu acredito que somos os mestres do nosso próprio destino.", "alias":"DV"},
                {"id": 2, "name":"Eu acredito em um destino maior que guia nossos caminhos.", "alias":"LK"},
                {"id": 3, "name":"Eu acredito que o destino pode ser influenciado por nossas escolhas.", "alias":"LE"},
                {"id": 4, "name":"Eu acredito que o destino é algo imprevisível e aleatório.", "alias":"HS"}
            ]
        },
        {
            "id":5,
            "question": "Como você lida com o poder e a responsabilidade?",
            "options":[
                {"id": 1, "name":"Eu acredito que o poder deve ser conquistado e utilizado com sabedoria.", "alias":"DV"},
                {"id": 2, "name":"Eu me sinto confortável com o poder e assumo a responsabilidade que vem com ele.", "alias":"LK"},
                {"id": 3, "name":"Eu sou cuidadoso ao lidar com o poder e sempre busco usá-lo para o bem.", "alias":"LE"},
                {"id": 4, "name":"Eu sou um pouco cético em relação ao poder e evito assumir muitas responsabilidades.", "alias":"HS"}
            ]
        },
        {
            "id":6,
            "question": "Qual é a sua atitude em relação aos riscos?",
            "options":[
                {"id": 1, "name":"Eu estou disposto a correr grandes riscos em busca de grandes recompensas.", "alias":"DV"},
                {"id": 2, "name":"Eu sou cauteloso ao assumir riscos, preferindo uma abordagem mais segura.", "alias":"LK"},
                {"id": 3, "name":"Eu estou disposto a assumir riscos calculados para alcançar meus objetivos.", "alias":"LE"},
                {"id": 4, "name":"Eu evito riscos desnecessários e opto por abordagens mais estáveis.", "alias":"HS"}
            ]
        }
        ],
        "results":{
            "DV": "Você é o Darth Vader! Assim como ele, você possui uma presença imponente e uma força poderosa. Sua determinação e habilidades estratégicas são notáveis. Lembre-se de que mesmo nas situações mais obscuras, sempre há espaço para redenção e transformação. Use sua influência para promover a mudança e buscar equilíbrio. Que a Força esteja com você!",
            "LK": "Parabéns! Você é o Luke Skywalker! Assim como Luke, você possui uma conexão profunda com o poder interior e um espírito de aventura. Sua determinação e coragem o tornam capaz de enfrentar grandes desafios. Lembre-se de confiar no seu instinto e nunca subestimar o seu potencial. Que a Força esteja com você em todas as suas jornadas!",
            "LE": "Parabéns! Você é a Leia Organa! Assim como ela, você é uma pessoa corajosa, determinada e leal. Sua liderança e conexão com a família são admiráveis. Você está sempre pronta para lutar pelo que acredita e defender aqueles que ama. Continue inspirando os outros com sua força e determinação!",
            "HS": "Parabéns! Você é o Han Solo! Assim como ele, você é corajoso, destemido e tem um espírito aventureiro. Você é conhecido por sua sagacidade e charme irresistível. Sua independência e habilidade de se adaptar a diferentes situações são características admiráveis. Continue a enfrentar desafios de forma audaciosa e aproveite a emoção da jornada!"
        },
        "character": [
            {"id": "DV", "name": "Darth Vader", "photo": "../../../assets/img/quizzes/darth-vader.webp"},
            {"id": "LK", "name": "Luke Skywalker", "photo": "../../../assets/img/quizzes/luke-skywalker.webp"},
            {"id": "LE", "name": "Leia Organa", "photo": "../../../assets/img/quizzes/leia-organa.webp"},
            {"id": "HS", "name": "Han Solo", "photo": "../../../assets/img/quizzes/han-solo.webp"}
        ]
    },
    {
        "id": 5,
        "title": "Qual membro da Liga da Justiça você seria?",
        "paragraph": "",
        "photoCover": "../../../assets/img/quizzes/liga-da-justica.webp",
        "questions": [
            {
              "id": 1,
              "question": "Qual é a sua abordagem em relação à justiça?",
              "options": [
                  {"id": 1, "name": "Estou disposto a fazer o que for necessário para alcançá-la.", "alias": "BM"},
                  {"id": 2, "name": "Acredito no poder da verdade e da bondade para promovê-la.", "alias": "SM"},
                  {"id": 3, "name": "Prefiro agir rapidamente para garantir a justiça.", "alias": "FS"},
                  {"id": 4, "name": "Valorizo a honestidade e a equidade em todos os aspectos.", "alias": "MV"}
              ]
            },
            {
              "id": 2,
              "question": "Como você utiliza seus talentos e habilidades?",
              "options": [
                  {"id": 1, "name": "Conto com minha inteligência e recursos tecnológicos.", "alias": "BM"},
                  {"id": 2, "name": "Tenho uma força e poderes sobre-humanos que utilizo para ajudar os outros.", "alias": "SM"},
                  {"id": 3, "name": "Sou extremamente rápido e ágil, aproveitando a velocidade a meu favor.", "alias": "FH"},
                  {"id": 4, "name": "Possuo habilidades excepcionais de combate e estratégia.", "alias": "MV"}
              ]
            },
            {
              "id": 3,
              "question": "Qual é a sua atitude em relação à liderança?",
              "options": [
                  {"id": 1, "name": "Gosto de liderar e tomar decisões importantes.", "alias": "BM"},
                  {"id": 2, "name": "Prefiro ser uma inspiração para os outros e liderar pelo exemplo.", "alias": "SM"},
                  {"id": 3, "name": "Sou mais um membro da equipe, mas contribuo com minha velocidade e agilidade.", "alias": "FS"},
                  {"id": 4, "name": "Possuo habilidades de liderança, mas também valorizo a colaboração.", "alias": "MV"}
              ]
            },
            {
              "id": 4,
              "question": "Qual é o seu principal valor pessoal?",
              "options": [
                  {"id": 1, "name": "Coragem e determinação.", "alias": "BM"},
                  {"id": 2, "name": "Honestidade e integridade.", "alias": "SM"},
                  {"id": 3, "name": "Velocidade e agilidade.", "alias": "FS"},
                  {"id": 4, "name": "Justiça e igualdade.", "alias": "MV"}
              ]
            },
            {
              "id": 5,
              "question": "Como você lida com desafios?",
              "options": [
                  {"id": 1, "name": "Encaro-os de frente e encontro soluções estratégicas.", "alias": "BM"},
                  {"id": 2, "name": "Confio em minha força e poder para superá-los.", "alias": "SM"},
                  {"id": 3, "name": "Utilizo minha velocidade para contornar os desafios.", "alias": "FS"},
                  {"id": 4, "name": "Enfrento-os com habilidades de combate e astúcia.", "alias": "MV"}
              ]
            },
            {
              "id": 6,
              "question": "Qual é a sua relação com os outros membros da equipe?",
              "options": [
                  {"id": 1, "name": "Sou um pouco reservado, mas valorizo a parceria com a equipe.", "alias": "BM"},
                  {"id": 2, "name": "Gosto de trabalhar em equipe e estou sempre pronto para ajudar.", "alias": "SM"},
                  {"id": 3, "name": "Tenho uma conexão especial com os outros membros devido à minha velocidade.", "alias": "FS"},
                  {"id": 4, "name": "Às vezes, discordo dos outros, mas no final, somos uma equipe unida.", "alias": "MV"}
              ]
            },
            {
              "id": 7,
              "question": "Qual é o seu objetivo final como herói?",
              "options": [
                  {"id": 1, "name": "Proteger os inocentes e fazer justiça.", "alias": "BM"},
                  {"id": 2, "name": "Ser uma inspiração e símbolo de esperança para as pessoas.", "alias": "SM"},
                  {"id": 3, "name": "Utilizar minha velocidade para ajudar e salvar vidas.", "alias": "FS"},
                  {"id": 4, "name": "Combater o crime e manter a paz em nome da justiça.", "alias": "MV"}
              ]
            }
        ],
        "results": {
            "BM": "Você é o Batman! Assim como ele, você é inteligente, estratégico e determinado. Você está sempre preparado para enfrentar desafios e proteger os outros. Sua coragem e habilidades investigativas são admiráveis. Continue a luta pela justiça!",
            "SM": "Você é o Superman! Assim como ele, você possui uma força incrível, além de um coração nobre e uma dedicação em proteger os inocentes. Sua liderança e bondade são inspiradoras. Use seus poderes para ajudar aqueles que precisam e faça a diferença no mundo!",
            "FS": "Você é o Flash! Assim como ele, você é ágil, divertido e sempre está pronto para agir rapidamente. Sua velocidade e otimismo contagiam todos ao seu redor. Use seus poderes para trazer esperança e ajudar a salvar o dia!",
            "MV": "Você é a Mulher Maravilha! Assim como ela, você é corajosa, forte e defensora da verdade e da justiça. Seus ideais nobres e sua determinação são inspiradores. Continue a lutar pela igualdade e pela paz!"
        },
        "character": [
            {"id": "BM", "name": "Batman", "photo": "../../../assets/img/quizzes/batman.webp"},
            {"id": "SM", "name": "Superman", "photo": "../../../assets/img/quizzes/superman.webp"},
            {"id": "FS", "name": "Flash", "photo": "../../../assets/img/quizzes/flash.webp"},
            {"id": "MV", "name": "Mulher Maravilha", "photo": "../../../assets/img/quizzes/mulher-maravilha.webp"}
        ]
    }
]