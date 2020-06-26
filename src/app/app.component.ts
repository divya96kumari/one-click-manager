import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one-click-manager';
  username = '';
  form: any = {
    email: "",
    username: "",
    password: ""
  };

  currentChoice = 'dashboard';
  openSignupModal=false;
  openLoginModal = false;

  onLogin() {
    this.username = this.form.username;
    this.openLoginModal = false;
    this.openSignupModal = false;
  }

  onLogout() {
    this.openLoginModal = true;
    this.openSignupModal = false;
    this.username = '';
  }

  onSignup() {
    this.username = this.form.username;
    this.openLoginModal = false;
    this.openSignupModal = false;
  }

  setActive(choice: string): void {
    this.currentChoice = choice;
  }

  getActive(choice: string): boolean {
    if (this.currentChoice == choice)
      return true;
    else
      return false;
  }

}
