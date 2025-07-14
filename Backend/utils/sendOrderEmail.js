import nodemailer from "nodemailer";

const sendOrderEmail = async ({
  to,
  name,
  items,
  amount,
  userId,
  razorpay_payment_id,
  razorpay_order_id
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
         user: 'byash0720@gmail.com',
        pass: 'bigp npay rsbo vbkd'
      }
    });

    const mailOptions = {
      from: `"Asian Labs" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Your Test Booking Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hello ${name || "Customer"},</h2>
          <p>Your test booking has been confirmed. Below are your order details:</p>

          <h3>🧪 Test Package Summary</h3>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <thead>
              <tr style="background-color: #f2f2f2;">
                <th>Test Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${items
                .map(
                  (item) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>₹${item.price}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>

          <p><strong>Total Amount:</strong> ₹${amount}</p>
          <p><strong>Booking Date:</strong> ${new Date().toLocaleString("en-IN")}</p>
          <br/>
          <p>Thank you for choosing <strong>Asian Labs</strong>. Stay healthy and safe!</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Confirmation email sent to:", to);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

export default sendOrderEmail;
