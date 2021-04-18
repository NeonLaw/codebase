import { colors, gutters, theme } from '../../styles/neonLaw';
import { BaseFooter } from '../footer/baseFooter';
import { Breadcrumbs } from '../breadcrumbs';
import { LoadingPage } from '../loadingPage';
import {
  PortalNavigationBar
} from '../navigationBars/portalNavigationBar';
import {
  PortalSideNavContent
} from '../sideNavigation/portalSideNavigation';
import {
  PortalSideNavigation
} from '../sideNavigation/portalSideNavigation';
import { portalNavLinks } from '../navigationBars/portalNavLinks';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

const StyledPortalLayout = styled.div`
  min-height: 100vh;

  .wrapper {
    display: grid;
    grid-template-rows: auto minmax(860px, auto);
    grid-template-columns: 216px 2fr;
    grid-template-areas: 'head head' 'aside main';
    width: 100%;
    overflow: hidden;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    @media (min-height: 1100px) {
      grid-template-rows: auto minmax(100vh, auto);
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  .portal-hamburger {
    display: none;

    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      min-width: 2.5rem;
    }
  }
`;

const Aside = styled.div`
  grid-area: 'aside';
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Main = styled.main`
  grid-area: 'main';
  padding: ${gutters.small};
  overflow: hidden;

  @media (max-width: 800px) {
    padding: ${gutters.xSmallOne};
  }
`;

const FooterWrapperMobile = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const PortalLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const {
    isLoading,
    user,
  } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (user) {
    const links = portalNavLinks({ email: user.email });

    return (
      <>
        <StyledPortalLayout>
          <div className="wrapper">
            <Aside
              style={{
                background:
                colorMode === 'dark' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                color: colors.text[colorMode],
                height: '100%',
              }}
            >
              <PortalSideNavigation links={links} />
            </Aside>
            <PortalNavigationBar
              isRenderedOnDashboard={true}
              sideNavigationDrawer={<PortalSideNavContent links={links} />}
            />
            <Main
              style={{
                background: colorMode === 'dark' ? '#111' : theme.colors.white,
                color: colors.text[colorMode],
              }}
            >
              <Breadcrumbs showHome={false} />
              {children}
            </Main>
          </div>
        </StyledPortalLayout>
        <FooterWrapperMobile>
          <BaseFooter hideTheSection={true} />
        </FooterWrapperMobile>
      </>
    );
  }

  router.push('/');

  return <p>Redirecting</p>;
};
