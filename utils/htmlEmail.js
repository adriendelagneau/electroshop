export function html({ url, text }) {
    return `
    <div class='bg-red-600'>
    <div>link to
    <a href=${url}>${text}</a>
    </div>
    </div>
    `
}

