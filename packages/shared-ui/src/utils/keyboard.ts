const submit = (e: any, ref: any) => {
  const form = ref.current;
  e.preventDefault();
  if (null !== form) {
    form.dispatchEvent(new Event('submit', { cancelable: true }));
  }
};

export const submitOnShiftEnter = (e: any, ref: any) => {
  if (isShiftEnterPressed(e)) {
    submit(e, ref);
  }
};

export const submitOnMetaEnter = (e: any, ref: any) => {
  if (isCommandEnterPressed(e)) {
    submit(e, ref);
  }
};

export const isShiftEnterPressed = (e) => e.shiftKey && e.key == 'Enter';

export const isCommandEnterPressed = (e) => e.metaKey && e.key == 'Enter';
