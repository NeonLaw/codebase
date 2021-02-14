import { useIntl } from 'react-intl'

export default () => {
  const intl = useIntl();

  console.log(intl.formatMessage({ id: 'we_can_help_with.title' }))

  return (
    <>
      <h1>Test</h1>
    </>
  );
};