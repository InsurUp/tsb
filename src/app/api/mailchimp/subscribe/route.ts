import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import crypto from "crypto";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!, // Örn: us21
});

const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const TAG_NAME = "form-welcome"; // Journey tetiklemek için kullanılacak

export async function POST(req: Request) {
  try {
    const { fullName, email, company } = await req.json();

    if (!email) {
      return NextResponse.json({ ok: false, error: "Email gerekli" }, { status: 400 });
    }

    const subscriberHash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");

    // İsim soyisim ayır
    let firstName = fullName;
    let lastName = "";
    if (fullName && fullName.includes(" ")) {
      const parts = fullName.trim().split(" ");
      firstName = parts[0];
      lastName = parts.slice(1).join(" ");
    }

    // Audience’a ekle/güncelle
    await mailchimp.lists.setListMember(LIST_ID, subscriberHash, {
      email_address: email,
      status_if_new: "subscribed",
      merge_fields: {
        FNAME: firstName || "", 
        MMERGE3: company || "", // Şirket
        EMAIL:email || ""
      },
    });

    // Tag ekle
    await mailchimp.lists.updateListMemberTags(LIST_ID, subscriberHash, {
      tags: [{ name: TAG_NAME, status: "active" }],
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
 