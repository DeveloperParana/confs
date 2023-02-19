import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  exportAs: 'buttonNavToggle',
  selector: `confs-button-nav-toggle`,
  template: `
    <input #checkboxEl type="checkbox" />
    <div></div>
    <div></div>
    <div></div>
  `,
  styleUrls: ['./button-nav-toggle.component.scss'],
})
export class ButtonNavToggleComponent {
  @ViewChild('checkboxEl', {static: true})
  checkboxRef!: ElementRef<HTMLInputElement>;

  get checkbox() {
    return this.checkboxRef.nativeElement;
  }

  @HostBinding('attr.opened')
  get opened() {
    return this.checkbox.checked;
  }

  @HostListener('click')
  onHostClicked() {
    this.setCheckboxState(!this.checkbox.checked);
  }

  setCheckboxState(state: boolean) {
    this.checkbox.ariaChecked = state ? 'false' : 'true';
    this.checkbox.checked = state;
  }
}
