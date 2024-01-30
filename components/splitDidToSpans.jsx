
// This function converts the content of a div element into spans, each containing a character or a space.
export const convertStringToSpans = (inputString) => {
  return inputString.split('').map((char, index) => (
    <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
  ));
}
 