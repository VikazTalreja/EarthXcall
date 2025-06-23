import { useState } from "react";

const WomensEmpowermentDonation = () => {
  const [donationType, setDonationType] = useState("oneTime");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const currency = {
    symbol: "₹",
    amounts: [500, 1000, 2500, 5000],
  };

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

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonate = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const finalAmount = customAmount
      ? parseInt(customAmount)
      : selectedAmount;

    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "rzp_test_sEgaLaV8HXhFa9", // Replace with live key in production
      amount: finalAmount * 100,
      currency: "INR",
            name: "Earthxway Foundation",

      description: donationType === "monthly" ? "Monthly Donation" : "One-Time Donation",
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
        donationType,
        cause: "Women's Empowerment",
      },
      theme: {
               color: "#38a169",

      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="relative z-10 bg-[#F1F0E9] p-6 md:p-8 rounded-lg shadow-xl w-full md:w-[420px] self-center md:self-auto">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">WOMEN'S EMPOWERMENT FUND</h2>
      <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">TOGETHER, EMPOWERING WOMEN</p>
      <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
        The Women's Empowerment Fund supports initiatives that promote gender equality, economic independence, and sustainable development for women in rural communities.
      </p>

      <div className="flex gap-3 mb-6">
        <button
          className={`flex-1 ${donationType === 'oneTime' ? 'bg-[#98A4AE]' : 'bg-white'} hover:bg-[#7A8793] text-${donationType === 'oneTime' ? 'white' : 'gray-700'} font-bold py-3 px-4 rounded text-sm ${donationType !== 'oneTime' ? 'border border-gray-300' : ''}`}
          onClick={() => setDonationType('oneTime')}
        >
          GIVE TODAY
        </button>
        <button
          className={`flex-1 ${donationType === 'monthly' ? 'bg-[#98A4AE]' : 'bg-white'} hover:bg-[#7A8793] text-${donationType === 'monthly' ? 'white' : 'gray-700'} font-bold py-3 px-4 rounded text-sm ${donationType !== 'monthly' ? 'border border-gray-300' : ''}`}
          onClick={() => setDonationType('monthly')}
        >
          GIVE MONTHLY
        </button>
      </div>

      <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">SELECT AN AMOUNT TO DONATE:</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {currency.amounts.slice(0, 3).map((amount, index) => (
          <button
            key={index}
            className={`${selectedAmount === amount ? 'bg-[#98A4AE] text-white' : 'bg-white text-gray-700 border border-gray-300'} hover:bg-[#7A8793] hover:text-white font-bold py-2 px-3 rounded text-sm`}
            onClick={() => handleAmountSelect(amount)}
          >
            {currency.symbol}{amount}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          className={`${selectedAmount === currency.amounts[3] ? 'bg-[#98A4AE] text-white' : 'bg-white text-gray-700 border border-gray-300'} hover:bg-[#7A8793] hover:text-white font-bold py-2 px-3 rounded text-sm`}
          onClick={() => handleAmountSelect(currency.amounts[3])}
        >
          {currency.symbol}{currency.amounts[3]}
        </button>
        <button
          className={`${customAmount && !selectedAmount ? 'bg-[#98A4AE] text-white' : 'bg-white text-gray-700 border border-gray-300'} hover:bg-[#7A8793] hover:text-white font-bold py-2 px-3 rounded text-sm`}
          onClick={() => document.getElementById('customAmount').focus()}
        >
          Other
        </button>
      </div>

      <div className="flex items-center mb-6 bg-white rounded border border-gray-300">
        <div className="flex-1 flex items-center px-3">
          <span className="text-gray-700 text-sm mr-2">₹</span>
          <input
            id="customAmount"
            type="number"
            className="w-full outline-none text-sm py-2"
            placeholder="Enter amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            min="1"
          />
        </div>
      </div>

      <button
        className="w-full bg-[#1B3044] hover:bg-[#0D1821] text-white font-bold py-3 px-4 rounded text-sm uppercase"
        onClick={handleDonate}
      >
        {donationType === 'oneTime' ? 'DONATE NOW' : 'DONATE MONTHLY'}
      </button>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-xl">
            <h3 className="text-xl font-bold text-green-700 mb-2">🎉 Thank You!</h3>
            <p className="text-gray-700 mb-4">
              Your contribution to women's empowerment is truly appreciated!
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-2 bg-[#1B3044] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0D1821] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WomensEmpowermentDonation;
