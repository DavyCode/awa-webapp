import React from 'react'
import Header from '../Header'
import { Button } from '../Forms/Button'
import GoogleIcon from '../../../assets/icons/GoogleIcon'
import OrDivider from '../Divider'
import InputPassword from '../Forms/input-password'
import Link from 'next/link'
import PasswordValidation from '../Validation/password'

const CreatePassword = () => {
  return (
    <div className="pt-20 sm:px-20 w-full flex sm:gap-x-40 flex-col sm:flex-row mt-8">
      <Header />
      <form className='w-full sm:w-[518px] border rounded-md px-10 py-6'>
        <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
          Create password
        </p>
        <span className="mt-2 mb-4 text-[#333] inline-flex justify-center w-full text-center text-sm sm:text-base">
          Sign up for Awabah to get started
        </span>
        <div className="flex flex-col gap-6 text-left sm:gap-4 mt-4">
          <InputPassword
            name="password"
            label="Create Password"
            placeholder="Create Password"
            /* error={errors.password?.message} */
            /* register={register} */
          />
          <InputPassword
            name="ConfirmPassword"
            label="Confirm Password"
            placeholder="Password"
            /* error={errors.password?.message} */
            /* register={register} */
          />

          <PasswordValidation />

          <Button
            variant="default"
            className="py-5 bg-[#3D663D] w-full flex justify-center items-center text-sm font-semibold text-white"
          >
            Create Password
          </Button>
          {/* <OrDivider content="or" />
          <Button
            className="border-gray-300 bg-white/20 w-full gap-x-2 py-5 border-gray-200 border rounded-md flex justify-center items-center shadow-none"
            type="button"
          >
            <GoogleIcon />
            <span className="text-sm text-gray-800">Sign up with Google</span>
          </Button>

          <p className="py-1 text-center text-sm">
            Already have an account?
            <Link
              href="/"
              className="ml-1 font-semibold text-base text-[#3D663D]"
            >
              Log in
            </Link>
          </p> */}
        </div>
      </form>
    </div>
  );
}

export default CreatePassword