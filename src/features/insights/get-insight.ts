"use server";

import { CACHE_TAG_INSIGHTS } from "@/shared/lib/constants/constants";

import type { Insight } from "./types";

export async function getInsight({
  slug,
}: {
  slug: string;
}): Promise<Insight | null> {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/insights?where[slug][in]=${slug}`,
    {
      method: "GET",
      next: {
        tags: [CACHE_TAG_INSIGHTS],
      },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch insights:", res.statusText);
    return null;
  }

  const results = await res.json();

  if (!results?.docs || results.docs.length === 0) {
    return null;
  }

  const insight = results.docs[0];

  return {
    title: insight.title,
    imageUrl: `${process.env.SERVER_URL}${insight.image?.url}`,
    content: insight.content,
    slug: insight.slug,
    excerpt_inner: insight.excerpt_inner,
    seo_title: insight.seo_title || insight.title,
    seo_description: insight.seo_description || insight.excerpt_inner,
  };
}
