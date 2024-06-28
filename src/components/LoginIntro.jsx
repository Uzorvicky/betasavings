import React from "react";
function LandingIntro() {
    return (
      <div className="min-h-full surface-ground rounded-l-xl flex flex-column justify-content-center align-content-center ">
        <div className=" w-full py-10">
          <div className="w-full">
            <div className="flex justify-content-center">
              <img
                src="https://res.cloudinary.com/dml9olhsf/image/upload/v1710144241/logo-color_xd3jvt.png"
                alt=" Admin Dashboard"
                className="inline-block border-circle"
                 width="100" 
                height="100"
              />
            </div>
  
            <div className="text-center mt-12">
              {/* <img
                src="./intro.png"
                alt=" Admin Dashboard"
                className="w-48 inline-block"
              /> */}
            </div>
  
            <WelcomeNote />
          </div>
        </div>
      </div>
    );
  }
  
  export default LandingIntro;
  const WelcomeNote = () => {
    return (
      <div className=" p-5 flex flex-column justify-content-center align-content-center">
        <h1 className="text-2xl font-bold text-gray-600 mt-4">
          Piggy Savings Admin
        </h1>
        <p className="text-gray-500 mt-4">
          We're thrilled to have you as an admin on our platform. The admin
          dashboard provides you with the tools and features to manage users,
          teams, and more.
        </p>
  
        <p className="text-gray-500 mt-2">
          If you have any questions or need assistance, please don't hesitate to
          reach out to our support team. We're here to help you make the most of
          your admin role.
        </p>
      </div>
    );
  };
  