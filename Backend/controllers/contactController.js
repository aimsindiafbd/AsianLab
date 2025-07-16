import contactModel from "../models/contactModel.js";

// Create new contact
export const createContact = async (req, res) => {
    try {
        const contact = new contactModel(req.body);
        await contact.save();
        res.status(201).json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Create Contact Error:", error);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Optional: get all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find().sort({ date: -1 });
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch", error: error.message });
    }
};
