document.querySelectorAll('.emoji-list')
        .forEach(el =>
          el.addEventListener('click', () =>
            el.classList.toggle('expanded')
          )
        );
