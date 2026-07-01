
// Función para cargar y mostrar los links desde el JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('.data.json')
        .then(response => response.json())
        .then(data => {
            
            // 1. Cargar áreas independientes (2026)
            const areasContainer = document.getElementById('areas-list');
            const areas = data.cuadernillos_areas_independientes["2026"];
            
            for (const [materia, link] of Object.entries(areas)) {
                const a = document.createElement('a');
                a.href = link;
                a.textContent = `📄 ${materia}`;
                a.className = 'pdf-link';
                a.target = '_blank'; // Abre en una pestaña nueva
                areasContainer.appendChild(a);
            }

            // 2. Cargar cuadernillos completos
            const completosContainer = document.getElementById('completos-list');
            const completos = data.cuadernillos_completos;
            
            for (const [sesion, link] of Object.entries(completos)) {
                const a = document.createElement('a');
                a.href = link;
                a.textContent = `📘 ${sesion}`;
                a.className = 'pdf-link';
                a.target = '_blank';
                completosContainer.appendChild(a);
            }
            
        })
        .catch(error => console.error('Error cargando los links:', error));
});
