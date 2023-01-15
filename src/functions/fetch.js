import axios from 'axios';
import {API} from './useGlobals';

async function addContact(inpObj) {
   await axios.post(API(), inpObj);
}

async function fetchContact() {
   let result = await axios.get(API());
   return result;
}

async function deleteContact(id) {
   await axios.delete(`${API()}/${id}`);
}

async function updateContact(id, inpObj) {
   await axios.patch(`${API()}/${id}`, inpObj);
}

export {addContact};
export {fetchContact};
export {deleteContact};
export {updateContact};
