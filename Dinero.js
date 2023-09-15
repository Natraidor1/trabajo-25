document.getElementById('calcular').addEventListener('click', function (event) {
    
    event.preventDefault();
    
    const ingresoDeDinero = parseInt(document.getElementById('ingresoDeDinero').value);

    if (isNaN(ingresoDeDinero) || ingresoDeDinero <= 0) {
        alert('La cantidad de ingreso no es válida. Ingrese una cantidad positiva.');
        return;
    }

    const nombreDeUsuario = document.getElementById('nombreDeUsuario').value;

    if (nombreDeUsuario.trim() === '') {
        alert('Ingrese su nombre.');
        return;
    }

    document.getElementById("mensajeIngreso").textContent = `Bienvenido ${nombreDeUsuario}, tu ingreso se ha realizado de la siguiente manera:`;

    const billetesDe100 = Math.floor(ingresoDeDinero / 100);
    const billetesDe50 = Math.floor((ingresoDeDinero % 100) / 50);
    const billetesDe20 = Math.floor((ingresoDeDinero % 50) / 20);
    const billetesDe10 = Math.floor((ingresoDeDinero % 20) / 10);
    const billetesDe5 = Math.floor((ingresoDeDinero % 10) / 5);
    const billetesDe1 = ingresoDeDinero % 5;

    document.getElementById('billetesDe100').textContent = billetesDe100;
    document.getElementById('billetesDe50').textContent = billetesDe50;
    document.getElementById('billetesDe20').textContent = billetesDe20;
    document.getElementById('billetesDe10').textContent = billetesDe10;
    document.getElementById('billetesDe5').textContent = billetesDe5;
    document.getElementById('billetesDe1').textContent = billetesDe1;
});
