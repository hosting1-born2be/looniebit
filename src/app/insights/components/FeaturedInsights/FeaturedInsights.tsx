import InsightCard from "../InsightCard/InsightCard";
import styles from "./FeaturedInsights.module.scss";
import { getInsights } from "@/features/insights/get-insights";

export default async function FeaturedInsights({ slug }: { slug: string }) {
  const insights = await getInsights(3, slug);
  return (
    <section className={styles.featuredInsights}>
      {insights.map((insight) => (
        <InsightCard key={insight.slug} insight={insight} />
      ))}
    </section>
  );
}
