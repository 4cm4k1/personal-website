import PageLayout from '../components/PageLayout';
import { NextPage } from 'next';

import { Avatar } from '@rmwc/avatar';

const IndexPage: NextPage = () => (
  <PageLayout title='Home - Anthony Maki'>
    <h1>Hi! 👋</h1>
    <p>
      My name is Anthony Maki. I’m a web software engineer based in Minneapolis.
    </p>
    <Avatar size='xlarge' name='Anthony Maki' src='/face.webp' />
  </PageLayout>
);

export default IndexPage;
