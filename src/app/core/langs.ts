import { LOCAL_STORAGE_SELECTED_LANG } from "../config/default.config";

export enum CokyLanguageTypes {
  SPANISH = "es", ENGLISH = "en", FRENCH = "fr", GERMAN = "de", PORTUGUESE = "pt"
}
export enum CokyLangCategory {
  GENERAL = "GENERAL",
  USERS = "USERS",
}
export const DEFAULT_LANGS: CokyLanguageTypes[] = [CokyLanguageTypes.SPANISH, CokyLanguageTypes.ENGLISH]
export const DEFAULT_LANG: CokyLanguageTypes = CokyLanguageTypes.ENGLISH

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
        name: "Digite un correo electrónico válido",
        en: "Enter a valid email"
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

export interface CokyLangPhraseCategory {
  type: CokyLangCategory,
  phrases: CokyLangPhrase[]
}
export interface CokyLangPhrase {
  name: string
  es?: string
  en?: string
  fr?: string
  de?: string
  pt?: string
}


export function __(cadena: string, category: CokyLangCategory = CokyLangCategory.GENERAL) {
  return translate(cadena, category);
}

/**
 * Traduce una cadena en el lenguaje por defecto
 * @param cadena
 * @returns
 */
export function translate(cadena: string, category: CokyLangCategory = CokyLangCategory.GENERAL) {
  cadena = cadena.trim();
  console.log(cadena)
  if (cadena.length == 0) {
    throw new Error("No se puede traducir una cadena vacía");
  }
  if (!CokyPhrases[category]) {
    throw new Error(`No se encuentran fraces de esta categoría '${category}'`);
  }
  const selectedLang = getCurrentLang();
  const find = CokyPhrases[category].find((phrase) => {
    return phrase.name.trim().toLowerCase() == cadena.trim().toLowerCase();
  })

  return find && selectedLang && find[selectedLang] ? find[selectedLang] : cadena.trim();

}

export function getCurrentLang() {
  const selectedLang = localStorage.getItem(LOCAL_STORAGE_SELECTED_LANG);
  return selectedLang ? selectedLang : DEFAULT_LANG;
}
