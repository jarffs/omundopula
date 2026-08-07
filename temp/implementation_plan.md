# Conversão do O Mundo Pula para Site One-Page

Conversão do site atual WordPress ([omundopula.pt](https://omundopula.pt/)) para um site one-page moderno usando Vite + Vanilla JS, inspirado no design do template [Kidearn](https://bracketweb.com/kidearnwp/onepage-home-one).

## Contexto

### Site Atual (omundopula.pt)
- **Plataforma**: WordPress com tema Zakra + Elementor
- **Secções existentes**: Hero com logo, Sobre Nós, Missão/Visão/Valores, Ofertas Educativas (Creche, Jardim, Salas de Estudo, Férias, Workshops), Nosso Dia a Dia (galeria), Instagram Feed, Google Reviews, Calendário, Contacto, Footer
- **Fontes**: Poppins + Montserrat
- **Cores principais**: `#5bb5a5` (verde-teal), `#001013` (dark), `#75b9ea` (azul)
- **Integrações**: Google Reviews, Instagram Feed, Google Calendar, Login (Ultimate Member), Formulários (Contact Form 7, Everest Forms)

### Template de Referência (Kidearn)
- **Design**: Colorido, lúdico, shapes orgânicas, animações suaves
- **Padrões**: Topbar + Sticky header, Hero slider, cards com bordas arredondadas, wave dividers, parallax, scroll animations, back-to-top com progresso, mobile drawer menu, preloader
- **One-page**: Navegação por links âncora (#home, #services, #about, etc.)

## Proposed Changes

### Documentação (`docs/`)

#### [NEW] [README.md](file:///c:/Users/jarff/Documents/GitHub/omundopula/docs/README.md)
Documentação principal do projeto com visão geral, stack tecnológica, design system, estrutura de pastas e instruções de execução.

#### [NEW] [ROADMAP.md](file:///c:/Users/jarff/Documents/GitHub/omundopula/docs/ROADMAP.md)
Roadmap faseado com 7 fases (0–6): Setup, HTML, CSS, JavaScript, Integrações, Responsividade e Deploy. Estimativa total: 10–14 dias.

#### [NEW] [WORKFLOW.md](file:///c:/Users/jarff/Documents/GitHub/omundopula/docs/WORKFLOW.md)
Guia de workflow com estratégia de branching (Git Flow), convenção de commits (Conventional Commits), padrões de código (BEM CSS, ES6+ JS, HTML semântico), e checklists de qualidade.

---

### Setup do Projeto

#### [NEW] `package.json`
Configuração npm com Vite como dev dependency.

#### [NEW] `vite.config.js`
Configuração Vite apontando para `src/index.html` como entry point.

#### [NEW] `.gitignore`
Ignora `node_modules/`, `dist/`, ficheiros de ambiente, etc.

---

### Estrutura do Site (`src/`)

#### [NEW] `src/index.html`
Página one-page completa com 12 secções navegáveis por links âncora:
1. **Topbar** — Redes sociais, horário, contactos
2. **Header** — Logo + nav sticky + botão CTA "Agendar Visita"
3. **Hero** — Slider com 3 slides (imagens reais + mensagem inspiradora)
4. **Sobre Nós** — Split layout (imagem + texto descritivo)
5. **Missão/Visão/Valores** — 3 cards com ícones
6. **Ofertas Educativas** — 5 serviços (Creche, Jardim, Salas de Estudo, Workshops, Férias)
7. **Nosso Dia a Dia** — Galeria 3×2 com overlay
8. **Instagram** — Grid feed + link para perfil
9. **Reviews** — Google Reviews carousel
10. **Calendário** — Google Calendar embed
11. **Contacto** — Formulário + Mapa + Info
12. **Footer** — Logo, links, redes sociais, copyright

---

### CSS (`src/css/`)

#### [NEW] `src/css/variables.css`
Design tokens: cores (verde-teal primário, tons de azul, accent quente), tipografia (Poppins/Montserrat), espaçamento, breakpoints, sombras, border-radius.

#### [NEW] `src/css/base.css`
Reset CSS, estilos globais, tipografia base, containers, utilitários.

#### [NEW] `src/css/components.css`
Componentes reutilizáveis no estilo Kidearn: botões com shapes animados, cards arredondados, section titles decorados, image boxes com overlay, badges.

#### [NEW] `src/css/sections.css`
Estilos específicos de cada secção com elementos decorativos (blobs SVG, wave dividers, shapes).

#### [NEW] `src/css/animations.css`
Animações CSS: fade-in, slide-up, scale-in, parallax, hover effects, preloader.

#### [NEW] `src/css/responsive.css`
Media queries mobile-first para 5 breakpoints (480px, 768px, 1024px, 1200px, 1440px).

---

### JavaScript (`src/js/`)

#### [NEW] `src/js/main.js`
Entry point que inicializa todos os módulos.

#### [NEW] `src/js/navigation.js`
Menu sticky com mudança de aparência ao scroll, smooth scroll, active section highlight, menu mobile hamburger com drawer, botão back-to-top.

#### [NEW] `src/js/animations.js`
Scroll-triggered animations com IntersectionObserver, parallax, counter animations.

#### [NEW] `src/js/slider.js`
Hero carousel com auto-play, transições fade, dots de navegação, pausa no hover.

#### [NEW] `src/js/reviews.js`
Integração com Google Reviews (Google Places API ou dados estáticos do site atual), carousel com avatares e estrelas.

#### [NEW] `src/js/forms.js`
Validação de formulários, integração com serviço de email, feedback visual.

---

### Assets (`public/`)

#### [NEW] `public/assets/images/`
Todas as imagens descarregadas do site atual (logo, fotos, ícones).

#### [NEW] `public/assets/icons/`
Favicons em múltiplos tamanhos.

#### [NEW] `public/docs/`
PDFs informativos (Boas-Vindas Creche, Boas-Vindas Pré-Escolar).

## Open Questions

> [!IMPORTANT]
> **Hosting**: Onde pretende hospedar o novo site? GitHub Pages, Netlify, Vercel, ou manter no servidor atual?

> [!IMPORTANT]
> **Google Reviews API**: Tem uma chave de API do Google Places para aceder às reviews programaticamente? Ou prefere usar dados estáticos?

> [!NOTE]
> **Instagram Feed**: A API do Instagram requer autenticação via Facebook App. Tem uma conta de desenvolvedor Facebook? Caso contrário, podemos usar um embed simples.

> [!NOTE]
> **Login**: O sistema de login atual usa o plugin Ultimate Member (WordPress). No novo site estático, como pretende gerir o login? Redirect para um sistema externo, Firebase Auth, ou outra solução?

> [!NOTE]
> **Formulários**: Para o formulário de contacto no site estático, recomendo Formspree ou EmailJS. Tem preferência?

## Verification Plan

### Automated Tests
- `npm run build` — Verificar que o build de produção compila sem erros
- Lighthouse CI — Performance > 90, Accessibility > 90, SEO > 90

### Manual Verification
- Testar navegação smooth scroll em todas as secções
- Verificar responsividade em mobile (375px), tablet (768px), desktop (1440px)
- Testar formulário de contacto (envio + validação)
- Verificar carregamento de imagens e fontes
- Testar em Chrome, Firefox, Safari e Edge
- Pedir ao utilizador para validar o conteúdo e design antes do deploy
