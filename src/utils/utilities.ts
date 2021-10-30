// todo: change the name of file and func. i couldn't get the better
export const formatEmail = (email: string) => {
  if (email) {
    return `<${email}>`;
  }
  return '';
};
