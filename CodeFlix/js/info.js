const infos = {
    html5: {
        titulo: 'HTML5',
        descricao: 'HTML5 é a linguagem de marcação padrão utilizada para criar e estruturar conteúdos na web. Ela introduziu novos elementos e atributos que facilitam o desenvolvimento de páginas web sem a necessidade de plugins adicionais. Permite a incorporação de multimídia como áudio, vídeo, gráficos 2D e 3D, além de melhorar a semântica e acessibilidade dos sites. Também trouxe melhorias na manipulação de formulários, suporte para geolocalização, armazenamento local e APIs para comunicação em tempo real.',
        utilizacao: 'É amplamente utilizada para o desenvolvimento de sites e aplicações web, sendo a base para qualquer desenvolvimento front-end, desde blogs pessoais a complexos sistemas corporativos.',
        link: 'https://en.wikipedia.org/wiki/HTML5'
    },
    css3: {
        titulo: 'CSS3',
        descricao: 'CSS3 é a linguagem de estilos utilizada para definir a aparência e formatação de documentos escritos em HTML. Com a introdução do CSS3, tornou-se possível criar layouts responsivos, aplicar animações, transições, sombras, gradientes, e manipulação de fontes. Além disso, CSS3 oferece a possibilidade de uso de Flexbox e Grid Layout, que são ferramentas poderosas para construção de layouts mais complexos e responsivos.',
        utilizacao: 'Utilizada para estilizar páginas web, tornando-as visualmente atraentes e amigáveis ao usuário, permitindo uma separação clara entre a estrutura e o estilo do documento.',
        link: 'https://en.wikipedia.org/wiki/CSS'
    },
    javascript: {
        titulo: 'JavaScript',
        descricao: 'JavaScript é uma linguagem de programação versátil que permite a criação de conteúdo dinâmico e interativo nas páginas web. É amplamente utilizado para adicionar funcionalidades avançadas, como animações, manipulação de eventos, controle do DOM, e comunicação com servidores via AJAX. Com a introdução de Node.js, JavaScript também pode ser utilizado no lado do servidor, permitindo o desenvolvimento full-stack com uma única linguagem.',
        utilizacao: 'Fundamental no desenvolvimento de aplicações web interativas, incluindo validações de formulários, manipulação de DOM, comunicação com APIs, desenvolvimento de jogos, e muito mais.',
        link: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    bootstrap: {
        titulo: 'Bootstrap',
        descricao: 'Bootstrap é um framework front-end amplamente utilizado que facilita o desenvolvimento de sites responsivos e mobile-first. Ele oferece um conjunto de ferramentas, componentes prontos para uso, e uma coleção de CSS e JavaScript que padronizam o design e aceleram o desenvolvimento de layouts com consistência e sem esforço manual de estilização.',
        utilizacao: 'Utilizado para agilizar o desenvolvimento de layouts responsivos e consistentes, permitindo que desenvolvedores criem rapidamente protótipos e aplicações com design limpo e moderno.',
        link: 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
    },
    git: {
        titulo: 'Git',
        descricao: 'Git é um sistema de controle de versão distribuído que permite o rastreamento de mudanças no código fonte durante o desenvolvimento de software. Ele facilita a colaboração entre equipes, permitindo que vários desenvolvedores trabalhem simultaneamente em um projeto, gerenciem diferentes versões do código e integrem suas alterações de forma eficiente.',
        utilizacao: 'Muito utilizado em equipes de desenvolvimento para versionamento de código, colaboração em projetos de software e gestão de histórico de alterações.',
        link: 'https://en.wikipedia.org/wiki/Git'
    },
    php: {
        titulo: 'PHP',
        descricao: 'PHP é uma linguagem de script do lado do servidor, projetada principalmente para o desenvolvimento web dinâmico. É uma das linguagens mais populares para criação de sites interativos e pode ser embutida diretamente no HTML. PHP suporta uma ampla gama de bases de dados, integração com APIs, e frameworks populares como Laravel, facilitando o desenvolvimento de aplicações web robustas.',
        utilizacao: 'Usada para construir sites e aplicações web dinâmicas, processar formulários, interagir com bancos de dados, gerar conteúdo dinâmico, e mais.',
        link: 'https://en.wikipedia.org/wiki/PHP'
    },
    python: {
        titulo: 'Python',
        descricao: 'Python é uma linguagem de programação versátil, conhecida pela sua sintaxe simples e legibilidade, o que a torna ideal tanto para iniciantes quanto para desenvolvedores experientes. Python é amplamente utilizada em áreas como desenvolvimento web, ciência de dados, aprendizado de máquina, automação de tarefas, desenvolvimento de scripts, e muito mais, graças à sua vasta biblioteca de pacotes e comunidade ativa.',
        utilizacao: 'Popular entre desenvolvedores para automação de tarefas, desenvolvimento de scripts, análise de dados, inteligência artificial, desenvolvimento web e muitas outras áreas.',
        link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    nextjs: {
        titulo: 'Next.js',
        descricao: 'Next.js é um framework React que facilita a criação de aplicações web modernas com renderização do lado do servidor, geração de sites estáticos, e funcionalidades avançadas como roteamento dinâmico, suporte a APIs e otimização automática de imagens. Ele é altamente focado em performance e experiência do desenvolvedor, permitindo o desenvolvimento de aplicações rápidas e escaláveis.',
        utilizacao: 'Usado principalmente para desenvolvimento de aplicações web escaláveis, rápidas e otimizadas, proporcionando uma excelente experiência para o usuário final.',
        link: 'https://en.wikipedia.org/wiki/Next.js'
    },
    postgresql: {
        titulo: 'PostgreSQL',
        descricao: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional avançado, conhecido por sua robustez, extensibilidade e suporte a padrões SQL. Ele oferece recursos avançados como transações ACID, replicação, extensões customizadas, e suporte para tipos de dados complexos, tornando-o ideal para aplicações que exigem um banco de dados SQL poderoso e confiável.',
        utilizacao: 'Utilizado em sistemas que precisam de um banco de dados SQL confiável, escalável e com suporte a uma ampla gama de funcionalidades.',
        link: 'https://en.wikipedia.org/wiki/PostgreSQL'
    },
    typescript: {
        titulo: 'TypeScript',
        descricao: 'TypeScript é um superconjunto de JavaScript que adiciona tipagem estática, interfaces e outros recursos que ajudam a encontrar erros antes mesmo da execução do código. Ele compila para JavaScript padrão, tornando possível sua utilização em qualquer navegador ou ambiente que suporte JavaScript, melhorando a manutenibilidade e a escalabilidade de grandes projetos.',
        utilizacao: 'Muito usado em grandes projetos de JavaScript para melhorar a manutenção e a robustez do código, especialmente em projetos de longa duração com múltiplos desenvolvedores.',
        link: 'https://en.wikipedia.org/wiki/TypeScript'
    },
    kotlin: {
        titulo: 'Kotlin',
        descricao: 'Kotlin é uma linguagem de programação moderna, concisa e segura, que foi desenvolvida para interoperar completamente com Java. É amplamente utilizada no desenvolvimento Android como uma alternativa mais expressiva e menos propensa a erros em comparação ao Java, além de suportar desenvolvimento multiplataforma.',
        utilizacao: 'Principalmente usada para desenvolvimento de aplicações Android, mas também ganha popularidade em desenvolvimento de backend, aplicações web e multiplataforma.',
        link: 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)'
    },
    lua: {
        titulo: 'Lua',
        descricao: 'Lua é uma linguagem de script poderosa, leve e embutida, popular em desenvolvimento de jogos e scripts de configuração devido à sua flexibilidade e simplicidade. Ela é projetada para ser embutida em outras aplicações, proporcionando um ambiente de scripting que pode ser integrado facilmente.',
        utilizacao: 'Usada principalmente em desenvolvimento de jogos (como com o motor Unity), scripts de configuração e automação, e em sistemas embarcados devido à sua leveza.',
        link: 'https://en.wikipedia.org/wiki/Lua_(programming_language)'
    },
    'jquery-mobile': {
        titulo: 'jQuery Mobile',
        descricao: 'jQuery Mobile é um framework baseado em HTML5 que permite o desenvolvimento de aplicações móveis responsivas e amigáveis a toque. Ele facilita a criação de interfaces de usuário consistentes em diferentes dispositivos móveis, com suporte para temas e transições suaves.',
        utilizacao: 'Usado para criar interfaces de usuário consistentes em dispositivos móveis, permitindo desenvolvimento rápido com menos código e maior compatibilidade entre diferentes dispositivos.',
        link: 'https://en.wikipedia.org/wiki/JQuery_Mobile'
    },
    reactjs: {
        titulo: 'React.js',
        descricao: 'React.js é uma biblioteca JavaScript para construção de interfaces de usuário. Com foco em componentes, permite criar UIs dinâmicas e eficientes, dividindo a interface em partes menores e reutilizáveis. React é conhecido por seu desempenho, graças ao uso do Virtual DOM, e pela facilidade de integração com outras bibliotecas ou frameworks.',
        utilizacao: 'Extensivamente usado para desenvolvimento de aplicações web interativas, Single Page Applications (SPA) e na construção de interfaces de usuário complexas.',
        link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)'
    },
    'c-sharp': {
        titulo: 'C#',
        descricao: 'C# é uma linguagem de programação moderna, orientada a objetos, desenvolvida pela Microsoft. É usada principalmente para desenvolvimento de aplicações na plataforma .NET, abrangendo desde softwares desktop até web services e jogos. C# é conhecida por sua simplicidade, modernidade e forte suporte a paradigmas de programação como POO e programação assíncrona.',
        utilizacao: 'Usada no desenvolvimento de software de desktop, jogos (especialmente com Unity), aplicações web e serviços de backend, entre outros.',
        link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
    },
    swift: {
        titulo: 'Swift',
        descricao: 'Swift é uma linguagem de programação desenvolvida pela Apple para iOS, macOS, watchOS e tvOS. Ela é moderna, segura e otimizada para performance, combinando a velocidade e segurança da linguagem de baixo nível com a simplicidade e elegância das linguagens modernas. Swift é projetada para ser fácil de aprender e usar, facilitando a criação de aplicativos rápidos e seguros.',
        utilizacao: 'Principalmente usada para desenvolvimento de aplicações para iPhone, iPad, Mac, Apple Watch e Apple TV, sendo a linguagem recomendada pela Apple para novos projetos.',
        link: 'https://en.wikipedia.org/wiki/Swift_(programming_language)'
    },
    java: {
        titulo: 'Java',
        descricao: 'Java é uma linguagem de programação robusta, orientada a objetos e independente de plataforma. É amplamente utilizada em aplicações corporativas, desenvolvimento de aplicativos Android, servidores, e dispositivos embarcados. Java é conhecida por sua estabilidade, escalabilidade e por ter uma grande comunidade de desenvolvedores.',
        utilizacao: 'Utilizada em uma ampla gama de aplicações, desde desenvolvimento de apps Android até sistemas de backend robustos, aplicações corporativas, e soluções de Big Data.',
        link: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
    },
    ruby: {
        titulo: 'Ruby',
        descricao: 'Ruby é uma linguagem de programação dinâmica, focada na simplicidade e produtividade. Ela possui uma sintaxe elegante que é natural de ler e fácil de escrever. Ruby é conhecida por seu framework Ruby on Rails, que simplifica o desenvolvimento de aplicações web, permitindo o desenvolvimento rápido e eficiente.',
        utilizacao: 'Popular para desenvolvimento web com o framework Ruby on Rails, conhecido por sua simplicidade e rapidez, além de ser usado em automação de tarefas e scripts.',
        link: 'https://en.wikipedia.org/wiki/Ruby_(programming_language)'
    },
    ionic: {
        titulo: 'Ionic',
        descricao: 'Ionic é um framework open-source para construção de aplicações móveis híbridas utilizando tecnologias web como HTML, CSS e JavaScript. Ele permite que desenvolvedores construam aplicativos que funcionam em múltiplas plataformas com uma única base de código, oferecendo uma experiência de usuário nativa através de componentes móveis prontos.',
        utilizacao: 'Usado para criar apps móveis que podem ser implantados tanto em iOS quanto Android com uma única base de código, facilitando o desenvolvimento multiplataforma.',
        link: 'https://en.wikipedia.org/wiki/Ionic_(framework)'
    },
    mongodb: {
        titulo: 'MongoDB',
        descricao: 'MongoDB é um banco de dados NoSQL orientado a documentos, que armazena dados em formato JSON, permitindo flexibilidade, escalabilidade e facilidade de integração com diversas linguagens de programação. Ele é ideal para aplicações que requerem uma modelagem de dados ágil e que precisam lidar com grandes volumes de dados não estruturados ou semiestruturados.',
        utilizacao: 'Comumente usado em aplicações que requerem alta escalabilidade e desempenho, especialmente com grandes volumes de dados, como em sistemas de análise de dados, aplicativos web e mobile.',
        link: 'https://en.wikipedia.org/wiki/MongoDB'
    },
    jquery: {
        titulo: 'jQuery',
        descricao: 'jQuery é uma biblioteca JavaScript rápida e concisa que simplifica o HTML document traversal, manipulação de eventos, animação, e Ajax. Ela tornou-se muito popular por reduzir significativamente a quantidade de código necessário para tarefas comuns e oferecer suporte cross-browser de forma simplificada.',
        utilizacao: 'Muito usada para simplificar a manipulação de DOM, criar animações, fazer requisições Ajax, e adicionar interatividade de forma rápida e eficiente.',
        link: 'https://en.wikipedia.org/wiki/JQuery'
    },
    angular: {
        titulo: 'Angular',
        descricao: 'Angular é uma plataforma de desenvolvimento para construir aplicações web dinâmicas de página única (SPA) utilizando TypeScript. Ele oferece uma arquitetura modular, um poderoso sistema de templates e injeção de dependências, tornando-o uma escolha popular para aplicações de grande escala.',
        utilizacao: 'Popular para desenvolvimento de aplicações web escaláveis e complexas, proporcionando uma estrutura bem definida que facilita o desenvolvimento e manutenção de projetos complexos.',
        link: 'https://en.wikipedia.org/wiki/Angular_(web_framework)'
    },
    unity: {
        titulo: 'Unity',
        descricao: 'Unity é uma plataforma de desenvolvimento de jogos cross-platform amplamente usada, permitindo a criação de experiências 2D e 3D. Ela suporta uma vasta gama de plataformas, desde dispositivos móveis até realidade aumentada e virtual, e oferece uma interface amigável com ferramentas visuais para design de jogos.',
        utilizacao: 'Usada no desenvolvimento de jogos para PC, consoles, dispositivos móveis, realidade aumentada/virtual, simuladores, e outras experiências interativas.',
        link: 'https://en.wikipedia.org/wiki/Unity_(game_engine)'
    },
    laravel: {
        titulo: 'Laravel',
        descricao: 'Laravel é um framework PHP para desenvolvimento de aplicações web com uma sintaxe expressiva e elegante. Ele simplifica tarefas comuns como roteamento, autenticação, migrações de banco de dados, e envio de emails, proporcionando uma experiência de desenvolvimento agradável e eficiente.',
        utilizacao: 'Comumente usado para construir aplicações web robustas, escaláveis e seguras com PHP, permitindo um desenvolvimento ágil e estruturado.',
        link: 'https://en.wikipedia.org/wiki/Laravel'
    },
    'android-studio': {
        titulo: 'Android Studio',
        descricao: 'Android Studio é o ambiente de desenvolvimento integrado (IDE) oficial para o sistema operacional Android, baseado no IntelliJ IDEA. Ele oferece ferramentas poderosas para desenvolvimento de aplicativos Android, como um editor de layout visual, emuladores de dispositivos, e suporte para linguagens como Java, Kotlin e C++.',
        utilizacao: 'Usado para o desenvolvimento de aplicativos Android com suporte completo para todas as fases do ciclo de desenvolvimento, desde a codificação até o teste e implantação.',
        link: 'https://en.wikipedia.org/wiki/Android_Studio'
    },
    mysql: {
        titulo: 'MySQL',
        descricao: 'MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto, muito popular para armazenamento de dados. É conhecido por sua rapidez, confiabilidade e facilidade de uso. MySQL é amplamente utilizado em aplicações web, especialmente em conjunto com PHP e outras linguagens de script do lado do servidor.',
        utilizacao: 'Usado em uma ampla variedade de aplicações, de pequenos sites a grandes plataformas de comércio eletrônico, oferecendo uma solução confiável para gerenciamento de dados.',
        link: 'https://en.wikipedia.org/wiki/MySQL'
    },
    nodejs: {
        titulo: 'Node.js',
        descricao: 'Node.js é um ambiente de execução JavaScript que permite o uso do JavaScript do lado do servidor para construir aplicações de rede escaláveis. Ele é baseado no motor JavaScript V8 do Google Chrome e utiliza um modelo de E/S não bloqueante e orientado a eventos, tornando-o leve e eficiente, ideal para aplicações em tempo real.',
        utilizacao: 'Extensivamente utilizado para desenvolvimento de backend de aplicações web, APIs, serviços de rede, chatbots, e muito mais, proporcionando alta performance e escalabilidade.',
        link: 'https://en.wikipedia.org/wiki/Node.js'
    }
};
