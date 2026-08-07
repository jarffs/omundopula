# 🗺️ ROADMAP — O Mundo Pula One-Page

> Plano de desenvolvimento faseado para a conversão do site em one-page.

---

## Fase 0 — Setup & Fundação
**Duração estimada**: 1 dia  
**Status**: ⬜ Não iniciado

### Tarefas
- [ ] Inicializar projeto Vite + Vanilla JS
- [ ] Configurar estrutura de pastas (`src/`, `public/`)
- [ ] Criar `vite.config.js` com configurações adequadas
- [ ] Criar ficheiros CSS base (`variables.css`, `base.css`)
- [ ] Definir design tokens (cores, tipografia, espaçamento)
- [ ] Importar Google Fonts (Poppins, Montserrat)
- [ ] Importar Font Awesome
- [ ] Descarregar e organizar assets (imagens, logo, PDFs)
- [ ] Configurar `.gitignore`
- [ ] Primeiro commit

### Entregável
Projeto Vite funcional com design system base e todos os assets organizados.

---

## Fase 1 — Estrutura HTML Semântica
**Duração estimada**: 1–2 dias  
**Status**: ⬜ Não iniciado

### Tarefas
- [ ] Criar `index.html` com estrutura HTML5 semântica
- [ ] Topbar com redes sociais e informações de contacto
- [ ] Header com logo, navegação (links âncora), botão CTA
- [ ] Secção Hero Banner (estrutura para slider)
- [ ] Secção Sobre Nós (imagem + texto lado a lado)
- [ ] Secção Missão / Visão / Valores (grid de 3 cards)
- [ ] Secção Ofertas Educativas (Creche, Jardim, Salas de Estudo, Férias, Workshops)
- [ ] Secção Nosso Dia a Dia (galeria de fotos com overlays)
- [ ] Secção Instagram Feed (placeholder para integração)
- [ ] Secção Comentários / Google Reviews (carousel structure)
- [ ] Secção Calendário (embed container)
- [ ] Secção Contacto (formulário + mapa)
- [ ] Footer completo
- [ ] Adicionar meta tags SEO (title, description, OG tags)
- [ ] Adicionar favicon

### Entregável
Página HTML completa com todo o conteúdo, sem estilos visuais.

---

## Fase 2 — CSS & Design Visual
**Duração estimada**: 2–3 dias  
**Status**: ⬜ Não iniciado

### Tarefas

#### 2.1 — Layout Base
- [ ] CSS Reset / Normalize
- [ ] Sistema de grid e container
- [ ] Tipografia global
- [ ] Cores e variáveis CSS

#### 2.2 — Componentes (inspirados no Kidearn)
- [ ] Botões (estilo "kidearn-btn" com shape animations)
- [ ] Cards com border-radius arredondados e sombras suaves
- [ ] Section titles com decoração (sublinhado, ícone)
- [ ] Image boxes com hover overlay
- [ ] Badge / tag components
- [ ] Elementos decorativos (blobs, ondas SVG, shapes)

#### 2.3 — Secções Estilizadas
- [ ] **Topbar**: Fundo escuro, ícones sociais, texto pequeno
- [ ] **Header/Nav**: Transparente → fundo sólido ao scroll (sticky)
- [ ] **Hero Banner**: Full-height, background image, overlay, conteúdo centralizado à esquerda (estilo Kidearn), shapes decorativas
- [ ] **Sobre Nós**: Layout split (50/50) com imagem com bordas decorativas
- [ ] **Missão/Visão/Valores**: Cards com ícones, hover effects
- [ ] **Ofertas Educativas**: Grid de serviços com ícones coloridos
- [ ] **Nosso Dia a Dia**: Galeria masonry com overlay text
- [ ] **Instagram**: Grid uniforme com hover
- [ ] **Comentários**: Carousel cards com aspas decorativas
- [ ] **Calendário**: Container estilizado para embed
- [ ] **Contacto**: Split layout (form + mapa)
- [ ] **Footer**: Fundo escuro com imagem, 3-4 colunas, redes sociais

#### 2.4 — Elementos Visuais Premium (Estilo Kidearn)
- [ ] Shapes decorativas SVG (ondas, bolhas, estrelas)
- [ ] Gradientes suaves nos fundos das secções
- [ ] Sombras com profundidade (`box-shadow` em camadas)
- [ ] Border-radius generoso nos cards e imagens
- [ ] Ícones coloridos com fundos circulares
- [ ] Separadores entre secções (wave dividers)

### Entregável
Site visualmente completo, fiel ao estilo Kidearn mas com a identidade do O Mundo Pula.

---

## Fase 3 — JavaScript & Interatividade
**Duração estimada**: 2 dias  
**Status**: ⬜ Não iniciado

### Tarefas

#### 3.1 — Navegação
- [ ] Navegação sticky que muda de aparência ao scroll
- [ ] Smooth scroll para secções (links âncora)
- [ ] Active section highlight no menu
- [ ] Menu mobile (hamburger) com animação slide-in
- [ ] Botão "back to top" com progresso circular (estilo Kidearn)

#### 3.2 — Animações
- [ ] Scroll-triggered animations com IntersectionObserver
- [ ] Fade-in, slide-up, scale-in para elementos
- [ ] Parallax suave no hero e secções de background
- [ ] Counter animation (ex: anos de experiência, alunos)
- [ ] Hover micro-animations nos cards e botões
- [ ] Preloader com logo animado

#### 3.3 — Hero Slider
- [ ] Carousel de imagens com auto-play
- [ ] Transição fade/slide
- [ ] Dots de navegação
- [ ] Pausa no hover

#### 3.4 — Galeria
- [ ] Lightbox para galeria "Nosso Dia a Dia"
- [ ] Hover zoom + overlay nas imagens

### Entregável
Site totalmente interativo com animações suaves e experiência premium.

---

## Fase 4 — Integrações Externas
**Duração estimada**: 2–3 dias  
**Status**: ⬜ Não iniciado

### Tarefas

#### 4.1 — Google Reviews
- [ ] Integrar Google Places API para reviews
- [ ] Carousel de reviews com avatares e estrelas
- [ ] Link para "escrever review"
- [ ] Fallback estático caso API falhe

#### 4.2 — Instagram Feed
- [ ] Integrar Instagram Basic Display API (ou embed)
- [ ] Grid responsivo de posts recentes
- [ ] Link para perfil @omundopula

#### 4.3 — Google Calendar
- [ ] Embed de Google Calendar estilizado
- [ ] Container responsivo

#### 4.4 — Formulário de Contacto
- [ ] Formulário com validação client-side
- [ ] Integração com serviço de email (Formspree, EmailJS ou backend)
- [ ] Feedback visual de envio (success/error)

#### 4.5 — Sistema de Login
- [ ] Botão de login no header
- [ ] Redirect para sistema de login existente (ou modal)

#### 4.6 — Google Maps
- [ ] Embed do mapa com localização da escola
- [ ] Estilo customizado (dark theme)

### Entregável
Todas as funcionalidades externas integradas e funcionais.

---

## Fase 5 — Responsividade & Performance
**Duração estimada**: 1–2 dias  
**Status**: ⬜ Não iniciado

### Tarefas

#### 5.1 — Responsividade
- [ ] Mobile-first approach (≤480px)
- [ ] Tablet (481px–768px)
- [ ] Desktop pequeno (769px–1024px)
- [ ] Desktop (1025px–1440px)
- [ ] Widescreen (>1440px)
- [ ] Testar em dispositivos reais

#### 5.2 — Performance
- [ ] Otimizar imagens (WebP, lazy loading)
- [ ] Minificar CSS e JS (Vite build)
- [ ] Critical CSS inline
- [ ] Preconnect para fontes e APIs externas
- [ ] Lighthouse audit (target: 90+ em todas as categorias)

#### 5.3 — SEO
- [ ] Meta tags completas (OG, Twitter Cards)
- [ ] Schema.org markup (Educational Organization)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] `lang="pt-PT"` correto

#### 5.4 — Acessibilidade
- [ ] ARIA labels em elementos interativos
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Navegação por teclado funcional
- [ ] Skip-to-content link
- [ ] Alt text em todas as imagens

### Entregável
Site responsivo, performante, acessível e otimizado para SEO.

---

## Fase 6 — Deploy & Lançamento
**Duração estimada**: 1 dia  
**Status**: ⬜ Não iniciado

### Tarefas
- [ ] Configurar deploy (GitHub Pages / Netlify / Vercel)
- [ ] Configurar domínio `omundopula.pt`
- [ ] Configurar SSL/HTTPS
- [ ] Redireccionamento www → non-www (ou vice-versa)
- [ ] Testar todas as funcionalidades em produção
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Cookie consent banner (RGPD)
- [ ] Backup do site WordPress anterior
- [ ] Go live 🎉

### Entregável
Site em produção acessível em omundopula.pt.

---

## 📊 Timeline Resumida

| Fase | Descrição | Estimativa |
|------|-----------|------------|
| **0** | Setup & Fundação | 1 dia |
| **1** | Estrutura HTML | 1–2 dias |
| **2** | CSS & Design Visual | 2–3 dias |
| **3** | JavaScript & Interatividade | 2 dias |
| **4** | Integrações Externas | 2–3 dias |
| **5** | Responsividade & Performance | 1–2 dias |
| **6** | Deploy & Lançamento | 1 dia |
| | **Total estimado** | **10–14 dias** |

---

## 🔮 Futuro (Pós-Lançamento)

- [ ] Blog integrado (se necessário)
- [ ] Área de pais com acesso restrito
- [ ] Sistema de matrículas online
- [ ] Versão em inglês (i18n)
- [ ] Dark mode toggle
- [ ] PWA (Progressive Web App)
- [ ] Chatbot de apoio
