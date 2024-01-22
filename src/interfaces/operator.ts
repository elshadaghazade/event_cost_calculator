import { iBase } from "./base";
import { iSalary } from "./salary";

export interface iOperator extends iBase {
    salary: iSalary;
}