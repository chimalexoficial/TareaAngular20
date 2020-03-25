export class Product {
    uid: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    existencia: number;
    constructor(uid: number, nombre: string, marca: string, descripcion: string, precio: number, existencia: number) {
    this.uid = uid;
    this.nombre = nombre;
    this.marca = marca;
    this.descripcion = descripcion;
    this.precio = precio;
    this.existencia = existencia;
    }
   }
