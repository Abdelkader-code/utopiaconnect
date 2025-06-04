'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-800 rounded-2xl shadow-2xl">
        
        {/* Left: Language Selector */}
        <section
          aria-label={t('select_language')}
          className="bg-gray-700 rounded-xl p-8 flex flex-col items-center"
        >
          <div className="text-4xl mb-4">🌐</div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">{t('select_your_language')}</h2>
          <p className="mb-6 text-gray-300">{t('select_language_description')}</p>

          <div className="grid grid-cols-2 gap-4">
            {languages.map(({ code, label, flag }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={`w-36 py-2 px-3 rounded border-2 flex items-center justify-center gap-2 font-medium transition
                  ${
                    language === code
                      ? 'bg-indigo-600 border-indigo-400'
                      : 'bg-gray-800 border-gray-600 hover:border-white'
                  }`}
              >
                <span className="text-lg">{flag}</span> {label}
              </button>
            ))}
          </div>
        </section>

        {/* Right: Welcome + Signup */}
        <section className="bg-gray-700 rounded-xl p-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">{t('welcome_to_utopia')}</h2>
          <p className="text-gray-300 mb-6">{t('join_community_description')}</p>

          <Link
            href="/signup"
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full text-white font-semibold text-lg shadow hover:opacity-90 transition"
          >
            ➜ {t('sign_up')}
          </Link>

          <div className="mt-6 text-gray-400 text-sm">
            {t('or')}
            <br />
            <Link href="/login" className="text-blue-400 hover:underline">
              {t('already_have_account_login')}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
