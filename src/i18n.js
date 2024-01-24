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
            email: 'Email',
            enterEmail: 'Enter your email',
            password: 'Password',
            enterPassword: 'Enter your password',
            rememberMe: 'Remember me',
            login: 'Login',
            forgotPassword: 'Forgot your password?',
            notRegistered: 'Not registered yet?',
            registerHere: 'Register here',
            register: 'Register',
          },
          game: {
            title: 'Play!',
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
            email: 'E-mail',
            enterEmail: 'Entrez votre adresse e-mail',
            password: 'Mot de passe',
            enterPassword: 'Entrez votre mot de passe',
            rememberMe: 'Se souvenir de moi',
            login: 'Connexion',
            forgotPassword: 'Mot de passe oublié?',
            notRegistered: 'Pas encore inscrit?',
            registerHere: 'Inscrivez-vous ici',
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
            email: 'E-Mail',
            enterEmail: 'Geben Sie Ihre E-Mail-Adresse ein',
            password: 'Passwort',
            enterPassword: 'Geben Sie Ihr Passwort ein',
            rememberMe: 'Erinnere dich an mich',
            login: 'Anmelden',
            forgotPassword: 'Passwort vergessen?',
            notRegistered: 'Noch nicht registriert?',
            registerHere: 'Hier registrieren',
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
