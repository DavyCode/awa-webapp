const CountryStateCity = () => {
  return (
    <p>Here </p>
  )
}

export default CountryStateCity

/* // components/CountryStateCity.tsx
import React from "react";
import { useFormContext, useController } from "react-hook-form";
import Select from "react-select";
import { countries, states, cities } from "countries-and-provinces";

interface CountryStateCityProps {
  countryName: string;
  stateName: string;
  cityName: string;
}

const CountryStateCity: React.FC<CountryStateCityProps> = ({
  countryName,
  stateName,
  cityName,
}) => {
  const { control } = useFormContext();
  const countryController = useController({ name: countryName, control });
  const stateController = useController({ name: stateName, control });
  const cityController = useController({ name: cityName, control });

  const handleCountryChange = (selectedOption: any) => {
    stateController.field.onChange(null);
    cityController.field.onChange(null);
    stateController.field.ref?.focus();

    // You can fetch states based on the selected country using an API if needed
    // For simplicity, we'll use the locally available state data
    const selectedCountryStates = states[selectedOption.value] || [];
    const stateOptions = selectedCountryStates.map((state) => ({
      value: state.short,
      label: state.name,
    }));

    stateController.field.setOptions(stateOptions);
  };

  const handleStateChange = (selectedOption: any) => {
    cityController.field.onChange(null);
    cityController.field.ref?.focus();

    // You can fetch cities based on the selected state using an API if needed
    // For simplicity, we'll use the locally available city data
    const selectedStateCities = cities[selectedOption.value] || [];
    const cityOptions = selectedStateCities.map((city) => ({
      value: city,
      label: city,
    }));

    cityController.field.setOptions(cityOptions);
  };

  const countryOptions = countries.map((country) => ({
    value: country.short,
    label: country.name,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="mb-4">
        <label
          htmlFor={countryName}
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <Select
          {...countryController.field}
          options={countryOptions}
          onChange={handleCountryChange}
          placeholder="Select a country"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor={stateName}
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <Select
          {...stateController.field}
          options={stateController.field.options}
          onChange={handleStateChange}
          placeholder="Select a state"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor={cityName}
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <Select
          {...cityController.field}
          options={cityController.field.options}
          placeholder="Select a city"
        />
      </div>
    </div>
  );
};

export default CountryStateCity;
 */