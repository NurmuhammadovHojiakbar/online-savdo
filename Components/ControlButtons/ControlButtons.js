import ControlButtonsStyle from "../../styles/ControlButtons.module.css"

const ControlButtons = ({show}) => {
    return (
        <div className={ControlButtonsStyle.container}>
            <button className={`${ControlButtonsStyle.add} ${ControlButtonsStyle.button}`} onClick={show}>Qo'shish</button>
            <button className={`${ControlButtonsStyle.edit} ${ControlButtonsStyle.button}`}>O'zgaritish</button>
            <button className={`${ControlButtonsStyle.delete} ${ControlButtonsStyle.button}`}>O'chirish</button>
        </div>
    );
}
 
export default ControlButtons;