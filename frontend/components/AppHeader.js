/* =============================================
   AppHeader — Navbar fixa premium
   ============================================= */

export const AppHeader = {
  name: 'AppHeader',
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 40;
    },
    scrollToForm() {
      const formEl = document.getElementById('lead-form');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
    },
  },
  template: `
    <header :class="['app-header', { 'app-header--scrolled': scrolled }]">
      <div class="container app-header__inner">
        <div class="app-header__logo">
          <img
            src="./assets/images/hero_075veiculos.jpg"
            alt="075 Veículos logo"
            class="logo-img"
          />
          <span class="logo-number">075</span>
          <span class="logo-brand">Veículos</span>
        </div>
        <nav class="app-header__nav">
          <a href="#beneficios" class="nav-link">Benefícios</a>
          <a href="#depoimentos" class="nav-link">Depoimentos</a>
          <button @click="scrollToForm" class="btn btn-primary nav-cta">
            Quero negociar
          </button>
        </nav>
      </div>
    </header>
  `,
};
