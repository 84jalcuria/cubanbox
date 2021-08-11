interface serverErrorMessage {
  message: string;
  fontsize: string;
}

const ErrorMessage = ({ message, fontsize }: serverErrorMessage) => {
  return (
    <h1 className={`text-red-600 ${fontsize} font-semibold mt-1 ml-1 pb-2`}>
      {message}
    </h1>
  );
};

export default ErrorMessage;
