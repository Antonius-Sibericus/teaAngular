import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function customValidator(pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value)
    return result ? null : { pattern: { value: control.value } }
  }
}

@Directive({
  selector: '[validationDirective]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true }
  ]
})
export class ValidationDirective implements Validator {

  @Input("validationDirective") pattern = ""

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return customValidator(this.pattern)(control)
  }
}
