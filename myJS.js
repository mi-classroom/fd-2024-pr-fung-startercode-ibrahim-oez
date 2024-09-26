// Gpt Code
fetch('works.json')
  .then(response => response.json())
  .then(data => {
    const works = data.slice(0, 5);
    const workGrid = document.querySelector('.work-grid');
    works.forEach(work => {
      const workItem = document.createElement('div');
      workItem.classList.add('work-item');

      const image = document.createElement('img');
      image.src = work.image;
      image.alt = work.title;

      const content = document.createElement('div');
      content.classList.add('content');

      const title = document.createElement('h3');
      title.textContent = work.title;

      const description = document.createElement('p');
      description.textContent = work.description;

      content.appendChild(title);
      content.appendChild(description);

      workItem.appendChild(image);
      workItem.appendChild(content);

      workGrid.appendChild(workItem);
    });

    // Füge den Button "Mehr Arbeiten" hinzu
    const moreButton = document.createElement('button');
    moreButton.textContent = 'Mehr Arbeiten';
    moreButton.className = 'simple-button'
    moreButton.addEventListener('click', () => {
      // Lade alle Arbeiten und zeige sie an
      fetch('works.json')
        .then(response => response.json())
        .then(data => {
          workGrid.innerHTML = '';
          data.forEach(work => {
            const workItem = document.createElement('div');
            workItem.classList.add('work-item');

            const image = document.createElement('img');
            image.src = work.image;
            image.alt = work.title;

            const content = document.createElement('div');
            content.classList.add('content');

            const title = document.createElement('h3');
            title.textContent = work.title;

            const description = document.createElement('p');
            description.textContent = work.description;

            content.appendChild(title);
            content.appendChild(description);

            workItem.appendChild(image);
            workItem.appendChild(content);

            workGrid.appendChild(workItem);
          });
          moreButton.style.display = 'none';
        });
    });
    workGrid.appendChild(moreButton);
  });


  