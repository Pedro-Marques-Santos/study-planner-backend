import { startOfToday, endOfWeek, startOfWeek } from "date-fns";

type PeriodType = "today" | "week" | "future" | "all";

type DateFilter = {
  gte?: Date;
  lte?: Date;
  lt?: Date;
  gt?: Date;
};

/**
 * Returns Prisma-compatible date filter based on period
 */
export function getDateFilterByPeriod(
  period: PeriodType,
): DateFilter | undefined {
  const now = new Date();

  switch (period) {
    case "today":
      return {
        gte: startOfToday(),
        lt: new Date(now.setHours(23, 59, 59, 999)),
      };

    case "week":
      const start = startOfWeek(now, { weekStartsOn: 1 }); // segunda-feira
      const end = endOfWeek(now, { weekStartsOn: 1 }); // domingo
      return {
        gte: start,
        lte: end,
      };

    case "future":
      return {
        gt: new Date(),
      };

    case "all":
    default:
      return undefined;
  }
}
