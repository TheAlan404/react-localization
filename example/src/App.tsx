import { LanguageProvider } from "@alan404/react-localization";
import { MantineProvider } from "@mantine/core";
import { Page } from "./Page";

import "@mantine/core/styles.css";

export const App = () => {
    return (
        <MantineProvider defaultColorScheme="dark">
            <LanguageProvider
                initialLanguage="en"
                supportedLanguages={["en", "tr"]}
            >
                <Page />
            </LanguageProvider>
        </MantineProvider>
    );
};
