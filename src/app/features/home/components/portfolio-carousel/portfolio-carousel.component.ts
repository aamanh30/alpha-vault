import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'alpha-vault-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements AfterViewInit {
  @Input() portfolios: any[] = [];
  constructor() {}

  ngAfterViewInit(): void {
    const slider: any = document.querySelector('.portfolio-carousel');
    if (!slider || slider) {
      return;
    }
    const preventClick = (e: any) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    let isDown = false;
    let isDragged = false;
    let startX: any;
    let scrollLeft: any;

    slider.addEventListener('mousedown', (e: any) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', (e: any) => {
      isDown = false;
      const elements = document.querySelectorAll('a');
      if (isDragged) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].addEventListener('click', preventClick);
        }
      } else {
        for (let i = 0; i < elements.length; i++) {
          elements[i].removeEventListener('click', preventClick);
        }
      }
      slider.classList.remove('active');
      isDragged = false;
    });
    slider.addEventListener('mousemove', (e: any) => {
      if (!isDown) return;
      isDragged = true;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }
}
