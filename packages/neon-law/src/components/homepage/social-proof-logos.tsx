import { Box } from '@chakra-ui/core';
import { Container } from '@neonlaw/shared-ui/src/components/container';
import React from 'react';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';
import styled from '@emotion/styled';

const StyledLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 945px) {
    overflow-x: scroll;
  }

  svg {
    height: 5em;
    max-width: 8em;
    min-width: 6.5em;
    fill: #888;

    &:not(:last-child) {
      margin-right: ${gutters.small};
    }
  }
`;

interface Org {
  name: string;
  logo: JSX.Element;
}

const orgs: Org[] = [
  {
    logo: (
      <svg viewBox="0 0 362.8 103.7">
        <path d="M346.8 74.9c-.7.2-1.3.3-1.9.3-2.1 0-3.1-.9-3.1-3.5V52c0-10.4-8.3-15.4-18-15.4-7.4 0-11.5.9-19.4 4.1l-1.8 10.4 10.4 1.1 1.5-5.1c2.1-1.1 4.2-1.3 6.9-1.3 7.3 0 7.4 5.5 7.4 10.2v1.5c-2.3-.3-4.9-.4-7.4-.4-10.4 0-21.1 2.6-21.1 13.8 0 9.5 7.4 13 14 13 7.3 0 12-4.4 14.6-9.1.6 5.5 3.9 9.1 10 9.1 2.8 0 5.7-.8 8.2-2.1l-.3-6.9zm-27.9-.3c-3.9 0-5.3-2.3-5.3-5.2 0-4.9 4-6.2 8.7-6.2 2.1 0 4.4.3 6.5.6-.4 7.5-5.3 10.8-9.9 10.8zm-17.4-60.9l-19.6 69.2h-12.8l19.6-69.2h12.8zm-26.4 0l-19.6 69.2h-12.8l19.6-69.2h12.8zm-54.5 23.8h13.6v16.3h-13.6V37.5zm0 29.1h13.6v16.3h-13.6V66.6zm-19.8-.6l10.3 1-2.8 15.9h-39.7l-1.3-6.8 25-28.7h-14.2l-2 7-9.4-1 1.6-15.9h39.9l1 6.8L184 73h14.7l2.1-7zm-65-29.4c-16.3 0-24.4 11-24.4 24.3 0 14.5 9.7 23 23.7 23 14.5 0 25-9.2 25-23.7-.1-12.6-8-23.6-24.3-23.6zm-.3 37.3c-7 0-10.7-6-10.7-13.9 0-8.6 4.1-13.5 10.8-13.5 6.1 0 11.1 4.1 11.1 13.3-.1 8.7-4.5 14.1-11.2 14.1zM99.7 73h6v9.9h-19V57.3c0-7.9-2.6-10.9-7.7-10.9-6.2 0-8.8 4.4-8.8 10.8V73h6v9.9h-19V57.3c0-7.9-2.6-10.9-7.8-10.9-6.2 0-8.8 4.4-8.8 10.8V73h8.7v9.9H21.7V73h6V47.3h-6v-9.9h19v6.8c2.7-4.8 7.4-7.7 13.8-7.7 6.5 0 12.6 3.1 14.8 9.8 2.5-6 7.6-9.8 14.8-9.8 8.2 0 15.6 4.9 15.6 15.7V73z" />
      </svg>
    ),
    name: '',
  },
  {
    logo: (
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 2000 700"
        xmlSpace="preserve"
      >
        <path d="M1358.4 299.3c-25.5 0-43.7 8.7-52.6 25.2l-4.8 8.9v-29.8h-41.5v181.3h43.7V377.1c0-25.8 14-40.6 38.4-40.6 23.3 0 36.6 14.4 36.6 39.5v109h43.7V368.1c-.1-43.1-23.8-68.8-63.5-68.8zm-211.7 0c-51.5 0-83.5 32.1-83.5 83.9v25.5c0 49.7 32.3 80.6 84.2 80.6 34.7 0 59.1-12.7 74.4-38.9l-27.1-15.6c-11.3 15.1-29.4 24.5-47.3 24.5-26.3 0-42-16.2-42-43.4v-7.2h121.9v-30.1c0-48.2-31.6-79.3-80.6-79.3zm40.9 80h-82.2V375c0-29.9 14.7-46.3 41.3-46.3 25.6 0 40.9 16.2 40.9 43.4v7.2zm667.6-105.6V239h-150.9v34.7h52.9v176.5h-52.9v34.7h150.9v-34.7h-52.9V273.7h52.9zM710.6 234c-67.4 0-109.3 42-109.3 109.7v36.6c0 67.7 41.9 109.7 109.3 109.7s109.3-42 109.3-109.7v-36.6c0-67.6-41.9-109.7-109.3-109.7zm64.2 148.8c0 44.9-23.4 70.7-64.2 70.7s-64.2-25.8-64.2-70.7v-41.6c0-44.9 23.4-70.7 64.2-70.7s64.2 25.8 64.2 70.7v41.6zM957 299.3c-22.9 0-42.7 9.5-53.1 25.4l-4.7 7.2v-28.3h-41.5v243.7h43.7V459l4.7 6.9c9.8 14.6 29 23.3 51.3 23.3 37.6 0 75.6-24.6 75.6-79.6v-30.8c0-39.5-23.5-79.5-76-79.5zm32.3 108.2c0 29.2-17.1 47.4-44.5 47.4-25.6 0-43.4-19.2-43.4-46.7V381c0-27.9 18-47.4 43.8-47.4 27.2 0 44.2 18.2 44.2 47.4v26.5zm553.1-168.4L1454.2 485h44.3l16.9-52.7h101.3l.2.5 16.7 52.2h44.3l-88.2-245.9h-47.3zm-16 158.4l39.7-124.3 39.3 124.3h-79zM515.9 307.7c9.6-29.4 6.4-60.3-9.1-87.2-23.4-40.6-69.8-61.2-115.6-51.5-20.6-23-49-35.7-80.1-35.7-46.9 0-87.9 29.9-102.4 74.4-30.3 6.4-55.4 24.6-70.9 51.5-23.4 40.6-18.1 91.1 13.2 125.9-9.6 29.4-6.4 60.3 9.1 87.2 23.4 40.6 69.8 61.2 115.6 51.5 20.6 23 49 35.7 80.1 35.7 46.9 0 87.9-29.9 102.4-74.4 30.3-6.4 55.4-24.6 70.9-51.5 23.4-40.6 18.1-91.1-13.2-125.9zM355.7 531.6c-18.8 0-36.9-6.6-51.1-18.5.6-.4 1.8-1 2.6-1.4l84.9-49c4.4-2.5 7-7 7-12.1V331l35.9 20.7c.5.3.7.7.7 1v99.1c-.1 44-35.9 79.8-80 79.8zm-171.5-73.3c-9.4-16.3-12.8-35.3-9.5-53.5.6.4 1.7 1 2.5 1.5l84.9 49c4.4 2.5 9.6 2.5 13.9 0l103.6-59.8V437c0 .6-.3 1-.5 1.1l-85.8 49.5c-38.2 22-87.1 8.9-109.1-29.3zm-22.4-185.2c9.4-16.3 24.2-28.7 41.6-35V339c0 5 2.6 9.5 7 12.1L314 410.9l-36 20.7c-.5.3-1 .2-1.2.1L191 382.2c-38.1-22-51.2-70.9-29.2-109.1zm294.7 68.6l-103.6-59.8 35.9-20.7c.5-.3 1-.3 1.2-.1l85.8 49.5c38.1 22 51.2 71 29.2 109.1-9.4 16.3-24.2 28.7-41.6 35V353.8c.1-5.1-2.6-9.6-6.9-12.1zm35.7-53.7c-.6-.4-1.7-1-2.5-1.5l-84.9-49c-4.4-2.5-9.6-2.5-13.9 0l-103.6 59.8v-41.4c0-.6.3-1 .5-1.1l85.8-49.5c12.5-7.2 26.3-10.7 39.8-10.7 27.6 0 54.5 14.3 69.3 39.9 9.3 16.2 12.7 35.2 9.5 53.5zm-224.4 73.8l-35.9-20.7c-.5-.3-.7-.7-.7-1V241c0-21.3 8.3-41.3 23.4-56.4 15.1-15.1 35.1-23.4 56.4-23.4 18.8 0 36.9 6.6 51.1 18.5-.6.4-1.8 1-2.6 1.4l-84.9 49c-4.4 2.5-7 7-7 12.1l.2 119.6zm19.5-42l46.1-26.6 46.1 26.6V373l-46.1 26.6-46.1-26.6v-53.2z" />
      </svg>
    ),
    name: '',
  },
  {
    logo: (
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 2000 700"
        xmlSpace="preserve"
      >
        <path d="M1358.4 299.3c-25.5 0-43.7 8.7-52.6 25.2l-4.8 8.9v-29.8h-41.5v181.3h43.7V377.1c0-25.8 14-40.6 38.4-40.6 23.3 0 36.6 14.4 36.6 39.5v109h43.7V368.1c-.1-43.1-23.8-68.8-63.5-68.8zm-211.7 0c-51.5 0-83.5 32.1-83.5 83.9v25.5c0 49.7 32.3 80.6 84.2 80.6 34.7 0 59.1-12.7 74.4-38.9l-27.1-15.6c-11.3 15.1-29.4 24.5-47.3 24.5-26.3 0-42-16.2-42-43.4v-7.2h121.9v-30.1c0-48.2-31.6-79.3-80.6-79.3zm40.9 80h-82.2V375c0-29.9 14.7-46.3 41.3-46.3 25.6 0 40.9 16.2 40.9 43.4v7.2zm667.6-105.6V239h-150.9v34.7h52.9v176.5h-52.9v34.7h150.9v-34.7h-52.9V273.7h52.9zM710.6 234c-67.4 0-109.3 42-109.3 109.7v36.6c0 67.7 41.9 109.7 109.3 109.7s109.3-42 109.3-109.7v-36.6c0-67.6-41.9-109.7-109.3-109.7zm64.2 148.8c0 44.9-23.4 70.7-64.2 70.7s-64.2-25.8-64.2-70.7v-41.6c0-44.9 23.4-70.7 64.2-70.7s64.2 25.8 64.2 70.7v41.6zM957 299.3c-22.9 0-42.7 9.5-53.1 25.4l-4.7 7.2v-28.3h-41.5v243.7h43.7V459l4.7 6.9c9.8 14.6 29 23.3 51.3 23.3 37.6 0 75.6-24.6 75.6-79.6v-30.8c0-39.5-23.5-79.5-76-79.5zm32.3 108.2c0 29.2-17.1 47.4-44.5 47.4-25.6 0-43.4-19.2-43.4-46.7V381c0-27.9 18-47.4 43.8-47.4 27.2 0 44.2 18.2 44.2 47.4v26.5zm553.1-168.4L1454.2 485h44.3l16.9-52.7h101.3l.2.5 16.7 52.2h44.3l-88.2-245.9h-47.3zm-16 158.4l39.7-124.3 39.3 124.3h-79zM515.9 307.7c9.6-29.4 6.4-60.3-9.1-87.2-23.4-40.6-69.8-61.2-115.6-51.5-20.6-23-49-35.7-80.1-35.7-46.9 0-87.9 29.9-102.4 74.4-30.3 6.4-55.4 24.6-70.9 51.5-23.4 40.6-18.1 91.1 13.2 125.9-9.6 29.4-6.4 60.3 9.1 87.2 23.4 40.6 69.8 61.2 115.6 51.5 20.6 23 49 35.7 80.1 35.7 46.9 0 87.9-29.9 102.4-74.4 30.3-6.4 55.4-24.6 70.9-51.5 23.4-40.6 18.1-91.1-13.2-125.9zM355.7 531.6c-18.8 0-36.9-6.6-51.1-18.5.6-.4 1.8-1 2.6-1.4l84.9-49c4.4-2.5 7-7 7-12.1V331l35.9 20.7c.5.3.7.7.7 1v99.1c-.1 44-35.9 79.8-80 79.8zm-171.5-73.3c-9.4-16.3-12.8-35.3-9.5-53.5.6.4 1.7 1 2.5 1.5l84.9 49c4.4 2.5 9.6 2.5 13.9 0l103.6-59.8V437c0 .6-.3 1-.5 1.1l-85.8 49.5c-38.2 22-87.1 8.9-109.1-29.3zm-22.4-185.2c9.4-16.3 24.2-28.7 41.6-35V339c0 5 2.6 9.5 7 12.1L314 410.9l-36 20.7c-.5.3-1 .2-1.2.1L191 382.2c-38.1-22-51.2-70.9-29.2-109.1zm294.7 68.6l-103.6-59.8 35.9-20.7c.5-.3 1-.3 1.2-.1l85.8 49.5c38.1 22 51.2 71 29.2 109.1-9.4 16.3-24.2 28.7-41.6 35V353.8c.1-5.1-2.6-9.6-6.9-12.1zm35.7-53.7c-.6-.4-1.7-1-2.5-1.5l-84.9-49c-4.4-2.5-9.6-2.5-13.9 0l-103.6 59.8v-41.4c0-.6.3-1 .5-1.1l85.8-49.5c12.5-7.2 26.3-10.7 39.8-10.7 27.6 0 54.5 14.3 69.3 39.9 9.3 16.2 12.7 35.2 9.5 53.5zm-224.4 73.8l-35.9-20.7c-.5-.3-.7-.7-.7-1V241c0-21.3 8.3-41.3 23.4-56.4 15.1-15.1 35.1-23.4 56.4-23.4 18.8 0 36.9 6.6 51.1 18.5-.6.4-1.8 1-2.6 1.4l-84.9 49c-4.4 2.5-7 7-7 12.1l.2 119.6zm19.5-42l46.1-26.6 46.1 26.6V373l-46.1 26.6-46.1-26.6v-53.2z" />
      </svg>
    ),
    name: '',
  },
  {
    logo: (
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 2000 700"
        xmlSpace="preserve"
      >
        <path d="M1358.4 299.3c-25.5 0-43.7 8.7-52.6 25.2l-4.8 8.9v-29.8h-41.5v181.3h43.7V377.1c0-25.8 14-40.6 38.4-40.6 23.3 0 36.6 14.4 36.6 39.5v109h43.7V368.1c-.1-43.1-23.8-68.8-63.5-68.8zm-211.7 0c-51.5 0-83.5 32.1-83.5 83.9v25.5c0 49.7 32.3 80.6 84.2 80.6 34.7 0 59.1-12.7 74.4-38.9l-27.1-15.6c-11.3 15.1-29.4 24.5-47.3 24.5-26.3 0-42-16.2-42-43.4v-7.2h121.9v-30.1c0-48.2-31.6-79.3-80.6-79.3zm40.9 80h-82.2V375c0-29.9 14.7-46.3 41.3-46.3 25.6 0 40.9 16.2 40.9 43.4v7.2zm667.6-105.6V239h-150.9v34.7h52.9v176.5h-52.9v34.7h150.9v-34.7h-52.9V273.7h52.9zM710.6 234c-67.4 0-109.3 42-109.3 109.7v36.6c0 67.7 41.9 109.7 109.3 109.7s109.3-42 109.3-109.7v-36.6c0-67.6-41.9-109.7-109.3-109.7zm64.2 148.8c0 44.9-23.4 70.7-64.2 70.7s-64.2-25.8-64.2-70.7v-41.6c0-44.9 23.4-70.7 64.2-70.7s64.2 25.8 64.2 70.7v41.6zM957 299.3c-22.9 0-42.7 9.5-53.1 25.4l-4.7 7.2v-28.3h-41.5v243.7h43.7V459l4.7 6.9c9.8 14.6 29 23.3 51.3 23.3 37.6 0 75.6-24.6 75.6-79.6v-30.8c0-39.5-23.5-79.5-76-79.5zm32.3 108.2c0 29.2-17.1 47.4-44.5 47.4-25.6 0-43.4-19.2-43.4-46.7V381c0-27.9 18-47.4 43.8-47.4 27.2 0 44.2 18.2 44.2 47.4v26.5zm553.1-168.4L1454.2 485h44.3l16.9-52.7h101.3l.2.5 16.7 52.2h44.3l-88.2-245.9h-47.3zm-16 158.4l39.7-124.3 39.3 124.3h-79zM515.9 307.7c9.6-29.4 6.4-60.3-9.1-87.2-23.4-40.6-69.8-61.2-115.6-51.5-20.6-23-49-35.7-80.1-35.7-46.9 0-87.9 29.9-102.4 74.4-30.3 6.4-55.4 24.6-70.9 51.5-23.4 40.6-18.1 91.1 13.2 125.9-9.6 29.4-6.4 60.3 9.1 87.2 23.4 40.6 69.8 61.2 115.6 51.5 20.6 23 49 35.7 80.1 35.7 46.9 0 87.9-29.9 102.4-74.4 30.3-6.4 55.4-24.6 70.9-51.5 23.4-40.6 18.1-91.1-13.2-125.9zM355.7 531.6c-18.8 0-36.9-6.6-51.1-18.5.6-.4 1.8-1 2.6-1.4l84.9-49c4.4-2.5 7-7 7-12.1V331l35.9 20.7c.5.3.7.7.7 1v99.1c-.1 44-35.9 79.8-80 79.8zm-171.5-73.3c-9.4-16.3-12.8-35.3-9.5-53.5.6.4 1.7 1 2.5 1.5l84.9 49c4.4 2.5 9.6 2.5 13.9 0l103.6-59.8V437c0 .6-.3 1-.5 1.1l-85.8 49.5c-38.2 22-87.1 8.9-109.1-29.3zm-22.4-185.2c9.4-16.3 24.2-28.7 41.6-35V339c0 5 2.6 9.5 7 12.1L314 410.9l-36 20.7c-.5.3-1 .2-1.2.1L191 382.2c-38.1-22-51.2-70.9-29.2-109.1zm294.7 68.6l-103.6-59.8 35.9-20.7c.5-.3 1-.3 1.2-.1l85.8 49.5c38.1 22 51.2 71 29.2 109.1-9.4 16.3-24.2 28.7-41.6 35V353.8c.1-5.1-2.6-9.6-6.9-12.1zm35.7-53.7c-.6-.4-1.7-1-2.5-1.5l-84.9-49c-4.4-2.5-9.6-2.5-13.9 0l-103.6 59.8v-41.4c0-.6.3-1 .5-1.1l85.8-49.5c12.5-7.2 26.3-10.7 39.8-10.7 27.6 0 54.5 14.3 69.3 39.9 9.3 16.2 12.7 35.2 9.5 53.5zm-224.4 73.8l-35.9-20.7c-.5-.3-.7-.7-.7-1V241c0-21.3 8.3-41.3 23.4-56.4 15.1-15.1 35.1-23.4 56.4-23.4 18.8 0 36.9 6.6 51.1 18.5-.6.4-1.8 1-2.6 1.4l-84.9 49c-4.4 2.5-7 7-7 12.1l.2 119.6zm19.5-42l46.1-26.6 46.1 26.6V373l-46.1 26.6-46.1-26.6v-53.2z" />
      </svg>
    ),
    name: '',
  },
  {
    logo: (
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 2000 700"
        xmlSpace="preserve"
      >
        <path d="M1358.4 299.3c-25.5 0-43.7 8.7-52.6 25.2l-4.8 8.9v-29.8h-41.5v181.3h43.7V377.1c0-25.8 14-40.6 38.4-40.6 23.3 0 36.6 14.4 36.6 39.5v109h43.7V368.1c-.1-43.1-23.8-68.8-63.5-68.8zm-211.7 0c-51.5 0-83.5 32.1-83.5 83.9v25.5c0 49.7 32.3 80.6 84.2 80.6 34.7 0 59.1-12.7 74.4-38.9l-27.1-15.6c-11.3 15.1-29.4 24.5-47.3 24.5-26.3 0-42-16.2-42-43.4v-7.2h121.9v-30.1c0-48.2-31.6-79.3-80.6-79.3zm40.9 80h-82.2V375c0-29.9 14.7-46.3 41.3-46.3 25.6 0 40.9 16.2 40.9 43.4v7.2zm667.6-105.6V239h-150.9v34.7h52.9v176.5h-52.9v34.7h150.9v-34.7h-52.9V273.7h52.9zM710.6 234c-67.4 0-109.3 42-109.3 109.7v36.6c0 67.7 41.9 109.7 109.3 109.7s109.3-42 109.3-109.7v-36.6c0-67.6-41.9-109.7-109.3-109.7zm64.2 148.8c0 44.9-23.4 70.7-64.2 70.7s-64.2-25.8-64.2-70.7v-41.6c0-44.9 23.4-70.7 64.2-70.7s64.2 25.8 64.2 70.7v41.6zM957 299.3c-22.9 0-42.7 9.5-53.1 25.4l-4.7 7.2v-28.3h-41.5v243.7h43.7V459l4.7 6.9c9.8 14.6 29 23.3 51.3 23.3 37.6 0 75.6-24.6 75.6-79.6v-30.8c0-39.5-23.5-79.5-76-79.5zm32.3 108.2c0 29.2-17.1 47.4-44.5 47.4-25.6 0-43.4-19.2-43.4-46.7V381c0-27.9 18-47.4 43.8-47.4 27.2 0 44.2 18.2 44.2 47.4v26.5zm553.1-168.4L1454.2 485h44.3l16.9-52.7h101.3l.2.5 16.7 52.2h44.3l-88.2-245.9h-47.3zm-16 158.4l39.7-124.3 39.3 124.3h-79zM515.9 307.7c9.6-29.4 6.4-60.3-9.1-87.2-23.4-40.6-69.8-61.2-115.6-51.5-20.6-23-49-35.7-80.1-35.7-46.9 0-87.9 29.9-102.4 74.4-30.3 6.4-55.4 24.6-70.9 51.5-23.4 40.6-18.1 91.1 13.2 125.9-9.6 29.4-6.4 60.3 9.1 87.2 23.4 40.6 69.8 61.2 115.6 51.5 20.6 23 49 35.7 80.1 35.7 46.9 0 87.9-29.9 102.4-74.4 30.3-6.4 55.4-24.6 70.9-51.5 23.4-40.6 18.1-91.1-13.2-125.9zM355.7 531.6c-18.8 0-36.9-6.6-51.1-18.5.6-.4 1.8-1 2.6-1.4l84.9-49c4.4-2.5 7-7 7-12.1V331l35.9 20.7c.5.3.7.7.7 1v99.1c-.1 44-35.9 79.8-80 79.8zm-171.5-73.3c-9.4-16.3-12.8-35.3-9.5-53.5.6.4 1.7 1 2.5 1.5l84.9 49c4.4 2.5 9.6 2.5 13.9 0l103.6-59.8V437c0 .6-.3 1-.5 1.1l-85.8 49.5c-38.2 22-87.1 8.9-109.1-29.3zm-22.4-185.2c9.4-16.3 24.2-28.7 41.6-35V339c0 5 2.6 9.5 7 12.1L314 410.9l-36 20.7c-.5.3-1 .2-1.2.1L191 382.2c-38.1-22-51.2-70.9-29.2-109.1zm294.7 68.6l-103.6-59.8 35.9-20.7c.5-.3 1-.3 1.2-.1l85.8 49.5c38.1 22 51.2 71 29.2 109.1-9.4 16.3-24.2 28.7-41.6 35V353.8c.1-5.1-2.6-9.6-6.9-12.1zm35.7-53.7c-.6-.4-1.7-1-2.5-1.5l-84.9-49c-4.4-2.5-9.6-2.5-13.9 0l-103.6 59.8v-41.4c0-.6.3-1 .5-1.1l85.8-49.5c12.5-7.2 26.3-10.7 39.8-10.7 27.6 0 54.5 14.3 69.3 39.9 9.3 16.2 12.7 35.2 9.5 53.5zm-224.4 73.8l-35.9-20.7c-.5-.3-.7-.7-.7-1V241c0-21.3 8.3-41.3 23.4-56.4 15.1-15.1 35.1-23.4 56.4-23.4 18.8 0 36.9 6.6 51.1 18.5-.6.4-1.8 1-2.6 1.4l-84.9 49c-4.4 2.5-7 7-7 12.1l.2 119.6zm19.5-42l46.1-26.6 46.1 26.6V373l-46.1 26.6-46.1-26.6v-53.2z" />
      </svg>
    ),
    name: '',
  },
  {
    logo: (
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 2000 700"
        xmlSpace="preserve"
      >
        <path d="M1358.4 299.3c-25.5 0-43.7 8.7-52.6 25.2l-4.8 8.9v-29.8h-41.5v181.3h43.7V377.1c0-25.8 14-40.6 38.4-40.6 23.3 0 36.6 14.4 36.6 39.5v109h43.7V368.1c-.1-43.1-23.8-68.8-63.5-68.8zm-211.7 0c-51.5 0-83.5 32.1-83.5 83.9v25.5c0 49.7 32.3 80.6 84.2 80.6 34.7 0 59.1-12.7 74.4-38.9l-27.1-15.6c-11.3 15.1-29.4 24.5-47.3 24.5-26.3 0-42-16.2-42-43.4v-7.2h121.9v-30.1c0-48.2-31.6-79.3-80.6-79.3zm40.9 80h-82.2V375c0-29.9 14.7-46.3 41.3-46.3 25.6 0 40.9 16.2 40.9 43.4v7.2zm667.6-105.6V239h-150.9v34.7h52.9v176.5h-52.9v34.7h150.9v-34.7h-52.9V273.7h52.9zM710.6 234c-67.4 0-109.3 42-109.3 109.7v36.6c0 67.7 41.9 109.7 109.3 109.7s109.3-42 109.3-109.7v-36.6c0-67.6-41.9-109.7-109.3-109.7zm64.2 148.8c0 44.9-23.4 70.7-64.2 70.7s-64.2-25.8-64.2-70.7v-41.6c0-44.9 23.4-70.7 64.2-70.7s64.2 25.8 64.2 70.7v41.6zM957 299.3c-22.9 0-42.7 9.5-53.1 25.4l-4.7 7.2v-28.3h-41.5v243.7h43.7V459l4.7 6.9c9.8 14.6 29 23.3 51.3 23.3 37.6 0 75.6-24.6 75.6-79.6v-30.8c0-39.5-23.5-79.5-76-79.5zm32.3 108.2c0 29.2-17.1 47.4-44.5 47.4-25.6 0-43.4-19.2-43.4-46.7V381c0-27.9 18-47.4 43.8-47.4 27.2 0 44.2 18.2 44.2 47.4v26.5zm553.1-168.4L1454.2 485h44.3l16.9-52.7h101.3l.2.5 16.7 52.2h44.3l-88.2-245.9h-47.3zm-16 158.4l39.7-124.3 39.3 124.3h-79zM515.9 307.7c9.6-29.4 6.4-60.3-9.1-87.2-23.4-40.6-69.8-61.2-115.6-51.5-20.6-23-49-35.7-80.1-35.7-46.9 0-87.9 29.9-102.4 74.4-30.3 6.4-55.4 24.6-70.9 51.5-23.4 40.6-18.1 91.1 13.2 125.9-9.6 29.4-6.4 60.3 9.1 87.2 23.4 40.6 69.8 61.2 115.6 51.5 20.6 23 49 35.7 80.1 35.7 46.9 0 87.9-29.9 102.4-74.4 30.3-6.4 55.4-24.6 70.9-51.5 23.4-40.6 18.1-91.1-13.2-125.9zM355.7 531.6c-18.8 0-36.9-6.6-51.1-18.5.6-.4 1.8-1 2.6-1.4l84.9-49c4.4-2.5 7-7 7-12.1V331l35.9 20.7c.5.3.7.7.7 1v99.1c-.1 44-35.9 79.8-80 79.8zm-171.5-73.3c-9.4-16.3-12.8-35.3-9.5-53.5.6.4 1.7 1 2.5 1.5l84.9 49c4.4 2.5 9.6 2.5 13.9 0l103.6-59.8V437c0 .6-.3 1-.5 1.1l-85.8 49.5c-38.2 22-87.1 8.9-109.1-29.3zm-22.4-185.2c9.4-16.3 24.2-28.7 41.6-35V339c0 5 2.6 9.5 7 12.1L314 410.9l-36 20.7c-.5.3-1 .2-1.2.1L191 382.2c-38.1-22-51.2-70.9-29.2-109.1zm294.7 68.6l-103.6-59.8 35.9-20.7c.5-.3 1-.3 1.2-.1l85.8 49.5c38.1 22 51.2 71 29.2 109.1-9.4 16.3-24.2 28.7-41.6 35V353.8c.1-5.1-2.6-9.6-6.9-12.1zm35.7-53.7c-.6-.4-1.7-1-2.5-1.5l-84.9-49c-4.4-2.5-9.6-2.5-13.9 0l-103.6 59.8v-41.4c0-.6.3-1 .5-1.1l85.8-49.5c12.5-7.2 26.3-10.7 39.8-10.7 27.6 0 54.5 14.3 69.3 39.9 9.3 16.2 12.7 35.2 9.5 53.5zm-224.4 73.8l-35.9-20.7c-.5-.3-.7-.7-.7-1V241c0-21.3 8.3-41.3 23.4-56.4 15.1-15.1 35.1-23.4 56.4-23.4 18.8 0 36.9 6.6 51.1 18.5-.6.4-1.8 1-2.6 1.4l-84.9 49c-4.4 2.5-7 7-7 12.1l.2 119.6zm19.5-42l46.1-26.6 46.1 26.6V373l-46.1 26.6-46.1-26.6v-53.2z" />
      </svg>
    ),
    name: '',
  },
];

export const SocialProofLogos = () => (
  <Box as="section" padding={`${gutters.medium} 0 0`}>
    <Container>
      <StyledLogosContainer>
        {orgs.map((org: Org) => org.logo)}
      </StyledLogosContainer>
    </Container>
  </Box>
);
