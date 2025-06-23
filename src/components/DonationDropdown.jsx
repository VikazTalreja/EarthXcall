import { useState } from "react";

const DonationDropdown = () => {
  const [amount, setAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) return resolve(true);
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    let finalAmount = amount === "custom" ? parseInt(customAmount) : parseInt(amount);

    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const options = {
      key: "rzp_test_sEgaLaV8HXhFa9", // Replace with your real key
      amount: finalAmount * 100,
      currency: "INR",
      name: "Earthxway Organization",
      description: "Donation",
      image: "./logo.svg",
      handler: function (response) {
        console.log("Donation Success:", response);
        setShowThankYou(true);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        source: "dropdown",
      },
      theme: {
        color: "#16a34a",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Donation Dropdown + Button */}
      <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
        <select
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
        >
          <option value="100">₹100</option>
          <option value="500">₹500</option>
          <option value="1000">₹1000</option>
          <option value="5000">₹5000</option>
          <option value="custom">Custom Amount</option>
        </select>

        <button
          onClick={handleDonate}
          className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-base"
        >
          Donate Now
        </button>
      </div>

      {/* Show custom amount input if "Custom Amount" selected */}
      {amount === "custom" && (
        <input
          type="number"
          placeholder="Enter custom amount (₹)"
          min="1"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="mt-3 w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-xl">
            <h3 className="text-xl font-bold text-green-700 mb-2">🎉 Thank You!</h3>
            <p className="text-gray-700 mb-4">
              Your donation makes a real difference. We appreciate your support!
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

export default DonationDropdown;
