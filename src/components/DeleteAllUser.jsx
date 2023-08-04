import { styled } from "styled-components";
import { deleteUsers } from "../store/actions/actions";
import { ToastsStore } from "react-toasts";
import { useDispatch, useSelector } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const deleteAllUser = () => {
    dispatch(deleteUsers());
    ToastsStore.success("Data cleared successfully");
  };
  return (
    <Wrapper>
      <button
        className="btn clear-btn"
        onClick={() => deleteAllUser()}
        disabled={data.length === 0}
        style={{ cursor: data.length === 0 ? "not-allowed" : "pointer" }}
      >
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
