import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'one-click-manager';
  selectedTab = '';
  username = '';
  form: any = {
    email: "",
    username: "",
    password: ""
  };

  DashboardActive=false;
  FaqActive=false;

  currentChoice = 'dashboard';
  openSignupModal=false;
  openLoginModal = false;
  fromAbout = false;

  ngOnInit() {
    setTimeout(()=>{
      this.loginRequired(true);
    }, 10000);
  }

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

  onclickEvent(event){
    console.log('event', event);
    if(event === 'Dashboard'){
      this.DashboardActive =true;
      this.FaqActive =false;
    }else if(event === 'FAQ'){
      this.DashboardActive =false;
      this.FaqActive =true;
    }
  }

  loginRequired(event){
    console.log('eevnt', event);
    if(event === true){
      this.openLoginModal=true;
    }
  }

}
