import AddIcon from "@/assets/svg/add.svg";
import TransferIcon from "@/assets/svg/transfer.svg";
import PayBillsIcon from "@/assets/svg/pay-bills.svg";
import MyselfIcon from "@/assets/icons/MyselfIcon";

interface ResetPasswordProps {
  label: string;
  name: string;
  value: string;
}

interface Action {
  icon?: React.ReactNode;
  label: string;
}

interface WalletInfoProps {
  title: string;
  amount: number;
  actions?: Action[];
}

interface TransactionInfoProps {
  title: string;
  createdDate: string;
  amount: number;
  status: string;
}

export interface PlanCardProps {
  label: string;
  title: string;
  amount: number;
  desc: string;
}

interface PurchaseForProps {
  icon: JSX.Element;
  title: string;
}
[];

export const PlanData: PlanCardProps[] = [
  {
    label: "Suitable for anyone",
    title: "Valubah Premium",
    amount: 3000,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  },
  {
    label: "Suitable for anyone",
    title: "Valubah Gold",
    amount: 3500,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  },
  /* {
    label: "Suitable for middle-level workers",
    title: "Valubah Flexicare",
    amount: 3900,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  },
  {
    label: "Suitable for senior-level workers",
    title: "Valubah Flexicare",
    amount: 6000,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  },
  {
    label: "Suitable for Bosses",
    title: "Valubah Sapphire",
    amount: 9300,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  },
  {
    label: "Suitable for senior-level workers",
    title: "Valubah Platinum",
    amount: 14300,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  },
  {
    label: "Suitable for HNIs",
    title: "Diamond(No waiting period)",
    amount: 18300,
    desc: "Valubah offers flexible pricing plans tailored to suit your financial goals and needs",
  }, */
];

export const ResetPasswordOptions: ResetPasswordProps[] = [
  {
    label: "Phone number",
    name: "resetOption",
    value: "Phone number",
  },
  {
    label: "Email address",
    name: "resetOption",
    value: "Email address",
  },
];

export const ResidentialOptions: ResetPasswordProps[] = [
  {
    label: "Nigeria",
    name: "residential",
    value: "Nigeria",
  },
  {
    label: "Aboard",
    name: "residential",
    value: "Aboard",
  },
];

export const UserWalletInfo: WalletInfoProps[] = [
  {
    title: "Total Wallet Balance",
    amount: 0,
  },
  {
    title: "Total Processed Balance",
    amount: 124414324103,
  },
];

export const DummyTransactionInfo: TransactionInfoProps[] = [
  {
    title: "Valubah premium purchase",
    createdDate: "Dec 22nd 2023,11:02:03",
    amount: 124414324103,
    status: "Successful",
  },
  {
    title: "Valubah premium purchase",
    createdDate: "Dec 22nd 2023,11:02:03",
    amount: 124414324103,
    status: "Processing",
  },
];

export interface BeneficiarySummaryDataProps {
  name?: string;
  phoneNumber?: string;
  country?: string;
  stateOfOrigin?: string;
  lga?: string;
  qualification?: string;
  age?: string;
  maritalStatus?: string;
  rsaNumber?: string;
  image?: string;
  nokName?: string;
  nokEmail?: string;
  nokPhoneNumber?: string;
  nokGender?: string;
  relationship?: string;
  occupation?: string;
  nokAddress?: string;
}

export const BeneficiarySummaryData: BeneficiarySummaryDataProps[] = [
  {
    name: "Dagana Lois",
    phoneNumber: "08082280975",
    country: "Kenya",
    qualification: "O'level",
    rsaNumber: "23456785678",
    nokEmail: "alma.lawson@example.com",
    nokPhoneNumber: "08082280975",
    nokGender: "Male",
    relationship: "Brother",
    occupation: "Self employed",
    nokAddress: "8502 Preston Rd. Inglewood,Maine 98380",
  },
  {
    name: "Guy Hawkins",
    country: "Nigeria",
    stateOfOrigin: "Kogi",
    lga: "Okene",
    qualification: "O'level",
    age: "25yrs",
    maritalStatus: "VG Pensions",
    rsaNumber: "23456785678",
    image: "image",
    nokName: "Leslie Alexander",
    nokEmail: "alma.lawson@example.com",
    nokPhoneNumber: "08082280975",
    nokGender: "Female",
    relationship: "Sister",
    occupation: "Employed",
    nokAddress: "8502 Preston Rd. Inglewood,Maine 98380",
  },
  {
    name: "Leslie Alexander",
    phoneNumber: "08082280975",
    country: "Nigeria",
    stateOfOrigin: "Bayelsa",
    lga: "Kolga",
    qualification: "O'level",
    age: "32yrs",
    maritalStatus: "VG Pensions",
    rsaNumber: "23456785678",
    image: "image",
    nokName: "Leslie Alexander",
    nokEmail: "alma.lawson@example.com",
    nokPhoneNumber: "08082280975",
    nokGender: "Female",
    relationship: "Sister",
    occupation: "Civil servant",
    nokAddress: "8502 Preston Rd. Inglewood,Maine 98380",
  },
];
