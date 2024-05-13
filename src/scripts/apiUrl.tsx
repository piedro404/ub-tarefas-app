
interface pathProps {
    params?: string;
}

export const apiUrl = ({ params }: pathProps) => {
    const url = `https://ub-task-api.vercel.app${params}`

    return url
}
