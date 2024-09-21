export interface Item {
    id?: number
    title?: string
    description?: string
    reference?: string
}

export interface GridProps {
    data: Item[]
}