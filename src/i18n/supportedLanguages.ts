export const supportedLanguages = ["en", "ua"] as const;

export type SupportedLanguage = typeof supportedLanguages[number];
