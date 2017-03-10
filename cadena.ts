export class Cadena {
    text: string;
    multiText:string;
    private _textResult: string;

    constructor(text:string, multiText:string){
        this.text = text;
        this.multiText = multiText;
    }

    get isPalindromo():boolean{
        return this.text.split('').reverse().join('') === this.text;
    }

    get howVowels():string{
        var getAs:number;
        var getEs:number;
        var getIs:number;
        var getOs:number;
        var getUs:number;
        
        try{
            getAs = this.text.match(/[a]/gi).length
        }catch(a){
            getAs = 0
        }

        try{
            getEs = this.text.match(/[e]/gi).length
        }catch(e){
            getEs = 0
        }

        try{
            getIs = this.text.match(/[i]/gi).length
        }catch(e){
            getIs = 0
        }

        try{
            getOs = this.text.match(/[o]/gi).length
        }catch(e){
            getOs = 0
        }

        try{
            getUs = this.text.match(/[u]/gi).length
        }catch(e){
            getUs = 0
        }

        return `
        - numbers of As: ${getAs}
        - numbers of Es: ${getEs}
        - numbers of Is: ${getIs}
        - numbers of Os: ${getOs}
        - numbers of Us: ${getUs}`;
    }

    get countLetters():number{
        var count:number = 0;
        let someArray = this.multiText.split('');

        for (let entry of someArray) {
            if(entry != " "){
                count++;
            }
        }
        return count;
    }

    get countWords():number{
        var count:number = 0;
        let someArray = this.multiText.split(' ');

        for (let entry of someArray) {
            if(entry != ""){
                count++;
            }
        }
        return count;
    }


}