import { graphql, useStaticQuery } from 'gatsby';

interface SiteMedataInterface {
  title: string;
  description: string;
  author: string;
}

export const useSiteMetadata = (): SiteMedataInterface => {
  const {
    site: {
      siteMetadata = {} as SiteMedataInterface,
    } = {},
  } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return siteMetadata;
};
