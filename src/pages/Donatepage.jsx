import { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = async () => {
    if (!amount || !name || !email) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("/api/createOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, user: { name, email } }),
    });

    const data = await res.json();

    const options = {
      key: "rzp_test_sEgaLaV8HXhFa9", // Replace with production key on live
      amount: data.amount,
      currency: data.currency,
      name: "EarthXcall",
      description: "Donation",
      order_id: data.id,
      handler: function (response) {
        alert("Payment successful! Razorpay ID: " + response.razorpay_payment_id);
        // Optionally: Send confirmation to Firestore/backend
      },
      prefill: {
        name,
        email,
      },
      theme: {
        color: "#16a34a",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-green-700">Donate Now</h3>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 mb-3 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 mb-3 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Donation Amount (INR)"
        className="w-full p-2 mb-4 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
      >
        Donate
      </button>
    </div>
  );
};

export default DonationForm;
