"use client";

import { BeneficiarySummaryData } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";

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

export const columns: ColumnDef<BeneficiarySummaryDataProps>[] = [
  { accessorKey: "name", header: "Beneficiary Name" },
  { accessorKey: "phoneNumber", header: "Phone Number" },
  { accessorKey: "country", header: "Country" },
  { accessorKey: "stateOfOrigin", header: "State of Origin" },
  { accessorKey: "lga", header: "LGA" },
  { accessorKey: "qualification", header: "Qualification" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "maritalStatus", header: "Marital Status" },
  { accessorKey: "rsaNumber", header: "RSA Number" },
  { accessorKey: "image", header: "Image" },
  { accessorKey: "nokName", header: "NOK Name" },
  { accessorKey: "nokEmail", header: "NOK Email" },
  { accessorKey: "nokPhoneNumber", header: "NOK Phone Number" },
  { accessorKey: "nokGender", header: "NOK Gender" },
  { accessorKey: "relationship", header: "Relationship" },
  { accessorKey: "occupation", header: "Occupation" },
  { accessorKey: "nokAddress", header: "NOK Address" },
];
