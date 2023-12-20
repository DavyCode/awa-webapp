"use client"
import React, { useState, useMemo } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import countryList from "react-select-country-list";

interface CountrySelectWrapperProps {
  value: string;
  handleOnChange: (
    value: SingleValue<string>,
    actionMeta: ActionMeta<string>
  ) => void;
}

const CountrySelectWrapper: React.FC<CountrySelectWrapperProps> = ({
  value,
  handleOnChange,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(value);
  const options: any = useMemo(() => countryList().getData(), []);

  const handleCountryChange = (
    selectedOption: SingleValue<string>,
    actionMeta: ActionMeta<string>
  ) => {
    setSelectedCountry(selectedOption as string);
    handleOnChange(selectedOption, actionMeta);
  };

  return (
    <Select
      value={selectedCountry}
      options={options}
      onChange={handleCountryChange}
    />
  );
};

export default CountrySelectWrapper;
