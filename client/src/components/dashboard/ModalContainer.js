import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchCard, updateCard } from "../../actions/CardActions";
import ModalAside from "./ModalAside";
import ModalHeader from "./ModalHeader";
import ModalSection from "./ModalSection";
import ArchivedBanner from "./ArchivedBanner";
import DueDate from "./DueDate";
import Popover from "../shared/Popover";

const ModalContainer = () => {
  const [popover, setPopover] = useState({ visible: false, type: null, attachedTo: null })
  const { id } = useParams();
  const card = useSelector(state => state.cards.find(card => card._id === id))
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!card) {
      dispatch(fetchCard(id));
    }
  }, [dispatch, id])

  const handleClick = () => {
    history.push(`/boards/${card.boardId}`);
  };

  const handleClosePopover = () => {
    setPopover({ visible: false, type: null, attachedTo: null})
  }

  const handleDueDateSubmit = (updates) => {
    dispatch(updateCard(card._id, updates, handleClosePopover))
  }

  const handleDueDateRemove = () => {
    dispatch(updateCard(card._id, { card: {dueDate: null} }, handleClosePopover));
  }

  const popoverChildren = useCallback(() => {
    const type = popover.type;
    const visible = popover.visible;
    if (visible && type) {
      switch (type) {
        case "due-date":
          return (
            <DueDate
              card={card}
              dueDate={card.dueDate}
               onClose={handleClosePopover}
               onSubmit={handleDueDateSubmit}
               onRemove={handleDueDateRemove}
            />
          );
        // case "labels":
        //   return (
        //     <LabelsForm
        //       selectedLabels={card.labels}
        //       onClose={handleClosePopover}
        //       onClickLabel={handleToggleLabel}
        //     />
        //   );
        // case "copy-card":
        //   return (
        //     <CopyCardForm
        //       onClose={handleClosePopover}
        //       card={card}
        //       comments={state.comments}
        //     />
        //   );
        // case "move-card":
        //   return (
        //     <MoveCardForm
        //       onClose={handleClosePopover}
        //       card={state.card}
        //       comments={state.comments}
        //     />
        //   );
        default:
          return null;
      }
    }
  }, [
    handleClosePopover,
    handleDueDateSubmit,
  //  handleDueDateRemove,
  //  handleToggleLabel,
  //  state.card,
    popover.type,
    popover.visible,
  //  state.comments,
  ]);

  return card ? (
    <>
      <div id="modal-container">
        <div className="screen"></div>
        <div id="modal">
          <i onClick={handleClick} className="x-icon icon close-modal"></i>
          {card.archived ? <ArchivedBanner /> : <></>}
          <ModalHeader card={card} />
          <ModalSection card={card} />
          <ModalAside card={card} setPopover={setPopover} />
        </div>
      </div>
     <Popover {...popover}>{popoverChildren()}</Popover>
    </>
  ) : (
    <></>
  );
};

export default ModalContainer;
