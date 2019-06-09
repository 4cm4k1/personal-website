/// <reference types="next" />

declare module '@mdx-js/react';

declare module '*.mdx' {
  import * as React from 'react';

  const page: React.ComponentType;
  export default page;
}
