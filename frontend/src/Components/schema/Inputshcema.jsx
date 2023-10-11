import * as yup from "yup";
const passcheck =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
export const Inputshcema = yup.object().shape({
  name: yup.string().required("Name required"),
  email: yup.string().email("invalid email").required("Email required"),
  password: yup
    .string().matches(passcheck,{message:"Please insert a strong password"})
    .required("password required"),
  confirmPassword:yup.string().oneOf([yup.ref("password"),null], "password didn't match").required("required"),
  telephone: yup.string().required("Phone required")
});
