import { Kbd } from '@chakra-ui/react';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

export const SubmitForm = () => {
  const OS = useOperatingSystem();

  if (OS === 'Mac OS') {
    return (
      <>
        <Kbd border="1px solid #bbb" color="black">
          Meta
        </Kbd>
        &nbsp;+ &nbsp;
        <Kbd border="1px solid #bbb" color="black">
          Enter
        </Kbd>
      </>
    );
  }

  return (
    <>
      <Kbd border="1px solid #bbb" color="black">
        Shift
      </Kbd>
      &nbsp;+ &nbsp;
      <Kbd border="1px solid #bbb" color="black">
        Enter
      </Kbd>
    </>
  );
};
