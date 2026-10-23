function Profile() {
  return (
    <div className="container py-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "450px" }}>
        <div className="card-body text-center p-4">
          <h2 className="mb-4">Mi perfil 👤</h2>

          <p className="text-muted">Correo electrónico</p>

          <p className="fw-bold">usuario@pizzamamaia.cl</p>

          <button className="btn btn-outline-danger mt-3">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
