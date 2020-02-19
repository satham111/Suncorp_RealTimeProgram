import uuidv4 from "uuid/v4";
import { ADD_POST } from "./Types";

export const createPost = ({
  fistname,
  lastname,
  gender,
  dob,
  taxfilenumber,
  occupation,
  addressline1,
  addressline2,
  postalcode,
  select1,
  emailaddress,
  mobilenumber,
  disply
}) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    fistname,
    lastname,
    gender,
    dob,
    taxfilenumber,
    occupation,
    addressline1,
    addressline2,
    postalcode,
    select1,
    emailaddress,
    mobilenumber,
    disply
  }
});

// export const deletePost = id => ({
//   type: DELETE_POST,
//   payload: {
//     id
//   }
// });
