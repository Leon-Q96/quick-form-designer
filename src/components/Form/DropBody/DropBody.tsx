import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames";
import styles from "./DropBody.module.less";

const DropBody = () => {

    const { setNodeRef, isOver } = useDroppable({
        id: 'droppable',
    })

    const classnames = classNames(styles.container, {
        [styles.over]: isOver,
    })

    return (
        <div ref={setNodeRef} className={classnames}>
            
        </div>
    )
}

export default DropBody