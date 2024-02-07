interface Filters<T> {
  meals: T[];
}

export type Areas = Filters<{ strArea: string }>;
export type Categories = Filters<{ strCategory: string }>;
