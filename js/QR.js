
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 100,
    height : 100
});

function makeCode () {		
    var elText = document.getElementById("Cedula");
    
    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    
    qrcode.makeCode(elText.value);
}

makeCode();

$("#Cedula").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });

    function PostBD() {
        var ElNombre = document.getElementById("Nombre").value;
        var LaCarrera = document.getElementById("Carrera").value;
        var ElNacimiento = document.getElementById("Nacimiento").value;
        var LaCedula = document.getElementById("Cedula").value;
    
        // Crear un objeto con los datos que quieres enviar al servidor
        var data = {
            Nombre: ElNombre,
            Carrera: LaCarrera,
            Nacimiento: ElNacimiento,
            Cedula: LaCedula
        };
        $.ajax({
            data: data,
            url: 'http://localhost:3000/students', 
            type: 'post',
            success: function (response) {
                console.log(response); // Imprimir respuesta del servidor
            },
            error: function (error) {
                console.log(error); // Imprimir respuesta de error
            }
        });
    }
    document.getElementById('EnviarDatos').addEventListener('click', function() {
        enviarDatos();
    });
    function enviarDatos() {
        PostBD();
    }
    