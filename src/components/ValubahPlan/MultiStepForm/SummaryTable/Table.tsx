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
        style={{
          width: "182px",
          background:
            "linear-gradient(0deg, rgba(247, 247, 247, 0.70) 0%, rgba(247, 247, 247, 0.70) 100%)",
        }}
      >
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} className="font-[600]">
              {header.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {BeneficiarySummaryData.map((data, index) => (
          <TableRow key={index} className="">
            <TableCell className="editCell ">
              <h6>{data.name ? data.name : MissingData}</h6>
              <p>Edit</p>
            </TableCell>
            <TableCell
              style={
                !data.phoneNumber
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.phoneNumber ? data.phoneNumber : MissingData}
            </TableCell>
            <TableCell
              style={
                !data.country
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.country ? data.country : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.stateOfOrigin
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.stateOfOrigin ? data.stateOfOrigin : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.lga
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.lga ? data.lga : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.qualification
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.qualification ? data.qualification : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.age
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.age ? data.age : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.maritalStatus
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.maritalStatus ? data.maritalStatus : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.rsaNumber
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.rsaNumber ? data.rsaNumber : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.image
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.image ? data.image : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.nokName
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.nokName ? data.nokName : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.nokEmail
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.nokEmail ? data.nokEmail : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.nokPhoneNumber
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.nokPhoneNumber ? data.nokPhoneNumber : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.nokGender
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.nokGender ? data.nokGender : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.relationship
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.relationship ? data.relationship : MissingData}
            </TableCell>
            <TableCell
              className="text-center"
              style={
                !data.occupation
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.occupation ? data.occupation : MissingData}
            </TableCell>
            <TableCell
              className=" w-[5rem]"
              style={
                !data.nokAddress
                  ? {
                      backgroundColor: "#FFF2F1",
                      color: "#EA4335",
                    }
                  : undefined
              }
            >
              {data.nokAddress ? data.nokAddress : MissingData}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
