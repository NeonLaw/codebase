export const submitOnShiftEnter = (e: any, ref: any) => {
  if (isShiftEnterPressed(e)) {
    const form = ref.current;
    e.preventDefault();
    if (null !== form) {
      form.dispatchEvent(new Event('submit', { cancelable: true }));
    }
  }
};

export const isShiftEnterPressed = (e) => e.shiftKey && e.key == 'Enter';
