/* =============================================
   MultiStepForm — Orquestrador do formulário
   ============================================= */

import { leadService } from '../services/leadService.js';

export const MultiStepForm = {
  name: 'MultiStepForm',
  data() {
    return {
      currentStep: 1,
      totalSteps: 5,
      isSubmitting: false,
      isSuccess: false,
      submitError: '',
      formData: {
        interestType: '',
        vehicleType: '',
        priceRange: '',
        purchaseTimeline: '',
        contact: { fullName: '', phone: '' },
      },
      contactErrors: {},
    };
  },
  computed: {
    progressPercent() {
      return Math.round((this.currentStep / this.totalSteps) * 100);
    },
    canProceed() {
      const { currentStep, formData } = this;
      if (currentStep === 1) return !!formData.interestType;
      if (currentStep === 2) return !!formData.vehicleType;
      if (currentStep === 3) return !!formData.priceRange;
      if (currentStep === 4) return !!formData.purchaseTimeline;
      return true;
    },
    stepLabels() {
      return ['Interesse', 'Veículo', 'Preço', 'Prazo', 'Contato'];
    },
  },
  methods: {
    nextStep() {
      if (!this.canProceed) return;
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) this.currentStep--;
    },
    validateContact() {
      const errors = {};
      const { fullName, phone } = this.formData.contact;

      if (!fullName || fullName.trim().length < 2) {
        errors.fullName = 'Informe seu nome completo';
      }

      const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
      if (!phone || !phoneRegex.test(phone.trim())) {
        errors.phone = 'Informe um WhatsApp válido. Ex: (11) 99999-9999';
      }

      this.contactErrors = errors;
      return Object.keys(errors).length === 0;
    },
    async submitForm() {
      if (!this.validateContact()) return;

      this.isSubmitting = true;
      this.submitError = '';

      const payload = {
        fullName: this.formData.contact.fullName.trim(),
        phone: this.formData.contact.phone.trim(),
        interestType: this.formData.interestType,
        vehicleType: this.formData.vehicleType,
        priceRange: this.formData.priceRange,
        purchaseTimeline: this.formData.purchaseTimeline,
      };

      try {
        const result = await leadService.createLead(payload);

        if (result.success) {
          this.isSuccess = true;
        } else {
          this.submitError = result.message || 'Erro ao enviar. Tente novamente.';
        }
      } catch (err) {
        this.submitError = 'Erro inesperado. Por favor, tente novamente.';
      } finally {
        this.isSubmitting = false;
      }
    },
  },
  template: `
    <section id="lead-form" class="form-section section">
      <div class="container">
        <div class="form-section-header">
          <div class="section-tag">Formulário</div>
          <h2 class="section-title">
            Comece sua negociação<br>
            <span class="gold-text">em minutos</span>
          </h2>
          <div class="gold-divider"></div>
        </div>

        <div class="multistep-wrapper">
          <div v-if="!isSuccess">

            <!-- Progress Bar -->
            <div class="progress-bar-wrapper">
              <div class="progress-steps">
                <div
                  v-for="(label, idx) in stepLabels"
                  :key="idx"
                  :class="['progress-step', {
                    'active': idx + 1 === currentStep,
                    'done': idx + 1 < currentStep
                  }]"
                >
                  <div class="progress-step__dot">
                    <svg v-if="idx + 1 < currentStep" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                    <span v-else>{{ idx + 1 }}</span>
                  </div>
                  <span class="progress-step__label">{{ label }}</span>
                </div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
              </div>
            </div>

            <!-- Steps -->
            <div class="step-wrapper card">
              <step-interest
                v-if="currentStep === 1"
                v-model="formData.interestType"
              />
              <step-vehicle
                v-else-if="currentStep === 2"
                v-model="formData.vehicleType"
              />
              <step-price
                v-else-if="currentStep === 3"
                v-model="formData.priceRange"
              />
              <step-timeline
                v-else-if="currentStep === 4"
                v-model="formData.purchaseTimeline"
              />
              <step-contact
                v-else-if="currentStep === 5"
                v-model="formData.contact"
                :errors="contactErrors"
              />

              <!-- Error message -->
              <div v-if="submitError" class="submit-error">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                {{ submitError }}
              </div>

              <!-- Navigation -->
              <div class="step-nav">
                <button
                  v-if="currentStep > 1"
                  @click="prevStep"
                  type="button"
                  class="btn btn-outline"
                  id="btn-prev-step"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 19l-7-7 7-7"/></svg>
                  Voltar
                </button>
                <div v-else></div>

                <button
                  v-if="currentStep < totalSteps"
                  @click="nextStep"
                  type="button"
                  :class="['btn btn-primary', { 'btn-disabled': !canProceed }]"
                  :disabled="!canProceed"
                  id="btn-next-step"
                >
                  Continuar
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 5l7 7-7 7"/></svg>
                </button>

                <button
                  v-else
                  @click="submitForm"
                  type="button"
                  :class="['btn btn-primary', { 'btn-loading': isSubmitting }]"
                  :disabled="isSubmitting"
                  id="btn-submit-form"
                >
                  <span v-if="isSubmitting" class="spinner"></span>
                  <span v-else>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
                  </span>
                  {{ isSubmitting ? 'Enviando...' : 'Enviar e negociar' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Success Screen -->
          <success-screen
            v-else
            :lead-name="formData.contact.fullName"
          />
        </div>
      </div>
    </section>
  `,
};
