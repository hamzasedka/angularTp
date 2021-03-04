import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  From:FormGroup;
  @Output() newStudent=new EventEmitter<any>() ;
  constructor(public formbuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.From=this.formbuilder.group({
      name:["",[Validators.required,Validators.minLength(3)]],
      lastname:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.minLength(3)]],
      imgUrl:["",[Validators.required,Validators.minLength(3)]]
    })
    
  }

 onSubmit(){
  console.log(this.From.get('name').errors.required);
  
 }
}
