import { useState } from "react";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("Weekly");
  const [gift, setGift] = useState(false);

  const amounts = [250, 100, 50, 25];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[400px]  border mx-auto">
      {/* Title */}
      <h2 className="text-lg font-bold text-center text-gray-800">
        Your gift today is more than a donation;
        <br /> it's a catalyst for change.
      </h2>

      {/* Donation Frequency Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {["One-time", "Weekly", "Monthly", "Annually"].map((option) => (
          <button
            key={option}
            className={`px-3 py-1 rounded-md font-semibold text-sm transition ${
              frequency === option
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFrequency(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Currency Selector */}
      <div className="mt-4">
        <label className="text-gray-700 text-sm">US Dollars (USD)</label>
        <select className="w-full mt-1 p-2 border rounded-lg">
          <option>USD</option>
          <option>EUR</option>
          <option>INR</option>
        </select>
      </div>

      {/* Donation Amount Selection */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {amounts.map((amt) => (
          <button
            key={amt}
            className={`p-3 text-center font-semibold border rounded-lg transition ${
              selectedAmount === amt
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => {
              setSelectedAmount(amt);
              setCustomAmount("");
            }}
          >
            ${amt}
          </button>
        ))}
        {/* Custom Amount Input */}
        <input
          type="number"
          placeholder="Custom Amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="col-span-2 p-3 border rounded-lg text-gray-700"
        />
      </div>

      {/* Gift Option */}
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="gift"
          checked={gift}
          onChange={() => setGift(!gift)}
          className="mr-2"
        />
        <label htmlFor="gift" className="text-gray-700 text-sm">
          Make this a gift in honor of a friend or family member.
        </label>
      </div>

      {/* Next Button */}
      <button className="w-full mt-4 bg-green-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
        Next →
      </button>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-3 text-center">
        All donations are 100% tax deductible. Your information will be kept secure.
        <a href="#" className="underline text-green-600 ml-1">Privacy Policy</a>
      </p>

      <p className="text-xs text-center text-green-600 mt-2 underline cursor-pointer">
        Other ways to give
      </p>
    </div>
  );
};

export default DonationForm;
