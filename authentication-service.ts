// example authentication service
import { Injectable } from '@angular/core';
import { InlineManualTracking, User } from './interfaces';
import { InlineService } from './inline-service';

@Injectable()

export class AuthenticationService {
  user: User;
  trackingObj: InlineManualTracking;

  constructor(private inlineService: InlineService) {}

  login(username: string, password: string) {
    return this.authenticationService.login(username, password)
      .then((response) => {
        this.user = response;
        this.trackingObj = {
          uid: this.user.userId,
          email: this.user.email,
          name: this.user.name
        }
        this.inlineService.createPlayer(this.trackingObj);

      }).catch(error) => {
      console.error(error);
    }
  }
}
