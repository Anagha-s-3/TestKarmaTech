
import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']  // Ensure this is styleUrls
})
export class SalesListComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe((data: Sale[]) => {
      this.sales = data;
    });
  }

  editSale(id: number): void {
    // Navigate to the edit page (or open a modal, etc.)
    console.log(`Edit sale with id: ${id}`);
    // Example: this.router.navigate(['/sales/edit', id]);
  }

  deleteSale(id: number): void {
    // Call the delete method from SaleService
    this.saleService.deleteSale(id).subscribe(() => {
      // Remove the deleted sale from the sales array
      this.sales = this.sales.filter(sale => sale.id !== id);
    });
  }
}
