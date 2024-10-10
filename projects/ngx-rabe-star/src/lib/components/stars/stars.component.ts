import { Component, forwardRef, Input, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-rabe-star',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RabeStars),
      multi: true,
    },
  ],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class RabeStars implements ControlValueAccessor {

  title = 'rabe-star';

  rating = signal<number>(0);
  hoverRating: number | null = null;
  stars: number[] = [1, 2, 3, 4, 5];

  private disableStars = false;
  protected isDisabled: boolean = false;
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';
  @Input() readOnly: boolean = false;

  ratingChange = output<number>();

  private onTouched?() { }
  public onChange(star: number) { }

  protected rate(star: number, event: MouseEvent): void {

    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const mouseX = event.clientX - rect.left;

    if (mouseX < halfWidth) {

      // cancel rating when mouse click twice on same half star
      if (this.rating() == star - 0.5) {
        this.rating.set(0);
        this.onChange(0);
        this.ratingChange.emit(0);

        return;
      }

      this.rating.set(star - 0.5);
      this.onChange(star - 0.5);
      this.ratingChange.emit(star - 0.5);

    } else {

      // cancel rating when mouse click twice on same star
      if (this.rating() == star) {
        this.rating.set(0);
        this.onChange(0);
        this.ratingChange.emit(0);

        return;
      }

      this.rating.set(star);
      this.onChange(star);
      this.ratingChange.emit(star);

    }

  }

  setHoverRating(star: number, event: MouseEvent): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const mouseX = event.clientX - rect.left;

    if (mouseX < halfWidth) {
      this.hoverRating = star - 0.5;
    } else {
      this.hoverRating = star;
    }

  }

  clearHoverRating(): void {
    this.hoverRating = null;
  }

  protected setHalfStar(star: number, event: MouseEvent): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const clickX = event.clientX - rect.left;

    if (clickX < halfWidth) {
      this.rating.set(star - 0.5);
    } else {
      this.rating.set(star);
    }
  }

  setHalfStarHover(star: number, event: MouseEvent): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const mouseX = event.clientX - rect.left;

    if (mouseX < halfWidth) {
      this.hoverRating = star - 0.5;
    } else {
      this.hoverRating = star;
    }
  }


  writeValue(obj: number): void {
    this.rating.set(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
