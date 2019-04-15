import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  private url = environment.statusApiUrl;

  status$: Observable<StatusResponse>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    this.status$ = this.http.get<StatusResponse>(this.url);
  }

}

interface StatusResponse {
    message: string;
    at: string;
  }

