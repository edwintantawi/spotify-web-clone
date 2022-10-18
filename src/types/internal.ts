// Create types for object key base on other types
export type KeyValueFrom<K extends string | number | symbol, V> = { [Key in K]: V };

// Allows the use of unregistered props on the props interface
export interface PropsWithAny {
  [key: string | number | symbol]: unknown;
}
