// eslint-disable-next-line import/prefer-default-export
export class Node<K> {
  left: Node<K>;

  right: Node<K>;

  // eslint-disable-next-line no-useless-constructor,no-unused-vars,no-empty-function
  constructor(public key: K) {}

  toString() {
    return `${this.key}`;
  }
}
