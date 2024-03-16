function converterString(string){
    stringAux = "";
    for(i = string.length-1; i >=0; i--){
        stringAux = stringAux + string[i];
    };
    console.log(stringAux);
};

converterString("Matheus Nunes");