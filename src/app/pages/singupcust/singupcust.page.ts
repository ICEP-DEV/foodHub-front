/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import {PostProvider } from '../../../providers/post-provider';
import { FormControl } from '@angular/forms';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  firstname: string = "";
  surname: string = "";
  gender: string = "";
  // tslint:disable-next-line: variable-name
  cell_no: number;
  // tslint:disable-next-line: variable-name
  email_address: string = "";
  addressInfo: string ="";
  passcode: string = "";
  // tslint:disable-next-line: variable-name
  confirm_password: string = "";

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor(public serviceproviderService: ServiceproviderService,
    private route: Router,
     private location: Location, 
     private actRoute: ActivatedRoute,
      private postPvdr: PostProvider) { }


      msgTrue = false;
    contantList : any;
  ngOnInit()
   {

    this.serviceproviderService.getUser().subscribe(data =>{
      this.contantList = data;

    this.actRoute.params.subscribe((data: any) => {

      this.firstname = data.name;
      this.surname = data.sur;
      this.passcode = data.pass;
      this.email_address = data.email;
      this.addressInfo = data.addressI;
      this.gender = data.gen;
      this.confirm_password = data.confirm;
      console.log(data);

    });

  }

  goUser()
   {
 const newFormData = {

        firstname: this.firstname,
        surname: this.surname,
        passcode: this.passcode,
        email_address: this.email_address,
        addressInfo: this.addressInfo,
        gender: this.gender,
        confirm_password: this.confirm_password};

      this.serviceproviderService.createUser(newFormData).subscribe(data => {
        this.msgTrue =true;
        console.log(data);
      });

     this.router.navigateByUrl('/login');

    

  }
 
  goHome()
 {
   this.route.navigateByUrl('/home');
 }
 btnClear(){
 } 
 // back button
 backButton() 
 {
  this.location.back();
 }



  

   }
}
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import {PostProvider } from '../../../providers/post-provider';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})

export class SingupcustPage implements OnInit {

  firstname: string = "";
  surname: string = "";
  gender: string = "";
  // tslint:disable-next-line: variable-name
  cell_no: number;
  // tslint:disable-next-line: variable-name
  email_address: string = "";
  addressInfo: string ="";
  passcode: string = "";
  // tslint:disable-next-line: variable-name
  confirm_password: string = "";

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor(public serviceproviderService: ServiceproviderService,
    private router: Router,
     private location: Location, 
     private actRoute: ActivatedRoute,
      private postPvdr: PostProvider) { }

      msgTrue = false;
    contantList : any;

  ngOnInit() {

    this.serviceproviderService.getUser().subscribe(data =>{
      this.contantList = data;

    this.actRoute.params.subscribe((data: any) => {

      this.firstname = data.name;
      this.surname = data.sur;
      this.passcode = data.pass;
      this.email_address = data.email;
      this.addressInfo = data.addressI;
      this.gender = data.gen;
      this.confirm_password = data.confirm;

      console.log(data);

      });

    })
  }

  goUser () {

    const newFormData = {
        firstname:"khodani",
        surname: "mulaudzi",
        passcode: "mulaudzi101",
        email_address: "mulaudzi@gmail.com",
        addressInfo:"101 cul de sac drive",
        gender: this.gender,
        confirm_password:"mulaudzi101"
      }
   
    this.serviceproviderService.createUser(newFormData).subscribe(data => {
      this.msgTrue =true;
      console.log(data);
         });
   
        this.router.navigateByUrl('/login');
     }

  backButton() {
       this.location.back();
    }

} 

 



