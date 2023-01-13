import axios from 'axios';
import {API} from './useGlobals';

function useAddContact(inpObj) {
   axios.post(API(), inpObj);
}

async function fetchContact() {
   let result = axios.get(API());
   return result;
}

function deleteContact(id) {
   axios.delete(`${API()}/${id}`);
}

async function updateContact(id, inpObj) {
   await axios.patch(`${API()}/${id}`, inpObj);
}

export {useAddContact};
export {fetchContact};
export {deleteContact};
export {updateContact};
