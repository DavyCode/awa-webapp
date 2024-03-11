import { request } from "@/lib/axios-utils";
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";

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
type VerifyPhoneProps = { otp: string; phoneNumber: string };

const requestPhoneOTP = async ({ queryKey }: QueryFunctionContext) => {
  const [, phone] = queryKey;
  const response = request({
    url: `/auth/phone/verify/${phone}`,
    method: "GET",
  });

  return response;
};
const requestEmailOTP = async ({ queryKey }: QueryFunctionContext) => {
  const [, email] = queryKey;
  const response = request({
    url: `/auth/email/verify/${email}`,
    method: "GET",
  });

  return response;
};

const login = async (obj: { email: string; password: string }) => {
  const response = request({
    url: `/auth`,
    method: "POST",
    data: obj,
  });

  return response;
};
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
const verifyPhoneOTP = async (obj: VerifyPhoneProps) => {
  const response = await request({
    url: "/auth/phone/verify",
    method: "POST",
    data: obj,
  });

  return response;
};
const verifyEmail = async (obj: { email: string; emailToken: string }) => {
  const response = await request({
    url: "/auth/email/verify",
    method: "POST",
    data: obj,
  });

  return response;
};

export const useRequestPhoneOTP = (
  phone: string,
  errorCb: (msg: string) => void,
  cb?: (msg: string) => void,
) => {
  const queryResponse = useQuery({
    queryKey: ["request-phone-otp", phone],
    queryFn: requestPhoneOTP,
    retry: 0,
    enabled: false,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (queryResponse.isError) {
      const err = queryResponse.error as AxiosError;
      const message =
        (err.response?.data as { errors: string[] })?.errors?.join(", ") ||
        (err.response?.data as { message: string })?.message;
      errorCb(message || err.message);
    }
  }, [queryResponse.isError]);

  useEffect(() => {
    if (queryResponse.isSuccess) {
      const data = queryResponse.data as AxiosResponse;
      cb?.(data?.data?.message || "");
    }
  }, [queryResponse.isSuccess]);

  return queryResponse;
};

export const useRequestEmailOTP = (
  email: string,
  errorCb: (msg: string) => void,
  cb?: (msg: string) => void,
) => {
  const queryResponse = useQuery({
    queryKey: ["request-email-otp", email],
    queryFn: requestEmailOTP,
    retry: 0,
    enabled: false,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (queryResponse.isError) {
      const err = queryResponse.error as AxiosError;
      const message =
        (err.response?.data as { errors: string[] })?.errors?.join(", ") ||
        (err.response?.data as { message: string })?.message;
      errorCb(message || err.message);
    }
  }, [queryResponse.isError]);

  useEffect(() => {
    if (queryResponse.isSuccess) {
      const data = queryResponse.data as AxiosResponse;
      cb?.(data?.data?.message || "");
    }
  }, [queryResponse.isSuccess]);

  return queryResponse;
};

export const useCreateIndividual = (
  errorCb: (err: string) => void,
  cb: (msg: string) => void,
) => {
  return useMutation({
    mutationFn: createIndividual,
    mutationKey: ["create-individual"],
    onSuccess(response: AxiosResponse) {
      const msg = response.data?.message;
      cb(msg);
    },
    onError(error: AxiosError) {
      const message =
        (error.response?.data as { errors: string[] })?.errors?.join(", ") ||
        (error.response?.data as { message: string })?.message;
      errorCb(message || error.message);
    },
  });
};

export const useVerifyPhone = (
  errorCb: (err: string) => void,
  cb: (message: string, data: { [key: string]: any }) => void,
) => {
  return useMutation({
    mutationFn: verifyPhoneOTP,
    mutationKey: ["verify-phone-otp"],
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

export const useLogin = (
  errorCb: (err: string) => void,
  cb: (message: string, data: { [key: string]: any }) => void,
) => {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
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
