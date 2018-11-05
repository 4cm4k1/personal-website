import { Cell, Grid, Row } from '@material/react-layout-grid';

export default () => (
  <Grid>
    <Row>
      <Cell desktopColumns={2} tabletColumns={1} />
      <Cell desktopColumns={8} tabletColumns={6} phoneColumns={4}>
        <h1>Coming soon...</h1>
      </Cell>
      <Cell desktopColumns={2} tabletColumns={1} />
    </Row>
  </Grid>
);
