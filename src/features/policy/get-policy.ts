"use server";

import { CACHE_TAG_POLICIES } from "@/shared/lib/constants/constants";

import type { Policy } from "./types";

export async function getPolicy({
  slug,
}: {
  slug: string;
}): Promise<Policy | null> {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/policies?where[slug][in]=${slug}`,
    {
      method: "GET",
      next: {
        tags: [CACHE_TAG_POLICIES],
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

  const policy = results.docs[0];

  return {
    title: policy.title,
    content: policy.content,
    slug: policy.slug,
    last_updated: policy.last_updated,
  };
}
