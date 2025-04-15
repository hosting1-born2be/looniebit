import React from "react";

import type { ContentChild, ContentType } from "./types";

const renderListItem = (item: ContentChild, index: number) => {
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

  const hasNestedList = item.children?.some(
    child => child.type === "list" && child.tag === "ol"
  );

  return (
    <li 
      key={index} 
      style={{ marginBottom: "8px" }}
      className={hasNestedList ? "have-child" : ""}
    >
      <span>
        {item.children?.map((child, j) => {
          if (child.type === "list" && child.tag === "ol") {
            return (
              <ol key={j}>
                {child.children?.map((nestedItem, k) => renderListItem(nestedItem, k))}
              </ol>
            );
          }
          return renderInline(child, j);
        })}
      </span>
    </li>
  );
};

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
              {block.children?.map((item, i) => renderListItem(item, i))}
            </ul>
          );
        } else if (block.tag === "ol") {
          return (
            <ol key={index}>
              {block.children?.map((item, i) => renderListItem(item, i))}
            </ol>
          );
        }
        break;

      default:
        return null;
    }
  });
};
