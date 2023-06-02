import type { Company } from '@/types/Company';

import icoBodyWhite from '../../public/assets/images/ico_body_white.svg';
import icoCalenderWhite from '../../public/assets/images/ico_calender_white.svg';
import icoKeyWhite from '../../public/assets/images/ico_key_white.svg';
import icoLadyWhite from '../../public/assets/images/ico_lady_white.svg';
import icoLoanWhite from '../../public/assets/images/ico_loan_white.svg';
import icoOkWhite from '../../public/assets/images/ico_ok_white.svg';
import icoPayWhite from '../../public/assets/images/ico_pay_white.svg';
import icoWebWhite from '../../public/assets/images/ico_web_white.svg';

const totalBodyHairRemovalAvailable = (company: Company): boolean => {
  return company.total_body || false;
};
const partsOfBodyHairRemovalAvailable = (company: Company): boolean => {
  return company.certain_parts_of_the_body || false;
};
const monthlyFixedChargeAvailable = (company: Company): boolean => {
  return company.fixed_monthly_fee || false;
};
const installmentLoanAvailable = (company: Company): boolean => {
  return company.installment_loan || false;
};
const eachTimePaymentAvailable = (company: Company): boolean => {
  return company.each_time || false;
};
const webReservationAvailable = (company: Company): boolean => {
  return company.web_reservations_available || false;
};
const sameDayReservationAvailable = (company: Company): boolean => {
  return company.same_day_reservations_available || false;
};
const freeCancellationAvailable = (company: Company): boolean => {
  return company.free_cancellation_of_reservation || false;
};

const AVAILABLE_CHARACTERISTIC = {
  totalBodyHairRemoval: {
    name: '全身脱毛',
    icon: icoBodyWhite.src,
    logic: totalBodyHairRemovalAvailable,
  },
  partsOfBodyHairRemoval: {
    name: '部位脱毛',
    icon: icoLadyWhite.src,
    logic: partsOfBodyHairRemovalAvailable,
  },
  monthlyFixedCharge: {
    name: '月定額制',
    icon: icoKeyWhite.src,
    logic: monthlyFixedChargeAvailable,
  },
  installmentLoan: {
    name: '分割ローン',
    icon: icoLoanWhite.src,
    logic: installmentLoanAvailable,
  },
  eachTimePayment: {
    name: '都度払い',
    icon: icoPayWhite.src,
    logic: eachTimePaymentAvailable,
  },
  webReservation: {
    name: 'WEB予約',
    icon: icoWebWhite.src,
    logic: webReservationAvailable,
  },
  sameDayReservation: {
    name: '当日予約',
    icon: icoCalenderWhite.src,
    logic: sameDayReservationAvailable,
  },
  freeCancellation: {
    name: '無料 キャンセル',
    icon: icoOkWhite.src,
    logic: freeCancellationAvailable,
  },
} as const;

export type Characteristic = {
  name: string;
  icon: any;
  possible: boolean;
};

export const getCharacteristics = (company: Company): Characteristic[] => {
  const characteristics = Object.values(AVAILABLE_CHARACTERISTIC).map(
    (value) => {
      return {
        name: value.name,
        icon: value.icon,
        possible: value.logic(company),
      };
    }
  );

  return characteristics;
};
