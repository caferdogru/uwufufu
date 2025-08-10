import { Component, OnInit } from '@angular/core';
import { UwuwufuItem } from 'src/app/models/uwuwufu-item.model';
import { Uwuwufu } from 'src/app/models/uwuwufu.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-uwuwufu',
  templateUrl: './uwuwufu.component.html',
  styleUrls: ['./uwuwufu.component.css'],
  animations: [
    trigger('bounceInRight', [
      transition(':enter', [
        animate(
          '1s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateX(300px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-10px)', offset: 0.6 }),
            style({ transform: 'translateX(5px)', offset: 0.8 }),
            style({ transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ]
})

export class UwuwufuComponent implements OnInit {

  uwuwufu: Uwuwufu = {
    Id: 1,
    Name: 'En İyi Türk Yemeği',
    Description: 'test açıklama',
    ImageUrl: 'https://image.hurimg.com/i/hurriyet/75/0x0/64f88edb4e3fe105909011ee.jpg',
    Items: [
      { Id: 1, Title: 'Adana Kebap', ImgUrl: 'https://image.hurimg.com/i/hurriyet/75/0x0/64f88edb4e3fe105909011ee.jpg', Uwuwufu: 1 },
      { Id: 2, Title: 'İskender', ImgUrl: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/iskender.webp', Uwuwufu: 1 },
      { Id: 3, Title: 'Mantı', ImgUrl: 'https://iasbh.tmgrup.com.tr/eed1fd/1200/627/0/8/2048/1076?u=https://isbh.tmgrup.com.tr/sbh/2022/04/28/kayseriden-gelen-enfes-bir-lezzet-ev-yapimi-manti-tarifi-1651127024213.jpg', Uwuwufu: 1 },
      { Id: 4, Title: 'Baklava', ImgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png', Uwuwufu: 1 },
      { Id: 4, Title: 'Cağ kebabı', ImgUrl: 'https://images.deliveryhero.io/image/fd-tr/LH/if2r-hero.jpg?width=512&height=384&quality=45', Uwuwufu: 1 },
      { Id: 4, Title: 'Sütlaç', ImgUrl: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/firinda-sutlac-cy5a3404-600.webp', Uwuwufu: 1 },
      { Id: 4, Title: 'Kilis Tava', ImgUrl: 'https://www.ardaninmutfagi.com/wp-content/uploads/2019/09/kilis-tava-5.jpg', Uwuwufu: 1 },
      { Id: 4, Title: 'İnegöl Köfte', ImgUrl: 'https://image.hurimg.com/i/hurriyet/75/750x422/5f11adbe67b0a806305b0773.jpg', Uwuwufu: 1 },
    ]

  }

  round: number = 1;
  isFinal: boolean = false;
  itemDuo: number = 0;
  selectedChoices: UwuwufuItem[] = [];
  winnerItem: UwuwufuItem;
  roundTitle: string;


  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.generateOrder(this.uwuwufu.Items.length, this.uwuwufu.Items.length);
      this.getItemDuos(this.uwuwufu.Items);
      this.decideRoundTitle();
    });

  }


  makeDecision(choice: UwuwufuItem) {
    if (this.uwuwufu.ItemDuos.length === 1) {
      this.winnerItem = choice;
      this.decideRoundTitle();
      return;
    }
    this.round++;
    this.selectedChoices.push(choice);
    this.itemDuo++;
    this.proceedToNextRound();
    this.decideRoundTitle();
  }


  generateOrder(count: number, max: number) {
    const positionNumbers = this.generatePositions(count, 1, max);
    this.uwuwufu.Items.forEach((item, i) => {
      item.Position = positionNumbers[i];
    })
    this.uwuwufu.Items.sort((a, b) => a.Position - b.Position)
  }

  generatePositions(count: number, min: number, max: number): number[] {
    const numbers = new Set<number>();
    while (numbers.size < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNum);
    }
    return Array.from(numbers);
  }


  proceedToNextRound() {
    if (this.uwuwufu.ItemDuos.length === this.selectedChoices.length) {
      this.round = 1;
      this.itemDuo = 0;
      this.generateOrder(this.selectedChoices.length, this.selectedChoices.length);
      this.getItemDuos(this.selectedChoices);
      this.selectedChoices = [];
      if (this.uwuwufu.ItemDuos.length === 1) {
        this.isFinal = true;
      }
    }

  }

  getItemDuos(items: UwuwufuItem[]) {
    const result = [];
    for (let i = 0; i < items.length; i += 2) {
      result.push(items.slice(i, i + 2));
    }
    this.uwuwufu.ItemDuos = result;
  }

  decideRoundTitle() {
    if(this.winnerItem) {
      this.roundTitle = 'Winner';
    }
    else if(!this.winnerItem && !this.isFinal) {
      this.roundTitle = `Round: ${this.round}/${this.uwuwufu.ItemDuos.length}`;
    } 
    else if(this.isFinal && !this.winnerItem) {
      this.roundTitle = 'Final Round';
    }
  }
}


