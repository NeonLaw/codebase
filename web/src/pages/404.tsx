import { Button } from '../components/button';
import { PublicLayout } from '../components/layouts/publicLayout';
import { gutters } from '../styles/neonLaw';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Styled404Page = styled.div`
  text-align: center;
  padding: 9rem 0 4rem;

  .wrapper {
    min-height: 50vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 8rem;

    @media (max-width: 400px) {
      font-size: 6rem;
    }
  }

  p {
    margin-bottom: ${gutters.xSmallOne};
  }
`;

const Page404 = () => {
  const router = useRouter();

  return (
    <PublicLayout isFooterSectionHidden={true}>
      <Styled404Page>
        <div className="wrapper">
          <h1>404</h1>
          <p>Oh, no! Something went wrong on our side.</p>
          <Button
            onClick={() => {
              router.push('/');
            }}
          >
            Go Home
          </Button>
        </div>
      </Styled404Page>
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default Page404;
