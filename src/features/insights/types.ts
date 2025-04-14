export type RawInsight = {
  title: string;
  image?: {
    url: string;
  };
  content: {
    root: Record<string, unknown>;
  };
  slug: string;
  excerpt_inner: string;
};

export type Insight = {
  title: string;
  imageUrl?: string;
  content: {
    root: Record<string, unknown>;
  };
  slug: string;
  excerpt_inner: string;
  seo_title: string;
  seo_description: string;
};
