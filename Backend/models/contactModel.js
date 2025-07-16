import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    package: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const contactModel = mongoose.model("Contact", contactSchema);
export default contactModel;
