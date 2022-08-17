import { Grid } from '@mantine/core';

export default function MainGrid({ children, ...restProps }) {
  return (
    <Grid gutter='xl' m={0} {...restProps}>
      {children}
    </Grid>
  );
}