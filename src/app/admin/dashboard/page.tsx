"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BlogSubmission {
  id: number;
  name: string;
  email: string;
  bio: string;
  country: string;
  blogtype: string;
  title: string;
  content: string;
  submitted_at: string;
  status: string;
}

interface ToolboxItem {
  name: string;
  url: string;
  affiliate_url?: string;
  category?: string;
  blurb?: string;
  logo?: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<BlogSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<BlogSubmission | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'blogs' | 'toolbox'>('blogs');
  const [toolboxItems, setToolboxItems] = useState<ToolboxItem[]>([]);
  const [newTool, setNewTool] = useState<Partial<ToolboxItem>>({
    name: '',
    url: '',
    affiliate_url: '',
    category: 'AI Powerhouses',
    blurb: '',
    logo: ''
  });
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setAuthenticated(true);
    fetchSubmissions();
    loadToolboxData();
  }, [router]);

  const loadToolboxData = async () => {
    try {
      const response = await fetch('/api/admin/toolbox-data');
      const result = await response.json();
      if (result.success) {
        setToolboxItems(result.data || []);
        console.log('Loaded toolbox items:', result.data?.length || 0);
      } else {
        console.error('Error loading toolbox data:', result.error);
      }
    } catch (error) {
      console.error('Error loading toolbox data:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions');
      const result = await response.json();
      
      if (result.success) {
        setSubmissions(result.data || []);
      } else {
        console.error('Error fetching submissions:', result.error);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const result = await response.json();

      if (result.success) {
        // Refresh the list
        fetchSubmissions();
        alert(`Blog ${newStatus} successfully!`);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status. Check console for details.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const addToolboxItem = async () => {
    if (!newTool.name || !newTool.url || !newTool.blurb) {
      alert('Please fill in name, URL, and description');
      return;
    }

    try {
      const response = await fetch('/api/admin/toolbox', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTool),
      });

      const result = await response.json();

      if (result.success) {
        loadToolboxData();
        setNewTool({
          name: '',
          url: '',
          affiliate_url: '',
          category: 'AI Powerhouses',
          blurb: '',
          logo: ''
        });
        alert('Tool added successfully!');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error adding tool:', error);
      alert('Error adding tool. Check console for details.');
    }
  };

  const removeToolboxItem = async (name: string) => {
    if (!confirm(`Are you sure you want to remove "${name}"?`)) return;

    try {
      const response = await fetch('/api/admin/toolbox', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const result = await response.json();

      if (result.success) {
        loadToolboxData();
        alert('Tool removed successfully!');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error removing tool:', error);
      alert('Error removing tool. Check console for details.');
    }
  };

  if (!authenticated || loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">PivotPoint AI - Admin Dashboard</h1>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'blogs'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Blog Management
            </button>
            <button
              onClick={() => setActiveTab('toolbox')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'toolbox'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              AI Toolbox Management
            </button>
          </nav>
        </div>

        {/* Blog Management Tab */}
        {activeTab === 'blogs' && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Blog Submissions Management</h2>
              <p className="text-gray-600">Review and approve blog submissions from your community</p>
            </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submissions List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Submissions ({submissions.length})</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {submissions.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No submissions yet
                </div>
              ) : (
                submissions.map((submission) => (
                  <div
                    key={submission.id}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                      selectedSubmission?.id === submission.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 truncate pr-2">{submission.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">By {submission.name}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(submission.submitted_at).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Submission Details */}
          <div className="bg-white rounded-lg shadow">
            {selectedSubmission ? (
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{selectedSubmission.title}</h3>
                  <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedSubmission.status)}`}>
                    {selectedSubmission.status}
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-medium text-gray-700">Author:</label>
                      <p className="text-gray-900">{selectedSubmission.name}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-700">Email:</label>
                      <p className="text-gray-900">{selectedSubmission.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-medium text-gray-700">Country:</label>
                      <p className="text-gray-900">{selectedSubmission.country}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-700">Type:</label>
                      <p className="text-gray-900 capitalize">{selectedSubmission.blogtype}</p>
                    </div>
                  </div>
                  
                  {selectedSubmission.bio && (
                    <div>
                      <label className="font-medium text-gray-700">Bio:</label>
                      <p className="text-gray-900">{selectedSubmission.bio}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="font-medium text-gray-700">Content:</label>
                    <div className="mt-2 p-4 bg-gray-50 rounded border max-h-60 overflow-y-auto">
                      <div className="whitespace-pre-wrap text-sm text-gray-800">{selectedSubmission.content}</div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-medium text-gray-700">Submitted:</label>
                    <p className="text-gray-900">{new Date(selectedSubmission.submitted_at).toLocaleString()}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  {selectedSubmission.status === 'pending' && (
                    <>
                      <button
                        onClick={() => updateStatus(selectedSubmission.id, 'approved')}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium"
                      >
                        ✓ Approve
                      </button>
                      <button
                        onClick={() => updateStatus(selectedSubmission.id, 'rejected')}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-medium"
                      >
                        ✗ Reject
                      </button>
                    </>
                  )}
                  {selectedSubmission.status === 'approved' && (
                    <button
                      onClick={() => updateStatus(selectedSubmission.id, 'pending')}
                      className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 font-medium"
                    >
                      ↺ Mark as Pending
                    </button>
                  )}
                  {selectedSubmission.status === 'rejected' && (
                    <button
                      onClick={() => updateStatus(selectedSubmission.id, 'pending')}
                      className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 font-medium"
                    >
                      ↺ Mark as Pending
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <div className="text-4xl mb-4">📝</div>
                <p>Select a submission to view details and approve/reject</p>
              </div>
            )}
          </div>
        </div>
          </>
        )}

        {/* AI Toolbox Management Tab */}
        {activeTab === 'toolbox' && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">AI Toolbox Management</h2>
              <p className="text-gray-600">Manage your affiliate tools and recommendations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add New Tool Form */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Add New Tool</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tool Name</label>
                    <input
                      type="text"
                      value={newTool.name || ''}
                      onChange={(e) => setNewTool({...newTool, name: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="e.g., ChatGPT"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Direct URL</label>
                    <input
                      type="url"
                      value={newTool.url || ''}
                      onChange={(e) => setNewTool({...newTool, url: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="https://chat.openai.com/"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Affiliate URL (optional)</label>
                    <input
                      type="url"
                      value={newTool.affiliate_url || ''}
                      onChange={(e) => setNewTool({...newTool, affiliate_url: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="https://your-affiliate-link.com/"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      value={newTool.category || 'AI Powerhouses'}
                      onChange={(e) => setNewTool({...newTool, category: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="AI Powerhouses">🤖 AI Powerhouses</option>
                      <option value="Daily Essentials">⚡ Daily Essentials</option>
                      <option value="Finance & Accounting">💰 Finance & Accounting</option>
                      <option value="Marketing & Sales">📈 Marketing & Sales</option>
                      <option value="Automation Heroes">🔄 Automation Heroes</option>
                      <option value="Creative Studio">🎨 Creative Studio</option>
                      <option value="Analytics & Insights">📊 Analytics & Insights</option>
                      <option value="Team Collaboration">🏢 Team Collaboration</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      value={newTool.blurb || ''}
                      onChange={(e) => setNewTool({...newTool, blurb: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      rows={3}
                      placeholder="Brief description of what this tool does..."
                    />
                  </div>
                  
                  <button
                    onClick={addToolboxItem}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                  >
                    Add Tool
                  </button>
                </div>
              </div>

              {/* Current Tools List */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium">Current Tools ({toolboxItems.length})</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {toolboxItems.map((tool, index) => (
                    <div key={index} className="p-4 border-b border-gray-100">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <p className="text-sm text-gray-600">{tool.blurb}</p>
                          <div className="mt-2 text-xs text-gray-500">
                            <p>Category: {tool.category}</p>
                            <p>URL: {tool.url}</p>
                            {tool.affiliate_url && <p>Affiliate: Yes</p>}
                          </div>
                        </div>
                        <button
                          onClick={() => removeToolboxItem(tool.name)}
                          className="ml-4 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
