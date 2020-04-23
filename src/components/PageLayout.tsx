// libraries
import Head from 'next/head';
import { Grid, GridCell } from '@rmwc/grid';
// types
import { FunctionalComponent } from 'preact';
// local types
type Props = {
  title?: string;
};

const PageLayout: FunctionalComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Grid>
      <GridCell desktop={4} tablet={1} phone={0}></GridCell>
      <GridCell desktop={4} tablet={6} phone={4}>
        <main>{children}</main>
      </GridCell>
      <GridCell desktop={4} tablet={1} phone={0}></GridCell>
    </Grid>
  </>
);

export default PageLayout;
