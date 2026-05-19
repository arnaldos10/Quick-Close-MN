"use server";

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

export async function submitOffer(
  data: OfferData
): Promise<{ success: true; ref: string }> {
  console.log("[submitOffer]", data);

  // Wire up your CRM / email / DB here.
  // e.g. await sendLeadEmail(data);
  //      await db.insert(leads).values({ ...data, createdAt: new Date() });

  const zip = (data.zip || "MN").slice(0, 5);
  const ref = `QCH-${Math.floor(Math.random() * 9000 + 1000)}-${zip}`;
  return { success: true, ref };
}
