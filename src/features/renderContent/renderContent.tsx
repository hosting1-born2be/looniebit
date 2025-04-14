import React from "react";

import type { ContentChild, ContentType } from "./types";

export const renderContent = (content: ContentType) => {
  if (!content?.root?.children) {
    return null;
  }

  const blocks = content.root.children;

  return blocks.map((block, index) => {
    const renderInline = (child: ContentChild, i: number) => {
      if (child.type === "autolink" || child.type === "link") {
        return (
          <a
            key={i}
            href={child.fields?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {child.children?.map((child, j) => renderInline(child, j))}
          </a>
        );
      }

      if (child.format === 1) {
        return <strong key={i}>{child.text}</strong>;
      }

      return child.text;
    };

    switch (block.type) {
      case "paragraph":
        return (
          <p key={index}>
            {block.children?.map((child, i) => renderInline(child, i))}
          </p>
        );

      case "heading": {
        return block.tag === "h2" ? (
          <h2 key={index}>
            {block.children?.map((child) => child.text).join(" ")}
          </h2>
        ) : (
          <h3 key={index}>
            {block.children?.map((child) => child.text).join(" ")}
          </h3>
        );
      }

      case "list":
        if (block.tag === "ul") {
          return (
            <ul key={index}>
              {block.children?.map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  <span>
                    {item.children?.map((child, j) => renderInline(child, j))}
                  </span>
                </li>
              ))}
            </ul>
          );
        } else if (block.tag === "ol") {
          return (
            <ol key={index}>
              {block.children?.map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  <span>
                    {item.children?.map((child, j) => renderInline(child, j))}
                  </span>
                </li>
              ))}
            </ol>
          );
        }
        break;

      default:
        return null;
    }
  });
};
