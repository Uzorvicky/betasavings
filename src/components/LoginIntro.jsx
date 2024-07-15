import React from "react";
function LandingIntro() {
    return (
      <div className="min-h-full surface-card border-right-1 rounded-l-xl flex flex-column justify-content-center align-content-center ">
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
        <h1 className="text-3xl font-bold text-gray-600 mt-4">
        <b>Penny Pincher</b> Admin
        </h1>
        <p className="text-gray-500 mt-4">
            Pinch Your Way to Savings with Penny Pincher!
        </p>
  
        <p className="text-gray-500 mt-2">
        Looking to save more and finally crush your financial goals? Penny Pincher is here to be your pocket-sized budgeting buddy!
        </p>

        <span className="text-xl">
        Our easy-to-use app helps you:
        </span>
        <ul className="mb-4  text-left text-md text-gray-600 group-hover:text-gray-900 w-full">
        <li className="flex align-items-center gap-3">
        <span style={{ fontSize: '1rem' }} className="pi pi-check-circle text-green-700"></span>
<span>
<b>Track your spending:</b> See exactly where your money goes. Every penny counts!
</span>        </li>
        <li className="flex align-items-center gap-3">
        <span style={{ fontSize: '1rem' }} className="pi pi-check-circle text-green-700"></span>
        <span><b>Create budgets:</b> Set realistic goals and watch your savings grow</span></li>
        <li className="flex align-items-center gap-3">
        <span style={{ fontSize: '1rem' }} className="pi pi-check-circle text-green-700"></span>
        <span><b>Save for what matters:</b> Plan for dream vacations, a new car, or a secure future.</span> </li>
        <li className="flex align-items-center gap-3">
        <span style={{ fontSize: '1rem' }} className="pi pi-check-circle text-green-700"></span>
        <span><b>Stay motivated:</b> Fun challenges and achievements keep you on track.</span>
        </li>
<quote>
Download Penny Pincher today and unlock a world of financial freedom!  Let's turn pennies into piles!
</quote>
        </ul>
      </div>
    );
  };
  