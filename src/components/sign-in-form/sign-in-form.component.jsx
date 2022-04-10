import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const formFieldsDefault = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { setcurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    setformFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const resetFormFields = () => {
    setformFields(formFieldsDefault);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formFields;

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setcurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const [formFields, setformFields] = useState(formFieldsDefault);

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={formFields.email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={formFields.password}
          name="password"
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            style={{ padding: "0 12px" }}
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
