# 🎉 Walkthrough — O Mundo Pula One-Page

## O que foi implementado

Conversão completa do site WordPress [omundopula.pt](https://omundopula.pt/) para um site **one-page moderno** usando **Vite + Vanilla JS**, inspirado no template [Kidearn](https://bracketweb.com/kidearnwp/onepage-home-one).

## Demonstração em Vídeo

![Navegação completa pelo site](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/site_preview.webp)

## Screenshots das Secções

````carousel
![Hero Section — Slider com título, badge Google 5.0, CTAs](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/hero_section_1786102243994.png)
<!-- slide -->
![Sobre Nós — Layout split com imagem decorativa e texto](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/about_section_1786102254101.png)
<!-- slide -->
![Missão, Visão e Valores — Cards com ícones e hover effects](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/values_section_1786102261293.png)
<!-- slide -->
![Ofertas Educativas — Grid de 5 serviços com cores distintas](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/services_section_1786102267259.png)
<!-- slide -->
![Galeria Nosso Dia a Dia — Grid de imagens com overlays](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/gallery_section_1786102273430.png)
<!-- slide -->
![CTA Parallax — Call-to-action com fundo fixo](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/cta_section_1786102280548.png)
<!-- slide -->
![Comentários — Google Reviews carousel com navegação](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/reviews_section_1786102286303.png)
<!-- slide -->
![Contacto — Formulário validado + info + mapa](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/contact_section_1786102291932.png)
<!-- slide -->
![Footer — 4 colunas com links, contactos e redes sociais](C:/Users/jarff/.gemini/antigravity-ide/brain/1fe5a26f-5df5-4f36-a2ba-6fb4b9bd71b5/footer_section_1786102302607.png)
````

## Estrutura de Ficheiros Criados

```
omundopula/
├── docs/
│   ├── README.md              ✅ Documentação do projeto
│   ├── ROADMAP.md             ✅ Roadmap faseado (7 fases)
│   └── WORKFLOW.md            ✅ Git flow, convenções, checklists
├── src/
│   ├── css/
│   │   ├── variables.css      ✅ Design tokens (cores, tipografia, spacing)
│   │   ├── base.css           ✅ Reset, tipografia, layout base
│   │   ├── components.css     ✅ Botões, cards, wave dividers, social
│   │   ├── sections.css       ✅ Estilos de cada secção
│   │   ├── animations.css     ✅ Keyframes, scroll reveals
│   │   └── responsive.css     ✅ Media queries (5 breakpoints)
│   ├── js/
│   │   ├── main.js            ✅ Entry point (imports + init)
│   │   ├── navigation.js      ✅ Sticky header, smooth scroll, mobile
│   │   ├── animations.js      ✅ IntersectionObserver animations
│   │   ├── slider.js          ✅ Hero carousel com autoplay
│   │   ├── reviews.js         ✅ Reviews carousel navigation
│   │   └── forms.js           ✅ Validação de formulários
│   └── index.html             ✅ Página one-page completa
├── package.json               ✅ Configuração npm
├── vite.config.js             ✅ Configuração Vite
└── .gitignore                 ✅ Exclusões Git
```

## Funcionalidades Implementadas

| Feature | Status |
|---|---|
| Preloader com animação | ✅ |
| Topbar com redes sociais e info | ✅ |
| Header sticky com mudança ao scroll | ✅ |
| Navegação com smooth scroll | ✅ |
| Active section highlight | ✅ |
| Menu mobile (hamburger + drawer) | ✅ |
| Hero slider com 3 slides + autoplay | ✅ |
| Shapes decorativas (animadas) | ✅ |
| Wave dividers entre secções | ✅ |
| Secção Sobre Nós com layout split | ✅ |
| Cards Missão/Visão/Valores com hover | ✅ |
| Grid Ofertas Educativas (5 cards) | ✅ |
| Galeria com overlay e zoom | ✅ |
| CTA parallax com overlay escuro | ✅ |
| Instagram feed embed | ✅ |
| Google Reviews carousel | ✅ |
| Formulário de contacto com validação | ✅ |
| Google Maps embed | ✅ |
| Footer completo (4 colunas) | ✅ |
| Back-to-top com progress circle | ✅ |
| Scroll animations (fade, slide, scale) | ✅ |
| Responsivo (mobile, tablet, desktop) | ✅ |
| SEO meta tags + Open Graph | ✅ |
| Acessibilidade (ARIA, skip link, contrast) | ✅ |
| Reduced motion support | ✅ |
| Custom scrollbar | ✅ |

## Boas Práticas Seguidas

- **CSS Custom Properties** — Todas as cores, fontes e espaçamentos são variáveis, facilitando mudanças de tema
- **BEM Methodology** — Nomenclatura CSS consistente e previsível
- **ES6 Modules** — Código JavaScript modular e separado por responsabilidade
- **IntersectionObserver** — Sem scroll event listeners pesados para animações
- **Mobile-first** — Responsive design que começa no mobile
- **Semantic HTML** — Tags semânticas corretas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- **JSDoc Comments** — Documentação inline nas funções JavaScript
- **Accessibility** — Skip links, ARIA labels, contraste adequado, reduced motion
- **Performance** — Lazy loading de imagens, fontes preconnect, Vite build optimization

## Como Executar

```bash
cd c:\Users\jarff\Documents\GitHub\omundopula
npm run dev
```

O site abre automaticamente em **http://localhost:5173/**

## Validação

- ✅ Sem erros na consola do browser
- ✅ Todas as secções carregam corretamente
- ✅ Navegação smooth scroll funcional
- ✅ Slider hero com autoplay
- ✅ Animations on scroll
- ✅ Menu mobile funcional
