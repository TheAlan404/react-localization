# @alan404/react-localization

A very simple inline React localization library.

## Overview

Here's an example usage:

```tsx
<Title>
    <Localized
        en="#AVATAR# Welcome, #USER#"
        tr="#AVATAR# Hoşgeldin, #USER#"
        jp="#AVATAR# ようこそ, #USER#"
        AVATAR={(
            <Avatar
                src={user.avatarURL}
            />
        )}
        USER={user.username}
    />
</Title>
```

- Everything is inline. While you are developing, you dont need to open as many files as you have languages to add translations. This makes everything easier. This library is also most likely better for SSR too.
- Translations are type-safe, typescript will show you an error if you're missing a language key (`en` or `tr` in this case) - Languages are also customizable.
- Interpolations use `ReactNode`s which allow for all sorts of use cases.

## Installation & Setup

```sh
# Choose from your preferred package manager
pnpm add @alan404/react-localization
npm i @alan404/react-localization
yarn add @alan404/react-localization
```

After installing a package, you need to create a `.d.ts` file in your project. If you already have one, you can just put this there too. We recommend `lang.d.ts`.

This is so you can configure the available languages for the entire library:

```ts
declare module '@alan404/react-localization/lang' {
    export type Lang = "en" | "tr" | "jp";
}
```

The default is `"en"` with no other language.

After doing that, wrap your app with `LanguageProvider`

```tsx
import type { Lang } from "@alan404/react-localization/lang";
import { LanguageProvider } from "@alan404/react-localization";

export const App = () => {
    const [language, setLanguage] = useState<Lang>("en"); // Optional

    return (
        <LanguageProvider
            initialLanguage="en"
            supportedLanguages={["en", "tr", "jp"]}

            {/* These props are optional but allow you to take control of the language state */}
            {/* So you can expand upon and save to localStorage or do auto-detection etc */}
            language={language}
            setLanguage={setLanguage}
        >
            {/* Other stuff */}
        </LanguageProvider>
    )
};
```

Now you can use `Localized` anywhere in your app.

```tsx
<Localized
    {/* translations */}
    en="Hello #NAME#"
    tr="Merhaba #NAME#"
    jp="こんにちは #NAME#"

    {/* interpolations */}
    NAME={"Gökçe"}
/>

// Interpolation keys dont need to be all-uppercase, but language codes are lowercase so we recommend you keep them uppercase too.
```

There's also a `useLanguage` hook.

```tsx
const Something = () => {
    const {
        language,
        setLanguage,
        supportedLanguages,
    } = useLanguage();

    return ...;
};
```
