interface Props {
  profile: {
    email: string;
    lastName: string;
    firstName: string;
    jobTitle: string;
    phone: string;
    description: string;
    fullName: string;
    title: string;
  };
  host: string;
}

export default (props: Props) => (
  <>
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: `{
      "@context": "https://schema.org",
      "@type": "Person",
      "email": "${props.profile.email}",
      "familyName": "${props.profile.lastName}",
      "givenName": "${props.profile.firstName}",
      "jobTitle": "${props.profile.jobTitle}",
      "telephone": "${props.profile.phone}",
      "description": "${props.profile.description}",
      "name": "${props.profile.fullName}",
      "url": "${props.host}",
      "sameAs": [
        "https://github.com/4cm4k1",
        "https://twitter.com/4cm4k1",
        "https://www.linkedin.com/in/4cm4k1/",
        "https://keybase.io/4cm4k1",
        "https://www.youtube.com/c/AnthonyMaki",
        "https://maki.fyi",
        "https://anthony.app"
      ]
    }`,
      }}
    />
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "${props.host}",
      "name": "${props.profile.title}",
      "description": "${props.profile.description}"
    }`,
      }}
    />
  </>
);
