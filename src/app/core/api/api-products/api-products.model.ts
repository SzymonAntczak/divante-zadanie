import { Image } from "../../../shared/shared-common.model";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: Image;
}
