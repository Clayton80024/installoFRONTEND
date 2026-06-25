import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Installo",
  robots: { index: false, follow: false },
};

export default function TermsOfService() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <a href="/" style={styles.logo}>Installo</a>
      </header>

      <main style={styles.main}>
        <h1 style={styles.h1}>Terms of Service</h1>
        <p style={styles.meta}>Effective Date: June 25, 2026 &nbsp;|&nbsp; Operated by Tregtify LLC</p>

        <section style={styles.section}>
          <p>
            Please read these Terms of Service ("Terms") carefully before using Installo
            ("Service"), operated by Tregtify LLC. By accessing or using the Service at
            tryinstallo.com, you agree to be bound by these Terms.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>1. Description of Service</h2>
          <p>
            Installo is a pay-by-bank payment platform designed for service businesses. It enables
            businesses to collect payments from customers via bank transfer and sends transactional
            notifications related to those payments.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and capable of entering into a binding agreement to
            use the Service. By using Installo, you represent that you meet these requirements.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. SMS / Text Messaging Terms</h2>
          <p>
            By providing your phone number when creating an account or completing a transaction on
            tryinstallo.com, you consent to receive transactional SMS text messages from Installo.
            These messages may include payment links, invoice notifications, and payment confirmation
            alerts.
          </p>
          <p><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any SMS message at any time to unsubscribe. You will receive one final confirmation message confirming your opt-out, and no further SMS messages will be sent to that number.</p>
          <p><strong>Help:</strong> Reply <strong>HELP</strong> to any SMS message for assistance, or contact us at <a href="mailto:hello@tryinstallo.com" style={styles.link}>hello@tryinstallo.com</a>.</p>
          <p><strong>Message Frequency:</strong> Message frequency varies based on your account and transaction activity.</p>
          <p><strong>Message &amp; Data Rates:</strong> Message and data rates may apply. Please check with your mobile carrier for details.</p>
          <p>
            <strong>No Marketing SMS:</strong> We only send transactional SMS messages. We do not
            send promotional or marketing text messages.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. User Responsibilities</h2>
          <ul style={styles.ul}>
            <li>You agree to provide accurate and current information when using the Service.</li>
            <li>You are responsible for maintaining the security of your account credentials.</li>
            <li>You agree not to use the Service for unlawful purposes.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Tregtify LLC shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of the
            Service.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service
            after changes are posted constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>7. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of
            Georgia, USA, without regard to its conflict of law provisions.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>8. Contact Us</h2>
          <p>
            For questions about these Terms, please contact us at:{" "}
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
