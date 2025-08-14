'use client';

import React, { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: '',
    organization_name: '',
    role_position: '',
    industry_sector: '',
    number_of_employees: '',
    email: '',
    whatsapp_number: '',
    country: '',
    organization_type: '',
    services_interested: [] as string[],
    preferred_contact_method: '',
    project_timeline: '',
    budget_range: '',
    how_heard: '',
    how_heard_other: '',
    additional_comments: '',
    consent_given: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox' && name === 'consent_given') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'checkbox' && name === 'services_interested') {
      const checked = (e.target as HTMLInputElement).checked;
      const value = (e.target as HTMLInputElement).value;
      setFormData(prev => ({
        ...prev,
        services_interested: checked
          ? [...prev.services_interested, value]
          : prev.services_interested.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your information has been submitted successfully. We\'ll be in touch soon!');
        // Reset form
        setFormData({
          name: '',
          organization_name: '',
          role_position: '',
          industry_sector: '',
          number_of_employees: '',
          email: '',
          whatsapp_number: '',
          country: '',
          organization_type: '',
          services_interested: [],
          preferred_contact_method: '',
          project_timeline: '',
          budget_range: '',
          how_heard: '',
          how_heard_other: '',
          additional_comments: '',
          consent_given: false
        });
      } else {
        setSubmitError(result.error || 'Failed to submit information. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-2xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Get Started</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {submitMessage}
              </div>
            )}
            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {submitError}
              </div>
            )}
            
            <div>
              <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required 
              />

              <label className="block font-semibold mb-1">Organization Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="organization_name"
                value={formData.organization_name}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required 
              />

              <label className="block font-semibold mb-1">Role/Position <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="role_position"
                value={formData.role_position}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required 
              />

              <label className="block font-semibold mb-1">Industry/Sector <span className="text-red-500">*</span></label>
              <select 
                name="industry_sector"
                value={formData.industry_sector}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required
              >
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
              <input 
                type="number" 
                name="number_of_employees"
                value={formData.number_of_employees}
                onChange={handleInputChange}
                min="1" 
                className="border rounded px-3 py-2 w-full mb-2" 
                placeholder="e.g. 50" 
              />

              <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required 
              />

              <label className="block font-semibold mb-1">WhatsApp Number <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                name="whatsapp_number"
                value={formData.whatsapp_number}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required 
                placeholder="Include country code, e.g. +1..." 
              />

              <label className="block font-semibold mb-1">Country <span className="text-red-500">*</span></label>
              <select 
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required
              >
                <option value="">Select Country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>

              <label className="block font-semibold mb-1">Organization Type <span className="text-red-500">*</span></label>
              <select 
                name="organization_type"
                value={formData.organization_type}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required
              >
                <option value="">Select Type</option>
                {orgTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>

              <label className="block font-semibold mb-1">Services Interested In <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2 mb-2">
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    name="services_interested"
                    value="AI Strategy" 
                    checked={formData.services_interested.includes("AI Strategy")}
                    onChange={handleInputChange}
                  /> AI Strategy
                </label>
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    name="services_interested"
                    value="Automation" 
                    checked={formData.services_interested.includes("Automation")}
                    onChange={handleInputChange}
                  /> Automation
                </label>
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    name="services_interested"
                    value="Mentorship" 
                    checked={formData.services_interested.includes("Mentorship")}
                    onChange={handleInputChange}
                  /> Mentorship
                </label>
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    name="services_interested"
                    value="Consulting" 
                    checked={formData.services_interested.includes("Consulting")}
                    onChange={handleInputChange}
                  /> Consulting
                </label>
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    name="services_interested"
                    value="Other" 
                    checked={formData.services_interested.includes("Other")}
                    onChange={handleInputChange}
                  /> Other
                </label>
              </div>

              <label className="block font-semibold mb-1">Preferred Contact Method <span className="text-red-500">*</span></label>
              <select 
                name="preferred_contact_method"
                value={formData.preferred_contact_method}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required
              >
                <option value="">Select Method</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone">Phone</option>
              </select>

              <label className="block font-semibold mb-1">Project Timeline/Urgency</label>
              <input 
                type="text" 
                name="project_timeline"
                value={formData.project_timeline}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                placeholder="e.g. ASAP, 1-3 months, etc." 
              />

              <label className="block font-semibold mb-1">Budget Range (optional)</label>
              <input 
                type="text" 
                name="budget_range"
                value={formData.budget_range}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                placeholder="e.g. $5,000 - $10,000" 
              />

              <label className="block font-semibold mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
              <select 
                name="how_heard"
                value={formData.how_heard}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                required
              >
                <option value="">Select Option</option>
                {heardOptions.map(h => <option key={h} value={h}>{h}</option>)}
              </select>
              {formData.how_heard === 'Other' && (
                <input 
                  type="text" 
                  name="how_heard_other"
                  value={formData.how_heard_other}
                  onChange={handleInputChange}
                  className="border rounded px-3 py-2 w-full mb-2" 
                  placeholder="Please specify" 
                />
              )}

              <label className="block font-semibold mb-1">Additional Comments</label>
              <textarea 
                name="additional_comments"
                value={formData.additional_comments}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full mb-2" 
                rows={4} 
                placeholder="Anything else you'd like us to know?" 
              />

              <div className="flex items-center mt-4">
                <input 
                  type="checkbox" 
                  name="consent_given"
                  checked={formData.consent_given}
                  onChange={handleInputChange}
                  className="mr-2" 
                  required 
                />
                <span className="text-sm">I consent to be contacted by PivotPoint AI.</span>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-full font-semibold shadow-lg transition w-full ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#1a237e] text-white hover:bg-[#4e4f4f]'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
