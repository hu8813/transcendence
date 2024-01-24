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
            signInWith42: 'Login with 42Sign-in',
            signIn: 'Login',
            
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
            or: 'or',
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
      tr: {
        translation: {
          home: {
            welcome: 'Ping Pong Oyunu Uygulamasına Hoş Geldiniz!',
          },
          auth: {
            email: 'E-posta',
            enterEmail: 'E-posta adresinizi girin',
            password: 'Şifre',
            enterPassword: 'Şifrenizi girin',
            rememberMe: 'Beni hatırla',
            login: 'Giriş yap',
            forgotPassword: 'Şifrenizi mi unuttunuz?',
            notRegistered: 'Henüz kayıtlı değil misiniz?',
            registerHere: 'Buradan kaydolun',
            register: 'Kayıt ol',
            signInWith42: '42Signin ile girin',
            signIn: 'Giriş yap',
          },
          game: {
            title: 'Oyna!',
          },
          leaderboard: {
            title: 'Liderlik Tablosu',
          },
          chat: {
            title: 'Sohbet',
          },
          common: {
            home: 'Anasayfa',
            or: 'veya',
            switchLanguage: 'Dil Değiştir',
          },
        },
      },
      bg: {
        translation: {
          home: {
            welcome: 'Добре дошли в Приложението за игра на пинг-понг!',
          },
          auth: {
            email: 'Имейл',
            enterEmail: 'Въведете вашия имейл',
            password: 'Парола',
            enterPassword: 'Въведете вашия парола',
            rememberMe: 'Запомни ме',
            login: 'Вход',
            forgotPassword: 'Забравена парола?',
            notRegistered: 'Все още нямате регистрация?',
            registerHere: 'Регистрирайте се тук',
            register: 'Регистрация',
            signInWith42: 'Влезте с 42Sign-in',
            signIn: 'Вход',
          },
          game: {
            title: 'Играй!',
          },
          leaderboard: {
            title: 'Таблица с резултати',
          },
          chat: {
            title: 'Чат',
          },
          common: {
            home: 'Начало',
            or: 'или',
            switchLanguage: 'Смени езика',
          },
        },
      },
      eg: {
        translation: {
          home: {
            welcome: 'مرحبًا بك في تطبيق لعبة كرة الطاولة!',
          },
          auth: {
            email: 'البريد الإلكتروني',
            enterEmail: 'أدخل بريدك الإلكتروني',
            password: 'كلمة المرور',
            enterPassword: 'أدخل كلمة المرور الخاصة بك',
            rememberMe: 'تذكرني',
            login: 'تسجيل الدخول',
            forgotPassword: 'هل نسيت كلمة المرور؟',
            notRegistered: 'ليس لديك حساب؟',
            registerHere: 'سجل هنا',
            register: 'تسجيل',
            signInWith42: 'تسجيل الدخول بواسطة 42Sign-in',
            signIn: 'تسجيل الدخول',
          },
          game: {
            title: 'اللعب!',
          },
          leaderboard: {
            title: 'الترتيب',
          },
          chat: {
            title: 'الدردشة',
          },
          common: {
            home: 'الرئيسية',
            or: 'أو',
            switchLanguage: 'تغيير اللغة',
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
    lng: localStorage.getItem('language') || 'en', // Get the language from localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
