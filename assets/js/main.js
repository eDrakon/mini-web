'use strict'

$(document).ready(() => {

    loadDefaultTheme();

    if(localStorage.getItem('Name') != null) {
        $('#login').css('display', 'none');
        $('aside').append(`<hr><p>Bienvenida, ${localStorage.getItem('Name')}</p>`);
        $('aside').append(`<button id="logout">Cerrar sesión</button>`);

        $('#logout').click(() => {
            localStorage.clear();
            location.reload();
        });
    }

    $('.slider').bxSlider();

    var posts = [
        {
            title: 'Jony es puto >:V',
            date: '06/03/2021',
            content: 'Lo es y punto.',
            comments: '0'
        },
        {
            title: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed.',
            date: '02/03/2000',
            content: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed. Maecenas nisi enim, ornare at libero non, venenatis dignissim tortor. Phasellus ut blandit mi, non gravida lorem. Vivamus tincidunt magna vel tellus congue, at volutpat tortor convallis. Quisque vitae finibus purus. Curabitur rhoncus facilisis tortor, in mollis mauris euismod vel. Donec vel sagittis tellus. Pellentesque in enim diam. Praesent fermentum feugiat sem aliquet maximus. Integer vestibulum, tellus eu molestie pharetra, justo nisi bibendum diam, quis tempus enim libero sodales justo. Nam fringilla purus mattis lorem posuere, sed imperdiet lectus mollis. Ut eget ipsum cursus, finibus massa nec, mattis ante. Ut et enim id dui facilisis sagittis et nec ante. Vivamus vitae risus tristique, laoreet quam id, consequat diam.',
            comments: '21'
        },
        {
            title: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed. Maecenas nisi enim, ornare at libero non',
            date: '20/05/1597',
            content: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed. Maecenas nisi enim, ornare at libero non, venenatis dignissim tortor. Phasellus ut blandit mi, non gravida lorem. Vivamus tincidunt magna vel tellus congue, at volutpat tortor convallis. Quisque vitae finibus purus. Curabitur rhoncus facilisis tortor, in mollis mauris euismod vel. Donec vel sagittis tellus. Pellentesque in enim diam. Praesent fermentum feugiat sem aliquet maximus. Integer vestibulum, tellus eu molestie pharetra, justo nisi bibendum diam, quis tempus enim libero sodales justo. Nam fringilla purus mattis lorem posuere, sed imperdiet lectus mollis. Ut eget ipsum cursus, finibus massa nec, mattis ante. Ut et enim id dui facilisis sagittis et nec ante. Vivamus vitae risus tristique, laoreet quam id, consequat diam.',
            comments: '32'
        },
        {
            title: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed.',
            date: '08/09/2015',
            content: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed. Maecenas nisi enim, ornare at libero non, venenatis dignissim tortor. Phasellus ut blandit mi, non gravida lorem. Vivamus tincidunt magna vel tellus congue, at volutpat tortor convallis. Quisque vitae finibus purus. Curabitur rhoncus facilisis tortor, in mollis mauris euismod vel. Donec vel sagittis tellus. Pellentesque in enim diam. Praesent fermentum feugiat sem aliquet maximus. Integer vestibulum, tellus eu molestie pharetra, justo nisi bibendum diam, quis tempus enim libero sodales justo. Nam fringilla purus mattis lorem posuere, sed imperdiet lectus mollis. Ut eget ipsum cursus, finibus massa nec, mattis ante. Ut et enim id dui facilisis sagittis et nec ante. Vivamus vitae risus tristique, laoreet quam id, consequat diam.',
            comments: '54'
        },
        {
            title: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed. Maecenas nisi enim',
            date: '31/01/1999',
            content: 'Etiam tincidunt pellentesque purus, vel aliquam risus gravida sed. Maecenas nisi enim, ornare at libero non, venenatis dignissim tortor. Phasellus ut blandit mi, non gravida lorem. Vivamus tincidunt magna vel tellus congue, at volutpat tortor convallis. Quisque vitae finibus purus. Curabitur rhoncus facilisis tortor, in mollis mauris euismod vel. Donec vel sagittis tellus. Pellentesque in enim diam. Praesent fermentum feugiat sem aliquet maximus. Integer vestibulum, tellus eu molestie pharetra, justo nisi bibendum diam, quis tempus enim libero sodales justo. Nam fringilla purus mattis lorem posuere, sed imperdiet lectus mollis. Ut eget ipsum cursus, finibus massa nec, mattis ante. Ut et enim id dui facilisis sagittis et nec ante. Vivamus vitae risus tristique, laoreet quam id, consequat diam.',
            comments: '89'
        }
    ];

    let listOfPost = '';
    posts.forEach(element => {
        listOfPost += `
        <article>
            <h2 class="title">${element.title}</h2>
            <button class="btn comments">${element.comments} Comentarios</button>
            <span class="date">Publicado el: ${element.date}</span>
            <p class="content">${element.content}</p>
            <button class=" btn read">Leer más</button>
        </article>
        `
    });
    $('#posts').html(listOfPost);

    // Theme menu
    var body = document.body;

    $('#theme-green').click(() => {
        body.className = 'green-theme';
        localStorage.setItem('Theme', 'green');
    });

    $('#theme-red').click(() => {
        body.className = 'red-theme';
        localStorage.setItem('Theme', 'red');
    });

    $('#theme-blue').click(() => {
        body.className = 'blue-theme';
        localStorage.setItem('Theme', 'blue');
    });

    function loadDefaultTheme() {
        let theme = localStorage.getItem('Theme');
        var body = document.body;
        if(theme == 'red') {
            body.className = 'red-theme';
        } else if(theme == 'blue') {
            body.className = 'blue-theme';
        } else {
            body.className = 'green-theme';
        }
    }

    $('#login-button').click((e) => {
        e.preventDefault();
        let name = $('#login-name').val();
        let email = $('#login-email').val();
        let password = $('#login-password').val();

        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        location.reload();
    })

    // To top
    $('#to-top').click(() => {
        $('html, body').animate({ scrollTop: 0}, 'slow')
    })
})