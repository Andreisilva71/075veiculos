/* =============================================
   HomeView — View principal que monta todas as seções
   ============================================= */

const HomeView = {
  name: 'HomeView',
  components: {
    AppHeader,
    HeroSection,
    BenefitsSection,
    TestimonialsSection,
    MultiStepForm,
  },
  template: `
    <div class="home-view">
      <app-header />
      <main>
        <hero-section />
        <benefits-section />
        <testimonials-section />
        <multi-step-form />
      </main>
      <footer class="app-footer">
        <div class="container app-footer__inner">
          <div class="footer-logo">
            <span class="logo-number">075</span>
            <span class="logo-brand">Veículos</span>
          </div>
          <p class="footer-copy">
            © {{ new Date().getFullYear() }} 075 Veículos. Todos os direitos reservados.
          </p>
          <p class="footer-sub">Compra, Venda e Troca de Veículos Premium</p>
        </div>
      </footer>
    </div>
  `,
};
