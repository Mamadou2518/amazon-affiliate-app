export interface SubCategory {
    name: string;
    subCategories: string[];
  }
  
  export interface Categories {
    Amazon: SubCategory[];
    Shein: SubCategory[];
    Zara: SubCategory[];
  }
  