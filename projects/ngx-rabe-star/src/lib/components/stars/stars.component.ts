import { Component, Input, input, output, signal } from '@angular/core';
import { I_StarInterface } from '../../types/star.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-rabe-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class RabeStars {

  title = 'rabe-star';

  rating = signal<number>(0);
  hoverRating: number | null = null;

  private disableStars = false;
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';

  ratingChange = output<number>();

  private onTouched?() { }
  public onChange(star: number) { }

  protected rate(star: number): void {
    if (this.rating() == star) {
      this.rating.set(0);
      this.onChange(0);
      this.ratingChange.emit(0);
    } else {
      this.rating.set(star);
      this.onChange(star);
      this.ratingChange.emit(star);
    }

  }

  setHoverRating(star: number): void {
    this.hoverRating = star;
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
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    // throw new Error('Method not implemented.');
  }

}
