export type NumberOrString = number | string;
export const isNumber = (s: NumberOrString): boolean => typeof s === "number" || /^[0-9]+$/.test(s);
