import { UwuwufuItem } from "./uwuwufu-item.model";

export class Uwuwufu {
    public Id: number;
    public Name: string;
    public Description: string;
    public ImageUrl: string;
    public Items: UwuwufuItem[];
    public ItemDuos?: UwuwufuItem[][];

}