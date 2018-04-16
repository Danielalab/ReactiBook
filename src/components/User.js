import React from 'react';

const User = ({ posts })  => (
  <div className="col-md-6 col-11 py-3">
    <div className="container-fluid">
      <div className="row">
        {posts ? posts : 'cargando...'}
      </div>
    </div> 
  </div>
)

export default User;