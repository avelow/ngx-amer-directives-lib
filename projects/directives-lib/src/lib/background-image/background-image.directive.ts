import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[amerBackgroundImage]'
})
export class BackgroundImageDirective implements OnChanges, AfterViewInit {

  /**
   * The element hosting the directive
   */
  private readonly el: HTMLElement;

  /**
   * the background image url
   */
  @Input() url: string;

  /**
   * The background size
   */
  @Input() size: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.el = this.elRef.nativeElement;
  }

  /**
   * Init the background image at first loading
   */
  ngAfterViewInit() {
    this.setBackgroundImage();
    this.setBackgroundSize();
  }

  /**
   * Update the background image on change of the values of the input
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['url']) {
      this.url = changes['url'].currentValue;
      this.setBackgroundImage();
    }
    if (changes['size']) {
      this.size = changes['size'].currentValue;
      this.setBackgroundSize();
    }
  }

  /**
   * Set the background image
   */
  setBackgroundImage() {
    this.renderer.setStyle(this.el, 'backgroundImage', `url(${ this.url })`);
  }

  /**
   * Set the background size
   */
  setBackgroundSize() {
    this.renderer.setStyle(this.el, 'backgroundSize', this.size);
  }
}
