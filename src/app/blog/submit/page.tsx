"use client";
import React from "react";

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "India", "Nigeria", "South Africa", "Kenya", "Germany", "France", "Other"
];

const blogTypes = [
  { value: "original", label: "Original Blog" },
  { value: "ai", label: "AI Created" }
];

export default function SubmitBlog() {
  // Blog submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      const data = {
        name: (form.elements.namedItem('first') as HTMLInputElement).value + ' ' + (form.elements.namedItem('last') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        bio: (form.elements.namedItem('bio') as HTMLTextAreaElement).value,
        country: (form.elements.namedItem('country') as HTMLSelectElement).value,
        blogType: (form.elements.namedItem('blogType') as HTMLSelectElement).value,
        title: (form.elements.namedItem('title') as HTMLInputElement).value,
        content: (form.elements.namedItem('content') as HTMLTextAreaElement).value,
      };

      const res = await fetch('/api/submit-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Blog submitted successfully! Thank you for your contribution.');
        form.reset();
      } else {
        console.error('Submission error:', result);
        alert(`Submission failed: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-2xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Submit an Article</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Author Details */}
            <div>
              <h2 className="text-xl font-bold mb-2">Author Details</h2>
              <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <div className="flex gap-2 mb-2">
                <input name="first" type="text" placeholder="First" className="border rounded px-3 py-2 w-1/2" required />
                <input name="last" type="text" placeholder="Last" className="border rounded px-3 py-2 w-1/2" required />
              </div>
              <label className="block font-semibold mb-1">E-mail <span className="text-red-500">*</span></label>
              <input name="email" type="email" className="border rounded px-3 py-2 w-full mb-2" required />
              <label className="block font-semibold mb-1">Short Author Bio <span className="text-red-500">*</span></label>
              <textarea name="bio" className="border rounded px-3 py-2 w-full mb-2" maxLength={300} rows={3} required placeholder="Please keep it below 300 characters." />
              <label className="block font-semibold mb-1">Country <span className="text-red-500">*</span></label>
              <select name="country" className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <label className="block font-semibold mb-1">Blog Type <span className="text-red-500">*</span></label>
              <select name="blogType" className="border rounded px-3 py-2 w-full mb-2" required>
                <option value="">Select Type</option>
                {blogTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            {/* Blog Post */}
            <div>
              <h2 className="text-xl font-bold mb-2">Create a Blog Post</h2>
              <label className="block font-semibold mb-1">Post Title <span className="text-red-500">*</span></label>
              <input name="title" type="text" className="border rounded px-3 py-2 w-full mb-2" required />
              <label className="block font-semibold mb-1">Content <span className="text-red-500">*</span></label>
              <textarea name="content" className="border rounded px-3 py-2 w-full mb-2" rows={8} required placeholder="Write your blog post here..." />
            </div>
            
            {/* Legal Compliance */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                By submitting your blog post, you agree to our{' '}
                <a href="/terms" target="_blank" className="text-[#1a237e] underline hover:text-[#4e4f4f]">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy" target="_blank" className="text-[#1a237e] underline hover:text-[#4e4f4f]">
                  Privacy Policy
                </a>. You grant PivotPoint AI the right to publish and distribute your content.
              </p>
            </div>
            
            <button type="submit" className="bg-[#1a237e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#4e4f4f] transition w-full">Submit Blog</button>
          </form>
        </section>
      </main>
    </div>
  );
}
