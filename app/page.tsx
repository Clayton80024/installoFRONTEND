"use client";

import { useEffect } from "react";
import Image from "next/image";
import ChaseMoney from "@/components/sections/ChaseMoney";

export default function Home() {
  useEffect(() => {
    // Nav border on scroll
    const nav = document.getElementById("nav");
    function onScroll() {
      nav?.classList.toggle("scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Showcase: scroll-pinned horizontal track
    const showcaseEl = document.getElementById("stories");
    if (showcaseEl) {
      const showcase = showcaseEl as HTMLElement;
      const sticky = showcase.querySelector(".sc-sticky") as HTMLElement;
      const track = document.getElementById("scTrack") as HTMLElement;
      const fill = document.getElementById("scFill") as HTMLElement;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let maxX = 0;

      function pinned() {
        return window.matchMedia("(min-width: 941px)").matches && !reduce;
      }
      function layout() {
        if (!pinned()) {
          showcase.style.height = "";
          track.style.transform = "";
          maxX = 0;
          if (fill) fill.style.width = "0%";
          return;
        }
        maxX = Math.max(0, track.scrollWidth - window.innerWidth);
        showcase.style.height = window.innerHeight + maxX + "px";
        update();
      }
      function update() {
        if (!pinned()) return;
        const rect = showcase.getBoundingClientRect();
        const dist = showcase.offsetHeight - window.innerHeight;
        const p = dist > 0 ? Math.min(1, Math.max(0, -rect.top / dist)) : 0;
        track.style.transform = "translateX(" + -p * maxX + "px)";
        if (fill) fill.style.width = p * 100 + "%";
      }

      if ("IntersectionObserver" in window) {
        new IntersectionObserver(
          (es) => {
            es.forEach((e) => {
              if (e.isIntersecting) sticky.classList.add("in");
            });
          },
          { threshold: 0.18 }
        ).observe(sticky);
      } else {
        sticky.classList.add("in");
      }

      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", layout);
      layout();
      window.addEventListener("load", layout);
    }

    // How-it-works: trigger demo when scrolled into view
    const flow = document.querySelector(".flow") as HTMLElement;
    if (flow) {
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(
          (es) => {
            es.forEach((e) => {
              if (e.isIntersecting) flow.classList.add("in");
            });
          },
          { threshold: 0.3 }
        ).observe(flow);
      } else {
        flow.classList.add("in");
      }
    }

    // Platform feat-rows: animate in on scroll
    const featRows = document.querySelectorAll(".feat-row");
    if (featRows.length && "IntersectionObserver" in window) {
      const ro = new IntersectionObserver(
        (es) => { es.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("in"); }); },
        { threshold: 0.25 }
      );
      featRows.forEach((r) => ro.observe(r));
    } else {
      featRows.forEach((r) => r.classList.add("in"));
    }

    // Hero pay-link: cycle Request → Paying → Paid
    const stage = document.querySelector(".visual-stage") as HTMLElement;
    if (stage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const states = ["request", "paying", "paid"];
      const durs: Record<string, number> = { request: 2700, paying: 1700, paid: 2700 };
      let i = 0;
      let timer: ReturnType<typeof setTimeout>;
      function next() {
        i = (i + 1) % states.length;
        stage.setAttribute("data-state", states[i]);
        timer = setTimeout(next, durs[states[i]]);
      }
      timer = setTimeout(next, durs.request);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function joinEarly(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.classList.add("done");
  }

  return (
    <>
      {/* Nav */}
      <nav className="nav" id="nav">
        <div className="wrap nav-in">
          <a href="#top" className="wm" style={{ fontSize: 23 }}>
            Installo<span className="dot">.</span>
          </a>
          <div className="nav-links">
            <a href="#how" className="nav-link">How it works</a>
            <a href="#why" className="nav-link">Why pay-by-bank</a>
            <a href="#access" className="nav-link">Pricing</a>
          </div>
          <div className="nav-right">
            <a href="#access" className="btn sm">Start free</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow rise d1">
              <span className="pip"></span>Pay-by-bank, built for service businesses
            </span>
            <h1 className="hero-h rise d2">
              Get paid by bank, <em>sent in seconds.</em>
            </h1>
            <p className="hero-sub rise d3">
              Installo turns any payment into a secure link you get paid by bank, sent in seconds. Your customer pays straight from their bank&nbsp;and you keep 100%, with no card fees.
            </p>

            <ul className="promises rise d3">
              <li>
                <span className="pc">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Money lands in your bank in 1–2 business days
              </li>
              <li>
                <span className="pc">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Zero card fees — keep everything you charge
              </li>
              <li>
                <span className="pc">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Send a payment link in seconds, and get paid by bank
              </li>
            </ul>

            <form className="ea rise d4" id="access" onSubmit={joinEarly}>
              <div className="ea-row">
                <input type="email" required placeholder="you@yourbusiness.com" aria-label="Work email" />
                <button type="submit" className="btn">Start free</button>
              </div>
              <div className="ea-fine">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#9AA8A2" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#9AA8A2" strokeWidth="1.9"/></svg>
                Free to send — your customers pay $0 in fees.
              </div>
              <div className="social">Used by HVAC, lawn, plumbing &amp; painting crews across Georgia.</div>
              <div className="ea-ok">
                <span className="ok-ic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span>You&apos;re all set. Check your email to finish setting up your account.</span>
              </div>
            </form>
          </div>

          {/* Hero visual */}
          <div className="hero-visual rise d3">
            <div className="visual-stage" data-state="request">
              <div className="sms">
                <div className="sms-from">Maple Home Services · now</div>
                <div className="sms-text">
                  Thanks again! Here&apos;s your secure payment link — <a href="#access">installo.pay/inv-240</a>
                </div>
              </div>

              <div className="pay-stack">
                {/* Slide 1 — payment request */}
                <div className="face face-req">
                  <div className="pay-card">
                    <div className="pc-biz">
                      <div className="pc-logo">M</div>
                      <div>
                        <div className="pc-biz-name">Maple Home Services</div>
                        <div className="pc-secured">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#7C887F" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#7C887F" strokeWidth="1.9"/></svg>
                          Verified business
                        </div>
                      </div>
                    </div>
                    <div className="pc-divider"></div>
                    <div className="pc-req-label">Payment request</div>
                    <div className="pc-amount"><span className="cur">$</span>240</div>
                    <div className="pc-note">Completed job — service &amp; materials</div>
                    <button className="pc-cta" type="button">
                      <span className="tap-ring"></span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 9.5 12 4l8 5.5" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3.5 20.5h17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                      Pay with bank
                      <svg className="cursor" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 2.5l13.5 6.8-5.8 2.1L9 18 5 2.5z" fill="#0B1411" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                    </button>
                    <div className="pc-methods">
                      <span className="pc-chip">No card fees</span>
                      <span className="pc-chip">Settles in 1–2 days</span>
                    </div>
                    <div className="pc-foot">
                      <span className="pc-foot-sec">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#9AA8A2" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#9AA8A2" strokeWidth="1.9"/></svg>
                        Bank-grade encryption · Powered by Plaid
                      </span>
                      <span className="pc-foot-brand">
                        Secured by <span className="wm" style={{ fontSize: 13, fontWeight: 730 }}>Installo<span className="dot">.</span></span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Slide 2 — connecting to bank */}
                <div className="face face-pay">
                  <div className="pay-card">
                    <div className="pc-biz">
                      <div className="pc-logo">M</div>
                      <div>
                        <div className="pc-biz-name">Maple Home Services</div>
                        <div className="pc-secured">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#7C887F" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#7C887F" strokeWidth="1.9"/></svg>
                          Verified business
                        </div>
                      </div>
                    </div>
                    <div className="pc-divider"></div>
                    <div className="pay-state">
                      <div className="spinner"></div>
                      <div className="pay-state-t">Connecting securely…</div>
                      <div className="pay-state-s">Authorizing $240 from your bank</div>
                    </div>
                    <div className="pc-foot">
                      <span className="pc-foot-sec">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#9AA8A2" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#9AA8A2" strokeWidth="1.9"/></svg>
                        Bank-grade encryption · Powered by Plaid
                      </span>
                    </div>
                  </div>
                </div>

                {/* Slide 3 — paid */}
                <div className="face face-paid">
                  <div className="pay-card">
                    <div className="paid-wrap">
                      <div className="paid-check">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div className="paid-t">Payment sent</div>
                      <div className="paid-amt"><span style={{ fontSize: 24, fontWeight: 620, color: "var(--muted)", marginRight: 2 }}>$</span>240</div>
                      <div className="paid-sub">Maple Home Services has been paid</div>
                      <div className="paid-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 9.5 12 4l8 5.5" stroke="#0B6E4A" strokeWidth="1.8" strokeLinejoin="round"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3.5 20.5h17" stroke="#0B6E4A" strokeWidth="1.8" strokeLinecap="round"/></svg>
                        Settles to their bank in 1–2 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slide-dots"><i></i><i></i><i></i></div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust line */}
      <div className="trust">
        <div className="wrap trust-in">
          <span className="trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 2.5v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V5.5L12 3z" stroke="#7C887F" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#7C887F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Bank-grade encryption
          </span>
          <span className="trust-sep"></span>
          <span className="trust-item">Account connections powered by Plaid</span>
          <span className="trust-sep"></span>
          <span className="trust-item">ACH settlement, 1–2 business days</span>
          <span className="trust-sep"></span>
          <span className="trust-item">No card networks, no card fees</span>
        </div>
      </div>

      {/* Chase Money */}
      <ChaseMoney />

      {/* How it works */}
      <section className="how" id="how">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="pip"></span>How it works</span>
            <h2 className="sec-title">Get paid in three simple steps.</h2>
            <p className="sec-sub">Type an amount, your customer pays by bank, and the deposit&apos;s on its way — here&apos;s the whole flow.</p>
          </div>

          <div className="flow" id="why">
            {/* Step 1 */}
            <div className="flow-step">
              <div className="device">
                <div className="device-frame">
                  <div className="island"></div>
                  <div className="device-screen">
                    <div className="scr s1">
                      <div className="scr-bar">
                        <span>9:41</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                          <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                        </span>
                      </div>
                      <div className="scr-body">
                        <div className="s-apphead">
                          <span className="s-back"><svg width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M7.5 1.5 1.5 7.5l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                          <span className="s-title">New request</span>
                        </div>
                        <div>
                          <div className="s-label">Amount</div>
                          <div className="s-amt"><span className="num"><span className="cur">$</span><span className="dg">2</span><span className="dg">4</span><span className="dg">0</span></span><span className="s-caret"></span></div>
                        </div>
                        <div className="s-client">
                          <span className="s-av" style={{ background: "#2E7D5B" }}>JM</span>
                          <span><span className="s-name" style={{ display: "block" }}>Jordan Miller</span><span className="s-sub">Recurring · Lawn care</span></span>
                          <span className="s-check-mini"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E7F6EF"/><path d="M7.5 12.5l3 3 6-6.5" stroke="#0E9F6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                        </div>
                        <div className="s-note">Weekly lawn service — May</div>
                        <div className="s-fill"></div>
                        <div className="s-btn">
                          Send payment link
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flow-meta">
                <div className="flow-n">01</div>
                <h3 className="flow-t">Type the amount, pick a client</h3>
                <p className="flow-b">Enter what you&apos;re owed and choose a customer. Send a secure pay-by-bank link by text in <b>about ten seconds</b>.</p>
              </div>
            </div>

            <div className="flow-arrow">
              <svg width="30" height="20" viewBox="0 0 30 20" fill="none"><path d="M1 10h26M21 3l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            {/* Step 2 */}
            <div className="flow-step">
              <div className="device">
                <div className="device-frame">
                  <div className="island"></div>
                  <div className="device-screen">
                    <div className="scr s2">
                      <div className="scr-bar">
                        <span>9:41</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                          <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                        </span>
                      </div>
                      <div className="scr-body">
                        <div className="s2-top">
                          <span className="s-av" style={{ background: "var(--accent)", boxShadow: "0 4px 10px rgba(14,159,110,.3)" }}>M</span>
                          <span><span className="s-name" style={{ display: "block" }}>Maple Home Services</span><span className="s-sub">requests a payment</span></span>
                        </div>
                        <div className="s2-amt">
                          <span className="s-label">Amount due</span>
                          <div className="big"><span className="cur">$</span>240</div>
                        </div>
                        <div className="s-label" style={{ marginTop: 2 }}>Paying from</div>
                        <div className="s-bank">
                          <span className="tile">BoA</span>
                          <span><span className="s-name" style={{ display: "block" }}>Bank of America</span><span className="s-sub">Checking ••1234</span></span>
                          <span className="s-check-mini"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E7F6EF"/><path d="M7.5 12.5l3 3 6-6.5" stroke="#0E9F6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                        </div>
                        <div className="s-fill"></div>
                        <div className="s-secure">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#9AA8A2" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#9AA8A2" strokeWidth="1.9"/></svg>
                          Bank-grade encryption · Plaid
                        </div>
                        <div className="s-btn">Pay $240 from bank</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flow-meta">
                <div className="flow-n">02</div>
                <h3 className="flow-t">They pay by bank</h3>
                <p className="flow-b">Your customer taps the link and pays straight from their bank with Plaid — <b>no card, no app, no account</b>.</p>
              </div>
            </div>

            <div className="flow-arrow">
              <svg width="30" height="20" viewBox="0 0 30 20" fill="none"><path d="M1 10h26M21 3l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            {/* Step 3 */}
            <div className="flow-step">
              <div className="device">
                <div className="device-frame">
                  <div className="island"></div>
                  <div className="device-screen">
                    <div className="scr s3">
                      <div className="scr-bar">
                        <span>9:41</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                          <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                        </span>
                      </div>
                      <div className="scr-body">
                        <div className="s-check">
                          <svg width="38" height="38" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div className="s-paid-l">Payment received</div>
                        <div className="s-paid-amt"><span className="cur">$</span>240</div>
                        <div className="s-paid-from">from Jordan Miller · Lawn care</div>
                        <div className="s-settle">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 9.5 12 4l8 5.5" stroke="#0B6E4A" strokeWidth="1.8" strokeLinejoin="round"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3.5 20.5h17" stroke="#0B6E4A" strokeWidth="1.8" strokeLinecap="round"/></svg>
                          Deposits to your bank · 1–2 days
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flow-meta">
                <div className="flow-n">03</div>
                <h3 className="flow-t">You get paid</h3>
                <p className="flow-b">The money settles to your account by ACH in <b>1–2 business days</b> — with zero card fees taken out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform — More than a payment link */}
      <section className="plat" id="platform">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="pip"></span>More than a payment link</span>
            <h2 className="sec-title">Everything your crew needs.</h2>
            <p className="sec-sub">Installo isn&apos;t just a link — it&apos;s everything you need to get paid, without hiring anyone.</p>
          </div>

          <div className="feat-rows">

            {/* ROW 1 — Autopay */}
            <div className="feat-row">
              <div className="feat-copy">
                <div className="feat-ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 11a8 8 0 1 0-.6 3.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><path d="M20 5.5V11h-5.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feat-kicker">Autopay</div>
                <h3 className="feat-t">Stop texting clients to pay you.</h3>
                <p className="feat-b">Set up a charge once. Installo bills your client on the day it&apos;s due and the money just shows up — <b>you don&apos;t lift a finger</b>.</p>
                <ul className="feat-pts">
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Runs on time, every time</li>
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>No reminders, no awkward follow-ups</li>
                </ul>
              </div>
              <div className="feat-stage">
                <div className="pdev">
                  <div className="device-frame">
                    <div className="island"></div>
                    <div className="device-screen">
                      <div className="scr">
                        <div className="scr-bar">
                          <span>9:41</span>
                          <span style={{display:"flex",alignItems:"center",gap:6}}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                            <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                          </span>
                        </div>
                        <div className="scr-body" style={{gap:11,position:"relative"}}>
                          <div className="p-top">
                            <span className="s-title">Autopay</span>
                            <span className="p-toggle"></span>
                          </div>
                          <div className="p-pill"><span className="lz"></span>Collecting from 3 clients</div>
                          <div className="p-charge">
                            <span className="p-ch-ic done"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span><span className="p-ch-name">Jordan Miller</span><span className="p-ch-sub">Weekly lawn care</span></span>
                            <span className="p-ch-amt">$240<small className="done">Charged</small></span>
                          </div>
                          <div className="p-charge">
                            <span className="p-ch-ic done"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span><span className="p-ch-name">Sarah K.</span><span className="p-ch-sub">Monthly cleaning</span></span>
                            <span className="p-ch-amt">$180<small className="done">Charged</small></span>
                          </div>
                          <div className="p-charge pa-flip">
                            <span className="p-ch-ic wait"><svg className="pa-check" style={{opacity:0}} width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span><span className="p-ch-name">Marcus D.</span><span className="p-ch-sub">Weekly lawn care</span></span>
                            <span className="p-ch-amt">$320<small className="wait pa-amt-wait">Due today</small><small className="done pa-amt-done" style={{opacity:0}}>Charged</small></span>
                          </div>
                          <div className="s-fill"></div>
                          <div className="pa-toast" style={{position:"absolute",left:20,right:20,bottom:18,display:"flex",alignItems:"center",gap:9,background:"#0B1411",color:"#fff",borderRadius:13,padding:"11px 13px",boxShadow:"0 14px 30px rgba(11,20,17,.28)",opacity:0}}>
                            <span style={{width:22,height:22,borderRadius:"50%",background:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span style={{fontSize:12.5,fontWeight:600}}>Collected $320 from Marcus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 — Live Dashboard */}
            <div className="feat-row">
              <div className="feat-copy">
                <div className="feat-ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 19V5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><path d="M4 19h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><path d="M7.5 14.5l3.5-4 3 2.5 4.5-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feat-kicker">Live Dashboard</div>
                <h3 className="feat-t">Always know who paid.</h3>
                <p className="feat-b">Open Installo and see what&apos;s <b>paid, pending, and coming in</b> this week — updated the second a client pays. No spreadsheet, no guessing.</p>
                <ul className="feat-pts">
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Live totals for the week</li>
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>See every payment the moment it lands</li>
                </ul>
              </div>
              <div className="feat-stage">
                <div className="pdev">
                  <div className="device-frame">
                    <div className="island"></div>
                    <div className="device-screen">
                      <div className="scr">
                        <div className="scr-bar">
                          <span>9:41</span>
                          <span style={{display:"flex",alignItems:"center",gap:6}}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                            <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                          </span>
                        </div>
                        <div className="scr-body" style={{gap:9}}>
                          <div className="p-top"><span className="s-title">Dashboard</span></div>
                          <div className="s-label">Collected this week</div>
                          <div className="p-dash-amt"><span className="cur">$</span>2,480</div>
                          <span className="p-delta pd-delta">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M6 11l6-6 6 6" stroke="#0B6E4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            +$240 just now
                          </span>
                          <div className="p-bars pd-bars">
                            <i style={{"--h":"34%"} as React.CSSProperties}></i>
                            <i style={{"--h":"58%"} as React.CSSProperties}></i>
                            <i style={{"--h":"42%"} as React.CSSProperties}></i>
                            <i className="on" style={{"--h":"80%"} as React.CSSProperties}></i>
                            <i style={{"--h":"50%"} as React.CSSProperties}></i>
                            <i className="on" style={{"--h":"68%"} as React.CSSProperties}></i>
                            <i style={{"--h":"38%"} as React.CSSProperties}></i>
                          </div>
                          <div className="s-label" style={{marginTop:4}}>Recent</div>
                          <div className="p-row pd-newrow">
                            <span className="s-av" style={{background:"#2E7D5B",width:32,height:32,borderRadius:10}}>JM</span>
                            <span><span className="p-rname">Jordan Miller</span><span className="p-rsub">just now</span></span>
                            <span className="p-rstat paid">Paid · $240</span>
                          </div>
                          <div className="p-row">
                            <span className="s-av" style={{background:"#9AA8A2",width:32,height:32,borderRadius:10}}>DR</span>
                            <span><span className="p-rname">Dana R.</span><span className="p-rsub">waiting on client</span></span>
                            <span className="p-rstat pend">Pending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3 — Recurring Schedules */}
            <div className="feat-row">
              <div className="feat-copy">
                <div className="feat-ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.9"/><path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><path d="M9 14.5l1.8 1.8L15 12.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feat-kicker">Recurring Schedules</div>
                <h3 className="feat-t">Never write the same invoice twice.</h3>
                <p className="feat-b">Got a weekly or monthly client? Set the day and the amount once, and <b>Installo sends the bill for you</b> — this week, next week, every week.</p>
                <ul className="feat-pts">
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Set it once, it runs forever</li>
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Edit or pause anytime</li>
                </ul>
              </div>
              <div className="feat-stage">
                <div className="pdev">
                  <div className="device-frame">
                    <div className="island"></div>
                    <div className="device-screen">
                      <div className="scr">
                        <div className="scr-bar">
                          <span>9:41</span>
                          <span style={{display:"flex",alignItems:"center",gap:6}}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                            <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                          </span>
                        </div>
                        <div className="scr-body" style={{gap:12}}>
                          <div className="p-top">
                            <span className="s-title">Schedule</span>
                            <span className="p-pill pr-toggle"><span className="lz"></span>Active</span>
                          </div>
                          <div className="p-sched">
                            <div className="p-sched-top">
                              <span className="s-av" style={{background:"#2E7D5B"}}>JM</span>
                              <span><span className="p-rname">Jordan Miller</span><span className="p-rsub">Lawn care</span></span>
                            </div>
                            <div className="p-every">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15" rx="3" stroke="#0B6E4A" strokeWidth="1.9"/><path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="#0B6E4A" strokeWidth="1.9" strokeLinecap="round"/></svg>
                              Every Monday · $80
                            </div>
                          </div>
                          <div className="s-label">Next charges</div>
                          <div className="p-dates">
                            <div className="p-date pr-date"><span className="dnum">1</span><span className="dt">Mon, Jun 23</span><span className="nx">Next</span></div>
                            <div className="p-date pr-date"><span className="dnum">2</span><span className="dt">Mon, Jun 30</span></div>
                            <div className="p-date pr-date"><span className="dnum">3</span><span className="dt">Mon, Jul 7</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 4 — Branded Invoices */}
            <div className="feat-row">
              <div className="feat-copy">
                <div className="feat-ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.9"/><circle cx="12" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.7"/><path d="M9 16.5h6M10 13.5h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/></svg>
                </div>
                <div className="feat-kicker">Branded Invoices</div>
                <h3 className="feat-t">Look like a real business.</h3>
                <p className="feat-b">Your name and logo on every request. Your client gets <b>a real invoice by text</b> — not a random link they&apos;re scared to tap.</p>
                <ul className="feat-pts">
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Your logo and business name</li>
                  <li><span className="fc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#0E9F6E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Sent by text in one tap</li>
                </ul>
              </div>
              <div className="feat-stage">
                <div className="pdev">
                  <div className="device-frame">
                    <div className="island"></div>
                    <div className="device-screen">
                      <div className="scr">
                        <div className="scr-bar">
                          <span>9:41</span>
                          <span style={{display:"flex",alignItems:"center",gap:6}}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="7" width="3" height="4" rx="1" fill="#0B1411"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#0B1411"/><rect x="9" y="2" width="3" height="9" rx="1" fill="#0B1411"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#B2BEB6"/></svg>
                            <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke="#0B1411" strokeOpacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill="#0B1411"/><rect x="20.5" y="3.5" width="2" height="4" rx="1" fill="#0B1411" fillOpacity="0.5"/></svg>
                          </span>
                        </div>
                        <div className="scr-body" style={{gap:13}}>
                          <div className="p-top"><span className="s-title">Send invoice</span></div>
                          <div className="p-inv">
                            <div className="p-inv-head">
                              <span className="p-inv-logo">M</span>
                              <span>
                                <span className="p-inv-biz">Maple Home Services</span>
                                <span className="p-inv-ver">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#7C887F" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#7C887F" strokeWidth="1.9"/></svg>
                                  Verified business
                                </span>
                              </span>
                            </div>
                            <div className="p-inv-line"><span>Weekly lawn service — May</span><b>$240</b></div>
                            <div className="p-inv-total"><span className="lab">Total due</span><span className="amt">$240</span></div>
                          </div>
                          <div className="s-fill"></div>
                          <div className="s-btn pb-btn">Send by text
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <div className="p-sms pb-sms">
                            <span className="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span className="tx">Sent to Jordan Miller — they got your invoice by text.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <p className="plat-cta">All features included from day one. <a href="#access">Start free <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></p>
        </div>
      </section>

      {/* Showcase */}
      <section className="showcase" id="stories">
        <div className="sc-sticky">
          <div className="sc-head">
            <div className="sc-h-l">
              <span className="eyebrow"><span className="pip"></span>Real businesses on Installo</span>
              <h2 className="sc-title">The crews already getting paid by bank.</h2>
              <p className="sc-sub">HVAC, lawn care, painting, plumbing — service businesses across Georgia run their payments on Installo. No card fees, money in the bank in a day or two.</p>
            </div>
            <div className="sc-h-r">
              <div className="sc-hint">
                Scroll to explore
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#9AA8A2" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="sc-progress"><i id="scFill"></i></div>
            </div>
          </div>

          <div className="sc-track" id="scTrack">
            <article className="sc-card">
              <Image src="/showcase/eab63db9-9af4-46c2-9e14-68406e7807e2.jpg" alt="HVAC technician servicing an outdoor AC unit beside a Marietta Comfort Services van" fill style={{ objectFit: "cover", transform: "scale(1.02)" }} loading="lazy" />
              <div className="grad"></div>
              <span className="sc-tag"><span className="pip"></span>HVAC</span>
              <div className="sc-body">
                <p className="sc-quote">&quot;I send the link from the driveway. By the time I&apos;m back at the shop, it&apos;s already paid.&quot;</p>
                <div className="sc-biz"><b>Marietta Comfort Services</b><span className="sc-dot"></span>Ray D., Owner</div>
                <span className="sc-chip">$480 collected · settled next day</span>
              </div>
            </article>

            <article className="sc-card">
              <Image src="/showcase/0894fe10-7fc8-4f9b-8ebf-0f98801a870b.jpg" alt="Landscaping crew planting hydrangeas in a front yard with a Crafted Landscapes van" fill style={{ objectFit: "cover", transform: "scale(1.02)" }} loading="lazy" />
              <div className="grad"></div>
              <span className="sc-tag"><span className="pip"></span>Lawn &amp; Landscape</span>
              <div className="sc-body">
                <p className="sc-quote">&quot;No more 3% card fees eating my margin. Clients just tap and pay straight from their bank.&quot;</p>
                <div className="sc-biz"><b>Crafted Landscapes</b><span className="sc-dot"></span>Marcus &amp; team</div>
                <span className="sc-chip">$1,250 collected · $0 card fees</span>
              </div>
            </article>

            <article className="sc-card">
              <Image src="/showcase/d3310979-95be-4a82-9537-4ea46e6ab34e.jpg" alt="Two painters working in a bright modern living room" fill style={{ objectFit: "cover", transform: "scale(1.02)" }} loading="lazy" />
              <div className="grad"></div>
              <span className="sc-tag"><span className="pip"></span>Painting</span>
              <div className="sc-body">
                <p className="sc-quote">&quot;Deposit&apos;s in before we open a can of paint. The text link makes it effortless for clients.&quot;</p>
                <div className="sc-biz"><b>Sterling Painting Co.</b><span className="sc-dot"></span>Dana R., Lead</div>
                <span className="sc-chip">$900 deposit · paid in minutes</span>
              </div>
            </article>

            <article className="sc-card">
              <Image src="/showcase/e7564d23-51ba-489b-8e14-6db5d6430f08.png" alt="Two plumbers repairing a water line in a front yard beside a Marietta Plumbing van" fill style={{ objectFit: "cover", transform: "scale(1.02)" }} loading="lazy" />
              <div className="grad"></div>
              <span className="sc-tag"><span className="pip"></span>Plumbing</span>
              <div className="sc-body">
                <p className="sc-quote">&quot;Two-man shop, no office. Installo is how we invoice now — right from the truck.&quot;</p>
                <div className="sc-biz"><b>Marietta Plumbing &amp; Son</b><span className="sc-dot"></span>Tom &amp; Eli</div>
                <span className="sc-chip">$315 collected · settled in 1 day</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="cta">
        <div className="wrap cta-in">
          <h2 className="cta-title">Get paid faster, with zero card fees.</h2>
          <p className="cta-sub">Send your first payment link in under a minute. Free to send, and your customers pay nothing in fees.</p>
          <form className="ea" onSubmit={joinEarly}>
            <div className="ea-row">
              <input type="email" required placeholder="you@yourbusiness.com" aria-label="Work email" />
              <button type="submit" className="btn">Start free</button>
            </div>
            <div className="ea-fine">Free to send — customers pay $0 in fees.</div>
            <div className="ea-ok">
              <span className="ok-ic">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span>You&apos;re all set. Check your email to finish setting up your account.</span>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footer-in">
          <a href="#top" className="wm" style={{ fontSize: 19 }}>Installo<span className="dot">.</span></a>
          <span className="footer-tag">Pay-by-bank for service businesses.</span>
          <div className="footer-meta">
            <span className="sec">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#9AA8A2" strokeWidth="1.9"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.4" stroke="#9AA8A2" strokeWidth="1.9"/></svg>
              Secured by Plaid
            </span>
            <span>© 2026 Installo</span>
            <span>
              <a href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a>
              {" · "}
              <a href="/terms" style={{ color: "inherit", textDecoration: "underline" }}>Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
