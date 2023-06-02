import type { BusinessHour } from '@/types/BusinessHour';

/**
 *
 * EX:【新宿西口店】\n12:00〜21:00\n【梅田店】\n12:00-21:00（平日）\n11:00-20:00（土日祝）
 * -> [{label:"新宿西口店", listTime:["12:00〜21:00"]}, {label:"梅田店", listTime:["12:00-21:00（平日）", "11:00-20:00（土日祝）"]}]
 * @param hour
 * @returns
 */
const getBusinessHours = (hour: string | null): BusinessHour[] => {
  if (!hour) {
    return [];
  }
  const businessHours: BusinessHour[] = hour
    .split('【')
    .filter(Boolean) // removes empty strings
    .map((item) => {
      let [storeName, ...listTime] = item.split('\n').filter(Boolean);
      return {
        label: storeName?.replace('】', '') ?? '',
        listTime,
      };
    });

  return businessHours;
};

export default getBusinessHours;
