import { useState } from "react";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("Weekly");
  const [gift, setGift] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const amounts = [5000, 2500, 1000, 500];

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) {
        return resolve(true);
      }
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const amountToPay = customAmount ? parseInt(customAmount) : selectedAmount;

    const options = {
      key: "rzp_test_sEgaLaV8HXhFa9",
      amount: amountToPay * 100,
      currency: "INR",
      name: "Earthxway Foundationm",
      description: "Donation",
      image: "./logo.svg",
      handler: function (response) {
        console.log("Payment successful", response);
        setShowThankYou(true);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        frequency,
        gift: gift ? "Yes" : "No",
      },
      theme: {
        color: "#38a169",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="relative">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[400px] border mx-auto">
        <h2 className="text-lg font-bold text-center text-gray-800">
          Your gift today is more than a donation;
          <br /> it's a catalyst for change.
        </h2>

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

        <div className="mt-4">
          <label className="text-gray-700 text-sm">Indian Rupees (INR)</label>
          <div className="grid grid-cols-2 gap-2 mt-1">
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
                ₹{amt}
              </button>
            ))}
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
        </div>

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

        <button
          className="w-full mt-4 bg-green-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
          onClick={handlePayment}
        >
          Next →
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          All donations are eligible for tax benefits under 80G. Your information will be kept secure.
          <a href="#" className="underline text-green-600 ml-1">Privacy Policy</a>
        </p>

        <p className="text-xs text-center text-green-600 mt-2 underline cursor-pointer">
          Other ways to give
        </p>
      </div>

      {/* THANK YOU POPUP */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-xl">
            <h3 className="text-xl font-bold text-green-700 mb-2">🎉 Thank You!</h3>
            <p className="text-gray-700 mb-4">
              We appreciate your generous donation. Your support helps us make a difference.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
