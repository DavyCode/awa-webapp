export interface IndividualSignupFormProps {
  email: string;
  password: string;
  phoneNumber: string;
  phoneCountryCode: string;
  firstName: string;
  lastName: string;
  howDidYouHearAboutUs: string;
  referredBy?: string;
  country: string | null;
  businessName?: string;
  businessLocation?: string;
}
