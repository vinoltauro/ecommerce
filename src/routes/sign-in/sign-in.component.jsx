import "./sign-in.styles.scss"
import SignUpForm from "../../components/sign-up-form/sign-up-form.componenet";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {
 
  

  return (

      <div className="authentication-container">

      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>

      </div>
      

 
  );
};

export default SignIn;
