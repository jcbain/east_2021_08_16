import useInput from '../hooks/useInput';

const Inputs = () => {

  const usernameInput = useInput();
  const emailInput = useInput();
  const passwordInput = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`username is ${usernameInput.value}, email is ${emailInput.value}, password is ${passwordInput.value}`)
    usernameInput.clearValue();
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br />

        <label>email</label>
        <input
          value={emailInput.value}
          onChange={emailInput.onChange} 
        />
        <br />

        <label>password</label>
        <input 
          value={passwordInput.value}
          onChange={passwordInput.onChange}
        />
        <br />

      <button type="submit">Register User</button>

      </form>
    </div>
  )

}

export default Inputs;