import { Cell, Grid, Row } from '@material/react-layout-grid';

export default () => (
  <>
    <Grid>
      <Row>
        <Cell columns={12}>
          <h1>Coming soon...</h1>
        </Cell>
      </Row>
    </Grid>

    <style jsx global>{`
      @import '@material/react-layout-grid/index';
    `}</style>
  </>
);
