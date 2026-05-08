/* =============================================
   StepVehicle — Step 2: Tipo de veículo
   ============================================= */

const StepVehicle = {
  name: 'StepVehicle',
  props: {
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      options: [
        { value: 'Sedan',   label: 'Sedan',   icon: '🚗' },
        { value: 'SUV',     label: 'SUV',     icon: '🚙' },
        { value: 'Pickup',  label: 'Pickup',  icon: '🛻' },
        { value: 'Hatch',   label: 'Hatch',   icon: '🚘' },
        { value: 'Esporte', label: 'Esporte', icon: '🏎️' },
        { value: 'Outros',  label: 'Outros',  icon: '🚐' },
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
      <h3 class="step-question">Qual tipo de veículo?</h3>
      <p class="step-hint">Escolha o segmento que mais te interessa</p>
      <div class="vehicle-grid">
        <button
          v-for="opt in options"
          :key="opt.value"
          :class="['vehicle-card', { selected: modelValue === opt.value }]"
          @click="select(opt.value)"
          :id="'vehicle-' + opt.value.toLowerCase()"
          type="button"
        >
          <span class="vehicle-emoji">{{ opt.icon }}</span>
          <span class="vehicle-label">{{ opt.label }}</span>
          <div class="option-check" v-if="modelValue === opt.value">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
          </div>
        </button>
      </div>
    </div>
  `,
};
