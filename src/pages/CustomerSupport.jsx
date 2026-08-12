import { useState } from "react";
import {
  Search,
  Package,
  RefreshCw,
  CreditCard,
  User,
  CheckCircle2,
} from "lucide-react";

export default function CustomerSupport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    {
      icon: Package,
      title: "Track Orders",
      desc: "Check delivery status & tracking",
    },
    {
      icon: RefreshCw,
      title: "Returns & Refunds",
      desc: "Initiate return or replacement",
    },
    {
      icon: CreditCard,
      title: "Payment Issues",
      desc: "Cards, UPI, & billing queries",
    },
    {
      icon: User,
      title: "Account & Profile",
      desc: "Password reset & settings",
    },
  ];

  const faqs = [
    {
      q: "How can I track my order status?",
      a: "You can track your order by clicking on 'Track Orders' in your account dashboard or by entering your tracking ID on our Shipping Info page.",
    },
    {
      q: "What is Kinetic's Return Policy?",
      a: "We offer a 7-day hassle-free return policy for most unused items in original packaging with tags intact.",
    },
    {
      q: "When will I receive my refund?",
      a: "Refunds are processed within 3-5 business days after the returned item reaches our fulfillment center.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Visa, Mastercard, AMEX, PayPal, Apple Pay, Google Pay, and Net Banking.",
    },
  ];

  const filteredFaqs = faqs.filter((f) =>
    f.q.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero & Search Header */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            How can we help you?
          </h1>
          <p className="mt-3 text-blue-100 text-sm sm:text-base">
            Search our help articles or get in touch with customer care.
          </p>

          <div className="mt-6 max-w-2xl mx-auto relative">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search help topics, keywords, or questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Quick Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <cat.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-base">{cat.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left px-5 py-4 font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <span className="text-blue-600 font-bold">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                No matching questions found for "{searchQuery}".
              </p>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Still need help? Send us a message
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Our support team usually responds within 24 hours.
          </p>

          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 size={20} />
              <span className="text-sm font-medium">
                Thank you! Your ticket has been submitted successfully.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Order ID (Optional)
              </label>
              <input
                type="text"
                placeholder="#KIN-987654"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your query in detail..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-200 text-sm"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
