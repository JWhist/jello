import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBoards } from "../../actions/BoardActions";
//  get boards from store
//  populate the boards on the form
//  filter the lists by selected board (default boards[0])
//  populate position = number of cards in selected list + 1
//  on move click =>
//    a) calculate the new position using array splice at index position - 1
//    b) set card.listId to the selected value of list dropdown
//    c) dispatch updateCard(card.listId, card.position) (write a reducer for lists to update
//       cards array if necessary)

const MoveCardForm = ({ onClose, card }) => {
  const allBoards = useSelector((state) => state.boards);
  const allLists = useSelector((s) => s.lists);
  const dispatch = useDispatch();
  const [selectedBoard, setSelectedBoard] = useState({});
  const [selectedList, setSelectedList] = useState({});
  const [listOptions, setListOptions] = useState([]);

  useEffect(() => {
    dispatch(
      fetchBoards((boards) => {
        console.log("dispatch");
      })
    );
  }, [dispatch]);

  useEffect(() => {
    updateAvailLists();
    console.log(listOptions);
  }, [selectedBoard]);

  const updateAvailLists = async () => {
    // if (!selectedBoard.lists) return;
    // let newLO = [];
    // for await (id of selectedBoard.lists) {
    //   dispatch(fetchList(id), (list) => newLO.push(list));
    // }
    // console.log(newLO);
    // take selected board, and map the array of board.lists ids to
    // { id, title }
    // set the listoptions to that map value
    // if no selected list, set selected list to that array[0]
  };

  const handleBoardSelect = (e) => {
    setSelectedBoard(allBoards.find((b) => b._id === e.target.value));
    updateAvailLists();
    if (!selectedList) setSelectedList(listOptions[0]);
    console.log(selectedList);
  };

  const handleListSelect = (e) => {
    setSelectedList(allLists.find((l) => l._id === e.target.value));
  };

  return selectedBoard ? (
    <div>
      <header>
        <span>Move Card</span>
        <a href="#" className="icon-sm icon-close" onClick={onClose}></a>
      </header>
      <div className="content">
        <div className="button-link setting board">
          <span className="label">Board</span>
          <span className="value js-board-value">{selectedBoard.title}</span>
          <label>Board</label>
          <select onChange={handleBoardSelect} value={selectedBoard._id}>
            {allBoards.map((board) => {
              return (
                <option key={board._id} value={board._id}>
                  {board.title}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <div className="button-link setting list">
            <span className="label">List</span>
            <span className="value js-list-value">{selectedList.title}</span>
            <label>List</label>
            <select onChange={handleListSelect} value={selectedList._id}>
              {listOptions.map((list) => {
                return (
                  <option key={list._id} value={list._id}>
                    {list.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="button-link setting position">
            <span className="label">Position</span>
            <span className="value">{}</span>
            <label>Position</label>
            <select>
              <option value="top" selected="selected">
                1 (current)
              </option>
              <option value="98303">2</option>
              <option value="163839">3</option>
              <option value="212991">4</option>
              <option value="245759">5</option>
              <option value="278527">6</option>
              <option value="311295">7</option>
              <option value="bottom">8</option>
            </select>
          </div>
        </div>

        <button className="button" type="submit">
          Move
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MoveCardForm;
