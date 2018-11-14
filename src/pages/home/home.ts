import { Component } from '@angular/core';
import { NavController, AlertController, Label } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testRadioOpen: boolean;
  testRadioResult: string;

  testcheckboxOpen:boolean;
  testcheckboxResult:string;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController) {

  }
  showAlert1(){
    const alert = this.alertCtrl.create({
      title: 'แจ้งเตือนการใช้งาน',
      subTitle: 'ของระบบ',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2(){
    const alert = this.alertCtrl.create({
      title: 'โปรดใส่รหัสผ่านที่สมัครไว้',
      message: 'TEST MESSAGE',
      subTitle: 'จำนวน 6 ตัวขึ้นไป',
      inputs: [
        {
          name: 'Login',
          placeholder: '***'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('ยกเลิกแล้ว');
          }
        },
        {
          text: 'บันทึก',
          handler: () => {
            console.log('บันทึกแล้ว');
          }
        }
      ]
    });
    alert.present();
  }

  showAlert3(){
   const alert = this.alertCtrl.create();
   alert.setTitle('เลือกรายการ');
   alert.addInput({
     type: 'radio',
     label: 'Male',
     value: 'MALE'
   });
   alert.addInput({
     type: 'radio',
     label: 'female',
     value: 'FEMALE'
   });
   alert.addButton({
     text: 'Ok',
     handler: data => {
       this.testRadioOpen = false;
       this.testRadioResult = data;
     }
   });
   alert.present();
  }
showAlert4(){
  const alert =this.alertCtrl.create();
  alert.setTitle('รายการที่เลือก');
  alert.addInput({
     type: 'checkbox',
     label: 'Rock',
     value:'ROCK'
  });
  alert.addInput({
    type: 'checkbox',
    label: 'pop',
    value:'POP'
  });
  alert.addInput({
    label: 'Alternative',
    type: 'checkbox',
    value: 'ALTERNATIVE'
  });
  alert.addButton({
    text: 'OK',
    handler: data => {
      this.testcheckboxOpen = true;
      this.testcheckboxResult = data;
    }
  });
  alert.present();
  }
}