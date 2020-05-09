import { Heading, Text } from '@chakra-ui/core';
import { AuthenticationContext } from '@utils/authenticationContext';
import { PortalLayout } from '@layouts/portal';
import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const CURRENT_USER = gql`
  {
    getCurrentUser {
      id
      name
      email
      picture
      role
    }
  }
`;

const PortalProfile = () => {
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (loading) return (<>Loading...</>);

  if (error) {
    return (
      <AuthenticationContext.Consumer>
        {({ logout }) => {
          logout();
          return null;
        }}
      </AuthenticationContext.Consumer>
    );
  }

  const currentUser = data.getCurrentUser;

  return (
    <PortalLayout>
      <Heading textAlign="center" marginTop="20px">
        Your Profile
      </Heading>

      <Text>
        Your name is {currentUser.name}
      </Text>

      <Text>
        Your email is {currentUser.email}
      </Text>

      <Text>
        Your role is {currentUser.role}
      </Text>

    </PortalLayout>
  );
};

export default PortalProfile;
