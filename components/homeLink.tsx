"use client";

import React from "react";
import FootprintsIcon from "@/components/footPrintsIconsFloatingCard";
import Link from "next/link";

interface HomeLinkProps {
  className?: string;
}

export default function HomeLink({ className = "" }: HomeLinkProps) {
  return (
    <Link href="/" className={className} prefetch={false}>
      <FootprintsIcon />
      <span className="sr-only">Footwear Co.</span>
    </Link>
  );
}
