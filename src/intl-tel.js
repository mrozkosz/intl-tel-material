import {LitElement, html} from 'lit';
import MaterialTextField from './styles/materialTextField.css';
import IntlTelInput from './styles/intlTelInput.css';
import countriesDialCode from './assets/countriesDialCode';
import {
  parsePhoneNumber,
  isPossiblePhoneNumber,
} from 'libphonenumber-js/mobile';

const red = html`
  <style>
    :host {
      --error-color: 180, 0, 0;
    }
  </style>
`;

class IntlTel extends LitElement {
  constructor() {
    super();
    this.id = 'phone';
    this.change = false;
    this.label = 'Numer telefonu';
    this.value = '';
    this.isValid = false;
    this.isOpen = false;
    this.selectedCountry = {
      name: 'Poland',
      code: 'PL',
      codeLowCase: 'pl',
      dialCode: '+48',
      mask: '999 999 999',
    };
    this.phoneError = {
      error: false,
      errorMessage: '',
    };
  }

  static get styles() {
    return [MaterialTextField, IntlTelInput];
  }

  static get properties() {
    return {
      value: {type: String, attribute: true},
      id: {type: String, attribute: true},
      isOpen: {type: Boolean, attribute: false},
      selectedCountry: {type: Object, attribute: false},
      label: {type: String, attribute: true},
      showErrors: {type: Boolean, attribute: true},
      error: {type: Boolean, attribute: false},
    };
  }

  clear() {
    this.change = false;
    this.value = '';
    this.selectedCountry = {
      name: 'Poland',
      code: 'PL',
      codeLowCase: 'pl',
      dialCode: '+48',
      mask: '999 999 999',
    };
  }

  render() {
    if (this.value !== '' && !this.change) {
      this.checkPhoneNumber(this.value);
    }

    return html`${this.phoneError.error || this.error ? red : ''}
      <div class="iti iti--allow-dropdown">
        <div class="iti__flag-container">
          <div
            @click="${(e) => this.openDialog(false, e)}"
            class="iti__selected-flag"
            title="${this.selectedCountry.name}: ${this.selectedCountry
              .dialCode}"
          >
            <div
              class="iti__flag iti__${this.selectedCountry.codeLowCase}"
            ></div>
            <div
              class="iti__arrow ${this.isOpen ? 'iti__arrow--up' : ''}"
            ></div>
          </div>
        </div>

        <div>
          <label
            class="pure-material-textfield-outlined error"
            id="${this.id + '-label'}"
          >
            <input
              id="${this.id + '-input'}"
              type="tel"
              autocomplete="off"
              .value="${this.value}"
              @input=${this.changeValue}
              @blur="${() => {
                !this.isValid ? (this.error = true) : (this.error = false);
              }}"
            />
            <span>${this.label}</span>
          </label>
          ${this.isOpen ? this.renderCountryList() : ''}
        </div>
        ${this.phoneError.error || this.showErrors
          ? this.renderErrorMessage()
          : ''}
      </div>`;
  }

  renderErrorMessage() {
    return html`<small class="error"
      >${this.message ? this.message : this.phoneError.message}</small
    >`;
  }

  renderCountryList() {
    return html`
      <div
        class="dialog"
        id="intl-tel-dialog"
        @click="${(e) => this.closeModal(e)}"
      >
        <ul class="iti__country-list">
          ${countriesDialCode.map(
            (item) => html`<li
              @click="${() => {
                this.selectedCountry = item;
                this.openDialog(true);
              }}"
              class="iti__country ${item.code === this.selectedCountry.code
                ? 'iti__highlight'
                : ''}"
              id="iti-0__item-${item.codeLowCase}-preferred"
            >
              <div class="iti__flag-box">
                <div class="iti__flag iti__${item.codeLowCase}"></div>
              </div>
              <span class="iti__country-name">${item.name}</span
              ><span class="iti__dial-code">${item.dialCode}</span>
            </li>`
          )}
        </ul>
      </div>
    `;
  }

  openDialog(e = false, event = null) {
    let width;

    if (event) {
      width = event.screenY;
    }

    const input = this.renderRoot.querySelector('#' + this.id + '-input');
    this.isOpen = !this.isOpen;

    if ((this.isOpen && width > 500) || e === true) {
      input.focus();
    }
  }

  closeModal(e) {
    if (e.target.id == 'intl-tel-dialog') {
      this.isOpen = false;
    }
  }

  async changeValue(event) {
    const {value} = event.target;

    if (value === '') {
      this.eventCallback({value: '', isValid: false});

      return;
    }

    this.change = true;
    this.isOpen = false;
    const input = event.target;
    this.checkPhoneNumber(input.value);
  }

  checkPhoneNumber(value) {
    let phoneNumber;
    this.value = value;

    try {
      if (value.slice(0, 1) === '+') {
        let found = countriesDialCode.find(
          (element) =>
            element.dialCode === value.slice(0, 4) ||
            element.dialCode === value.slice(0, 3)
        );

        if (found !== undefined) {
          this.selectedCountry = found;
        }

        phoneNumber = parsePhoneNumber(value);
      } else {
        phoneNumber = parsePhoneNumber(this.selectedCountry.dialCode + value);
      }

      const isValid = phoneNumber.isValid();
      const formated = phoneNumber.formatInternational();
      const isPosible = isPossiblePhoneNumber(
        phoneNumber.nationalNumber,
        phoneNumber.country
      );

      if (isPosible && isValid) {
        this.isValid = true;
        this.error = false;
        const dialCodeLength = this.selectedCountry.dialCode.length;
        this.value = formated.slice(dialCodeLength);
      } else {
        this.isValid = false;
      }

      this.eventCallback({value: formated, isValid: isPosible && isValid});

      throw '';
    } catch (error) {
      // console.error(error);
    }
  }

  eventCallback(detail = {}) {
    let myEvent = new CustomEvent('change', {
      detail,
    });

    this.dispatchEvent(myEvent);
  }
}

customElements.define('intl-tel', IntlTel);
