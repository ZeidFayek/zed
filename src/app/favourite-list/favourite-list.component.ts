import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { BiddingService } from '../service/bidding.service';
import { SubBiddingService } from '../service/sub-bidding.service';

@Component({
  selector: 'app-favourite-list',
  standalone: true,
  imports: [RouterLinkActive, NgIf],
  templateUrl: './favourite-list.component.html',
  styleUrl: './favourite-list.component.scss',
})
export class FavouriteListComponent {
  private readonly _BiddingService = inject(BiddingService);
  private readonly _SubBiddingService = inject(SubBiddingService);

  biddingFavouriteList: any[] = [];
  subBiddingFavouriteList: any[] = [];

  favourite1: boolean = true;
  favourite2: boolean = false;
  favourite3: boolean = false;
  fav1(): void {
    this.favourite1 = true;
    this.favourite2 = false;
    this.favourite3 = false;
  }
  fav2(): void {
    this.favourite1 = false;
    this.favourite2 = true;
    this.favourite3 = false;
  }
  fav3(): void {
    this.favourite1 = false;
    this.favourite2 = false;
    this.favourite3 = true;
  }
  ngOnInit(): void {
    this._BiddingService.getFavouriteBidding().subscribe({
      next: (response) => {
        this.biddingFavouriteList = response;
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      },
    });
    ////////////////////////////////////
    this._SubBiddingService.getFavouriteSubBidding().subscribe({
      next: (response) => {
        this.subBiddingFavouriteList = response as any;
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
