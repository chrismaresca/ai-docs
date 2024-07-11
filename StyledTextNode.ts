import { TextNode, LexicalNode, SerializedTextNode } from 'lexical';

interface SerializedStyledTextNode extends SerializedTextNode {
  style: string;
}

class StyledTextNode extends TextNode {
  __style: string;

  constructor(text: string, style: string = '', key?: string) {
    super(text, key);
    this.__style = style;
  }

  static getType(): string {
    return 'styled-text';
  }

  static clone(node: StyledTextNode): StyledTextNode {
    return new StyledTextNode(node.__text, node.__style, node.__key);
  }

  setStyle(style: string): this {
    const self = this.getWritable();
    self.__style = style;
    return self;
  }

  getStyle(): string {
    const self = this.getLatest();
    return self.__style;
  }

  exportJSON(): SerializedStyledTextNode {
    return {
      ...super.exportJSON(),
      style: this.getStyle(),
    };
  }

  static importJSON(serializedNode: SerializedStyledTextNode): StyledTextNode {
    const node = $createStyledTextNode(serializedNode.text, serializedNode.style);
    node.setFormat(serializedNode.format);
    return node;
  }
}

export function $createStyledTextNode(text: string, style: string = ''): StyledTextNode {
  return new StyledTextNode(text, style);
}

export function $isStyledTextNode(node: LexicalNode | null): node is StyledTextNode {
  return node instanceof StyledTextNode;
}

export { StyledTextNode };
