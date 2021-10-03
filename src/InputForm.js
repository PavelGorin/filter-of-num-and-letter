import { useState } from 'react';

function InputForm({ addResult }) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addResult(userInput);
    setUserInput("")
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение"
      />
      <button>Ввести</button>

    </form>
  )
}

export default InputForm;