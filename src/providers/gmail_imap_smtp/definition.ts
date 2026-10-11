import type { ProviderDefinition } from "../../core/types.ts";

import { gmailImapSmtpActions } from "./actions.ts";

export const nodeOnly = true;

export const provider: ProviderDefinition = {
  service: "gmail_imap_smtp",
  displayName: "Gmail (IMAP/SMTP)",
  description:
    "Connect Gmail over IMAP/SMTP with a Gmail address and a 16-character Google app password.",
  categories: ["Communication", "Productivity"],
  authTypes: ["custom_credential"],
  auth: [
    {
      type: "custom_credential",
      fields: [
        {
          key: "EMAIL_ADDRESS",
          label: "Gmail Address",
          inputType: "text",
          required: true,
          secret: false,
          placeholder: "user@gmail.com",
          description: "The Gmail address to connect.",
        },
        {
          key: "EMAIL_PASSWORD",
          label: "Google App Password",
          inputType: "password",
          required: true,
          secret: true,
          placeholder: "16-character app password",
          description: "A Google app password generated after enabling 2-Step Verification.",
        },
      ],
      testAction: {
        actionName: "list_folders",
        input: {},
      },
    },
  ],
  homepageUrl: "https://support.google.com/accounts/answer/185833",
  actions: gmailImapSmtpActions,
};
