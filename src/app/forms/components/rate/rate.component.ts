import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface RateOptions {
  rates: number;
  text?: string;
}

@Component({
  selector: 'app-rate',
  imports: [CommonModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RateComponent,
    },
  ],
})
export class RateComponent {
  @Input() options!: RateOptions;

  currentRate!: number;

  ratesArray: number[] = [];

  disabled: boolean = false;

  touched: boolean = false;

  onChange = (currentRate: number) => {};
  onTouched = () => {};

  ngOnInit() {
    this.fillRatesArr();
  }

  onRate(index: number) {
    this.markAsTouched();
    if (!this.disabled) {
      this.currentRate = index;
      this.onChange(this.currentRate);
    }
  }

  // Control Value Accessor methods start

  writeValue(rate: number): void {
    this.currentRate = rate;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched(): void {
    this.onTouched();
    this.touched = true;
  }

  // Control Value Accessor methods end

  private fillRatesArr(): void {
    let condition = true;
    let count = 1;

    while (condition) {
      this.ratesArray.push(count);

      if (this.ratesArray.length === this.options.rates) {
        condition = false;
      } else {
        count++;
      }
    }
  }
}
