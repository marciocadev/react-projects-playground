import { Prism } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CSSProperties } from 'react';

// vscDarkPlus, vs, coldarkCold, dracula, ghcolors, materialDark, materialLight, materialOceanic,
// import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
const highlightLine = (lineNumber: number, markLines: number[], color: string = "#FFDB81"):
    React.HTMLProps<HTMLElement> => {

    // only works when showLineNumbers and wrapLines are both enabled
    const style: React.CSSProperties = { 
      display: "block",
      width: 'fit-content', // "auto",
      borderRadius: '1rem',
      paddingRight: '1rem'
    };
    if (markLines.includes(lineNumber)) {
        style.backgroundColor = color;
    }
    return { style };
}

export enum LanguageType {
  ts = 'typescript',
  py = 'python'
}

interface CodeSyntaxTSProps {
  language?: LanguageType;
  code: string;
  highlightLineColour?: string,
  highlightLines?: number[],
  showLineNumbers?: boolean,
  style?: CSSProperties,
}
export const CodeSyntaxTS = (props: CodeSyntaxTSProps) => {
  return (
    <Prism 
      language={ props.language? props.language : LanguageType.ts }
      style={ coldarkDark }
      showLineNumbers={ props.showLineNumbers }
      customStyle={ props.style ? props.style : {
                      borderRadius: '1rem', paddingBottom: '1.25rem',
                      paddingTop: '1.25rem', overflowX: 'auto', }}
      wrapLines={true}
      lineProps={
        props.highlightLines !== undefined ?
        (line: number) => highlightLine(
          line, 
          props.highlightLines!,
          props.highlightLineColour ? props.highlightLineColour : '#112f6d' //'#353535'
          ) :
        undefined
      }
      >
      {props.code}
    </Prism>
  );
}