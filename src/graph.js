/**
 * Graphs
 *
 * Can be directed and undirected
 * Directed: one way direction allowed between nodes.
 * Undirected: both ways directed between nodes.
 *
 * May have cycles (which is the different from Trees)
 *
 * Example: social network with friendships
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.nodes = [];
  }
  addNode(value) {
    const node = new Node(value);
    this.nodes.push(node);
  }
  removeNode(value) {
    this.nodes = this.nodes.filter((node) => node.value !== value);
    this.nodes.forEach((node) => {
      node.edges = node.edges.filter((edge) => edge.value !== value);
    });
  }
  getNode(value) {
    return this.nodes.find((node) => node.value === value);
  }
  addEdge(value1, value2) {
    const n1 = getNode(value1);
    const n2 = getNode(value2);
    n1.edges.push(n2);
    if (this.directed) {
      n2.edges.push(n1);
    }
    return 'Added'
  }
}
