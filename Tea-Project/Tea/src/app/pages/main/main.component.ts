import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showPopup = false
  private popupSubscription!: Subscription

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.popupSubscription = timer(10000).subscribe(() => {
      if (this.router.url === '/') {
        this.showPopup = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.popupSubscription) {
      this.popupSubscription.unsubscribe();
    }
  }

  closePopup(): void {
    this.showPopup = false;
    this.ngOnInit()
  }
  navigateToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

}
