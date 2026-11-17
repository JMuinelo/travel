class Accommodation {
  #name!: string;
  #cost!: number

  constructor(_name:string,_cost:number){
    this.setCost(_cost);
    this.setName(_name);
  }

  getName(): string {
    return this.#name;
  }

  setName(_name: string): void {
    if(_name.length<=0 || typeof _name !== "string") throw new Error("El nombre no puede ser vacío");
    else this.#name = _name;
  }

  getCost(): number {
    return this.#cost;
  }

  setCost(_cost: number): void {
    if(_cost < 0 || typeof _cost !== "number") throw new Error("costo debe ser mayor a 0");
    else this.#cost =_cost;
  }
}
export default Accommodation;
