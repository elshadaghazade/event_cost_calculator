export enum SalaryEnum {
    monthly,
    yearly,
    oneTime,
    free
}

export interface iSalary {
    amount: number;
    period: SalaryEnum;
}