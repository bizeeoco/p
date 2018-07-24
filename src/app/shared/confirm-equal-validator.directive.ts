import { NG_VALIDATORS, AbstractControl, Validators } from "@angular/forms";
import { Directive, Input } from "@angular/core";
@Directive({
  selector:'[appCustomValidator]',
  providers:[{
      provide:NG_VALIDATORS,
      useExisting:CustomValidator,
      multi:true
  }]
})

export class CustomValidator implements Validators{
    @Input() appCustomValidator:string;
  validate(control:AbstractControl):{[key:string]:any}|null{
      const controlToCompare=control.parent.get(this.appCustomValidator);
      if(controlToCompare && controlToCompare.value!==control.value){
          return {'notEqual':true}
      }
      return null;
  }
}