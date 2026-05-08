/* =============================================
   StepTimeline — Step 4: Prazo para fechar negócio
   ============================================= */

const StepTimeline = {
  name: 'StepTimeline',
  props: {
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      options: [
        { value: 'Esse mês',       label: 'Esse mês',       urgency: 'high',   icon: '⚡' },
        { value: 'Nos próx. 3 meses', label: 'Próximos 3 meses', urgency: 'mid', icon: '📅' },
        { value: 'Nos próx. 6 meses', label: 'Próximos 6 meses', urgency: 'low', icon: '🗓️' },
        { value: 'Só pesquisando', label: 'Só pesquisando', urgency: 'info',  icon: '🔍' },
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
      <h3 class="step-question">Quando você pretende fechar negócio?</h3>
      <p class="step-hint">Isso nos ajuda a priorizar seu atendimento</p>
      <div class="timeline-options">
        <button
          v-for="opt in options"
          :key="opt.value"
          :class="['timeline-card', { selected: modelValue === opt.value }]"
          @click="select(opt.value)"
          :id="'timeline-' + opt.urgency"
          type="button"
        >
          <span class="timeline-icon">{{ opt.icon }}</span>
          <span class="timeline-label">{{ opt.label }}</span>
          <div class="option-check" v-if="modelValue === opt.value">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
          </div>
        </button>
      </div>
    </div>
  `,
};
