/* =============================================
   main.js — Entry point ES Module
   Importa todos os componentes e monta o app
   ============================================= */

import { createApp } from 'vue';

import { AppHeader }          from './components/AppHeader.js';
import { HeroSection }        from './components/HeroSection.js';
import { BenefitsSection }    from './components/BenefitsSection.js';
import { TestimonialsSection } from './components/TestimonialsSection.js';
import { StepInterest }       from './components/StepInterest.js';
import { StepVehicle }        from './components/StepVehicle.js';
import { StepPrice }          from './components/StepPrice.js';
import { StepTimeline }       from './components/StepTimeline.js';
import { StepContact }        from './components/StepContact.js';
import { SuccessScreen }      from './components/SuccessScreen.js';
import { MultiStepForm }      from './components/MultiStepForm.js';
import { HomeView }           from './views/HomeView.js';

const app = createApp(HomeView);

// Registrar todos os componentes globalmente
app.component('AppHeader', AppHeader);
app.component('HeroSection', HeroSection);
app.component('BenefitsSection', BenefitsSection);
app.component('TestimonialsSection', TestimonialsSection);
app.component('StepInterest', StepInterest);
app.component('StepVehicle', StepVehicle);
app.component('StepPrice', StepPrice);
app.component('StepTimeline', StepTimeline);
app.component('StepContact', StepContact);
app.component('SuccessScreen', SuccessScreen);
app.component('MultiStepForm', MultiStepForm);

app.mount('#app');
