import { useSearchParams } from "react-router-dom";
import { companyContent } from "../utils/constant";
import { Target, ArrowRight } from "lucide-react";

export default function CompanyPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query parameter `?section=...` get karein
  const activeSlug = searchParams.get("section") || "about-kinetic";

  // Matching content dhundein (default: About Kinetic)
  const activeData =
    companyContent.find((item) => item.slug === activeSlug) ||
    companyContent[0];

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Company <span className="text-blue-600">Information</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Learn more about Kinetic Marketplace, our mission, and our values.
          </p>
        </div>

        {/* Sidebar Tabs & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {companyContent.map((item) => {
                const isActive = item.slug === activeData.slug;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSearchParams({ section: item.slug })}
                    className={`whitespace-nowrap flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                    }`}
                  >
                    <span>{item.title}</span>
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

          {/* Dynamic Content Display Area */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              {activeData.title}
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              {activeData.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Mission Box (Agar mission details moujood hai) */}
            {activeData.mission && (
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-lg shadow-sm">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {activeData.mission.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {activeData.mission.content}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
