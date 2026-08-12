import { useSearchParams } from "react-router-dom";
import { legalContent } from "../utils/constant";
import { ShieldCheck, FileText, ArrowRight, Clock } from "lucide-react";

export default function LegalPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query param `?section=...` get karein
  const activeSlug = searchParams.get("section") || "terms-of-service";

  // Matching content select karein
  const activeData =
    legalContent.find((item) => item.slug === activeSlug) || legalContent[0];

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center sm:text-left border-b border-gray-200 pb-6">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 font-bold text-sm mb-2">
            <ShieldCheck size={20} />
            <span>KINETIC LEGAL & TRUST CENTER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Legal Agreements & <span className="text-blue-600">Policies</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Read our legal terms, data protection guidelines, and cookie privacy
            policies.
          </p>
        </div>

        {/* Sidebar + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Tabs */}
          <div className="lg:col-span-1">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {legalContent.map((item) => {
                const isActive = item.slug === activeData.slug;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSearchParams({ section: item.slug })}
                    className={`whitespace-nowrap flex items-center justify-between px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText size={16} />
                      <span>{item.title}</span>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`hidden lg:block transition-transform ${
                        isActive ? "translate-x-0" : "-translate-x-1 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {activeData.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Clock size={14} />
                <span>Last Updated: {activeData.lastUpdated}</span>
              </div>
            </div>

            {/* Legal Policy Sections */}
            <div className="space-y-6">
              {activeData.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {sec.heading}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500 leading-relaxed">
              If you have any questions or concerns regarding our{" "}
              {activeData.title}, please contact our Legal & Compliance Team at{" "}
              <a
                href="mailto:legal@kineticmarket.com"
                className="text-blue-600 underline font-medium"
              >
                legal@kineticmarket.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
