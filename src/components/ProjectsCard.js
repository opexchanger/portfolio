import { Card, Image, Text, Title, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export default function ProjectsCard({
  title,
  cover,
  link,
  techs,
  overview,
  repo,
  onButtonClick
}) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg" mb={20}>
      <Card.Section style={{ borderBottom: '1px solid teal' }}>
        <Image src={cover} height={160} alt={title} fit='cover' />
      </Card.Section>

      <Group spacing="sm" my={15}>
        {techs.map((tech) => (
          <Badge p='xs' size='xs' color='teal' radius='0' key={tech}>
            {tech}
          </Badge>
        ))}
      </Group>

      <Title order={3}>{title}</Title>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {overview}
      </Text>

      <Button variant="light" fullWidth mt={14} onClick={onButtonClick}>
        See more details
      </Button>
    </Card>
  );
}