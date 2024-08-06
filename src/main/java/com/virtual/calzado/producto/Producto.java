package com.virtual.calzado.producto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "producto")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El código es obligatorio")
    private String codigo;

    @NotBlank(message = "La marca es obligatoria")
    private String marca;

    @NotBlank(message = "El distribuidor es obligatorio")
    private String distribuidor;

    @NotBlank(message = "El género es obligatorio")
    private String genero;

    @Min(value = 0, message = "Las unidades deben ser mayores o iguales a 0")
    private int unidades;

    private Double numUs;

    private Double numUsY;

    @Min(value = 0, message = "El precio debe ser mayor o igual a 0")
    private double precio;
}
