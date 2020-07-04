// libraries
import { Avatar } from '@rmwc/avatar';
// types
import { NextPage } from 'next';
// local
import PageLayout from '../components/PageLayout';

const IndexPage: NextPage = () => (
  <PageLayout title='Home - Anthony Maki'>
    <h1>Hi Aaron! 👋</h1>
    <p>
      My name is Anthony Maki. I’m a web software engineer based in Minneapolis.
    </p>
    <Avatar size='xlarge' name='Anthony Maki' src='/face.webp' />
  </PageLayout>
);

export default IndexPage;
