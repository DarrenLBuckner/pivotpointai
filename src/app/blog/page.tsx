import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client for fetching approved blogs
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Blog() {
  // Load intro content
  const filePath = path.join(process.cwd(), 'content/blog_intro.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  const html = marked(markdown);

  // Fetch approved blog posts
  const { data: approvedBlogs, error } = await supabase
    .from('blog_submissions')
    .select('*')
    .eq('status', 'approved')
    .order('submitted_at', { ascending: false });

  if (error) {
    console.error('Error fetching approved blogs:', error);
  }

  const blogs = approvedBlogs || [];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 overflow-hidden">
      {/* AI Robot Woman Full Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/images/AI_robot_woman.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top 30%",
          opacity: 0.3,
        }}
      ></div>
      
      <main className="w-full max-w-4xl flex flex-col gap-8 items-center relative z-10 text-[#1a237e] mt-8">
        {/* Header Section with Submit Button */}
        <section className="w-full bg-white/90 rounded-xl shadow-lg p-8 border border-[#d3e3fd]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight">Blog</h1>
              <div className="prose prose-lg text-[#1a237e]" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            
            {/* Submit Button - Prominent on the right */}
            <div className="lg:w-72 flex flex-col items-center bg-gradient-to-br from-[#1a237e] to-[#4e4f4f] rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-center">Share Your Story</h3>
              <p className="text-sm text-center mb-4 opacity-90">
                Have insights to share? We&apos;d love to feature your expertise!
              </p>
              <Link 
                href="/blog/submit" 
                className="bg-white text-[#1a237e] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition w-full text-center"
              >
                Submit Your Blog
              </Link>
              <p className="text-xs text-center mt-2 opacity-75">
                {blogs.length} published {blogs.length === 1 ? 'post' : 'posts'}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        {blogs.length > 0 ? (
          <section className="w-full space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Community Insights</h2>
            
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white/90 rounded-xl shadow-lg p-8 border border-[#d3e3fd] hover:shadow-xl transition-shadow">
                {/* Blog Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1a237e] mb-2">{blog.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">By {blog.name}</span>
                        <span className="text-gray-400">•</span>
                        <span>{blog.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          blog.blogtype === 'original' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {blog.blogtype === 'original' ? 'Original' : 'AI-Assisted'}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span>{new Date(blog.submitted_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                {blog.bio && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 italic">&ldquo;{blog.bio}&rdquo;</p>
                  </div>
                )}

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none text-gray-800">
                  <div className="whitespace-pre-wrap">{blog.content}</div>
                </div>

                {/* Blog Footer */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Published {new Date(blog.submitted_at).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      #{blog.id}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-4">Be the First to Share!</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re building a community of thought leaders and innovators. 
              Your insights could inspire others on their AI journey.
            </p>
            <Link 
              href="/blog/submit" 
              className="inline-flex items-center bg-[#1a237e] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#4e4f4f] transition"
            >
              Write the First Post
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}
