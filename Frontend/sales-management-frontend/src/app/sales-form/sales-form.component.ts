import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {
  saleForm: FormGroup;
  saleId: number;

  constructor(
    private fb: FormBuilder,
    private saleService: SaleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.saleForm = this.fb.group({
      customerName: ['', Validators.required],
      reference: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
      grandTotal: [0, Validators.required],
      due: [0, Validators.required],
      paymentStatus: ['', Validators.required],
      biller: ['', Validators.required]
    });
    this.saleId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    if (this.saleId) {
      this.saleService.getSale(this.saleId).subscribe((sale: Sale) => {
        this.saleForm.patchValue(sale);
      }, error => {
        // Handle error (e.g., navigate back or show an error message)
        console.error('Error fetching sale:', error);
      });
    }
  }

  onSubmit(): void {
    if (this.saleForm.valid) {
      const saveObservable = this.saleId 
        ? this.saleService.updateSale(this.saleId, this.saleForm.value)
        : this.saleService.createSale(this.saleForm.value);

      saveObservable.subscribe(
        () => this.router.navigate(['/sales']),
        error => {
          // Handle error (e.g., show a notification)
          console.error('Error saving sale:', error);
        }
      );
    }
  }
}
