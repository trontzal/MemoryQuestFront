import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-free/css/all.css'; // Importa los estilos de Font Awesome

library.add(faFacebook, faTwitter, faInstagram, faGithub, faLinkedin);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
