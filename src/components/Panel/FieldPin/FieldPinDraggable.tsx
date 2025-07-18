import { useDraggable } from "@dnd-kit/core";
import FieldPin from "./FieldPin";
import type { FieldPinProps } from "./FieldPin";

const FieldPinDraggable = (props: FieldPinProps) => {
    const { data } = props;

    const { setNodeRef, attributes, listeners } = useDraggable({
        id: data.code,
        data: {
            data,
        },
    })

    return (
        <FieldPin {...props} ref={setNodeRef} drapProps={{ ...attributes, ...listeners }} />
    )
}

export default FieldPinDraggable;