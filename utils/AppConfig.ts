import type { Company } from '@/types/Company';

export const AppLink = {
  topPage: () => {
    if (process.env.NODE_ENV === 'production') {
      return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/index.html`;
    }
    return '/';
  },
  filterPathName: () => {
    if (process.env.NODE_ENV === 'production') {
      return `/index.html`;
    }
    return '/';
  },
  detailPage: (url: string | number) => {
    if (process.env.NODE_ENV === 'production') {
      return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${url}/index.html`;
    }
    return `/${url}`;
  },
  redirectLink: (company: Company) => {
    const companyPath = company.company_path || company.id;
    if (process.env.NODE_ENV === 'production') {
      return `${
        process.env.NEXT_PUBLIC_BASE_PATH || ''
      }/rd/${companyPath}/index.html`;
    }
    return `/rd/${companyPath}`;
  },
  imgPathName: (imgName: string) => {
    if (process.env.NODE_ENV === 'production') {
      return `${process.env.ASSETS_BASE_PATH || ''}/assets/images/${imgName}`;
    }
    return `/assets/images/${imgName}`;
  },
};
