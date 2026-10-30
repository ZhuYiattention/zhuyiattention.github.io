const viewer = document.createElement('dialog');
viewer.className = 'viewer';
viewer.setAttribute('aria-label','Artwork viewer');
viewer.innerHTML = '<button class="close" aria-label="Close image">×</button><img alt=""><p></p>';
document.body.append(viewer);
document.querySelectorAll('figure img').forEach(image => { image.tabIndex = 0; image.setAttribute('role','button'); image.setAttribute('aria-label', `Enlarge: ${image.alt}`); const open = () => { viewer.querySelector('img').src = image.src; viewer.querySelector('img').alt = image.alt; viewer.querySelector('p').textContent = image.closest('figure').querySelector('figcaption')?.textContent || image.alt; viewer.showModal(); }; image.addEventListener('click', open); image.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } }); });
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
