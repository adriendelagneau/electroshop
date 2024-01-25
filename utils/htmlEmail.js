export function html({ url, text }) {
    return `
    <div className='bg-red-600'>
    <div>link to
    <a href=${url}>${text}</a>
    </div>
    </div>
    `
}

