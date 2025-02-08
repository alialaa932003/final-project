let timeout: any;
export function debounce(func: Function, wait: number) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        func();
    }, wait);
}
