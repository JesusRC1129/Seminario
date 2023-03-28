
package com.mycompany.reto2;

/**
 * @author Jesus Rodriguez - Jesus Caballero
 */

import java.util.Scanner;

public class Reto2 {

    public static void main(String[] args) {
        Scanner sc = new  Scanner(System.in);
        
        int cantidad_boletas, total, precioBase=0, descuentoHora=0, aumentoHoraPico=0, descuentoMedioPago=0, recargo =0;
        String tipo_sala;
        boolean hora_pico, pago_tarjeta_cine, recerva ; 
        
        
        System.out.println("Tarifa Basica: ");
        System.out.println("Dinamix - 18800pesos");
        System.out.println("3D - 15500pesos");
        System.out.println("2D - 11300Pesos");
        
        
        
        System.out.print("Cantidad de boletas: ");
        cantidad_boletas = sc.nextInt();
        
        System.out.print("Tipo de sala: ");
        tipo_sala = sc.next();
        
        System.out.print("Hora pico: ");
        hora_pico = sc.nextBoolean();
        
        System.out.print("Paga con targeta cinema?: ");
        pago_tarjeta_cine = sc.nextBoolean();
        
        System.out.print("Tiene recerva?: ");
        recerva = sc.nextBoolean();
        
        
        switch(tipo_sala){
            case "Dinamix" -> precioBase = 18800; 
            
            case "3D" -> precioBase = 15500; 
            
            case "2D" -> precioBase = 11300;
        }
        
        if(hora_pico == false){
            descuentoHora += (int) Math.round(precioBase * 0.1);
        } else{
            if (tipo_sala.equals("2D") || tipo_sala.equals("3D")) { 
                aumentoHoraPico = (int) Math.round(precioBase * 0.25); 
                
            } else if (tipo_sala.equals("Dinamix")) {
                aumentoHoraPico = (int) Math.round(precioBase * 0.5); 
            }
        }
        
        if(cantidad_boletas >= 3){
            descuentoHora += 500 * cantidad_boletas;
        }
        
        if (pago_tarjeta_cine == true) {
            descuentoMedioPago = (int) Math.round(precioBase * 0.05); 
        }
        
        if(recerva == true){
            recargo = 2000 * cantidad_boletas;
        }
        
        
        total = (precioBase - (descuentoHora + descuentoMedioPago)) + recargo + aumentoHoraPico;
        
        
        System.out.print("total: ");
        System.out.print(total);
        
    }
}
