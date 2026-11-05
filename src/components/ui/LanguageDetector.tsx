import { useEffect } from 'react';
import { base } from '../../config';

export default function LanguageDetector() {
    useEffect(() => {
        // Only run once
        if (typeof window !== 'undefined' && sessionStorage.getItem('language-detected')) return;

        const userLang = navigator.language.split('-')[0];
        const currentPath = window.location.pathname;

        // If the home page is open and the browser is English
        if (currentPath === base && userLang === 'en') {
            sessionStorage.setItem('language-detected', 'true');
            window.location.href = `${base}en`;
        }
    }, []);

    return null;
}
