export enum FilterEnum {
  MostLocations = 'MostLocations',
  LessLocations = 'LessLocations'
}

export interface IBusinessLocationQueryDTO {
  filter: FilterEnum
}