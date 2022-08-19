import { template } from './event-ticket.template';

export class EventTicketElement extends HTMLElement {
  static get observedAttributes() {
    return ['user-id', 'user-name', 'user-login', 'user-avatar'];
  }

  private _id = '';
  private _name = '';
  private _login = '';
  private _avatar = '';

  override get id() {
    return this._id;
  }
  override set id(value) {
    this._id = value;
    const el = this.findById('user-id');
    if (el) el.innerHTML = `N&ordm; ${value}`;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    const el = this.findById('user-name');
    if (el) el.textContent = value;
  }

  get login() {
    return this._login;
  }
  set login(value) {
    this._login = value;
    const el = this.findById('user-login');
    if (el) el.textContent = value;
  }

  get avatar() {
    return this._avatar;
  }
  set avatar(value) {
    this._avatar = value;
    const el = this.findById('user-avatar');
    if (el) el.setAttribute('href', value);
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  findById(id: string) {
    const shadow = this.shadowRoot as ShadowRoot;
    return shadow.querySelector(`#${id}`);
  }

  findAndUpdateValue(key: string, value: string): string | void {
    switch (key) {
      case 'user-avatar':
        return (this.avatar = value);
      case 'user-id':
        return (this.id = value);
      case 'user-name':
        return (this.name = value);
      case 'user-login':
        return (this.login = value);
    }
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    this.findAndUpdateValue(name, next);
  }
}
customElements.define('event-ticket', EventTicketElement);
