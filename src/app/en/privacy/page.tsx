'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Lock, 
  Database, 
  FileText, 
  Globe2, 
  Cpu, 
  Scale, 
  Building2, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export default function InstitutionalPrivacyPage() {
  const sections = [
    { id: 'statutory-framework', title: '1. Statutory Framework & Data Fiduciary Standard' },
    { id: 'scope-operations', title: '2. Multi-Vertical Institutional Scope & Carrier Transits' },
    { id: 'cryptographic-security', title: '3. Zero-Knowledge Cryptography & Telecom Metadata' },
    { id: 'financial-compliance', title: '4. Financial AML & Statutory Transaction Logging' },
    { id: 'cloud-infrastructure', title: '5. Enterprise Geodistributed Infrastructure & Supabase Security' },
    { id: 'cross-border', title: '6. Trans-Jurisdictional Cross-Border Data Sovereignty' },
    { id: 'data-rights', title: '7. Statutory Rights of Data Principals (UK/EU GDPR)' },
    { id: 'retention-schedules', title: '8. Cryptographic Erasure & Institutional Retention' },
    { id: 'supervisory-ico', title: '9. Supervisory Escalation & UK ICO Directives' },
    { id: 'google-adsense', title: '10. Google AdSense, DoubleClick DART Cookies & Third-Party Advertising' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Lighting Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#D4AF37]/15 via-purple-950/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1600px] right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] pointer-events-none" />
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

        {/* Master Privacy Header */}
        <div className="space-y-6 mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-[0.2em]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Statutory Fiduciary Standard
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              UK GDPR • Data Protection Act 2018 • ISO/IEC 27001
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/10 text-[#8E8EA0] text-xs font-mono">
              Document Ref: STU-PRIV-FIDUCIARY-2026-V11
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
            INSTITUTIONAL PRIVACY MANIFESTO
            <br />
            <span className="text-gold-gradient font-black">
              & DATA FIDUCIARY FRAMEWORK
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#8E8EA0] font-mono pt-2">
            <div>JURISDICTION: ENGLAND & WALES (UNITED KINGDOM) • PARENT REG: 17063286</div>
            <div>RATIFIED & CERTIFIED: OCTOBER 2026 • ANNUAL COMPLIANCE AUDIT RATIFIED</div>
          </div>
        </div>

        {/* Grid: Table of Contents Sidebar + Privacy Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Table of Contents Sidebar (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-3xl p-6 bg-[#08080E]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] pb-3 border-b border-white/5">
                <FileText className="w-4 h-4" />
                Table of Articles
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
                  Data Protection Officer (DPO)
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-[#A0A0B5] space-y-1">
                  <div>Office: <span className="text-white font-bold">Office of the DPO, London HQ</span></div>
                  <div>Direct Inquiries: <span className="text-[#D4AF37] font-bold">contact@safitopup.site</span></div>
                  <div>Supervisory Body: <span className="text-white font-bold">UK ICO (Wycliffe House)</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Articles Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-16 text-sm text-[#A0A0B5] leading-relaxed">
            
            {/* Article 1 */}
            <section id="statutory-framework" className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Scale className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 1: Statutory Framework & Data Fiduciary Standard</h2>
              </div>
              <p>
                1.1. <strong className="text-white">Safi TopUp</strong> operates under the sovereign fiduciary umbrella of <strong className="text-white">Safi International Capital LTD</strong> (London, UK • Company No. 17063286). We declare an uncompromising data fiduciary standard governed by the Data Protection Act 2018 (DPA 2018), the United Kingdom General Data Protection Regulation (UK GDPR), the European Union Regulation (EU) 2016/679 (EU GDPR), and the international security framework ISO/IEC 27001.
              </p>
              <p>
                1.2. We do not monetize, sell, lease, or broker telecommunications subscriber metadata, financial records, or client traffic patterns to commercial advertisers or data brokers under any circumstances.
              </p>
            </section>

            {/* Article 2 */}
            <section id="scope-operations" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Building2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 2: Multi-Vertical Institutional Scope & Carrier Transits</h2>
              </div>
              <p>
                2.1. This Privacy Manifesto establishes the data governance baseline across the integrated enterprise ecosystem architected by Founder <strong className="text-white">Shaheen Safi</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs text-gray-300">
                <li><strong className="text-white">Safi International Capital LTD:</strong> Group fiduciary management, statutory compliance records, and corporate holding governance.</li>
                <li><strong className="text-white">Safi TopUp:</strong> Wholesale telecommunications routing, MSISDN transit validation, eSIM SM-DP+ server communications, and carrier clearing.</li>
                <li><strong className="text-white">SafiPay:</strong> Multi-currency banking, KYC identity verification, PCI-DSS Level 1 card transactions, and SWIFT/SEPA clearing.</li>
                <li><strong className="text-white">ZEV App:</strong> End-to-end encrypted messaging, decentralized media streams, and tokenized creator incentives.</li>
                <li><strong className="text-white">Safi Academy:</strong> Educational telemetry, LMS credentials, and professional certification records.</li>
                <li><strong className="text-white">Safi Pro & Safi AI:</strong> E-commerce venture records and proprietary artificial intelligence algorithm data isolation.</li>
              </ul>
            </section>

            {/* Article 3 */}
            <section id="cryptographic-security" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Lock className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 3: Zero-Knowledge Cryptography & Telecom Metadata</h2>
              </div>
              <p>
                3.1. <strong className="text-white">Telecommunications Metadata Masking:</strong> When transmitting top-up payloads or eSIM remote provisioning requests across 700+ partner network operators, MSISDN phone numbers and IMSI identities are masked using one-way cryptographic hashing (SHA-256 with dynamic salt) within core database layers, decryptable only at the physical carrier border gateway for final packet routing.
              </p>
              <p>
                3.2. <strong className="text-white">In-Transit & At-Rest Encryption:</strong> All wholesale API communication demands TLS 1.3 encryption with ECDHE ephemeral key exchange. Databases and object storage are secured with AES-256 military-grade encryption with automated KMS key rotation.
              </p>
            </section>

            {/* Article 4 */}
            <section id="financial-compliance" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 4: Financial AML & Statutory Transaction Logging</h2>
              </div>
              <p>
                4.1. Under UK Money Laundering Regulations 2017 and Proceeds of Crime Act 2002 (POCA), Safi TopUp retains immutable cryptographic transaction logs for wholesale settlement and balance transfers for a statutory duration of five (5) years following execution.
              </p>
              <p>
                4.2. Transaction records include source IP address, API key identifier, timestamp, transaction value, destination carrier identifier, and upstream settlement code. These logs are isolated in write-once-read-many (WORM) storage to prevent modification.
              </p>
            </section>

            {/* Article 5 */}
            <section id="cloud-infrastructure" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Database className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 5: Enterprise Geodistributed Infrastructure & Supabase Security</h2>
              </div>
              <p>
                5.1. Our backend infrastructure utilizes enterprise geodistributed data centers (including Supabase, AWS Europe, and London IX nodes) with SOC 2 Type II and ISO 27001 certifications.
              </p>
              <p>
                5.2. Row-Level Security (RLS) is strictly enforced across all database tables. API consumers and wholesale partners are isolated through tenant cryptographically-enforced schemas, rendering cross-tenant data leakage mathematically impossible.
              </p>
            </section>

            {/* Article 6 */}
            <section id="cross-border" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Globe2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 6: Trans-Jurisdictional Cross-Border Data Sovereignty</h2>
              </div>
              <p>
                6.1. Operating across 150+ countries necessitates cross-border telecommunications transits. All international data transfers between the United Kingdom, European Economic Area, Middle East, and Asia are executed pursuant to UK International Data Transfer Agreements (IDTAs) and EU Standard Contractual Clauses (SCCs).
              </p>
              <p>
                6.2. In corridors connecting emerging frontier markets (including Afghanistan, Pakistan, and Central Asia), technical routing is optimized through direct bilateral optical peering to eliminate unauthorized intercept or transit through third-party sovereign firewalls.
              </p>
            </section>

            {/* Article 7 */}
            <section id="data-rights" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 7: Statutory Rights of Data Principals (UK/EU GDPR)</h2>
              </div>
              <p>
                7.1. Subject to statutory anti-money laundering and carrier retention duties, every natural person whose personal data is processed by Safi TopUp retains the full spectrum of statutory rights guaranteed under Articles 15 through 22 of the UK GDPR and EU GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs text-gray-300">
                <li><strong className="text-white">Right of Access (Article 15):</strong> Right to obtain confirmation and cryptographic copies of personal data processed.</li>
                <li><strong className="text-white">Right to Rectification (Article 16):</strong> Right to require correction of inaccurate institutional data.</li>
                <li><strong className="text-white">Right to Erasure ("Right to be Forgotten", Article 17):</strong> Right to demand permanent cryptographic purging of personal data once legal retention periods expire.</li>
                <li><strong className="text-white">Right to Restriction of Processing (Article 18):</strong> Right to suspend processing during contested accuracy audits.</li>
                <li><strong className="text-white">Right to Data Portability (Article 20):</strong> Right to receive data in a structured, machine-readable JSON format.</li>
              </ul>
            </section>

            {/* Article 8 */}
            <section id="retention-schedules" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Lock className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 8: Cryptographic Erasure & Institutional Retention</h2>
              </div>
              <p>
                8.1. Temporary operational routing caches (such as session tokens and transient carrier delivery acknowledgments) are automatically purged within seventy-two (72) hours of transaction finality.
              </p>
              <p>
                8.2. Permanent data shredding utilizes the DoD 5220.22-M cryptographic sanitization standard, ensuring that deleted records cannot be recovered via forensic analysis.
              </p>
            </section>

            {/* Article 9 */}
            <section id="supervisory-ico" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Scale className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 9: Supervisory Escalation & UK ICO Directives</h2>
              </div>
              <p>
                9.1. Data principals have the statutory right to lodge complaints directly with the UK supervisory authority:
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-[#A0A0B5] space-y-1">
                <div className="font-bold text-white">INFORMATION COMMISSIONER'S OFFICE (ICO)</div>
                <div>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom</div>
                <div>Helpline: +44 303 123 1113 • Website: <a href="https://ico.org.uk" target="_blank" className="text-[#D4AF37] hover:underline">ico.org.uk</a></div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/30 text-xs text-[#A0A0B5] mt-6">
                <div>ISSUED BY ORDER OF THE DATA PROTECTION OFFICER</div>
                <div className="font-bold text-white mt-1">SAFI INTERNATIONAL CAPITAL LTD • LONDON, UNITED KINGDOM</div>
                <div className="text-[10px] text-[#7E7E90] mt-0.5">SHAHEEN SAFI, FOUNDER & CHAIRMAN • OCTOBER 2026</div>
              </div>
            </section>

            {/* Article 10: Google AdSense Publisher Compliance */}
            <section id="google-adsense" className="space-y-4 pt-12 border-t border-white/10">
              <div className="flex items-center gap-3 text-white font-black text-xl md:text-2xl uppercase">
                <Globe2 className="w-6 h-6 text-[#D4AF37]" />
                <h2>Article 10: Google AdSense, DoubleClick DART Cookies & Third-Party Advertising Disclosures</h2>
              </div>
              
              <p>
                10.1. <strong className="text-white">Third-Party Advertising Vendors:</strong> We participate in the Google AdSense advertising program operated by Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Third-party vendors, including Google, utilize cookies and web beacons to serve advertisements based on a user's prior visits to this website (<a href="https://www.safitopup.site" className="text-[#D4AF37] hover:underline">safitopup.site</a>) and other sites across the World Wide Web.
              </p>

              <p>
                10.2. <strong className="text-white">DoubleClick DART Cookie:</strong> Google's use of advertising cookies (including the DoubleClick DART cookie) enables Google and its partner advertising networks to serve personalized, contextual, and in-feed advertisements to users based on navigation history, geographic region, and demographic parameters.
              </p>

              <p>
                10.3. <strong className="text-white">User Opt-Out Mechanisms:</strong> Users and data principals retain the absolute right to opt out of personalized interest-based advertising at any time through the following accredited industry mechanisms:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-xs text-gray-300">
                <li>
                  <strong className="text-white">Google Ad Settings:</strong> Users may inspect, manage, or disable personalized advertising cookies directly via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-mono">https://www.google.com/settings/ads</a>.
                </li>
                <li>
                  <strong className="text-white">Digital Advertising Alliance (DAA):</strong> Users may opt out of third-party ad network tracking via the Network Advertising Initiative / DAA portal at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-mono">https://www.aboutads.info/choices/</a>.
                </li>
                <li>
                  <strong className="text-white">European Interactive Digital Advertising Alliance (EDAA):</strong> EEA/UK visitors can exercise preference opt-outs through <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-mono">https://www.youronlinechoices.eu/</a>.
                </li>
              </ul>

              <p>
                10.4. <strong className="text-white">Publisher Transparency & Data Separation:</strong> Advertising cookies deployed by Google AdSense do not access or compromise Safi TopUp's internal telecommunications carrier databases, MSISDN customer records, or financial transaction logs. Advertising cookies operate strictly within the client browser sandbox in compliance with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR Article 6(1)(a).
              </p>

              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-[#F3E5AB]">
                <strong className="font-bold text-white block mb-1">MANDATORY ADSENSE PUBLISHER COMPLIANCE NOTICE:</strong>
                This website strictly adheres to Google Publisher Policies, the Better Ads Standards, and UK Information Commissioner's Office (ICO) cookie consent guidelines.
              </div>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}
