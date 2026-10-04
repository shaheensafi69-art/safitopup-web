'use client';

import React from 'react';
import Link from 'next/link';
import {
  Scale,
  ArrowLeft,
  ShieldCheck,
  Gavel,
  Building2,
  CheckCircle2,
  Lock,
  FileText,
  Radio,
  Cpu,
  AlertOctagon,
  Globe2
} from 'lucide-react';

export default function MasterTermsPage() {
  const sections = [
    { id: 'statutory-authority', title: '1. Statutory Authority & Institutional Covenant' },
    { id: 'ecosystem-scope', title: '2. Multi-Vertical Governance & Subsidiary Ecosystem' },
    { id: 'carrier-sla', title: '3. Carrier-Grade Telecommunications SLA & Routing Standards' },
    { id: 'financial-sanctions', title: '4. Financial Compliance, Sanctions & Anti-Money Laundering (AML)' },
    { id: 'intellectual-property', title: '5. Sovereign Intellectual Property & Algorithmic Security' },
    { id: 'stored-value', title: '6. Closed-Loop Stored-Value & Non-Revocable Voucher Fulfillment' },
    { id: 'fiduciary-liability', title: '7. Limitation of Fiduciary Liability & Force Majeure' },
    { id: 'arbitration-london', title: '8. Governing Law, English Common Law & LCIA Arbitration' },
    { id: 'continuity', title: '9. Amendments, Severability & Corporate Continuity' },
    { id: 'commercial-advertising', title: '10. Commercial Advertising, Google AdSense & Sponsored Modules' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden selection:bg-[#D4AF37] selection:text-black">

      {/* Background Lighting Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-950/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1600px] left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-[94%] max-w-[1720px] mx-auto px-4 pt-36 pb-32">

        {/* Back navigation */}
        <Link
          href="/en"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A0A0B5] hover:text-[#D4AF37] mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Provider Overview</span>
        </Link>

        {/* Master Legal Header */}
        <div className="space-y-6 mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-[0.2em]">
              <Scale className="w-3.5 h-3.5" />
              Sovereign Governance Codex
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              Companies Act 2006 • English Common Law
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/10 text-[#8E8EA0] text-xs font-mono">
              Document Ref: STU-GOV-MASTER-2026-V11
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
            MASTER TERMS OF GOVERNANCE
            <br />
            <span className="text-gold-gradient font-black">
              & WHOLESALE TELECOMMUNICATIONS SERVICE
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#8E8EA0] font-mono pt-2">
            <div>PARENT ENTITY: SAFI INTERNATIONAL CAPITAL LTD • REG NO: 17063286 (LONDON, UK)</div>
            <div>EXCLUSIVE VENUE: HIGH COURT OF JUSTICE, LONDON • DISPUTE ARBITRATION: LCIA</div>
          </div>
        </div>

        {/* Grid: Table of Contents Sidebar + Legal Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Table of Contents Sidebar (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-3xl p-6 bg-[#08080E]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] pb-3 border-b border-white/5">
                <Gavel className="w-4 h-4" />
                Index of Articles
              </div>
              <nav className="space-y-1.5 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block p-2.5 rounded-xl text-[#A0A0B5] hover:text-[#D4AF37] hover:bg-white/[0.04] transition duration-200"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="text-[10px] font-mono text-[#7E7E90] uppercase">
                  Fiduciary Certification
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-[#A0A0B5] space-y-1">
                  <div>Status: <span className="text-emerald-400 font-bold">Ratified & In Effect</span></div>
                  <div>Jurisdiction: <span className="text-white font-bold">England & Wales</span></div>
                  <div>Founder: <span className="text-white font-bold">Shaheen Safi</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Articles Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-16 text-sm text-[#A0A0B5] leading-relaxed">

            {/* Article 1 */}
            <section id="statutory-authority" className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Building2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 1: Statutory Authority & Institutional Covenant</h2>
              </div>
              <p>
                1.1. These Master Terms of Governance and Wholesale Telecommunications Service ("Terms") constitute an irrevocable, legally binding contractual covenant executed between <strong className="text-white">Safi TopUp</strong> (operating as the specialized telecommunications, stored-value clearing, and carrier switching infrastructure of <strong className="text-white">Safi International Capital LTD</strong>, a corporation incorporated under the laws of England and Wales, Company Registration No. 17063286) and any sovereign entity, commercial telecom carrier, financial institution, enterprise aggregator, or authorized API consumer ("Client" or "Wholesale Partner").
              </p>
              <p>
                1.2. By accessing the Safi TopUp carrier switching nodes, utilizing REST/SMPP API integration pipelines, issuing global eSIM provisioning requests, or settling wholesale transactions, the Client unconditionally certifies that it possesses full corporate and statutory capacity to bind its enterprise to these standards without qualification or exception.
              </p>
            </section>

            {/* Article 2 */}
            <section id="ecosystem-scope" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Cpu className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 2: Multi-Vertical Governance & Subsidiary Ecosystem</h2>
              </div>
              <p>
                2.1. Safi TopUp forms a foundational pillar of the sovereign technology and venture holding conglomerate established by Founder & Chairman <strong className="text-white">Shaheen Safi</strong>. The governance scope established herein binds and cross-harmonizes all operations conducted across the integrated holding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs text-gray-300">
                <li><strong className="text-white">Safi International Capital LTD:</strong> Sovereign parent venture and investment holding entity (London, UK • Reg: 17063286).</li>
                <li><strong className="text-white">SafiPay:</strong> Cross-border financial infrastructure, multi-currency IBAN issuing, and Visa/Mastercard settlement gateway.</li>
                <li><strong className="text-white">Safi TopUp:</strong> Wholesale telecommunications switching, SS7/Diameter carrier connectivity, and global eSIM provisioning.</li>
                <li><strong className="text-white">ZEV App:</strong> Decentralized creator super-app, short-video ecosystem, and encrypted messaging network.</li>
                <li><strong className="text-white">Safi Academy:</strong> Global EdTech research academy advancing software engineering and algorithmic financial markets.</li>
                <li><strong className="text-white">Safi Pro:</strong> High-growth strategic venture capital asset and e-commerce software exit.</li>
                <li><strong className="text-white">Safi AI:</strong> Autonomous artificial intelligence research lab and regional LLM models.</li>
              </ul>
            </section>

            {/* Article 3 */}
            <section id="carrier-sla" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Radio className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 3: Carrier-Grade Telecommunications SLA & Routing Standards</h2>
              </div>
              <p>
                3.1. <strong className="text-white">Core Network Availability:</strong> Safi TopUp warrants a 99.999% monthly Service Level Agreement (SLA) across its carrier switching engine and API gateways, excluding pre-notified scheduled infrastructure maintenance or upstream operator physical line disruptions.
              </p>
              <p>
                3.2. <strong className="text-white">Switching Velocity & Latency:</strong> All wholesale airtime top-ups, mobile data bundle top-ups, and prepaid utility dispatches are committed to sub-2000 millisecond execution velocity from validated receipt of Client cryptographic authorization to acknowledgment by target operator gateways (including Roshan, Afghan Wireless, Etisalat, MTN, and 700+ global network partners).
              </p>
              <p>
                3.3. <strong className="text-white">Upstream Operator Disclaimers:</strong> While Safi TopUp maintains direct redundant SS7/Diameter interconnects and strategic alliances with international exchanges including Ding.com, downstream latency caused by foreign state telecom shut-downs or national spectrum interference remains outside the operational perimeter of Safi TopUp.
              </p>
            </section>

            {/* Article 4 */}
            <section id="financial-sanctions" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 4: Financial Compliance, Sanctions & Anti-Money Laundering (AML)</h2>
              </div>
              <p>
                4.1. <strong className="text-white">Global Sanctions Screening:</strong> All wholesale transactions, clearing balances, and API queries are subjected to automated, real-time cryptographic screening against Office of Foreign Assets Control (OFAC), HM Treasury (UK), European Union Common Foreign and Security Policy, and United Nations Security Council Consolidated Sanctions Lists.
              </p>
              <p>
                4.2. <strong className="text-white">Zero-Tolerance Illicit Activity:</strong> Any attempt to utilize Safi TopUp telecom rails for value-layer smurfing, terrorism financing, terrorist communication credits, or circumvention of international trade sanctions shall trigger immediate node freezing, account termination, and mandatory statutory reporting to competent UK and international law enforcement agencies without prior notice.
              </p>
            </section>

            {/* Article 5 */}
            <section id="intellectual-property" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Lock className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 5: Sovereign Intellectual Property & Algorithmic Security</h2>
              </div>
              <p>
                5.1. The complete architecture of Safi TopUp—including proprietary carrier switching routing algorithms, dynamic eSIM profile allocation protocols, cryptographic API gateway architectures, schemas, visual assets, trademarks, and documentation—remains the exclusive, sovereign intellectual property of Shaheen Safi and Safi International Capital LTD.
              </p>
              <p>
                5.2. Clients are strictly prohibited from reverse-engineering, decompiling, scraping, or creating derivative switching layers based on Safi TopUp API protocols or system telemetry.
              </p>
            </section>

            {/* Article 6 */}
            <section id="stored-value" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 6: Closed-Loop Stored-Value & Non-Revocable Voucher Fulfillment</h2>
              </div>
              <p>
                6.1. <strong className="text-white">Fulfillment Finality:</strong> Telecommunication airtime injections, remote eSIM QR deployments, and digital gift card/voucher cryptographic PIN dispatches constitute real-time digital consumables. Once successfully cleared by the upstream carrier or brand issuer gateway, transactions are final, non-reversible, and non-refundable under all circumstances.
              </p>
              <p>
                6.2. The Client bears exclusive statutory liability for ensuring the accuracy of recipient MSISDN phone numbers, country codes, operator selection, and recipient identifiers submitted via API calls.
              </p>
            </section>

            {/* Article 7 */}
            <section id="fiduciary-liability" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <AlertOctagon className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 7: Limitation of Fiduciary Liability & Force Majeure</h2>
              </div>
              <p>
                7.1. In no event shall Safi TopUp, Safi International Capital LTD, Founder Shaheen Safi, or its directors, engineers, and affiliates be liable for indirect, incidental, punitive, special, or consequential damages, including loss of telecommunication revenue, loss of business goodwill, data loss, or systemic downtime.
              </p>
              <p>
                7.2. The cumulative aggregate liability of Safi TopUp arising out of or related to wholesale services shall strictly not exceed the total wholesale transaction fees retained by Safi TopUp for the specific single transaction giving rise to the dispute.
              </p>
              <p>
                7.3. Neither party shall be held liable for failure or delay caused by Force Majeure events, including international telecommunication cable cuts, satellite outages, warfare, cyberwarfare, embargoes, or government expropriation.
              </p>
            </section>

            {/* Article 8 */}
            <section id="arbitration-london" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Scale className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 8: Governing Law, English Common Law & LCIA Arbitration</h2>
              </div>
              <p>
                8.1. <strong className="text-white">Governing Law:</strong> These Terms and any non-contractual obligations arising out of or in connection with them shall be governed exclusively by, and construed in accordance with, the substantive laws of England and Wales.
              </p>
              <p>
                8.2. <strong className="text-white">Exclusive LCIA Arbitration:</strong> Any dispute, controversy, difference, or claim arising out of or relating to this agreement—including its existence, validity, interpretation, performance, breach, or termination—shall be referred to and finally resolved by international arbitration administered by the London Court of International Arbitration (LCIA) under the LCIA Rules in force at the time of filing.
              </p>
              <p>
                8.3. The seat and legal place of arbitration shall be London, United Kingdom. The language of arbitration proceedings shall be English. The arbitral award shall be final, unappealable, and enforceable in any court of competent global jurisdiction under the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards (1958).
              </p>
            </section>

            {/* Article 9 */}
            <section id="continuity" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 9: Amendments, Severability & Corporate Continuity</h2>
              </div>
              <p>
                9.1. Safi TopUp reserves the institutional right to update and amend these Master Terms of Governance at any time to reflect evolving regulatory frameworks, statutory telecommunications directives, or carrier interconnect updates. Continued utilization of our carrier nodes after ratification constitutes binding acceptance.
              </p>
              <p>
                9.2. If any provision of these Terms is determined by an arbitral tribunal or competent London court to be invalid, illegal, or unenforceable, such invalidity shall not affect the enforceability of any other provision, which shall remain in full institutional effect.
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/30 text-xs text-[#A0A0B5] mt-6">
                <div>RATIFIED BY EXECUTIVE RESOLUTION OF THE BOARD</div>
                <div className="font-bold text-white mt-1">SAFI INTERNATIONAL CAPITAL LTD • LONDON, UNITED KINGDOM</div>
                <div className="text-[10px] text-[#7E7E90] mt-0.5">SHAHEEN SAFI, FOUNDER & CHAIRMAN • OCTOBER 2026</div>
              </div>
            </section>

            {/* Article 10: Commercial Advertising & Google AdSense Disclosures */}
            <section id="commercial-advertising" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Globe2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 10: Commercial Advertising, Google AdSense & Sponsored Modules</h2>
              </div>

              <p>
                10.1. <strong className="text-white">Programmatic Advertising Integration:</strong> Safi TopUp integrates programmatic digital advertising solutions, specifically including the Google AdSense network operated by Google LLC. Advertisements displayed across this portal are dynamically served based on contextual content, publisher specifications, and lawful third-party algorithmic targeting.
              </p>

              <p>
                10.2. <strong className="text-white">Third-Party Commercial Warranties:</strong> The appearance of any commercial banner, in-feed sponsored unit, or third-party hyperlink does not constitute an institutional endorsement, fiduciary guarantee, or operational recommendation by Safi TopUp, Shaheen Safi, or Safi International Capital LTD. The terms, products, and fulfillment of advertised third-party services are solely governed by the independent contractual terms of the respective commercial advertiser.
              </p>

              <p>
                10.3. <strong className="text-white">Integrity & Anti-Fraud Compliance:</strong> Users and automated systems accessing Safi TopUp carrier infrastructure are strictly prohibited from generating invalid impressions, artificial click activity, coordinated bot traffic, or incentive-based interactions with Google AdSense advertising units. Any detected violation of Google Publisher Policies or attempts to compromise advertising telemetry shall result in immediate IP banning and legal action where warranted.
              </p>

              <p>
                10.4. <strong className="text-white">Independent Operational Separation:</strong> Core wholesale telecommunications clearing, direct carrier switching, and SLA warranties remain completely isolated from, and uninfluenced by, advertising inventory or commercial sponsor selections.
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}
