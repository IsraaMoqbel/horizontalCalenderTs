import { ChangeEventHandler } from "react";

export interface ICustumDayDisplayInput {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
