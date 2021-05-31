//validator za brojeve od 1 do 9, uz navedeno dopušten je razmak i backspace

var validate = new Array();
        validate.push(8); 
        validate.push(32);
        function doValidate(e) {
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || validate.indexOf(keyCode) != -1);
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }