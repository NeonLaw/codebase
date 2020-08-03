import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { Button } from '../../components/button';
import React from 'react';

export const ReCaptchaButton = ({ onVerifyCaptcha, children, ...props }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const onMouseOver = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha('contact');

    onVerifyCaptcha(token);
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RE_CAPTCHA_KEY}>
      <Button onMouseOver={onMouseOver} {...props}>
        {children}
      </Button>
    </GoogleReCaptchaProvider>
  );
};
