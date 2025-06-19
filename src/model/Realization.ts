export type RealizationImageFormat = {
  url: string;
  width: number;
  height: number;
};

export type RealizationImage = {
  id: number;
  name: string;
  url: string;
  formats: {
    thumbnail?: RealizationImageFormat;
    small?: RealizationImageFormat;
    medium?: RealizationImageFormat;
    large?: RealizationImageFormat;
  };
};

export type Realization = {
  id: number;
  uid: string;
  category: string;
  image: RealizationImage;
};

export type RealizationsResponse = {
  data: Realization[];
};
