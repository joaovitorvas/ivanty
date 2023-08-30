import './styles.css'

export const Menu = () => {
    return (
        <>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    <li>Cadastrar-se</li>   
                    <li></li>   
                    <li></li>   
                </ul>
            </div>
        </>
    );
  }
