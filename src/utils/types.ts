export interface MainHeroTypes {
  data: MainHeroSectionTypes[];
}
 interface MainHeroSectionTypes {
  id?: number;
  title: string;
  subTitle: string;
  heroContent: string;
  heroButtonLink: string;
  createdAt?: Date;
  updatedAt?: Date;
}
