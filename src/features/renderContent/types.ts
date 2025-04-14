export type ContentChild = {
  type?: string;
  text?: string;
  format?: number;
  fields?: {
    url?: string;
  };
  children?: ContentChild[];
};

export type ContentBlock = {
  type: string;
  tag?: string;
  children: ContentChild[];
};

export type ContentType = {
  root: Record<string, unknown> & {
    children?: ContentBlock[];
  };
};
