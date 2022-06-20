<script>
    function Calc(btn) {
        if(btn.value == "=") {
            document.calc.display.value = eval(document.calc.display.value);
        } else if(btn == "C") {
            document.calc.display.value = "";
        } else {
            if(btn.value == "x"){
                btn.value = "*";
            }else if(btn.value = "÷"){
                btn.value= "/";
            }
            document.calc.display.balue += btn.value;
            document.calc.multi_btn.value = "x";
            document.calc.div_btn.value = "÷";
        }
    }
</script>