import type { Company } from '@/types/Company';

export const getPrCompanies = (companies: Company[]): Company[] => {
  return companies
    .filter((company) => {
      const startAt = company.start_at ? new Date(company.start_at) : null;
      const endAt = company.end_at ? new Date(company.end_at) : null;
      const now = new Date();

      if (startAt === null || startAt > now) {
        return false;
      }

      if (startAt <= now && (endAt === null || now <= endAt)) {
        return true;
      }

      return false;
    })
    .sort((a, b) => (a.display_position ?? 0) - (b.display_position ?? 0));
};

export const isPrCompany = (company: Company) => {
  const startAt = company.start_at ? new Date(company.start_at) : null;
  const endAt = company.end_at ? new Date(company.end_at) : null;
  const now = new Date();

  if (startAt === null || startAt > now) {
    return false;
  }
  if (startAt <= now && (endAt === null || now <= endAt)) {
    return true;
  }
  return false;
};
