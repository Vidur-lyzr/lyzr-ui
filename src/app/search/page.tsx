"use client";

import React, { useState, useMemo } from "react";
import { Search, ExternalLink, FileText, Video, BookOpen } from "lucide-react";

// Sample data for Lyzr agents
const agentsData = [
  {
    id: 1,
    name: "HR Help Desk",
    category: "HR",
    customer: "One of the largest banks in the world",
    description: "This agent helps in automating the internal HR support system.",
    benefits: "Saves 80% of the time the HR team spends in answering tickets.",
    links: [
      { type: "Case Study", url: "#", icon: FileText },
      { type: "Whitepaper", url: "#", icon: BookOpen },
      { type: "Demo Video", url: "#", icon: Video },
    ]
  },
  {
    id: 2,
    name: "Marketing Campaign Assistant",
    category: "Marketing",
    customer: "Fortune 500 E-commerce Company",
    description: "Automates campaign creation, audience targeting, and performance analysis.",
    benefits: "Increases campaign ROI by 45% and reduces setup time by 70%.",
    links: [
      { type: "Case Study", url: "#", icon: FileText },
      { type: "Demo Video", url: "#", icon: Video },
    ]
  },
  {
    id: 3,
    name: "Loan Processing Agent",
    category: "Banking",
    customer: "Regional Banking Institution",
    description: "Streamlines loan application processing and risk assessment.",
    benefits: "Reduces processing time from 5 days to 2 hours with 95% accuracy.",
    links: [
      { type: "Case Study", url: "#", icon: FileText },
      { type: "Whitepaper", url: "#", icon: BookOpen },
    ]
  },
  {
    id: 4,
    name: "Claims Processing Bot",
    category: "Insurance",
    customer: "Leading Insurance Provider",
    description: "Automates insurance claims processing and fraud detection.",
    benefits: "Processes 90% of claims automatically, reducing costs by 60%.",
    links: [
      { type: "Demo Video", url: "#", icon: Video },
      { type: "Whitepaper", url: "#", icon: BookOpen },
    ]
  },
  {
    id: 5,
    name: "Customer Support AI",
    category: "Customer Service",
    customer: "Global SaaS Platform",
    description: "24/7 intelligent customer support with multi-language capabilities.",
    benefits: "Handles 85% of queries automatically, improving satisfaction by 40%.",
    links: [
      { type: "Case Study", url: "#", icon: FileText },
      { type: "Demo Video", url: "#", icon: Video },
    ]
  },
  {
    id: 6,
    name: "Financial Advisory Agent",
    category: "Banking",
    customer: "Investment Management Firm",
    description: "Provides personalized investment recommendations and portfolio management.",
    benefits: "Increases client engagement by 65% and improves portfolio performance.",
    links: [
      { type: "Whitepaper", url: "#", icon: BookOpen },
    ]
  },
  {
    id: 7,
    name: "Recruitment Assistant",
    category: "HR",
    customer: "Tech Startup Unicorn",
    description: "Automates candidate screening, interview scheduling, and onboarding.",
    benefits: "Reduces time-to-hire by 50% and improves candidate quality scores.",
    links: [
      { type: "Case Study", url: "#", icon: FileText },
      { type: "Demo Video", url: "#", icon: Video },
    ]
  },
  {
    id: 8,
    name: "Policy Underwriting AI",
    category: "Insurance",
    customer: "National Insurance Company",
    description: "Intelligent policy underwriting with risk assessment and pricing.",
    benefits: "Improves underwriting accuracy by 35% and speeds up approval process.",
    links: [
      { type: "Whitepaper", url: "#", icon: BookOpen },
      { type: "Demo Video", url: "#", icon: Video },
    ]
  }
];

const categories = ["All", "HR", "Marketing", "Banking", "Insurance", "Customer Service"];

export default function AgentSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAgents = useMemo(() => {
    return agentsData.filter(agent => {
      const matchesSearch = 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.benefits.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "Case Study":
        return FileText;
      case "Demo Video":
        return Video;
      case "Whitepaper":
        return BookOpen;
      default:
        return ExternalLink;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-pink-500/15 to-purple-600/15 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Lyzr Agent Discovery
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect AI agent for your business needs. Explore our comprehensive library of 
            production-ready agents across various industries and use cases.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                placeholder="Tell us the agent you are looking to build..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 h-14 text-lg border-2 border-gray-200 focus:border-purple-500 bg-white/50 rounded-xl outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-purple-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredAgents.length}</span> agents
            {searchQuery && (
              <span> matching "<span className="font-semibold text-gray-900">{searchQuery}</span>"</span>
            )}
            {selectedCategory !== "All" && (
              <span> in <span className="font-semibold text-gray-900">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Results Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600/10 to-pink-500/10 border-b-2 border-gray-100">
                  <th className="font-semibold text-gray-900 py-4 px-6 text-left">Agent Name</th>
                  <th className="font-semibold text-gray-900 py-4 px-6 text-left">Category</th>
                  <th className="font-semibold text-gray-900 py-4 px-6 text-left">Customer</th>
                  <th className="font-semibold text-gray-900 py-4 px-6 text-left">Agent Description</th>
                  <th className="font-semibold text-gray-900 py-4 px-6 text-left">Benefits</th>
                  <th className="font-semibold text-gray-900 py-4 px-6 text-left">Resources</th>
                </tr>
              </thead>
              <tbody>
                {filteredAgents.map((agent) => (
                  <tr 
                    key={agent.id} 
                    className="hover:bg-gradient-to-r hover:from-purple-600/5 hover:to-pink-500/5 transition-all duration-200 border-b border-gray-100"
                  >
                    <td className="py-6 px-6">
                      <div className="font-semibold text-gray-900 text-base">
                        {agent.name}
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="bg-gradient-to-r from-purple-600/10 to-pink-500/10 border border-purple-200 text-purple-700 font-medium px-3 py-1 rounded-full text-sm">
                        {agent.category}
                      </span>
                    </td>
                    <td className="py-6 px-6 max-w-xs">
                      <div className="text-sm text-gray-600">
                        {agent.customer}
                      </div>
                    </td>
                    <td className="py-6 px-6 max-w-md">
                      <div className="text-sm text-gray-900 leading-relaxed">
                        {agent.description}
                      </div>
                    </td>
                    <td className="py-6 px-6 max-w-md">
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {agent.benefits}
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex flex-wrap gap-2">
                        {agent.links.map((link, linkIndex) => {
                          const IconComponent = getLinkIcon(link.type);
                          return (
                            <a
                              key={linkIndex}
                              href={link.url}
                              className="flex items-center gap-1 text-xs border border-gray-200 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-pink-500/10 hover:border-purple-300 transition-all duration-200 px-3 py-1 rounded-full"
                            >
                              <IconComponent className="w-3 h-3" />
                              {link.type}
                            </a>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results */}
        {filteredAgents.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mt-8 p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No agents found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filters to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="bg-white border border-gray-200 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-pink-500/10 px-6 py-2 rounded-full transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-500/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Don't see what you're looking for?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you build a custom AI agent tailored to your specific business needs. 
              Get in touch to discuss your requirements.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 text-lg rounded-full hover:opacity-90 transition-opacity">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}