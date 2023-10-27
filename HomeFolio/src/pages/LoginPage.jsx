import { useState } from "react";
import InputContainer from "../components/InputContainer";
import InputContainerField from "../components/InputContainerField";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsernameInput(val) {
    setUsername(val);
  }
  function handlePasswordInput(val) {
    setPassword(val);
  }
  return (
    <InputContainer submitTo="http://localhost:3000">
      <InputContainerField
        id="username"
        labelName="Username"
        htmlName="username"
        type="text"
        state={username}
        handleInput={handleUsernameInput}
      />
      <InputContainerField
        id="password"
        labelName="Password"
        htmlName="password"
        type="password"
        state={password}
        handleInput={handlePasswordInput}
      />
    </InputContainer>
  );
}

export default LoginPage;
