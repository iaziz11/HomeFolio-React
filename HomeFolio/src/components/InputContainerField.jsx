function InputContainerField({
  id,
  labelName,
  htmlName,
  state,
  handleInput,
  type,
}) {
  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
      <input
        id={id}
        name={htmlName}
        value={state}
        type={type}
        onChange={(e) => handleInput(e.target.value)}
      ></input>
    </div>
  );
}

export default InputContainerField;
