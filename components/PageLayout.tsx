import Head from 'next/head';

import { Grid, GridCell } from '@rmwc/grid';

type Props = {
  title?: string;
};

const PageLayout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
