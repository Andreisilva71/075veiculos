/* =============================================
   StepInterest — Step 1: Tipo de interesse
   ============================================= */

const StepInterest = {
  name: 'StepInterest',
  props: {
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      options: [
        {
          value: 'buy',
          label: 'Comprar',
          icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
          desc: 'Quero encontrar meu próximo veículo',
        },
        {
          value: 'sell',
          label: 'Vender',
          icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
          desc: 'Quero vender meu veículo atual',
        },
        {
          value: 'trade',
          label: 'Trocar',
          icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
          desc: 'Quero trocar meu veículo por outro',
        },
      ],
    };
  },
  methods: {
    select(value) {
      this.$emit('update:modelValue', value);
    },
  },
  template: `
    <div class="step-content animate-fade-up">
      <h3 class="step-question">O que você deseja fazer?</h3>
      <p class="step-hint">Selecione uma opção para continuar</p>
      <div class="interest-options">
        <button
          v-for="opt in options"
          :key="opt.value"
          :class="['option-card', { selected: modelValue === opt.value }]"
          @click="select(opt.value)"
          :id="'interest-' + opt.value"
          type="button"
        >
          <div class="option-icon" v-html="opt.icon"></div>
          <strong class="option-label">{{ opt.label }}</strong>
          <span class="option-desc">{{ opt.desc }}</span>
          <div class="option-check" v-if="modelValue === opt.value">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
          </div>
        </button>
      </div>
    </div>
  `,
};
