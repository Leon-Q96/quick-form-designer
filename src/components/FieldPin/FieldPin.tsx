import { useDraggable } from "@dnd-kit/core";
import { Popconfirm, Button } from "antd";
import type { AnyObject } from "antd/es/_util/type";
import styles from './FieldPin.module.less'


interface FieldPinProps {
    data: AnyObject;
    type: string;
}

const FieldPin: React.FC<FieldPinProps> = (props) => {
    const {
        // data,
        type,
    } = props;


    const { setNodeRef, attributes, listeners } = useDraggable({
        id: '123',
    })

    const confirmRemove = () => {
        console.log('confirmRemove')
    }

    return (
        <div 
            className={styles.pin} 
            ref={setNodeRef} 
            {...attributes} 
            {...listeners} 
        >
            <div className={styles.pinContent}>
                FieldPin
            </div>
            {
                type === 'SharedField' && (
                    <Popconfirm
                        placement="top"
                        title={'确定要移除该共享字段吗？'}
                        onConfirm={confirmRemove}
                        okText="是"
                        cancelText="否"
                    >
                        <Button
                            variant="outlined"
                            color="default"
                            size="small"
                            shape="circle"
                            className={styles.removeBtn}
                        >
                            <span className="fm fm-minus" />
                        </Button>
                    </Popconfirm>
                )
            }
        </div>
    )
}

export default FieldPin;