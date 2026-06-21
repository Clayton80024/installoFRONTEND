export default function ChaseMoney() {
  return (
    <section className="chase">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow"><span className="pip"></span>After the job&apos;s done</span>
          <h2 className="sec-title">You finished the work. Now you&apos;re chasing the money.</h2>
          <p className="sec-sub">
            Venmo, Zelle, PayPal, a check in the mail — every one of them leaves you waiting on
            the customer to remember to hit send. It can take days. Sometimes weeks.
          </p>
        </div>

        <div className="vs">
          {/* Left: the chaos */}
          <article className="vs-card vs-old">
            <span className="vs-tag">The usual way</span>
            <h3 className="vs-h">&ldquo;I&apos;ll send it over later.&rdquo;</h3>
            <p className="vs-owed">You&apos;re owed <b>$240</b> — stuck across five different apps.</p>

            <div className="apps">
              <div className="app">
                <span className="app-ic venmo">V</span>
                <span>
                  <span className="app-name">Venmo</span>
                  <span className="app-stat"><span className="dotp"></span>Pending</span>
                </span>
                <span className="app-spacer"></span>
                <span className="app-time">2 days</span>
              </div>

              <div className="app">
                <span className="app-ic zelle">Z</span>
                <span>
                  <span className="app-name">Zelle</span>
                  <span className="app-stat"><span className="dotp"></span>Waiting on client</span>
                </span>
                <span className="app-spacer"></span>
                <span className="app-time">4 days</span>
              </div>

              <div className="app">
                <span className="app-ic paypal">
                  <b className="p1">P</b><b className="p2">P</b>
                </span>
                <span>
                  <span className="app-name">PayPal</span>
                  <span className="app-stat"><span className="dotp"></span>Not sent yet</span>
                </span>
                <span className="app-spacer"></span>
                <span className="app-time">5 days</span>
              </div>

              <div className="app">
                <span className="app-ic cash">$</span>
                <span>
                  <span className="app-name">Cash App</span>
                  <span className="app-stat"><span className="dotp"></span>&ldquo;Sending tonight&rdquo;</span>
                </span>
                <span className="app-spacer"></span>
                <span className="app-time">3 days</span>
              </div>

              <div className="app">
                <span className="app-ic check">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M5.5 10.5h5M5.5 13.5h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                    <path d="M15 14.5c.9 0 1.6-.6 1.6-1.3 0-1.7-3.2-1-3.2-2.6 0-.7.7-1.3 1.6-1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15 8.6v6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span>
                  <span className="app-name">Paper check</span>
                  <span className="app-stat"><span className="dotp"></span>In the mail</span>
                </span>
                <span className="app-spacer"></span>
                <span className="app-time">1 wk+</span>
              </div>
            </div>

            <div className="vs-foot">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#C0682B" strokeWidth="1.7"/>
                <path d="M12 7.5V12l3 2" stroke="#C0682B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Still waiting on the customer to hit send.
            </div>
          </article>

          {/* Center arrow */}
          <div className="vs-mid">
            <span className="vs-arc">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          {/* Right: Installo */}
          <article className="vs-card vs-new">
            <span className="vs-tag">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M5 19h14M6 16l-2-9 5 4 3-7 3 7 5-4-2 9" stroke="#9BEFC8" strokeWidth="1.7" strokeLinejoin="round"/>
              </svg>
              You come first
            </span>
            <h3 className="vs-h">Send a link. Get paid first.</h3>
            <p className="vs-sub">No app for your customer to download, no account to make, nobody to chase.</p>

            <div className="vs-flow">
              <div className="vs-step">
                <span className="vs-num">1</span>
                <span className="vs-st">You text a <b>secure pay-by-bank link</b></span>
              </div>
              <div className="vs-line"></div>
              <div className="vs-step">
                <span className="vs-num">2</span>
                <span className="vs-st">They tap and <b>pay from their bank</b></span>
              </div>
            </div>

            <div className="vs-paid">
              <span className="pchk">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>
                <span className="pamt">$240 paid</span>
                <span className="pset" style={{ display: "block" }}>Settles to your bank in 1–2 days · $0 fees</span>
              </span>
            </div>

            <div className="vs-foot">You get paid first — not whenever the customer gets around to it.</div>
          </article>
        </div>
      </div>
    </section>
  );
}
