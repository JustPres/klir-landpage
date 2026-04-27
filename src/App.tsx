/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Droplets, 
  Activity, 
  Zap,
  ArrowRight,
  Layers
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: any;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.15 }}
    className="group relative"
  >
    <div className="glass-panel p-10 h-full hover:border-white/20 transition-all duration-700">
      <div className="w-12 h-12 mb-8 flex items-center justify-center border border-luxury-border rounded-full group-hover:scale-110 transition-transform">
        <Icon className="text-luxury-accent/60" size={20} />
      </div>
      <h3 className="font-serif text-2xl italic font-light mb-4">{title}</h3>
      <p className="text-sm text-luxury-secondary leading-relaxed font-light">{description}</p>
    </div>
  </motion.div>
);

interface ComponentNodeProps {
  label: string;
  image: string;
}

const ComponentNode: React.FC<ComponentNodeProps> = ({ label, image }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="flex flex-col items-center gap-6"
  >
    <div className="w-28 h-28 glass-panel p-6 flex items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <img src={image} alt={label} className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale" referrerPolicy="no-referrer" />
    </div>
    <span className="luxury-meta text-center">{label}</span>
  </motion.div>
);


export default function App() {
  const features = [
    {
      title: "Automated Control",
      description: "Servo-motorized lid management for completely touchless interaction.",
      icon: Layers
    },
    {
      title: "Active Detection",
      description: "High-frequency ultrasonic sensing for sub-millimeter precision.",
      icon: Zap
    },
    {
      title: "Fluid Monitoring",
      description: "Real-time algorithmic water tracking to minimize environmental impact.",
      icon: Droplets
    },
    {
      title: "UV-C Purification",
      description: "Medical-grade sterilization cycles ensure perpetual clinical safety.",
      icon: ShieldCheck
    }
  ];

  const components = [
    { label: "ESP32 CORE", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670" },
    { label: "HYDRO SENSOR", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2670" },
    { label: "UV MODULE", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2670" },
    { label: "SERVO CORE", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=2670" }
  ];

  return (
    <div className="min-h-screen bg-luxury-bg selection:bg-white selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03]" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.03]" />
        <div className="absolute bottom-40 left-0 w-full h-px bg-white/[0.03]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-luxury-accent/5 rounded-full blur-[160px] animate-pulse" />
      </div>

      <main>
        {/* Single Immersive Hero Section */}
        <section className="relative min-h-screen flex flex-col pt-24 px-8 lg:px-20 max-w-screen-2xl mx-auto">
          {/* Logo/Brand Start */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-24"
          >
            <div className="w-12 h-px bg-white/20" />
            <span className="luxury-meta">Klir Systems — 2024</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 flex-1 items-start">
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                <div className="luxury-meta text-luxury-accent mb-6 flex items-center gap-3">
                  <Activity size={12} className="animate-pulse" />
                  IoT Ecosystem Active
                </div>
                <h1 className="luxury-title text-[clamp(4.5rem,12vw,10rem)] block">
                  Silent <br />
                  <span className="pl-[12%]">Intelligence</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="max-w-xl"
              >
                <p className="text-lg font-light text-luxury-secondary leading-relaxed mb-10">
                  Redefining the architecture of hygiene. Klir integrates ESP32-based machine intelligence with clinical-grade UV-C sterilization to create an environment of perpetual purity.
                </p>
                <div className="flex items-center gap-10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-6 luxury-meta text-white border border-white/20 px-8 py-5 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    Technical Spec <ArrowRight size={14} />
                  </motion.button>
                  <div className="hidden sm:flex items-center gap-4">
                    <div className="h-px w-10 bg-luxury-border" />
                    <span className="luxury-meta italic">Scroll Explore</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative h-full flex items-center justify-center pt-20 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 2, type: "spring" }}
                className="relative z-10 w-full"
              >
                <div className="aspect-[4/5] glass-panel overflow-hidden relative glow-subtle">
                  <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2670" 
                    alt="Klir Architecture" 
                    className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[3s]" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-60" />
                </div>

                {/* Technical Node Overlay */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-6 glass-panel p-6 border-white/10 z-20 hidden md:block"
                >
                  <div className="luxury-meta text-luxury-accent text-[8px] mb-2">System Telemetry</div>
                  <div className="font-mono text-3xl font-thin">0.85<span className="text-sm opacity-40 ml-1">L/S</span></div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-6 glass-panel p-6 border-white/10 z-20 hidden md:block"
                >
                  <div className="luxury-meta text-[8px] mb-2">Sterilization</div>
                  <div className="font-mono text-xl text-white">99.9% <span className="opacity-40">UV-C</span></div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Feature Ribbon - Minimalist Footer of Hero */}
          <div className="mt-32 pb-20 border-t border-white/[0.03] pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-2">
                <span className="luxury-meta text-luxury-accent">01 System</span>
                <p className="text-sm font-light">Automated Lid Control</p>
              </div>
              <div className="space-y-2">
                <span className="luxury-meta text-luxury-accent">02 Safety</span>
                <p className="text-sm font-light">UV-C Disinfection Cycle</p>
              </div>
              <div className="space-y-2">
                <span className="luxury-meta text-luxury-accent">03 Tracking</span>
                <p className="text-sm font-light">Real-time Consumption</p>
              </div>
              <div className="space-y-2">
                <span className="luxury-meta text-luxury-accent">04 Cloud</span>
                <p className="text-sm font-light">ESP32 HiveMQ Link</p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Hardware Grid - Future Premium Style */}
        <section className="py-40 px-8 lg:px-20 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="luxury-meta mb-6 block border-l-2 border-luxury-accent pl-6">Architecture</span>
              <h2 className="luxury-title text-6xl md:text-8xl">The Hardware <br /><span className="opacity-30 pl-[10%]">Manifesto</span></h2>
            </div>
            <p className="text-sm font-light text-luxury-secondary max-w-xs leading-relaxed italic">
              "We strip away the mechanical noise until only the essential intelligence remains in the room."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <FeatureCard 
                key={i} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
                index={i} 
              />
            ))}
          </div>
        </section>

        {/* Technical Core Section */}
        <section className="py-40 border-y border-white/[0.03]">
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <h3 className="luxury-meta mb-6">Component Registry</h3>
              <div className="flex flex-wrap justify-center gap-16 lg:gap-32">
                {components.map((comp, i) => (
                  <ComponentNode 
                    key={i} 
                    label={comp.label} 
                    image={comp.image} 
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block relative group"
            >
              <div className="absolute inset-0 bg-white blur-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
              <button className="relative luxury-title text-5xl md:text-7xl underline underline-offset-[20px] decoration-1 decoration-white/10 hover:decoration-white transition-all">
                Let's evolve hygiene.
              </button>
            </motion.div>
          </div>
        </section>

        {/* Global Minimal Footer */}
        <footer className="py-20 px-8 lg:px-20 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-luxury-accent rounded-full animate-pulse" />
            </div>
            <span className="luxury-meta tracking-[0.6em]">Klir — Systems</span>
          </div>
          
          <div className="flex gap-16">
            <div>
              <p className="luxury-meta text-white/30 mb-2">Contact</p>
              <p className="text-xs font-light">eng@klir.studio</p>
            </div>
            <div>
              <p className="luxury-meta text-white/30 mb-2">HQ</p>
              <p className="text-xs font-light italic">Digital Space</p>
            </div>
          </div>

          <span className="luxury-meta text-white/20">© 2024. All Rights Reserved.</span>
        </footer>
      </main>
    </div>
  );
}

