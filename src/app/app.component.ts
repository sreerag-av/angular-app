import { Component } from '@angular/core';
import { ReferralService } from './services/referral.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Referral Tracking System';

  email: string;
  shortURL: string;
  url: string;
  clickURL: string;

  constructor(private service: ReferralService) {}

  submit() {
    this.service.generateURL(this.email,
      this.url).subscribe((response) => {
        const hostname = this.getHostName(response['url']);
        this.clickURL = hostname + '/i/' + response['code'];
        this.shortURL = 'http://localhost:3010/i/' + response['code'];
    });
  }

  getHostName(url) {
    const obj = document.createElement('a');
    obj.href = url;
    return obj.hostname;
  }
}
