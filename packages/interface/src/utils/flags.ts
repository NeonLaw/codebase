interface FlagsInterface {
  ACCESSIBLE_BUTTONS: boolean;
}

export const defaultFlags: FlagsInterface = {
  ACCESSIBLE_BUTTONS: true,
};

export const flags = (userFlagsString: string): FlagsInterface => {
  const userFlags = {};

  userFlagsString.split(',').forEach((flag) => {
    if (flag[0] === '-') {
      userFlags[flag.substr(1)] = false;
    } else {
      userFlags[flag] = true;
    }
  });

  return {...defaultFlags, ...userFlags};
};
