/* =============================================
   StepContact — Step 5: Dados de contato
   ============================================= */

export const StepContact = {
  name: 'StepContact',
  props: {
    modelValue: {
      type: Object,
      default: () => ({ fullName: '', phone: '' }),
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  methods: {
    update(field, value) {
      this.$emit('update:modelValue', { ...this.modelValue, [field]: value });
    },
  },
  template: `
    <div class="step-content animate-fade-up">
      <h3 class="step-question">Quase lá! Seus dados de contato</h3>
      <p class="step-hint">Nossa equipe entrará em contato pelo WhatsApp</p>

      <div class="contact-fields">
        <div class="field-group">
          <label for="contact-name" class="form-label">
            Nome completo <span class="required-star">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            :class="['form-input', { error: errors.fullName }]"
            placeholder="Seu nome completo"
            :value="modelValue.fullName"
            @input="update('fullName', $event.target.value)"
            autocomplete="name"
          />
          <span v-if="errors.fullName" class="form-error-msg">{{ errors.fullName }}</span>
        </div>

        <div class="field-group">
          <label for="contact-phone" class="form-label">
            WhatsApp <span class="required-star">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            :class="['form-input', { error: errors.phone }]"
            placeholder="(00) 00000-0000"
            :value="modelValue.phone"
            @input="update('phone', $event.target.value)"
            autocomplete="tel"
          />
          <span v-if="errors.phone" class="form-error-msg">{{ errors.phone }}</span>
        </div>
      </div>

      <p class="contact-privacy">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Seus dados são protegidos e não serão compartilhados com terceiros.
      </p>
    </div>
  `,
};
