import { forwardRef } from "react";
import { Popconfirm, Button } from "antd";
import type { AnyObject } from "antd/es/_util/type";
import styles from './FieldPin.module.less'


export interface FieldPinProps {
    data: AnyObject;
    type: string;
    drapProps?: AnyObject;
}

const FieldPin = forwardRef<HTMLDivElement, FieldPinProps>((props, ref) => {
    const {
        // data,
        type,
        drapProps,
    } = props;

    const confirmRemove = () => {
        console.log('confirmRemove')
    }

    return (
        <div 
            className={styles.pin} 
            ref={ref}
            {...drapProps}
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
});

export default FieldPin;