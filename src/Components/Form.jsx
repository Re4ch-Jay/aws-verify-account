import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function Form() {
  const { control, handleSubmit, formState: { errors }, trigger } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-screen-xl flex flex-col md:flex-row gap-5 items-center justify-center mt-5 md:mt-10"
    >
      <div className="w-full md:w-1/2 mx-auto md:mx-0">
        <p className="font-medium text-sm md:text-lg lg:text-2xl">Explore Free Tier products with a new AWS account.</p>
        <p className="text-sm md:text-base lg:text-lg mt-4">To learn more, visit aws.amazon.com/free.</p>
        <img
          src="https://d3c9ouasuy8pg6.cloudfront.net/dist/images/credential-light_a0fe0c5fd9697bd0322aa18f1769a946.png"
          alt=""
          className="hidden md:block"
        />
      </div>


      <div className="border-b h-96 md:border-r md:border-0 md:m-10 md:block hidden"></div>

      <div className="w-full md:w-1/2">
        <p className="font-medium mb-2 text-sm md:text-lg lg:text-2xl">Provide AWS credential to verify your account</p>
        <div className="mt-6">
          <label className="block text-sm mb-1">Root user email address</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="email"
                  placeholder="username@example.com"
                  className={`block w-full border-2 rounded-sm p-1 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  onChange={async (e) => {
                    field.onChange(e); // Update the field value
                    await trigger('email'); // Trigger validation for this field
                  }}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm mb-1">AWS account name</label>
          <Controller
            name="accountName"
            control={control}
            rules={{ required: 'Account name is required' }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  className={`block w-full border-2 rounded-sm p-1 ${
                    errors.accountName ? 'border-red-500' : ''
                  }`}
                  onChange={async (e) => {
                    field.onChange(e);
                    await trigger('accountName');
                  }}
                />
                {errors.accountName && (
                  <span className="text-red-500">{errors.accountName.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm md:text-xs mb-1">AWS account password</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="password"
                  className={`block w-full border-2 rounded-sm p-1 ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  onChange={async (e) => {
                    field.onChange(e);
                    await trigger('password');
                  }}
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </>
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-sm"
        >
          Verify Your AWS Account
        </button>
      </div>
    </form>
  );
}
