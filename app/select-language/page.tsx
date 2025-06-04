'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-700 p-8 rounded-2xl shadow-xl max-w-4xl w-full">
        {/* Langue */}
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">🌐</div>
          <h2 className="text-xl font-bold text-cyan-300 mb-2">{t('choose_language')}</h2>
          <p className="mb-4">{t('choose_language')}</p>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-4 py-2 rounded-md border ${
                  language === lang.code
                    ? 'bg-indigo-500 border-indigo-400 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300'
                } hover:bg-indigo-600 transition`}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inscription */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-cyan-300 mb-4">{t('welcome_to_utopiaconnect')}</h1>
          <p className="text-center mb-6 text-sm text-gray-300">
            {language === 'fr'
              ? 'Rejoignez notre communauté mondiale et partagez vos expériences dans votre langue préférée.'
              : 'Join our global community and share your experiences in your preferred language.'}
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-teal-400 px-6 py-2 rounded-full text-white shadow-md hover:opacity-90 transition"
            onClick={() => router.push('/signup')}
          >
            ➜ {t('sign_up') || 'Sign Up'}
          </button>
          <div className="my-4 text-gray-400 text-sm">— {t('or') || 'or'} —</div>
          <button
            className="text-blue-400 hover:underline text-sm"
            onClick={() => router.push('/login')}
          >
            {t('login') || 'Login'}
          </button>
        </div>
      </div>
    </main>
  );
}
