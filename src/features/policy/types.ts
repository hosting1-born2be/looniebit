export type RawPolicy = {
  title: string;
  content: {
    root: Record<string, unknown>;
  };
  slug: string;
  last_updated: string;
};

export type Policy = {
  title: string;
  content: {
    root: Record<string, unknown>;
  };
  slug: string;
  last_updated: string;
};
