import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { LiveProjectButton, GitHubButton } from "./Buttons";
import {
  Server,
  Video,
  Search,
  Box,
  Layers,
  CheckSquare,
  FileText,
  MessageSquare,
  CheckCircle2,
  Terminal,
  X,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "p2ptransfer",
    category: "Distributed Systems & Networking",
    icon: <Server className="w-5 h-5 text-white" />,
    tagline: "Peer-to-Peer High-Throughput Data Streaming Protocol",
    description:
      "A direct peer-to-peer data and file transfer system engineered for low-latency transmission across decentralized nodes without routing through centralized relays. Implements binary chunking, stream multiplexing, and cryptographic checksum validation.",
    highlights: [
      "Direct WebRTC & raw socket mesh communication for zero-relay data transfer",
      "Adaptive chunk sizing and sliding window protocol for congested network topologies",
      "Cryptographic SHA-256 block verification ensuring zero data corruption during transit",
    ],
    tech: ["JavaScript", "WebRTC", "Node.js", "Socket.io", "Streams API"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/p2ptransfer",
    liveUrl: "https://p2ptransfer.onrender.com",
  },
  {
    number: "02",
    name: "Roomer Chat",
    category: "WebRTC & Real-Time Video Streaming",
    icon: <Video className="w-5 h-5 text-white" />,
    tagline: "Real-Time Anonymous Peer-to-Peer Video Chat Application",
    description:
      "A real-time anonymous video chat application that connects random users worldwide for instant peer-to-peer video conversations. Built with React 18, Vite, Socket.IO signaling, and PeerJS WebRTC streaming with Google STUN NAT traversal.",
    highlights: [
      "Anonymous Video Matching: Instant global matchmaking with Socket.IO signaling",
      "Peer-to-Peer Video Streaming: Direct audio/video transmission using WebRTC & PeerJS",
      "STUN Server Support: Google STUN servers with auto-reconnection polling fallback",
    ],
    tech: ["React 18", "WebRTC", "PeerJS", "Socket.IO", "Tailwind CSS", "Vite", "Render"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/lrommer1",
    liveUrl: "https://lrommer.onrender.com",
  },
  {
    number: "03",
    name: "mini-search-engine",
    category: "Information Retrieval & Algorithms",
    icon: <Search className="w-5 h-5 text-white" />,
    tagline: "Inverted Index Search Engine Built From Scratch in C++",
    description:
      "A lightweight, full-text search engine built entirely from scratch in C++. Parses arbitrary text corpora, constructs an inverted index, computes TF-IDF statistical term weights for precise relevance ranking, and persists indexes directly to binary disk storage.",
    highlights: [
      "Custom inverted index supporting multi-word boolean AND queries",
      "Term Frequency-Inverse Document Frequency (TF-IDF) scoring algorithm",
      "Binary disk persistence and on-demand deserialization with zero 3rd-party libraries",
    ],
    tech: ["C++", "Algorithms", "TF-IDF", "Inverted Index", "Disk Persistence"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/mini-search-engine",
    liveUrl: null,
  },
  {
    number: "04",
    name: "3d-renderer",
    category: "Graphics & Computational Geometry",
    icon: <Box className="w-5 h-5 text-white" />,
    tagline: "3D Graphics Rendering Pipeline in C++ / CMake",
    description:
      "A custom 3D software rasterization and rendering engine built in C++. Computes 3D-to-2D perspective projection, matrix transformations, back-face culling, wireframe and shaded polygon rasterization, and lighting models.",
    highlights: [
      "Full 3D transformation pipeline: Model, View, Projection, and Viewport matrices",
      "Phong and Flat shading lighting calculations with custom normal computation",
      "Modular CMake build architecture with portable cross-platform compilation",
    ],
    tech: ["C++", "CMake", "OpenGL / Rasterization", "3D Math", "Linear Algebra"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/3d-renderer",
    liveUrl: null,
  },
  {
    number: "05",
    name: "load-balancer",
    category: "Networking & Distributed Infrastructure",
    icon: <Layers className="w-5 h-5 text-white" />,
    tagline: "High-Performance Network Traffic Load Balancer",
    description:
      "A multithreaded network load balancer in C++ designed to distribute incoming socket connections across multiple backend servers with active health checking, latency monitoring, and automated failover routing.",
    highlights: [
      "Multiple load-balancing strategies: Weighted Round Robin, Least Connections, and IP Hash",
      "Asynchronous health-check daemon actively removing degraded backend nodes",
      "Non-blocking socket I/O for concurrent connection throughput",
    ],
    tech: ["C++", "Socket Programming", "Multithreading", "Concurrency", "Networking"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/load-balancer",
    liveUrl: null,
  },
  {
    number: "06",
    name: "colloborative-todo-list",
    category: "Real-Time Collaboration & WebSockets",
    icon: <CheckSquare className="w-5 h-5 text-white" />,
    tagline: "Multiplayer Real-Time Synchronized Task & Workflow Platform",
    description:
      "A real-time collaborative workspace allowing multiple distributed users to create, assign, update, and manage task boards simultaneously with instant state reconciliation and conflict-free updates.",
    highlights: [
      "Real-time bidirectional WebSocket sync for sub-50ms latency collaboration",
      "Optimistic UI updates with resilient state rollback on disconnects",
      "Multi-user presence indicators and active team synchronization",
    ],
    tech: ["JavaScript", "React", "Node.js", "WebSockets", "Tailwind CSS"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/colloborative-todo-list",
    liveUrl: null,
  },
  {
    number: "07",
    name: "document-summariser",
    category: "AI Engineering & NLP",
    icon: <FileText className="w-5 h-5 text-white" />,
    tagline: "Intelligent Document Parsing & Abstractive AI Summarizer",
    description:
      "An AI-powered document analysis platform that ingests unstructured PDFs, articles, and technical docs, extracting core insights, key takeaways, and structured chapter summaries using advanced language models.",
    highlights: [
      "Multi-format document extraction and chunking for context-window optimization",
      "Context-aware abstractive summarization with customizable detail depth",
      "Fast asynchronous processing pipeline with real-time streaming responses",
    ],
    tech: ["JavaScript", "OpenAI / LLMs", "Node.js", "PDF Parser", "REST API"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/document-summariser",
    liveUrl: null,
  },
  {
    number: "08",
    name: "chatee",
    category: "AI Chatbot & Generative Interface",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    tagline: "Conversational AI Interface Powered by Google Gemini 2.0 Flash",
    description:
      "A React-based AI chatbot interface that integrates Google's Gemini 2.0 Flash API to deliver multimodal conversational AI with both text responses and image generation capabilities. A minimal, performant web application with local chat history persistence and a clean ChatGPT-style interface.",
    highlights: [
      "Google Gemini 2.0 Flash API integration for multimodal text & image generation",
      "React 19 + Vite 6 architecture with useState/useEffect for stateful chat management",
      "Local chat history persistence with Tailwind CSS clean chat interface",
    ],
    tech: ["React 19", "Vite 6", "Gemini 2.0 Flash", "@google/genai", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/ibrahimabdulquadri101/chatee",
    liveUrl: "https://chatee-ob6y.onrender.com",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (proj) => setSelectedProject(proj);
  const closeProject = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#000000] text-white px-5 sm:px-8 md:px-12 py-24 sm:py-32 z-10 select-none overflow-hidden border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ repositories_and_systems ]</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 9vw, 130px)" }}
          >
            Projects
          </h2>
          <p className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-mono mt-3">
            Click any card to inspect full technical architecture
          </p>
        </FadeIn>

        {/* Compact Grid of Small Box Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((proj, idx) => (
            <FadeIn key={proj.number} delay={idx * 0.04} y={20} className="w-full h-full">
              <div
                role="button"
                tabIndex={0}
                onClick={() => openProject(proj)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openProject(proj)}
                className="w-full h-full min-h-[260px] rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0A0A0A] hover:bg-[#111111] p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer group text-left relative overflow-hidden"
              >
                {/* Top Row: Number, Category, Expand Icon */}
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                        {proj.number}
                      </span>
                      <div className="p-1 rounded-md bg-white/[0.06] border border-white/10 shrink-0">
                        {proj.icon}
                      </div>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-mono truncate max-w-[140px]">
                        {proj.category}
                      </span>
                    </div>

                    <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black text-white/60 transition-all shrink-0">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="pt-4 space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-white">
                      {proj.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light line-clamp-2 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom Tech Pills & Click Hint */}
                <div className="pt-4 mt-4 border-t border-white/5 flex flex-col gap-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.slice(0, 3).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                    {proj.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-white/[0.02] text-[10px] font-mono text-white/40">
                        +{proj.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-white transition-colors pt-1">
                    <span>INSPECT SYSTEM</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Pop-out Full Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Popout Card Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F0F12] border border-white/20 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 text-white select-text"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white/40">
                    {selectedProject.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white/[0.06] border border-white/15">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mt-0.5">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline & Full Description */}
              <div className="py-6 space-y-3">
                <div className="text-base sm:text-lg font-medium text-white font-mono">
                  &gt; {selectedProject.tagline}
                </div>
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technical Specifications Highlights */}
              <div className="py-2">
                <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-3">
                  [ ARCHITECTURE & KEY CAPABILITIES ]
                </div>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white/90 leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-6 pb-8">
                <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2.5">
                  [ TECHNOLOGIES & TOOLS ]
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/15 text-xs font-mono text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.githubUrl && (
                    <GitHubButton
                      href={selectedProject.githubUrl}
                      label="View Source Code"
                    />
                  )}
                  {selectedProject.liveUrl && (
                    <LiveProjectButton
                      href={selectedProject.liveUrl}
                      label="Launch Live Platform"
                    />
                  )}
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  className="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                >
                  [ Close ]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
