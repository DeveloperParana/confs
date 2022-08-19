import { FormControl, FormGroup, Validators } from '@angular/forms';

const validators = [Validators.required, Validators.email];

export class SubscribeForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl('', validators),
    });
  }
}
