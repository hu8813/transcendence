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
            welcome: 'Welcome to the Ping Pong Game!',
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
            signInWith42: 'Login via 42Sign-in',
            signIn: 'Login',
            passwordMismatch: 'Password empty/invalid',
            confirmPassword: 'Confirm password',
            termsAndConditions: 'Terms & Conditions',
            acceptTerms: 'i accept Terms & Conditions'
            
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
          footer: {
            privacyPolicy: 'Privacy Policy',
            impressum: 'Impressum',
            madeWith: 'Made with',
            at42Vienna: 'at 42Vienna',
          },
        },
      },
      fr: {
        translation: {
          home: {
            welcome: 'Bienvenue dans l\'application Ping Pong!',
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
            passwordMismatch: 'Mot de passe vide/invalide',
          confirmPassword: 'Confirmer le mot de passe',
          termsAndConditions: 'Termes et conditions',
          acceptTerms: 'J\'accepte les termes et conditions',
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
          footer: {
            privacyPolicy: "Politique de confidentialité",
            impressum: "Mentions légales",
            madeWith: "Fabriqué avec",
            at42Vienna: "chez 42Vienna",
            
          }
        },
      },
      tr: {
        translation: {
          home: {
            welcome: 'Ping Pong Oyununa Hoş Geldin!',
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
            passwordMismatch: 'Şifre boş/geçersiz',
            confirmPassword: 'Şifreyi Onayla',
            termsAndConditions: 'Koşullar ve Şartlar',
            acceptTerms: 'Şartları ve Koşulları Kabul Ediyorum',
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
          footer: {
            privacyPolicy: "Gizlilik Politikası",
            impressum: "İletişim",
            madeWith: "",
            at42Vienna: "42Vienna'da"
          }
        },
      },
      bg: {
        translation: {
          home: {
            welcome: 'Добре дошли в Приложението на пинг-понг!',
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
            passwordMismatch: 'Парола празна/невалидна',
            confirmPassword: 'Потвърди парола',
            termsAndConditions: 'Условия и правила',
            acceptTerms: 'Приемам условията и правилата',
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
          footer: {
            privacyPolicy: "Политика за поверителност",
            impressum: "Импресум",
            madeWith: "Изработено с",
            at42Vienna: "в 42Vienna"
          }
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
            passwordMismatch: 'كلمة المرور فارغة/غير صالحة',
            confirmPassword: 'تأكيد كلمة المرور',
            termsAndConditions: 'الشروط والأحكام',
            acceptTerms: 'أوافق على الشروط والأحكام',

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
          footer: {
            privacyPolicy: "سياسة الخصوصية",
            impressum: "إشهار الموقع",
            madeWith: "صُنع بواسطة",
            at42Vienna: "في 42Vienna"
          }
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
            passwordMismatch: 'Passwort leer/ungültig',
            confirmPassword: 'Passwort bestätigen',
            termsAndConditions: 'Geschäftsbedingungen',
            acceptTerms: 'Ich akzeptiere die Geschäftsbedingungen',
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
            or: 'oder',
          },
          footer: {
            privacyPolicy: "Datenschutz",
            impressum: "Impressum",
            madeWith: "Erstellt mit",
            at42Vienna: "bei 42Vienna"
          }
          
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
