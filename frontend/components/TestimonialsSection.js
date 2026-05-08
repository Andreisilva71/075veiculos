/* =============================================
   TestimonialsSection — Depoimentos de clientes
   ============================================= */

export const TestimonialsSection = {
  name: 'TestimonialsSection',
  data() {
    return {
      activeIndex: 0,
      testimonials: [
        {
          id: 1,
          name: 'Ricardo Almeida',
          role: 'Empresário',
          initials: 'RA',
          rating: 5,
          text: 'Vendi meu carro em menos de 24 horas pelo valor que eu precisava. O processo foi incrível — sem burocracia, sem enrolação. A equipe da 075 foi super profissional do início ao fim.',
        },
        {
          id: 2,
          name: 'Fernanda Costa',
          role: 'Médica',
          initials: 'FC',
          rating: 5,
          text: 'Fiz a troca do meu Hatch por um SUV e não poderia ter sido mais fácil. Eles cuidaram de toda a documentação. Recomendo demais para quem quer segurança na negociação.',
        },
        {
          id: 3,
          name: 'Paulo Henrique',
          role: 'Engenheiro',
          initials: 'PH',
          rating: 5,
          text: 'Encontrei o carro que queria, com financiamento aprovado no mesmo dia. A 075 Veículos transformou o que parecia complicado em algo simples e rápido. Experiência 10/10.',
        },
      ],
    };
  },
  computed: {
    activeTestimonial() {
      return this.testimonials[this.activeIndex];
    },
    stars() {
      return Array(5).fill(null);
    },
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
    nextTestimonial() {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    },
    prevTestimonial() {
      this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
  },
  template: `
    <section id="depoimentos" class="testimonials-section section">
      <div class="container">
        <div class="testimonials-header">
          <div class="section-tag">Depoimentos</div>
          <h2 class="section-title">
            O que nossos clientes<br>
            <span class="gold-text">dizem sobre nós</span>
          </h2>
          <div class="gold-divider"></div>
        </div>

        <div class="testimonial-card card animate-fade-in" :key="activeIndex">
          <div class="testimonial-stars">
            <svg v-for="(s, i) in stars" :key="i" width="18" height="18" viewBox="0 0 24 24" fill="#F2C300">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p class="testimonial-text">"{{ activeTestimonial.text }}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">{{ activeTestimonial.initials }}</div>
            <div>
              <strong class="testimonial-name">{{ activeTestimonial.name }}</strong>
              <span class="testimonial-role">{{ activeTestimonial.role }}</span>
            </div>
          </div>
        </div>

        <div class="testimonial-controls">
          <button @click="prevTestimonial" class="testimonial-arrow" aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div class="testimonial-dots">
            <button
              v-for="(t, i) in testimonials"
              :key="t.id"
              :class="['dot', { active: i === activeIndex }]"
              @click="setActive(i)"
              :aria-label="'Depoimento ' + (i + 1)"
            ></button>
          </div>
          <button @click="nextTestimonial" class="testimonial-arrow" aria-label="Próximo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  `,
};
