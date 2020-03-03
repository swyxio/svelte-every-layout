/**
 * Function to generate 'sanitized' Id.
 */
export const generateId = (...values: string[]) => values
    .map(v => (typeof v === 'string' ? CSS.escape(v) : String(v)))
    .join('-')
