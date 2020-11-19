import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import React, { useEffect, useMemo, } from 'react';
import { Box } from '@chakra-ui/core';
import Transloadit from '@uppy/transloadit';
import Uppy from '@uppy/core';
import { DragDrop as UppyDragAndDrop } from '@uppy/react';
import { useGetTransloaditTokenMutation } from '../../utils/api';

interface DragAndDropProps {
  fileType: 'images' | 'pdfs';
  url?: string;
  updateUrl(url: any): any;
}

export const DragAndDrop = (props: DragAndDropProps) => {
  const { fileType, url, updateUrl } = props;

  const [getTransloaditToken] = useGetTransloaditTokenMutation();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTransloaditToken(
        { variables: { template: fileType }}
      );
      if (data) {
        localStorage.setItem(
          'transloaditToken',
          data.getTransloaditToken?.signature as string
        );
      }
    };

    fetchData();
  }, [getTransloaditToken, fileType]);
  const utcDateString = (ms) => {
    return new Date(ms)
      .toISOString()
      .replace(/-/g, '/')
      .replace(/T/, ' ')
      .replace(/\.\d+Z$/, '+00:00');
  };

  const uppy = useMemo(() => {
    const signature = localStorage.getItem('transloaditToken');
    const transloaditKey = process.env.TRANSLOADIT_KEY as string;
    const expires = utcDateString((+new Date()) + 1 * 60 * 60 * 1000);
    const transloaditParams = JSON.stringify({
      auth: {
        expires,
        key: transloaditKey
      }
    });

    // alert(transloaditParams)
    // alert(signature)

    return Uppy({
      autoProceed: true,
      meta: { type: fileType },
      restrictions: { maxNumberOfFiles: 1 },
    }).
      use(Transloadit, { params: transloaditParams, signature }).
      on('complete', (result) => {
        const url = result.successful[0].uploadURL;
        console.log(JSON.stringify(result));
        updateUrl(url);
      });

  /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(
    () => { return () => uppy.close(); },
    /* eslint-disable react-hooks/exhaustive-deps */
    []
    /* eslint-enable react-hooks/exhaustive-deps */
  );

  return (
    <>
      <Box display="none">{url}</Box>
      <UppyDragAndDrop
        width="100%"
        uppy={uppy}
      />
    </>
  );
};
