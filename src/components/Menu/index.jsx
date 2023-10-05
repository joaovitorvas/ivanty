import './styles.css'

export const Menu = () => {
    return (
        <>
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul class="menu__box">
                <li><a class="menu__item" href="/">Home</a></li>
                <li><a class="menu__item" href="/perfil">Perfil</a></li>
                <li><a class="menu__item" href="/login">Categorias</a></li>
                <li><a class="menu__item" href="/login">Suporte</a></li>
                <li><a class="menu__item" href="/login">Cadastrar-se</a></li>
                </ul>
            </div>
        </>
    );
  }