import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/modules/track';

import { MatSnackBar } from '@angular/material';

import { TrackService } from 'src/app/modules/track.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  private tracks: Array<Track>;
  private statusCode: number;
  private errorStatus: string;

  constructor(private trackService: TrackService, private snackBar: MatSnackBar) {
    this.tracks = [];
  }

  ngOnInit() {
    this.fetchTracks();
  }

  private fetchTracks() {
    this.trackService.getAllWishListTrack1().subscribe((res: any) => {
      this.tracks = res;
      console.log(this.tracks);
      });
  }

  deleteTrack(trackId) {
    this.trackService.deleteTrackFromWishList(trackId).subscribe(
      response => {
        // this.statusCode = response.status;
        if (this.statusCode === 200) {
          this.fetchTracks();
          console.log('Success', this.statusCode);
          this.snackBar.open('Track Successfully Deleted !!!', '', {
            duration: 1500
          });
        }
      },
      err => {
        const errorStatus = err;
        this.statusCode = parseInt(errorStatus, 10);
        if (this.statusCode === 404) {
          this.snackBar.open('Track Doesn\'t Exist', '', {
            duration: 1500
          });
          this.statusCode = 0;
        }
    });
  }

  updateTrack(track) {
    this.trackService.updateComments(track).subscribe(
      response => {
        this.statusCode = response.status;
        if (this.statusCode === 200) {
          this.fetchTracks();
          console.log('Success', this.statusCode);
          this.snackBar.open('Track Successfully Updated !!!', '', {
            duration: 1500
          });
        }
      },
      err => {
        const errorStatus = err;
        this.statusCode = parseInt(errorStatus, 10);
        if (this.statusCode === 404) {
          this.snackBar.open('Track Doesn\'t Exist', '', {
            duration: 1500
          });
          this.statusCode = 0;
        }
    });
  }

}







// import { TrackService } from 'src/app/modules/track.service';
//  import { Component, OnInit } from '@angular/core';
//  import { Router } from '@angular/router';

//  @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.scss']
// })
// export class WishlistComponent implements OnInit {
//   tracks: any;
//   track: any;
//   newid: any;
//   artist: any;
//   url: any;
//   track1 = {
//     trackId: this.newid,
//     trackName: this.track,
//     trackComments: this.artist,
//     trackUrl: this.url
//   };
//   constructor(private trackService: TrackService, private router: Router) {}


//   ngOnInit() {
//   }

// }
