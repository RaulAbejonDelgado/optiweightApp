import { Component } from '@angular/core';

@Component({
  selector: 'app-process-data',
  templateUrl: './process-data.component.html',
  styles: []
})
export class ProcessDataComponent  {
public var arrayFilas:string[][];
  constructor(input: HTMLInputElement) {
    this.arrayFilas ;
};
  public function leeArchivos(numarchivo:number,file:any) {
    var fr = new FileReader();
    public var arrayFilas:string[][];
    /*var arrayFilas:string[][];*/
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
            arrayFilas.push(rows[t].split("\r"));
        };
      };
      console.log(arrayFilas);
  };
  fr.readAsText(file,'ISO-8859-4');
  return (arrayFilas);
}
public function onFileSelect(input: HTMLInputElement) {
  var files = input.files;

  var len = files.length;
  var res:string[][];

  for (var b=0;b<len;b++) {
    console.log('puta');
    res = this.leeArchivos(b,files[b]);
    console.log(res);

  };


};


};
