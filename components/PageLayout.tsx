import { Cell, Grid, Row } from '@material/react-layout-grid';
import constants from '../lib/constants';
import { withAmp } from 'next/amp';

const { assetPath } = constants;

interface Props {
  children: React.ReactNode;
}

export default withAmp(
  ({ children }: Props) => (
    <Grid>
      <Row>
        <Cell desktopColumns={2} tabletColumns={1} />
        <Cell desktopColumns={8} tabletColumns={6} phoneColumns={4}>
          {children}
        </Cell>
        <Cell desktopColumns={2} tabletColumns={1} />
      </Row>
    </Grid>
  ),
  { hybrid: true },
);

export { assetPath };
