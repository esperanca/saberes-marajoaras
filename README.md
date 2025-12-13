# Saberes Marajoaras - Acervo Cultural

Site dedicado à preservação e difusão dos saberes tradicionais da cultura marajoara, patrimônio cultural do estado do Pará.

## Sobre o Projeto

Inspirado no design do Acervo da Laje de Salvador, este site apresenta os conhecimentos ancestrais da Ilha de Marajó através de uma navegação vertical com categorias em destaque visual.

## Categorias de Saberes

O site apresenta saberes organizados nas seguintes categorias:

- **Cerâmica Marajoara** - Arte milenar em argila com padrões geométricos e desenhos labirínticos
- **Danças e Ritmos** - Carimbó, retumbão e outras manifestações da cultura cabocla marajoara
- **Oralidade e Memória** - Lendas, mitos e histórias dos povos ribeirinhos e indígenas
- **Curadoria Cultural** - Preservação e valorização do patrimônio material e imaterial
- **Festivais e Celebrações** - Festividades religiosas e culturais que celebram a identidade marajoara

## Funcionalidades

- Design responsivo para mobile, tablet e desktop
- Navegação vertical com categorias em destaque com imagens grandes
- Páginas dedicadas para cada categoria de saber
- Paleta de cores inspirada na cerâmica marajoara (tons terrosos)
- Efeito parallax nas imagens de fundo
- Formulário de contato funcional
- Animações suaves e transições elegantes
- Menu mobile interativo

## Como usar

1. Abra o arquivo `index.html` em um navegador web
2. Navegue verticalmente pelas categorias de saberes
3. Clique em uma categoria para acessar sua página dedicada
4. Explore projetos, técnicas e mestres de cada área
5. Use o formulário de contato para contribuir com o acervo

## Estrutura de Arquivos

```
portfolio-cultural/
├── index.html       # Página principal com categorias
├── ceramica.html    # Página dedicada à Cerâmica Marajoara
├── dancas.html      # Página de Danças e Ritmos (em desenvolvimento)
├── literatura.html  # Página de Oralidade e Memória (em desenvolvimento)
├── curadoria.html   # Página de Curadoria Cultural (em desenvolvimento)
├── festivais.html   # Página de Festivais e Celebrações (em desenvolvimento)
├── styles.css       # Estilos e design responsivo
├── script.js        # Funcionalidades JavaScript
└── README.md        # Documentação
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Grid/Flexbox)
- JavaScript (vanilla)
- Unsplash para imagens de exemplo

## Personalização

### Adicionar novos projetos

1. Abra `index.html`
2. Localize a seção `<div class="projects-grid">`
3. Adicione um novo card seguindo o padrão:

```html
<article class="project-card" data-category="nome-categoria">
    <div class="project-image">
        <img src="url-da-imagem" alt="Descrição">
    </div>
    <div class="project-content">
        <h3>Nome do Projeto</h3>
        <p>Descrição do projeto...</p>
        <div class="project-tags">
            <span class="tag">Tag 1</span>
            <span class="tag">Tag 2</span>
        </div>
    </div>
</article>
```

### Alterar cores

Edite as variáveis CSS no arquivo `styles.css` (paleta atual inspirada na cerâmica marajoara):

```css
:root {
    --primary-color: #8B4513;      /* Marrom terra */
    --secondary-color: #CD853F;    /* Peru dourado */
    --accent-red: #A0522D;         /* Siena queimado */
    --accent-black: #2C1810;       /* Preto marajoara */
    /* ... outras cores */
}
```

### Configurar formulário de contato

O formulário atualmente simula o envio. Para integrar com um backend real:

1. Abra `script.js`
2. Localize a função do formulário
3. Descomente e configure a seção de `fetch` para enviar para sua API

## Hospedagem

Este site pode ser hospedado gratuitamente em:
- GitHub Pages
- Netlify
- Vercel
- Surge.sh

Basta fazer upload dos arquivos para o serviço escolhido.

## Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e culturais.
