'use client';

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string; // fonction pour récupérer la traduction
};

// Dictionnaire de traductions pour chaque langue
const translations: Record<string, Record<string, string>> = {
  en: {
    welcome: 'Welcome',
    choose_language: 'Choose your language',
    welcome_to_utopiaconnect: 'Welcome to UtopiaConnect',
    select_language: 'Select your language',
    select_your_language: 'Select your language',
    select_language_description: 'Select your language',
    join_community_description: 'Join our global community and share your experiences in your preferred language.',
    sign_up: 'Sign Up',
    or: 'or',
    already_have_account_login: 'Already have an account? Login',
  },
  fr: {
    welcome: 'Bienvenue',
    choose_language: 'Choisissez votre langue',
    welcome_to_utopiaconnect: 'Bienvenue sur UtopiaConnect',
    select_language: 'Sélectionnez votre langue',
    select_your_language: 'Sélectionnez votre langue',
    select_language_description: 'Sélectionnez votre langue',
    join_community_description: 'Rejoignez notre communauté mondiale et partagez vos expériences dans votre langue préférée.',
    sign_up: "S'inscrire",
    or: 'ou',
    already_have_account_login: 'Vous avez déjà un compte ? Connectez-vous',
  },
  de: {
    welcome: 'Willkommen',
    choose_language: 'Wähle deine Sprache',
    welcome_to_utopiaconnect: 'Willkommen bei UtopiaConnect',
    select_language: 'Wähle deine Sprache',
    select_your_language: 'Wähle deine Sprache',
    select_language_description: 'Wähle deine Sprache',
    join_community_description: 'Tritt unserer globalen Community bei und teile deine Erfahrungen in deiner bevorzugten Sprache.',
    sign_up: 'Registrieren',
    or: 'oder',
    already_have_account_login: 'Hast du schon einen Account? Einloggen',
  },
  es: {
    welcome: 'Bienvenido',
    choose_language: 'Elige tu idioma',
    welcome_to_utopiaconnect: '¡Bienvenido a UtopiaConnect',
    select_language: 'Elige tu idioma',
    select_your_language: 'Elige tu idioma',
    select_language_description: 'Elige tu idioma',
    join_community_description: 'Únete a nuestra comunidad global y comparte tus experiencias en tu idioma preferido.',
    sign_up: 'Registrarse',
    or: 'o',
    already_have_account_login: '¿Ya tienes una cuenta? Inicia sesión',
  },
  it: {
    welcome: 'Benvenuto',
    choose_language: 'Scegli la tua lingua',
    welcome_to_utopiaconnect: 'Benvenuto su UtopiaConnect',
    select_language: 'Scegli la tua lingua',
    select_your_language: 'Scegli la tua lingua',
    select_language_description: 'Scegli la tua lingua',
    join_community_description: 'Unisciti alla nostra comunità globale e condividi le tue esperienze nella tua lingua preferita.',
    sign_up: 'Iscriviti',
    or: 'o',
    already_have_account_login: 'Hai già un account? Accedi',
  },
  zh: {
    welcome: '欢迎',
    choose_language: '选择你的语言',
    welcome_to_utopiaconnect: '欢迎来到 UtopiaConnect',
    select_language: '选择你的语言',
    select_your_language: '选择你的语言',
    select_language_description: '选择你的语言',
    join_community_description: '加入我们的全球社区，用你喜欢的语言分享你的经历。',
    sign_up: '注册',
    or: '或',
    already_have_account_login: '已有账号？登录',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  // Charger la langue depuis localStorage au premier rendu
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Fonction simple pour récupérer la traduction selon la clé
  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  // Met à jour la langue à la fois dans l'état et localStorage
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser facilement le contexte
export const useLanguage = () => useContext(LanguageContext);
