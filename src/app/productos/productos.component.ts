import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Product[];
  inputText = '';
  busquedaActual = [];
  filaImpar = 1;
  filaPar = 2;
  check1 = false;
  check2 = false;
  check3 = false;

  constructor() {
    this.productos = [new Product(12, 'Smartphone', 'LG', 'Quadcore 3GHZ', 12018.5, 5),
    new Product(123, 'Smartwatch', 'Sony', '3GB Ram', 4999.9, 0),
    new Product(34, 'SmartTV', 'Sony', '52 pulgadas, Conexión wifi', 8999.9, 3)];
    this.busquedaActual = this.productos;
  }

  busquedaFilter() {
    console.log('busquedaFilter');
    this.busquedaActual = this.productos.filter((e) =>
      e.nombre.includes(this.inputText) ||
      e.descripcion.includes(this.inputText)
    );
    console.log(this.busquedaActual);
  }

  firstChecked() {
    if (this.check1 = false) {
      this.check1 = true;
    }
    console.log(this.check1);
  }

  secondChecked() {
    this.check2 = true;
  }

  thirdChecked() {
    this.check3 = true;
  }


  /*productos = [
    {
      Id: 1,
       Nombre: 'Smartphone',
       Precio: 13999,
       Marca: 'Xiaomi',
       Descripcion: 'Quadcore 3 GHz',
       Existencia: 5
    },
    {
      Id: 2,
      Nombre: 'Smartwatch',
      Precio: 4999,
      Marca: 'Motorola',
      Descripcion: '3GB RAM',
      Existencia: 0
    },
    {
      Id: 3,
      Nombre: 'Smart TV',
      Precio: 164999,
      Marca: 'Samsung',
      Descripcion: '52"\ Netflix y mas',
      Existencia: 3
    }];*/




  ngOnInit(): void {
  }

}
