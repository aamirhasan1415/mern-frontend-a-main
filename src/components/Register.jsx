export default function Register() {
  return (
    <>
      <form action="#">
        <fieldset>
          <legend>Register Form</legend>

          <p>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </p>

          <p>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </p>

          <p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </p>

          <p>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </p>

          <p>
            <button type="submit">Register</button>
          </p>
        </fieldset>
      </form>
    </>
  );
}
