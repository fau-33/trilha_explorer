// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "fau-33",
        name: "Flávio Félix",
        public_repos: "76",
        followers: "120000",
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "76",
        followers: "120000",
      },
    ];
  }
}

// classe que vai criar a visualização e eventos HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();
      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector('.user img').alt = `Imagem de ${user.name}`;
      row.querySelector('.user p').textContent = user.name;
      row.querySelector('.user span').textContent = user.login;
      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;   
      

      this.tbody.append(row);
    });


  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        
            <td class="user">
                <img
                    src="https://github.com/fau-33.png"
                    alt="Imagem de Félix Félix"
                />
                <a href="https://github.com/fau-33" target="_blank">
                    <p>
                    Flávio Félix</p>
                    <span>fau-33</span>
                    </p></a
                >
                </td>
                <td class="repositories">
                76
                </td>
                <td class="followers">
                9589
                </td>
                <td>
                <button class="remove">&times;</button>
            </td>
      
        `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
