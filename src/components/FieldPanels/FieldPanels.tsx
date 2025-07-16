import { useMemo } from 'react'
import styles from './FieldPanels.module.less'
import { Tabs } from 'antd'
import FieldList from "@/components/FieldList";

const FieldPanels = () => {

    const items = useMemo(() => {
        return [
            {
                key: '1',
                label: '基础组件',
                children: <FieldList />
            },
            {
                key: '2',
                label: '业务组件',
                children: <FieldList />
            },
            {
                key: '3',
                label: '自定义组件',
                children: <FieldList />
            }
        ]
    }, [])

    return (
        <div className={styles.container}>
            <Tabs items={items} />
        </div>
    )
}

export default FieldPanels