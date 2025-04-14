"use server";

import { CACHE_TAG_INSIGHTS } from "@/shared/lib/constants/constants";

import type { Insight, RawInsight } from "./types";

export async function getInsights(
  quantity?: number,
  excludeSlug?: string
): Promise<Insight[]> {
  const res = await fetch(`${process.env.SERVER_URL}/api/insights`, {
    method: "GET",
    next: {
      tags: [CACHE_TAG_INSIGHTS],
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch insights:", res.statusText);
    return [];
  }

  const results = await res.json();

  const formattedInsights =
    results?.docs?.map((insight: RawInsight) => ({
      title: insight.title,
      imageUrl: `${process.env.SERVER_URL}${insight.image?.url}`,
      content: insight.content,
      slug: insight.slug,
      excerpt_inner: insight.excerpt_inner,
    })) || [];

  // Filter out the insight with the specified slug if provided
  const filteredInsights = excludeSlug
    ? formattedInsights.filter(
        (insight: Insight) => insight.slug !== excludeSlug
      )
    : formattedInsights;

  console.log(filteredInsights);

  return quantity
    ? filteredInsights.slice(0, quantity).reverse()
    : filteredInsights.reverse();
}
