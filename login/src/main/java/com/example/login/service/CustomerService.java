package com.example.login.service;
import com.example.login.model.Customer;
import com.example.login.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CustomerService {

    @Autowired
    private final CustomerRepository customerRepository;

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomer(String username, String password) {
        Optional<Customer> customerOptional = customerRepository.findCustomerByUsername(username);
        if (customerOptional.isPresent()) {
            if (!customerOptional.get().getPassword().equals(password)) {
                throw new IllegalStateException("password is not correct for username: "+ username);
            }
        }else {
            throw new IllegalStateException("username: " + username + " is not present");
        }
        return customerOptional.get();
    }

    public void addNewCustomer(Customer customer) {
        Optional<Customer> customerOptional = customerRepository
                .findCustomerByUsername(customer.getUsername());
        if(customerOptional.isPresent()) {
            throw new IllegalStateException("username already taken");
        }
        customerRepository.save(customer);
    }

    public void deleteCustomerByUsername(String username) {
        Optional<Customer> customerOptional = customerRepository
                .findCustomerByUsername(username);
        if(customerOptional.isEmpty()) {
            throw new IllegalStateException("customer with username: " + username + " doesn't exist");
        }
        customerRepository.deleteById(customerOptional.get().getId());
    }

}
