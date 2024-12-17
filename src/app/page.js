
export default function Home() {
  return (
    <>
      <div className="bg-green-950 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white font-bold mt-10 mb-6 text-center">
          Card payment <br /> Checkout form
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 w-[90%] md:w-[800px]">
          {/* Header */}
          <h2 className="text-xl font-bold mb-4">Complete registration payment</h2>

          {/* Personal Details Section */}
          <div className="mb-6">
            <h4 className="text-md font-semibold mb-2">Personal details</h4>
            <div className="flex flex-wrap gap-4">
              {/* Address Line */}
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="text-gray-600 mb-1">Address line</label>
                <input
                  type="text"
                  className="outline-none border-2 p-2 rounded-xl"
                  placeholder="P.O. Box 123"
                />
              </div>

              {/* City */}
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="text-gray-600 mb-1">City</label>
                <input
                  type="text"
                  className="outline-none border-2 p-2 rounded-xl"
                  placeholder="Anusha"
                />
              </div>

              {/* State */}
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="text-gray-600 mb-1">State</label>
                <input
                  type="text"
                  className="outline-none border-2 p-2 rounded-xl"
                  placeholder="Anusha, Tanzania"
                />
              </div>

              {/* Postal Code */}
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="text-gray-600 mb-1">Postal code</label>
                <input
                  type="text"
                  className="outline-none border-2 p-2 rounded-xl"
                  placeholder="9900"
                />
              </div>
            </div>
          </div>

          <div className="my-4">
            <h4 className="text-md font-semibold mb-2">Payment methods</h4>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Card details</h4>
            <div className="flex flex-col mb-4">
              <label className="text-gray-600 mb-1">Cardholder's name</label>
              <input
                type="text"
                className="outline-none border-2 p-2 rounded-xl"
                placeholder="Seen on your card"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-gray-600 mb-1">Card number</label>
              <input
                type="text"
                className="outline-none border-2 p-2 rounded-xl"
                placeholder="Seen on your card"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="text-gray-600 mb-1">Expiry</label>
                <input
                  type="text"
                  className="outline-none border-2 p-2 rounded-xl"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="text-gray-600 mb-1">CVC</label>
                <input
                  type="text"
                  className="outline-none border-2 p-2 rounded-xl"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
