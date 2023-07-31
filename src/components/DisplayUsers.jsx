import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { editUsers, removeUser } from "../store/slices/UserSlice";
import { useState } from "react";
import { ToastsStore } from "react-toasts";

const DisplayUsers = () => {
  const data = useSelector((state) => state.users);
  console.log("data:", data);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState();
  const editUser = (id, user) => {
    setEdit(id);
    setValue(user);
  };
  const deleteUser = (id) => {
    dispatch(removeUser(id));
    ToastsStore.success(`Data deleted successfully`);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const saveData = (e) => {
    e.preventDefault();
    dispatch(editUsers({ user: value, id: edit }));
    setEdit(false);
    ToastsStore.success(`Data edited successfully`);
  };
  return (
    <>
      <Wrapper>
        {data.length > 0 ? (
          <div>
            {data.map((user, id) => {
              console.log(" user:", user, id);
              return (
                <li key={id}>
                  {edit === id ? (
                    <>
                      <form onSubmit={saveData}>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleChange(e)}
                          className="input"
                          style={{}}
                        />
                      </form>
                    </>
                  ) : (
                    <h3
                      style={{
                        width: "30%",
                      }}
                    >
                      {user}
                    </h3>
                  )}
                  <div>
                    <button
                      className="btn-delete"
                      onClick={() => editUser(id, user)}
                    >
                      <AiFillEdit className="edit-icon" />
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteUser(id)}
                    >
                      <AiFillDelete className="delete-icon" />
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
        ) : (
          "No Records Found"
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  li {
    width: "100%";
    padding: 1rem;
    border-bottom: 1px solid #eee;
    &:first-child {
      border-top: 1px solid #eee;
    }
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .btn-delete {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.3rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  .edit-icon {
    font-size: 2.6rem;
    color: #080482;
    margin-left: 12px;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  .input {
    color: #727272;
    padding: 0.25rem;
    font-size: 18px;
    width: "170px";
    font-family: sans-serif;
    margin-left: 15px;
    font-weight: bold;
  }
`;
export default DisplayUsers;
