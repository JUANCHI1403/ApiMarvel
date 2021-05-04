const marvel = {

    //Hash = c595a660873c0e2b441e38b562fe56ad
    // establish 
    // public 
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a9ea64dfbeb843a83320b3acd179e2a3&hash=c595a660873c0e2b441e38b562fe56ad';
        const container = document.querySelector('#Marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                      <div class="col-md-3">
                          <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                          </a>
                          <h3 class="title">${hero.name}</h3>
                      </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};

marvel.render();