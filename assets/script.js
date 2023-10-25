document.getElementById('Form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const isMarried = document.getElementById('isMarried').value;

    if (firstname && lastname && age && isMarried) {
        const table = document.getElementById('userTable');
        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = firstname;
        cell2.innerHTML = lastname;
        cell3.innerHTML = age;
        cell4.innerHTML = isMarried;

    
        document.getElementById('Form').reset();
    } else {
        alert('Lütfen tüm alanlari doldurun.');
    }
});