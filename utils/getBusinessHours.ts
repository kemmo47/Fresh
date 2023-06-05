export type BusinessHour = {
  label: string;
  listTime: string[];
};

const getBusinessHours = (hour: string | null): BusinessHour[] => {
  if (!hour) {
    return [];
  }
  const businessHours: BusinessHour[] = hour
    .split("【")
    .filter(Boolean) // removes empty strings
    .map((item) => {
      const [storeName, ...listTime] = item.split("\n").filter(Boolean);
      return {
        label: storeName?.replace("】", "") ?? "",
        listTime,
      };
    });

  return businessHours;
};

export default getBusinessHours;
