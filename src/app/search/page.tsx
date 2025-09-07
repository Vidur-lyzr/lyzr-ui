"use client";

import React, { useState, useMemo } from "react";
import { Search, ExternalLink, FileText, Video, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#603BFC]/5 via-[#A94FA1]/5 to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#603BFC]/20 to-[#A94FA1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#A94FA1]/15 to-[#603BFC]/15 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#603BFC] to-[#A94FA1] rounded-xl flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#603BFC] to-[#A94FA1] bg-clip-text text-transparent">
              Lyzr Agent Discovery
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect AI agent for your business needs. Explore our comprehensive library of 
            production-ready agents across various industries and use cases.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Tell us the agent you are looking to build..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 border-border/50 focus:border-primary/50 bg-background/50"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full px-6 py-2 transition-all duration-200 hover:scale-105"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found <span className="font-semibold text-foreground">{filteredAgents.length}</span> agents
            {searchQuery && (
              <span> matching "<span className="font-semibold text-foreground">{searchQuery}</span>"</span>
            )}
            {selectedCategory !== "All" && (
              <span> in <span className="font-semibold text-foreground">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Results Table */}
        <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-[#603BFC]/10 to-[#A94FA1]/10 border-b-2 border-border/50">
                    <TableHead className="font-semibold text-foreground py-4 px-6">Agent Name</TableHead>
                    <TableHead className="font-semibold text-foreground py-4 px-6">Category</TableHead>
                    <TableHead className="font-semibold text-foreground py-4 px-6">Customer</TableHead>
                    <TableHead className="font-semibold text-foreground py-4 px-6">Agent Description</TableHead>
                    <TableHead className="font-semibold text-foreground py-4 px-6">Benefits</TableHead>
                    <TableHead className="font-semibold text-foreground py-4 px-6">Resources</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAgents.map((agent, index) => (
                    <TableRow 
                      key={agent.id} 
                      className="hover:bg-gradient-to-r hover:from-[#603BFC]/5 hover:to-[#A94FA1]/5 transition-all duration-200 border-b border-border/30"
                    >
                      <TableCell className="py-6 px-6">
                        <div className="font-semibold text-foreground text-base">
                          {agent.name}
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <Badge 
                          variant="outline" 
                          className="bg-gradient-to-r from-[#603BFC]/10 to-[#A94FA1]/10 border-primary/30 text-primary font-medium"
                        >
                          {agent.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-6 px-6 max-w-xs">
                        <div className="text-sm text-muted-foreground">
                          {agent.customer}
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6 max-w-md">
                        <div className="text-sm text-foreground leading-relaxed">
                          {agent.description}
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6 max-w-md">
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {agent.benefits}
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="flex flex-wrap gap-2">
                          {agent.links.map((link, linkIndex) => {
                            const IconComponent = getLinkIcon(link.type);
                            return (
                              <Button
                                key={linkIndex}
                                variant="outline"
                                size="sm"
                                className="text-xs hover:bg-gradient-to-r hover:from-[#603BFC]/10 hover:to-[#A94FA1]/10 hover:border-primary/50 transition-all duration-200"
                                asChild
                              >
                                <a href={link.url} className="flex items-center gap-1">
                                  <IconComponent className="w-3 h-3" />
                                  {link.type}
                                </a>
                              </Button>
                            );
                          })}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* No Results */}
        {filteredAgents.length === 0 && (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mt-8">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#603BFC]/20 to-[#A94FA1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No agents found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or category filters to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="hover:bg-gradient-to-r hover:from-[#603BFC]/10 hover:to-[#A94FA1]/10"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#603BFC]/10 to-[#A94FA1]/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't see what you're looking for?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team can help you build a custom AI agent tailored to your specific business needs. 
                Get in touch to discuss your requirements.
              </p>
              <Button size="lg" className="px-8 py-3 text-lg">
                Contact Our Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}