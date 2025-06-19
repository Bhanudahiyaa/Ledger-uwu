import React, { useState } from "react";
import "./style.css";
import Input from "../Input";
import Button from "../Button";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { connectFunctionsEmulator } from "firebase/functions";
import { toast } from "react-toastify";

function SignupSigninComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const [loading, setLoading] = useState(false);

  function signupWithEmail(e) {
    e.preventDefault();
    setLoading(true);
    console.log("Name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("confirmpassword", confirmPassword);

    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user;
            // Handle success
            console.log("user>>>", user);
            toast.success("User Created!");
            setLoading(false);
            setConfirmPassword("");
            setName("");
            setEmail("");
            setPassword("");
            createDoc(user);
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle error
            toast.error(errorMessage);
            setLoading(false);
          });
      } else {
        toast.error("Password and Confirm Password dont match!");
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory!");
      setLoading(false);
    }
  }

  function createDoc() {}

  return (
    <>
      {loginForm ? (
        <></>
      ) : (
        <div className="signup-wrapper">
          <h2 className="title">
            Sign Up on <span style={{ color: "var(--theme)" }}>Ledger IQ.</span>
          </h2>
          <form>
            <Input
              label={"Full Name"}
              state={name}
              setState={setName}
              placeholder={"type.."}
            />
            <Input
              type="email"
              label={"Email"}
              state={email}
              setState={setEmail}
              placeholder={"xyz@gmail.com"}
            />
            <Input
              type="password"
              label={"Password"}
              state={password}
              setState={setPassword}
              placeholder={"Example@123"}
            />
            <Input
              type="password"
              label={"Confirm Password"}
              state={confirmPassword}
              setState={setConfirmPassword}
              placeholder={"Example@123"}
            />
            <Button
              disabled={loading}
              text={loading ? "Loading..." : "SignUp Using Email and password"}
              onClick={e => signupWithEmail(e)}
            />
            <p style={{ textAlign: "center", margin: 0 }}>or</p>
            <Button
              text={loading ? "Loading..." : "SignUp Using Google"}
              blue={true}
            />
          </form>
        </div>
      )}
    </>
  );
}

export default SignupSigninComponent;
