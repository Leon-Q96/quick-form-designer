// 字段类型
export type FieldType = 'base' | 'business' | 'custom';

export interface Widget {
    code: string; // 唯一code
    name: string; // 名称
    type: string; // 类型
    fieldType: FieldType; // 字段类型
    webSize: 0.5 | 1; // 移动端大小
    icon?: string; // 图标
}