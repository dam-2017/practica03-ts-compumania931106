export class Operaciones {
    numbers:Array<number>;


    constructor(numbers:Array<number>){
        this.numbers = numbers;
    }

    get suma():number{
        var add:number = 0;
        let someArray = this.numbers;

        for (let entry of someArray) {
            add = add + entry;
        }
        return add;
    }

    get resta():number{
        var subtraction:number = 10;
        let someArray = this.numbers;

        for (let entry of someArray) {
            subtraction = subtraction - entry;
        }
        return subtraction;
    }

    get factorial():number{
        var factor:number = 1;
        let someArray = this.numbers;

        for (let entry of someArray) {
            factor = factor * entry
        }
        return factor;
    }

    get isPrimo():string{
        var result:string = "";
        let someArray = this.numbers;
        
        for (let entry of someArray) {
            if (entry == 1 || entry == 2) {
                result = result + `${entry} es primo `;
            }else{

            for (var i=2;i<entry;i++) {
                if(entry % i == 0) {
                    result = result + `${entry} no es primo `;
                    break;
                }else{
                    result = result + `${entry} es primo `;
                    break;
                }
            }
        }
            
        }   
        return result;
    }

}