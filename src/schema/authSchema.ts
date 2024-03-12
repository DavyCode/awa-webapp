import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  //   type: yup.string().required("Type is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneCountryCode: yup.string().required("Country code is required"),
  howDidYouHearAboutUs: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable()
    .required("Field is required"),
  phoneNumber: yup
    .string()
    .matches(/^[+0-9]+$/gi, "Phone number is invalid")
    .min(11, "Phone number length cannot be less than 11 digits")
    .required("Number is required"),
  referredBy: yup.string(),
  country: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable()
    .default(null)
    .required("Country is required"),
  businessName: yup.string().when("$activeTab", ([activeTab], schema) => {
    return activeTab === "corporate"
      ? schema.required("Business name is required")
      : schema.notRequired();
  }),
  businessLocation: yup.string().when("$activeTab", ([activeTab], schema) => {
    return activeTab === "corporate"
      ? schema.required("Business location is required")
      : schema.notRequired();
  }),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const resetPasswordSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
});

export const createPasswordSchema = yup.object().shape({
  password: yup
    .string()
    // .min(8, "Password length should be at least 8 characters")
    .test("lowercase", "Atleast one lowercase character", (val, ctx) => {
      return /[a-z]/.test(val as string);
    })
    .test("uppercase", "Atleast one uppercase character", (val, ctx) => {
      return /[A-Z]/.test(val as string);
    })
    .test("hasNumber", "Atleast one number", (val, ctx) => {
      const hasNumber = /[0-9]/.test(val as string);
      return hasNumber;
    })
    .test("hasSymbol", "Atleast one symbol", (val, ctx) => {
      const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        val as string,
      );
      return hasSymbol;
    })
    .test("length", "Atleast one lowercase character", (val, ctx) => {
      return val ? val.trim().length >= 8 : false;
    })
    .test("itMatches", "Passwords do not match", (val, ctx) => {
      return ctx.parent.confirm_password === val;
    })
    .required("Password is required"),
  confirm_password: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Password do not match."),
});

export const setNewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .test("lowercase", "Atleast one lowercase character", (val, ctx) => {
      console.log("val :>> ", val);
      return /[a-z]/.test(val as string);
    })
    .test("uppercase", "Atleast one uppercase character", (val, ctx) => {
      return /[A-Z]/.test(val as string);
    })
    .test("hasNumber", "Atleast one number", (val, ctx) => {
      const hasNumber = /[0-9]/.test(val as string);
      return hasNumber;
    })
    .test("hasSymbol", "Atleast one symbol", (val, ctx) => {
      const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        val as string,
      );
      return hasSymbol;
    })
    .test("length", "Atleast one lowercase character", (val, ctx) => {
      return val ? val.trim().length >= 8 : false;
    })
    .test("itMatches", "Passwords do not match", (val, ctx) => {
      return ctx.parent.confirm_password === val;
    })
    .required("Password is required"),
  confirm_password: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Password do not match."),
  otp: yup.string().required("OTP is required"),
});
