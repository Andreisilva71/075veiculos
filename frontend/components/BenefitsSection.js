/* =============================================
   BenefitsSection — Cards de benefícios
   ============================================= */

export const BenefitsSection = {
  name: 'BenefitsSection',
  data() {
    return {
      benefits: [
        {
          id: 1,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
          title: 'Processo 100% Transparente',
          description: 'Sem surpresas. Todas as condições, taxas e documentação são apresentadas com clareza antes de qualquer decisão.',
        },
        {
          id: 2,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
          title: 'Agilidade no Fechamento',
          description: 'Nossa equipe especializada atua com rapidez para fechar o melhor negócio para você em até 24 horas.',
        },
        {
          id: 3,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
          title: 'Melhores Preços do Mercado',
          description: 'Avaliação justa e competitiva para compra, venda e troca. Você recebe a melhor proposta sem precisar pechinchar.',
        },
        {
          id: 4,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
          title: 'Documentação Facilitada',
          description: 'Cuidamos de toda a burocracia de transferência, IPVA e licenciamento. Você só precisa assinar.',
        },
        {
          id: 5,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
          title: 'Consultores Especializados',
          description: 'Time com mais de 10 anos de experiência no mercado automotivo para orientar cada etapa do seu negócio.',
        },
        {
          id: 6,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
          title: 'Garantia de Satisfação',
          description: 'Não ficou satisfeito? Nossa equipe trabalha até você encontrar a solução ideal para o seu perfil.',
        },
      ],
    };
  },
  template: `
    <section id="beneficios" class="benefits-section section">
      <div class="container">
        <div class="benefits-header">
          <div class="section-tag">Por que escolher a 075</div>
          <h2 class="section-title">
            Vantagens que fazem<br>
            <span class="gold-text">toda a diferença</span>
          </h2>
          <div class="gold-divider"></div>
          <p class="section-subtitle">
            Mais de 2.000 clientes já confiaram em nós. Veja o que nos torna a escolha certa.
          </p>
        </div>
        <div class="benefits-grid">
          <div
            v-for="benefit in benefits"
            :key="benefit.id"
            class="benefit-card card"
          >
            <div class="benefit-icon" v-html="benefit.icon"></div>
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-desc">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
};
