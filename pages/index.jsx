import { Cell, Grid, Row } from '@material/react-layout-grid';

import Document from '../mdx/index.mdx';

export default () => (
  <Grid>
    <Row>
      <Cell desktopColumns={2} tabletColumns={1} />
      <Cell desktopColumns={8} tabletColumns={6} phoneColumns={4}>
        <Document />
      </Cell>
      <Cell desktopColumns={2} tabletColumns={1} />
    </Row>
  </Grid>
);
