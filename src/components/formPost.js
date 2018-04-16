import React from 'react';
import { firebaseDataBase, firebaseStorage } from '../firebase'

// inicia validación de formulario

let text = '';
let file = '';
let category = 'public';
let objPost = {}

let textAreaValid = false;
let inputFileValid = false;
let disabledButton = true;

// funcionalidad para validar textArea 
let isTextAreaValid = (text) => { 
  if (text.trim().length !== 0) {
    textAreaValid = true;
  } else {
    textAreaValid = false;
  }
};

let allInputsValid = () => {
  if (textAreaValid || inputFileValid) {
    disabledButton = false;
  } else {
    disabledButton = true;
  }
}

// inicia componente FormPost

const FormPost = ({ uid, email, addPost }) => {

  let addImage = (uid, file, category, addPost) => {
    const storageRef = firebaseStorage.ref(`/users/${uid}/${file.name}`);
    const task = storageRef.put(file);
    // Listener que se ocupa del estado de la carga del fichero
    task.on('state_changed', snapshot => {
      // Calculamos el porcentaje de tamaño transferido y actualizamos
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, error => {
      // Ocurre un error
      console.error(error.message);
    }, () => {
        console.log(task.snapshot.downloadURL) 
        objPost.img = task.snapshot.downloadURL
        addPost(uid, objPost, category)
      })
  }

  return (
    <form className="col-12 my-3 pt-3 formPost">
      <div className="row justify-content-center">
        <div className="form-group col-12">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            placeholder="¿Qué piensas?"
            onChange={(event) => text = event.target.value}
          ></textarea>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="form-group col text-start">
          <div className="row justify-content-center">
            <div className="form-group col text-start">
              <select className="form-control pointer" onChange={(event) => category = event.target.value}>
                <option value="public">Public</option>
                <option value="private">Just me</option>            
              </select>
            </div>
            <div className="form-group col text-start">
              <label className="btn btn-primary">
                    Photo <input type="file" className="d-none" onChange={(event) => {
                    file = event.target.files[0]}}/>
                </label>
            </div>
          </div>
        </div>
        <div className="form-group col-3">
          <div className="row  justify-content-center">
            <button type="submit" className="btn btn-success"
              onClick={(event) => {
                event.preventDefault();  
                objPost.email = email       
                if (file && text) {
                  objPost.text = text;
                  addImage(uid, file, category, addPost);     
                } else if (file && !text) {           
                  addImage(uid, file, category, addPost);                         
                } else if (text && !file) {
                  objPost.text = text;  
                  addPost(uid, objPost, category)          
                }
              }}
            >To Post</button> 
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormPost;