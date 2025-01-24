"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Cloud customization options for dark mode
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false, // Disable zooming
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000", // Transparent outline
    maxSpeed: 0.03,
    minSpeed: 0.005,
  },
};

// Render icons with static white color
const renderCustomIcon = (icon) => {
  const bgHex = "#080510"; // Fixed dark background
  const fallbackHex = "#ffffff"; // Fixed white icon color
  const minContrastRatio = 2; // Ensure good contrast

  return renderSimpleIcon({
    icon,
    bgHex, // Background hex color (fixed)
    fallbackHex, // Icon color (fixed to white)
    minContrastRatio, // Contrast sensitivity
    size: 42, // Icon size
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(), // Prevent default behavior
    },
  });
};

const iconSlugs = [
  "cplusplus",
  "typescript",
  "javascript",
  "html5",
  "prisma",
  "mysql",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "microsoft-excel",
  "tableau",
  "pytorch",
  "figma",
  "python",
  "vercel",
  "pandas"
];

const IconCloud = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <div className="icon-cloud-container relative flex flex-col justify-center items-center max-w-[600px] mx-auto space-y-6 py-10 mb-20">
      <h2 className="text-2xl font-bold text-white text-center">Technical Skills</h2>
      <div className="relative w-full h-[400px]">
        <Cloud {...cloudProps}>{renderedIcons}</Cloud>
      </div>
    </div>
  );
};

export default IconCloud;