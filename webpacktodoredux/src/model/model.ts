export const enum SubscriptionType {
  Subscribed = "Subscribed",
  NotSubscribed = "Not Subscribed",
  Other = "Other"
}
export type EmploymentType = "Employed" | "Unemployed";

export interface IUser {
  id: number;
  name: string;
  age: number;
  subscription: SubscriptionType;
  employment: EmploymentType;
}
