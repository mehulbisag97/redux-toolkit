import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { deleteUsers } from "../store/actions/actions";
import { ToastsStore } from "react-toasts";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUser = () => {
    dispatch(deleteUsers());
    ToastsStore.success("Data cleared successfully");
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={() => deleteAllUser()}>
        Clear Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export default DeleteAllUser;
