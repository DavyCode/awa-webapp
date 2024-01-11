import AddIcon from "@/assets/svg/add.svg";
import TransferIcon from "@/assets/svg/transfer.svg";
import PayBillsIcon from "@/assets/svg/pay-bills.svg";

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
  createdDate: string,
  amount: number,
  status: string
}

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
    status: "Successful"
  },
  {
    title: "Valubah premium purchase",
    createdDate: "Dec 22nd 2023,11:02:03",
    amount: 124414324103,
    status: "Processing"
  },

];
