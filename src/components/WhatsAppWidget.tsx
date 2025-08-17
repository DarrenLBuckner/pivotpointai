"use client";

import { useState, useEffect } from 'react';

interface WhatsAppWidgetProps {
  phoneNumber: string; // Format: +1234567890
  defaultMessage?: string;
}

// WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

// Close Icon SVG
const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

export default function WhatsAppWidget({ 
  phoneNumber, 
  defaultMessage = "Hi Darren! I found your PivotPoint AI website and I'm interested in learning how AI can help grow my business in emerging markets." 
}: WhatsAppWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [customMessage, setCustomMessage] = useState(defaultMessage);

  // Get page-specific messages
  useEffect(() => {
    const path = window.location.pathname;
    let pageMessage = defaultMessage;
    
    switch (path) {
      case '/services':
        pageMessage = "Hi Darren! I'd like to learn more about your AI implementation services for my business.";
        break;
      case '/mentorship':
        pageMessage = "Hi Darren! I'm interested in your AI mentorship program. Can we discuss how it works?";
        break;
      case '/ai-toolbox':
        pageMessage = "Hi Darren! I want to explore your AI toolbox - it looks perfect for my business needs.";
        break;
      case '/blog':
        pageMessage = "Hi Darren! I read your blog and want to discuss AI solutions for my business. When can we talk?";
        break;
      case '/get-started':
        pageMessage = "Hi Darren! I'm ready to get started with AI implementation. Let's discuss next steps!";
        break;
    }
    
    setCustomMessage(pageMessage);
  }, [defaultMessage]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(customMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Expanded Widget */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 max-w-[calc(100vw-3rem)] border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">PivotPoint AI</h4>
                  <p className="text-sm text-green-600">Available on WhatsApp</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">
              Get instant AI consultation for Caribbean & African businesses
            </p>
            
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full p-2 text-sm border border-gray-200 rounded-lg resize-none h-20 mb-3"
              placeholder="Type your message..."
            />
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Send Message
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open WhatsApp Chat"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </button>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </>
  );
}
