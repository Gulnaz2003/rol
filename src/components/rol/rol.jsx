import "./rol.css";

function Rol() {
  return (
    <div className="rol_container">
      <div className="rol_options">
        <div className="rol_title">
          <h1>Выберите вашу роль</h1>

          <div className="rol">
            <button classname="igrok">
              <h3>Игрок</h3>
            </button>
            <button classname="vedushii">
              <h3>Ведущий</h3>
            </button>
          </div>
          <button className="button">
            <p>Продолжить</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rol;
