import type { ComponentType, SVGProps } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export type SkillIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Sanity's `skill.icon` field is a plain string (e.g. "react", "nextjs").
 * This maps those string keys to the actual icon components. Add an entry
 * here whenever a new icon is introduced in the Studio.
 */
export const skillIconMap: Record<string, SkillIconComponent> = {
  react: ReactLight,
  nextjs: NextjsIconDark,
  "next.js": NextjsIconDark,
  typescript: Typescript,
  ts: Typescript,
  nodejs: Nodejs,
  "node.js": Nodejs,
  node: Nodejs,
  python: Python,
  go: Golang,
  golang: Golang,
  postgres: Postgresql,
  postgresql: Postgresql,
  docker: Docker,
  kubernetes: Kubernetes,
  k8s: Kubernetes,
  java: Java,
  csharp: Csharp,
  "c#": Csharp,
};

/**
 * Resolves a skill's icon to a renderable component.
 * - If `icon` is already a component (static DATA fallback), it's returned as-is.
 * - If `icon` is a string (from Sanity), it's looked up in `skillIconMap`.
 * - Returns undefined if there's no match, so callers can render nothing.
 */
export function resolveSkillIcon(
  icon: SkillIconComponent | string | undefined | null
): SkillIconComponent | undefined {
  if (!icon) return undefined;
  if (typeof icon !== "string") return icon;
  return skillIconMap[icon.trim().toLowerCase()];
}
