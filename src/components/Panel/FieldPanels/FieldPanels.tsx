import { useMemo } from 'react'
import styles from './FieldPanels.module.less'
import { Tabs } from 'antd'
import FieldList from "@/components/Panel/FieldList";
import useFieldStore from '@/store/FieldStore'

const FieldPanels = () => {
    const { baseFields, businessFields, customFields } = useFieldStore()

    const items = useMemo(() => {
        return [
            {
                key: '1',
                label: '基础组件',
                children: <FieldList fields={baseFields} type="base" />
            },
            {
                key: '2',
                label: '业务组件',
                children: <FieldList fields={businessFields} type="business" />
            },
            {
                key: '3',
                label: '自定义组件',
                children: <FieldList fields={customFields} type="custom" />
            }
        ]
    }, [baseFields, businessFields, customFields])

    return (
        <div className={styles.container}>
            <Tabs items={items} />
        </div>
    )
}

export default FieldPanels