import { Lang } from "@alan404/react-localization/lang";
import { Fragment, ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";

export type LocalizedStringsMap = {
    [language in Lang]: string;
};

export type ReactNodesMap = Partial<Record<string, ReactNode>>;
export type LocalizedProps = LocalizedStringsMap & ReactNodesMap;

export const Localized = (props: LocalizedProps) => {
    const { language } = useLanguage();

    const string = props[language];
    const list = string.split(/(#\w+#)/);

    const elements = list.map((value, i) => {
        if (value[0] == "#" && value[value.length - 1] == "#") {
            const key = value.substring(1, value.length - 1) as keyof typeof props;
            if(!(key in props)) console.warn(`[@alan404/react-localization > Localized] Interpolation with key '${key}' not defined in props. If this is intentional, define it in props with undefined or null.`);
            return (
                <Fragment
                    key={i}
                    children={props[key]}
                />
            );
        } else {
            return <span key={i}>{value}</span>;
        }
    });

    return (
        <Fragment>
            {elements}
        </Fragment>
    );
};


