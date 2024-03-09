import { request } from "@/lib/axios-utils";
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

type LoginProps = { email: string; password: string };
type IndividualSignupForm = {
  email: string;
  password: string;
  phoneNumber: string;
  phoneCountryCode: string;
  firstName: string;
  lastName: string;
  howDidYouHearAboutUs: string;
  referredBy?: string;
};
type VerifyEmailProps = { otp: string; email: string };
const loginUser = async (obj: LoginProps) => {
  const response = await request({
    url: "fane-admin-secure/auth",
    method: "POST",
    data: obj,
  });

  return response;
};

// const forgotPassword = async ({ queryKey }: QueryFunctionContext) => {
//   const [, email] = queryKey;
//   const response = request({
//     // url: `users/password/reset/${email}`,
//     url: `fane-admin-secure/admins/password/reset/${email}`,
//     method: "GET",
//   });

//   return response;
// };

// const resetPassword = async (obj: { otp: string; password: string }) => {
//   const response = request({
//     // url: `users/password/reset`,
//     url: `fane-admin-secure/admins/password/reset`,
//     method: "POST",
//     data: obj,
//   });

//   return response;
// };
// const changePassword = async (obj: {
//   oldPassword: string;
//   newPassword: string;
// }) => {
//   const response = request({
//     url: `fane-admin-secure/admins/password/change`,
//     method: "POST",
//     data: obj,
//   });

//   return response;
// };

const createIndividual = async (obj: IndividualSignupForm) => {
  const response = await request({
    url: "/users",
    method: "POST",
    data: obj,
  });

  return response;
};
const verifyEmail = async (obj: VerifyEmailProps) => {
  const response = await request({
    url: "auth/verify/email",
    method: "POST",
    data: obj,
  });

  return response;
};

// export const useForgotPassword = (
//   email: string,
//   errorCb: (msg: string) => void,
//   cb?: (msg: string) => void,
// ) => {
//   return useQuery({
//     queryKey: ["forgot-password", email],
//     queryFn: forgotPassword,
//     retry: 0,
//     // enabled: false,
//     enabled: false,
//     onError(err: AxiosError) {
//       const message =
//         (err.response?.data as { errors: string[] })?.errors?.join(", ") ||
//         (err.response?.data as { message: string })?.message;
//       errorCb(message || err.message);
//     },
//     onSuccess(data) {
//       cb?.(data?.data?.message || "");
//     },
//     // refetchInterval: false,
//     // refetchOnMount: false,
//     // refetchOnReconnect: false,
//     // refetchIntervalInBackground: false,
//     // refetchOnWindowFocus: false,
//   });
// };

// export const useResetPassword = (
//   errorCb: (err: string) => void,
//   cb: (arg: string, data: { [key: string]: any }) => void,
// ) => {
//   return useMutation({
//     mutationFn: resetPassword,
//     mutationKey: ["reset-password"],
//     onSuccess(response: AxiosResponse) {
//       const data = response.data;
//       const message = data?.message;

//       cb(message, data);
//     },
//     onError(error: AxiosError) {
//       const message =
//         (error.response?.data as { errors: string[] })?.errors?.join(", ") ||
//         (error.response?.data as { message: string })?.message;
//       // errorCb(message || error.message);
//       errorCb(message || error.message);
//     },
//   });
// };

// export const useChangePassword = (
//   errorCb: (err: string) => void,
//   cb: (arg: string, data: { [key: string]: any }) => void,
// ) => {
//   return useMutation({
//     mutationFn: changePassword,
//     mutationKey: ["change-password"],
//     onSuccess(response: AxiosResponse) {
//       const data = response.data;
//       const message = data?.message;

//       cb(message, data);
//     },
//     onError(error: AxiosError) {
//       const message =
//         (error.response?.data as { errors: string[] })?.errors?.join(", ") ||
//         (error.response?.data as { message: string })?.message;
//       // errorCb(message || error.message);
//       errorCb(message || error.message);
//     },
//   });
// };

export const useLogin = (
  errorCb: (err: string, email: string, isNotVerified?: boolean) => void,
  cb: (data: { [key: string]: any }) => void,
  email: string,
) => {
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ["login"],
    onSuccess(response: AxiosResponse) {
      const data = response.data?.data;
      cb(data);
    },
    onError(error: AxiosError) {
      const statusCode = (error.response?.data as any)?.statusCode as number;
      const message =
        (error.response?.data as { errors: string[] })?.errors?.join(", ") ||
        (error.response?.data as { message: string })?.message;
      errorCb(message || error.message, email, statusCode === 406);
    },
  });
};
export const useCreateIndividual = (
  errorCb: (err: string) => void,
  cb: (data: { [key: string]: any }) => void,
) => {
  return useMutation({
    mutationFn: createIndividual,
    mutationKey: ["create-individual"],
    onSuccess(response: AxiosResponse) {
      console.log("response :>> ", response);
      const data = response.data?.data;
      cb(data);
    },
    onError(error: AxiosError) {
      const message =
        (error.response?.data as { errors: string[] })?.errors?.join(", ") ||
        (error.response?.data as { message: string })?.message;
      errorCb(message || error.message);
    },
  });
};

export const useVerifyEmail = (
  errorCb: (err: string) => void,
  cb: (message: string, data: { [key: string]: any }) => void,
) => {
  return useMutation({
    mutationFn: verifyEmail,
    mutationKey: ["verify-email"],
    onSuccess(response: AxiosResponse) {
      const message = response?.data?.message;
      const data = response.data?.data;

      cb(message, data);
    },
    onError(error: AxiosError, variables, context) {
      const message =
        (error.response?.data as { errors: string[] })?.errors?.join(", ") ||
        (error.response?.data as { message: string })?.message;
      errorCb(message || error.message);
    },
  });
};
