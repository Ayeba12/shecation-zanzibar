# Booking flow: where the data goes

When a guest finishes step two of the booking form, the site calls `POST /api/book`, which

1. emails the booking to `shereconnects@gmail.com` through Resend, and
2. appends a row to a Google Sheet through a small Apps Script web app.

Step three then shows the bank details and the WhatsApp group link. Dinma or Bokun confirm the
deposit in the group. Nothing is charged online.

## 1. Email (Resend)

1. Sign in at https://resend.com.
2. Create an API key (Dashboard > API Keys) and copy it.
3. Add it to Vercel: Project > Settings > Environment Variables > `RESEND_API_KEY`.

The sending domain **hello.she-reconnects.net** is verified in Resend, so emails go out from
`SHE-CATION Bookings <bookings@hello.she-reconnects.net>` (set in `BOOKING_FROM_EMAIL`) and can be
delivered to any address, including shereconnects@gmail.com. If the domain ever changes, verify the
new one in Resend (Domains > Add domain, then add the DNS records it gives you) and update
`BOOKING_FROM_EMAIL` in Vercel.

## 2. Google Sheet (Apps Script)

1. Create a Google Sheet called **SHE-CATION 4.0 bookings**. In row 1 enter these headers:

   `Submitted | Name | Email | Phone | Country | Room sharing | Terms | Deposit`

2. In the sheet, open **Extensions > Apps Script**, delete the sample code and paste:

   ```js
   const SECRET = "paste-a-long-random-string-here";

   function doPost(e) {
     const b = JSON.parse(e.postData.contents);
     if (b.secret !== SECRET) {
       return ContentService.createTextOutput("forbidden").setMimeType(ContentService.MimeType.TEXT);
     }
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     sheet.appendRow([
       b.submittedAt, b.name, b.email, b.phone, b.country, b.roomShare, b.terms, b.deposit,
     ]);
     return ContentService.createTextOutput("ok").setMimeType(ContentService.MimeType.TEXT);
   }
   ```

3. Click **Deploy > New deployment**. Type: **Web app**. Execute as: **Me**. Who has access:
   **Anyone**. Deploy, authorise when asked, and copy the **Web app URL**.
4. Add to Vercel: `SHEETS_WEBHOOK_URL` = that URL, and `SHEETS_WEBHOOK_SECRET` = the same random
   string you put in `SECRET`.

If you edit the script later, create a **new deployment** (or "Manage deployments > Edit > New
version"), otherwise the URL keeps serving the old code.

## 3. Bank details and WhatsApp group

These are content, not secrets. Edit `payment` in `src/lib/content.ts`:

- `whatsappGroup`: the group invite link (WhatsApp group > Invite via link).
- `uk`: account name, bank, sort code, account number.
- `ng`: optional naira account. Leave `accountNumber` empty to show only the "contact the
  organisers for the rate" note.

## Local development

Copy `.env.example` to `.env.local` and fill in the values. Without them, `/api/book` returns an
error and the form shows a message with the WhatsApp numbers as a fallback.

## Marking deposits as paid

The sheet row starts with `Deposit = Pending`. When proof arrives in the group, change it to
`Paid` by hand and note the date in a new column if useful. The sheet is the single record of who
has booked and who has paid.
