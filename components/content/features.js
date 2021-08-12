export const Feature = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              Accept USDC payments wherever you are
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 md:text-lg">
            While every business is unique, they all need to be paid. Installed in a snap, the Swoosh terminal is easy to use. It lets you contactless payments anywhere, anytime. Enjoy secure payments all day long in a stylish package.
            </p>
          </div>
        </div>
        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Fast payments</h6>
            <p className="mb-3 text-sm text-gray-900">
              Using solana networks we can process up to 60K transactions/sec. That's make us the fastest solution in the market.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Easier accounting</h6>
            <p className="mb-3 text-sm text-gray-900">
              Integrate accounting software in a snap to automate the tracking of all your payments.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Foolproof protection</h6>
            <p className="mb-3 text-sm text-gray-900">
            When you use the Swoosh secure payment platform, your data is protected by the highest security standards.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Transparent fees</h6>
            <p className="mb-3 text-sm text-gray-900">
            Pay a 0.5% transaction fee. No fixed costs. No subscription and no commitment. We like to keep it simple!
            </p>
          </div>
        </div>
      </div>
    );
  };