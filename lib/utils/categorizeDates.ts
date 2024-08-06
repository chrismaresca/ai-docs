import { subDays } from "date-fns";

interface Instance {
  dateLastModified: string;
  [key: string]: any; // Allows additional properties
}

interface Categories {
  today: Instance[];
  yesterday: Instance[];
  past7Days: Instance[];
  past30Days: Instance[];
}

const categorizeEditsByDate = (instances: Instance[]): Categories => {
  const today = new Date();
  const yesterday = subDays(today, 1).setHours(0, 0, 0, 0);
  const past7DaysStart = subDays(today, 7).setHours(0, 0, 0, 0);
  const past30DaysStart = subDays(today, 30).setHours(0, 0, 0, 0);

  const categories: Categories = {
    today: [],
    yesterday: [],
    past7Days: [],
    past30Days: [],
  };

  instances.forEach((instance) => {
    const dateModified = new Date(instance.dateLastModified).getTime();

    if (dateModified >= today.setHours(0, 0, 0, 0)) {
      categories.today.push(instance);
    } else if (dateModified >= yesterday && dateModified < today.setHours(0, 0, 0, 0)) {
      categories.yesterday.push(instance);
    } else if (dateModified >= past7DaysStart && dateModified < yesterday) {
      categories.past7Days.push(instance);
    } else if (dateModified >= past30DaysStart && dateModified < past7DaysStart) {
      categories.past30Days.push(instance);
    }
  });

  return categories;
};

export default categorizeEditsByDate;
