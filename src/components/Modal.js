import { Modal as MantineModal, useMantineTheme } from '@mantine/core';

export default function Modal({ data, onClose }) {
  const theme = useMantineTheme();

  return (
    <MantineModal centered size='lg' overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.75}
      opened={true}
      onClose={onClose}
      title={data.title}
    >
      {data.link &&
        <>
          <br />
          <a href={data.link} target='_blank'>See Project Live</a>
        </>
      }
      {data.repo &&
        <>
          <br />
          <a href={data.repo} target='_blank'>See Project Repository</a>
        </>
      }
    </MantineModal>
  );
}