// Create types for object key base on other types
export type KeyValueFrom<K extends string | number | symbol, V> = { [Key in K]: V };
