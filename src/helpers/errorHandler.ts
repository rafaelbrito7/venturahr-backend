export const ErrorHandler = (message: string, statusCode?: number) => {
  return {
    message,
    statusCode: statusCode ?? 500,
  };
};
