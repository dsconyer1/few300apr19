import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status-display',
  templateUrl: './server-status-display.component.html',
  styleUrls: ['./server-status-display.component.css']
})
export class ServerStatusDisplayComponent implements OnInit {

  @Input() status: StatusResponse;
  constructor() { }

  ngOnInit() {
    this.status = { message: '', at: ''};
  }

}
interface StatusResponse {
  message: string;
  at: string;
}
