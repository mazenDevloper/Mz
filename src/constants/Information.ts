export type Category = 'Button' | 'Card' | 'Input' | 'Animation' | 'Other';
export type Variant = 'JS-CSS' | 'JS-TW' | 'TS-CSS' | 'TS-TW';

export interface ComponentMeta {
  name: string;
  description: string;
  category: Category;
  variants: Variant[];
  meta?: Record<string, string>;
}

export const componentMetadata: Record<string, ComponentMeta> = {};
