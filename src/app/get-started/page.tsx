import React from "react";

const countries = [
  // African countries
  "Kenya", "Namibia", "Tanzania", "South Africa", "Lesotho", "Uganda", "Ghana", "Sierra Leone",
  // Caribbean countries (excluding Cuba and Haiti, but including Suriname and Guyana)
  "Antigua and Barbuda", "Bahamas", "Barbados", "Dominica", "Grenada", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Suriname", "Guyana"
];

const orgTypes = [
  { value: "private", label: "Private" },
  { value: "ngo", label: "NGO" },
  { value: "government", label: "Government" },
  { value: "other", label: "Other" }
];

const heardOptions = [
  "Google Search", "Social Media", "Referral", "Event/Conference", "WhatsApp", "Other"
];

export default function GetStarted() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-2xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Get Started</h1>
          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2" required />

              <label className="block font-semibold mb-1">Organization Name <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2" required />

              <label className="block font-semibold mb-1">Role/Position <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2" required />

              <label className="block font-semibold mb-1">Industry/Sector <span className="text-red-500">*</span></label>
              <select className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>

              <label className="block font-semibold mb-1">Estimated Number of Employees</label>
              <input type="number" min="1" className="border rounded px-3 py-2 w-full mb-2" placeholder="e.g. 50" />

              <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" className="border rounded px-3 py-2 w-full mb-2" required />

              <label className="block font-semibold mb-1">WhatsApp Number <span className="text-red-500">*</span></label>
              <input type="tel" className="border rounded px-3 py-2 w-full mb-2" required placeholder="Include country code, e.g. +1..." />

              <label className="block font-semibold mb-1">Country <span className="text-red-500">*</span></label>
              <select className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>

              <label className="block font-semibold mb-1">Organization Type <span className="text-red-500">*</span></label>
              <select className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Type</option>
                {orgTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>

              <label className="block font-semibold mb-1">Services Interested In <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2 mb-2">
                <label className="flex items-center gap-1"><input type="checkbox" value="AI Strategy" /> AI Strategy</label>
                <label className="flex items-center gap-1"><input type="checkbox" value="Automation" /> Automation</label>
                <label className="flex items-center gap-1"><input type="checkbox" value="Mentorship" /> Mentorship</label>
                <label className="flex items-center gap-1"><input type="checkbox" value="Consulting" /> Consulting</label>
                <label className="flex items-center gap-1"><input type="checkbox" value="Other" /> Other</label>
              </div>

              <label className="block font-semibold mb-1">Preferred Contact Method <span className="text-red-500">*</span></label>
              <select className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Method</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone">Phone</option>
              </select>

              <label className="block font-semibold mb-1">Project Timeline/Urgency</label>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2" placeholder="e.g. ASAP, 1-3 months, etc." />

              <label className="block font-semibold mb-1">Budget Range (optional)</label>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2" placeholder="e.g. $5,000 - $10,000" />

              <label className="block font-semibold mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
              <select className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Option</option>
                {heardOptions.map(h => <option key={h} value={h}>{h}</option>)}
              </select>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2" placeholder="If Other, please specify" />

              <label className="block font-semibold mb-1">Additional Comments</label>
              <textarea className="border rounded px-3 py-2 w-full mb-2" rows={4} placeholder="Anything else you'd like us to know?" />

              <div className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" required />
                <span className="text-sm">I consent to be contacted by PivotPoint AI.</span>
              </div>
            </div>
            <button type="submit" className="bg-[#1a237e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#4e4f4f] transition w-full">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}
