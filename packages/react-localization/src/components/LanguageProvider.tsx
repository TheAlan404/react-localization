import { Lang } from "@alan404/react-localization/lang";
import { useUncontrolled } from "../utils/useUncontrolled";
import { PropsWithChildren } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const LanguageProvider = ({
    language: _language,
    setLanguage: _setLanguage,
    initialLanguage,
    supportedLanguages,
    children,
}: {
    language?: Lang;
    setLanguage?: (lang: Lang) => void;
    initialLanguage: Lang;
    supportedLanguages: Lang[];
} & PropsWithChildren) => {
    const [language, setLanguage] = useUncontrolled({
        value: _language,
        onChange: _setLanguage,
        defaultValue: initialLanguage,
        finalValue: "en" as any,
    });

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                supportedLanguages,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
