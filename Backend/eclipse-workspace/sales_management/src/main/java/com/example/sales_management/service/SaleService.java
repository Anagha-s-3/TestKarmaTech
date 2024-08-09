package com.example.sales_management.service;

import com.example.sales_management.entity.Sale;

import java.util.List;
import java.util.Optional;

public interface SaleService {
    List<Sale> getAllSales();
    Optional<Sale> getSaleById(Long id);  // Return Optional<Sale>
    Sale createSale(Sale sale);
    Sale updateSale(Long id, Sale sale);
    boolean deleteSale(Long id);
}
