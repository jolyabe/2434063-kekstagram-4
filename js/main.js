import {getData} from './api.js';
import {showFilteredPhotos} from './filters.js';
import './formUpload.js';
import './effects.js';
import './scalingPhoto.js';

const loadPhotos = async () => {
  try {
    showFilteredPhotos(await getData());
  }
  catch (err){
    const alertMessage = document.querySelector('#alert').content;
    alertMessage.querySelector('.alert_message').textContent = err.message;
    document.body.append(alertMessage);
  }
};

loadPhotos();
