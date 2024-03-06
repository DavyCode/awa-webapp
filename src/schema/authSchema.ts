import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password length should be at least 4 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/,
      "Password should contain atleast one uppercase, one lowercase,one digit and one special character",
    ),

  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .string()
    .min(10, "Phone number length cannot be less than 11 digits")
    .required("Number is required"),
  howDidYouHearAboutUs: yup.string(),
  referredBy: yup.string(),

  //         .when("$activeTab", (cond, schema) => {
  //     return cond==='individual'?
  // }),
});
