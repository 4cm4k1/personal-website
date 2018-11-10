import { Fragment, PureComponent } from 'react';

export default class JsonLd extends PureComponent {
  render() {
    const { nonce } = this.props;
    return (
      <Fragment>
        <script
          type='application/ld+json'
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org",
      "@type": "Person",
      "email": "4cm4k1@gmail.com",
      "familyName": "Maki",
      "givenName": "Anthony",
      "jobTitle": "Software Engineer",
      "telephone": "+1 612-226-9494",
      "description": "Anthony Maki is a Minneapolis-based software engineer. He codes stuff. Learn more about his interests, projects, and expertise. Contact him to chat, collaborate, and connect.",
      "name": "Anthony Maki",
      "url": "https://anthony.codes",
      "sameAs": [
        "https://github.com/4cm4k1",
        "https://twitter.com/4cm4k1",
        "https://www.linkedin.com/in/4cm4k1/",
        "https://keybase.io/4cm4k1",
        "https://www.youtube.com/c/AnthonyMaki",
        "https://thedebug.life",
        "https://maki.fyi",
        "https://anthony.app"
      ]
    }`,
          }}
        />
        <script
          type='application/ld+json'
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://anthony.codes",
      "name": "Anthony Maki - Software Engineer",
      "description": "Anthony Maki is a Minneapolis-based software engineer. He codes stuff. Learn more about his interests, projects, and expertise. Contact him to chat, collaborate, and connect."
    }`,
          }}
        />
      </Fragment>
    );
  }
}
