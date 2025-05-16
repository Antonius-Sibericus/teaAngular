import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscriber, Subscription } from 'rxjs'

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<boolean>
  private modal: HTMLElement | null = document.getElementById("popup-bg")
  private closeModal: HTMLElement | null = document.getElementById("close-modal")
  private subscription: Subscription | null = null

  constructor() {

    $(function () {
      $("#accordion").accordion({
        collapsible: true
      });
    });

    this.observable = new Observable((observer) => {
      const timeout1 = setTimeout(() => {
        observer.next(true)
      }, 10000)
      const timeout2 = setTimeout(() => {
        observer.error(false)
      }, 10000)

      return {
        unsubscribe() {
          clearTimeout(timeout1)
          clearTimeout(timeout2)
        }
      }
    })
  }

  ngOnInit(): void {
    localStorage.setItem("wasClosed", "false")
    const wasClosed = localStorage.getItem("wasClosed") ? JSON.parse(localStorage.getItem("wasClosed")!) : false
    this.subscription = this.observable.subscribe(
      {
        next: (param: boolean) => {
          if (param && !wasClosed) {
            document.getElementById("popup-bg")?.classList.remove("d-none")
          }
        },
        error: (param: boolean) => {
          console.log("Error " + param)
        }
      }
    )

    document.getElementById("close-modal")?.addEventListener("click", () => {
      document.getElementById("popup-bg")?.classList.add("d-none")
      localStorage.setItem("wasClosed", "true")
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
