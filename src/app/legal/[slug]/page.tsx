import type { Metadata } from "next";

import styles from "./page.module.scss";
import { getPolicy } from "@/features/policy/get-policy";
import { renderContent } from "@/features/renderContent/renderContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const policy = await getPolicy({ slug });

  if (!policy) {
    return {
      title: "Policy Not Found",
      description: "The requested policy could not be found.",
    };
  }

  return {
    title: policy.title,
    openGraph: {
      title: policy.title,
    },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const policy = await getPolicy({ slug });

  const date = new Date(policy?.last_updated || "");

  if (!policy) {
    return <div className={styles.notFound}>Policy not found</div>;
  }

  return (
    <>
      <div className={styles.insightPage}>
        <div className={"_container"}>
          <div className={styles.insightContent}>
            <h1 className={styles.title}>{policy.title}</h1>
            <h2 className={styles.lastUpdated}>
              Last updated: {date.toLocaleDateString()}
            </h2>

            <div className={styles.content}>
              {renderContent(policy.content)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
