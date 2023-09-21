import React, {Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Routing from './Services/Routing';
import store from './Store';



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
      caches: ["cookie"],
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
    // react: {useSuspense: false}
  });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t('Welcome_to_React')}</h2>;
// }



ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <React.StrictMode>
      <Provider store={store}>
        <Routing />
        {/* <App /> */}
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);