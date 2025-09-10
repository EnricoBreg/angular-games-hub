import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  currentPage = input<number>(1);
  totalPages = input.required<number>();

  pageSelected = output<number>();

  private onPageSelection(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.pageSelected.emit(page);
  }

  onNextPageSelection() {
    console.log('Current page: ', this.currentPage());
    this.onPageSelection(this.currentPage() + 1);
  }

  onPrevPageSelection() {
    console.log('Current page: ', this.currentPage());
    this.onPageSelection(this.currentPage() + 1);
  }
}
