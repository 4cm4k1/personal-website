import { Cell, Grid, Row } from '@material/react-layout-grid';
import constants from '../lib/constants';

const { assetPath, host } = constants;

export default ({ children }) => (
  <Grid>
    <Row>
      <Cell desktopColumns={2} tabletColumns={1} />
      <Cell desktopColumns={8} tabletColumns={6} phoneColumns={4}>
        {children}
      </Cell>
      <Cell desktopColumns={2} tabletColumns={1} />
    </Row>
  </Grid>
);

export { assetPath, host };
