import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Installo",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <a href="/" style={styles.logo}>Installo</a>
      </header>

      <main style={styles.main}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.meta}>Effective Date: June 25, 2026 &nbsp;|&nbsp; Operated by Tregtify LLC</p>

        <section style={styles.section}>
          <p>
            This Privacy Policy describes how Installo ("we," "us," or "our"), operated by Tregtify LLC,
            collects, uses, and protects information you provide when using tryinstallo.com.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>1. Information We Collect</h2>
          <p>We may collect the following personal information:</p>
          <ul style={styles.ul}>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment and transaction data necessary to process pay-by-bank payments</li>
          </ul>
          <p>
            Information is collected when you create an account, initiate a payment, or otherwise
            interact with our platform.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. How We Use Your Information</h2>
          <ul style={styles.ul}>
            <li>To process and confirm payments</li>
            <li>To send transactional notifications related to your account or transactions</li>
            <li>To provide customer support</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. SMS / Text Messaging</h2>
          <p>
            By providing your phone number on tryinstallo.com, you consent to receive transactional
            SMS text messages from Installo. These messages may include:
          </p>
          <ul style={styles.ul}>
            <li>Payment links</li>
            <li>Invoice notifications</li>
            <li>Payment confirmation alerts</li>
          </ul>
          <p><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any SMS message to unsubscribe. You will receive one confirmation message and no further messages will be sent.</p>
          <p><strong>Help:</strong> Reply <strong>HELP</strong> to any SMS message for assistance, or contact us at <a href="mailto:hello@tryinstallo.com" style={styles.link}>hello@tryinstallo.com</a>.</p>
          <p><strong>Message &amp; Data Rates:</strong> Message and data rates may apply depending on your mobile carrier and plan.</p>
          <p><strong>Message Frequency:</strong> Message frequency varies based on account activity.</p>
          <p>
            <strong>No Third-Party Sharing:</strong> We do not share, sell, or disclose your phone
            number to third parties for marketing purposes. Phone numbers collected for SMS are used
            solely for transactional notifications as described above.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with trusted service providers
            who assist in operating our platform (e.g., payment processors, SMS delivery providers),
            subject to confidentiality obligations. We may also disclose information when required by law.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your information. No method of
            transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by
            contacting us at <a href="mailto:hello@tryinstallo.com" style={styles.link}>hello@tryinstallo.com</a>.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of
            this page reflects the most recent revision.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:hello@tryinstallo.com" style={styles.link}>hello@tryinstallo.com</a>
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Tregtify LLC &nbsp;|&nbsp;
          <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
          &nbsp;|&nbsp;
          <a href="/terms" style={styles.footerLink}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    borderBottom: "1px solid #e5e5e5",
    padding: "16px 32px",
  },
  logo: {
    fontWeight: 700,
    fontSize: "18px",
    color: "#1a1a1a",
    textDecoration: "none",
  },
  main: {
    maxWidth: "740px",
    margin: "0 auto",
    padding: "48px 32px",
    flex: 1,
  },
  h1: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  meta: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "32px",
  },
  h2: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "12px",
  },
  ul: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
  },
  footer: {
    borderTop: "1px solid #e5e5e5",
    padding: "24px 32px",
    textAlign: "center",
    fontSize: "13px",
    color: "#666",
  },
  footerLink: {
    color: "#666",
    textDecoration: "underline",
  },
};
