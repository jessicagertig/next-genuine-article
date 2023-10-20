export interface ItemInfo {
  garmentTitle: string; //required
  beginYear: string; //required
  endYear: string;
  cultureCountry: string;
  collection: string; //required
  collectionUrl: string; //required
  creator: string;
  source: string;
  itemCollectionNo: string; //required
  description: string;
}

export interface ItemInfoData extends ItemInfo {
  id: number;
  decade: string;
  secondaryDecade: string;
}

export interface ImageUrls {
  mainImageUrl: string;
  largeUrl: string;
  displayUrl: string;
  thumbUrl: string;
}

export interface GarmentState {
  itemInfo: ItemInfo;
  itemColors: number[];
  itemMaterials: number[];
}

// format of each item returned from get garments
export interface GarmentData extends ItemInfoData {
  garmentTitleId: number;
  colors: string[];
  materials: string[];
  imageUrls: ImageUrls | null;
}