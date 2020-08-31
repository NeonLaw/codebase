/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure
} from '@chakra-ui/core';

import { MdDehaze } from 'react-icons/md';
import React from 'react';
import { navigate } from 'gatsby';

export const BaseNavigationBar = ({
  sideNavigationDrawer,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        top="0"
        position="fixed"
        zIndex={4}
        bg="black"
        color="white"
        left="0"
        right="0"
        width="full"
        height="4em"
      >
        <Flex boxSize="100%" px="6" align="center">
          <Box
            mr={5}
            as="a"
            cursor="pointer"
            style={{ display: 'block' }}
            onClick={() => { navigate('/'); }}
            aria-label="Law Job Resources, Back to homepage"
            minWidth="3em"
          >
            Law Job Resources
          </Box>

          <Flex
            flexGrow={1}
            align="center"
            justify="flex-end"
          >
            <IconButton
              display={{ md: 'none', sm: 'inline-flex' }}
              aria-label="Navigation Menu"
              fontSize="20px"
              variant="ghost"
              icon={<MdDehaze />}
              onClick={onToggle}
            />
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding="0">
            {sideNavigationDrawer}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

};
