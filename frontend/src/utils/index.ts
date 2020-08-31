export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function titleize(text: string): string {
  return `${text}`.split(' ').map(word => capitalize(word)).join(' ');
}

export default { capitalize, titleize }
