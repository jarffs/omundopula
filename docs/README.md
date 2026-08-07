# 🌍 O Mundo Pula — One-Page Website

> Conversão do site [omundopula.pt](https://omundopula.pt/) para um moderno site **one-page** inspirado no design do template [Kidearn](https://bracketweb.com/kidearnwp/onepage-home-one).

## 📋 Visão Geral

O Mundo Pula é uma instituição educativa em Portugal focada em crianças (Creche e Jardim de Infância), com abordagens pedagógicas Montessori, Reggio Emilia e Movimento Escola Moderna. Este projeto converte o atual site WordPress multi-página num site one-page moderno, dinâmico e visualmente impressionante.

## 🎯 Objetivo

Criar uma experiência de utilizador fluida e premium num único scroll, mantendo todo o conteúdo e funcionalidades do site atual, mas com um design inspirado no template Kidearn — adaptado à identidade visual do O Mundo Pula.

## 🛠️ Stack Tecnológica

| Tecnologia | Função |
|---|---|
| **Vite** | Build tool & dev server (hot reload) |
| **HTML5** | Estrutura semântica |
| **CSS3 (Vanilla)** | Estilização com CSS custom properties, animações |
| **JavaScript (ES6+)** | Lógica, interações, smooth scroll |
| **Google Fonts** | Tipografia (Poppins, Montserrat) |
| **Font Awesome** | Ícones |

## 🎨 Design System

### Paleta de Cores (do O Mundo Pula)

| Token | Cor | Uso |
|---|---|---|
| `--primary` | `#5bb5a5` | Cor principal (verde-teal) |
| `--primary-dark` | `#1e7ba6` | Hover/accent |
| `--secondary` | `#75b9ea` | Links, destaques |
| `--dark` | `#001013` | Fundos escuros, footer |
| `--text` | `#222222` | Texto principal |
| `--white` | `#ffffff` | Fundos claros |
| `--accent-warm` | `#ff9f43` | Call-to-action |

### Tipografia

- **Headlines**: Montserrat (700)
- **Body**: Poppins (400, 600)

## 🏗️ Estrutura do Projeto

```
omundopula/
├── docs/
│   ├── README.md          ← Este ficheiro
│   ├── ROADMAP.md         ← Fases de desenvolvimento
│   └── WORKFLOW.md        ← Processo de trabalho
├── public/
│   ├── assets/
│   │   ├── images/        ← Imagens do site
│   │   └── icons/         ← Favicons e ícones
│   └── docs/              ← PDFs informativos
├── src/
│   ├── css/
│   │   ├── variables.css  ← Design tokens
│   │   ├── base.css       ← Reset e estilos base
│   │   ├── components.css ← Componentes reutilizáveis
│   │   ├── sections.css   ← Estilos por secção
│   │   ├── animations.css ← Animações e transições
│   │   └── responsive.css ← Media queries
│   ├── js/
│   │   ├── main.js        ← Entry point
│   │   ├── navigation.js  ← Menu sticky + mobile
│   │   ├── animations.js  ← Scroll animations (IntersectionObserver)
│   │   ├── slider.js      ← Hero slider/carousel
│   │   ├── reviews.js     ← Google Reviews integration
│   │   └── forms.js       ← Formulários de contacto
│   └── index.html         ← Página principal
├── package.json
├── vite.config.js
└── .gitignore
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Produção

```bash
# Criar build de produção
npm run build

# Pré-visualizar build
npm run preview
```

## 📱 Secções do Site (One-Page)

1. **Topbar** — Redes sociais, horário, contactos
2. **Header** — Logo, navegação sticky com links âncora, botão CTA
3. **Hero Banner** — Slider com imagens e mensagem inspiradora
4. **Sobre Nós** — Apresentação da instituição com imagem e texto
5. **Missão / Visão / Valores** — Cards com ícones
6. **Ofertas Educativas** — Creche, Jardim, Salas de Estudo, Férias, Workshops
7. **Nosso Dia a Dia** — Galeria de fotos com overlay
8. **Instagram Feed** — Grid de publicações
9. **Comentários / Reviews** — Google Reviews carousel
10. **Calendário** — Google Calendar embed
11. **Contacto** — Formulário + Mapa + Informações
12. **Footer** — Logo, links, redes sociais, copyright

## 📞 Contactos Originais

- **Site**: [omundopula.pt](https://omundopula.pt/)
- **Instagram**: [@omundopula](https://www.instagram.com/omundopula/)
- **Google Maps**: [O Mundo Pula](https://maps.google.com/?cid=9787685434107918728)

## 📄 Licença

Projeto proprietário — O Mundo Pula © 2025. Todos os direitos reservados.
