const marvel = {

    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a9ea64dfbeb843a83320b3acd179e2a3&hash=C595A660873C0E2B441E38B562FE56AD';
        const container = document.querySelector('#Marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.url[0].url;
                    contentHTML += `
                    <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
                    class="img-thumbnail">
                </a>
                <h3 class= "title">${hero.name}</h3>
            </div>`
                }
                container.innerHTML = contentHTML
            })
    }
}

marvel.render();