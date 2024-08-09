import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css']  // Corrected to styleUrls
})
export class SalesDetailComponent implements OnInit {
  sale: Sale | undefined;

  constructor(
    private saleService: SaleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the sale ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.saleService.getSale(id).subscribe((data: Sale) => {
        this.sale = data;
      });
    }
  }
}

