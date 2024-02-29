import React from 'react'
import UploadIcon from '@/assets/svg/upload-icon.svg'
import DateCalendarIcon from '@/assets/svg/date-calendar.svg'
import Dropdown from "../Dropdowns/selectOption";
import InputField from '../Forms/input-text';
import InputFieldPhoneNumber from '@/components/Forms/input-phone-number';
import CountryCodeInput from '@/components/Forms/country-code-input';
import FileInput from '../Forms/file-input';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import DatePicker from '../DatePicker/DatePicker';
import RadioButton from '../Forms/Button/radio';
import { ResidentialOptions } from '@/lib/data';
import CountryDropdown from '../Dropdowns/CountryList';
import CountryStateCity from '../Forms/country-state-city';

const options = ["Miss", "Mr", "Mrs."];
const maritalOption = ["Single", "Married", "Divorce"];
const genderOption = ["Male", "Female"];

interface FormData {
  selectedDate: string;
}


const PersonalForm = () => {
    const methods = useForm<FormData>();
      const handleSelect = (selectedOption: string) => {
         console.log(`Selected: ${selectedOption}`);
         // Perform any other actions based on the selected option
        };

        const handleFileSelect = (file: File | null) => {
            if (file) {
                console.log(">>> file", file.name)
            }
        }
  return (
    <FormProvider {...methods}>
      <div>
        <div className="flex gap-[16px]">
          <FileInput onFileSelect={handleFileSelect}>
            <div className="sm:w-[199px] py-10 px-[18px] flex flex-col justify-center border items-center border-dotted rounded-2xl border-[#EBEBEB] cursor-pointer">
              <div className="w-8 h-8 bg-[#f1f1f1] flex justify-center items-center rounded-full mb-[10px]">
                <UploadIcon />
              </div>
              <p className="text-sm text-[#333] w-[164px] text-center">
                Upload passport photograph or{" "}
                <span className="text-[#3D663D] text-xs underline">Browse</span>
              </p>
            </div>
          </FileInput>
          <div className="flex flex-col gap-4">
            <Dropdown options={options} onSelect={handleSelect} label="Title" />
            <div className="flex justify-between gap-4 flex-col sm:flex-row">
              <InputField
                label="First name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                label="Middle name"
                name="middleName"
                type="text"
                placeholder="Middle Name"
              />
              <InputField
                label="Last name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 my-4">
          <div className="w-full sm:w-[263px]">
            <InputField
              label="Email Address"
              name="emailAddress"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full sm:w-[263px]">
            <InputFieldPhoneNumber label="Phone number" name="phone" />
          </div>
          <div className="w-full sm:w-[263px]">
            <InputFieldPhoneNumber
              label="Secondary phone number(optional)"
              name="secondaryPhone"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-[263px]">
            <Dropdown
              options={genderOption}
              onSelect={handleSelect}
              label="Gender"
            />
          </div>
          <div className="w-full sm:w-[263px]">
            <Dropdown
              options={maritalOption}
              onSelect={handleSelect}
              label="Marital status"
            />
          </div>
          <div className="w-full sm:w-[263px]">
            <InputField
              label="Maiden name"
              name="maidenName"
              type="text"
              placeholder="MaidenName"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-[263px]">
            <InputField
              label="Place of birth"
              name="placeOfBirth"
              type="text"
              placeholder="place of birth"
            />
          </div>
          <div className="w-full sm:w-[263px]">
            <DatePicker name="selectedDate" label="Date of Birth" />
          </div>
          <div className="w-full sm:w-[263px]">
            {/* Country code */}
            <CountryCodeInput label="Country Code" name="countryCode" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-[263px] flex-col sm:flex-row">
            <label>Residential address</label>
            <div className="flex">
              {ResidentialOptions.map((datum, index) => (
                <RadioButton
                  key={index}
                  label={datum.label}
                  name={datum.name}
                  value={datum.value}
                  // Add other props like onChange if needed
                />
              ))}
            </div>
          </div>
          {/* Nationality */}
          <div className="w-full sm:w-[263px]">
            <CountryDropdown label="Nationality" name="nationality" />
          </div>
          {/* Country of residence */}
          <div className="w-full sm:w-[263px]">
            <CountryDropdown label="Country of residence" name="residence" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-4">
          {/* State of residence */}
          <div className="w-full sm:w-[263px]">
            <CountryStateCity
              countryName="country"
              stateName="state"
              cityName="city"
            />
          </div>

          {/* LGA Origin */}
          <div className="w-full sm:w-[263px]">
            <CountryDropdown label="LGA Origin" name="lga" />
          </div>
          {/* Village/Town/City */}
          <div className="w-full sm:w-[263px]">
            <CountryDropdown label="Village/Town/City" name="city" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-4">
          {/* Street name */}
          {/* House number */}
          {/* Postcode/Zip code */}
        </div>
        <h1 className="mb-4 text-lg font-medium">Bank Details</h1>
        <div className="flex flex-col gap-4 mb-4">
          <Dropdown
            options={genderOption}
            onSelect={handleSelect}
            label="Gender"
          />
          <Dropdown
            options={maritalOption}
            onSelect={handleSelect}
            label="Marital status"
          />

          <InputField
            label="Maiden name"
            name="maidenName"
            type="text"
            placeholder="MaidenName"
          />
        </div>
      </div>
    </FormProvider>
  );
}

export default PersonalForm