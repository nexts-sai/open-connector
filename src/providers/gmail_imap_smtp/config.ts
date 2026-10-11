import type { MailCredential } from "../../mail/imap-smtp/protocol.ts";
import type { MailRuntimeConfig } from "../../mail/imap-smtp/runtime.ts";

import { ProviderRequestError } from "../provider-runtime.ts";

/** Dedicated Gmail IMAP/SMTP configuration. */
export const gmailImapSmtpRuntimeConfig: MailRuntimeConfig = {
  service: "gmail_imap_smtp",
  displayName: "Gmail (IMAP/SMTP)",
  attachmentFallbackPrefix: "gmail",
  connectAuthMessage:
    "Enable IMAP in Gmail and use the 16-character Google app password, not the normal Google Account password.",
  readCredential(values): MailCredential {
    const email = values.EMAIL_ADDRESS?.trim() ?? "";
    const authorizationCode = (values.EMAIL_PASSWORD ?? "").replaceAll(" ", "").trim();
    const parts = email.split("@");
    if (parts.length !== 2 || !parts[0] || parts[1].toLowerCase() !== "gmail.com" || /\s/.test(email)) {
      throw new ProviderRequestError(400, "Gmail email must be a valid @gmail.com address.");
    }
    if (authorizationCode.length !== 16) {
      throw new ProviderRequestError(400, "Gmail app password must be 16 characters.");
    }
    return {
      email,
      authorizationCode,
      imapHost: "imap.gmail.com",
      smtpHost: "smtp.gmail.com",
    };
  },
};
