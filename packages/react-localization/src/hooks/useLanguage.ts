import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext.js";

export const useLanguage = () => useContext(LanguageContext);
