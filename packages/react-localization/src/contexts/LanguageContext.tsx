import { createContext, PropsWithChildren, useContext } from "react";
import { useUncontrolled } from "../utils/useUncontrolled";
import type { Lang } from "@alan404/react-localization/lang";

export type ILanguageContext = {
    language: Lang;
    setLanguage: (lang: Lang) => void;
    supportedLanguages: Lang[];
};

export const LanguageContext = createContext<ILanguageContext>({
    language: "en" as any,
    setLanguage: () => {},
    supportedLanguages: ["en" as any],
});


