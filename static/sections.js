document.querySelectorAll('section')
        .forEach(el =>
          el.addEventListener('click', () =>
            el.querySelector('.emoji-list').classList.toggle('expanded')
          )
        );
