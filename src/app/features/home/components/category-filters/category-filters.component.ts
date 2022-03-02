import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpha-vault-category-filters',
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.scss']
})
export class CategoryFiltersComponent {
  @Input() categories: any[] = [];
  @Output() categoryFilterEmitter = new EventEmitter();
  activeCategory: any = null;
  constructor() {}

  filterPortfolios(category: any): void {
    const selectedCategory =
      category?.id === this.activeCategory?.id ? null : category;
    this.activeCategory = selectedCategory;
    this.categoryFilterEmitter.emit(selectedCategory);
  }
}
