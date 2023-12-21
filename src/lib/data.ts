interface ResetPasswordProps {
    label: string;
    name: string;
    value: string;
}
export const ResetPasswordOptions: ResetPasswordProps[] = [
  {
    label:"Phone number",
    name:"resetOption",
    value:"Phone number",
  },
  {
    label:"Email address",
    name:"resetOption",
    value:"Email address",
  },
];