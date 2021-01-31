import { graphql, useStaticQuery } from 'gatsby';

interface SiteMedataInterface {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
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
            siteUrl
          }
        }
      }
    `
  );

  return siteMetadata;
};
