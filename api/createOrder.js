// api/createOrder.js
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_sEgaLaV8HXhFa9",
  key_secret: "MdnEOzwJDlcwxdwD3lvvLeUH",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { amount, user } = req.body;

  if (!amount || !user) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return res.status(200).json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ error: "Order creation failed" });
  }
}
