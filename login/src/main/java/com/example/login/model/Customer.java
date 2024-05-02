package com.example.login.model;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Entity
@Table(
        name = "users",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "customer_username_unique", columnNames = "username"
                )
        }
)
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
                 
    
    @Column(
            name = "username",
            nullable = false,
            columnDefinition = "VARCHAR(100)"
    )
    private String username;

    @Column(
            name = "password",
            nullable = false,
            columnDefinition = "VARCHAR(100)"
    )
    private String password;

}