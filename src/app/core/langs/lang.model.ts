
/**
 * Lang model classes
 * @author victorguz <victorguzber@gmail.com> June 2021
 */

//////
export enum CokyLanguages {
  SPANISH = "es", ENGLISH = "en", FRENCH = "fr", GERMAN = "de", PORTUGUESE = "pt"
}
export enum CokyLangCategory {
  GENERAL = "GENERAL",
  USERS = "USERS",
}
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
