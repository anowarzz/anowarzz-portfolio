"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background gradient similar to hero */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            404
          </h1>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Page Not Found
            </h2>
            <p className="text-lg text-white/70 mt-4 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into
              the digital void.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/50"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full" />
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
