import type { Widget } from '@/types/common'

const baseFields: Widget[] = [
    {
        code: '101',
        name: '单行文本',
        type: 'SingleTextInput',
        icon: 'fm-text',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '102',
        name: '多行文本',
        type: 'MultiTextInput',
        icon: 'fm-mtext',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '103',
        name: '数字',
        type: 'NumberInput',
        icon: 'fm-number',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '104',
        name: '金额',
        type: 'AmountInput',
        icon: 'fm-amount',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '105',
        name: '日期',
        type: 'DateTimeInput',
        icon: 'fm-date',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '107',
        name: '城市',
        type: 'CityInput',
        icon: 'fm-location1',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '113',
        name: '员工',
        type: 'StaffInput',
        icon: 'fm-staff',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '115',
        name: '选项',
        type: 'OptionInput',
        icon: 'fm-detail',
        fieldType: 'base',
        webSize: 0.5
    },
    // {
    //     code: '119',
    //     name: '选项(外部档案)',
    //     type: 'ExternalOptionInput',
    //     icon: 'fm-options',
    //     webSize: 0.5
    // },
    {
        code: '109',
        name: '说明文字',
        type: 'DescText',
        icon: 'fm-rich-text',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '116',
        name: '明细',
        type: 'TableInput',
        icon: 'fm-detail',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '111',
        name: '数据互联',
        type: 'AssociationInput',
        icon: 'fm-a-Jichengguanli-01',
        fieldType: 'base',
        webSize: 0.5
    },
    {
        code: '110',
        name: '分隔条',
        type: 'SplitSpace',
        icon: 'fm-line-between',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '121',
        name: '图片',
        type: 'ImageInput',
        icon: 'fm-photo',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '118',
        name: '附件',
        type: 'AttachInput',
        icon: 'fm-attachment1',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '122',
        name: '列表',
        type: 'MultiValueInput',
        icon: 'fm-form-icon-list',
        fieldType: 'base',
        webSize: 1
    },
    {
        code: '123',
        name: '超链接',
        type: 'LinkObjectInput',
        icon: 'fm-link',
        fieldType: 'base',
        webSize: 0.5
    },
];

export default baseFields;