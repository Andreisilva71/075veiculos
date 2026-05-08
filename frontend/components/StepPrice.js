/* =============================================
   StepPrice — Step 3: Faixa de preço
   ============================================= */

const StepPrice = {
  name: 'StepPrice',
  props: {
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      options: [
        { value: 'Até R$50k',        label: 'Até R$50k',        desc: 'Econômico' },
        { value: 'R$50k – R$100k',   label: 'R$50k – R$100k',   desc: 'Intermediário' },
        { value: 'R$100k – R$200k',  label: 'R$100k – R$200k',  desc: 'Premium' },
        { value: 'Acima de R$200k',  label: 'Acima de R$200k',  desc: 'Luxo' },
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
      <h3 class="step-question">Qual é sua faixa de preço?</h3>
      <p class="step-hint">Selecione o valor que melhor se encaixa no seu orçamento</p>
      <div class="price-options">
        <button
          v-for="opt in options"
          :key="opt.value"
          :class="['price-card', { selected: modelValue === opt.value }]"
          @click="select(opt.value)"
          :id="'price-' + opt.value.replace(/[^a-z0-9]/gi, '-').toLowerCase()"
          type="button"
        >
          <div class="price-card__left">
            <strong class="price-value">{{ opt.label }}</strong>
            <span class="price-desc">{{ opt.desc }}</span>
          </div>
          <div class="option-check" v-if="modelValue === opt.value">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
          </div>
        </button>
      </div>
    </div>
  `,
};
