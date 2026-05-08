/* =============================================
   HeroSection — Hero com CTA e imagem premium
   ============================================= */

export const HeroSection = {
  name: 'HeroSection',
  methods: {
    scrollToForm() {
      const formEl = document.getElementById('lead-form');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
    },
  },
  template: `
    <section class="hero-section">
      <div class="hero-bg-glow"></div>
      <div class="container hero-inner">
        <div class="hero-content animate-fade-up">
          <div class="section-tag">075 Veículos</div>
          <h1 class="hero-title">
            O veículo dos<br>
            seus sonhos,<br>
            <span class="gold-text">ao seu alcance.</span>
          </h1>
          <p class="hero-subtitle">
            Compre, venda ou troque seu veículo com transparência,
            agilidade e as melhores condições do mercado.
          </p>
          <div class="hero-actions">
            <button @click="scrollToForm" class="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Quero negociar agora
            </button>
            <a href="#beneficios" class="btn btn-outline btn-lg">Ver benefícios</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat__number gold-text">+2.000</span>
              <span class="hero-stat__label">Veículos negociados</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat__number gold-text">98%</span>
              <span class="hero-stat__label">Clientes satisfeitos</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat__number gold-text">24h</span>
              <span class="hero-stat__label">Tempo médio de negócio</span>
            </div>
          </div>
        </div>
        <div class="hero-image-wrapper animate-fade-in">
          <div class="hero-image-glow"></div>
          <img
            src="/images/hero_075veiculos.jpg"
            alt="Veículo de luxo premium 075 Veículos"
            class="hero-image"
          />
        </div>
      </div>
    </section>
  `,
};
