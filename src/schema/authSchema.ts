import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  //   type: yup.string().required("Type is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  refCode: yup.string(),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .string()
    .min(10, "Phone number length cannot be less than 11 digits")
    .required("Number is required"),
  howDidYouHearAboutUs: yup.string(),
  referredBy: yup.string(),
  country: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .default(undefined)
    .when("$activeTab", ([activeTab], schema) => {
      console.log("activeTab :>> ", activeTab);
      return activeTab === "corporate"
        ? schema.required("Country is required")
        : schema;
    }),
  business_name: yup.string().when("$activeTab", ([activeTab], schema) => {
    return activeTab === "corporate"
      ? schema.required("Business name is required")
      : schema.notRequired();
  }),
  business_location: yup.string().when("$activeTab", ([activeTab], schema) => {
    return activeTab === "corporate"
      ? schema.required("Business location is required")
      : schema.notRequired();
  }),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
export const createPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password length should be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/,
      "Password should contain atleast one uppercase, one lowercase,one digit and one special character",
    ),
  confirm_password: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Password do not match."),
});
