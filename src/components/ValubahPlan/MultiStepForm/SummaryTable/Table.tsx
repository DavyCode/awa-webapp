import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BeneficiarySummaryData } from "@/lib/data";
import { Item } from "@radix-ui/react-accordion";
const headers = [
  { header: "Beneficiary name" },
  { header: "Phone number" },
  { header: "Country" },
  { header: "State of Origin" },
  { header: "LGA" },
  { header: "Qualification" },
  { header: "Age" },
  { header: "Marital Status" },
  { header: "RSA Number" },
  { header: "Image" },
  { header: "NOK Name" },
  { header: "NOK Email" },
  { header: "NOK Phone Number" },
  { header: "NOK Gender" },
  { header: "Relationship" },
  { header: "Occupation" },
  { header: "NOK Address" },
];

const TableComponent = () => {
  const MissingData = "missing data";
  return (
    <Table className="border-l border-y">
      <TableHeader
        className=""
        style={{
          width: "182px",
          background:
            "linear-gradient(0deg, rgba(247, 247, 247, 0.70) 0%, rgba(247, 247, 247, 0.70) 100%)",
        }}
      >
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} className="w-[200px]">
              {header.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {BeneficiarySummaryData.map((data, index) => (
          <TableRow key={index}>
            <TableCell className={data.name ? "font-medium" : "bg-red-600"}>
              {data.name ? data.name : MissingData}
            </TableCell>
            <TableCell>
              {data.phoneNumber ? data.phoneNumber : MissingData}
            </TableCell>
            <TableCell>{data.country ? data.country : MissingData}</TableCell>
            <TableCell className={data.name ? "font-medium" : ""}>
              {data.stateOfOrigin ? data.stateOfOrigin : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.lga ? data.lga : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.qualification ? data.qualification : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.age ? data.age : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.maritalStatus ? data.maritalStatus : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.rsaNumber ? data.rsaNumber : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.image ? data.image : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.nokName ? data.nokName : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.nokEmail ? data.nokEmail : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.nokPhoneNumber ? data.nokPhoneNumber : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.nokGender ? data.nokGender : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.relationship ? data.relationship : MissingData}
            </TableCell>
            <TableCell className="text-right">
              {data.occupation ? data.occupation : MissingData}
            </TableCell>
            <TableCell className="" style={{ width: "max-content" }}>
              {data.nokAddress ? data.nokAddress : MissingData}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
