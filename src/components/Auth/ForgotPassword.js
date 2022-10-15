import React from "react";
import FirebaseContext from "./../../firebase/content";

function ForgotPassword() {
  const { firebase } = React.useContext(FirebaseContext);
  const [resetPassword, setResetPassword] = React.useState("");
  const [isPasswordReset, setIsPasswordReset] = React.useState(false);
  const [passwordResetError, setPasswordResetError] = React.useState(null);
  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPassword);
      setIsPasswordReset(true);
      setPasswordResetError(null);
    } catch (error) {
      console.log("errorr sending email", error);
      setPasswordResetError(error.message);
      setIsPasswordReset(false);
    }
  }
  return (
    <div>
      <input
        type="email"
        placeholder="Provide your account email"
        className="input"
        onChange={(event) => setResetPassword(event.target.value)}
      />
      <div>
        <button className="button" onClick={handleResetPassword}>
          Reset password
        </button>
      </div>
      {isPasswordReset && <p>Check your email to reset password</p>}
      {passwordResetError && <p className="error-text">{passwordResetError}</p>}
    </div>
  );
}

export default ForgotPassword;
