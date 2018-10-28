import { Cell, Grid, Row } from '@material/react-layout-grid';

import Document from '../md/index.mdx';

export default () => (
  <>
    <Grid>
      <Row>
        <Cell columns={12}>
          <Document />
        </Cell>
      </Row>
    </Grid>

    <style jsx global>{`
      @import '@material/react-layout-grid/index';
    `}</style>
  </>
);
