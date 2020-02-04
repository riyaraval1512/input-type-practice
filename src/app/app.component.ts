import { Component, OnInit } from '@angular/core';
import{IHobbies,HobbiesObjArray}from'./IHobbies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'input-type-practice';

  public RadioTitle:string="Radio Button";
  public CheckboxTitle:string="CheckBox with single Array";
  public CheckboxObjTitle:string="CheckBox with Array of Object";
  public DropdownTitle:string="Dropdown with single Array";
  public DropdownObjTitle:string="Dropdown with Array of Object";
  
  public radioname:string;
  public checkboxname:string[]=[];
  public dropdownname:string;
  public dropdownobjname:IHobbies = {id:0,name:"cricket"};
 
  public selectedcheckobjhobby=HobbiesObjArray;
  public HobbiesArray=["cricket","chess","reading"];
  public HobbiesobjArray:IHobbies[]=HobbiesObjArray;
  isCheck:boolean=true;
  public selectedcheckhobby=[];
  ;

  ngOnInit(){}

  SelectedRadio(event){
    this.radioname=event.target.value;
  }

  SelectedCheckBox(event){
    console.log(event);
  
      var index=this.checkboxname.indexOf(event.target.value);
      if(index==-1){
        this.selectedcheckhobby.push(event.target.value);
      }
      else
      {
        this.selectedcheckhobby.splice(index,1);
      }  
      this.checkboxname=this.selectedcheckhobby;
      }
    SelectedObjCheckBox(event,checkboxobjone:IHobbies){
      checkboxobjone.isChecked=!checkboxobjone.isChecked;
  }

  SelectedDd(event){
    this.dropdownname=event.target.value;
  }
  SelectedObjDd(event){
    console.log(event.target.value);
    this.dropdownobjname={
      id:event.srcElement.options.selectedIndex,
      name:event.target.value
    }
    console.log(this.dropdownobjname);
  }

}
