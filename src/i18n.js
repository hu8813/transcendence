// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: {
            welcome: 'Welcome to the Ping Pong Game App!',
          },
          auth: {
            login: 'Login',
            register: 'Register',
          },
          game: {
            title: 'Play it!',
          },
          leaderboard: {
            title: 'Leaderboard',
          },
          chat: {
            title: 'Chat',
          },
          common: {
            home: 'Home',
            switchLanguage: 'Switch Language',
          },
        },
      },
      fr: {
        translation: {
          home: {
            welcome: 'Bienvenue dans l\'application Ping Pong Game!',
          },
          auth: {
            login: 'Connexion',
            register: 'S\'inscrire',
          },
          game: {
            title: 'Jeu de Ping Pong',
          },
          leaderboard: {
            title: 'Classement',
          },
          chat: {
            title: 'Discussion',
          },
          common: {
            home: 'Accueil',
            switchLanguage: 'Changer la langue',
          },
        },
      },
      de: {
        translation: {
          home: {
            welcome: 'Willkommen in der Ping Pong Game App!',
          },
          auth: {
            login: 'Anmelden',
            register: 'Registrieren',
          },
          game: {
            title: 'Spiel es!',
          },
          leaderboard: {
            title: 'Bestenliste',
          },
          chat: {
            title: 'Chat',
          },
          common: {
            home: 'Startseite',
            switchLanguage: 'Sprache wechseln',
          },
        },
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
