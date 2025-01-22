document.addEventListener('DOMContentLoaded', () => {
  const languageItems = document.querySelectorAll('.language-item');

  // Configura Intersection Observer
  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              // Aplica un retraso dinámico basado en el índice del elemento
              setTimeout(() => {
                  entry.target.classList.add('show');
              }, index * 200); // 200ms de retraso entre cada item

              // Deja de observar una vez que la animación se ejecuta
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.7 });

  // Observa cada elemento de la lista de lenguajes
  languageItems.forEach(item => {
      observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu_link");

    // IntersectionObserver para detectar la sección activa
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`a[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Agregar clase active al enlace correspondiente
                navLinks.forEach((link) => link.classList.remove("active"));
                if (link) link.classList.add("active");
            }
        });
    }, { threshold: 0.6 }); // Ajustar visibilidad al 60% para considerar activa

    // Observar cada sección
    sections.forEach((section) => observer.observe(section));

    // Desplazamiento al hacer clic en los enlaces
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calcular una posición razonable centrada
                const topPosition = targetSection.offsetTop - 145; // 70 píxeles desde la parte superior del viewport


                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
