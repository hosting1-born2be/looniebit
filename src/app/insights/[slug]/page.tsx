import type { Metadata } from "next";
import Image from "next/image";

import FeaturedInsights from "../components/FeaturedInsights/FeaturedInsights";
import styles from "./page.module.scss";
import { getInsight } from "@/features/insights/get-insight";
import { renderContent } from "@/features/renderContent/renderContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const insight = await getInsight({ slug });

  if (!insight) {
    return {
      title: "Insight Not Found",
      description: "The requested insight could not be found.",
    };
  }

  return {
    title: insight.seo_title,
    description: insight.seo_description,
    openGraph: {
      title: insight.seo_title,
      description: insight.seo_description,
      images: insight.imageUrl ? [insight.imageUrl] : [],
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const insight = await getInsight({ slug });

  if (!insight) {
    return <div className={styles.notFound}>Insight not found</div>;
  }

  return (
    <>
      <div className={styles.insightPage}>
        <div className={"_container"}>
          <div className={styles.insightContent}>
            <h1 className={styles.title}>{insight.title}</h1>
            <h2 className={styles.excerpt}>{insight.excerpt_inner}</h2>

            {insight.imageUrl && (
              <div className={styles.imageContainer}>
                <Image
                  src={insight.imageUrl}
                  alt={insight.title}
                  className={styles.image}
                  width={940}
                  height={350}
                />
              </div>
            )}

            <div className={styles.content}>
              {renderContent(insight.content)}
            </div>
          </div>

          <FeaturedInsights slug={slug} />
        </div>
      </div>
    </>
  );
}
