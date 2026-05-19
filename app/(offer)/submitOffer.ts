"use server";

import nodemailer from "nodemailer";

export interface OfferData {
  address: string;
  city: string;
  zip: string;
  beds: string;
  baths: string;
  sqft: string;
  condition: string;
  situation: string[];
  timeline: string;
  name: string;
  phone: string;
  email: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitOffer(
  data: OfferData
): Promise<{ success: true; ref: string }> {
  const zip = (data.zip || "MN").slice(0, 5);
  const ref = `QCH-${Math.floor(Math.random() * 9000 + 1000)}-${zip}`;

  const propertyLine = [data.address, data.city, data.zip].filter(Boolean).join(", ");
  const details = [
    data.beds && `${data.beds} bed`,
    data.baths && `${data.baths} bath`,
    data.sqft && `${data.sqft} sqft`,
  ].filter(Boolean).join(" · ");

  await transporter.sendMail({
    from: `"Quick Close MN" <${process.env.SMTP_USER}>`,
    to: "info@quickclosemn.com",
    subject: `New offer request — ${propertyLine || "Unknown address"} [${ref}]`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#15171C">
        <h2 style="margin-bottom:4px">New Cash Offer Request</h2>
        <p style="color:#6E7079;margin-top:0">Ref: <strong>${ref}</strong></p>

        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:140px">Property</td><td style="padding:10px 0;border-bottom:1px solid #eee">${propertyLine || "—"}</td></tr>
          ${details ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Details</td><td style="padding:10px 0;border-bottom:1px solid #eee">${details}</td></tr>` : ""}
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Condition</td><td style="padding:10px 0;border-bottom:1px solid #eee">${data.condition || "—"}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Situation</td><td style="padding:10px 0;border-bottom:1px solid #eee">${data.situation?.join(", ") || "—"}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Timeline</td><td style="padding:10px 0;border-bottom:1px solid #eee">${data.timeline || "—"}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee">${data.name}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee">${data.phone || "—"}</td></tr>
          <tr><td style="padding:10px 0;font-weight:600">Email</td><td style="padding:10px 0">${data.email || "—"}</td></tr>
        </table>

        <p style="color:#6E7079;font-size:13px">Submitted via quickclosemn.com</p>
      </div>
    `,
  });

  return { success: true, ref };
}
