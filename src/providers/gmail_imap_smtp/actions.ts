import type { ProviderActionDefinition } from "../../core/provider-definition.ts";
import type { MailActionName } from "../../mail/imap-smtp/actions.ts";

import { createMailActions } from "../../mail/imap-smtp/actions.ts";

// Intentionally duplicated as a separate provider. Gmail must not resolve
// through generic_imap at action discovery or execution time.
export const gmailImapSmtpActions: readonly ProviderActionDefinition<MailActionName>[] = createMailActions(
  "gmail_imap_smtp",
  "Gmail (IMAP/SMTP)",
);
