import SubmitButton from "./SubmitButton";

function InputContainer({ children, submitTo }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form action={submitTo} method="POST" onSubmit={handleSubmit}>
      {children}
      <SubmitButton>Login</SubmitButton>
    </form>
  );
}

export default InputContainer;
