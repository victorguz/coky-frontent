import { getConfig, LOCAL_STORAGE_SELECTED_LANG } from "../../config/default.config";
import { CokyLangCategory, CokyLangPhraseCategory, CokyLanguages } from "./lang.model";


const CokyPhrases: CokyLangPhraseCategory[] = [
  {
    type: CokyLangCategory.GENERAL,
    phrases: [
      {
        name: "Todos los derechos reservados a",
        en: "All rights reserved to"
      },
      {
        name: "Desarrollado por",
        en: "Developed by"
      },
      {
        name: "Versión",
        en: "Version"
      },
      {
        name: "Iniciar sesión",
        en: "Login"
      },
      {
        name: "Correo electrónico",
        en: "Email"
      },
      {
        name: "Nombre de usuario",
        en: "Username"
      },
      {
        name: "Contraseña",
        en: "Password"
      },
      {
        name: "Digite un nombre de usuario válido",
        en: "Enter a valid username"
      },
      {
        name: "Digite un correo electrónico válido",
        en: "Enter a valid email"
      },
      {
        name: "Digite una contraseña válida",
        en: "Enter a valid password"
      },
    ]
  },
  {
    type: CokyLangCategory.USERS,
    phrases: [
      {
        name: "Iniciar sesión",
        en: "Login",
        fr: "Connexion",
      },
      {
        name: "Lo sentimos, solo los administradores pueden desbloquear tu usuario.",
        en: "Sorry, only administrators can unblock your username."
      },
      {
        name: "Hemos enviado un mensaje a tu dirección de correo electrónico. Sigue las instrucciones para poder recuperar tu",
        en: "We have sent a message to your email address. Follow the instructions to be able to recover your"
      },
      {
        name: "Ayuda para ingresar",
        en: "Login help"
      },
    ]
  }
]

export function __(cadena: string, category: CokyLangCategory = CokyLangCategory.GENERAL) {
  return translate(cadena, category);
}

/**
 * Traduce una cadena en el lenguaje por defecto
 * @param cadena
 * @returns
 */
export function translate(cadena: string, category: CokyLangCategory = CokyLangCategory.GENERAL) {
  cadena = cadena.trim().toLowerCase();

  const selectedLang = getCurrentLang();
  const foundCategory = CokyPhrases.find((cat) => {
    return cat.type == category;
  })
  if (!foundCategory) {
    throw new Error(`No se encuentran frases de esta categoría '${category}'`);
  }
  const phrase = foundCategory.phrases.find((_phrase) => {
    return _phrase[selectedLang].trim().toLowerCase() == cadena;
  })
  return phrase && phrase[selectedLang] ? phrase[selectedLang] : cadena;

}

export function getCurrentLang() {
  let localStorageLang = localStorage.getItem(LOCAL_STORAGE_SELECTED_LANG);
  if (!localStorageLang) {
    const configLang = getConfig("default_lang");
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LANG, configLang)
    localStorageLang = configLang;
  }
  return localStorageLang ? localStorageLang : CokyLanguages.ENGLISH;
}
