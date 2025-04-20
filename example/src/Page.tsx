import { Localized, useLanguage } from "@alan404/react-localization";
import { Lang } from "@alan404/react-localization/lang";
import { Button, Container, Group, SegmentedControl, Stack, Text, Title } from "@mantine/core";

export const Page = () => {
    const { language, setLanguage, supportedLanguages } = useLanguage();

    return (
        <Container pt="md">
            <Stack>
                <Title order={2}>
                    <Localized
                        en="This is #PACKAGE#"
                        tr="Bu #PACKAGE#"
                        PACKAGE="@alan404/react-localization"
                    />
                </Title>

                <Group align="center">
                    <SegmentedControl
                        data={supportedLanguages}
                        value={language}
                        onChange={(v) => setLanguage(v as Lang)}
                    />
                    <Text>
                        <Localized
                            en="Change Language"
                            tr="Dil Değiştir"
                        />
                    </Text>
                </Group>

                <Button
                    variant="light"
                    color="gray"
                    component="a"
                    href="https://github.com/TheAlan404/react-localization"
                >
                    <Localized
                        tr="Github'da Aç"
                        en="Open in Github"
                    />
                </Button>
            </Stack>
        </Container>
    );
};
