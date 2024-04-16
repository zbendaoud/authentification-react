import React from 'react';
import ReactDOM from 'react-dom';

import { Formik, Form, useField } from 'formik';

import * as Yup from 'yup';
import CardShadow from './CardShadow';
import MyTextInput from '../core/MyTextInput';
import MySelect from '../core/MySelect';

export default function CardResgister({ handleSubmit, customClass }) {
  return (
    <div className="flex justify-center items-center" style={{ height: '95%' }}>
      <Formik
        initialValues={{
          //Business Information
          customerId: '',
          companyName: '',
          companyPhone: '',
          //personelle Information
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          // Business Address
          firstAdresse: '',
          secondAdresse: '',
          thirdAdresse: '',
          city: '',
          prov: '',
          zip: '',

          acceptedTerms: true, // added for our checkbox
          country: '' // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          jobTitle: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),

          email: Yup.string().email('Invalid email address').required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          country: Yup.string()
            .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }, event) => {
          console.log({ values, setSubmitting });
        }}>
        <Form className="h-full w-full">
          <div className={`flex justify-center items-center h-full ${customClass} `}>
            <CardShadow
              customClass={` w-11/12  p-4 h-auto shadow-md bg-white bg-opacity-60 flex flex-col lg:flex-row lg:space-x-4 gap-3 `}>
              {/* height="90%" */}
              <div className=" h-full text-white p-4 lg:w-5/12">
                <div className="bg-white text-black h-max py-4 rounded-md shadow-md px-6">
                  <h1 className="text-xl font-semibold text-center">Business Information</h1>
                  <MyTextInput
                    label="Customer ID"
                    name="customerId"
                    type="number"
                    placeholder="9348219"
                  />
                  <MyTextInput
                    label="Company Name"
                    name="companyName"
                    type="text"
                    placeholder="Meta"
                  />
                  <MyTextInput
                    label="Company Number"
                    name="companyPhone"
                    type="number"
                    placeholder="1 234 432 235"
                  />
                </div>
                <div className=" text-black h-max mt-2 bg-white p-4 rounded-md shadow-md">
                  <h1 className="text-xl font-semibold text-center">personelle Information</h1>
                  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                  <MyTextInput label="First Name" name="firstName" type="text" placeholder="Jane" />

                  <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />

                  <MyTextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@formik.com"
                  />
                  <MyTextInput label="job Title" name="jobTitle" type="text" placeholder="RH" />
                </div>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <div className=" h-full  p-4 lg:w-7/12">
                {/* // on peut ou on dois mettre h-max */}{' '}
                <div className="bg-white text-black h-max py-4 px-6 pb-8 ">
                  <h1 className="text-xl font-semibold text-center">Business Address</h1>

                  <MyTextInput
                    label="Adresse"
                    name="firstAdresse"
                    type="text"
                    placeholder="Jane123 Rue Maple Ville-de-Québec, QC G1X 3X9"
                  />

                  <MyTextInput
                    label="Adresse 2"
                    name="secondAdresse"
                    type="text"
                    placeholder="optional"
                  />

                  <MyTextInput
                    label="Adresse 3"
                    name="thirdAdresse"
                    type="text"
                    placeholder="optional"
                  />
                  <MyTextInput
                    label="City"
                    name="city"
                    type="text"
                    placeholder="Plateau-Mont-Royal"
                  />
                  <div className="lg:flex lg:flex-row justify-between w-full lg:space-x-6">
                    {' '}
                    {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <MyTextInput
                      label="Province / State"
                      name="prov"
                      type="text"
                      placeholder="Québec"
                    />
                    <MyTextInput
                      label="Postal / ZIP"
                      name="zip"
                      type="text"
                      placeholder="H2X 1Y6"
                    />
                  </div>
                  {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

                  <MySelect label="country" name="country">
                    <option value="">Select a country</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                  </MySelect>
                </div>{' '}
                <div className="h-max flex lg:flex-row flex-col items-center justify-center px-4 py-4 lg:py-8 lg:space-y-0 space-y-4 lg:space-x-8">
                  <h1 className="w-max font-medium text-lg">
                    {' '}
                    Is the information correct? If yes, then{' '}
                  </h1>
                  <button
                    type="submit"
                    className="text-white bg-green-600 py-3 rounded lg:w-1/3 shadow-lg rounded-lg hover:bg-green-700 text-lg w-full">
                    Register now
                  </button>
                </div>
              </div>
            </CardShadow>
          </div>
        </Form>
      </Formik>
      {/* <PagesTest /> */}
    </div>
  );
}
