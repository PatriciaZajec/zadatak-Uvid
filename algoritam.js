


function myAlgoritam(event) {
    
//array (arr) iz <input> polja korisnika
    var arr = [];

     arr = (document.getElementById("numbers").value).split(" ");
    

//array (arr) prolazi kroz petlju, pretvaranje u integer, unos koji nije broj ne prolazi petlju (razmaci), podatci se pohranjuju u array2 (arr2)
     
    var arr2 = []
    for(var i=0; i<arr.length;i++) {arr[i] = parseInt(arr[i], 10);
        if(Number.isInteger(arr[i])) {
            arr2.push(arr[i]);
        }
    }


    var n = arr2.length;

//funkcija 
    function splitArray() {

        var sum_all = 0;
//prva for petlja, prolazi kroz sve elemente i sumira ih
        for(var i = 0; i < n; i++) {
            sum_all += arr2[i];
        }
        


//druga for petlja s if statement - element u petlji se zbraja s umnoškom sume ove petlje te se uspoređuje sa sum_all 
        var sum_start= 0;
        for(var i = 0; i < n; i++) {
            if (arr2[i] + 2*sum_start  == sum_all)  { 
                
                return "Index(x) na kojem se niz dijeli je: " + i;
            };
            sum_start += arr2[i];

        } 

        
//uvjet nije zadovoljen
        return "Niz se ne može podijeliti.";
       


    }

    splitArray();
  

    

    
    


  
    
  
    

    
    

//prikaz rezultata
    document.getElementById('resolve').innerHTML =  splitArray() ;
   
   
    

    
}




