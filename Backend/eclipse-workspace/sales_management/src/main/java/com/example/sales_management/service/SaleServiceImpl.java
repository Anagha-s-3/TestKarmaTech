package com.example.sales_management.service;

import com.example.sales_management.entity.Sale;
import com.example.sales_management.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SaleServiceImpl implements SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Override
    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }

    @Override
    public Optional<Sale> getSaleById(Long id) {
        return saleRepository.findById(id);
    }

    @Override
    public Sale createSale(Sale sale) {
        return saleRepository.save(sale);
    }

    @Override
    public Sale updateSale(Long id, Sale sale) {
        Optional<Sale> existingSale = saleRepository.findById(id);
        if (existingSale.isPresent()) {
            Sale updatedSale = existingSale.get();
            updatedSale.setCustomerName(sale.getCustomerName());
            updatedSale.setReference(sale.getReference());
            updatedSale.setDate(sale.getDate());
            updatedSale.setStatus(sale.getStatus());
            updatedSale.setGrandTotal(sale.getGrandTotal());
            updatedSale.setPaid(sale.getPaid());
            updatedSale.setDue(sale.getDue());
            updatedSale.setPaymentStatus(sale.getPaymentStatus());
            updatedSale.setBiller(sale.getBiller());
            return saleRepository.save(updatedSale);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteSale(Long id) {
        saleRepository.deleteById(id);
		return false;
    }
}
