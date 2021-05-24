import { Box, List, ListItem } from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';
import { Container } from '../../components/container';
import { PostBanner } from '../../components/blog/postBanner';
import { PublicLayout } from '../../components/layouts/publicLayout';
import { Seo } from '../../components/seo';
import styled from '@emotion/styled';

const StyledBlog = styled.div`
  .list-item {
    &:not(:last-child) {
      margin-bottom: ${gutters.small};
    }
  }
`;

const BlogIndex = () => {
  return (
    <PublicLayout isBgLighter={true}>
      <StyledBlog>
        <Seo title="Blog" />
        <Container>
          <Box padding="9rem 0 4rem">
            <h1 style={{marginBottom: gutters.xSmallOne}}>
              Neon Law Blog
            </h1>

            <List spacing="0.5rem" maxWidth={sizes.textContainerMedium}>
              <ListItem className="list-item">
                <PostBanner
                  title="Kubernetes Architecture"
                  date={new Date()}
                  slug="/blog/k8s-architecture"
                  excerpt="The k8s architecture of Neon Law"
                >
                  <img
                    src="/images/k8s_diagram.png"
                    alt="Kubernetes Architecture Blog Post"
                  />
                </PostBanner>
              </ListItem>

              <ListItem className="list-item">
                <PostBanner
                  title="Information Technology"
                  date={new Date()}
                  slug="/blog/information-technology"
                  excerpt="The Information Technology setup of Neon Law."
                >
                </PostBanner>
              </ListItem>
            </List>
          </Box>
        </Container>
      </StyledBlog>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default BlogIndex;
