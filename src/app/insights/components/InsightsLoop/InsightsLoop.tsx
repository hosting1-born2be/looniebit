import InsightCard from "../InsightCard/InsightCard";
import styles from "./InsightsLoop.module.scss";
import { getInsights } from "@/features/insights/get-insights";

export default async function InsightsLoop() {
  const insights = await getInsights();
  return (
    <section className={styles.insightsLoop}>
      <div className={"_container"}>
        <div className={styles.insightsLoopContent}>
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  );
}
